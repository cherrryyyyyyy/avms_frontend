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
                <el-table-column prop="name" label="指纹文件名称" width="200" align="center" show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column prop="keyword" label="指纹文件类型" width="200" align="center" show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column prop="length" label="指纹文件大小" width="200" align="center" show-overflow-tooltip="true">
                </el-table-column>
                <el-table-column prop="uploadDate" label="指纹文件上传时间" width="300" align="center" show-overflow-tooltip="true">
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
        this.FPList(val);
        this.page = val;
      },
      async FPList(page) {
        let res = await this.$api.GetFPS();
        this.Data = res.data.data.slice((page - 1) * 10, page * 10);
        this.id = res.data.id;
        this.total = res.data.data.length;
        console.log('侧石', this.Data, page, res);
        //this.total = res.data.data.length;
      },
      FPDetail(index, row) {
        console.log(index, row);
        //index += (this.page - 1) * 10;
        console.log(index)
        this.showdetail(this.id[index], row.name)
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
      this.FPList(1);
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
  
  