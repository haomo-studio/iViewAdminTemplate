<template>
    <div id=theme>
        <div id="primary-theme">
            <h3>默认主题色</h3>
            <div class="color1" >
                <ul class="v-primary-bg">
                    <li v-for="item in primary1">
                        {{ item.message }}
                    </li>
                </ul>
            </div>
            <div class="color2">
                <ul class="v-primary-bg v-hue-1">
                    <li v-for="item in primary2">
                        {{ item.message }}
                    </li>
                </ul>
            </div>
            <div class="color3">
                <ul class="v-primary-bg v-hue-2">
                    <li v-for="item in primary3" >
                        {{ item.message }}
                    </li>
                </ul>
            </div>
            <div class="color4">
                <ul class="v-primary-bg v-hue-3">
                    <li v-for="item in primary4">
                        {{ item.message }}
                    </li>
                </ul>
            </div>
        </div>
        <div id="warn-theme">
            <h3>蓝色调</h3>
            <div class="color1" >
                <ul class="v-accent-bg">
                    <li v-for="item in warn1">
                        {{ item.message }}
                    </li>
                </ul>
            </div>
            <div class="color2">
                <ul class="v-accent-bg v-acc-1">
                    <li v-for="item in warn2">
                        {{ item.message }}
                    </li>
                </ul>
            </div>
            <div class="color3">
                <ul class="v-accent-bg v-acc-2">
                    <li v-for="item in warn3" >
                        {{ item.message }}
                    </li>
                </ul>
            </div>
            <div class="color4">
                <ul class="v-accent-bg v-acc-3">
                    <li v-for="item in warn4">
                        {{ item.message }}
                    </li>
                </ul>
            </div>
        </div>
        <div id="Accent-theme">
            <h3>警告色</h3>
            <div class="color1" >
                <ul class="v-warn-bg">
                    <li v-for="item in Accent1">
                        {{ item.message }}
                    </li>
                </ul>
            </div>
            <div class="color2">
                <ul class="v-warn-bg v-warn-1">
                    <li v-for="item in Accent2">
                        {{ item.message }}
                    </li>
                </ul>
            </div>
            <div class="color3">
                <ul class="v-warn-bg v-warn-2">
                    <li v-for="item in Accent3" >
                        {{ item.message }}
                    </li>
                </ul>
            </div>
            <div class="color4">
                <ul class="v-warn-bg v-warn-3">
                    <li v-for="item in Accent4">
                        {{ item.message }}
                    </li>
                </ul>
            </div>
        </div>
        <div id="background-theme">
            <h3>背景色</h3>
            <div class="color1" >
                <ul class="v-background-bg" >
                    <li v-for="item in background1">
                        {{ item.message }}
                    </li>
                </ul>
            </div>
            <div class="color2">
                <ul class="v-background-bg v-background-1">
                    <li v-for="item in background2">
                        {{ item.message }}
                    </li>
                </ul>
            </div>
            <div class="color3">
                <ul class="v-background-bg v-background-2">
                    <li v-for="item in background3" >
                        {{ item.message }}
                    </li>
                </ul>
            </div>
            <div class="color4">
                <ul class="v-background-bg v-background-3">
                    <li v-for="item in background4">
                        {{ item.message }}
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>
<script>
    export default{
        data() {
            return {
                primary1:[
                    {message:'rgb(45,50,62)'},
                    {message:'rgba(255,255,255,1)'},
                    {message:'rgba(255,255,255,0.7)'},
                    {message:'rgba(255,255,255,0.3)'},
                    {message:'rgba(255,255,255,0.12)'},
                    {message:'rgb(45,50,62)'},
                ],
                primary2:[
                    {message:'rgb(60,66,82)'},
                    {message:'rgba(255,255,255,1)'},
                    {message:'rgba(255,255,255,0.7)'},
                    {message:'rgba(255,255,255,0.3)'},
                    {message:'rgba(255,255,255,0.12)'},
                    {message:'rgb(60,66,82)'},
                ],
                primary3:[
                    {message:'rgb(53,58,72)'},
                    {message:'rgba(255,255,255,1)'},
                    {message:'rgba(255,255,255,0.7)'},
                    {message:'rgba(255,255,255,0.3)'},
                    {message:'rgba(255,255,255,0.12)'},
                    {message:'rgb(53,58,72)'},
                ],
                primary4:[
                    {message:'rgb(92,97,111)'},
                    {message:'rgba(255,255,255,1)'},
                    {message:'rgba(255,255,255,0.7)'},
                    {message:'rgba(255,255,255,0.3)'},
                    {message:'rgba(255,255,255,0.12)'},
                    {message:'rgb(92,97,111)'},
                ],
                Accent1:[
                    {message:'rgb(3,155,229)'},
                    {message:'rgba(255,255,255,1)'},
                    {message:'rgba(255,255,255,0.7)'},
                    {message:'rgba(255,255,255,0.3)'},
                    {message:'rgba(255,255,255,0.12)'},
                    {message:'rgb(3,155,229)'},
                ],
                Accent2:[
                    {message:'rgb(41,182,246)'},
                    {message:'rgba(0,0,0,0.87)'},
                    {message:'rgba(0,0,0,0.54)'},
                    {message:'rgba(0,0,0,0.26)'},
                    {message:'rgba(0,0,0,0.12)'},
                    {message:'rgb(41,182,246)'},
                ],
                Accent3:[
                    {message:'rgb(2,136,209)'},
                    {message:'rgba(255,255,255,1)'},
                    {message:'rgba(255,255,255,0.7)'},
                    {message:'rgba(255,255,255,0.3)'},
                    {message:'rgba(255,255,255,0.12)'},
                    {message:'rgb(2,136,209)'},
                ],
                Accent4:[
                    {message:'rgb(128,216,255)'},
                    {message:'rgba(0,0,0,0.87)'},
                    {message:'rgba(0,0,0,0.54)'},
                    {message:'rgba(0,0,0,0.26)'},
                    {message:'rgba(0,0,0,0.12)'},
                    {message:'rgb(128,216,255)'},
                ],
                warn1:[
                    {message:'rgb(244,67,54)'},
                    {message:'rgba(255,255,255,1)'},
                    {message:'rgba(255,255,255,0.7)'},
                    {message:'rgba(255,255,255,0.3)'},
                    {message:'rgba(255,255,255,0.12)'},
                    {message:'rgb(244,67,54)'},
                ],
                warn2:[
                    {message:'rgb(229,115,115)'},
                    {message:'rgba(0,0,0,0.87)'},
                    {message:'rgba(0,0,0,0.54)'},
                    {message:'rgba(0,0,0,0.26)'},
                    {message:'rgba(0,0,0,0.12)'},
                    {message:'rgb(229,115,115)'},
                ],
                warn3:[
                    {message:'rgb(198,40,40)'},
                    {message:'rgba(255,255,255,1)'},
                    {message:'rgba(255,255,255,0.7)'},
                    {message:'rgba(255,255,255,0.3)'},
                    {message:'rgba(255,255,255,0.12)'},
                    {message:'rgb(198,40,40)'},
                ],
                warn4:[
                    {message:'rgb(255,138,128)'},
                    {message:'rgba(0,0,0,0.87)'},
                    {message:'rgba(0,0,0,0.54)'},
                    {message:'rgba(0,0,0,0.26)'},
                    {message:'rgba(0,0,0,0.12)'},
                    {message:'rgb(255,138,128)'},
                ],
                background1:[
                    {message:'rgb(255,255,255)'},
                    {message:'rgba(0,0,0,0.87)'},
                    {message:'rgba(0,0,0,0.54)'},
                    {message:'rgba(0,0,0,0.26)'},
                    {message:'rgba(0,0,0,0.12)'},
                    {message:'rgb(255,255,255)'},
                ],
                background2:[
                    {message:'rgb(255,255,255)'},
                    {message:'rgba(0,0,0,0.87)'},
                    {message:'rgba(0,0,0,0.54)'},
                    {message:'rgba(0,0,0,0.26)'},
                    {message:'rgba(0,0,0,0.12)'},
                    {message:'rgb(255,255,255)'},
                ],
                background3:[
                    {message:'rgb(245,245,245)'},
                    {message:'rgba(0,0,0,0.87)'},
                    {message:'rgba(0,0,0,0.54)'},
                    {message:'rgba(0,0,0,0.26)'},
                    {message:'rgba(0,0,0,0.12)'},
                    {message:'rgb(245,245,245)'},
                ],
                background4:[
                    {message:'rgb(224,224,224)'},
                    {message:'rgba(0,0,0,0.87)'},
                    {message:'rgba(0,0,0,0.54)'},
                    {message:'rgba(0,0,0,0.26)'},
                    {message:'rgba(0,0,0,0.12)'},
                    {message:'rgb(224,224,224)'},
                ]
            }
        },
        method:{

        }
    }
