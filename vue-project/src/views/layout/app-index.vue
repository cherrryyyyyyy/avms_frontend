<template>
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
}
</style>