//倒计时
//1.传入一开始的时间
//2.定时器编写逻辑
//3.输出格式化后的数据

//导入格式化时间的dayjs
import dayjs from 'dayjs'
//安装duration插件，这里也可以使用unix(time.value)传入秒数
// import duration from "dayjs/plugin/duration"
// dayjs.extend(duration)
export const useCountdown=()=>{
    //记录传入的时间
    const time=ref(0)
    //格式化时间
    const formatTime=computed(()=>dayjs.unix(time.value).format('mm分钟ss秒'))
    //命名定时器
    let timer=null
   //调用的倒计时函数
   
    const start=(currentTime)=>{
        if(timer){
        clearInterval(timer)
    }
        time.value=currentTime
        timer= setInterval(() => {
        time.value--
    }, 1000);
    }
    //组件卸载后清空定时器
    onUnmounted(()=>{
        clearInterval(timer)
    })
    
    return{
        formatTime,
        start
    }
}