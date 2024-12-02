<template>
    <div>
        <div class="header">
            <h3>
                <el-button type="text" @click="Goback" class="detailed">
                    <h3>
                        ← 返回
                    </h3>
                </el-button>
                目标详情
            </h3>

        </div>

        <div class="wrapper">
            <!--<h3>{{$route.query.target_id}}</h3>{{Data[$route.query.target_id].name}}-->
            <el-descriptions column=2 border>
                <el-descriptions-item>
                    <span slot="label" class="fontClass">名称</span>
                    <div class="fontClass">
                        {{ this.Data.name }}
                    </div>
                </el-descriptions-item>
                <el-descriptions-item>
                    <span slot="label" class="fontClass">ID</span>
                    <div class="fontClass">
                            {{ this.Data._id }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item :contentStyle="{ 'width': '1000px' }">
                    <span slot="label" class="fontClass">描述</span>
                    <div class="fontClass">
                        {{ this.Data.description }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">创建时间</span>
                    <div class="fontClass">
                        {{ this.Data.create_time }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">目标范围</span>
                    <div class="fontClass">
                        {{ this.Data.hosts }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">上次修改时间</span>
                    <div class="fontClass">
                        {{ this.Data.last_modify_time }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">目标数量</span>
                    <div class="fontClass">
                        {{ this.Data.hosts_total }}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">端口范围</span>
                    <div class="fontClass">
                        {{ this.Data.port_list }}
                    </div>
                </el-descriptions-item>

            </el-descriptions>
        </div>
    </div>
</template>

<script>

export default {
    methods:
    {
        Goback() {
            this.$router.push('/target/index')
        },
        async gettarget() {
            //let res = await this.$api.GetTarget();
            
            this.Data = this.$route.query.index;
            console.log(this.Data);
            //this.id = res.data.id;
        }
    },
    props: {
        tableData: {
            type: Array,
            default: () => [],
        }
    },
    data() {
        return {
            Data: this.tableData,
            id : []
        }
    },
    created() {
        this.gettarget();
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

.fontClasstitle {
    font-size: 30px;
    font-family: Microsoft Yahei;
}
</style>