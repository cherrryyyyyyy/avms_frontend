<template>
    <div>
      <!--
              使用router-view使界面跳转到路由下
          -->
      <router-view @Inserttopl="Insert2pl" @strategyedit="strategy_edit"></router-view>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {}
      }
    },
    methods: {
      Insert2pl(formName) {
      this.form = {
        name: '',
        description: '',
        tcp_ports: '',
        udp_ports: ''
      }
      this.form.name = formName.name;
      this.form.description = formName.description;
      this.form.tcp_ports = formName.tcp_ports;
      this.form.udp_ports = formName.udp_ports;
      this.add_pl(this.form);
      alert('submit!');
    },
    async add_pl(form){
      let res = await this.$api.CreatePortList(form);
      console.log('添加端口策略', form);
      if (res.data.status == 200) {
        this.$message({
          type: 'success',
          message: '添加成功!'
        });

      }
    },
    strategy_edit(formName){
      this.editstrategy(formName);
    },
    async editstrategy(form){
      let res = await this.$api.UpdatePortList(form);
      console.log('修改', form);
      if (res.data.status == 200) {
        this.$message({
          type: 'success',
          message: '添加成功!'
        });

      }
    }
    }
  
  }
  </script>
  
  <style></style>