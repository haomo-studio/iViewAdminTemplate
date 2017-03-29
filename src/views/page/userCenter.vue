<template>
    <div style="background-color:#f5f5f5">
    <Tabs active-key="key1">
        <Tab-pane label="标签一" key="key1">
           <div  class="body-left">
               <div style="padding: 25px">
                   <Card :bordered="false">
                       <p>
                           <i-input type="textarea" :rows="6" placeholder="请输入..."></i-input>
                       </p>
                       <p style="margin-top:10px;">
                           <Tooltip content="插入照片" style="margin:0 2%;">
                               <Icon type="image" style="font-size:1.5em;"></Icon>
                           </Tooltip>
                           <Tooltip content="添加联系人" style="margin:0 2%;">
                               <Icon type="android-person-add" style="font-size: 1.5em;"></Icon>
                           </Tooltip>
                           <Tooltip content="添加地址" style="margin:0 2%;">
                               <Icon type="ios-location" style="font-size: 1.5em;"></Icon>
                           </Tooltip>
                               <i-button type="primary" style="margin-left:64%">发 送</i-button>
                       </p>
                   </Card>
               </div>

               <hr style="height:20px;border:none;border-bottom:1px solid #ddd;margin-bottom: 20px;">

           <Card>
               <!--个人头像区-->
               <p style="margin:10px 0;">
                   <div class="person-garry"></div>
                   <Icon type="android-more-vertical" style="float:right;font-size: 25px"></Icon>
                   <div class="time">
                       <span style="color:#000;font-size: 12px;"> Garry Newman posted on your timeline</span><br>
                       <span style="color:#bbb;font-size: 12px;"> 32 minutes ago</span>
                   </div>
               </p>
               <!--语言展示区-->
               <p style="color:#000;margin:15px 10px;font-size: 12px;">Remember the place we were talking about the other night? Found it!</p>
              <!--图片展示区-->
               <Card>
                   <div style="text-align:center">
                       <img :src="earlySunrise" style="width:100%">
                   </div>
               </Card>
               <!--分享区-->
               <p style="margin-top:15px;">
               <Icon type="ios-heart-outline"></Icon><i-button type="text">Like(5)</i-button>
               <Icon type="android-share"></Icon><i-button type="text">Share(12)</i-button>
               </p>
               <!--评论区-->
               <p style="margin:10px 0;">
                 <div class="person-alice"></div>
                 <div class="time">
                   <span style="color:#000;font-size: 12px;"> Alice Freeman </span>
                   <span style="color:#bbb;font-size: 12px;"> June 10, 2015</span><br>
                   <span style="color:#000;font-size: 12px;">That’s a wonderful place. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce
                   et eleifend ligula. Fusce posuere in sapien acfacilisis. Etiam sit amet justo non felis ornare feugiat.
                   </span><br>
                     <a href="">Replay</a>
                     <Icon type="ios-flag" style="font-size: 20px;vertical-align: bottom;padding-left: 20px;"></Icon>
                </div>
               </p>
               <!--个人评论区-->
               <p style="margin:15px 0;">
               <div class="person-my"></div>
               <div class="time">
                   <i-input type="textarea" :rows="4" placeholder="请输入..." style="margin:5px;"></i-input>
                   <i-button type="primary" style="margin:0 5px;">发 表 评 论</i-button>
               </div>
               </p>
           </Card>
           <Card style="margin:20px 0;">
                   <!--个人头像区-->
                   <p style="margin:10px 0;">
                   <div class="person-andrew"></div>
                   <Icon type="android-more-vertical" style="float:right;font-size: 25px"></Icon>
                   <div class="time">
                       <span style="color:#000;font-size: 12px;"> Garry Newman posted on your timeline</span><br>
                       <span style="color:#bbb;font-size: 12px;"> 32 minutes ago</span>
                   </div>
                   </p>
                   <!--语言展示区-->
                   <p style="color:#000;margin:15px 10px;font-size: 12px;">Remember the place we were talking about the other night? Found it!</p>
                   <!--图片展示区-->
                   <Card>
                       <div style="text-align:center">
                           <img :src="fallout" style="width:100%">
                           <!--图片描述区域-->
                           <P style="text-align: left;">
                             <span style="font-size: 15px;color:#000;">The Fallout 4 Pip-Boy Edition Is Back In Stock Now</span><br>
                             <span style="font-size:12px;color:#ccc;">Kotaku</span><br>
                             <span style="font-size: 12px;color:#000;">The Fallout 4 Pip-Boy edition is back in stock at Gamestop, for all 3 platforms. Additionally,
                                   Walmart also has it instock for the PS4 and Xbox One as of this writing, as does Best Buy.</span>
                           </P>
                       </div>
                   </Card>
                   <!--分享区-->
                   <p style="margin-top:15px;">
                       <Icon type="ios-heart-outline"></Icon><i-button type="text">Like(5)</i-button>
                       <Icon type="android-share"></Icon><i-button type="text">Share(12)</i-button>
                   </p>
                   <!--评论区-->
                   <p style="margin:10px 0;">
                   <div class="person-alice"></div>
                   <div class="time">
                       <span style="color:#000;font-size: 12px;"> Alice Freeman </span>
                       <span style="color:#bbb;font-size: 12px;"> June 10, 2015</span><br>
                       <span style="color:#000;font-size: 12px;">That’s a wonderful place. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce
                   et eleifend ligula. Fusce posuere in sapien acfacilisis. Etiam sit amet justo non felis ornare feugiat.
                   </span><br>
                       <a href="">Replay</a>
                       <Icon type="ios-flag" style="font-size: 20px;vertical-align: bottom;padding-left: 20px;"></Icon>
                   </div>
                   </p>
                   <!--个人评论区-->
                   <p style="margin:15px 0;">
                   <div class="person-my"></div>
                   <div class="time">
                       <i-input type="textarea" :rows="4" placeholder="请输入..." style="margin:5px;"></i-input>
                       <i-button type="primary" style="margin:0 5px;">发 表 评 论</i-button>
                   </div>
                   </p>
               </Card>
           <Card>
                   <!--个人头像区-->
                   <p style="margin:10px 0;">
                   <div class="person-andrew"></div>
                   <Icon type="android-more-vertical" style="float:right;font-size: 25px"></Icon>
                   <div class="time">
                       <span style="color:#000;font-size: 12px;"> Garry Newman posted on your timeline</span><br>
                       <span style="color:#bbb;font-size: 12px;"> 32 minutes ago</span>
                   </div>
                   </p>
                   <!--语言展示区-->
                   <p style="color:#000;margin:15px 10px;font-size: 12px;">Remember the place we were talking about the other night? Found it!</p>
                   <!--分享区-->
                   <p style="margin-top:15px;">
                       <Icon type="ios-heart-outline"></Icon><i-button type="text">Like(5)</i-button>
                       <Icon type="android-share"></Icon><i-button type="text">Share(12)</i-button>
                   </p>
                   <!--个人评论区-->
                   <p style="margin:15px 0;">
                   <div class="person-my"></div>
                   <div class="time">
                       <i-input type="textarea" :rows="4" placeholder="请输入..." style="margin:5px;"></i-input>
                       <i-button type="primary" style="margin:0 5px;">发 表 评 论</i-button>
                   </div>
                   </p>
               </Card>
           <Card style="margin:20px 0;">
                   <!--个人头像区-->
                   <p style="margin:10px 0;">
                   <div class="person-jane"></div>
                   <Icon type="android-more-vertical" style="float:right;font-size: 25px"></Icon>
                   <div class="time">
                       <span style="color:#000;font-size: 12px;"> Garry Newman posted on your timeline</span><br>
                       <span style="color:#bbb;font-size: 12px;"> 32 minutes ago</span>
                   </div>
                   </p>
                   <p style="height:10px;"></p>
                   <!--图片展示区-->
                   <Card>
                       <div style="text-align:center">
                           <div style="width:100%;height:200px;background-color:#f5f5f5; ">
                               <Icon type="document-text" style="font-size: 40px;margin:15% auto;"></Icon>
                           </div>
                           <!--图片描述区域-->
                           <P style="text-align: left;margin-top:10px;">
                               <span style="font-size: 15px;color:#000;">The Fallout 4 Pip-Boy Edition Is Back In Stock Now</span><br>
                               <span style="font-size:12px;color:#ccc;">Kotaku</span><br>
                               <span style="font-size: 12px;color:#000;">The Fallout 4 Pip-Boy edition is back in stock at Gamestop, for all 3 platforms. Additionally,
                                   Walmart also has it instock for the PS4 and Xbox One as of this writing, as does Best Buy.</span>
                           </P>
                       </div>
                   </Card>
                   <!--分享区-->
                   <p style="margin-top:15px;">
                       <Icon type="ios-heart-outline"></Icon><i-button type="text">Like(5)</i-button>
                       <Icon type="android-share"></Icon><i-button type="text">Share(12)</i-button>
                   </p>
                   <!--个人评论区-->
                   <p style="margin:15px 0;">
                   <div class="person-my"></div>
                   <div class="time">
                       <i-input type="textarea" :rows="4" placeholder="请输入..." style="margin:5px;"></i-input>
                       <i-button type="primary" style="margin:0 5px;">发 表 评 论</i-button>
                   </div>
                   </p>
               </Card>

           </div>
           <div  class="body-right" style="padding:25px 0;">
               <Card>
                   <p style="background-color:#3399ff;color:#fff;line-height: 40px;">
                        <span style="font-size: 18px;margin-left:2%;">最 新 活 动</span>
                       <span style="font-size: 10px;margin-left:50%;">See All</span>
                   </p>
                   <ul >
                       <li v-for="item in personList" style="margin:20px 0;">
                           <p style="margin:10px 0;">
                           <div class="person-andrew"></div>
                           <div class="time">
                               <span style="color:#000;font-size:12px;"> {{item.title}}</span><br>
                               <span style="color:#bbb;font-size:12px;">{{item.time}}</span>
                           </div>
                           </p>
                       </li>
                   </ul>
               </Card>
           </div>
        </Tab-pane>
        <Tab-pane label="标签二" key="key2">
            <div class="body-left">
                <Card style="background-color: lightblue;margin: 20px 0;">
                    <p slot="title" style="font-size: 20px;">General Information</p>
                    <p style="margin:15px;"><span style="color: #000;font-size: 14px;">Gender</span> <br>
                        <span style="color: #999;font-size: 10px;">Female</span>
                    </p>
                    <p style="margin:15px;"><span style="color: #000;font-size: 14px;">Locations</span> <br>
                        <span style="color: #999;font-size: 10px;">Istanbul, Turkey
                            <Icon type="ios-location-outline"></Icon>
                            New York, USA
                            <Icon type="ios-location-outline"></Icon>
                        </span>
                    </p>
                    <p style="margin:15px;"><span style="color: #000;font-size: 14px;">About Me</span> <br>
                        <span style="color: #999;font-size: 10px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aperiam, commodi, itaque? Architecto atque deleniti, dicta dolorum ducimus, eaque facere ipsa
                            libero modi molestiae mollitia nemo quidem reiciendis, tenetur velit voluptatem!</span>
                    </p>
                </Card>
                <Card style="background-color: blanchedalmond;margin: 20px 0;">
                    <p slot="title" style="font-size: 20px;">Work</p>
                    <p style="margin:15px;"><span style="color: #000;font-size: 14px;">Occupation</span> <br>
                        <span style="color: #999;font-size: 10px;">Developer</span>
                    </p>
                    <p style="margin:15px;"><span style="color: #000;font-size: 14px;">Skills</span> <br>
                        <span style="color: #999;font-size: 10px;">C#, PHP, Javascript, Angular, JS, HTML, CSS
                        </span>
                    </p>
                    <p style="margin:15px;"><span style="color: #000;font-size: 14px;">Jobs</span> <br>
                        <span style="color: #999;font-size: 10px;">Self-Employed <br>Google</span>
                    </p>
                </Card>
                <Card style="background-color: greenyellow;margin: 20px 0;">
                    <p slot="title" style="font-size: 20px;">Contact</p>
                    <p style="margin:15px;"><span style="color: #000;font-size: 14px;">Address</span> <br>
                        <span style="color: #999;font-size: 10px;">Ut pharetra luctus est quis sodales. Duis nisi tortor,
                            bibendum eget tincidunt, aliquam ac elit. Mauris nec euismod odio.</span>
                    </p>
                    <p style="margin:15px;"><span style="color: #000;font-size: 14px;">Tel.</span> <br>
                        <span style="color: #999;font-size: 10px;">+6 555 6600 <br>555 5255
                        </span>
                    </p>
                    <p style="margin:15px;"><span style="color: #000;font-size: 14px;">Website</span> <br>
                        <span style="color: #999;font-size: 10px;">withinpixels.com</span>
                    </p>
                    <p style="margin:15px;"><span style="color: #000;font-size: 14px;">Emails</span> <br>
                        <span style="color: #999;font-size: 10px;">mail@withinpixels.com <br>mail@creapond.com</span>
                    </p>
                </Card>
            </div>
            <div class="body-right">
                <div style="background:#eee;padding:20px">
                    <Card>
                        <div>
                            <div style="width:100%;color: #fff;background-color:#3399ff;margin:10px 0;">
                                <span style="font-size: 20px;"> Friend</span>
                                <span style="font-size: 10px;margin-left: 50%;">See 454 more</span>
                            </div>
                            <div style="overflow: hidden">
                                <div class="person-garry" style="margin:5px;"></div>
                                <div class="person-andrew" style="margin:5px;"></div>
                                <div class="person-alice" style="margin:5px;"></div>
                                <div class="person-jane" style="margin:5px;"></div>
                                <div class="person-andrew" style="margin:5px;"></div>
                                <div class="person-garry" style="margin:5px;"></div>
                                <div class="person-andrew" style="margin:5px;"></div>
                                <div class="person-garry" style="margin:5px;"></div>
                            </div>
                        </div>
                        <!--<p slot="title">Friends</p>-->
                        <!--<p class="person-andrew"></p>-->
                        <!--<p class="person-alice"></p>-->
                        <!--<p class="person-garry"></p>-->
                        <!--<p class="person-jane"></p>-->
                        <!--<p class="person-garry"></p>-->
                    </Card>
                </div>
            </div>
        </Tab-pane>
        <Tab-pane label="标签三" key="key3">
            <p style="margin: 20px 0;">
                <span style="font-size: 20px;color: #000">June 2015</span>
                <span style="font-size: 12px;color: #aaa;margin-left: 10px;">5 Photos</span>
            </p>
            <div>
                <div  style="float:left;margin:10px;">
                  <Card style="width:300px;">
                    <div style="text-align:center">
                        <img :src="roadtrip" alt="" >
                    </div>
                  </Card>
                </div>
                <div  style="float:left;margin:10px;">
                  <Card style="width:300px">
                    <div style="text-align:center">
                        <img :src="mountainlake" alt="">
                    </div>
                  </Card>
                </div>
                <div  style="float:left;margin:10px;">
                    <Card style="width:300px">
                        <div style="text-align:center">
                            <img :src="mountainsunset" alt="">
                        </div>
                    </Card>
                </div>
                <div  style="float:left;margin:7px;">
                    <Card style="width:300px">
                        <div style="text-align:center">
                            <img :src="airballoons" alt="">
                        </div>
                    </Card>
                </div>
            </div>
        </Tab-pane>
    </Tabs>
    </div>
