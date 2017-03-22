<template>
    <div class="center">
      <div class="error-code">404</div>

      <div class="message">
          Sorry but couldn't find the page you are<br>looking for
      </div>
        <div class="search">
            <Icon type="ios-search-strong" class="icon-1"></Icon>
            <input type="text" placeholder=" Search for anything">
        </div>
        <div  @click="toggleOptionsSidenav()" class="toggleOptionsSidenav">
            <Icon type="gear-b" class="icon-2"></Icon>
        </div>
        <a class="back-link">
            Go back to dashboard
        </a>
    </div>
</template>
<script>
    export default {

    }
</script>
<style>
    .center{
        text-align:center;
        background-color:#f5f7f9;
    }
    .error-code{
        font-size:112px;
        text-align:center;
        line-height:1;
        margin-bottom:16px;
        font-weight: 500;
        color:#202020;
    }
   .center .message{
        font-size:24px;
        text-align:center;
        color:rgba(0,0,0,0.54);
    }
    .search{
        width:50%;
        height:56px;
        line-height:25px;
        margin:48px auto 16px;
        padding:16px;
        background:#fff;
        text-align:left;
        font-size:18px;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);
    }
    .back-link{
        font-size:15px;
        text-align: center;
    }
    .toggleOptionsSidenav{
        width:50px;
        height:45px;
        background-color:#5f636c;
        position:absolute;
        top:140px;
        right:0;
        cursor: pointer;
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);
        text-align:center;
        line-height:55px;

    }
    input{
        border:none;
        width:80%;
        height:25px;
        margin-left: 10px;
        outline: none;
    }
    .icon-2{
        font-size:25px;
        color:#fff;}
    .icon-1{
        font-size:25px;
    }


</style>