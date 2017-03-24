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
        <div class="layout separate" id="item1">
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
            <pre v-if="showPre1"  _v-53d23a6d=""><code _v-53d23a6d="" class="html hljs xml"><span class="hljs-tag">&lt;<span
                    class="hljs-title">style</span> <span class="hljs-attribute">scoped</span>&gt;</span><span
                    class="css">
    <span class="hljs-class">.layout</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">border</span>:<span class="hljs-value"> <span
                class="hljs-number">1px</span> solid <span class="hljs-hexcolor">#d7dde4</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span
                class="hljs-hexcolor">#f5f7f9</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-logo</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span
                class="hljs-number">100px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span
                class="hljs-number">30px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span
                class="hljs-hexcolor">#5b6270</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">border-radius</span>:<span class="hljs-value"> <span
                class="hljs-number">3px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">position</span>:<span
                class="hljs-value"> relative</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">top</span>:<span class="hljs-value"> <span
                class="hljs-number">15px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">left</span>:<span class="hljs-value"> <span
                class="hljs-number">20px</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-nav</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span
                class="hljs-number">420px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">margin</span>:<span class="hljs-value"> <span
                class="hljs-number">0</span> auto</span></span>;
    }</span>
    <span class="hljs-class">.layout-assistant</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span
                class="hljs-number">300px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">margin</span>:<span class="hljs-value"> <span
                class="hljs-number">0</span> auto</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span
                class="hljs-value"> inherit</span></span>;
    }</span>
    <span class="hljs-class">.layout-breadcrumb</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">padding</span>:<span class="hljs-value"> <span
                class="hljs-number">10px</span> <span class="hljs-number">15px</span> <span class="hljs-number">0</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-content</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">min-height</span>:<span class="hljs-value"> <span
                class="hljs-number">200px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">margin</span>:<span class="hljs-value"> <span
                class="hljs-number">15px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">overflow</span>:<span
                class="hljs-value"> hidden</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span
                class="hljs-hexcolor">#fff</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">border-radius</span>:<span class="hljs-value"> <span
                class="hljs-number">4px</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-content-main</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">padding</span>:<span class="hljs-value"> <span
                class="hljs-number">10px</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-copy</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">text-align</span>:<span
                class="hljs-value"> center</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">padding</span>:<span class="hljs-value"> <span
                class="hljs-number">10px</span> <span class="hljs-number">0</span> <span class="hljs-number">20px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">color</span>:<span class="hljs-value"> <span
                class="hljs-hexcolor">#9ea7b4</span></span></span>;
    }</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-title">style</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span
            class="hljs-value">"layout"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Menu</span> <span class="hljs-attribute">mode</span>=<span
            class="hljs-value">"horizontal"</span> <span class="hljs-attribute">theme</span>=<span
            class="hljs-value">"dark"</span> <span class="hljs-attribute">active-key</span>=<span
            class="hljs-value">"1"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span
            class="hljs-value">"layout-logo"</span>&gt;</span><span class="hljs-tag">&lt;/<span
            class="hljs-title">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span
            class="hljs-value">"layout-nav"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span
            class="hljs-attribute">key</span>=<span class="hljs-value">"1"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span
            class="hljs-value">"ios-navigate"</span>&gt;</span><span class="hljs-tag">&lt;/<span
            class="hljs-title">Icon</span>&gt;</span>
                    导航一
                <span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span
            class="hljs-attribute">key</span>=<span class="hljs-value">"2"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span
            class="hljs-value">"ios-keypad"</span>&gt;</span><span class="hljs-tag">&lt;/<span
            class="hljs-title">Icon</span>&gt;</span>
                    导航二
                <span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span
            class="hljs-attribute">key</span>=<span class="hljs-value">"3"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span
            class="hljs-value">"ios-analytics"</span>&gt;</span><span class="hljs-tag">&lt;/<span
            class="hljs-title">Icon</span>&gt;</span>
                    导航三
                <span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span
            class="hljs-attribute">key</span>=<span class="hljs-value">"4"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span
            class="hljs-value">"ios-paper"</span>&gt;</span><span class="hljs-tag">&lt;/<span
            class="hljs-title">Icon</span>&gt;</span>
                    导航四
                <span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Menu</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Menu</span> <span class="hljs-attribute">mode</span>=<span
            class="hljs-value">"horizontal"</span> <span class="hljs-attribute">active-key</span>=<span
            class="hljs-value">"1"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span
            class="hljs-value">"layout-assistant"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span
            class="hljs-attribute">key</span>=<span class="hljs-value">"1"</span>&gt;</span>二级导航<span
            class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span
            class="hljs-attribute">key</span>=<span class="hljs-value">"2"</span>&gt;</span>二级导航<span
            class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span
            class="hljs-attribute">key</span>=<span class="hljs-value">"3"</span>&gt;</span>二级导航<span
            class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Menu</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span
            class="hljs-value">"layout-breadcrumb"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Breadcrumb</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">Breadcrumb-item</span> <span class="hljs-attribute">href</span>=<span
            class="hljs-value">"#"</span>&gt;</span>首页<span class="hljs-tag">&lt;/<span class="hljs-title">Breadcrumb-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">Breadcrumb-item</span> <span class="hljs-attribute">href</span>=<span
            class="hljs-value">"#"</span>&gt;</span>应用中心<span class="hljs-tag">&lt;/<span
            class="hljs-title">Breadcrumb-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">Breadcrumb-item</span>&gt;</span>某应用<span
            class="hljs-tag">&lt;/<span class="hljs-title">Breadcrumb-item</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-title">Breadcrumb</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span
            class="hljs-value">"layout-content"</span>&gt;</span>
            内容区域
        <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span
            class="hljs-value">"layout-copy"</span>&gt;</span>
            2011-2016 &amp;copy; TalkingData
        <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {

    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
            </code></pre>
            <header class="codeTitle" @click="showPre($event,1,'item1')">
                <Icon type="chevron-down" v-if="!showPre1"></Icon>
                <Icon type="chevron-up" v-else></Icon>
                显示代码
            </header>
        </div>
        <div></div>
        <!--第二部分模板-->
        <div class="layout separate" id="item2">
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
            <pre v-if="showPre2" _v-53d23a6d=""><code _v-53d23a6d="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">style</span> <span class="hljs-attribute">scoped</span>&gt;</span><span class="css">
    <span class="hljs-class">.layout</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">border</span>:<span class="hljs-value"> <span class="hljs-number">1px</span> solid <span class="hljs-hexcolor">#d7dde4</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#f5f7f9</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-logo</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">30px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#5b6270</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">border-radius</span>:<span class="hljs-value"> <span class="hljs-number">3px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">position</span>:<span class="hljs-value"> relative</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">top</span>:<span class="hljs-value"> <span class="hljs-number">15px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">left</span>:<span class="hljs-value"> <span class="hljs-number">20px</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-nav</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">420px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">margin</span>:<span class="hljs-value"> <span class="hljs-number">0</span> auto</span></span>;
    }</span>
    <span class="hljs-class">.layout-assistant</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">300px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">margin</span>:<span class="hljs-value"> <span class="hljs-number">0</span> auto</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> inherit</span></span>;
    }</span>
    <span class="hljs-class">.layout-breadcrumb</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">padding</span>:<span class="hljs-value"> <span class="hljs-number">10px</span> <span class="hljs-number">15px</span> <span class="hljs-number">0</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-content</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">min-height</span>:<span class="hljs-value"> <span class="hljs-number">200px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">margin</span>:<span class="hljs-value"> <span class="hljs-number">15px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">overflow</span>:<span class="hljs-value"> hidden</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#fff</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">border-radius</span>:<span class="hljs-value"> <span class="hljs-number">4px</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-content-main</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">padding</span>:<span class="hljs-value"> <span class="hljs-number">10px</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-copy</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">text-align</span>:<span class="hljs-value"> center</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">padding</span>:<span class="hljs-value"> <span class="hljs-number">10px</span> <span class="hljs-number">0</span> <span class="hljs-number">20px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">color</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#9ea7b4</span></span></span>;
    }</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-title">style</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Menu</span> <span class="hljs-attribute">mode</span>=<span class="hljs-value">"horizontal"</span> <span class="hljs-attribute">theme</span>=<span class="hljs-value">"dark"</span> <span class="hljs-attribute">active-key</span>=<span class="hljs-value">"1"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-logo"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-nav"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"1"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ios-navigate"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
                    导航一
                <span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"2"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ios-keypad"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
                    导航二
                <span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"3"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ios-analytics"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
                    导航三
                <span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"4"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ios-paper"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
                    导航四
                <span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Menu</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Menu</span> <span class="hljs-attribute">mode</span>=<span class="hljs-value">"horizontal"</span> <span class="hljs-attribute">active-key</span>=<span class="hljs-value">"1"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-assistant"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"1"</span>&gt;</span>二级导航<span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"2"</span>&gt;</span>二级导航<span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"3"</span>&gt;</span>二级导航<span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Menu</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-content"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Row</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">i-col</span> <span class="hljs-attribute">span</span>=<span class="hljs-value">"5"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">Menu</span> <span class="hljs-attribute">active-key</span>=<span class="hljs-value">"1-2"</span> <span class="hljs-attribute">width</span>=<span class="hljs-value">"auto"</span> <span class="hljs-attribute">:open-keys</span>=<span class="hljs-value">"['1']"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">Submenu</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"1"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-title">template</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"title"</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ios-navigate"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
                                导航一
                            <span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"1-1"</span>&gt;</span>选项 1<span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"1-2"</span>&gt;</span>选项 2<span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"1-3"</span>&gt;</span>选项 3<span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-title">Submenu</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">Submenu</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"2"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-title">template</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"title"</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ios-keypad"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
                                导航二
                            <span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"2-1"</span>&gt;</span>选项 1<span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"2-2"</span>&gt;</span>选项 2<span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-title">Submenu</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">Submenu</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"3"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-title">template</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"title"</span>&gt;</span>
                                <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ios-analytics"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
                                导航三
                            <span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"3-1"</span>&gt;</span>选项 1<span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"3-2"</span>&gt;</span>选项 2<span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-title">Submenu</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-title">Menu</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-title">i-col</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">i-col</span> <span class="hljs-attribute">span</span>=<span class="hljs-value">"19"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-content-main"</span>&gt;</span>内容区域<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-title">i-col</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-title">Row</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-copy"</span>&gt;</span>
            2011-2016 &amp;copy; TalkingData
        <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {

    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
            </code></pre>
            <header class="codeTitle" @click="showPre($event,2,'item2')">
                <Icon type="chevron-down" v-if="!showPre2"></Icon>
                <Icon type="chevron-up" v-else></Icon>
                显示代码
            </header>
        </div>
        <!--第三部分-->
        <div class="layout separate" id="item3">
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
            <pre v-if="showPre3" _v-53d23a6d=""><code _v-53d23a6d="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">style</span> <span class="hljs-attribute">scoped</span>&gt;</span><span class="css">
    <span class="hljs-class">.layout</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">border</span>:<span class="hljs-value"> <span class="hljs-number">1px</span> solid <span class="hljs-hexcolor">#d7dde4</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#f5f7f9</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">position</span>:<span class="hljs-value"> relative</span></span>;
    }</span>
    <span class="hljs-class">.layout-breadcrumb</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">padding</span>:<span class="hljs-value"> <span class="hljs-number">10px</span> <span class="hljs-number">15px</span> <span class="hljs-number">0</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-content</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">min-height</span>:<span class="hljs-value"> <span class="hljs-number">200px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">margin</span>:<span class="hljs-value"> <span class="hljs-number">15px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">overflow</span>:<span class="hljs-value"> hidden</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#fff</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">border-radius</span>:<span class="hljs-value"> <span class="hljs-number">4px</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-content-main</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">padding</span>:<span class="hljs-value"> <span class="hljs-number">10px</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-copy</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">text-align</span>:<span class="hljs-value"> center</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">padding</span>:<span class="hljs-value"> <span class="hljs-number">10px</span> <span class="hljs-number">0</span> <span class="hljs-number">20px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">color</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#9ea7b4</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-menu-left</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#464c5b</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-header</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">60px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#fff</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">box-shadow</span>:<span class="hljs-value"> <span class="hljs-number">0</span> <span class="hljs-number">1px</span> <span class="hljs-number">1px</span> <span class="hljs-function">rgba</span>(<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,.<span class="hljs-number">1</span>)</span></span>;
    }</span>
    <span class="hljs-class">.layout-logo-left</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">90%</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">30px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#5b6270</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">border-radius</span>:<span class="hljs-value"> <span class="hljs-number">3px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">margin</span>:<span class="hljs-value"> <span class="hljs-number">15px</span> auto</span></span>;
    }</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-title">style</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Row</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"flex"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">i-col</span> <span class="hljs-attribute">span</span>=<span class="hljs-value">"5"</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-menu-left"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">Menu</span> <span class="hljs-attribute">active-key</span>=<span class="hljs-value">"1-2"</span> <span class="hljs-attribute">theme</span>=<span class="hljs-value">"dark"</span> <span class="hljs-attribute">width</span>=<span class="hljs-value">"auto"</span> <span class="hljs-attribute">:open-keys</span>=<span class="hljs-value">"['1']"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-logo-left"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">Submenu</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"1"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">template</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"title"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ios-navigate"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
                            导航一
                        <span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"1-1"</span>&gt;</span>选项 1<span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"1-2"</span>&gt;</span>选项 2<span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"1-3"</span>&gt;</span>选项 3<span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-title">Submenu</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">Submenu</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"2"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">template</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"title"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ios-keypad"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
                            导航二
                        <span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"2-1"</span>&gt;</span>选项 1<span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"2-2"</span>&gt;</span>选项 2<span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-title">Submenu</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">Submenu</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"3"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">template</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"title"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ios-analytics"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
                            导航三
                        <span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"3-1"</span>&gt;</span>选项 1<span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"3-2"</span>&gt;</span>选项 2<span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-title">Submenu</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-title">Menu</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-title">i-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">i-col</span> <span class="hljs-attribute">span</span>=<span class="hljs-value">"19"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-header"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-breadcrumb"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">Breadcrumb</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">Breadcrumb-item</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span>首页<span class="hljs-tag">&lt;/<span class="hljs-title">Breadcrumb-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">Breadcrumb-item</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span>应用中心<span class="hljs-tag">&lt;/<span class="hljs-title">Breadcrumb-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">Breadcrumb-item</span>&gt;</span>某应用<span class="hljs-tag">&lt;/<span class="hljs-title">Breadcrumb-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-title">Breadcrumb</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-content"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-content-main"</span>&gt;</span>内容区域<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-copy"</span>&gt;</span>
                    2011-2016 &amp;copy; TalkingData
                <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-title">i-col</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Row</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {

    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
            </code></pre>
            <header class="codeTitle" @click="showPre($event,3,'item3')" >
                <Icon type="chevron-down" v-if="!showPre3" ></Icon>
                <Icon type="chevron-up" v-else></Icon>
                显示代码
            </header>
        </div>
        <!--第四部分-->
        <div class="layout separate" id="item4">
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
            <pre v-if="showPre4" _v-53d23a6d=""><code _v-53d23a6d="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">style</span> <span class="hljs-attribute">scoped</span>&gt;</span><span class="css">
    <span class="hljs-class">.layout</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">border</span>:<span class="hljs-value"> <span class="hljs-number">1px</span> solid <span class="hljs-hexcolor">#d7dde4</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#f5f7f9</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">position</span>:<span class="hljs-value"> relative</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">border-radius</span>:<span class="hljs-value"> <span class="hljs-number">4px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">overflow</span>:<span class="hljs-value"> hidden</span></span>;
    }</span>
    <span class="hljs-class">.layout-logo</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">100px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">30px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#5b6270</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">border-radius</span>:<span class="hljs-value"> <span class="hljs-number">3px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> left</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">position</span>:<span class="hljs-value"> relative</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">top</span>:<span class="hljs-value"> <span class="hljs-number">15px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">left</span>:<span class="hljs-value"> <span class="hljs-number">20px</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-header</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">60px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#fff</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">box-shadow</span>:<span class="hljs-value"> <span class="hljs-number">0</span> <span class="hljs-number">1px</span> <span class="hljs-number">1px</span> <span class="hljs-function">rgba</span>(<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,.<span class="hljs-number">1</span>)</span></span>;
    }</span>
    <span class="hljs-class">.layout-copy</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">text-align</span>:<span class="hljs-value"> center</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">padding</span>:<span class="hljs-value"> <span class="hljs-number">10px</span> <span class="hljs-number">0</span> <span class="hljs-number">20px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">color</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#9ea7b4</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-ceiling</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#464c5b</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">padding</span>:<span class="hljs-value"> <span class="hljs-number">10px</span> <span class="hljs-number">0</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">overflow</span>:<span class="hljs-value"> hidden</span></span>;
    }</span>
    <span class="hljs-class">.layout-ceiling-main</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">float</span>:<span class="hljs-value"> right</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">margin-right</span>:<span class="hljs-value"> <span class="hljs-number">15px</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-ceiling-main</span> <span class="hljs-tag">a</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">color</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#9ba7b5</span></span></span>;
    }</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-title">style</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-ceiling"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-ceiling-main"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span>注册登录<span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span> |
                <span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span>帮助中心<span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span> |
                <span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span>安全中心<span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span> |
                <span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span>服务大厅<span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-header"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-logo"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">style</span>=<span class="hljs-value">"height: 200px"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-copy"</span>&gt;</span>
            2011-2016 &amp;copy; TalkingData
        <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {

    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
            </code></pre>
            <header class="codeTitle" @click="showPre($event,4,'item4')">
                <Icon type="chevron-down" v-if="showPre4"></Icon>
                <Icon type="chevron-up" v-else></Icon>
                显示代码
            </header>
        </div>
        <!--第五部分-->
        <div id="item5" class="layout separate" :class="{'layout-hide-text': spanLeft < 5}">
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
            <pre v-if="showPre5" _v-53d23a6d=""><code _v-53d23a6d="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">style</span> <span class="hljs-attribute">scoped</span>&gt;</span><span class="css">
    <span class="hljs-class">.layout</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">border</span>:<span class="hljs-value"> <span class="hljs-number">1px</span> solid <span class="hljs-hexcolor">#d7dde4</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#f5f7f9</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">position</span>:<span class="hljs-value"> relative</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">border-radius</span>:<span class="hljs-value"> <span class="hljs-number">4px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">overflow</span>:<span class="hljs-value"> hidden</span></span>;
    }</span>
    <span class="hljs-class">.layout-breadcrumb</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">padding</span>:<span class="hljs-value"> <span class="hljs-number">10px</span> <span class="hljs-number">15px</span> <span class="hljs-number">0</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-content</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">min-height</span>:<span class="hljs-value"> <span class="hljs-number">200px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">margin</span>:<span class="hljs-value"> <span class="hljs-number">15px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">overflow</span>:<span class="hljs-value"> hidden</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#fff</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">border-radius</span>:<span class="hljs-value"> <span class="hljs-number">4px</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-content-main</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">padding</span>:<span class="hljs-value"> <span class="hljs-number">10px</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-copy</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">text-align</span>:<span class="hljs-value"> center</span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">padding</span>:<span class="hljs-value"> <span class="hljs-number">10px</span> <span class="hljs-number">0</span> <span class="hljs-number">20px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">color</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#9ea7b4</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-menu-left</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#464c5b</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-header</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">60px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#fff</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">box-shadow</span>:<span class="hljs-value"> <span class="hljs-number">0</span> <span class="hljs-number">1px</span> <span class="hljs-number">1px</span> <span class="hljs-function">rgba</span>(<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,<span class="hljs-number">0</span>,.<span class="hljs-number">1</span>)</span></span>;
    }</span>
    <span class="hljs-class">.layout-logo-left</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">width</span>:<span class="hljs-value"> <span class="hljs-number">90%</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">height</span>:<span class="hljs-value"> <span class="hljs-number">30px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">background</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#5b6270</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">border-radius</span>:<span class="hljs-value"> <span class="hljs-number">3px</span></span></span>;
        <span class="hljs-rule"><span class="hljs-attribute">margin</span>:<span class="hljs-value"> <span class="hljs-number">15px</span> auto</span></span>;
    }</span>
    <span class="hljs-class">.layout-ceiling-main</span> <span class="hljs-tag">a</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">color</span>:<span class="hljs-value"> <span class="hljs-hexcolor">#9ba7b5</span></span></span>;
    }</span>
    <span class="hljs-class">.layout-hide-text</span> <span class="hljs-class">.layout-text</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">display</span>:<span class="hljs-value"> none</span></span>;
    }</span>
    <span class="hljs-class">.ivu-col</span><span class="hljs-rules">{
        <span class="hljs-rule"><span class="hljs-attribute">transition</span>:<span class="hljs-value"> width .<span class="hljs-number">2s</span> ease-in-out</span></span>;
    }</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-title">style</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout"</span> <span class="hljs-attribute">:class</span>=<span class="hljs-value">"{'layout-hide-text': spanLeft &lt; 5}"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Row</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"flex"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">i-col</span> <span class="hljs-attribute">:span</span>=<span class="hljs-value">"spanLeft"</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-menu-left"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">Menu</span> <span class="hljs-attribute">active-key</span>=<span class="hljs-value">"1"</span> <span class="hljs-attribute">theme</span>=<span class="hljs-value">"dark"</span> <span class="hljs-attribute">width</span>=<span class="hljs-value">"auto"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-logo-left"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"1"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ios-navigate"</span> <span class="hljs-attribute">:size</span>=<span class="hljs-value">"iconSize"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-text"</span>&gt;</span>选项 1<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"2"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ios-keypad"</span> <span class="hljs-attribute">:size</span>=<span class="hljs-value">"iconSize"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-text"</span>&gt;</span>选项 2<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">Menu-item</span> <span class="hljs-attribute">key</span>=<span class="hljs-value">"3"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ios-analytics"</span> <span class="hljs-attribute">:size</span>=<span class="hljs-value">"iconSize"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-text"</span>&gt;</span>选项 3<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-title">Menu-item</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-title">Menu</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-title">i-col</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">i-col</span> <span class="hljs-attribute">:span</span>=<span class="hljs-value">"spanRight"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-header"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text"</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"toggleClick"</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"navicon"</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"32"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-breadcrumb"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">Breadcrumb</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">Breadcrumb-item</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span>首页<span class="hljs-tag">&lt;/<span class="hljs-title">Breadcrumb-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">Breadcrumb-item</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span>应用中心<span class="hljs-tag">&lt;/<span class="hljs-title">Breadcrumb-item</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">Breadcrumb-item</span>&gt;</span>某应用<span class="hljs-tag">&lt;/<span class="hljs-title">Breadcrumb-item</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-title">Breadcrumb</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-content"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-content-main"</span>&gt;</span>内容区域<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"layout-copy"</span>&gt;</span>
                    2011-2016 &amp;copy; TalkingData
                <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-title">i-col</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Row</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                spanLeft: <span class="hljs-number">5</span>,
                spanRight: <span class="hljs-number">19</span>
            }
        },
        computed: {
            iconSize () {
                <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.spanLeft === <span class="hljs-number">5</span> ? <span class="hljs-number">14</span> : <span class="hljs-number">24</span>;
            }
        },
        methods: {
            toggleClick () {
                <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.spanLeft === <span class="hljs-number">5</span>) {
                    <span class="hljs-keyword">this</span>.spanLeft = <span class="hljs-number">2</span>;
                    <span class="hljs-keyword">this</span>.spanRight = <span class="hljs-number">22</span>;
                } <span class="hljs-keyword">else</span> {
                    <span class="hljs-keyword">this</span>.spanLeft = <span class="hljs-number">5</span>;
                    <span class="hljs-keyword">this</span>.spanRight = <span class="hljs-number">19</span>;
                }
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
            </code></pre>
            <header class="codeTitle" @click="showPre($event,5,'item5')">
                <Icon type="chevron-down" v-if="!showPre5" ></Icon>
                <Icon type="chevron-up" v-else></Icon>
                显示代码
            </header>
        </div>


    </div>
</template>

<script>
    import $ from "jquery";
    export default {
        data ()
    {
        return {
            spanLeft: 5,
            spanRight: 19,
            showPre1: false,
            showPre2: false,
            showPre3: false,
            showPre4: false,
            showPre5: false
        }
    }
    ,
    computed: {
        iconSize()
        {
            return this.spanLeft === 5 ? 14 : 24;
        }
    }
    ,
    methods: {
        toggleClick()
        {
            if (this.spanLeft === 5) {
                this.spanLeft = 2;
                this.spanRight = 22;
            } else {
                this.spanLeft = 5;
                this.spanRight = 19;
            }
        },
        showPre (event,index,id) {
            if(this['showPre'+index]){
                var anchor = this.$el.querySelector('#'+id);
                $("body").animate({scrollTop:anchor.offsetTop});
                this.$set('showPre'+index, false);
            }else{
                this.$set('showPre'+index, true);
            }
        }
    }
    }

</script>