</template>
<script>
    import earlySunrise from './img/early-sunrise.jpg';
    import fallout from './img/fallout.jpg';
    import roadtrip from './img/road-trip.jpg';
    import mountainlake from './img/mountain-lake.jpg';
    import mountainsunset from './img/mountain-sunset.jpg';
    import airballoons from './img/air-balloons.jpg';
    export default {
        data(){
            return {
                earlySunrise:earlySunrise,
                fallout:fallout,
                roadtrip:roadtrip,
                mountainlake:mountainlake,
                mountainsunset:mountainsunset,
                airballoons:airballoons,
                personList: [
                    {
                        title: 'Alice Freeman started following you.',
                        time: '13 mins. ago'
                    },
                    {
                        title: 'Andrew Green sent you a message.',
                        time: 'June 10,2015'
                    },
                    {
                        title: 'Andrew Green sent you a message.',
                        time: 'June 10,2015'
                    },
                    {
                        title: 'Andrew Green sent you a message.',
                        time: 'June 10,2015'
                    },
                    {
                        title: 'Andrew Green sent you a message.',
                        time: 'June 10,2015'
                    },
                    {
                        title: 'Andrew Green sent you a message.',
                        time: 'June 10,2015'
                    },
                    {
                        title: 'Andrew Green sent you a message.',
                        time: 'June 10,2015'
                    },
                    {
                        title: 'Andrew Green sent you a message.',
                        time: 'June 10,2015'
                    },
                    {
                        title: 'Garry Newman shared a public post with your group.',
                        time: 'June 9,2015'
                    },
                    {
                        title: 'Jane Dean started following you.',
                        time: 'June 7,2015'
                    }
                ]
            }
        }
    }


