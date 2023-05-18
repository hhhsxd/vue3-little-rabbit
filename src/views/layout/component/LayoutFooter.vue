<script setup>
</script>

<template>
<footer class="app-footer">
    <div class="container">
        <div class="contact">
            <div class="container">
           <dl>
           <dt>客户服务</dt> 
            <dd><i class="iconfont icon-kefu"></i>在线客服</dd>
            <dd><i class="iconfont icon-question"></i>问题反馈</dd>
           </dl>
           <dl>
           <dt>关注我们</dt> 
            <dd><i class="iconfont icon-weixin"></i>公众号</dd>
            <dd><i class="iconfont icon-weibo"></i>微博</dd>
           </dl>
           <dl>
           <dt>下载APP</dt> 
            <dd class="qrcode"><img src="@/assets/images/qrcode.jpg"></dd>
            <dd class="download">
                <span>扫描二维码</span> 
                <span>立马下载APP</span>
                <a href="javascript:;">下载页面</a>
            </dd>
           </dl>
           <dl>
           <dt>服务热线</dt>
            <dd class="hotline">400-0000-000<small> 周一至周日 8:00-18:00</small></dd>
           </dl>
         </div>
        </div>
        <div class="extra">
            <div class="container">
                <div class="slogan">
                    <a href="javascript:;">
                        <i class="iconfont icon-footer01"></i>
                        <span>价格亲民</span>
                    </a>
                    <a href="javascript:;">
                        <i class="iconfont icon-footer02"></i>
                        <span>物流快捷</span>
                    </a>
                    <a href="javascript:;">
                        <i class="iconfont icon-footer03"></i>
                        <span>品质新鲜</span>
                    </a>
                </div>
                <div class="copyright">
            <p>
                <a href="javascript:;">关于我们</a>
                <a href="javascript:;">帮助中心</a>
                <a href="javascript:;">售后服务</a>
                <a href="javascript:;">配送与验收</a>
                <a href="javascript:;">商务合作</a>
                <a href="javascript:;">搜索推荐</a>
                <a href="javascript:;">友情链接</a>
            </p>
            <p>CopyRight © 小兔鲜儿</p>
        </div>
            </div>
        </div>
        
        
    </div>
</footer>
</template>

<style scoped lang="scss">
.app-footer{
    overflow: hidden;
        background-color: #f5f5f5;
    padding-top: 20px ;
 .contact{
        background-color: #fff;
       
        .container{
            display: flex;
            padding:60px 0 40px ;
            
            }
            dl{
                position: relative;
                flex: 1;
                height: 190px;
                text-align: center;
                padding: 0 72px;
                border-right: 1px solid #f2f2f2;
                color: #999;
                  &:last-child{
                     border-right: none;
                }
            }
            dt{
                font-size: 18px;
                line-height: 1;
            }
            dd{
              position:absolute;
                width:92px;
                height:92px;
                top: 36px;
                left: 50%;
                padding-top: 10px;
                transform: translateX(-97px);//额外再移动5px
                border: 1px solid #ededed;
                &:last-child{
                    transform: translateX(5px);
                }
                .iconfont{
                    font-size: 36px;
                    display: block;
                    color: #666;
                }
            }
            .qrcode{
                padding: 7px;
            }
            .download{
                border: none;
                font-size: 14px;
                span{
                    display: block;
                }
                a{
                    display: block;
                    padding: 10px 15px;
                    margin-top: 5px;
                    color: #fff;
                    line-height: 1;
                    background-color: $xtxColor;
                    border-radius: 2px;
                }
            }
            .hotline{
                padding-top: 20px;
                border: none;
                width:auto;
                height: auto;
                position: static;
                font-size: 22px;
                color: #666;
                small{
                    display: block;
                    font-size: 15px;
                    color: #999;
                }
            }
        }
        .extra{
            background-color: #333;
        }
        .slogan{
            display: flex;
            height: 178px;
            justify-content: space-around;
            align-items: center;
            border-bottom: 1px solid #434343;
            a{
                color: #fff;
                font-size: 28px;
                height: 58px;
                line-height: 58px;
                i{
                    font-size: 50px;
                    vertical-align: middle;
                    margin-right: 10px;
                }
                span{
                    vertical-align: middle;
                
                }
            }
        }
        .copyright{
            height: 170px;
            margin-top: 40px;

            p{
                display: flex;
                justify-content: center;
                color: #999;
                margin-bottom: 20px;
                a{
                color: #999;
                display:inline-block;
                padding: 0 10px;
                font-size: 15px;
                border-right: 1px solid #999;
                &:last-child{
                    border: none;

                }
            }
            }
            
        }
    }


</style>