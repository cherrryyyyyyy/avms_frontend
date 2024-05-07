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
    }
};

export default api