</script>
<style>
    .body-left{
       width:60%;
        float:left;
    }
    .body-right{
        width:35%;
        float:right;
    }
    .person-garry{
        border-radius: 50%;
        width:45px;
        height:45px;
        background: url('img/garry.jpg');
        background-size: cover;
        float:left;
    }
    .person-alice{
        border-radius: 50%;
        width:45px;
        height:45px;
        background: url('img/alice.jpg');
        background-size: cover;
        float:left;
    }
    .person-my{
        border-radius: 50%;
        width:45px;
        height:45px;
        background: url('img/profile.jpg');
        background-size: cover;
        float:left;
    }
    .person-andrew{
        border-radius: 50%;
        width:45px;
        height:45px;
        background: url('img/andrew.jpg');
        background-size: cover;
        float:left;
    }
    .person-jane{
        border-radius: 50%;
        width:45px;
        height:45px;
        background: url('img/jane.jpg');
        background-size: cover;
        float:left;
    }
    .time{
        margin:0 50px;
    }
</style>
<!--<template class="template">-->
   <!--<div class="top" >-->
       <!--<div class="top-content">-->
           <!--<div class="header">-->
           <!--</div>-->
           <!--<div style="font-size:2em;color: #fff;margin-left:100px" class="name">Katherine Wilson </div>-->
           <!--<div   class="btn">-->
               <!--<i-button type="info" style="color: #fff">Follow</i-button>-->
               <!--<i-button type="info" style="color: #fff">Send Message</i-button>-->
           <!--</div>-->
       <!--</div>-->
   <!--</div>-->
    <!--<Tabs active-key="key1">-->
        <!--<Tab-pane label="Timeline" key="key1">-->
            <!--<div class="left">-->
            <!--<div class="left-1">-->
                <!--<i-input type="textarea" :rows="4" placeholder="请输入..." style=""></i-input>-->
                <!--<div class="post">-->
                    <!--<Icon type="image" class="icon"></Icon>-->
                    <!--<Icon type="android-person-add" class="icon"></Icon>-->
                    <!--<Icon type="ios-location" class="icon"></Icon>-->
                    <!--<i-button type="primary" class="i-button">post</i-button>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="left-2">-->
                <!--<div>-->
                    <!--<div class="header-1"></div>-->
                    <!--<div class="gr" style="height:60px">-->
                        <!--<br>-->
                        <!--Garry Newman posted on your timeline <br><span style="color: #aaa;font-size: 12px">32 minutes ago </span>-->
                    <!--</div>-->
                    <!--<br>-->
                    <!--<div> &nbsp;&nbsp;Remember the place we were talking about the other night? Found it!</div>-->
                    <!--<div style="width:100%"><img :src="earlysun" alt="" style="width:100%;height:70%;margin:15px 0"></div>-->
                    <!--<i-button type="text" size="small" style="margin:5px;">-->
                        <!--<Icon type="ios-heart-outline" style="font-size: 1em"></Icon>-->
                        <!--Like(5)-->
                    <!--</i-button>-->
                    <!--<i-button type="text" size="small" style="margin:5px;">-->
                        <!--<Icon type="android-share" style="font-size: 1em"></Icon>-->
                        <!--Share(21)-->
                    <!--</i-button>-->
                <!--</div>-->
                <!--<div>-->
                    <!--<div>1 comments</div>-->
                    <!--<div>-->
                        <!--<div class="header-2"></div>-->
                        <!--<div class="rg" style="height:60px">-->
                            <!--Alice Freeman June 10, 2015 <br> That’s a wonderful place. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend ligula. Fusce posuere in sapien ac facilisis. Etiam sit amet justo non felis ornare feugiat.-->
                        <!--</div>-->
                        <!--<div>-->
                            <!--<a> Reply</a>-->
                            <!--<Icon type="ios-flag" style="margin:10px;vertical-align: middle"></Icon>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div>-->
                    <!--<div class="header-3"></div>-->
                    <!--<i-input type="textarea" placeholder="Add a comment..."></i-input>-->
                <!--</div>-->
                <!--<i-button type="info"  style="margin:5px;">Post Comment</i-button>-->
            <!--</div>-->
            <!--<div class="left-3">-->
                <!--<div>-->
                    <!--<div class="header-4" ></div>-->
                    <!--<div class="lf">-->
                        <!--Garry Newman posted on your timeline <br>32 minutes ago-->
                    <!--</div>-->
                    <!--<p>Remember the place we were talking about the other night? Found it!</p>-->
                    <!--<div><img :src="fallout" alt="" style="width:80%;height:70%;margin:15px 0"></div>-->
                    <!--<i-button type="text" size="small" style="margin:5px;">-->
                        <!--<Icon type="ios-heart-outline" style="font-size: 1em"></Icon>-->
                        <!--Like(5)-->
                    <!--</i-button>-->
                    <!--<i-button type="text" size="small" style="margin:5px;">-->
                        <!--<Icon type="android-share" style="font-size: 1em"></Icon>-->
                        <!--Share(21)-->
                    <!--</i-button>-->
                <!--</div>-->
                <!--<div>-->
                    <!--<div>1 comments</div>-->
                    <!--<div>-->
                        <!--<div class="header-2"></div>-->
                        <!--<div>-->
                            <!--Alice Freeman June 10, 2015 <br> That’s a wonderful place. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend ligula. Fusce posuere in sapien ac facilisis. Etiam sit amet justo non felis ornare feugiat.-->
                        <!--</div>-->
                        <!--<a> Reply</a>-->
                        <!--<Icon type="ios-flag" style="margin:10px;vertical-align: middle"></Icon>-->
                        <!--</p>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div>-->
                    <!--<div class="header-3"></div>-->
                    <!--<i-input type="textarea" placeholder="Add a comment..."></i-input>-->
                <!--</div>-->
                <!--<i-button type="info"  style="margin:5px;">Post Comment</i-button>-->
            <!--</div>-->
            <!--<div class="left-4">-->
                <!--<div class="header-5"></div>-->
                <!--<div class="lf">-->
                    <!--Carl Henderson shared something with you <br>-->
                    <!--June 10, 2015-->
                    <!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend ligula. Fusce posuere in sapien ac facilisis.-->
                        <!--Etiam sit amet justo non felis ornare feugiat. Aenean lorem ex, ultrices sit amet ligula sed...</p>-->
                    <!--<i-button type="text" size="small" style="margin:5px;">-->
                        <!--<Icon type="ios-heart-outline" style="font-size: 1em"></Icon>-->
                        <!--Like(5)-->
                    <!--</i-button>-->
                    <!--<i-button type="text" size="small" style="margin:5px;">-->
                        <!--<Icon type="android-share" style="font-size: 1em"></Icon>-->
                        <!--Share(21)-->
                    <!--</i-button>-->
                    <!--<div>-->
                        <!--<div class="header-3"></div>-->
                        <!--<div><i-input type="textarea" placeholder="请输入..."></i-input>-->
                            <!--<i-button type="info">Post Comment</i-button></div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="left-5">-->
                <!--<div>-->
                    <!--<div class="header-6"></div>-->
                    <!--<p>-->
                        <!--Jane Dean shared a video with you <br>-->
                        <!--June 1, 2015-->
                    <!--</p>-->
                <!--</div>-->
                <!--<div style="backgroud-color:#f5f5f5;text-align: center" >-->
                    <!--<Icon type="document-text"></Icon>-->
                <!--</div>-->
                <!--<p> Durak (Stop) - 2014 (Animated Short Film) from serdarcotuk on Vimeo.</p>-->
                <!--<i-button type="text" size="small" style="margin:5px;">-->
                    <!--<Icon type="ios-heart-outline" style="font-size: 1em"></Icon>-->
                    <!--Like(5)-->
                <!--</i-button>-->
                <!--<i-button type="text" size="small" style="margin:5px;">-->
                    <!--<Icon type="android-share" style="font-size: 1em"></Icon>-->
                    <!--Share(21)-->
                <!--</i-button>-->
                <!--<div>-->
                    <!--<div class="header-3"></div>-->
                    <!--<div>-->
                        <!--<i-input type="textarea" placeholder="请输入..." class="i-input"></i-input>-->
                        <!--<i-button type="info">Post Comment</i-button>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
            <!--<div class="right">-->
                <!--<i-col span="24">-->
                    <!--<Card class="card">-->
                        <!--<p slot="title">-->
                            <!--<a href="" class="lf" style="color:#2db7f5"> Latest Activity</a>-->
                            <!--<a href="" class="rg" style="color:#2db7f5">See All</a>-->
                        <!--</p>-->
                        <!--<p>-->
                           <!--<div class="header-1"></div>-->
                        <!--<p>-->
                            <!--<b style="font-size: 10px">Alice Freeman started following you.</b> <br>-->
                            <!--<span>13 mins. ago</span>-->
                        <!--</p>-->
                        <!--</p>-->
                        <!--<p>-->
                        <!--<div class="header-2"></div>-->
                        <!--<p>-->
                            <!--<b style="font-size: 10px">Alice Freeman started following you.</b> <br>-->
                            <!--<span>13 mins. ago</span>-->
                        <!--</p>-->
                        <!--</p>-->
                        <!--<p>-->
                        <!--<div class="header-4"></div>-->
                        <!--<p>-->
                            <!--<b style="font-size: 10px">Alice Freeman started following you.</b> <br>-->
                            <!--<span>13 mins. ago</span>-->
                        <!--</p>-->
                        <!--</p>-->
                        <!--<p>-->
                        <!--<div class="header-5"></div>-->
                        <!--<p>-->
                            <!--<b style="font-size: 10px">Alice Freeman started following you.</b> <br>-->
                            <!--<span>13 mins. ago</span>-->
                        <!--</p>-->
                        <!--</p>-->
                        <!--<p>-->
                        <!--<div class="header-6"></div>-->
                        <!--<p>-->
                            <!--<b style="font-size: 10px">Alice Freeman started following you.</b> <br>-->
                            <!--<span>13 mins. ago</span>-->
                        <!--</p>-->
                        <!--</p>-->
                        <!--<p>-->
                            <!--<div class="header-1"></div>-->
                        <!--<p>-->
                            <!--<b style="font-size: 10px">Alice Freeman started following you.</b> <br>-->
                            <!--<span>13 mins. ago</span>-->
                        <!--</p>-->
                        <!--</p>-->
                    <!--</Card>-->
                <!--</i-col>-->
            <!--</div>-->
        <!--</Tab-pane>-->
        <!--<Tab-pane label="About" key="key2">-->
            <!--<Row>-->
              <!--<i-col span="12">-->
                <!--<Card >-->
                <!--<p slot="title">-->
                    <!--General Information-->
                <!--</p>-->
                <!--<ul>-->
                    <!--<li v-for="item in movieList | limitBy limitNum limitFrom">-->
                        <!--<a :href="item.url" target="_blank">{{ item.name }}</a>-->
                        <!--<P>-->
                         <!--{{ item.rate }}-->
                        <!--</P>-->
                    <!--</li>-->
                <!--</ul>-->
            <!--</Card>-->
            <!--</i-col>-->
            <!--<i-col span="10" offset="1">-->
                      <!--<Card dis-hover>-->
                          <!--<p slot="title">Friends</p>-->
                          <!--<img :src="carl" alt="">-->
                          <!--<img :src="alice" alt="">-->
                          <!--<img :src="garry" alt="">-->
                          <!--<img :src="katherine" alt="">-->
                          <!--<img :src="jane" alt="">-->
                      <!--</Card>-->
              <!--</i-col>-->
           <!--</Row>-->
        <!--</Tab-pane>>-->
        <!--<Tab-pane label="Photos & Videos" key="key3">标签三的内容</Tab-pane>-->
    <!--</Tabs>-->

