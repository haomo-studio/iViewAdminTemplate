<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }

    .layout-logo {
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    .layout-nav {
        width: 420px;
        margin: 0 auto;
    }

    .layout-assistant {
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }

    .layout-breadcrumb {
        padding: 10px 15px 0;
    }

    .layout-content {
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }

    .layout-content-main {
        padding: 10px;
    }

    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }

    /*第二部分样式*/
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }

    .layout-logo {
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    .layout-nav {
        width: 420px;
        margin: 0 auto;
    }

    .layout-assistant {
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }

    .layout-breadcrumb {
        padding: 10px 15px 0;
    }

    .layout-content {
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }

    .layout-content-main {
        padding: 10px;
    }

    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }

    /*第三部分样式*/
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
    }

    .layout-breadcrumb {
        padding: 10px 15px 0;
    }

    .layout-content {
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }

    .layout-content-main {
        padding: 10px;
    }

    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }

    .layout-menu-left {
        background: #464c5b;
    }

    .layout-header {
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }

    .layout-logo-left {
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }

    /*第四部分*/
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-logo {
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    .layout-header {
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }

    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }

    .layout-ceiling {
        background: #464c5b;
        padding: 10px 0;
        overflow: hidden;
    }

    .layout-ceiling-main {
        float: right;
        margin-right: 15px;
    }

    .layout-ceiling-main a {
        color: #9ba7b5;
    }

    /*第五部分*/
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-breadcrumb {
        padding: 10px 15px 0;
    }

    .layout-content {
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }

    .layout-content-main {
        padding: 10px;
    }

    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }

    .layout-menu-left {
        background: #464c5b;
    }

    .layout-header {
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }

    .layout-logo-left {
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }

    .layout-ceiling-main a {
        color: #9ba7b5;
    }

    .layout-hide-text .layout-text {
        display: none;
    }

    .ivu-col {
        transition: width .2s ease-in-out;
    }

    .separate {
        margin-top: 20px;

    }

    .box {
        padding: 20px 20px;
    }

    .division {
        width: 100%;
        height: 0px;
        border-top: 1px dashed #eee;
        margin-top: 20px;
    }

    .codeTitle {
        text-align: center;
        padding-top: 12px;
        cursor: pointer;
        border-left: 1px solid #eee;
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
        padding-bottom: 12px;
    }
</style>


