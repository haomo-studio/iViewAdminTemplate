import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './routers/router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import 'highlight.js/styles/atom-one-light.css'
import VueI18n from 'vue-i18n';
import Locales from './locale';
import zhLocale from 'iview/src/locale/lang/zh-CN';
import enLocale from 'iview/src/locale/lang/en-US';

import highlight from 'highlight.js';

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueI18n);
// Vue.use(highlight);

//初始化hightlight代码高亮
highlight.initHighlightingOnLoad();

// 开启debug模式
Vue.config.debug = true;
// 自动设置语言
const navLang = navigator.language;
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false;
const lang = window.localStorage.getItem('language') || localLang || 'zh-CN';

Vue.config.lang = lang;

// 多语言配置
const locales = Locales;
const mergeZH = Object.assign(zhLocale, locales['zh-CN']);
const mergeEN = Object.assign(enLocale, locales['en-US']);
Vue.locale('zh-CN', mergeZH);
Vue.locale('en-US', mergeEN);

// 路由配置
let router = new VueRouter({
	// 是否开启History模式的路由, 如果生产环境的服务端没有进行相关配置,请慎用
	history: true
});

router.map(Routers);

router.beforeEach(() => {
	window.scrollTo(0, 0);
});

router.afterEach(() => {

});

router.redirect({
	'*': '/index'
});

router.start(App, '#app');