<!--</template>-->
<!--<script>-->
   <!--import earlysun from './img/early-sunrise.jpg';-->
   <!--import fallout from './img/fallout.jpg';-->
   <!--import alice from './img/alice.jpg';-->
   <!--import jane from './img/jane.jpg';-->
   <!--import katherine from './img/katherine.jpg';-->
   <!--import carl from './img/carl.jpg';-->
   <!--import garry from './img/garry.jpg';-->
   <!--export default {-->
          <!--data(){-->
              <!--return {earlysun: earlysun,-->
                  <!--fallout:fallout,-->
                  <!--movieList: [-->
                      <!--{-->
                          <!--name: '肖申克的救赎',-->
                          <!--url: 'https://movie.douban.com/subject/1292052/',-->
                          <!--rate: 9.6-->
                      <!--},-->
                      <!--{-->
                          <!--name: '这个杀手不太冷',-->
                          <!--url: 'https://movie.douban.com/subject/1295644/',-->
                          <!--rate: 9.4-->
                      <!--},-->
                      <!--{-->
                          <!--name: '霸王别姬',-->
                          <!--url: 'https://movie.douban.com/subject/1291546/',-->
                          <!--rate: 9.5-->
                      <!--},-->
                      <!--{-->
                          <!--name: '阿甘正传',-->
                          <!--url: 'https://movie.douban.com/subject/1292720/',-->
                          <!--rate: 9.4-->
                      <!--},-->
                      <!--{-->
                          <!--name: '美丽人生',-->
                          <!--url: 'https://movie.douban.com/subject/1292063/',-->
                          <!--rate: 9.5-->
                      <!--},-->
                      <!--{-->
                          <!--name: '千与千寻',-->
                          <!--url: 'https://movie.douban.com/subject/1291561/',-->
                          <!--rate: 9.2-->
                      <!--},-->
                      <!--{-->
                          <!--name: '辛德勒的名单',-->
                          <!--url: 'https://movie.douban.com/subject/1295124/',-->
                          <!--rate: 9.4-->
                      <!--},-->
                      <!--{-->
                          <!--name: '海上钢琴师',-->
                          <!--url: 'https://movie.douban.com/subject/1292001/',-->
                          <!--rate: 9.2-->
                      <!--},-->
                      <!--{-->
                          <!--name: '机器人总动员',-->
                          <!--url: 'https://movie.douban.com/subject/2131459/',-->
                          <!--rate: 9.3-->
                      <!--},-->
                      <!--{-->
                          <!--name: '盗梦空间',-->
                          <!--url: 'https://movie.douban.com/subject/3541415/',-->
                          <!--rate: 9.2-->
                      <!--}-->
                  <!--],-->
                  <!--alice:alice,-->
                  <!--jane:jane,-->
                  <!--katherine:katherine,-->
                  <!--carl:carl,-->
                  <!--garry:garry-->
              <!--}-->
          <!--},-->
       <!--methods: {-->
           <!--changeLimit () {-->
               <!--this.limitFrom = this.limitFrom === 0 ? 5 : 0;-->
           <!--}-->
       <!--}-->

   <!--}-->
