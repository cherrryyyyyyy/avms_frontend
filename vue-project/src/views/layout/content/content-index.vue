<template>
    <div>
      <!--顶部-->
      <div class="header">
        <h3>
            顶部区域
        </h3>
        </div>
      <!--可变内容-->
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    
  }
  </script>

<style lang="less" scoped>
.header{
    height:50px;
    width:1900px;
    background: #1e78bf;


}

</style>