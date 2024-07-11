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
import Add_target from '@/views/target/target_add/add-target.vue'
import Target_Detail from '@/views/target/target_detail/target-detail.vue'
import Task_Detail from '@/views/task/task_detail/task_detail.vue'
import Task_index from '@/views/task/task_index/task_index.vue'
import Add_task from '@/views/task/task_add/task_add.vue'

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
                }
            ]
        },
        {
            path:'/result',
            name:'result',
            component: Result,
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