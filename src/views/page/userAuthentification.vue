<template class="userAuthenification" style="background-color: #dddddd!important;">
    <div class="userAuthenification" style="height: 600px">
        <div class="outSide">
            <div class="login" v-if="showItem == 'login'">
                <p class="title">用户登录</p>
                <div class="w-70">
                    <i-input type="text" :value.sync="username" placeholder="请输入用户名" ></i-input>
                </div>
                <div class="w-70">
                    <i-input type="password" :value.sync="password" placeholder="请输入密码"></i-input>
                </div>
                <div class="w-70" style="margin: 20px auto">
                    <i-button type="info" long @click="login"><span v-if="loading" loding>loading</span><span v-else>登 录</span></i-button>
                </div>
                <div class="w-70">
                    <a href="#" style="margin:0 25px" @click="loginup">没有账号,注册!Go</a>
                    <a href="#" style="margin:0 10px" @click="resetPassword">忘记密码</a>
                </div>
            </div>
            <div v-if="showItem == 'resetPassword'" class="login">
                <p class="title">忘记密码</p>
                <div class="w-70">
                    <i-input type="text" :value.sync="username" placeholder="请输入用户名" ></i-input>
                </div>
                <div class="w-70">
                    <i-input type="password" :value.sync="password" placeholder="请输入密码"></i-input>
                </div>
                <div class="w-70">
                    <i-input type="password" :value.sync="other" placeholder="请再次输入密码"></i-input>
                </div>
                <div class="w-70" style="margin: 20px auto">
                    <i-button type="info" long @click="login"><span v-if="loading" loding>loading</span><span v-else>登 录</span></i-button>
                </div>
                <div class="w-70">
                    <a href="#" style="margin:0 25px" @click="goLogin">去登录</a>
                    <a href="#" style="margin:0 10px" @click="loginup">我要注册</a>
                </div>
            </div>
            <div v-if="showItem == 'loginup'" class="login" style="height:500px">
                <p class="title">用户注册</p>
                <div class="w-70">
                    <i-input type="text" :value.sync="username" placeholder="请输入手机号或邮箱"></i-input>
                </div>
                <div class="w-70" type="text" placeholder="请输入验证码"></div>
                <div class="w-70">
                    <i-input type="text" :value.sync="username" placeholder="请输入用户名" ></i-input>
                </div>
                <div class="w-70">
                    <i-input type="password" :value.sync="zcpassword1" placeholder="请输入密码"></i-input>
                </div>
                <div class="w-70">
                    <i-input type="password" :value.sync="zcpassword2" placeholder="请再次输入密码"></i-input>
                </div>
                <div class="w-70" style="margin: 20px auto">
                    <i-button type="info" long @click="login"><span v-if="loading" loding>loading</span><span v-else>注 册</span></i-button>
                </div>
                <div class="w-70">
                    <a href="#" style="margin:0 25px" @click="goLogin">已有账号，去登录</a>
                    <!--<a href="#" style="margin:0 10px" @click="resetPassword">忘记密码</a>-->
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="babel">
    export default {
        data () {
            return {
                username: '',
                password: '',
                other: '',
                loading: false,
                showItem: 'login',
                zcpassword1: '',
                zcpassword2: ''
            }
        },
        methods: {
                login () {
                    this.loading = true;
                    if(this.username=='' || this.password == ''){
                        this.loading = false;
                        this.$Message.success('亲！你还没有输入用户名或密码哦~');
                        return;
                    }else if(this.username.length<6){
                        this.loading = false;
                        this.$Message.success('亲！用户名长度不足哦~');
                        return;
                    }else if(this.password.length < 6){
                        this.loading = false;
                        this.$Message.success('亲！密码不对哦~');
                        return;
                    }
                    this.showItem = 'login';
                },
                loginup () {
                    this.password = '';
                    this.username = '';
                    this.showItem = 'loginup';
                    this.zcpassword1 = '';
                    this.zcpassword2 = '';
                },
            resetPassword () {
                this.password = '';
                this.other = '';
                this.showItem = 'resetPassword';
                this.zcpassword1 = '';
                this.zcpassword2 = '';
            },
            goLogin () {
                this.password = '';
                this.showItem = 'login';
                this.zcpassword1 = '';
                this.zcpassword2 = '';
            }
        }
    }
</script>
<style>
    .login{
        width: 35%;
        margin: 0 2% 0 45%;
        border: 3px solid #ddd;
        box-shadow: 3px 3px 5px #ddd;
        height: 300px;
        padding: 30px 0
    }
    .title{
        width: 70%;
        height:40px;
        line-height: 40px;
        font-weight: 700;
        font-size: 26px;
        color: #2c3e50;
        margin: 0 auto;
    }
    .login input{
        width: 100%;margin: 20px auto 0;
        border: 1px solid #dedede;
    }
    .userAuthenification{
        background-color: #cfcfcf;
    }
    /*.logininput{*/
        /*width: 70%!important;*/
        /*margin: 20px auto !important;*/
    /*}*/
    .logininput input{
        margin:0 auto;
    }
    .outSide{
        background: url('../../img/login-bg.jpg') no-repeat 0 0;
        background-size: cover;
        padding: 35px 0;
        height:600px;
    }
    .w-70{
        width: 70%;
        margin: 0 auto;
    }
</style>