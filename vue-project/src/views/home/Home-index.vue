<template>
  <div>
    <div class="header">
      <h3>
        首页
      </h3>
    </div>
    <div class="wrapper">
      <el-row>
        <el-col :span="10">
          <div class="grid-content">
            <div class="echart" id="mychart" :style="myChartStyle"></div>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content">
            <div class="echart" id="mychart1" :style="myChartStyle"></div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <h2>
              系统目标列表
            </h2>
            <template>
              <el-table :data="targetData" style="width: 100%">
                <el-table-column prop="name" label="目标名称">
                </el-table-column>
                <el-table-column prop="hosts.length" label="目标主机数">
                </el-table-column>
                <el-table-column prop="last_modify_time" label="最近修改时间">
                </el-table-column>
              </el-table>
            </template>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <h2>
              系统任务列表
            </h2>
            <template>
              <el-table ref="singleTable" :data="taskData" highlight-current-row style="width: 100%">
                <el-table-column type="index" width="50">
                </el-table-column>
                <el-table-column property="name" label="任务名称" width="150">
                </el-table-column>
                <el-table-column property="status" label="任务状态" width="120">
                  <template slot-scope="scope">
                    <p v-if="scope.row.status == 4">完成</p>
                    <p v-else-if="scope.row.status == 1">未开始</p>
                    <p v-else-if="scope.row.status == 3">进行中</p>
                    <p v-else-if="scope.row.status == 2">准备中</p>
                  </template>
                </el-table-column>
                <el-table-column property="alive_hosts" label="存活主机数" width="120">
                </el-table-column>
                <el-table-column property="finished_hosts" label="目标主机数">
                </el-table-column>
                <el-table-column property="vul_high" label="漏洞信息">
                  <template slot-scope="scope">
                    <el-tag type="danger">{{
                      scope.row.vul_high }}</el-tag>

                    <el-tag type="warning">  {{
                      scope.row.vul_low }}</el-tag>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </div>
        </el-col>
      </el-row>


    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      taskData: [],
      taskDone: 0,
      targetData: [],
      resultData: [],
      chart: null,
      task: [],
      total: 0,
      Data: [],
      vuls_high :0,
      vuls_low :0,
      chartData: {
        // 这里是你要绘制的饼图数据
      },
      currenttaskdata: [{
        author: 'dad',
        content: 4123412,
        clicks: 12312
      },
      {
        author: 'mom',
        content: 4112342,
        clicks: 112342
      },
      ],
      myChartStyle: { float: "left", width: "100%", height: "400px" } //图表样式
    }
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.getTaskData();
      this.getTargetData();
      this.getResultData();
    },
    async getTaskData() {
      let res = await this.$api.GetTask();
      let count = 0;
      for (let D of res.data.data) {
        let count_high = 0;
        let count_low = 0;
        let name = D['name'];
        let result = await this.$api.GetResult({ name });
        for (let host of result.data.data) {
          for (let vul of host.vmatch_vuls) {
            if (vul.impact > 5) {
              count_high++;
            }
            if (vul.impact <= 5) {
              count_low++;
            }
          }
        }
        D['vul_high'] = count_high;
        D['vul_low'] = count_low;
      }
      this.taskData = res.data.data;
      console.log('首页任务', this.taskData)
      for (let task of this.taskData) {
        if (task.status == 4) {
          count++;
        }
      }
      this.taskDone = count;
      console.log(this.taskDone);
      this.initEchartsTask();

    },
    async getTargetData() {
      let res = await this.$api.GetTarget();
      console.log('首页目标', res);
      this.targetData = res.data.data;
      console.log(this.targetData);
    },
    async getResultData() {
      let tasks = await this.$api.GetTask();
      console.log('首页任务统计', tasks.data.data);
      for (let task of tasks.data.data) {
        console.log(task)
        this.task.push(task);
      }
      for (let task of this.task) {
        this.result = {
          name: '',
          start_time: '',
          end_time: '',
          status: '',
          active_host: 0,
          vuls_high: 0,
          vuls_low: 0
        }
        console.log(task['name']);
        let name = task['name'];
        let res = await this.$api.GetResult({ name });
        console.log(res)
        this.result.name = name;
        this.result.start_time = task['start_time'];
        this.result.end_time = task['finished_time'];
        this.result.status = task['status'];
        this.result.active_host = res.data.data.length;
        let count1 = 0;
        let count2 = 0;
        for (let key in res.data.data) {
          for (let vul of res.data.data[key].vmatch_vuls) {
            console.log(vul);
            if (vul.impact > 5) {
              count1++;
            }
            if (vul.impact <= 5) {
              count2++;
            }
          }
        }
        this.result.vuls_high = count1;
        this.result.vuls_low = count2;
        this.Data.push(this.result)
      }
      for (let data of this.Data){
        this.vuls_high += data.vuls_high;
        this.vuls_low += data.vuls_low;
      }
      console.log('侧石', this.Data);
      this.total = this.Data.length;
      this.initEchartsResult();
    },
    initEchartsTask() {
      const option1 = {
        legend: {
          // 图例
          data: ['已完成', '未完成'],
          right: "10%",
          top: "30%",
          orient: "vertical"
        },
        title: {
          // 设置饼图标题，位置设为顶部居中
          text: "系统任务统计",
          top: "0%",
          left: "center"
        },
        series: [
          {
            type: "pie",
            label: {
              show: true,
              formatter: "{b} : {c}" // b代表名称，c代表对应值，d代表百分比
            },
            radius: ["40%", "70%"], //饼图半径
            data: [
              {
                value: this.taskDone,
                name: "已完成"
              },
              {
                value: this.taskData.length - this.taskDone,
                name: "未完成"
              },
            ]
          }
        ]
      };
      this.myChart = echarts.init(document.getElementById("mychart"));
      this.myChart.setOption(option1);
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    },
    initEchartsResult() {
      const option2 = {
        legend: {
          // 图例
          data: ['高危漏洞', '低危漏洞'],
          right: "10%",
          top: "30%",
          orient: "vertical"
        },
        title: {
          // 设置饼图标题，位置设为顶部居中
          text: "系统结果统计",
          top: "0%",
          left: "center"
        },
        series: [
          {
            type: "pie",
            label: {
              show: true,
              formatter: "{b} : {c}" // b代表名称，c代表对应值，d代表百分比
            }, 
            color: ["#FF2E2E", "#F6B26B"],
            radius: ["40%", "70%"], //饼图半径
            data: [
              {
                value: this.vuls_high,
                name: "高危漏洞"
              },
              {
                value: this.vuls_low,
                name: "低危漏洞"
              },
            ]
          }
        ]
      };
      this.myChart1 = echarts.init(document.getElementById("mychart1"));
      this.myChart1.setOption(option2);
      window.addEventListener("resize", () => {
        this.myChart1.resize();
      });
    }
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