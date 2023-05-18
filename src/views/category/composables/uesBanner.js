//封装banner
import {getBannerAPI} from '@/apis/banner'

export function useBanner(){
    const bannerList=ref([])
    const  getBanner=async()=>{
    const res=await getBannerAPI({
        distributionSite:'2'
    })  
    bannerList.value=res.result
}

    onMounted(()=>getBanner())
    return {
        bannerList
    } 
}