<template>
    <div>
      <!--
        左侧导航栏设计，使用element-ui组件
      -->
      <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#091527"
      text-color="#fff"
      active-text-color="#ffd04b" router :collapse="is_collapse">
      <el-menu-item index>
        <!--
          changeMenu为调整缩放函数，绑定在click事件上，在methods中对changeMenu进行定义
        -->
        <i class="el-icon-s-operation" @click="changeMenu"></i>
        <span slot="title">原子组件配置系统</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!--
        el-submenu index="……"指向导航栏项目跳转的路由对象
        submenu为下拉选项，本身不可点击
        此submenu中包含两个子选项，查看组件和组件更改，分别对应/elements/all和/elements/change路由
        el-menu-item-group表明这两个选项在submenu下同属一组
      -->
      <!--
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
      -->
      <el-menu-item index="/target">
        <i class="el-icon-aim"></i>
        <span slot="title">目标</span>
      </el-menu-item>
      <el-menu-item index="/tasks">
        <i class="el-icon-postcard"></i>
        <span slot="title">任务</span>
      </el-menu-item>
      <el-menu-item index="/result">
        <i class="el-icon-document"></i>
        <span slot="title">结果</span>
      </el-menu-item>
      
      <el-menu-item index="/management">
        <i class="el-icon-setting"></i>
        <span slot="title">管理</span>
      </el-menu-item>
    </el-menu>
    </div>
  </template>
  
  <script>
  
  //从上一级传参is_collapse，is_collapse在layout的app-index.vue中定义
  export default {
    props:['is_collapse'],
    methods:{
      changeMenu(){
        //此处$emit指向上一级layout的app-index.vue中定义额度changeMenu函数，将is_collapse响应式变量置反
        this.$emit('changeMenu');
      }
    }
  }
  </script>

<style lang="less" scoped>

.el-menu{
  border-right :0;
  .is-active{
    background: #5D90F7 !important;
    color: #fff !important;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>