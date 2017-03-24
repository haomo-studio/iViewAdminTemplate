<template class="template">
   <div class="top" >
       <div class="top-content">
           <div class="header">
           </div>
           <div style="font-size:2em;color: #fff;margin-left:100px" class="name">Katherine Wilson </div>
           <div   class="btn">
               <i-button type="info" style="color: #fff">Follow</i-button>
               <i-button type="info" style="color: #fff">Send Message</i-button>
           </div>
       </div>
   </div>
    <Tabs active-key="key1">
        <Tab-pane label="Timeline" key="key1">
            <div class="left">
            <div class="left-1">
                <i-input type="textarea" :rows="4" placeholder="请输入..." style=""></i-input>
                <div class="post">
                    <Icon type="image" class="icon"></Icon>
                    <Icon type="android-person-add" class="icon"></Icon>
                    <Icon type="ios-location" class="icon"></Icon>
                    <i-button type="primary" class="i-button">post</i-button>
                </div>
            </div>
            <div class="left-2">
                <div>
                    <div class="header-1"></div>
                    <div class="gr" style="height:60px">
                        <br>
                        Garry Newman posted on your timeline <br><span style="color: #aaa;font-size: 12px">32 minutes ago </span>
                    </div>
                    <br>
                    <div> &nbsp;&nbsp;Remember the place we were talking about the other night? Found it!</div>
                    <div style="width:100%"><img :src="earlysun" alt="" style="width:100%;height:70%;margin:15px 0"></div>
                    <i-button type="text" size="small" style="margin:5px;">
                        <Icon type="ios-heart-outline" style="font-size: 1em"></Icon>
                        Like(5)
                    </i-button>
                    <i-button type="text" size="small" style="margin:5px;">
                        <Icon type="android-share" style="font-size: 1em"></Icon>
                        Share(21)
                    </i-button>
                </div>
                <div>
                    <div>1 comments</div>
                    <div>
                        <div class="header-2"></div>
                        <div class="rg" style="height:60px">
                            Alice Freeman June 10, 2015 <br> That’s a wonderful place. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend ligula. Fusce posuere in sapien ac facilisis. Etiam sit amet justo non felis ornare feugiat.
                        </div>
                        <div>
                            <a> Reply</a>
                            <Icon type="ios-flag" style="margin:10px;vertical-align: middle"></Icon>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="header-3"></div>
                    <i-input type="textarea" placeholder="Add a comment..."></i-input>
                </div>
                <i-button type="info"  style="margin:5px;">Post Comment</i-button>
            </div>
            <div class="left-3">
                <div>
                    <div class="header-4" ></div>
                    <div class="lf">
                        Garry Newman posted on your timeline <br>32 minutes ago
                    </div>
                    <p>Remember the place we were talking about the other night? Found it!</p>
                    <div><img :src="fallout" alt="" style="width:80%;height:70%;margin:15px 0"></div>
                    <i-button type="text" size="small" style="margin:5px;">
                        <Icon type="ios-heart-outline" style="font-size: 1em"></Icon>
                        Like(5)
                    </i-button>
                    <i-button type="text" size="small" style="margin:5px;">
                        <Icon type="android-share" style="font-size: 1em"></Icon>
                        Share(21)
                    </i-button>
                </div>
                <div>
                    <div>1 comments</div>
                    <div>
                        <div class="header-2"></div>
                        <div>
                            Alice Freeman June 10, 2015 <br> That’s a wonderful place. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend ligula. Fusce posuere in sapien ac facilisis. Etiam sit amet justo non felis ornare feugiat.
                        </div>
                        <a> Reply</a>
                        <Icon type="ios-flag" style="margin:10px;vertical-align: middle"></Icon>
                        </p>
                    </div>
                </div>
                <div>
                    <div class="header-3"></div>
                    <i-input type="textarea" placeholder="Add a comment..."></i-input>
                </div>
                <i-button type="info"  style="margin:5px;">Post Comment</i-button>
            </div>
            <div class="left-4">
                <div class="header-5"></div>
                <div class="lf">
                    Carl Henderson shared something with you <br>
                    June 10, 2015
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend ligula. Fusce posuere in sapien ac facilisis.
                        Etiam sit amet justo non felis ornare feugiat. Aenean lorem ex, ultrices sit amet ligula sed...</p>
                    <i-button type="text" size="small" style="margin:5px;">
                        <Icon type="ios-heart-outline" style="font-size: 1em"></Icon>
                        Like(5)
                    </i-button>
                    <i-button type="text" size="small" style="margin:5px;">
                        <Icon type="android-share" style="font-size: 1em"></Icon>
                        Share(21)
                    </i-button>
                    <div>
                        <div class="header-3"></div>
                        <div><i-input type="textarea" placeholder="请输入..."></i-input>
                            <i-button type="info">Post Comment</i-button></div>
                    </div>
                </div>
            </div>
            <div class="left-5">
                <div>
                    <div class="header-6"></div>
                    <p>
                        Jane Dean shared a video with you <br>
                        June 1, 2015
                    </p>
                </div>
                <div style="backgroud-color:#f5f5f5;text-align: center" >
                    <Icon type="document-text"></Icon>
                </div>
                <p> Durak (Stop) - 2014 (Animated Short Film) from serdarcotuk on Vimeo.</p>
                <i-button type="text" size="small" style="margin:5px;">
                    <Icon type="ios-heart-outline" style="font-size: 1em"></Icon>
                    Like(5)
                </i-button>
                <i-button type="text" size="small" style="margin:5px;">
                    <Icon type="android-share" style="font-size: 1em"></Icon>
                    Share(21)
                </i-button>
                <div>
                    <div class="header-3"></div>
                    <div>
                        <i-input type="textarea" placeholder="请输入..." class="i-input"></i-input>
                        <i-button type="info">Post Comment</i-button>
                    </div>
                </div>
            </div>
        </div>
            <div class="right">
                <i-col span="24">
                    <Card class="card">
                        <p slot="title">
                            <a href="" class="lf" style="color:#2db7f5"> Latest Activity</a>
                            <a href="" class="rg" style="color:#2db7f5">See All</a>
                        </p>
                        <p>
                           <div class="header-1"></div>
                        <p>
                            <b style="font-size: 10px">Alice Freeman started following you.</b> <br>
                            <span>13 mins. ago</span>
                        </p>
                        </p>
                        <p>
                        <div class="header-2"></div>
                        <p>
                            <b style="font-size: 10px">Alice Freeman started following you.</b> <br>
                            <span>13 mins. ago</span>
                        </p>
                        </p>
                        <p>
                        <div class="header-4"></div>
                        <p>
                            <b style="font-size: 10px">Alice Freeman started following you.</b> <br>
                            <span>13 mins. ago</span>
                        </p>
                        </p>
                        <p>
                        <div class="header-5"></div>
                        <p>
                            <b style="font-size: 10px">Alice Freeman started following you.</b> <br>
                            <span>13 mins. ago</span>
                        </p>
                        </p>
                        <p>
                        <div class="header-6"></div>
                        <p>
                            <b style="font-size: 10px">Alice Freeman started following you.</b> <br>
                            <span>13 mins. ago</span>
                        </p>
                        </p>
                        <p>
                            <div class="header-1"></div>
                        <p>
                            <b style="font-size: 10px">Alice Freeman started following you.</b> <br>
                            <span>13 mins. ago</span>
                        </p>
                        </p>
                    </Card>
                </i-col>
            </div>
        </Tab-pane>
        <Tab-pane label="About" key="key2">
            <Row>
              <i-col span="12">
                <Card >
                <p slot="title">
                    General Information
                </p>
                <ul>
                    <li v-for="item in movieList | limitBy limitNum limitFrom">
                        <a :href="item.url" target="_blank">{{ item.name }}</a>
                        <P>
                         {{ item.rate }}
                        </P>
                    </li>
                </ul>
            </Card>
            </i-col>
            <i-col span="10" offset="1">
                      <Card dis-hover>
                          <p slot="title">Friends</p>
                          <img :src="carl" alt="">
                          <img :src="alice" alt="">
                          <img :src="garry" alt="">
                          <img :src="katherine" alt="">
                          <img :src="jane" alt="">
                      </Card>
              </i-col>
           </Row>
        </Tab-pane>>
        <Tab-pane label="Photos & Videos" key="key3">标签三的内容</Tab-pane>
    </Tabs>

