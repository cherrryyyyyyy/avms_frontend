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
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm" style="width:1000px">
            <el-form-item label="组件名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="组件描述" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item label="主机范围" prop="range">
                <el-input type="textarea" v-model="ruleForm.range"></el-input>
            </el-form-item>
            <el-form-item label="端口范围" prop="port_range">
              <el-select v-model="ruleForm.port_range" placeholder="请选择活动区域">
                <el-option label="Nmap默认端口列表" value="Nmap_default"></el-option>
                <el-option label="Nmap默认端口列表1" value="Nmap_default1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        <div class="wrapper">
            
        </div>
    </div>
</template>
  
<script>
  
export default {
    data() {
      return {
        ruleForm: {
          name: '',
          port_range: '',
          range: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入组件名称', trigger: 'blur' }
          ],
          port_range: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          range:[
            {required: true, message: '请填写主机范围', trigger: 'blur'}
          ],
          desc: [
            { required: true, message: '请填写组件描述', trigger: 'blur' }
          ]
        }
      };
    },

    methods:{
        Goback(){
            this.$router.push('/target/index')
        },
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
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