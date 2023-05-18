import httpInstance from '@/utils/http'

export function getProductAPI(){
    return httpInstance({
        url:'/home/goods'
    })
}