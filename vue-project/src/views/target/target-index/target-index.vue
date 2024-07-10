<template>
    <div>
        <div class="header">
            <h3>
                目标（{{total}}个）
            </h3>
        </div>
    
        <div class="wrapper">
            <el-container>
                <el-header>
                    <el-row>
                        <el-button type="primary" @click="CreateNewTarget" class="detailed">
                            新增目标
                        </el-button>
                        <el-select v-model="value" placeholder="排序">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                    </el-row>
                </el-header>
                <el-main>
                    <template>
                        <el-table stripe=true
                          :data="Data"
                          height=590
                          border
                          style="width: 100%">
                          <el-table-column
                            prop="target_name"
                            label="目标名称"
                            width="180"
                            align="center">
                          </el-table-column>
                          <el-table-column
                            prop="target_describe"
                            label="目标描述"
                            width="380"
                            align="center"
                            show-overflow-tooltip="true">
                          </el-table-column>
                          <el-table-column
                            prop="target_range"
                            label="主机范围"
                            width="180"
                            align="center"
                            show-overflow-tooltip="true">
                          </el-table-column>
                          <el-table-column
                            prop="port_range"
                            label="端口范围"
                            width="180"
                            align="center"
                            show-overflow-tooltip="true">
                          </el-table-column>
                          <el-table-column
                            prop="create_date"
                            label="创建时间"
                            width="180"
                            align="center">
                        </el-table-column>
                        <el-table-column
                            prop="last_change_date"
                            label="最近修改时间"
                            width="180"
                            align="center">
                        </el-table-column>
                        <el-table-column label="操作" align="center">
                            <!--使用template拿取整行的数据 scope.$index 当前行索引号， scope.row 当前行内容-->
                            <template slot-scope="scope">
                                <!--编辑功能待实现-->
                                <el-button type="primary" size="mini" icon="el-icon-edit"
                                    @click="TargetDetail(scope.$index, scope.row)">详情</el-button>

                                <el-button type="primary" size="mini" icon="el-icon-edit"
                                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        
                                <el-button slot="reference" size="mini" type="danger" icon="el-icon-delete"
                                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        
                            </template>
                        </el-table-column>
                        </el-table>
                      </template>
                    
                </el-main>
              </el-container>
              <div class="pagination">
                <Pagination :total="total" @CurrentChange="CurrentChange"></Pagination>
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
    props: {
      tableData:{
        type : Array,
        default: ()=>[],
      }
    },
    data() {
      return {
    options: [{
          value: '选项1',
          label: '按目标名称排序'
        }, {
          value: '选项2',
          label: '按主机范围排序'
        }, {
          value: '选项3',
          label: '按创建时间排序'
        }, {
          value: '选项4',
          label: '按修改时间排序'
        }],
        total : 20,
        Data: this.tableData,
      }
    },
    methods:{
        CreateNewTarget(){
            this.$router.push('/target/addtarget')
        },
        CurrentChange(val) {
            console.log('頁嗎', val);
            this.targetList(val);
        },
        async targetList(page) {
            this.Data = this.tableData.slice((page-1)*10,page*10);
            console.log(page);
        },
        TargetDetail(index, row){
          console.log(index, row);
          this.showdetail(row.target_id)
        },
        showdetail(val){
          this.$router.push(
            { path:'/target/targetdetail', 
            query:{ target_id : val} 
          })
        }
    },
    created() {
        this.targetList(1);
        this.total = this.tableData.length;
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
</style>