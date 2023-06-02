import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/userinfo'
import router from '@/router/index'
const httpInstance=axios.create({
    baseURL:'https://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
})
//请求拦截器
httpInstance.interceptors.request.use(config =>{
   //从pinia获取token
//    console.log(config)
   const userStore=useUserStore()
   const token=userStore.userInfo.token
   if(token){
    //2.配置携带token
    config.headers.Authorization=`Bearer ${token}`
   }
    return config
},e=>{
    // console.log(e+'request');
    return Promise.reject(e)})
//响应拦截器这两个都返回promise
httpInstance.interceptors.response.use(res =>res.data,e=>{
    //配置错误的提示弹窗
    ElMessage({
        type:'warning',
        message:e.response.data.msg
    })
    //定义一下退出账号后的行为401页面
    if(e.response.status===401){
        const userStore=useUserStore()
        userStore.clearUserInfo()
        router.push('/login')
    }
    return Promise.reject(e)
})

export default httpInstance