</script>
<style>
    #theme{
        margin: 20px 0;
        width: 100%;
        text-align: center;
    }
    #theme ul li {
        height: 40px;
        width: 100px;
        line-height: 40px;
        border-top:1px solid #CCC;
        width:100%;
    }
    #theme ul li:first-child {
        border-top:none;
    }
    #theme ul li:last-child {
        border-bottom:1px solid #ccc;
    }
    #primary-theme{
        width:24%;
        display: inline-block;
    }
    #warn-theme{
        width:24%;
        margin-left: 10px;
        display: inline-block;
    }
    #Accent-theme{
        width:24%;
        margin-left: 10px;
        display: inline-block;
    }
    #background-theme{
        width:24%;
        margin-left: 10px;
        display: inline-block;
    }
    .color1{
        border:1px solid #ccc;
        height: 240px;
        width: 100%;
    }
    .color2{
        border:1px solid #ccc;
        height: 240px;
        width: 100%;
        margin-top:35px;
    }
    .color3{
        border:1px solid #ccc;
        height: 240px;
        width: 100%;
        margin-top:35px;
    }
    .color4{
        border:1px solid #ccc;
        height: 240px;
        width: 100%;
        margin-top:35px;
    }
    .v-primary-bg{
        background-color: rgb(45,50,62);
        color: rgba(255,255,255,1);
    }
    .v-hue-1{
        background-color:rgb(60,66,82)!important;
        color: rgba(255,255,255,1);
    }
    .v-hue-2{
        background-color:rgb(53,58,72)!important;
        color: rgba(255,255,255,1);
    }
    .v-hue-3{
        background-color:rgb(92,97,111)!important;
        color: rgba(255,255,255,1);
    }
    .v-accent-bg{
        background-color: rgb(3,155,229);
        color: rgba(255,255,255,1);
    }
    .v-acc-1{
        background-color:rgb(41,182,246) !important;
        color: rgba(255,255,255,1);
    }
    .v-acc-2{
        background-color:rgb(2,136,209) !important;
        color: rgba(255,255,255,1);
    }
    .v-acc-3{
        background-color:rgb(128,216,255) !important;
        color: rgba(255,255,255,1);
    }
    .v-warn-bg{
        background-color: rgb(244,67,54);
        color: rgba(255,255,255,1);
    }
    .v-warn-1{
        background-color:rgb(229,115,115) !important;
        color: rgba(255,255,255,1);
    }
    .v-warn-2{
        background-color:rgb(198,40,40) !important;
        color: rgba(255,255,255,1);
    }
    .v-warn-3{
        background-color:rgb(255,138,128) !important;
        color: rgba(255,255,255,1);
    }
    .v-background-bg{
        background-color:rgb(255,255,255);
        color: rgba(0,0,0,0.87);
    }
    .v-background-1{
        background-color:rgb(255,255,255) !important;
        color: rgba(0,0,0,0.87);
    }
    .v-background-2{
        background-color:rgb(245,245,245) !important;
        color: rgba(0,0,0,0.87);
    }
    .v-background-3{
        background-color:rgb(224,224,224) !important;
        color: rgba(0,0,0,0.87);
    }
</style>