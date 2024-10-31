<template>
    <div>
        <router-view :tableData="tableData" @Inserttotarget="Insert2target" @ChangeTask="ChangeTask"></router-view>
    </div>
</template>

<script>

export default {
    data() {
        return {
            tableData: '',
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
                name: '',
                description: '',
                type: '',
                schedule_time: '',
                tgt_name: '',
                asmethod: '',
            }
            this.form.name = formName.name;
            this.form.description = formName.description;
            this.form.type = formName.type;
            this.form.asmethod = formName.asmethod;
            this.form.tgt_name = formName.target;
            if(formName.type == 'schedule'){
                this.form.schedule_time = formName.date1 + ' ' + formName.date2;
            }
            this.add_task(this.form);
            alert('submit!');
        },
        async add_task(form){
            let res = await this.$api.CreateTask(form);
            console.log('添加任务', form);
            if (res.data.status == 200) {
                this.$message({
                type: 'success',
                message: '添加成功!'
                });
            }
        }
        ,
        ChangeTask(formName) {
            console.log(formName.task_id);
            this.tableData[formName.task_id - 1].task_name = formName.task_name;
            this.tableData[formName.task_id - 1].task_describe = formName.task_describe;
            this.tableData[formName.task_id - 1].task_target = formName.task_target;
            this.tableData[formName.task_id - 1].active_scanning_Methods = formName.active_scanning_Methods;
            this.tableData[formName.task_id - 1].task_type = formName.task_type;
            this.tableData[formName.task_id - 1].scheduling_time = formName.date1 + ' ' + formName.date2;
            this.Gettime();
            this.tableData[formName.task_id - 1].last_change_time = this.time;
            alert('change!');
        }
    },
    created() {
        this.$store.commit('saveTaskData', this.tableData);
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