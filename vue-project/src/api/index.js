//公共的请求方法

import axios from "axios";
import base from "./base";

const api ={
    //定义api时有包含传参的必须添加参数定义，即params，否则req.query.()无法传值
    elementList(params){
        return axios.get(base.elementList,{params})
    },
    search(params){
        return axios.get(base.search,{params})
    },
    deleteElements(params){
        return axios.get(base.deleteElements,{params})
    },
    targetList(params){
        return axios.get(base.targetList,{params})
    },
    GetTarget(){
        return axios.get(base.GetTarget)
    },
    GetPorts(){
        return axios.get(base.GetPorts)
    },
    GetAliveMethods(){
        return axios.get(base.GetAliveMethods)
    },
    CreateTarget(params){
        return axios({
            url: base.CreateTarget,
            method: 'post',
            data: params
        })
    },
    DeleteTarget(params){
        return axios.get(base.DeleteTarget,{params})
    },
    UpdateTarget(params){
        return axios({
            url: base.UpdateTarget,
            method: 'post',
            data: params
        })
    },
    GetResult(params){
        return axios.get(base.GetResult,{params})
    },
    GetTask(){
        return axios.get(base.GetTask)
    },
    GetCves(params){
        return axios.get(base.GetCves,{params})
    },
    GetActiveMethods(){
        return axios.get(base.GetActiveMethods)
    },
    CreatePortList(params){
        return axios({
            url: base.CreatePortList,
            method: 'post',
            data: params
        })
    },
    DeletePortList(params){
        return axios.get(base.DeletePortList,{params})
    },
    UpdatePortList(params){
        return axios({
            url: base.UpdatePortList,
            method: 'post',
            data: params
        })
    },
    StartTask(params){
        return axios.get(base.StartTask,{params})
    },
    CreateTask(params){
        return axios({
            url: base.CreateTask,
            method: 'post',
            data: params
        })
    },
    DeleteTask(params){
        return axios.get(base.DeleteTask,{params})
    },
    QueryTask(params){
        return axios.get(base.QueryTask,{params})
    }

};

export default api