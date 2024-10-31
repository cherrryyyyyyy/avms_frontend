<template>
    <div>
        <div class="header">
            <h3>
                <el-button type="text" @click="Goback" class="detailed">
                    <h3>
                        ← 返回
                    </h3>
                </el-button>
                任务详情
            </h3>
        </div>

        <div class="wrapper">
            <el-descriptions column=2 border>
                <el-descriptions-item>
                    <span slot="label" class="fontClass">名称</span>
                    <div class="fontClass">
                        {{ Data.name }}
                    </div>
                </el-descriptions-item>
                <el-descriptions-item>
                    <span slot="label" class="fontClass">ID</span>
                    <div class="fontClass">
                        {{ Data.id }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item :contentStyle="{ 'width': '1000px' }">
                    <span slot="label" class="fontClass">描述</span>
                    <div class="fontClass">
                        {{ Data.description }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">创建时间</span>
                    <div class="fontClass">
                        {{ Data.create_time }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">目标</span>
                    <div class="fontClass">
                        {{ Data.target }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">上次修改时间</span>
                    <div class="fontClass">
                        {{ Data.last_modifid_time }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">扫描次序</span>
                    <div class="fontClass">
                        {{ Data.type }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">活跃扫描方法</span>
                    <div class="fontClass">
                        {{ Data.alive_scan_method }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">类型</span>
                    <div class="fontClass">
                        {{ Data.type }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">调度时间</span>
                    <div class="fontClass">
                        {{ Data.scheduling_time }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">任务状态</span>
                    <div class="fontClass">
                        {{ Data.status }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">任务进度</span>
                    <div class="fontClass">
                        <template>
                            <el-progress :text-inside="true" :stroke-width="26"
                    :percentage="Data.status == 1 ? 0 : Data.status == 2 ? 25 :Data.status == 3 ? 60 : Data.status == 4 ? 100 : 0"></el-progress>

                        </template>
                    </div>
                </el-descriptions-item>

            </el-descriptions>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        Goback() {
            this.$router.push('/task/index')
        },
    },
    props: {
        tableData: {
            type: Array,
            default: () => [],
        }
    },
    data() {
        return {
            Data: this.$route.query.index,
        }
    },
    created() {
        console.log(this.Data);
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