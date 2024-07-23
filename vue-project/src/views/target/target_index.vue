<template>
    <div>
        <!--
            使用router-view使界面跳转到路由下
        -->
        <router-view :tableData="tableData" @Inserttotarget="Insert2target" @get_target="get_target"></router-view>
    </div>
</template>
      
<script>
export default {
  data(){
    return{
      tableData: [],
      form : {},
      time : '',
      fform : {}
    }
  },
  methods: {
    Gettime(){
        let _this = this;
        let year = new Date().getFullYear(); //获取当前时间的年份
        let month = new Date().getMonth() + 1; //获取当前时间的月份
        let day = new Date().getDate(); //获取当前时间的天数
        let hours = new Date().getHours(); //获取当前时间的小时
        let minutes = new Date().getMinutes(); //获取当前时间的分数
        let seconds = new Date().getSeconds(); //获取当前时间的秒数
        if (hours < 10) {
        hours = "0" + hours;
        }
        if (minutes < 10) {
        minutes = "0" + minutes;
        }
        if (seconds < 10) {
        seconds = "0" + seconds;
        }
        _this.time = year + "/" + month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;
    },
    Insert2target(formName)
    {
        this.form = {
          name: '',
          description: '',
          pl_name: '',
          hosts: [],
          create_time: '',
          last_modify_time: '',
          hosts_total: 0,
        }
        this.form.name = formName.name;
        this.form.description = formName.desc;
        this.form.pl_name = formName.port_list;
        for (let host of formName.hosts){
          this.form.hosts.push(host.value);
        }
        this.Gettime();
        this.form.create_time = this.time;
        this.form.last_modify_time = this.time;
        this.add_target(this.form);
        alert('submit!');
    },
    async add_target(form){
        let res = await this.$api.CreateTarget(form);
        console.log('添加',form);
        if (res.data.status == 200){
          this.$message({
                    type: 'success',
                    message: '添加成功!'
                });
                
        }
    },
    async get_target(){
        let res = await this.$api.GetTarget();
        console.log('输出????', res);
        this.tableData = res.data.data;
        console.log(this.tableData);
    }
  },
  created(){
    this.get_target();
  }
  
}
</script>
    
<style>
    
    
</style>