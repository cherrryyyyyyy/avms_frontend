<template>
    <div>
        <div class="header">
            <h3>
                目标详情
            </h3>
            
        </div>
    
        <div class="wrapper">
            <h3>{{$route.query.target_id}}</h3>
           
        </div>
    </div>
</template>
  
<script>
  
export default {
    props:['target_id']
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