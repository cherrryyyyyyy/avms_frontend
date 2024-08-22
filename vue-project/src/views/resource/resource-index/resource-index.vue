<template>
  <div>
    <div class="header">
      <h3>
        目标（{{ total }}个）
      </h3>
    </div>

    <div class="wrapper">
      <el-container>
        <el-main>
          <template>
            <el-table stripe=true :data="Data" height=590 border style="width: 100%">
              <el-table-column prop="id" label="CVEID" width="150" align="center" show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="summary" label="漏洞描述" width="600" align="center" show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="impactScore" label="严重级别" width="100" align="center" show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="cvss" label="CVSS评分" width="100" align="center" show-overflow-tooltip="true">
              </el-table-column>
              <el-table-column prop="cwe" label="CWE标识" width="250" align="center">
              </el-table-column>
              <el-table-column prop="published" label="漏洞发布时间" width="250" align="center">
              </el-table-column>
              <el-table-column label="操作" align="center">
                <!--使用template拿取整行的数据 scope.$index 当前行索引号， scope.row 当前行内容-->
                <template slot-scope="scope">
                  <!--编辑功能待实现-->
                  <el-button type="primary" size="mini" icon="el-icon-edit"
                    @click="CveDetail(scope.$index, scope.row)">详情</el-button>

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
      total: 20,
      Data: [],
      page: 1,
    }
  },
  methods: {
    CurrentChange(val) {
      console.log('頁嗎', val);
      this.cveList(val);
      this.page = val;
    },
    async cveList(page) {
      //let column = 1;
      let res = await this.$api.GetCves();
      this.Data = res.data.data.slice((page - 1) * 10, page * 10);
      console.log('侧石', this.Data, page, res);
      this.total = res.data.data.length;
    },
    CveDetail(index, row) {
      console.log(index, row);
      //index += (this.page - 1) * 10;
      console.log(row)
      this.showdetail(row)
    },
    showdetail(val) {
      this.$router.push(
        {
          path: '/resource/resourcedetail',
          query: { index: val }
        })
    }
  },
  created() {
    this.cveList(1);
    console.log('what???');
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