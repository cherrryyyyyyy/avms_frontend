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
            <el-descriptions column=2 border>
                <el-descriptions-item labelStyle="width: 150px">
                    <span slot="label" class="fontClass">扫描目标数</span>
                    <div class="fontClass">
                        {{ this.taskData.finished_hosts }}
                    </div>
                </el-descriptions-item>
                <el-descriptions-item labelStyle="width: 150px">
                    <span slot="label" class="fontClass">任务状态</span>
                    <div class="fontClass">
                        {{ this.taskData.status }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">存活目标列表</span>
                    <div class="fontClass">
                        <el-card class="box-card">
                            <div v-for="host in this.hostData" :key="host" class="text item">
                                {{ host.ip }}
                            </div>
                        </el-card>
                    </div>
                </el-descriptions-item>

                <el-descriptions-item labelStyle="width: 125px">
                    <span slot="label" class="fontClass">存活目标数</span>
                    <div class="fontClass">
                        {{ this.hostData.length }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item labelStyle="width: 125px">
                    <span slot="label" class="fontClass">存活探测方式</span>
                    <div class="fontClass">
                        {{ this.alive_scan_methods[this.taskData.alive_scan_method].label }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item labelStyle="width: 125px">
                    <span slot="label" class="fontClass">调度类型</span>
                    <div class="fontClass">
                        {{ this.taskData.type }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item labelStyle="width: 125px">
                    <span slot="label" class="fontClass">开始时间</span>
                    <div class="fontClass">
                        {{ this.taskData.start_time }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item labelStyle="width: 125px">
                    <span slot="label" class="fontClass">结束时间</span>
                    <div class="fontClass">
                        {{ this.taskData.finished_time }}
                    </div>
                </el-descriptions-item>
            </el-descriptions>

            <!--漏洞风险分布图表-->
        </div>
    </div>
</template>

<script>
//import Pagination from '@/component/pagination/page-tabs.vue'
export default {
    data() {
        return {
            hostData: this.hostD,
            taskData: this.taskD,
            alive_scan_methods: [],
        }
    },
    props: {
        hostD: {
            type: Array,
            default: () => [],
        },
        taskD: {
            type: Array,
            default: () => [],
        }
    },
    methods: {
        Goback() {
            this.$router.push('/result/index')
        },
        async getscanmethod() {
            let res = await this.$api.GetActiveMethods();
            console.log(res);
            let data2 = res.data.data;
            data2.forEach(
                data => {
                    this.alive_scan_methods.push({ label: data.name, value1: data.seq ,value2: data.parameter});
                }
            );
        }
    },
    created() {
        this.getscanmethod();
        console.log('chuang!!', this.hostData, this.taskData,this.alive_scan_methods);
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

.wrapper {
    padding: 10px;
}

.fontClass {
    font-size: 20px;
    font-family: Microsoft Yahei;
}
</style>