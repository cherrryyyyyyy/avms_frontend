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
            <el-select v-model="value" placeholder="刷新频率" style="padding : 20px">
              <el-option v-for="item in frequencys" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-refresh-left"></el-button>
            <el-select v-model="value" placeholder="排序" style="padding : 20px">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-row>
        </el-header>
        <el-main>
          <template>
            <el-table stripe=true :data="Data" height=590 border style="width: 100%">
              <el-table-column prop="name" label="任务名称" width="150" align="center"
                show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="start_time" label="启动时间" width="250" align="center"
                show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="end_time" label="结束时间" width="250" align="center"
                show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="status" label="任务状态" width="150" align="center"
                show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="active_host" label="活跃主机" width="120" align="center" show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="vuls" label="漏洞数量" width="120" align="center"
                show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column label="操作" align="center">
                <!--使用template拿取整行的数据 scope.$index 当前行索引号， scope.row 当前行内容-->
                <template slot-scope="scope">
                  <!--编辑功能待实现-->
                  <el-button type="primary" size="mini" icon="el-icon-edit"
                    @click="ResultDetail(scope.$index, scope.row)">详情</el-button>

                  <el-button type="primary" size="mini" icon="el-icon-edit"
                    @click="handleEdit(scope.$index, scope.row)">报告</el-button>

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
      frequencys: [{
        value: '选项1',
        label: '每30s刷新一次'
      }, {
        value: '选项2',
        label: '每15s刷新一次'
      }, {
        value: '选项3',
        label: '每5s刷新一次'
      }],
      total: 0,
      Data: [],
      result: [],
      task: [],
      page : 1,
    }
  },
  methods: {
    CurrentChange(val) {
      console.log('頁嗎', val);
      this.resultList(val);
      this.page = val;
    },
    async resultList(page) {
      let tasks = await this.$api.GetTask();
      console.log('任务', tasks, page);
      for (let task of tasks.data.data){
        this.task.push(task);
      }
      for (let task of this.task){
        this.result = {
        name : '',
        start_time : '',
        end_time : '',
        status : '',
        active_host : 0,
        vuls: 0,
        }
        console.log(task['name']);
        let name = task['name'];
        let res = await this.$api.GetResult({ name });
        this.result.name = name;
        this.result.start_time = task['start_time'];
        this.result.end_time = task['finished_time'];
        this.result.status = '完成';
        this.result.active_host = res.data.data.length;
        let count =0;
        for (let key in res.data.data){
            console.log(res.data.data[key]);
            count += res.data.data[key].vmatch_vuls.length;
        }
        this.result.vuls = count;
        this.Data.push(this.result)
        console.log(page,res);
      }
      this.Data = this.Data.slice((page - 1) * 10, page * 10);
      console.log('侧石', this.Data, page);
      this.total = this.Data.length;
    },
    ResultDetail(index, row) {
      console.log(index, row);
      index += (this.page - 1) * 10;
      this.showdetail(row.name, index)
    },
    showdetail(val1, val2) {
      this.$router.push(
        {
          path: '/result/resultdetail',
          query: { name: val1 , index: val2}
        })
    }
  },
  created() {
    this.resultList(1);
    this.total = this.tableData.length;
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 55px;
  background: #fff;
  border-bottom: 2px solid black;
}

.wrapper {
  padding: 10px;
}
</style>