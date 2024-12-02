<template>
  <div>
    <div class="header">
      <h3>
        目标（{{ total }}个）
      </h3>
    </div>

    <div class="wrapper">
      <el-container>
        <el-header>
          <el-row style="text-align: right">
            <el-button type="primary" @click="CreateNewTarget" class="detailed">
              新增目标
            </el-button>
            <el-select v-model="value" placeholder="排序" style="padding : 20px">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-row>
        </el-header>
        <el-main>
          <template>
            <el-table stripe=true :data="Data" height=590 border style="width: 100%">
              <el-table-column prop="name" label="目标名称" width="150" align="center" show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="description" label="目标描述" width="270" align="center" show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="hosts" label="主机范围" width="250" align="center" show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="port_list" label="端口范围" width="160" align="center" show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="create_time" label="创建时间" width="250" align="center">
              </el-table-column>
              <el-table-column prop="last_modify_time" label="最近修改时间" width="250" align="center">
              </el-table-column>
              <el-table-column label="操作" align="center">
                <!--使用template拿取整行的数据 scope.$index 当前行索引号， scope.row 当前行内容-->
                <template slot-scope="scope">
                  <!--编辑功能待实现-->
                  <el-button type="primary" size="mini" icon="el-icon-edit"
                    @click="TargetDetail(scope.$index, scope.row)">详情</el-button>

                  <el-button type="primary" size="mini" icon="el-icon-edit"
                    @click="TargetEdit(scope.$index, scope.row)">编辑</el-button>

                  <el-button slot="reference" size="mini" type="danger" icon="el-icon-delete"
                    @click="TargetDelete(scope.$index, scope.row)">删除</el-button>

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
      total: 20,
      Data: [],
      page: 1,
    }
  },
  methods: {
    CreateNewTarget() {
      this.$router.push('/target/addtarget')
    },
    CurrentChange(val) {
      console.log('頁嗎', val);
      this.targetList(val);
      this.page = val;
    },
    async targetList(page) {
      let res = await this.$api.GetTarget();
      this.Data = res.data.data.slice((page - 1) * 10, page * 10);
      console.log('侧石', this.Data, page, res);
      this.total = res.data.data.length;
    },
    TargetDetail(index, row) {
      console.log(index, row);
      index += (this.page - 1) * 10;
      this.showdetail(row)
    },
    TargetDelete(index, row) {
      console.log(index, row);
      console.log(row.name);
      this.$confirm('确定删除当前目标?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //调用deleteElements函数
        this.deleteTarget(row.name);

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });

    },
    TargetEdit(index, row) {
      console.log(index, row);
      index += (this.page - 1) * 10;
      this.showedit(index)
    },
    showedit(val) {
      this.$router.push(
        {
          path: '/target/targetedit',
          query: { index: val }
        })
    },
    async deleteTarget(name) {
      let res = await this.$api.DeleteTarget({ name });
      console.log('删除--------', res.data);
      if (res.data.status == 200) {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }
      //刷新界面
      this.targetList(1);
    },
    showdetail(val) {
      this.$router.push(
        {
          path: '/target/targetdetail',
          query: { index: val }
        })
    }
  },
  created() {
    this.targetList(1);
    console.log('what???');
    this.total = this.tableData.length;
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
</style>