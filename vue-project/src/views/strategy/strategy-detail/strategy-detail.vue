<template>
    <div>
        <div class="header">
            <h3>
                <el-button type="text" @click="Goback" class="detailed">
                    <h3>
                        ← 返回
                    </h3>
                </el-button>
                    端口扫描策略详情
            </h3>
        </div>

        <div class="wrapper">
            <el-descriptions column=1 border>
                <el-descriptions-item labelStyle="width: 125px">
                    <span slot="label" class="fontClass">名称</span>
                    <div class="fontClass">
                        {{ data.name }}
                    </div>
                </el-descriptions-item>
                <el-descriptions-item>
                    <span slot="label" class="fontClass">详情</span>
                    <div class="fontClass">
                        {{ data.description }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item :contentStyle="{ 'width': '1000px' }">
                    <span slot="label" class="fontClass">tcp端口</span>
                    <div class="fontClass">
                        {{ data.tcp_ports }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item :contentStyle="{ 'width': '1000px' }">
                    <span slot="label" class="fontClass">tcp端口数量</span>
                    <div class="fontClass">
                        {{ data.tcp_ports_cnt }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">udp端口</span>
                    <div class="fontClass">
                        {{ data.udp_ports }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item :contentStyle="{ 'width': '1000px' }">
                    <span slot="label" class="fontClass">udp端口数量</span>
                    <div class="fontClass">
                        {{ data.udp_ports_cnt }}
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
            this.$router.push('/strategy/index')
        },
        detail_init(){
            this.data = this.$route.query.index;
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

.fontClasstitle {
    font-size: 30px;
    font-family: Microsoft Yahei;
}
</style>