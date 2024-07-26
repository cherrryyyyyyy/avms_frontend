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
        },
            this.tableData = [{
                result_id: 1,
                result_task_name: '用于测试的任务1',
                result_start_time: '2024/07/21 15:23:34',
                result_end_time: '2024/07/21 15:23:34',
                result_status: '完成',
                active_hosts: '10',
                vulnerabilities_count: '20',
                //hosts : this.hostData[0]
            },
            {
                result_id: 2,
                result_task_name: '用于测试的任务2',
                result_start_time: '2024/07/21 15:23:34',
                result_end_time: '2024/07/21 15:23:34',
                result_status: '进行中',
                active_hosts: '',
                vulnerabilities_count: '',
                //hosts : this.hostData[1]
            },
            ],
            this.hostData = [
                [{
                    host_id: 1,
                    host_name: '192.168.0.2',
                    host_OEM: 'huawei',
                    host_model: 'XXX',
                    host_OS: 'Linux',
                    host_open_ports: 10,
                    host_hr_vul: 20,
                    host_mr_vul: 20,
                    host_lr_vul: 10
                },
                {
                    host_id: 2,
                    host_name: '192.168.0.3',
                    host_OEM: 'huawei',
                    host_model: 'XXX',
                    host_OS: 'Linux',
                    host_open_ports: 10,
                    host_hr_vul: 20,
                    host_mr_vul: 20,
                    host_lr_vul: 10
                },
                {
                    host_id: 3,
                    host_name: '192.168.0.2',
                    host_OEM: 'huawei',
                    host_model: 'XXX',
                    host_OS: 'Linux',
                    host_open_ports: 10,
                    host_hr_vul: 20,
                    host_mr_vul: 20,
                    host_lr_vul: 10
                },
                {
                    host_id: 4,
                    host_name: '192.168.0.2',
                    host_OEM: 'huawei',
                    host_model: 'XXX',
                    host_OS: 'Linux',
                    host_open_ports: 10,
                    host_hr_vul: 20,
                    host_mr_vul: 20,
                    host_lr_vul: 10
                },
                {
                    host_id: 5,
                    host_name: '192.168.0.2',
                    host_OEM: 'huawei',
                    host_model: 'XXX',
                    host_OS: 'Linux',
                    host_open_ports: 10,
                    host_hr_vul: 20,
                    host_mr_vul: 20,
                    host_lr_vul: 10
                },
                {
                    host_id: 6,
                    host_name: '192.168.0.2',
                    host_OEM: 'huawei',
                    host_model: 'XXX',
                    host_OS: 'Linux',
                    host_open_ports: 10,
                    host_hr_vul: 20,
                    host_mr_vul: 20,
                    host_lr_vul: 10
                },
                {
                    host_id: 7,
                    host_name: '192.168.0.2',
                    host_OEM: 'huawei',
                    host_model: 'XXX',
                    host_OS: 'Linux',
                    host_open_ports: 10,
                    host_hr_vul: 20,
                    host_mr_vul: 20,
                    host_lr_vul: 10
                },
                {
                    host_id: 8,
                    host_name: '192.168.0.2',
                    host_OEM: 'huawei',
                    host_model: 'XXX',
                    host_OS: 'Linux',
                    host_open_ports: 10,
                    host_hr_vul: 20,
                    host_mr_vul: 20,
                    host_lr_vul: 10
                },
                ],
                [{
                    host_id: 1,
                    host_name: '192.168.0.4',
                    host_OEM: 'huawei',
                    host_model: 'XXX',
                    host_OS: 'Linux',
                    host_open_ports: 10,
                    host_hr_vul: 20,
                    host_mr_vul: 20,
                    host_lr_vul: 10
                },
                {
                    host_id: 2,
                    host_name: '192.168.0.5',
                    host_OEM: 'huawei',
                    host_model: 'XXX',
                    host_OS: 'Linux',
                    host_open_ports: 10,
                    host_hr_vul: 20,
                    host_mr_vul: 20,
                    host_lr_vul: 10
                }]
            ]
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