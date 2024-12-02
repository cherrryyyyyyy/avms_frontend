<template>
    <div>
      <div class="header">
        <h3>
          PoC资源库（{{ total }}个）
        </h3>
      </div>
  
      <div class="wrapper">
        <el-container>
          <el-main>
            <template>
              <el-table stripe=true :data="Data" height=590 border style="width: 100%">
                <el-table-column prop="mod_name" label="POC名称" width="400" align="center" show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column prop="version" label="poc版本" width="170" align="center" show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column prop="description" label="描述"  align="center" show-overflow-tooltip="true">
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
        total: 0,
        Data: [],
        page: 1,
        id: [],
      }
    },
    methods: {
      CurrentChange(val) { 
        console.log('頁嗎', val);
        this.POCList(val);
        this.page = val;
      },
      async POCList(page) {
        let res = await this.$api.GetPOC();
        this.Data = res.data.data.slice((page - 1) * 10, page * 10);
        console.log(res.data.data);
        this.total = res.data.data.length;
        console.log('侧石', this.Data, page, res);
        //this.total = res.data.data.length;
      },
      showdetail(index, filename) {
        this.$router.push(
          {
            path: '/fingerprints/detail',
            query: { index: index,
              name: filename
            }
          })
      }
    },
    created() {
      this.POCList(1);
      console.log('what???');
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
  
  