<!--</script>-->

<!--<style>-->
<!--.template{-->
    <!--background-color:#f5f5f5;-->
<!--}-->
<!--.card p{-->
   <!--margin:20px 0;-->
<!--}-->
<!--.top{-->
    <!--background: url('img/back-img.jpg');-->
    <!--width:100%;-->
    <!--height:400px;-->
    <!--background-size: cover;-->
<!--}-->
 <!--.left{-->
     <!--float:left;-->
     <!--width:65%;-->
 <!--}-->
 <!--.post{-->
     <!--width:100%;-->
     <!--height:10%;-->
     <!--position:relative;-->
     <!--background-color: #f3f4f5;-->
 <!--}-->
<!--.right{-->
    <!--float:right;-->
    <!--width:30%;-->
    <!--margin-right: 2%;-->
<!--}-->
<!--.icon{-->
    <!--padding:15px;-->
    <!--font-size:2em;-->
<!--}-->
 <!--.i-button{-->
     <!--position: absolute;-->
     <!--top:20%;-->
     <!--right:2%;-->
    <!--}-->
 <!--.left img{-->
     <!--float:left;-->
 <!--}-->
<!--.lf{-->
    <!--float:left;-->
<!--}-->
<!--.rg{float:right;}-->
<!--.top-content{-->
    <!--width: 100%;-->
    <!--position:absolute;-->
    <!--top:350px;-->
    <!--left:50px;-->
<!--}-->
<!--.btn{-->
    <!--position: absolute;-->
    <!--top:450px;-->
    <!--right:20px;-->
<!--}-->
<!--.left-1 ,.left-2,.left-3,.left-4,.left-5{-->
    <!--margin:50px;-->
    <!--background-color: #f5f5f5;-->
<!--}-->
<!--.header{-->
    <!--border-radius: 50%;-->
    <!--background: url('img/katherine.jpg');-->
    <!--width:100px;-->
    <!--height:100px;-->
    <!--background-size: cover;-->
<!--}-->
 <!--.header-1{-->
     <!--border-radius: 50%;-->
     <!--background: url('img/garry.jpg');-->
     <!--width:50px;-->
     <!--height:50px;-->
     <!--background-size: cover;-->
     <!--float:left;-->
     <!--margin:5px;-->

    <!--}-->
 <!--.header-2{-->
     <!--border-radius: 50%;-->
     <!--background: url('img/alice.jpg');-->
     <!--width:50px;-->
     <!--height:50px;-->
     <!--background-size: cover;-->
     <!--float:left;-->
     <!--margin:5px;-->
 <!--}-->
