import Vue from "vue"
import VueRouter from 'vue-router'
import Layout from '@/views/layout/app-index.vue'
import Login from '@/views/login/app-index.vue'
import Home from '@/views/home/Home-index.vue'
import Elements_all from '@/views/elements/elements_all/elements_all.vue'
import Target from '@/views/target/target_index.vue'
import Elements_change from '@/views/elements/elements_change/elements_change.vue'
import Target_index from '@/views/target/target-index/target-index.vue'
import Task from '@/views/task/task-index.vue'
import Result from '@/views/result/result-index.vue'
import Manage from '@/views/manage/manage-index.vue'
import Resource from '@/views/resource/resource_index.vue'
import Strategy from '@/views/strategy/strategy_index.vue'
import Add_target from '@/views/target/target_add/add-target.vue'
import Target_Detail from '@/views/target/target_detail/target-detail.vue'
import Task_Detail from '@/views/task/task_detail/task_detail.vue'
import Task_index from '@/views/task/task_index/task_index.vue'
import Add_task from '@/views/task/task_add/task_add.vue'
import Result_index from "@/views/result/result_index/result_index.vue"
import Result_Detail from "@/views/result/result_detail/result_detail.vue"
import Hosts_Detail from "@/views/result/hosts_detail/hosts_detail.vue"
import Task_Change from "@/views/task/task_change/task_change.vue"
import Target_edit from "@/views/target/target_edit/target_edit.vue"
import Resource_index from "@/views/resource/resource-index/resource-index.vue"
import Resource_detail from "@/views/resource/resource-detail/resource-detail.vue"
import Strategy_index from "@/views/strategy/strategy-index/strategy-index.vue"
import Add_strategy from "@/views/strategy/strategy-add/strategy-add.vue"
import Strategy_edit from "@/views/strategy/strategy-edit/strategy-edit.vue"
import Strategy_detail from "@/views/strategy/strategy-detail/strategy-detail.vue"

const Elements = ()=>import('@/views/elements/element-index.vue')

Vue.use(VueRouter)

const routes=[
    {
    path:'/',   //根路由，组件为layout下的app-index.vue
    component:Layout,
    children:[    //子路由
        {
            path:'/',  //一级子路由'/'，默认显示，内容为home下的Home-index.vue，即首页内容
            name:'home',
            component:Home,
        },
        {
            path:'/elements',   //一级子路由 /elements
            name:'elements',
            component: Elements,
            children:[
                {
                    path:'all',  //二级子路由 /elements/all 显示elements_all.vue
                    name:Elements_all,
                    component: Elements_all
                },
                {
                    path:'change', //二级子路由 /elements/change 显示elements_change.vue
                    name:Elements_change,
                    component: Elements_change
                }
            ]
        },
        {
            path:'/target',
            name:'target',
            component: Target,
            children:[
                {
                    path:'index',
                    name: Target_index,
                    component: Target_index
                },
                {
                    path:'addtarget',
                    name: Add_target,
                    component: Add_target
                },
                {
                    path:'targetdetail',
                    name: Target_Detail,
                    component: Target_Detail
                },
                {
                    path:'targetedit',
                    name: Target_edit,
                    component: Target_edit
                }
            ]
        },
        {
            path:'/task',
            name:'task',
            component: Task,
            children:[
                {
                    path:'index',
                    name: Task_index,
                    component: Task_index
                },
                {
                    path:'addtask',
                    name: Add_task,
                    component: Add_task
                },
                {
                    path:'taskdetail',
                    name: Task_Detail,
                    component: Task_Detail
                },
                {
                    path:'taskchange',
                    name: Task_Change,
                    component: Task_Change
                }
            ]
        },
        {
            path:'/result',
            name:'result',
            component: Result,
            children:[
                {
                    path:'index',
                    name: Result_index,
                    component: Result_index
                },
                {
                    path:'resultdetail',
                    name: Result_Detail,
                    component: Result_Detail
                },
                {
                    path:'hostsdetail',
                    name: Hosts_Detail,
                    component: Hosts_Detail
                }
            ]
        },
        {
            path:'/strategy',
            name:'strategy',
            component: Strategy,
            children:[
                {
                    path:'index',
                    name: Strategy_index,
                    component: Strategy_index
                },
                {
                    path:'addstrategy',
                    name: Add_strategy,
                    component: Add_strategy
                },
                {
                    path:'strategyedit',
                    name: Strategy_edit,
                    component: Strategy_edit
                },
                {
                    path:'strategydetail',
                    name: Strategy_detail,
                    component: Strategy_detail
                }
            ]
        },
        {
            path:'/resource',
            name:'resource',
            component: Resource,
            children:[
                {
                    path:'index',
                    name: Resource_index,
                    component: Resource_index
                },
                {
                    path:'resourceedit',
                    name: Resource_detail,
                    component: Resource_detail
                }
            ]
        },
        {
            path:'/manage',
            name:'manage',
            component: Manage,
        }
    ]
    },
    {
        path:'/login',  //跟路由  /login，显示login下的app-index.vue
        name:'login',
        component:Login
    }
]

const router = new VueRouter({
    mode:'history',    
    historyApiFallback: true,   //使用history模式，historyApiFallback使路由在刷新时从根节点进行刷新
    //base: process.env.BASE_URL,
    routes   //包含上面定义的路由
})

export default router