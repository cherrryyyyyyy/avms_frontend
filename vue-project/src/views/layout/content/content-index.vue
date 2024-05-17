<template>
    <div>
      <!--顶部-->
      <div class="header">
        <h3>
            顶部区域
        </h3>
        </div>
      <!--可变内容，通过router-view重定向-->
      <div class="wrapper">
        <router-view></router-view>
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
    
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