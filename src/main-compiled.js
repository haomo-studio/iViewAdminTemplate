'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _app = require('components/app.vue');

var _app2 = _interopRequireDefault(_app);

var _router = require('./routers/router');

var _router2 = _interopRequireDefault(_router);

var _iview = require('iview');

var _iview2 = _interopRequireDefault(_iview);

require('iview/dist/styles/iview.css');

var _vueI18n = require('vue-i18n');

var _vueI18n2 = _interopRequireDefault(_vueI18n);

var _locale = require('./locale');

var _locale2 = _interopRequireDefault(_locale);

var _zhCN = require('iview/src/locale/lang/zh-CN');

var _zhCN2 = _interopRequireDefault(_zhCN);

var _enUS = require('iview/src/locale/lang/en-US');

var _enUS2 = _interopRequireDefault(_enUS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);
_vue2.default.use(_iview2.default);
_vue2.default.use(_vueI18n2.default);

// 开启debug模式
_vue2.default.config.debug = true;
// 自动设置语言
var navLang = navigator.language;
var localLang = navLang === 'zh-CN' || navLang === 'en-US' ? navLang : false;
var lang = window.localStorage.getItem('language') || localLang || 'zh-CN';

_vue2.default.config.lang = lang;

// 多语言配置
var locales = _locale2.default;
var mergeZH = Object.assign(_zhCN2.default, locales['zh-CN']);
var mergeEN = Object.assign(_enUS2.default, locales['en-US']);
_vue2.default.locale('zh-CN', mergeZH);
_vue2.default.locale('en-US', mergeEN);

// 路由配置
var router = new _vueRouter2.default({
	// 是否开启History模式的路由, 如果生产环境的服务端没有进行相关配置,请慎用
	history: true
});

router.map(_router2.default);

router.beforeEach(function () {
	window.scrollTo(0, 0);
});

router.afterEach(function () {});

router.redirect({
	'*': '/index'
});

router.start(_app2.default, '#app');

//# sourceMappingURL=main-compiled.js.map