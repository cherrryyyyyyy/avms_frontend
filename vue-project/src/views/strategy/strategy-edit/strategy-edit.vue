<template>
    <div>
        <div class="header">
            <h3>
                <el-button type="primary" @click="Goback" class="detailed" icon="el-icon-back">
                    返回
                </el-button>
                编辑目标
            </h3>
        </div>
        <el-header></el-header>
        <el-header></el-header>
        <div class="wrapper">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm"
                style="width:1300px">
                <el-form-item label="端口扫描策略名称" prop="name">
                    <el-input v-model="ruleForm.name" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="端口扫描策略描述" prop="description">
                    <el-input type="textarea" v-model=ruleForm.description></el-input>
                </el-form-item>
                <el-form-item label="端口扫描策略tcp端口" prop="description">
                    <el-input type="textarea" v-model=ruleForm.tcp_ports></el-input>
                </el-form-item>
                <el-form-item label="端口扫描策略udp端口" prop="description">
                    <el-input type="textarea" v-model=ruleForm.udp_ports></el-input>
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
            data: [],
            ruleForm: [],
        }
    },
    methods: {
        Goback() {
            this.$router.push('/strategy/index')
        },
        submitForm(formName, ruleForm) {
            console.log(ruleForm)
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$emit('strategyedit', ruleForm);
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
            this.Goback();
        },
        init(){
            this.ruleForm = this.$route.query.index;
        }
    },
    created() {
        this.init();
    }
};
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
