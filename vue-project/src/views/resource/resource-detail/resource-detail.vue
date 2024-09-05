<template>
    <div>
        <div class="header">
            <h3>
                <el-button type="text" @click="Goback" class="detailed">
                    <h3>
                        ← 返回
                    </h3>
                </el-button>
                    漏洞资源详情
            </h3>
        </div>

        <div class="wrapper">
            <el-descriptions column=1 border>
                <el-descriptions-item labelStyle="width: 125px">
                    <span slot="label" class="fontClass">名称</span>
                    <div class="fontClass">
                        {{ data.id }}
                    </div>
                </el-descriptions-item>
                <el-descriptions-item>
                    <span slot="label" class="fontClass">严重级别</span>
                    <div class="fontClass">
                        {{ data.impactScore }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item :contentStyle="{ 'width': '1000px' }">
                    <span slot="label" class="fontClass">描述</span>
                    <div class="fontClass">
                        {{ data.summary }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">CVSS评分</span>
                    <div class="fontClass">
                        {{ data.cvss }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">披露时间</span>
                    <div class="fontClass">
                        {{ data.published }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">发布者</span>
                    <div class="fontClass">
                        {{ data.cvssSource }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item contentStyle="">
                    <span slot="label" class="fontClass">参考链接</span>
                    <div class="fontClass">
                        <a :href="reference_url">{{ reference_url }}</a>
                    </div>
                </el-descriptions-item>
            </el-descriptions>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data : [],
            reference_url : ''
        }
    },
    methods: {
        Goback() {
            this.$router.push('/resource/index')
        },
        detail_init(){
            this.data = this.$route.query.index;
            this.reference_url = this.$route.query.index.references[0];
        }
    },
    created() {
        this.detail_init();
    }
};
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
