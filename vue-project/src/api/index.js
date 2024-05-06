//公共的请求方法

import axios from "axios";
import base from "./base";

const api ={
    elementList(){
        return axios.get(base.elementList);
    }
};

export default api