<template>
    <div>
        <!--
            使用router-view使界面跳转到/elements路由下
        -->
        <router-view :tableData="tableData" @Inserttotarget="Insert2target"></router-view>
    </div>
</template>
      
<script>     
export default {
  data(){
    return{
      tableData: '',
      form : {},
    },
    this.tableData = [{
          target_id: 1,
          target_name: '用于测试的目标',
          target_describe: '用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap tcp top10',
          target_range: '192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2024/07/21 15:23:34',
          last_change_date: '2024/07/21 15:23:34'
        },
        {
          target_id: 2,
          target_name: '用于测试的目标1',
          target_describe: '1用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap udp top 5',
          target_range: '192.168.0.1/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2023/07/22 15:24:31',
          last_change_date: '2023/09/22 15:24:31'
        },
        {
          target_id: 3,
          target_name: '用于测试的目标2',
          target_describe: '2用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap udp top 6',
          target_range: '192.168.0.2/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2023/07/31 15:24:31',
          last_change_date: '2023/09/31 15:24:31'
        },
        {
          target_id: 4,
          target_name: '用于测试的目标3',
          target_describe: '3用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap udp top 6',
          target_range: '192.168.0.2/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2023/07/31 15:24:31',
          last_change_date: '2023/09/31 15:24:31'
        },
        {
          target_id: 5,
          target_name: '用于测试的目标4',
          target_describe: '3用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap udp top 6',
          target_range: '192.168.0.2/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2023/07/31 15:24:31',
          last_change_date: '2023/09/31 15:24:31'
        },
        {
          target_id: 6,
          target_name: '用于测试的目标5',
          target_describe: '3用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap udp top 6',
          target_range: '192.168.0.2/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2023/07/31 15:24:31',
          last_change_date: '2023/09/31 15:24:31'
        },
        {
          target_id: 7,
          target_name: '用于测试的目标6',
          target_describe: '3用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap udp top 6',
          target_range: '192.168.0.2/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2023/07/31 15:24:31',
          last_change_date: '2023/09/31 15:24:31'
        },
        {
          target_id: 8,
          target_name: '用于测试的目标7',
          target_describe: '3用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap udp top 6',
          target_range: '192.168.0.2/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2023/07/31 15:24:31',
          last_change_date: '2023/09/31 15:24:31'
        },
        {
          target_id: 9,
          target_name: '用于测试的目标8',
          target_describe: '3用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap udp top 6',
          target_range: '192.168.0.2/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2023/07/31 15:24:31',
          last_change_date: '2023/09/31 15:24:31'
        },
        {
          target_id: 10,
          target_name: '用于测试的目标9',
          target_describe: '3用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap udp top 6',
          target_range: '192.168.0.2/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2023/07/31 15:24:31',
          last_change_date: '2023/09/31 15:24:31'
        },
        {
          target_id: 11,
          target_name: '用于测试的目标10',
          target_describe: '3用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap udp top 6',
          target_range: '192.168.0.2/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2023/07/31 15:24:31',
          last_change_date: '2023/09/31 15:24:31'
        },
        {
          target_id: 12,
          target_name: '用于测试的目标11',
          target_describe: '3用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap udp top 6',
          target_range: '192.168.0.2/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2023/07/31 15:24:31',
          last_change_date: '2023/09/31 15:24:31'
        },
        {
          target_id: 13,
          target_name: '用于测试的目标12',
          target_describe: '3用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap udp top 6',
          target_range: '192.168.0.2/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2023/07/31 15:24:31',
          last_change_date: '2023/09/31 15:24:31'
        },
        {
          target_id: 14,
          target_name: '用于测试的目标13',
          target_describe: '3用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap udp top 6',
          target_range: '192.168.0.2/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2023/07/31 15:24:31',
          last_change_date: '2023/09/31 15:24:31'
        },
        {
          target_id: 15,
          target_name: '用于测试的目标14',
          target_describe: '3用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap udp top 6',
          target_range: '192.168.0.2/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2023/07/31 15:24:31',
          last_change_date: '2023/09/31 15:24:31'
        },
        {
          target_id: 16,
          target_name: '用于测试的目标15',
          target_describe: '3用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap udp top 6',
          target_range: '192.168.0.2/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2023/07/31 15:24:31',
          last_change_date: '2023/09/31 15:24:31'
        },
        {
          target_id: 17,
          target_name: '用于测试的目标16',
          target_describe: '3用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap udp top 6',
          target_range: '192.168.0.2/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2023/07/31 15:24:31',
          last_change_date: '2023/09/31 15:24:31'
        },
        {
          target_id: 18,
          target_name: '用于测试的目标17',
          target_describe: '3用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap udp top 6',
          target_range: '192.168.0.2/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2023/07/31 15:24:31',
          last_change_date: '2023/09/31 15:24:31'
        },{
          target_id: 19,
          target_name: '用于测试的目标18',
          target_describe: '3用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap udp top 6',
          target_range: '192.168.0.2/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2023/07/31 15:24:31',
          last_change_date: '2023/09/31 15:24:31'
        },
        {
          target_id: 20,
          target_name: '用于测试的目标19',
          target_describe: '3用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap udp top 6',
          target_range: '192.168.0.2/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2023/07/31 15:24:31',
          last_change_date: '2023/09/31 15:24:31'
        },
        {
          target_id: 21,
          target_name: '用于测试的目标20',
          target_describe: '3用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap udp top 6',
          target_range: '192.168.0.2/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2023/07/31 15:24:31',
          last_change_date: '2023/09/31 15:24:31'
        },
        {
          target_id: 22,
          target_name: '用于测试的目标21',
          target_describe: '3用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长',
          port_range: 'Nmap udp top 6',
          target_range: '192.168.0.2/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26,192.168.0.0/26',
          create_date: '2023/07/31 15:24:31',
          last_change_date: '2023/09/31 15:24:31'
        }
    ]
  },
  methods: {
    Insert2target(formName)
    {
        this.form = {
          target_id: 0,
          target_name: '',
          target_describe: '',
          port_range: '',
          target_range: '',
          create_date: '',
          last_change_date: ''
        }
        this.form.target_id = Math.floor(Math.random()*10);
        this.form.target_name = formName.name;
        this.form.target_describe = formName.desc;
        this.form.port_range = formName.port_range;
        this.form.target_range = formName.range;
        //this.form.createdate = new Date();
        //this.form.last_change_date = new Date();
        this.tableData.push(this.form);
        alert('submit!');
    }
  }
  
}
</script>
    
<style>
    
    
</style>