import axios,{AxiosResponse,AxiosRequestConfig} from "axios";
import {Message} from "element-ui";

const service = axios.create({
    timeout:10000 //超时请求
});

// 请求拦截
service.interceptors.request.use((config:AxiosRequestConfig) =>{
    return config
},(err:any)=>{
    return  Promise.reject(err);
});

//响应拦截
service.interceptors.response.use((response:AxiosResponse) =>{
    return response;
},(err:any)=>{
    let errMsg:string = "";
    if(err && err.response.status){
        switch (err.response.status) {
            case 401:
                errMsg = "登录失效，请重新登录";
                break;
            case 403:
                errMsg = "拒绝访问";
                break;
            case 408:
                errMsg = "请求超时";
                break;
            case 501:
                errMsg = "服务未实现";
                break;
            case 502:
                errMsg = "网关错误";
                break;
            case 503:
                errMsg = "服务器不可用";
                break;
            default :
                errMsg =  err.response.data.msg;
                break;
        }
    }else{
        errMsg = err;
    }
    Message.error(errMsg);
    return Promise.reject(errMsg);
} )

export default service;
