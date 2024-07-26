<template>
    <div>
        <div class="header">
            <h3>
                <el-button type="primary" @click="Goback($route.query.result_id)" class="detailed" icon="el-icon-back">
                    返回
                </el-button>
                主机结果详情
            </h3>
        </div>
        <div class="wrapper">
            <el-descriptions column=2 border>
                <el-descriptions-item>
                    <span slot="label" class="fontClass">主机IP</span>
                    <div class="fontClass">
                        {{ Data[$route.query.result_id - 1][$route.query.host_id - 1].host_name }}
                    </div>
                </el-descriptions-item>
                <el-descriptions-item>
                    <span slot="label" class="fontClass">ID</span>
                    <div class="fontClass">
                        1345650909aeec0
                    </div>
                </el-descriptions-item>

                <el-descriptions-item :contentStyle="{ 'width': '500px' }">
                    <span slot="label" class="fontClass">厂商</span>
                    <div class="fontClass">
                        {{ Data[$route.query.result_id - 1][$route.query.host_id - 1].host_OEM }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">型号</span>
                    <div class="fontClass">
                        {{ Data[$route.query.result_id - 1][$route.query.host_id - 1].host_model }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">操作系统</span>
                    <div class="fontClass">
                        {{ Data[$route.query.result_id - 1][$route.query.host_id - 1].host_OS }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">开放端口</span>
                    <div class="fontClass">
                        {{ Data[$route.query.result_id - 1][$route.query.host_id - 1].host_open_ports }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">高危漏洞</span>
                    <div class="fontClass">
                        {{ Data[$route.query.result_id - 1][$route.query.host_id - 1].host_hr_vul }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">中危漏洞</span>
                    <div class="fontClass">
                        {{ Data[$route.query.result_id - 1][$route.query.host_id - 1].host_mr_vul }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">低危漏洞</span>
                    <div class="fontClass">
                        {{ Data[$route.query.result_id - 1][$route.query.host_id - 1].host_lr_vul }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">状态</span>
                    <div class="fontClass">
                        {{ Data[$route.query.result_id - 1].result_status }}
                    </div>
                </el-descriptions-item>
            </el-descriptions>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        Goback(val) {
            this.$router.push(
                {
                    path: '/result/resultdetail',
                    query: { result_id: val }
                })
        },
    },
    props: {
        hostData: {
            type: Array,
            default: () => [],
        }
    },
    data() {
        return {
            Data: this.hostData,
        }
    },
    created() {
        console.log('create host!!!!!!!!');
        console.log(this.hostData);
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