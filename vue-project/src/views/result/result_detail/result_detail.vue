<template>
    <div>
        <div class="header">
            <h3>
                <el-button type="primary" @click="Goback" class="detailed" icon="el-icon-back">
                    返回
                </el-button>
                任务结果
            </h3>
        </div>

        <div class="wrapper">
            <el-descriptions column=2 border>
                <el-descriptions-item>
                    <span slot="label" class="fontClass">名称</span>
                    <div class="fontClass">
                        {{ Data[$route.query.index].name }}
                    </div>
                </el-descriptions-item>
                <el-descriptions-item>
                    <span slot="label" class="fontClass">ID</span>
                    <div class="fontClass">
                        {{this.id}}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item :contentStyle="{ 'width': '500px' }">
                    <span slot="label" class="fontClass">启动时间</span>
                    <div class="fontClass">
                        {{ Data[$route.query.index].start_time }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">任务时长</span>
                    <div class="fontClass">
                        <div v-if="Data[$route.query.index].finished">
                            {{ timeDifferenceInMinutes }} min
                        </div>
                        <div v-else>
                            未完成
                        </div>
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">状态</span>
                    <div class="fontClass">
                        <div v-if="Data[$route.query.index].finished">
                            完成
                        </div>
                        <div v-else>
                            未完成
                        </div>
                    </div>
                </el-descriptions-item>
            </el-descriptions>

            <el-header></el-header>
            <el-header></el-header>
            <el-table stripe=true :data="hostDD" height=480 border style="width: 100%">
                <el-table-column prop="ip" label="主机" width="250" align="center" show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column prop="vendor" label="厂商" width="250" align="center" show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column prop="type" label="型号" width="250" align="center" show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column prop="os" label="操作系统" width="200" align="center" show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column prop="ports_open" label="开放端口" width="150" align="center" show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column prop="hvul" label="高危漏洞" width="150" align="center" show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column prop="mvul" label="中危漏洞" width="150" align="center" show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column prop="lvul" label="低危漏洞" width="150" align="center" show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <!--使用template拿取整行的数据 scope.$index 当前行索引号， scope.row 当前行内容-->
                    <template slot-scope="scope">
                        <!--编辑功能待实现-->
                        <el-button type="primary" size="mini" icon="el-icon-edit"
                            @click="HostDetail(scope.$index, scope.row, $route.query.name)">详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <Pagination :total="total" @CurrentChange="CurrentChange"></Pagination>
            </div>
        </div>
    </div>
</template>

<script>
import Pagination from '@/component/pagination/page-tabs.vue'
export default {
    components: {
        Pagination
    },
    data() {
        return {
            Data: [],
            host: [],
            hostD: {},
            name: '',
            total: 0,
            hostDD: [],
            task_time: 0,
            id : '',
            page : 1
        }
    },
    computed: {
        timeDifferenceInMinutes() {
      const diff = this.getTimeDifference(this.Data[this.$route.query.index].start_time, this.Data[this.$route.query.index].finished_time);
      return diff / 1000 / 60; // 转换为分钟
    }
    }
    ,
    methods: {
        CurrentChange(val) {
            console.log('頁嗎', val);
            this.hostList(val);
        },
        getTimeDifference(time1, time2) {
      const date1 = new Date(time1);
      const date2 = new Date(time2);
      return Math.abs(date2 - date1); // 计算时间差（毫秒）
    },
        async hostList(page) {
            let tasks = await this.$api.GetTask();
            this.Data = tasks.data.data;
            this.id = tasks.data.id;
            console.log('目标', tasks.data.data, page)
            let name = this.$route.query.name;
            let res = await this.$api.GetResult({ name });
            for (let host of res.data.data) {
                this.host.push(host);
            }
            console.log(this.host, this.hostDD);
            for (let host of this.host) {
                this.hostD = {
                    ip: '',
                    vendor: '',
                    type: '',
                    os: '',
                    ports_open: 0,
                    hvul: 0,
                    mvul: 0,
                    lvul: 0
                }
                console.log('???', host)
                this.hostD.ip = host.ip;
                this.hostD.vendor = host.hostnames[0].name;
                this.hostD.type = host.hostnames[0].type;
                this.hostD.os = host.os.name;
                this.hostD.ports_open = host.ports_opened.length;
                this.hostD.hvul = host.vmatch_vuls.length;
                this.hostDD.push(this.hostD);
                console.log('!!!', this.hostDD)
            }
            this.hostDD = this.hostDD.slice((page - 1) * 7, page * 7);
            console.log('难玩', this.hostDD, this.Data)
        },
        Goback() {
            this.$router.push('/result/index')
        },
        HostDetail(index, row, val) {
            console.log(index, row);
            index += (this.page - 1) * 7;
            this.showdetail(index, val, this.$route.query.index)
        },
        showdetail(val1, val2, val3) {
            this.$router.push(
                {
                    path: '/result/hostsdetail',
                    query: {
                        index : val1,
                        name: val2,
                        index_home : val3
                    }
                })
        }
    },
    created() {
        this.CurrentChange(1)
    }
}
</script>

<style lang="less" scoped>
.header {
    height: 55px;
    background: #fff;
    border-bottom: 2px solid black;
}

.wrapper {
    padding: 10px;
}

.fontClass {
    font-size: 20px;
    font-family: Microsoft Yahei;
}
</style>