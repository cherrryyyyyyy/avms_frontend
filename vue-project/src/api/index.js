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
    }

};

export default api