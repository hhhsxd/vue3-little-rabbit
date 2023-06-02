<script setup>
// 图片列表
defineProps({
    imageList:{
        type:Array,
        default:()=>[]
    }
})
//小图标交互效果
const activeImage=ref(0)
const imageChange=(i)=>activeImage.value=i
//放大镜效果
const target=ref(null)
console.log(useMouseInElement(target));
const {elementX,elementY,isOutside}=useMouseInElement(target)

const x=ref(0)
const y=ref(0)
// console.log(isOutside);要用value访问因为是ref()
//监听Mouse移动位置
//watch可以监听ref,getter函数,数组，不能直接监听响应式对象的属性值
watch([elementX,elementY,isOutside],()=>{
//判断放大镜出界
    if(isOutside.value) return 
   //控制移动范围
   if(elementX.value>=100&&elementX.value<=300){
    x.value=elementX.value-100
   }
   if(elementY.value>=100&&elementY.value<=300){
    y.value=elementY.value-100
   }
   //上面之控制了鼠标在图片最中心区域的移动，如果鼠标在稍靠边的地方移动会有bug，所以还需控制边缘情况
   if(elementX.value>300){x.value=200}
   if(elementY.value>300){y.value=200}
   if(elementX.value<100){x.value=0}
   if(elementY.value<100){y.value=0}

})

</script>
<template>
   <div class="goods-image">
    <!--大图 绑定ref-->
    <div class="middle" ref="target">
        <img :src="imageList[activeImage]" alt="">
        <!-- 放大镜 -->
        <div class="layer" :style="{left:`${x}px`,top:`${y}px`}" v-show="!isOutside"></div>
    </div>
    <!-- 小图 -->
    <ul class="small">
        <li v-for="(img,i) in imageList" :key="i" @mouseenter="imageChange(i)" :class="{active:activeImage===i}">
            <img :src="img" alt="">
        </li>
    </ul>
    <!-- 放大镜效果 -->
        <div class="large" :style="{
            backgroundImage:`url(${imageList[activeImage]})`,
            backgroundPositionX:`${-x*2}px`,
            backgroundPositionY:`${-y*2}px`}
        " v-show="!isOutside" ></div>
   </div>
</template>

<style lang='scss' scoped>
.goods-image{
    width: 480px;
    height: 400px;
    position: relative;
    display: flex;
    .middle{
        width:400px;
        height: 400px;
        background: #f5f5f5;
        .layer{
            position: absolute;
            left: 0;
            top:0;
            width: 200px;
            height: 200px;
            background-color: rgba(0,0,0,.2);
        }
    }
    .large{
        position: absolute;
        top: 0;
        left: 410px;
        width: 400px;
       height: 400px;
       z-index: 100;
       box-shadow: 0 0 10px rgba(0,0,0,.1);
       background-size: 800px;
       background-color: #f8f8f8;
       background-repeat: no-repeat;

    }
    .small{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 80px;
        li{
            width: 70px;
            height: 70px;
            margin-left: 10px;
            cursor: pointer;
            &:hover,
           &.active{
            border: 2px solid $xtxColor;
           }
           }

           
        }
    }


</style>
