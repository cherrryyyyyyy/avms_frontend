<template>
    <div>
        <div class="header">
            <h3>
                <el-button type="primary" @click="Goback" class="detailed" icon="el-icon-back">
                    返回
                </el-button>
                目标详情
            </h3>
            
        </div>
    
        <div class="wrapper">
            <!--<h3>{{$route.query.target_id}}</h3>{{Data[$route.query.target_id].name}}-->
            <el-descriptions column = 2 border>
                <el-descriptions-item>
                    <span slot="label" class="fontClass">名称</span>
                    <div class="fontClass">
                    {{Data[$route.query.target_id-1].target_name}}
                    </div>
                </el-descriptions-item>
                <el-descriptions-item>
                    <span slot="label" class="fontClass">ID</span>
                    <div class="fontClass">
                    
                    </div>
                </el-descriptions-item>

                <el-descriptions-item :contentStyle="{'width' : '1000px'}">
                    <span slot="label" class="fontClass">描述</span>
                    <div class="fontClass">
                    {{Data[$route.query.target_id-1].target_describe}}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">创建时间</span>
                    <div class="fontClass">
                    {{Data[$route.query.target_id-1].create_date}}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">目标范围</span>
                    <div class="fontClass">
                    {{Data[$route.query.target_id-1].target_range}}
                    </div>
                </el-descriptions-item>
                
                <el-descriptions-item>
                    <span slot="label" class="fontClass">上次修改时间</span>
                    <div class="fontClass">
                    {{Data[$route.query.target_id-1].last_change_date}}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">目标数量</span>
                    <div class="fontClass">
                    
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">端口范围</span>
                    <div class="fontClass">
                        {{Data[$route.query.target_id-1].port_range}}
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
        Goback(){
            this.$router.push('/target/index')
        }
    },
    props: {
      tableData:{
        type : Array,
        default: ()=>[],
      }
    },
    data(){
        return{
            Data: this.tableData,
        }
    }
}
</script>

<style lang="less" scoped>
.header{
    height:55px;
    background: #fff;
    border-bottom: 2px solid black;
}
.wrapper{
  padding: 10px;
}
.fontClass{
    font-size:20px;
    font-family: Microsoft Yahei;
    }
.fontClasstitle{
        font-size:30px;
        font-family: Microsoft Yahei;
        }
</style>