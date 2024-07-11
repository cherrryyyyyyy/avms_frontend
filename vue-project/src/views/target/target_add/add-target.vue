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
              <el-select v-model="ruleForm.port_range" placeholder="请选择端口范围">
                <el-option label="Nmap默认端口列表" value="Nmap_default"></el-option>
                <el-option label="Nmap默认端口列表1" value="Nmap_default1"></el-option>
              </el-select>
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
          port_range: '',
          range: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入组件名称', trigger: 'blur' }
          ],
          port_range: [
            { required: true, message: '请选择端口范围', trigger: 'change' }
          ],
          range:[
            {required: true, message: '请填写主机范围', trigger: 'blur'}
          ],
          desc: [
            { required: true, message: '请填写组件描述', trigger: 'blur' }
          ]
        },
        form : {},
      }
    },

    methods:{
        Goback(){
            this.$router.push('/target/index')
        },
        submitForm(formName,ruleForm){
          console.log(ruleForm.date1);
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$emit('Inserttotarget',ruleForm);
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      async Insert2target(formName){
        //let res = await this.$api.Insert2target(this.$refs[formName].$data);
        this.form.target_id = Math.floor(Math.random()*10);
        this.form.target_name = formName.name;
        this.form.target_describe = formName.desc;
        this.form.port_range = formName.port_range;
        this.form.target_range = formName.range;
        this.form.createdate = new Date();
        this.form.last_change_date = new Date();
        this.$message({
                    type: 'info',
                    message: '已成功添加'
                });
                //console.log('输出', res);
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