<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        /*background: #fff;*/
        border-radius: 10px;
        padding: 6px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }

    .layout h2 {
        color: white;
    }
</style>
<template>
    <div class="layout">
        <Row type="flex">
            <i-col span="5" class="layout-menu-left">
                <Menu active-key="1-2" theme="dark" width="auto" :open-keys="['1']">
                    <div class="layout-logo-left">
                        <h2>北京毫末科技有限公司</h2>
                    </div>
                    <Submenu key="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            UI
                        </template>
                        <Menu-item key="1-1" v-link="{path: '/ui/form'}">表单</Menu-item>
                        <Menu-item key="1-2" v-link="{path: '/ui/icons'}">图标</Menu-item>
                        <Menu-item key="1-3" v-link="{path: '/ui/words'}">文字</Menu-item>
                        <Menu-item key="1-4" v-link="{path: '/ui/buttons'}">按钮</Menu-item>
                        <Menu-item key="1-5" v-link="{path: '/ui/layout'}">布局</Menu-item>
                        <Menu-item key="1-6" v-link="{path: '/ui/themes'}">主题</Menu-item>
                    </Submenu>
                    <Submenu key="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            组件
                        </template>
                        <Menu-item key="2-1" v-link="{path: '/module/cards'}">卡片</Menu-item>
                        <Menu-item key="2-2" v-link="{path: '/module/chart'}">图表</Menu-item>
                        <Menu-item key="2-3" v-link="{path: '/module/map'}">地图</Menu-item>
                        <Menu-item key="2-4" v-link="{path: '/module/table'}">表格</Menu-item>
                    </Submenu>
                    <Submenu key="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            页面
                        </template>
                        <Menu-item key="3-1" v-link="{path: '/page/userAuthentification'}">用户认证页面</Menu-item>
                        <Menu-item key="3-2" v-link="{path: '/page/errPage'}">错误页面</Menu-item>
                        <Menu-item key="3-2" v-link="{path: '/page/userCenter'}">个人中心</Menu-item>
                    </Submenu>
                    <Submenu key="4">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            应用
                        </template>
                        <Menu-item key="4-1" v-link="{path: '/applications/oa'}">办公系统</Menu-item>
                        <Menu-item key="4-2" v-link="{path: '/applications/eBusiness'}">电商</Menu-item>
                    </Submenu>
                </Menu>
            </i-col>
            <i-col span="19">
                <div class="layout-header"></div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                        <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                        <Breadcrumb-item>某应用</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <!--<div class="layout-content-main">内容区域</div>-->
                    <router-view></router-view>
                </div>
                <div class="layout-copy">
                    2011-2017 &copy; 北京毫末科技有限公司
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    export default {

    }
</script>