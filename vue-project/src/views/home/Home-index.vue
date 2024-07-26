<template>
  <div>
    <div class="header">
      <h3>
        首页顶部区域
      </h3>
    </div>
    <div class="wrapper">
      <el-row :gutter="20">
        <el-col :span="16">
          <div class="grid-content bg-purple">
            <h2>
              数据总览
            </h2>
            <template>
              <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="targettotal" label="目标总数" width="300">
                </el-table-column>
                <el-table-column prop="tasktotal" label="任务总数" width="300">
                </el-table-column>
                <el-table-column prop="activetask" label="活跃任务数">
                </el-table-column>
              </el-table>
            </template>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <h2>
              近期任务
            </h2>
            <template>
              <el-table ref="singleTable" :data="currenttaskdata" highlight-current-row style="width: 100%">
                <el-table-column type="index" width="50">
                </el-table-column>
                <el-table-column property="author" label="作者" width="120">
                </el-table-column>
                <el-table-column property="content" label="内容量" width="120">
                </el-table-column>
                <el-table-column property="clicks" label="点击量">
                </el-table-column>
              </el-table>
            </template>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <h2>
              舆情分析
            </h2>
            <el-row :gutter=20>
              <el-col :span="6">
                <div class="grid-content bg-blue-light">
                  <!--访问总人数-->
                  <el-col :span="8">
                    <div class="grid-content bg-blue-light">
                      <h3>
                        访问总人数
                      </h3>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-blue-light"></div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-blue-light"></div>
                  </el-col>
                  <el-row>
                    <el-col :span="12">
                      <div class="grid-content bg-blue-light">
                        <!--访问总人数信息与涨降幅-->
                        <h2 style="text-align:center;">
                          14,123
                        </h2>
                        <el-row>
                          <el-col :span="12">
                            <div class="grid-content bg-blue-light" style="text-align:center;">
                              <h3>
                                较昨天
                              </h3>
                            </div>
                          </el-col>
                          <el-col :span="12">
                            <div class="grid-content bg-blue-light" style="text-align:center;">
                              <h3><i class="el-icon-top-right" style="color : red">112</i></h3>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="grid-content bg-blue-light">
                        <!--访问总人数图表-->

                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-green-light">
                  <!--内容发布量-->
                  <el-col :span="8">
                    <div class="grid-content bg-green-light">
                      <h3>
                        内容发布量
                      </h3>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-green-light"></div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-green-light"></div>
                  </el-col>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-blue-light">
                  <!--评论总量-->
                  <el-col :span="8">
                    <div class="grid-content bg-blue-light">
                      <h3>
                        发布总量
                      </h3>

                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-blue-light"></div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-blue-light"></div>
                  </el-col>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-pup-light">
                  <!--分享总量-->
                  <el-col :span="8">
                    <div class="grid-content bg-pup-light">
                      <h3>
                        分享总量
                      </h3>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-pup-light"></div>
                  </el-col>
                  <el-col :span="8">
                    <div class="grid-content bg-pup-light"></div>
                  </el-col>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tableData: [{
        targettotal: this.$store.state.TargetData.length,
        tasktotal: this.$store.state.TaskData.length,
        activetask: 0
      }],
      currenttaskdata: [{
        author: 'dad',
        content: 4123412,
        clicks: 12312
      },
      {
        author: 'mom',
        content: 4112342,
        clicks: 112342
      }
      ]
    }
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

  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #ffffff;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .bg-blue-light {
    background: rgb(237, 245, 253);
  }

  .bg-green-light {
    background: rgb(241, 253, 241);
  }

  .bg-pup-light {
    background: rgb(241, 240, 254);
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}
</style>