<!--.header-3{-->
    <!--border-radius: 50%;-->
    <!--background: url('img/profile.jpg');-->
    <!--width:50px;-->
    <!--height:50px;-->
    <!--background-size: cover;-->
    <!--float:left;-->
    <!--margin:5px;-->
<!--}-->
<!--.header-4{-->
    <!--border-radius: 50%;-->
    <!--background: url('img/andrew.jpg');-->
    <!--width:50px;-->
    <!--height:50px;-->
    <!--background-size: cover;-->
    <!--float:left;-->
    <!--margin:5px;-->
<!--}-->
<!--.header-5{-->
    <!--border-radius: 50%;-->
    <!--background: url('img/carl.jpg');-->
    <!--width:50px;-->
    <!--height:50px;-->
    <!--background-size: cover;-->
    <!--float:left;-->
    <!--margin:5px;-->
<!--}-->
<!--.header-6{-->
    <!--border-radius: 50%;-->
    <!--background: url('img/jane.jpg');-->
    <!--width:50px;-->
    <!--height:50px;-->
    <!--background-size: cover;-->
    <!--float:left;-->
    <!--margin:5px;-->
<!--}-->
    <!--.name{-->
        <!--position:absolute;-->
        <!--top:30px;-->
        <!--left:40px;-->
    <!--}-->
    <!--.btn{-->
        <!--position:absolute;-->
        <!--top:80px;-->
        <!--right:80px;-->
    <!--}-->
    <!--.card p span{-->
        <!--color: #bbb;-->
    <!--}-->
<!--</style>-->