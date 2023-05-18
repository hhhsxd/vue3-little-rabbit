import axios from 'axios'

const httpInstance=axios.create({
    baseURL:'https://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
})
//请求拦截器
httpInstance.interceptors.request.use(config =>{
   
    return config
},e=>{
    console.log(e+'request');
    return Promise.reject(e)})
//响应拦截器这两个都返回promise
httpInstance.interceptors.response.use(res =>res.data,e=>{
    console.log(e);
    return Promise.reject(e)
})

export default httpInstance
