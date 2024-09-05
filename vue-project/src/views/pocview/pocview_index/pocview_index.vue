<template>
    <div>
      <div class="header">
        <h3>
          指纹库（{{ total }}个）
        </h3>
      </div>
  
      <div class="wrapper">
        <el-container>
          <el-main>
            <template>
              <el-table stripe=true :data="Data" height=590 border style="width: 100%">
                <el-table-column prop="name" label="POC名称" width="400" align="center" show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column prop="appName" label="应用名称" width="200" align="center" show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column prop="appVersion" label="应用对应版本" width="170" align="center" show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column prop="desc" label="描述" width="600" align="center" show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column label="操作" align="center">
                  <!--使用template拿取整行的数据 scope.$index 当前行索引号， scope.row 当前行内容-->
                  <template slot-scope="scope">
                    <!--编辑功能待实现-->
                    <el-button type="primary" size="mini" icon="el-icon-edit"
                      @click="FPDetail(scope.$index, scope.row)">详情</el-button>
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
        for(let poc of this.Data){
            poc.name = poc.name.replace(/'/g, '');
            poc.appName = poc.appName.replace(/'/g, '');
            poc.appVersion = poc.appVersion.replace(/'/g, '');
            poc.desc = poc.desc.replace(/'/g, '');
        }
        this.id = res.data.id;
        this.total = res.data.data.length;
        console.log('侧石', this.Data, page, res);
        //this.total = res.data.data.length;
      },
      FPDetail(index, row) {
        console.log(index, row);
        //index += (this.page - 1) * 10;
        console.log(index)
        this.showdetail(this.id[index], row.filename)
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
  
  