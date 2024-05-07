<template>
  <!--
    layout包在最外侧，里面包含menu左侧导航栏和content右侧内容(包含顶部区域和内容区域)部分
    is_collapse变量定义为判断左侧导航栏是否缩进
    引入menu和content的components，并进行显示
  -->
  <div class="layout">  
    <div class="menu">   
      <Menu :is_collapse="is_collapse" @changeMenu="changeMenu"></Menu> 
    </div>
    <div class="content" :class="{small:is_collapse}">
      <Content :is_collapse="is_collapse"></Content>
    </div>
    </div>
</template>

<script>
import Menu from './menu/menu-index.vue'
import Content from './content/content-index.vue'
export default {
  components:{
    Menu,
    Content
  },
  data(){
    return{
      is_collapse:false
    }
  },
  methods:{
    changeMenu(){
        this.is_collapse=!this.is_collapse;
      }
  }
}
</script>

<style lang="less" scoped>

.layout{
  display: flex;
  
  .menu{
    background: #112f50;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;

  }

  .content{
    padding-left:200px;
    width:100%;
  }
  .small{
    padding-left: 64px;
    width:100%;
  }
  //font-family: "仿宋","Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;
}
</style>