<template>
  <div>
    <div class="header">

      <h3>
        <el-button type="primary" @click="Goback" class="detailed" icon="el-icon-back">
          返回
        </el-button>
        新增目标
      </h3>

    </div>
    <el-header></el-header>
    <el-header></el-header>
    <div class="wrapper">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm"
        style="width:1300px">
        <el-form-item label="组件名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="组件描述" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item v-for="(host, index) in ruleForm.hosts" :label="'主机' + index" :key="host.key"
          :prop="'hosts.' + index + '.value'" :rules="{
            required: true, message: '域名不能为空', trigger: 'blur'
          }">
          <el-input v-model="host.value">
          </el-input><el-button @click.prevent="removeHost(host)">删除</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="addHost">新增域名</el-button>
        </el-form-item>
        <el-form-item label="端口范围" prop="port_list">
          <el-select v-model="ruleForm.port_list" placeholder="请选择端口范围">
            <el-option v-for="option in options" :key="option.value" :label="option.lable" :value="option.value">
            </el-option>
          </el-select>
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
        port_list: '',
        hosts: [{
          value: ''
        }],
        desc: '',
      },
      ddata: [],
      options: [],
      rules: {
        name: [
          { required: true, message: '请输入组件名称', trigger: 'blur' }
        ],
        port_list: [
          { required: true, message: '请选择端口范围', trigger: 'change' }
        ],
        hosts: [
          { required: true, message: '请填写主机范围', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请填写组件描述', trigger: 'blur' }
        ]
      },
      form: {},
    }
  },

  methods: {
    removeHost(item) {
      var index = this.ruleForm.hosts.indexOf(item)
      if (index !== -1) {
        this.ruleForm.hosts.splice(index, 1)
      }
    },
    addHost() {
      console.log(Date.now());
      this.ruleForm.hosts.push({
        value: '',
        key: Date.now()
      });
    },
    Goback() {
      this.$router.push('/target/index')
    },
    submitForm(formName, ruleForm) {
      console.log(ruleForm.hosts);
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
    },
    async getoptions() {
      let res = await this.$api.GetPorts();
      this.ddata = res.data.data;
      console.log(this.$store.state.TargetData);
      this.ddata.forEach(
        data => {
          this.options.push({ lable: data.name, value: data.name });
        }
      );
    }
  },
  created() {
    this.getoptions();
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