import httpInstance from "@/utils/http";
export function getUserAPI ({account,password}){
    return httpInstance({
        url:'/login',
        method:'POST',
        data:{
            account,
            password
        }
    })
}

export const getLikeAPI=({limit=4})=>{
    return httpInstance({
        url:'/goods/relevant',
        params:{
            limit
        }
    })
}