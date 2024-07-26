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
              <el-table-column prop="result_task_name" label="任务名称" width="150" align="center"
                show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="result_start_time" label="启动时间" width="200" align="center"
                show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="result_end_time" label="结束时间" width="200" align="center"
                show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="result_status" label="任务状态" width="150" align="center"
                show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="active_hosts" label="活跃主机" width="120" align="center" show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="vulnerabilities_count" label="漏洞数量" width="120" align="center"
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
      total: 20,
      Data: this.tableData,
    }
  },
  methods: {
    CurrentChange(val) {
      console.log('頁嗎', val);
      this.resultList(val);
    },
    async resultList(page) {
      this.Data = this.tableData.slice((page - 1) * 10, page * 10);
      console.log(page);
    },
    ResultDetail(index, row) {
      console.log(index, row);
      this.showdetail(row.result_id)
    },
    showdetail(val) {
      this.$router.push(
        {
          path: '/result/resultdetail',
          query: { result_id: val }
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