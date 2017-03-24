<template>
    <div >
        <img :src="person">
    </div>
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <Menu-item name="1">
                    <Icon type="ios-navigate"></Icon>
                    导航一
                </Menu-item>
                <Menu-item name="2">
                    <Icon type="ios-keypad"></Icon>
                    导航二
                </Menu-item>
                <Menu-item name="3">
                    <Icon type="ios-analytics"></Icon>
                    导航三
                </Menu-item>
                <Menu-item name="4">
                    <Icon type="ios-paper"></Icon>
                    导航四
                </Menu-item>
            </div>
        </Menu>
        <Menu mode="horizontal" active-name="1">
            <div class="layout-assistant">
                <Menu-item name="1">二级导航</Menu-item>
                <Menu-item name="2">二级导航</Menu-item>
                <Menu-item name="3">二级导航</Menu-item>
            </div>
        </Menu>
        <div class="layout-breadcrumb">
            <Breadcrumb>
                <Breadcrumb-item href="#">首页</Breadcrumb-item>
                <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                <Breadcrumb-item>某应用</Breadcrumb-item>
            </Breadcrumb>
        </div>
        <div class="layout-content">
            内容区域
        </div>
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
    <!--<Row class="userCenter-top">-->
        <!--<i-col span="4" >-->
            <!--<Icon type="android-hangout" class="icon"></Icon>-->
            <!--<Icon type="person" class="icon"></Icon>-->
            <!--<Icon type="lightbulb" class="icon"></Icon>-->
            <!--<Icon type="star" style="color:#ffb300;border-right:1px solid #ddd" class="icon"></Icon>-->
        <!--</i-col>-->
        <!--<i-col span="14">col-12</i-col>-->
        <!--<i-col span="6">col-12</i-col>-->
    <!--</Row>-->
</template>
<script>
    export default {
      data(){
          return {
              person:'img/back-img.jpg'
          }

      }
    }
</script>

<style>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
   /*.userCenter-top{*/
       /*position:fixed;*/
       /*top:0;*/
       /*left:0;*/
       /*border:1px solid #ddd;*/
   /*}*/
    /*.icon{*/
        /*font-size: 2em;*/
        /*padding:4% 6%;*/
    /*}*/
</style>