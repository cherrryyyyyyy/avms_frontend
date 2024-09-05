<template>
  <div>
    <div class="header">
      <h3>
        任务({{ total }}个)
      </h3>
    </div>

    <div class="wrapper">
      <el-container>
        <el-header>
          <el-row style="text-align: right">
            <el-button type="primary" @click="CreateNewTask" class="detailed">
              新增任务
            </el-button>
            <el-select v-model="value" placeholder="排序" style="padding : 20px">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-row>
        </el-header>
        <el-main>
          <template>
            <el-table stripe=true :data="Data" height=590 border style="width: 100%" :key="itemKey">
              <el-table-column prop="name" label="任务名称" width="150" align="center" show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="description" label="任务描述" width="200" align="center"
                show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="target" label="任务目标" width="120" align="center" show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="alive_scan_method" label="活跃扫描方法" width="110" align="center"
                show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="type" label="任务类型" width="130" align="center" show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="schedule_time" label="调度时间" width="120" align="center"
                show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="create_time" label="创建时间" width="120" align="center" show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="last_modifid_time" label="最近修改时间" width="120" align="center"
                show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="status" label="任务状态" width="120" align="center" show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <p v-if="scope.row.status==4">完成</p>
                  <p v-else-if="scope.row.status==1">未开始</p>
                  <p v-else-if="scope.row.status==3">进行中</p>
                  <p v-else-if="scope.row.status==2">准备中</p>
                </template>
              </el-table-column>
              <el-table-column prop="progress" label="任务进度" width="100" align="center"
                show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <el-progress :text-inside="true" :stroke-width="26"
                    :percentage="scope.row.status == 1 ? 0 : scope.row.status == 2 ? 25 :scope.row.status == 3 ? 60 : scope.row.status == 4 ? 100 : 0"></el-progress>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center">
                <!--使用template拿取整行的数据 scope.$index 当前行索引号， scope.row 当前行内容-->
                <template slot-scope="scope">
                  <!--编辑功能待实现-->
                  <el-button type="primary" size="mini" icon="el-icon-circle-check"
                    @click="TaskStart(scope.$index, scope.row)">启动</el-button>
                  <el-button type="primary" size="mini" icon="el-icon-edit"
                    @click="TaskDetail(scope.$index, scope.row)">详情</el-button>

                  <el-button type="primary" size="mini" icon="el-icon-edit"
                    @click="TaskChange(scope.$index, scope.row)">编辑</el-button>

                  <el-button slot="reference" size="mini" type="danger" icon="el-icon-delete"
                    @click="TaskDelete(scope.$index, scope.row)">删除</el-button>

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
    tableData: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      options: [{
        value: '选项1',
        label: '按任务名称排序'
      }, {
        value: '选项2',
        label: '按调度时间排序'
      }, {
        value: '选项3',
        label: '按创建时间排序'
      }, {
        value: '选项4',
        label: '按修改时间排序'
      }],
      current_page:1,
      itemKey : 0,
      total: 20,
      Data: this.tableData,
    }
  },
  methods: {
    CreateNewTask() {
      this.$router.push('/task/addtask')
    },
    CurrentChange(val) {
      console.log('頁嗎', val);
      this.taskList(val);
      this.current_page = val;
    },
    async taskList(page) {
      let res = await this.$api.GetTask();
      this.Data = res.data.data.slice((page - 1) * 10, page * 10);
      console.log('侧石', this.Data, page, res);
      this.total = res.data.data.length;
    },
    async taskList1() {
      let res = await this.$api.GetTask();
      this.Data = res.data.data.slice(0, 10);
    },
    TaskDetail(index, row) {
      console.log(index, row);
      this.showdetail(row)
    },
    showdetail(val) {
      this.$router.push(
        {
          path: '/task/taskdetail',
          query: { index: val }
        })
    },
    TaskChange(index, row) {
      console.log(index, row);
      this.showchange(row)
    },
    showchange(val) {
      this.$router.push(
        {
          path: '/task/taskchange',
          query: { index: val }
        })
    },
    TaskDelete(index, row){
      console.log(index, row);
      console.log(row.name);
      this.$confirm('确定删除当前目标?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //调用deleteElements函数
        this.delete_task(row.name);

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    async delete_task(name){
      let res = await this.$api.DeleteTask({name});
      console.log('删除--------', res.data);
      if (res.data.status == 200) {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }
      //刷新界面
      this.taskList(1);
    },
    TaskStart(index, row){
      console.log(index, row);
      this.start_task(row.name)
      //while(this.Data[index].status!=4){
      //  setInterval(this.taskList(this.current_page),1000);
      //}
    },
    async start_task(name){
      let res = await this.$api.StartTask({name});
      console.log(res);
    }
    
  },
  created() {
    this.taskList(1);
    this.total = this.tableData.length;
  },
    mounted() {
      this.timer = setInterval(this.taskList1, 3000);
    },
    beforeDestroy() {
      clearInterval(this.timer);
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
  width: auto;
}
</style>