</template>
<script>
   import earlysun from './img/early-sunrise.jpg';
   import fallout from './img/fallout.jpg';
   import alice from './img/alice.jpg';
   import jane from './img/jane.jpg';
   import katherine from './img/katherine.jpg';
   import carl from './img/carl.jpg';
   import garry from './img/garry.jpg';
   export default {
          data(){
              return {earlysun: earlysun,
                  fallout:fallout,
                  movieList: [
                      {
                          name: '肖申克的救赎',
                          url: 'https://movie.douban.com/subject/1292052/',
                          rate: 9.6
                      },
                      {
                          name: '这个杀手不太冷',
                          url: 'https://movie.douban.com/subject/1295644/',
                          rate: 9.4
                      },
                      {
                          name: '霸王别姬',
                          url: 'https://movie.douban.com/subject/1291546/',
                          rate: 9.5
                      },
                      {
                          name: '阿甘正传',
                          url: 'https://movie.douban.com/subject/1292720/',
                          rate: 9.4
                      },
                      {
                          name: '美丽人生',
                          url: 'https://movie.douban.com/subject/1292063/',
                          rate: 9.5
                      },
                      {
                          name: '千与千寻',
                          url: 'https://movie.douban.com/subject/1291561/',
                          rate: 9.2
                      },
                      {
                          name: '辛德勒的名单',
                          url: 'https://movie.douban.com/subject/1295124/',
                          rate: 9.4
                      },
                      {
                          name: '海上钢琴师',
                          url: 'https://movie.douban.com/subject/1292001/',
                          rate: 9.2
                      },
                      {
                          name: '机器人总动员',
                          url: 'https://movie.douban.com/subject/2131459/',
                          rate: 9.3
                      },
                      {
                          name: '盗梦空间',
                          url: 'https://movie.douban.com/subject/3541415/',
                          rate: 9.2
                      }
                  ],
                  alice:alice,
                  jane:jane,
                  katherine:katherine,
                  carl:carl,
                  garry:garry
              }
          },
       methods: {
           changeLimit () {
               this.limitFrom = this.limitFrom === 0 ? 5 : 0;
           }
       }

   }
