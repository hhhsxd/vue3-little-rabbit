import httpInstance from '@/utils/http.js'

export function getHotAPI(){
    return httpInstance({
        url:'/home/hot'
    })
}