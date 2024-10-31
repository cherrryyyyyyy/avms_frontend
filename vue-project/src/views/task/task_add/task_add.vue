<template>
  <div>
    <div class="header">
      <h3>
        <el-button type="text" @click="Goback" class="detailed">
          <h3>
            ← 返回
        </h3>
        </el-button>
        新增任务
      </h3>
    </div>
    <el-header></el-header>
    <el-header></el-header>
    <div class="wrapper">
      <el-form :model="ruleForm" :rules="rules" :options="options" :alive_scan_methods="alive_scan_methods" ref="ruleForm" label-width="200px"
        class="demo-ruleForm" style="width:1000px">
        <el-form-item label="名称" prop="name" required>
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="description" required>
          <el-input type="textarea" v-model="ruleForm.description"></el-input>
        </el-form-item>
        <el-form-item label="目标" prop="target">
          <el-select v-model="ruleForm.target" placeholder="请选择测试目标" required>
            <el-option v-for="option in options" :key="option.value" :label="option.lable" :value="option.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活页扫描方法" prop="asmethod" required>
          <el-select v-model="ruleForm.asmethod" placeholder="请选择扫描方法">
            <el-option v-for="method in alive_scan_methods" :key="method.value" :label="method.lable" :value="method.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="类型" prop="type" required>
          <el-select v-model="ruleForm.type" placeholder="请选择类型">
            <el-option label="按需" value="on_demand"></el-option>
            <el-option label="调度" value="schedule"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="调度时间" required v-if="IsShow(ruleForm.type)">
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"
                value-format="yyyy-MM-dd"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"
                value-format="hh:mm:ss"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm', ruleForm)">创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        target: '',
        description: '',
        date1: '',
        date2: '',
        type: '',
        asmethod: '',
      },
      options: [],
      alive_scan_methods: [],
      rules: {
        name: [
          { required: true, message: '请输入组件名称', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择端口范围', trigger: 'change' }
        ],
        alive_scan_method: [
          { required: true, message: '请选择扫描方法', trigger: 'change' }
        ],
        target: [
          { required: true, message: '请选择测试目标', trigger: 'change' }
        ],
        description: [
          { required: true, message: '请填写组件描述', trigger: 'blur' }
        ],
        date1: [
          { required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { required: true, message: '请选择时间', trigger: 'change' }
        ]
      },
      form: {},
    }

  },
  methods: {
    Goback() {
      this.$router.push('/task/index')
    },
    IsShow(type){
      if(type == 'schedule'){
        return true;
      }
      return false;
    },
    submitForm(formName, ruleForm) {
      console.log(new Date());
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('Inserttotarget', ruleForm);
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
      this.Goback();
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      //console.log(this.ddata[0].target_name);
      console.log(this.options);
    },
    async get_alive_scan_methods(){
      let res = await this.$api.GetActiveMethods();
      console.log(res);
      let data2 = res.data.data;
      data2.forEach(
        data => {
          this.alive_scan_methods.push({ lable: data.name, value: data.value });
        }
      );
    },
    async getoptions() {
      let res = await this.$api.GetTarget();
      let data1 = res.data.data;
      data1.forEach(
        data => {
          this.options.push({ lable: data.name, value: data.name });
        }
      );
    },
  },
  created() {
    console.log('chaungjian');
    this.getoptions();
    this.get_alive_scan_methods();
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