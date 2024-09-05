<template>
    <div>
        <div class="header">
            <h3>
                <el-button type="text" @click="Goback($route.query.name,$route.query.index_home)" class="detailed">
                    <h3>
                        ← 返回
                    </h3>
                </el-button>
                主机结果详情
            </h3>
        </div>
        <div class="wrapper">
            <el-descriptions column=2 border>
                <el-descriptions-item>
                    <span slot="label" class="fontClass">主机IP</span>
                    <div class="fontClass">
                        {{ Data[$route.query.index].ip }}
                    </div>
                </el-descriptions-item>
                <el-descriptions-item>
                    <span slot="label" class="fontClass">ID</span>
                    <div class="fontClass">
                        {{ this.id[$route.query.index] }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item :contentStyle="{ 'width': '500px' }">
                    <span slot="label" class="fontClass">厂商</span>
                    <div class="fontClass">
                        {{ Data[$route.query.index].hostnames[0].name }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">型号</span>
                    <div class="fontClass">
                        {{ Data[$route.query.index].hostnames[0].type }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">操作系统</span>
                    <div class="fontClass">
                        {{ Data[$route.query.index].os.name }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">开放端口</span>
                    <div class="fontClass">
                        {{ Data[$route.query.index].ports_opened.length }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">高危漏洞</span>
                    <div class="fontClass">
                        {{ Data[$route.query.index].vmatch_vuls.length }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">中危漏洞</span>
                    <div class="fontClass">
                        {{ Data[$route.query.index].vmatch_vuls.length }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">低危漏洞</span>
                    <div class="fontClass">
                        {{ Data[$route.query.index].vmatch_vuls.length }}
                    </div>
                </el-descriptions-item>
            </el-descriptions>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        Goback(val1, val2) {
            this.$router.push(
                {
                    path: '/result/resultdetail',
                    query: { 
                        name: val1,
                        index : val2
                     }
                })
        },
        async hostdetail(){
            let name = this.$route.query.name;
            let res = await this.$api.GetResult({ name });
            this.id = res.data.id;
            this.Data = res.data.data;
            console.log('主机', this.Data)
        }
    },
    data() {
        return {
            Data: [],
            id : [],
        }
    },
    created() {
        console.log('create host!!!!!!!!');
        this.hostdetail();
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