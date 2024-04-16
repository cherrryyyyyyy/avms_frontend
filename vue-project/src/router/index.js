import Vue from "vue"
import VueRouter from 'vue-router'
import Layout from '@/views/layout/app-index.vue'
import Login from '@/views/login/app-index.vue'
import Home from '@/views/home/Home-index.vue'

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
    mode:'hash',
    base: process.env.BASE_URL,
    routes
})

export default router