</script>

<style>
.template{
    background-color:#f5f5f5;
}
.card p{
   margin:20px 0;
}
.top{
    background: url('img/back-img.jpg');
    width:100%;
    height:400px;
    background-size: cover;
}
 .left{
     float:left;
     width:65%;
 }
 .post{
     width:100%;
     height:10%;
     position:relative;
     background-color: #f3f4f5;
 }
.right{
    float:right;
    width:30%;
    margin-right: 2%;
}
.icon{
    padding:15px;
    font-size:2em;
}
 .i-button{
     position: absolute;
     top:20%;
     right:2%;
    }
 .left img{
     float:left;
 }
.lf{
    float:left;
}
.rg{float:right;}
.top-content{
    width: 100%;
    position:absolute;
    top:350px;
    left:50px;
}
.btn{
    position: absolute;
    top:450px;
    right:20px;
}
.left-1 ,.left-2,.left-3,.left-4,.left-5{
    margin:50px;
    background-color: #f5f5f5;
}
.header{
    border-radius: 50%;
    background: url('img/katherine.jpg');
    width:100px;
    height:100px;
    background-size: cover;
}
 .header-1{
     border-radius: 50%;
     background: url('img/garry.jpg');
     width:50px;
     height:50px;
     background-size: cover;
     float:left;
     margin:5px;

    }
 .header-2{
     border-radius: 50%;
     background: url('img/alice.jpg');
     width:50px;
     height:50px;
     background-size: cover;
     float:left;
     margin:5px;
 }
.header-3{
    border-radius: 50%;
    background: url('img/profile.jpg');
    width:50px;
    height:50px;
    background-size: cover;
    float:left;
    margin:5px;
}
.header-4{
    border-radius: 50%;
    background: url('img/andrew.jpg');
    width:50px;
    height:50px;
    background-size: cover;
    float:left;
    margin:5px;
}
.header-5{
    border-radius: 50%;
    background: url('img/carl.jpg');
    width:50px;
    height:50px;
    background-size: cover;
    float:left;
    margin:5px;
}
.header-6{
    border-radius: 50%;
    background: url('img/jane.jpg');
    width:50px;
    height:50px;
    background-size: cover;
    float:left;
    margin:5px;
}
    .name{
        position:absolute;
        top:30px;
        left:40px;
    }
    .btn{
        position:absolute;
        top:80px;
        right:80px;
    }
    .card p span{
        color: #bbb;
    }
</style>