<template>
    <div>
        <div class="header">
            <h3>
                <el-button type="primary" @click="Goback" class="detailed" icon="el-icon-back">
                    返回
                </el-button>
                新增任务
            </h3>
        </div>
        <el-header></el-header>
        <el-header></el-header>
        <div class="wrapper">
            <el-form :model="ruleForm" :rules="rules" :options="options" ref="ruleForm" label-width="200px" class="demo-ruleForm" style="width:1000px">
                <el-form-item label="名称" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="描述" prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item label="目标" prop="target">
                    <el-select v-model="ruleForm.target" placeholder="请选择测试目标">
                      <el-option v-for="option in options"
                      :key="option.value"
                      :label="option.lable"
                      :value="option.value">
                    </el-option>
                    </el-select>
                  </el-form-item>
                <el-form-item label="活页扫描方法" prop="scan_method">
                  <el-select v-model="ruleForm.scan_method" placeholder="请选择扫描方法">
                    <el-option label="默认" value="默认"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="类型" prop="class">
                    <el-select v-model="ruleForm.class" placeholder="请选择类型">
                      <el-option label="按需" value="按需"></el-option>
                      <el-option label="调度" value="调度"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="调度时间" required>
                    <el-col :span="11">
                      <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;" value-format="yyyy/MM/dd"></el-date-picker>
                      </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                      <el-form-item prop="date2">
                        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;" value-format="hh:mm:ss"></el-time-picker>
                      </el-form-item>
                    </el-col>
                  </el-form-item>                
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm',ruleForm)">创建</el-button>
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
          desc: '',
          value:'',
          date1: '',
          date2: '',
          class: '',
          scan_method: '',
        },
        options : [],
        rules: {
          name: [
            { required: true, message: '请输入组件名称', trigger: 'blur' }
          ],
          class: [
            { required: true, message: '请选择端口范围', trigger: 'change' }
          ],
          scan_method: [
            { required: true, message: '请选择扫描方法', trigger: 'change' }
          ],
          target:[
            {required: true, message: '请选择测试目标', trigger: 'change'}
          ],
          desc: [
            { required: true, message: '请填写组件描述', trigger: 'blur' }
          ],
          date1: [
            {required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            {required: true, message: '请选择时间', trigger: 'change' }
          ]
        },
        form : {},
        ddata : this.$store.state.TargetData,
      }
      
    },
    methods:{
        Goback(){
            this.$router.push('/task/index')
        },
        submitForm(formName,ruleForm){
          console.log(new Date());
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$emit('Inserttotarget',ruleForm);
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
      getoptions(){
        this.ddata = this.$store.state.TargetData;
        console.log(this.$store.state.TargetData);
        this.ddata.forEach(
            data => {
                this.options.push({lable: data.target_name,value: data.target_name});
            }
        );
      },
    },
    created() {
        console.log('chaungjian');
        this.getoptions();
    }
    }
    </script>
    
    <style lang="less" scoped>
    .header{
        height:55px;
        background: #fff;
        border-bottom: 2px solid black;
    }
    .wrapper{
      padding: 10px;
    }
    </style>