<template>
    <div>
      <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#112f50"
      text-color="#fff"
      active-text-color="#ffd04b" router :collapse="is_collapse">
      <el-menu-item index>
        <i class="el-icon-s-operation" @click="changeMenu"></i>
        <span slot="title">原子组件配置系统</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="/elements">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span>组件管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/elements/all"><i class="el-icon-s-grid"></i>
            <span>查看组件</span></el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/elements/change"><i class="el-icon-s-grid"></i>
            <span>组件更改</span></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="/login">
        <i class="el-icon-user-solid"></i>
        <span slot="title">人员登录</span>
      </el-menu-item>
    </el-menu>
    </div>
  </template>
  
  <script>
  
  export default {
    props:['is_collapse'],
    methods:{
      changeMenu(){
        this.$emit('changeMenu');
      }
    }
  }
  </script>

<style lang="less" scoped>

.el-menu{
  border-right :0;
  .is-active{
    background: #1e78bf !important;
    color: #fff !important;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>