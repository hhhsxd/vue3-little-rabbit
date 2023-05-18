import httpInstance from '@/utils/http.js'
//后面跳转分类页也要使用banner这里进行适配接口配置
export function getBannerAPI(params={}){//在分类页渲染的时候传入params
    const {distributionSite='1'}=params//默认的params的distributionSite是1，这是在首页的时候
    return httpInstance({
        url:('/home/banner'),
        params:{
            distributionSite
        }
    })
}