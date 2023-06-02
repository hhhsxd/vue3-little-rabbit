<script setup>
</script>
<template>
    <div class="xtx-member">
        <div class="container">
            <div class="aside">
                <h4>我的账户</h4>
                <div class="links">
                    <router-link to="/member">个人中心</router-link>
                </div>
                <h4>交易管理</h4>
                <div class="links">
                    <router-link to="/member/order">我的订单</router-link>
                </div>
            </div>
            <!-- 三级路由 -->
            <div class="article">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
    .xtx-member{
        margin-top: 20px;
        .container{
            display: flex;
            .aside{
                width:220px;
                background-color: #fff;
                border-radius: 2px;
                margin-right: 20px;
                h4{
                    font-size:  18px;
                    font-weight: 400;
                    padding: 20px 52px 5px;
                    border-top: 1px solid #f6f6f6;
                }
                .links{
                    padding: 0 52px 10px;
                    a{
                        display: block;
                        font-size: 14px;
                        line-height: 1;
                        padding: 15px 0;
                        color: #666;
                        position:relative;
                        &:hover{
                            color:$xtxColor;
                        }
                        &:before{
                            display: none;
                            content: "";
                            width:6px;
                            height:6px;
                            border-radius: 50%;
                            background-color: $xtxColor;
                            // margin-right:16px;这个有点不太优雅
                            position: absolute;
                            //指定了相对定位这个圈圈就跑到a位置内部去啦
                            top:19px;
                            left:-16px;
                        }
                        &.active,
                        &.router-link-exact-active{
                            color:$xtxColor;
                            &:before{
                                display: inline-block;
                            }
                        }
                       

                    }
                }
            }
            .article{
                width:1000px;
                background-color: #fff;
            }
        }
    }

</style>
