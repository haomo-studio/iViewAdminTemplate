<style>
    .wrap{padding:50px 20px;}
 .h1{
     margin-top:30px;
 }
 .anchor{
     margin-top:15px;
     font-weight: 300;
 }
 .cont{
     margin-top: 15px;
     font-size: 14px;
     padding-right: 15px;
 }
 .tit1{
     font-size: 16px;
     margin-top: 20px;
 }
 .ul1 li{

 }
 .demo-font-img{
     width: 100%;
 }
 .chinafont{
     margin-top: 15px;
     font-size: 14px;
     margin-left: 25px;
 }
 .f14{
     font-size: 14px;
 }
 .f16{
     font-size: 16px;
 }
    .twrap{
        background: red;
    }
    .tleft{
        float:left;
        width:47%;
        
    }
    .table{
        margin: 0 auto;
        width:100%;
        border-collapse: collapse;
    }
    .table th{
        border: 1px solid #e9e9e9;
        text-align: center;
        padding:12px 10px;
    }
    .table td{
        border: 1px solid #e9e9e9;
        text-align: center;
        padding: 12px 10px;
    }
    .table thead{
        background: #f7f7f7;
    }
</style>
<template>
    <div class="wrap">
        <h1 _v-7946e36e="" class="h1">Font 字体</h1>
        <div class="anchor" _v-7946e36e>
            <h2>概述</h2>
        </div>
        <p _v-7946e36e="" class="cont">iView 的 CSS 对字体进行了统一规范，力求在不同平台、浏览器下能显示出其最佳的效果。我们推荐 <i class="ivu-icon ivu-icon-social-apple f16" ></i><!--v-component--> macOS（iOS）优先的策略，在不支持苹方字体的情况，使用备用字体。</p>
        <p class="tit1">字体预览</p>
        <ul _v-7946e36e class="ul1">
            <li _v-7946e36e class="chinafont">中文字体</li>
            <img class="demo-font-img" src="http://v1.iviewui.com/dist/aac43973c6b6d72bf7aa852ecb2302c5.png" _v-7946e36e />
            <li _v-7946e36e class="chinafont">英文字体</li>
            <img class="demo-font-img" src="http://v1.iviewui.com/dist/f4b37f948e311cb4bbcb609b17b8db62.png" />
        </ul>
        <p class="tit1">字体代码</p>
        <pre _v-53d23a6d="" class="bg"><code _v-53d23a6d="" class="css f14 hljs">
            <span class="hljs-rule"><span class="hljs-attribute">font-family</span>:<span class="hljs-value"> <span class="hljs-string">"Helvetica Neue"</span>,Helvetica,<span class="hljs-string">"PingFang SC"</span>,<span class="hljs-string">"Hiragino Sans GB"</span>,<span class="hljs-string">"Microsoft YaHei"</span>,<span class="hljs-string">"微软雅黑"</span>,Arial,sans-serif</span></span>;</code></pre>
        <div class="tit1">字体使用规范</div>

        <div class="twrap">
            <div class="tleft">
            <table class="table">
                <thead>
                    <tr>
                        <th>中文字体</th>
                        <th>示例</th>
                        <th>粗细</th>
                        <th>颜色</th>
                        <th>字号</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>主标题</td>
                        <td>
                            <span style="font-size: 16px;font-weight: bold;color: #464c5b">我是标题</span>
                        </td>
                        <td>加粗</td>
                        <td>#464c5b</td>
                        <td>16px</td>
                    </tr>
                    <tr>
                        <td>次级标题</td>
                        <td>
                            <span style="font-size: 14px;font-weight: bold;color: #464c5b">我是标题</span>
                        </td>
                        <td>加粗</td>
                        <td>#464c5b</td>
                        <td>14px</td>
                    </tr>
                    <tr>
                        <td>小标题</td>
                        <td>
                            <span style="font-size: 12px;font-weight: bold;color: #464c5b">我是标题</span>
                        </td>
                        <td>加粗</td>
                        <td>#464c5b</td>
                        <td>12px</td>
                    </tr>
                    <tr>
                        <td>正文</td>
                        <td>
                            <span style="color: #657180">我是正文</span>
                        </td>
                        <td>默认</td>
                        <td>#657180</td>
                        <td>12px</td>
                    </tr>
                    <tr>
                        <td>辅助文字</td>
                        <td>
                            <span style="color: #9ea7b4">我是辅助文字</span>
                        </td>
                        <td>默认</td>
                        <td>#9ea7b4</td>
                        <td>12px</td>
                    </tr>
                    <tr>
                        <td>失效文字</td>
                        <td>
                            <span style="color: #c3cbd6">我是失效文字</span>
                        </td>
                        <td>默认</td>
                        <td>#c3cbd6</td>
                        <td>12px</td>
                    </tr>
                    <tr>
                        <td>链接文字</td>
                        <td>
                            <span style="color: #3399ff">我是链接文字</span>
                        </td>
                        <td>默认</td>
                        <td>#3399ff</td>
                        <td>12px</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div class="tleft" style="margin-left: 40px">
                <table class="table">
                    <thead>
                    <tr>
                        <th>英文字体</th>
                        <th>示例</th>
                        <th>粗细</th>
                        <th>颜色</th>
                        <th>字号</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Main Head</td>
                        <td>
                            <span style="font-size: 16px;font-weight: bold;color: #464c5b">this is an example</span>
                        </td>
                        <td>bold</td>
                        <td>#464c5b</td>
                        <td>16px</td>
                    </tr>
                    <tr>
                        <td>Sub Head</td>
                        <td>
                            <span style="font-size: 14px;font-weight: bold;color: #464c5b">This is an example</span>
                        </td>
                        <td>bold</td>
                        <td>#464c5b</td>
                        <td>14px</td>
                    </tr>
                    <tr>
                        <td>Small Head</td>
                        <td>
                            <span style="font-size: 12px;font-weight: bold;color: #464c5b">This is an example</span>
                        </td>
                        <td>bold</td>
                        <td>#464c5b</td>
                        <td>12px</td>
                    </tr>
                    <tr>
                        <td>Text</td>
                        <td>
                            <span style="color: #657180">This is an example</span>
                        </td>
                        <td>normal</td>
                        <td>#657180</td>
                        <td>12px</td>
                    </tr>
                    <tr>
                        <td>Help</td>
                        <td>
                            <span style="color: #9ea7b4">This is an example</span>
                        </td>
                        <td>normal</td>
                        <td>#9ea7b4</td>
                        <td>12px</td>
                    </tr>
                    <tr>
                        <td>Disabled</td>
                        <td>
                            <span style="color: #c3cbd6">This is an example</span>
                        </td>
                        <td>normal</td>
                        <td>#c3cbd6</td>
                        <td>12px</td>
                    </tr>
                    <tr>
                        <td>Link</td>
                        <td>
                            <span style="color: #3399ff">This is an example</span>
                        </td>
                        <td>normal</td>
                        <td>#3399ff</td>
                        <td>12px</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>
<script>
    export default {

    }
</script>