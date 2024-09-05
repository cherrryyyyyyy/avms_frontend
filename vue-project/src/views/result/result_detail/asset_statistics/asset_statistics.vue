<template>
    <div>
        <div class="header">
            <h3>
                <el-button type="text" @click="Goback" class="detailed">
                    <h3>
                        ← 返回
                    </h3>
                </el-button>
                任务结果
            </h3>
        </div>
        <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router background-color="#409eff"
            text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="/result/resultdetail/taskoverview">任务概况</el-menu-item>
            <el-menu-item index="/result/resultdetail/assetstatistics">目标信息</el-menu-item>
            <el-menu-item index="/result/resultdetail/hostvulnerability">主机漏洞</el-menu-item>
        </el-menu>
        <div class="wrapper">
            <el-row>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <template>
                            <el-table :data="hostData" height=100% border highlight-current-row
                                @current-change="handleCurrentChange" style="width: 100%">
                                <el-table-column prop="ip" label="主机" width="210">
                                </el-table-column>
                                <el-table-column prop="vmatch_vuls.length" label="漏洞数量" width="205">
                                </el-table-column>
                            </el-table>
                        </template>
                    </div>
                </el-col>
                <el-col :span="18">
                    <div class="grid-content bg-purple-light">
                        <h2>
                            {{ this.hostSelectData.ip }}
                        </h2>


                        <el-descriptions column=1 border labelStyle="width: 156px">

                            <el-descriptions-item labelStyle="width: 156px">
                                <span slot="label" class="fontClass">主机名</span>
                                <div class="fontClass">
                                    <el-card class="box-card">
                                        <div v-for="host in this.hostSelectData.hostnames" :key="host"
                                            class="text item">
                                            {{ host.name }}
                                        </div>
                                    </el-card>
                                </div>
                            </el-descriptions-item>

                            <el-descriptions-item>
                                <span slot="label" class="fontClass">mac</span>
                                <div class="fontClass">
                                    {{ this.hostSelectData.mac }}
                                </div>
                            </el-descriptions-item>

                            <el-descriptions-item labelStyle="min-width:156px">
                                <span slot="label" class="fontClass">操作系统</span>
                                <div class="fontClass">
                                    {{ this.hostSelectData.os.name }}
                                </div>
                            </el-descriptions-item>

                            <el-descriptions-item labelStyle="width: 156px">
                                <span slot="label" class="fontClass">端口</span>
                                <div class="fontClass">
                                    <el-card class="box-card">
                                        <div v-for="port in this.hostSelectData.ports_opened" :key="port"
                                            class="text item">
                                            {{ port.port_id }}
                                        </div>
                                    </el-card>
                                </div>
                            </el-descriptions-item>


                            <el-descriptions-item labelStyle="width: 156px">
                                <span slot="label" class="fontClass">端口详细信息</span>
                                <div class="fontClass">
                                    <el-table :data="this.hostSelectData.ports_detail" height=100% border
                                        highlight-current-row style="width: 100%">
                                        <el-table-column prop="port_id" label="端口号" show-overflow-tooltip="true"
                                            >
                                        </el-table-column>
                                        <el-table-column prop="banners" label="服务名称" show-overflow-tooltip="true" >
                                            <template slot-scope="scope">
                                               {{ Object.keys(scope.row.banners)[0] }} 
                                            </template>
                                        </el-table-column>
                                        <el-table-column prop="value.summary" label="服务版本" show-overflow-tooltip="true">
                                            <template slot-scope="scope">
                                                {{scope.row.banners[Object.keys(scope.row.banners)[0]].version}}
                                             </template>
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </el-descriptions-item>

                        </el-descriptions>

                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
//import Pagination from '@/component/pagination/page-tabs.vue'
export default {
    data() {
        return {
            hostData: this.hostD,
            hostSelectData: [],
        }
    },
    props: {
        hostD: {
            type: Array,
            default: () => [],
        }
    },
    methods: {
        Goback() {
            this.$router.push('/result/index')
        },
        handleCurrentChange(val) {
            this.hostSelectData = val;
            console.log(this.hostSelectData);
        }
    },
    created() {
        console.log('chuang!!', this.hostData);
        this.hostSelectData = this.hostData[0];
    }
}
</script>

<style lang="less" scoped>
.header {
    height: 55px;
    background: #fff;
    border-bottom: 2px solid black;
    display: flex;
    align-items: center;
  
  }

.wrapper_left {
    padding: 10px;

    height: auto;
}

.wrapper {
    padding: 10px;
}

.wrapper_right {
    top: 0;
    padding-left: 400px;
}

.fontClass {
    font-size: 20px;
    font-family: Microsoft Yahei;
}
</style>