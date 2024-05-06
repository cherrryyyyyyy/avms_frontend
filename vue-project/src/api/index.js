//公共的请求方法

import axios from "axios";
import base from "./base";

const api ={
    elementList(params){
        return axios.get(base.elementList,{params})
    }
};

export default api