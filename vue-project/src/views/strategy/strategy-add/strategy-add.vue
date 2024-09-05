<template>
  <div>
    <div class="header">
      <h3>
        <el-button type="text" @click="Goback" class="detailed">
          <h3>
            ← 返回
        </h3>
        </el-button>
        新增端口扫描策略
      </h3>
    </div>
    <el-header></el-header>
    <el-header></el-header>
    <div class="wrapper">
      <el-form :model="ruleForm" :rules="rules" :options="options" ref="ruleForm" label-width="200px"
        class="demo-ruleForm" style="width:1000px">
        <el-form-item label="名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input type="textarea" v-model="ruleForm.description"></el-input>
        </el-form-item>
        <el-form-item label="tcp端口列表" prop="tcp_ports">
          <el-input type="textarea" placeholder="格式形如：1,2,5-10,12,14-16..." v-model="ruleForm.tcp_ports"></el-input>
        </el-form-item>
        <el-form-item label="udp端口列表" prop="udp_ports">
          <el-input type="textarea" placeholder="格式形如：1,2,5-10,12,14-16..." v-model="ruleForm.udp_ports"></el-input>
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
        description: '',
        tcp_ports: '',
        udp_ports: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入策略名称', trigger: 'blur' }
        ],
        description: [
          { required: true, message: '请填写策略描述', trigger: 'blur' }
        ]
      },
      form: {},
    }

  },
  methods: {
    Goback() {
      this.$router.push('/strategy/index')
    },
    submitForm(formName, ruleForm) {
      console.log(new Date());
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('Inserttopl', ruleForm);
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
    }
  },
  created() {
    console.log('chaungjian');
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