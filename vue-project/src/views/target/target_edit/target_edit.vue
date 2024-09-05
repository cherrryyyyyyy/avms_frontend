<template>
    <div>
        <div class="header">
            <h3>
                <el-button type="text" @click="Goback" class="detailed">
                    <h3>
                        ← 返回
                    </h3>
                </el-button>
                编辑目标
            </h3>
        </div>
        <el-header></el-header>
        <el-header></el-header>
        <div class="wrapper">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm"
                style="width:1300px">
                <el-form-item label="组件名称" prop="name">
                    <el-input v-model="ruleForm.name" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="组件描述" prop="description">
                    <el-input type="textarea" v-model="ruleForm.description"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm', ruleForm)">修改</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            Data: [],
            ruleForm: [],
            id: this.$route.query.index,
        }
    },
    methods: {
        Goback() {
            this.$router.push('/target/index')
        },
        async gettarget() {
            let res = await this.$api.GetTarget();
            this.Data = res.data.data;
            this.ruleForm = this.Data[this.id];
            console.log(this.ruleForm);
        },
        submitForm(formName, ruleForm) {
            console.log(ruleForm)
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$emit('targetedit', ruleForm);
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
            this.Goback();
        }
    },
    created() {
        this.gettarget();
    }
};
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
