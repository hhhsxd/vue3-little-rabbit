import httpInstance from '@/utils/http'

export function getCateAPI(){
    return httpInstance({
        url: '/home/category/head'
    })
}
