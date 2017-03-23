<template class="userAuthenification" style="background-color: #dddddd!important;">
    <div class="userAuthenification" style="height: 600px">
        <div class="outSide">
            <div class="login">
                <p class="title">用户登录</p>
                <div class="w-70">
                    <i-input type="text" v-model="username" placeholder="请输入用户名" ></i-input>
                </div>
                <div class="w-70">
                    <i-input type="text" v-model="password" placeholder="请输入密码"></i-input>
                </div>
                <div class="w-70" style="margin: 20px auto">
                    <i-button type="info" long>登 录</i-button>
                </div>
                <div class="w-70">
                    <a href="#" style="margin:0 25px">没有账号,注册!Go</a>
                    <a href="#" style="margin:0 10px">忘记密码</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data: {
            return: {
                username: '',
                password: ''
            }
        },
        methods: {
            login:{}
        }
    }
</script>
<style>
    .login{
        width: 35%;
        margin: 0 2% 0 45%;
        border: 3px solid #fa8;
        box-shadow: 3px 3px 5px #fba;
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
    .logininput{
        width: 70%!important;
        margin: 20px auto !important;
    }
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