<template>
    <div>
        <div class="header">
            <h3>
                <el-button type="primary" @click="Goback" class="detailed" icon="el-icon-back">
                    返回
                </el-button>
                任务结果
            </h3>
        </div>
    
        <div class="wrapper">
            <el-descriptions column = 2 border>
                <el-descriptions-item>
                    <span slot="label" class="fontClass">名称</span>
                    <div class="fontClass">
                    {{Data[$route.query.result_id-1].result_task_name}}
                    </div>
                </el-descriptions-item>
                <el-descriptions-item>
                    <span slot="label" class="fontClass">ID</span>
                    <div class="fontClass">
                        1345650909aeec0
                    </div>
                </el-descriptions-item>

                <el-descriptions-item :contentStyle="{'width' : '500px'}">
                    <span slot="label" class="fontClass">启动时间</span>
                    <div class="fontClass">
                    {{Data[$route.query.result_id-1].result_start_time}}
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">任务时长</span>
                    <div class="fontClass">
                        
                    </div>
                </el-descriptions-item>

                <el-descriptions-item>
                    <span slot="label" class="fontClass">状态</span>
                    <div class="fontClass">
                    {{Data[$route.query.result_id-1].result_status}}
                    </div>
                </el-descriptions-item>
            </el-descriptions>

            <el-header></el-header>
            <el-header></el-header>
            <el-table stripe=true
                          :data="hostD[$route.query.result_id-1]"
                          height=480
                          border
                          style="width: 100%">
                          <el-table-column
                            prop="host_name"
                            label="主机"
                            width="250"
                            align="center"
                            show-overflow-tooltip="true">
                          </el-table-column>
                          <el-table-column
                            prop="host_OEM"
                            label="厂商"
                            width="250"
                            align="center"
                            show-overflow-tooltip="true">
                          </el-table-column>
                          <el-table-column
                            prop="host_model"
                            label="型号"
                            width="250"
                            align="center"
                            show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                            prop="host_OS"
                            label="操作系统"
                            width="200"
                            align="center"
                            show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                            prop="host_open_ports"
                            label="开放端口"
                            width="150"
                            align="center"
                            show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                            prop="host_hr_vul"
                            label="高危漏洞"
                            width="150"
                            align="center"
                            show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                            prop="host_mr_vul"
                            label="中危漏洞"
                            width="150"
                            align="center"
                            show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column
                            prop="host_lr_vul"
                            label="低危漏洞"
                            width="150"
                            align="center"
                            show-overflow-tooltip="true">
                        </el-table-column>
                        <el-table-column label="操作" align="center">
                            <!--使用template拿取整行的数据 scope.$index 当前行索引号， scope.row 当前行内容-->
                            <template slot-scope="scope">
                                <!--编辑功能待实现-->
                                <el-button type="primary" size="mini" icon="el-icon-edit"
                                    @click="HostDetail(scope.$index, scope.row, $route.query.result_id)">详情</el-button>
                            </template>
                        </el-table-column>
                        </el-table>
                        <div class="pagination">
                            <Pagination :total="hostD[$route.query.result_id-1].length" @CurrentChange="CurrentChange"></Pagination>
                        </div>
        </div>
    </div>
    </template>
      
    <script>
    import Pagination from '@/component/pagination/page-tabs.vue'
    export default {
        components: {
        Pagination
    },
        methods:{
        CurrentChange(val) {
            console.log('頁嗎', val);
            this.hostList(val);
        },
        async hostList(page) {
            this.Data = this.tableData.slice((page-1)*8,page*8);
            console.log(page);
        },
        Goback(){
            this.$router.push('/result/index')
        },
        HostDetail(index, row ,val){
          console.log(index, row);
          this.showdetail(row.host_id, val)
        },
        showdetail(val1,val2){
          this.$router.push(
            { path:'/result/hostsdetail', 
            query:{ host_id : val1,
                result_id : val2
            } 
          })
        }
    },
    props: {
            tableData:{
            type : Array,
            default: ()=>[],
        },
            hostData:{
            type : Array,
            default: ()=>[],
        }
        },
        data(){
        return{
            Data: this.tableData,
            hostD : this.hostData,
        }
    },
    created(){
        console.log(this.hostD);
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
    </style>