<template>
    <div>
        <router-view :tableData="tableData" @Inserttotarget="Insert2target"></router-view>
    </div>
</template>
  
<script>
  
export default {
    data(){
        return{
            tableData: '',
            form : {},
            time : '',
        },
        this.tableData = [{
            task_id:1,
            task_name : '用于测试的任务1',
            task_describe : '用于测试的任务用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长',
            task_target: '任务目标名称',
            active_scanning_Methods: '默认',
            task_type: '按需',
            scheduling_time: '2024/07/21 15:23:34',
            create_time: '2024/07/21 15:23:34',
            last_change_time:'2024/07/21 15:23:34',
            task_status: '',
            task_progress: 13
        },
        {
            task_id:2,
            task_name : '用于测试的任务2',
            task_describe : '用于测试的任务用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长',
            task_target: '任务目标名称',
            active_scanning_Methods: '默认',
            task_type: '按需',
            scheduling_time: '2024/07/21 15:23:34',
            create_time: '2024/07/21 15:23:34',
            last_change_time:'2024/07/21 15:23:34',
            task_status: '',
            task_progress: 25
        },
        {
            task_id:3,
            task_name : '用于测试的任务3',
            task_describe : '用于测试的任务用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长',
            task_target: '任务目标名称',
            active_scanning_Methods: '默认',
            task_type: '按需',
            scheduling_time: '2024/07/21 15:23:34',
            create_time: '2024/07/21 15:23:34',
            last_change_time:'2024/07/21 15:23:34',
            task_status: '',
            task_progress: 41
        },
        {
            task_id:4,
            task_name : '用于测试的任务4',
            task_describe : '用于测试的任务用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长',
            task_target: '任务目标名称',
            active_scanning_Methods: '默认',
            task_type: '按需',
            scheduling_time: '2024/07/21 15:23:34',
            create_time: '2024/07/21 15:23:34',
            last_change_time:'2024/07/21 15:23:34',
            task_status: '',
            task_progress: 12
        },
        {
            task_id:5,
            task_name : '用于测试的任务5',
            task_describe : '用于测试的任务用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长',
            task_target: '任务目标名称',
            active_scanning_Methods: '默认',
            task_type: '按需',
            scheduling_time: '2024/07/21 15:23:34',
            create_time: '2024/07/21 15:23:34',
            last_change_time:'2024/07/21 15:23:34',
            task_status: '',
            task_progress: 3
        },
        {
            task_id:6,
            task_name : '用于测试的任务6',
            task_describe : '用于测试的任务用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长',
            task_target: '任务目标名称',
            active_scanning_Methods: '默认',
            task_type: '按需',
            scheduling_time: '2024/07/21 15:23:34',
            create_time: '2024/07/21 15:23:34',
            last_change_time:'2024/07/21 15:23:34',
            task_status: '',
            task_progress: 98
        },
        {
            task_id:7,
            task_name : '用于测试的任务7',
            task_describe : '用于测试的任务用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长',
            task_target: '任务目标名称',
            active_scanning_Methods: '默认',
            task_type: '按需',
            scheduling_time: '2024/07/21 15:23:34',
            create_time: '2024/07/21 15:23:34',
            last_change_time:'2024/07/21 15:23:34',
            task_status: '',
            task_progress: 100
        },
        {
            task_id:8,
            task_name : '用于测试的任务8',
            task_describe : '用于测试的任务用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长',
            task_target: '任务目标名称',
            active_scanning_Methods: '默认',
            task_type: '按需',
            scheduling_time: '2024/07/21 15:23:34',
            create_time: '2024/07/21 15:23:34',
            last_change_time:'2024/07/21 15:23:34',
            task_status: '',
            task_progress: 20
        },
        {
            task_id:9,
            task_name : '用于测试的任务9',
            task_describe : '用于测试的任务用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长',
            task_target: '任务目标名称',
            active_scanning_Methods: '默认',
            task_type: '按需',
            scheduling_time: '2024/07/21 15:23:34',
            create_time: '2024/07/21 15:23:34',
            last_change_time:'2024/07/21 15:23:34',
            task_status: '',
            task_progress: 41
        },
        {
            task_id:10,
            task_name : '用于测试的任务10',
            task_describe : '用于测试的任务用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长',
            task_target: '任务目标名称',
            active_scanning_Methods: '默认',
            task_type: '按需',
            scheduling_time: '2024/07/21 15:23:34',
            create_time: '2024/07/21 15:23:34',
            last_change_time:'2024/07/21 15:23:34',
            task_status: '',
            task_progress: 53
        },
        {
            task_id:11,
            task_name : '用于测试的任务11',
            task_describe : '用于测试的任务用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长',
            task_target: '任务目标名称',
            active_scanning_Methods: '默认',
            task_type: '按需',
            scheduling_time: '2024/07/21 15:23:34',
            create_time: '2024/07/21 15:23:34',
            last_change_time:'2024/07/21 15:23:34',
            task_status: '',
            task_progress: 32
        },
        {
            task_id:12,
            task_name : '用于测试的任务12',
            task_describe : '用于测试的任务用于测试的目标的描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长长长长长长长描述123123123122313长长长长长长长长长长',
            task_target: '任务目标名称',
            active_scanning_Methods: '默认',
            task_type: '按需',
            scheduling_time: '2024/07/21 15:23:34',
            create_time: '2024/07/21 15:23:34',
            last_change_time:'2024/07/21 15:23:34',
            task_status: '',
            task_progress: 12
        }
    ]
    },
    methods:{
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
            task_id:0,
            task_name : '',
            task_describe : '',
            task_target: '',
            active_scanning_Methods: '',
            task_type: '',
            scheduling_time: '',
            create_time: '',
            last_change_time:'',
            task_status: '',
            task_progress: 0,
            }
            this.form.task_id = this.tableData.length + 1;
            this.form.task_name = formName.name;
            this.form.task_describe = formName.desc;
            this.form.task_target = formName.target;
            this.form.active_scanning_Methods = formName.scan_method;
            this.form.task_type = formName.class;
            this.form.scheduling_time = formName.date1 +' '+ formName.date2;
            this.Gettime();
            this.form.create_time = this.time;
            this.form.last_change_time = this.time;
            this.tableData.push(this.form);
            alert('submit!');
    },
    }
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