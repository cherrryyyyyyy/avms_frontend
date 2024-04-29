<template>
    <div>
        <!-- 组件搜索-->
        <div class="header">
            <div class="form">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="组件名称">
                    <el-input v-model="formInline.name" placeholder="组件名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
                </el-form>  
            </div>
            <div class="group"></div>
        </div>
        
        <div class="content">
            123
        </div>
    </div>
    </template>
      
    <script>
      
    export default {
        data() {
      return {
        formInline: {
          name: ''
        }
      }},
      methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
    }
    </script>
    
    <style lang="less" scoped>
    .header{
        background: #fff;
        margin-bottom: 20px;
        padding: 10px;
    }
    .content{
        background: pink;
    }
    
    
    </style>