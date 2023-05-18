<script setup>
defineProps({
    title:{
        type:String,
        default:''
    },
    subTitle:{
        type:String,
        default:''
    }
})
</script>
<template>
    <div class="home-panel">
       <div class="container">
        <div class="head">
            <!-- 标题区 -->
            <h3>
                {{ title }}<small>{{ subTitle }}</small>
            </h3>
        </div>
        <div>
            <!-- 主体内容 -->
            <slot name="main"/>
        </div>
       </div>
    </div>
</template>

<style lang='scss' scoped>
.home-panel{
    background-color: #fff;
    .head{
        padding: 40px 0;
        h3{
            font-size: 32px;
            margin-left: 6px;
            height: 35px;
            line-height: 35px;
            font-weight: 400;
            small{
                font-size: 16px;
                color: #999;
                margin-left: 20px;
            }
        }
    }
}

</style>
