<template>    
    <div>
        <router-view :hostD="hostD" :taskD="taskD"></router-view>
    </div>
</template>

<script> 
//import Pagination from '@/component/pagination/page-tabs.vue'
export default {
    data() {
        return {
            activeIndex: '1',
            Data: [],
            host: [],
            hostD: {},
            taskD: {},
            name: '',
            total: 0,
            hostDD: [],
            task_time: 0,
            id: '',
            page: 1
        }
    },
    computed: {
        timeDifferenceInMinutes() {
            const diff = this.getTimeDifference(this.Data[this.$route.query.index].start_time, this.Data[this.$route.query.index].finished_time);
            return diff / 1000 / 60; // 转换为分钟
        }
    }
    ,
    methods: {
        async hostList() {
            let name = this.$route.query.index.name;
            let res1 = await this.$api.QueryTask({ name });
            let res = await this.$api.GetResult({ name });
            console.log('结果:',res);
            this.taskD = res1.data.data[0];
            this.hostD = res.data.data;
            console.log('!!!',this.hostD,this.taskD);
            this.Gonext();
            },
        Goback() {
            this.$router.push('/result/index')
        },
        Gonext(){
            this.$router.push('/result/resultdetail/taskoverview')
        }
    },
    created() {
        this.hostList();
        //this.Gonext();
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

.fontClass {
    font-size: 20px;
    font-family: Microsoft Yahei;
}
</style>