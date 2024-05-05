import Vue from "vue"
import VueRouter from 'vue-router'
import Layout from '@/views/layout/app-index.vue'
import Login from '@/views/login/app-index.vue'
import Home from '@/views/home/Home-index.vue'
import Elements_all from '@/views/elements/elements_all/elements_all.vue'
import Elements_change from '@/views/elements/elements_change/elements_change.vue'

const Elements = ()=>import('@/views/elements/element-index.vue')

Vue.use(VueRouter)

const routes=[
    {
    path:'/',
    component:Layout,
    children:[
        {
            path:'/',
            name:'home',
            component:Home,
        },
        {
            path:'/elements',
            name:'elements',
            component: Elements,
            children:[
                {
                    path:'all',
                    name:Elements_all,
                    component: Elements_all
                },
                {
                    path:'change',
                    name:Elements_change,
                    component: Elements_change
                }
            ]
        }
    ]
    },
    {
        path:'/login',
        name:'login',
        component:Login
    }
]

const router = new VueRouter({
    mode:'history',
    historyApiFallback: true,
    //base: process.env.BASE_URL,
    routes
})

export default router