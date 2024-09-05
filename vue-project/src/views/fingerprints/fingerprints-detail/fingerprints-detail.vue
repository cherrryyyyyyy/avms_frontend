<template>
    <div>
        <div class="header">
            <h3>
                <el-button type="text" @click="Goback" class="detailed">
                    <h3>
                        ← 返回
                    </h3>
                </el-button>
                指纹资源详情
            </h3>
        </div>

        <div class="wrapper">
            <el-header>
                <el-row>
                    <el-descriptions column=1 border>
                        <el-descriptions-item labelStyle="width: 125px">
                            <span slot="label" class="fontClass">指纹库名称</span>
                            <div class="fontClass">
                               {{ this.$route.query.name }}
                            </div>
                        </el-descriptions-item>
                    </el-descriptions>
                </el-row>
            </el-header>
            <el-input type="textarea" :rows="35" v-model=this.data>
            </el-input>
        </div>
    </div>
</template>

<script>
import Base64 from 'base-64'
import vkbeautify from 'vkbeautify'
export default {
    data() {
        return {
            data: [],
            index: [],
            xml_show: []
        }
    },
    methods: {
        Goback() {
            this.$router.push('/fingerprints/index')
        },
        detail_init() {
            this.id = this.$route.query.index;
            this.get_data(this.id);
        },
        async get_data(id) {
            let res = await this.$api.GetFPSFile({ id });
            console.log(res);
            const ddd = res.data.data;
            let dd = Base64.decode(ddd);
            this.data = dd;
            this.xml_show = vkbeautify.xml(this.data);
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