<template>
    <div class="box" id="box">
        <div class="layout separate">
            <Menu mode="horizontal" theme="dark" active-key="1">
                <div class="layout-logo"></div>
                <div class="layout-nav">
                    <Menu-item key="1">
                        <Icon type="ios-navigate" style="font-size: 14px;"></Icon>
                        导航一
                    </Menu-item>
                    <Menu-item key="2">
                        <Icon type="ios-keypad" style="font-size: 14px;"></Icon>
                        导航二
                    </Menu-item>
                    <Menu-item key="3">
                        <Icon type="ios-analytics" style="font-size: 14px;"></Icon>
                        导航三
                    </Menu-item>
                    <Menu-item key="4">
                        <Icon type="ios-paper" style="font-size: 14px;"></Icon>
                        导航四
                    </Menu-item>
                </div>
            </Menu>
            <Menu mode="horizontal" active-key="1">
                <div class="layout-assistant">
                    <Menu-item key="1">二级导航</Menu-item>
                    <Menu-item key="2">二级导航</Menu-item>
                    <Menu-item key="3">二级导航</Menu-item>
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
        <!--隔离部分-->
        <div class="division"></div>
        <!--显示代码的区域-->
        <div>
            <header class="codeTitle" v-on="click: toggleShow()">
                <Icon type="chevron-down" style="font-size: 12px"></Icon>
                显示代码
            </header>
        </div>
        <div></div>
        <!--第二部分模板-->
        <div class="layout separate">
            <Menu mode="horizontal" theme="dark" active-key="1">
                <div class="layout-logo"></div>
                <div class="layout-nav">
                    <Menu-item key="1">
                        <Icon type="ios-navigate" style="font-size: 14px;"></Icon>
                        导航一
                    </Menu-item>
                    <Menu-item key="2">
                        <Icon type="ios-keypad" style="font-size: 14px;"></Icon>
                        导航二
                    </Menu-item>
                    <Menu-item key="3">
                        <Icon type="ios-analytics" style="font-size: 14px;"></Icon>
                        导航三
                    </Menu-item>
                    <Menu-item key="4">
                        <Icon type="ios-paper" style="font-size: 14px;"></Icon>
                        导航四
                    </Menu-item>
                </div>
            </Menu>
            <Menu mode="horizontal" active-key="1">
                <div class="layout-assistant">
                    <Menu-item key="1">二级导航</Menu-item>
                    <Menu-item key="2">二级导航</Menu-item>
                    <Menu-item key="3">二级导航</Menu-item>
                </div>
            </Menu>
            <div class="layout-content">
                <Row>
                    <i-col span="5">
                        <Menu active-key="1-2" width="auto" :open-keys="['1']">
                            <Submenu key="1">
                                <template slot="title">
                                    <Icon type="ios-navigate" style="font-size: 14px;"></Icon>
                                    导航一
                                </template>
                                <Menu-item key="1-1">选项 1</Menu-item>
                                <Menu-item key="1-2">选项 2</Menu-item>
                                <Menu-item key="1-3">选项 3</Menu-item>
                            </Submenu>
                            <Submenu key="2">
                                <template slot="title">
                                    <Icon type="ios-keypad" style="font-size: 14px;"></Icon>
                                    导航二
                                </template>
                                <Menu-item key="2-1">选项 1</Menu-item>
                                <Menu-item key="2-2">选项 2</Menu-item>
                            </Submenu>
                            <Submenu key="3">
                                <template slot="title">
                                    <Icon type="ios-analytics" style="font-size: 14px;"></Icon>
                                    导航三
                                </template>
                                <Menu-item key="3-1">选项 1</Menu-item>
                                <Menu-item key="3-2">选项 2</Menu-item>
                            </Submenu>
                        </Menu>
                    </i-col>
                    <i-col span="19">
                        <div class="layout-content-main">内容区域</div>
                    </i-col>
                </Row>
            </div>
            <div class="layout-copy">
                2011-2016 &copy; TalkingData
            </div>
        </div>
        <!--隔离部分-->
        <div class="division"></div>
        <!--显示代码的区域-->
        <div>
            <header class="codeTitle" v-on="click: toggleShow()">
                <Icon type="chevron-down" style="font-size: 12px"></Icon>
                显示代码
            </header>
        </div>
        <!--第三部分-->
        <div class="layout separate">
            <Row type="flex">
                <i-col span="5" class="layout-menu-left">
                    <Menu active-key="1-2" theme="dark" width="auto" :open-keys="['1']">
                        <div class="layout-logo-left"></div>
                        <Submenu key="1">
                            <template slot="title">
                                <Icon type="ios-navigate" style="font-size: 14px;"></Icon>
                                导航一
                            </template>
                            <Menu-item key="1-1">选项 1</Menu-item>
                            <Menu-item key="1-2">选项 2</Menu-item>
                            <Menu-item key="1-3">选项 3</Menu-item>
                        </Submenu>
                        <Submenu key="2">
                            <template slot="title">
                                <Icon type="ios-keypad" style="font-size: 14px;"></Icon>
                                导航二
                            </template>
                            <Menu-item key="2-1">选项 1</Menu-item>
                            <Menu-item key="2-2">选项 2</Menu-item>
                        </Submenu>
                        <Submenu key="3">
                            <template slot="title">
                                <Icon type="ios-analytics" style="font-size: 14px;"></Icon>
                                导航三
                            </template>
                            <Menu-item key="3-1">选项 1</Menu-item>
                            <Menu-item key="3-2">选项 2</Menu-item>
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
                        <div class="layout-content-main">内容区域</div>
                    </div>
                    <div class="layout-copy">
                        2011-2016 &copy; TalkingData
                    </div>
                </i-col>
            </Row>
        </div>
        <!--隔离部分-->
        <div class="division"></div>
        <!--显示代码的区域-->
        <div>
            <header class="codeTitle" v-on="click: toggleShow()">
                <Icon type="chevron-down" style="font-size: 12px"></Icon>
                显示代码
            </header>
        </div>
        <!--第四部分-->
        <div class="layout separate">
            <div class="layout-ceiling">
                <div class="layout-ceiling-main">
                    <a href="#">注册登录</a> |
                    <a href="#">帮助中心</a> |
                    <a href="#">安全中心</a> |
                    <a href="#">服务大厅</a>
                </div>
            </div>
            <div class="layout-header">
                <div class="layout-logo"></div>
            </div>
            <div style="height: 200px"></div>
            <div class="layout-copy">
                2011-2016 &copy; TalkingData
            </div>
        </div>
        <!--隔离部分-->
        <div class="division"></div>
        <!--显示代码的区域-->
        <div>
            <header class="codeTitle" v-on="click: toggleShow()">
                <Icon type="chevron-down" style="font-size: 12px"></Icon>
                显示代码
            </header>
        </div>
        <!--第五部分-->
        <div class="layout separate" :class="{'layout-hide-text': spanLeft < 5}">
            <Row type="flex">
                <i-col :span="spanLeft" class="layout-menu-left">
                    <Menu active-key="1" theme="dark" width="auto">
                        <div class="layout-logo-left"></div>
                        <Menu-item key="1">
                            <Icon type="ios-navigate" :size="iconSize"></Icon>
                            <span class="layout-text">选项 1</span>
                        </Menu-item>
                        <Menu-item key="2">
                            <Icon type="ios-keypad" :size="iconSize"></Icon>
                            <span class="layout-text">选项 2</span>
                        </Menu-item>
                        <Menu-item key="3">
                            <Icon type="ios-analytics" :size="iconSize"></Icon>
                            <span class="layout-text">选项 3</span>
                        </Menu-item>
                    </Menu>
                </i-col>
                <i-col :span="spanRight">
                    <div class="layout-header">
                        <i-button type="text" @click="toggleClick">
                            <Icon type="navicon" size="32"></Icon>
                        </i-button>
                    </div>
                    <div class="layout-breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb-item href="#">首页</Breadcrumb-item>
                            <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                            <Breadcrumb-item>某应用</Breadcrumb-item>
                        </Breadcrumb>
                    </div>
                    <div class="layout-content">
                        <div class="layout-content-main">内容区域</div>
                    </div>
                    <div class="layout-copy">
                        2011-2016 &copy; TalkingData
                    </div>
                </i-col>
            </Row>
        </div>
        <!--隔离部分-->
        <div class="division"></div>
        <!--显示代码的区域-->
        <div>
            <header class="codeTitle" v-on="click: toggleShow()">
                <Icon type="chevron-down" style="font-size: 12px"></Icon>
                显示代码
            </header>
        </div>


    </div>
</template>

<script>
    export default {
        data () {
        return {
            spanLeft: 5,
            spanRight: 19
        }
    },
    computed: {
        iconSize () {
            return this.spanLeft === 5 ? 14 : 24;
        }
    },
    methods: {
        toggleClick () {
            if (this.spanLeft === 5) {
                this.spanLeft = 2;
                this.spanRight = 22;
            } else {
                this.spanLeft = 5;
                this.spanRight = 19;
            }
        }
    }
    }

</script>
