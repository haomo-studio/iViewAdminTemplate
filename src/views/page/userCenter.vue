<template>
    <Tabs active-key="key1">
        <Tab-pane label="标签一" key="key1">标签一的内容</Tab-pane>
        <Tab-pane label="标签二" key="key2">标签二的内容</Tab-pane>
        <Tab-pane label="标签三" key="key3">标签三的内容</Tab-pane>
    </Tabs>
    <div class="left">
        <div class="left-1">
            <i-input type="textarea" :rows="4" placeholder="请输入..."></i-input>
            <div class="post">
                <Icon type="image" class="icon"></Icon>
                <Icon type="android-person-add" class="icon"></Icon>
                <Icon type="ios-location" class="icon"></Icon>
                <i-button type="primary" class="i-button">post</i-button>
            </div>

        </div>
        <div class="left-2">
            <div>
                <img src="" alt="">
                <div class="lf">
                    Garry Newman posted on your timeline <br>32 minutes ago
                </div>
                <p>Remember the place we were talking about the other night? Found it!</p>
                <div><img src="" alt=""></div>
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
                    <img src="" alt="">
                    <div>
                Alice Freeman June 10, 2015 <br> That’s a wonderful place. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend ligula. Fusce posuere in sapien ac facilisis. Etiam sit amet justo non felis ornare feugiat.
                    </div>
                    <a> Reply</a>
                    <Icon type="ios-flag" style="margin:10px;vertical-align: middle"></Icon>
                </p>
            </div>
        </div>
        <div>
            <img src="" alt="">
            <i-input type="textarea" placeholder="Add a comment..."></i-input>
        </div>
            <i-button type="info"  style="margin:5px;">Post Comment</i-button>
    </div>
        <div class="left-3">
            <div>
                <img src="" alt="">
                <div class="lf">
                    Garry Newman posted on your timeline <br>32 minutes ago
                </div>
                <p>Remember the place we were talking about the other night? Found it!</p>
                <div><img src="" alt=""></div>
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
                    <img src="" alt="">
                    <div>
                        Alice Freeman June 10, 2015 <br> That’s a wonderful place. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eleifend ligula. Fusce posuere in sapien ac facilisis. Etiam sit amet justo non felis ornare feugiat.
                    </div>
                    <a> Reply</a>
                    <Icon type="ios-flag" style="margin:10px;vertical-align: middle"></Icon>
                    </p>
                </div>
            </div>
            <div>
                <img src="" alt="">
                <i-input type="textarea" placeholder="Add a comment..."></i-input>
            </div>
            <i-button type="info"  style="margin:5px;">Post Comment</i-button>
        </div>
        <div class="left-4">
            <img src="" alt="">
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
                    <img src="" alt="">
                    <div><i-input type="textarea" placeholder="请输入..."></i-input>
                        <i-button type="info">Post Comment</i-button></div>
                </div>
            </div>
        </div>
        <div class="left-5">
            <div>
                <img src="" alt="">
                <p>
                    Jane Dean shared a video with you <br>
                    June 1, 2015
                </p>
            </div>
            <img src="" alt="">
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
                <img src="" alt="">
                <div>
                    <i-input type="textarea" placeholder="请输入..."></i-input>
                    <i-button type="info">Post Comment</i-button>
                </div>
            </div>
        </div>
    </div>
    <div class="right">
        <i-col span="24">
            <Card >
                <p slot="title"  style="background-color:#039be5">
                    <a href="" class="lf" style="color:#000"> Latest Activity</a>
                    <a href="" class="rg" style="color:#000">See All</a>
                </p>
                <p>
                     <img src="" alt="">
                     <p>
                       Alice Freeman started following you. <br>13 mins. ago
                     </p>
                 </p>
                <p>
                    <img src="" alt="">
                <p>
                    Alice Freeman started following you. <br>13 mins. ago
                </p>
                </p>
                <p>
                    <img src="" alt="">
                <p>
                    Alice Freeman started following you. <br>13 mins. ago
                </p>
                </p>
                <p>
                    <img src="" alt="">
                <p>
                    Alice Freeman started following you. <br>13 mins. ago
                </p>
                </p>
                <p>
                    <img src="" alt="">
                <p>
                    Alice Freeman started following you. <br>13 mins. ago
                </p>
                </p>
                <p>
                    <img src="" alt="">
                <p>
                    Alice Freeman started following you. <br>13 mins. ago
                </p>
                </p>
            </Card>
        </i-col>
    </div>
</template>
<script>
    export default {

    }
</script>

<style>
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
</style>