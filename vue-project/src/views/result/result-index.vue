<template>
    <div>
        <div>
            <router-view :tableData="tableData" :hostData="hostData"></router-view>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            tableData: '',
            hostData: '',
            form: {},
            time: '',
        }
    },
    methods: {
        Gettime() {
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
        Insert2target(formName) {
            this.form = {
                task_id: 0,
                task_name: '',
                task_describe: '',
                task_target: '',
                active_scanning_Methods: '',
                task_type: '',
                scheduling_time: '',
                create_time: '',
                last_change_time: '',
                task_status: '',
                task_progress: 0,
            }
            this.form.task_id = this.tableData.length + 1;
            this.form.task_name = formName.name;
            this.form.task_describe = formName.desc;
            this.form.task_target = formName.target;
            this.form.active_scanning_Methods = formName.scan_method;
            this.form.task_type = formName.class;
            this.form.scheduling_time = formName.date1 + ' ' + formName.date2;
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
.header {
    height: 55px;
    background: #fff;
    border-bottom: 2px solid black;
}

.wrapper {
    padding: 10px;
}
</style>