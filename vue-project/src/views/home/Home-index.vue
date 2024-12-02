<template>
  <div>
    <div class="header" style="font-size: 20px; font-family: '黑体';">
      <h3>
        &nbsp;&nbsp;&nbsp;
      </h3>
      <el-dropdown trigger="click" :hide-on-click="true">
        <span class="el-dropdown-link" style="color: black;font-size:20px;">
          选择源<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="lang-select-dropdown">
          <el-dropdown-item v-for="task in this.task_ids" :key="task.id" @click.native="refresh(task.id,task.name)">
            {{ task.name }}
          </el-dropdown-item>
        </el-dropdown-menu>

      </el-dropdown>
      <h3>
        当前任务:{{ this.task_name }}
      </h3>
    </div>
    <div class="wrapper">
      <el-row :gutter="12">
        <el-col :span="6">
          <el-card shadow="always"
            style="text-align: center; background-color:aquamarine; font-size: 20px; font-family: '宋体';">
            资产
            <div style="font-size: 30px; font-family: '黑体';">
              {{ this.statictis.asset_count }}
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="always"
            style="text-align: center; background-color:aquamarine; font-size: 20px; font-family: '宋体';">
            存活IP
            <div style="font-size: 30px; font-family: '黑体';">
              {{ this.statictis.host_count }}
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="always"
            style="text-align: center; background-color:aquamarine; font-size: 20px; font-family: '宋体';">
            端口开放
            <div style="font-size: 30px; font-family: '黑体';">
              {{ this.statictis.port_count }}
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="always"
            style="text-align: center; background-color:aquamarine; font-size: 20px; font-family: '宋体';">
            漏洞
            <div style="font-size: 30px; font-family: '黑体';">
              {{ this.statictis.vmatch_count }}
            </div>
          </el-card>
        </el-col>
      </el-row>




      <el-row :gutter="12">
        <el-col :span="6" style="background-color:aliceblue">
          <h2>硬件</h2>
          <div class="grid-content">
            <div class="echart" id="mychart" :style="myChartStyle"></div>
          </div>
        </el-col>
        <el-col :span="6" style="background-color:aliceblue">
          <h2>硬件厂商</h2>
          <template style="background-color:aliceblue">
            <el-table :data="firmware_vendor" style="background-color:aliceblue;font-size:20px;" border
              :cell-style="{ background: '#f0f8ff !important' }" :header-cell-style="{ background: '#f0f8ff !important' }"
              height="400">
              <el-table-column prop="name" label="厂商">
              </el-table-column>
            </el-table>
          </template>
        </el-col>
        <el-col :span="6" style="background-color:aliceblue">
          <h2>软件</h2>
          <div class="grid-content">
            <div class="echart" id="mychart1" :style="myChartStyle"></div>
          </div>
        </el-col>
        <el-col :span="6" style="background-color:aliceblue">
          <h2>软件厂商</h2>
          <template style="background-color:aliceblue">
            <el-table :data="software_vendor" style="background-color:aliceblue;font-size:20px;" border
              :cell-style="{ background: '#f0f8ff !important' }" :header-cell-style="{ background: '#f0f8ff !important' }"
              height="400">
              <el-table-column prop="name" label="厂商">
              </el-table-column>
            </el-table>
          </template>
        </el-col>
      </el-row>

      <el-row :gutter="12" style="background-color:aliceblue;">
        <el-col :span="6" style="background-color:aliceblue">
          <h2>资产类型</h2>
          <div class="grid-content">
            <div class="echart" id="mychart" :style="myChartStyle"></div>
          </div>
        </el-col>
        <el-col :span="6" style="background-color:aliceblue">
          <h2>IP</h2>
          <template style="background-color:aliceblue">
            <el-table :data="ips" style="background-color:aliceblue;font-size:20px;" border
              :cell-style="{ background: '#f0f8ff !important' }" :header-cell-style="{ background: '#f0f8ff !important' }"
              height="400">
              <el-table-column prop="ip" label="存活IP">
              </el-table-column>
            </el-table>
          </template>
        </el-col>
        <el-col :span="6" style="background-color:aliceblue">
          <h2>端口</h2>
          <template style="background-color:aliceblue">
            <el-table :data="ports" style="background-color:aliceblue;font-size:20px;" border
              :cell-style="{ background: '#f0f8ff !important' }" :header-cell-style="{ background: '#f0f8ff !important' }"
              height="400">
              <el-table-column prop="port" label="开放端口">
              </el-table-column>
            </el-table>
          </template>
        </el-col>
        <el-col :span="6" style="background-color:aliceblue">
          <h2>漏洞情况</h2>
          <template style="background-color:aliceblue">
            <el-table :data="vuls" style="background-color:aliceblue;font-size:20px;" border
              :cell-style="{ background: '#f0f8ff !important' }" :header-cell-style="{ background: '#f0f8ff !important' }"
              height="400">
              <el-table-column prop="name" label="漏洞名称">
              </el-table-column>
              <el-table-column prop="type" label="漏洞类型">
              </el-table-column>
            </el-table>
          </template>
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
      statictis: {},
      taskData: [],
      taskDone: 0,
      targetData: [],
      resultData: [],
      open_ports: 0,
      assets_count: 0,
      vul_count: 0,
      alive_ip: 0,
      chart: null,
      task: [],
      total: 0,
      firmware_data: [],
      firmware_vendor: [],
      software_data: [],
      software_vendor: [],
      CMS_data: [],
      ips: [],
      ports: [],
      vuls: [],
      Data: [],
      vuls_high: 0,
      vuls_low: 0,
      task_name: '',
      task_ids: [],
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
    async refresh(task,name) {
      let task_id = task;
      console.log('refresh', task_id);
      let res = await this.$api.GetStatistics({ task_id });
      console.log('new statics', res.data.data);
      this.statictis = res.data.data;
      this.task_name = name;
      let firm_vendor = new Set;
      let soft_vendor = new Set;
      this.firmware_data = [];
      this.firmware_vendor = [];
      this.software_data = [];
      this.software_vendor = [];
      this.CMS_data = [];
      this.ips = [];
      this.ports = [];
      this.vuls= [];
      console.log('init data', this.statictis);
      for (let asset in this.statictis.asset) {
        //console.log(asset);
        if (asset.includes('firmware')) {
          let text = {
            name: asset.split('/')[1],
            value: this.statictis.asset[asset]
          }
          this.firmware_data.push(text);
          firm_vendor.add(asset.split('/')[1]);
        }
        else if (asset.includes('CMS')) {
          let text = {
            name: asset.split('/')[1],
            value: this.statictis.asset[asset]
          }
          this.CMS_data.push(text);
        } else {
          let text = {
            name: asset.split('/')[1],
            value: this.statictis.asset[asset]
          }
          soft_vendor.add(asset.split('/')[0]);
          this.software_data.push(text);
        }
      }
      for (let vendor of soft_vendor){
        let vendor1 = {
          name: vendor
        }
        this.software_vendor.push(vendor1);
      }
      for (let vendor of firm_vendor){
        let vendor2 = {
          name: vendor
        }
        this.firmware_vendor.push(vendor2);
      }
      console.log('firmware_data', this.firmware_data)
      console.log('firmware_vendor', this.firmware_vendor)
      console.log('CMS_data', this.CMS_data)
      console.log('software_data', this.software_data)
      console.log('software_vendor', this.software_vendor)
      for (let ip in this.statictis.host) {
        let text = {
          ip: ip
        }
        this.ips.push(text)
      }
      console.log(this.ips);
      for (let port in this.statictis.port) {
        let text = {
          port: port
        }
        this.ports.push(text);
      }
      console.log(this.ports)
      for (let vul in this.statictis.vmatch) {
        let text = {
          name: vul,
          type: '匹配'
        }
        this.vuls.push(text);
      }
      for (let vul in this.statictis.poc) {
        let text = {
          name: vul,
          type: 'POC验证'
        }
        this.vuls.push(text);
      }
      console.log(this.vuls);
      this.initEchartsfirmware();
      this.initEchartssoftware();
    },
    initData() {
      this.getTaskData();
      this.getTargetData();
    },
    async getTaskData() {
      let res = await this.$api.GetTask();
      //console.log('raw task data',res.data.data);
      for (let D of res.data.data) {
        if (D['status'] == 4) {
          let text = {
            id: D['_id'],
            name: D['name']
          }
          this.task_ids.push(text);
        }
      }
      this.task_name = this.task_ids[0].name;
      console.log('ids', this.task_ids);
      this.getResultData();
    },
    async getTargetData() {
      let res = await this.$api.GetTarget();
      console.log('首页目标', res);
      this.targetData = res.data.data;
      console.log(this.targetData);
    },
    async getResultData() {
      let task_id = this.task_ids[0].id;
      let res = await this.$api.GetStatistics({ task_id });
      this.statictis = res.data.data;
      let firm_vendor = new Set;
      let soft_vendor = new Set;
      console.log('init data', this.statictis);
      for (let asset in this.statictis.asset) {
        //console.log(asset);
        if (asset.includes('firmware')) {
          let text = {
            name: asset.split('/')[1],
            value: this.statictis.asset[asset]
          }
          this.firmware_data.push(text);
          firm_vendor.add(asset.split('/')[1]);
        }
        else if (asset.includes('CMS')) {
          let text = {
            name: asset.split('/')[1],
            value: this.statictis.asset[asset]
          }
          this.CMS_data.push(text);
        } else {
          let text = {
            name: asset.split('/')[1],
            value: this.statictis.asset[asset]
          }
          soft_vendor.add(asset.split('/')[0]);
          this.software_data.push(text);
        }
      }
      for (let vendor of soft_vendor){
        let vendor1 = {
          name: vendor
        }
        this.software_vendor.push(vendor1);
      }
      for (let vendor of firm_vendor){
        let vendor2 = {
          name: vendor
        }
        this.firmware_vendor.push(vendor2);
      }
      console.log('firmware_data', this.firmware_data)
      console.log('firmware_vendor', this.firmware_vendor)
      console.log('CMS_data', this.CMS_data)
      console.log('software_data', this.software_data)
      console.log('software_vendor', this.software_vendor)
      for (let ip in this.statictis.host) {
        let text = {
          ip: ip
        }
        this.ips.push(text)
      }
      console.log(this.ips);
      for (let port in this.statictis.port) {
        let text = {
          port: port
        }
        this.ports.push(text);
      }
      console.log(this.ports)
      for (let vul in this.statictis.vmatch) {
        let text = {
          name: vul,
          type: '匹配'
        }
        this.vuls.push(text);
      }
      for (let vul in this.statictis.poc) {
        let text = {
          name: vul,
          type: 'POC验证'
        }
        this.vuls.push(text);
      }
      console.log(this.vuls);
      this.initEchartsfirmware();
      this.initEchartssoftware();
    },
    initEchartsfirmware() {
      const option1 = {
        title: {
          // 设置饼图标题，位置设为顶部居中
          //text: "系统任务统计",
          top: "0%",
          left: "center"
        },
        series: [
          {
            type: "pie",
            label: {
              show: true,
              formatter: "{b} : {d}%", // b代表名称，c代表对应值，d代表百分比
              position: "outer",
              alignTo: "edge",
              margin: 2
            },
            radius: ["20%", "42%"], //饼图半径
            data: this.firmware_data
          }
        ]
      };
      this.myChart = echarts.init(document.getElementById("mychart"));
      this.myChart.setOption(option1);
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    },
    initEchartssoftware() {
      const option2 = {
        title: {
          // 设置饼图标题，位置设为顶部居中
          //text: "软件统计",
          top: "0%",
          left: "center"
        },
        series: [
          {
            type: "pie",
            label: {
              show: true,
              formatter: "{b} : {d}%",
              position: "outer",
              alignTo: "edge",
              margin: 2
            },
            color: ["#FF2E2E", "#F6B26B"],
            radius: ["20%", "42%"], //饼图半径
            data: this.software_data
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
  background: #d6e6f9;
  border-bottom: 2px solid black;
  display: flex;
  align-items: center;

}

.wrapper {
  padding: 10px;
  background: #d6e6f9;

  .el-row {
    margin-bottom: 20px;
    background: #d6e6f9;

    &:last-child {
      margin-bottom: 0;
      background: #d6e6f9;
    }
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
    background: #f0f8ff;
  }

  .row-bg {
    padding: 10px 0;
    background: #d6e6f9;
  }
}
</style>