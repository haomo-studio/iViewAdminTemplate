    <template>
               <h1>Button 按钮</h1>
        <div class="example-button">
               <i-button>Default</i-button>
               <i-button type="primary">Primary</i-button>
               <i-button type="ghost">Ghost</i-button>
               <i-button type="dashed">Dashed</i-button>
               <i-button type="text">Text</i-button>
               <br><br>
               <i-button type="info">信息按钮</i-button>
               <i-button type="success">成功按钮</i-button>
               <i-button type="warning">警告按钮</i-button>
               <i-button type="error">错误按钮</i-button>
        </div>
        <div class="example-button">
            <i-button type="primary" shape="circle" icon="ios-search"></i-button>
            <i-button type="primary" icon="ios-search">搜索</i-button>
            <i-button type="primary" shape="circle" icon="ios-search">搜索</i-button>
            <i-button type="primary" shape="circle">圆角按钮</i-button>
            <br><br>
            <i-button type="ghost" shape="circle" icon="ios-search"></i-button>
            <i-button type="ghost" icon="ios-search">搜索</i-button>
            <i-button type="ghost" shape="circle" icon="ios-search">搜索</i-button>
            <i-button type="ghost" shape="circle">圆角按钮</i-button>
        </div>
        <div class="example-button">
            <i-button type="primary" size="large">Large</i-button>
            <i-button type="primary">Default</i-button>
            <i-button type="primary" size="small">Small</i-button>
            <br><br>
            <i-button type="primary" shape="circle" size="large">Large</i-button>
            <i-button type="primary" shape="circle">Default</i-button>
            <i-button type="primary" shape="circle" size="small">Small</i-button>
        </div>
        <div class="example-button">
            <i-button type="success" long>确认提交</i-button>
            <br><br>
            <i-button type="error" long>确认删除</i-button>
        </div>
        <div class="example-button">
            <i-button>Default</i-button>
            <i-button disabled>Default(Disabled)</i-button>
            <br>
            <i-button type="primary">Primary</i-button>
            <i-button type="primary" disabled>Primary(Disabled)</i-button>
            <br>
            <i-button type="ghost">Ghost</i-button>
            <i-button type="ghost" disabled>Ghost(Disabled)</i-button>
            <br>
            <i-button type="dashed">Dashed</i-button>
            <i-button type="dashed" disabled>Dashed(Disabled)</i-button>
            <br>
            <i-button type="text">Text</i-button>
            <i-button type="text" disabled>Text(Disabled)</i-button>
        </div>
        <div class="example-button">
            <i-button type="primary" loading>Loading...</i-button>
            <i-button type="primary" :loading="loading" @click="toLoading">
                <span v-if="!loading">Click me!</span>
                <span v-else>Loading...</span>
            </i-button>
            <i-button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
                <span v-if="!loading2">Click me!</span>
                <span v-else>Loading...</span>
            </i-button>
        </div>
        <div class="example-button">
            <h4>基本</h4>
            <br><br>
            <Button-group>
                <i-button>取消</i-button>
                <i-button type="primary">确定</i-button>
            </Button-group>
            <Button-group>
                <i-button disabled>昨日</i-button>
                <i-button disabled>今日</i-button>
                <i-button disabled>明日</i-button>
            </Button-group>
            <Button-group>
                <i-button type="primary">L</i-button>
                <i-button>M</i-button>
                <i-button type="ghost">M</i-button>
                <i-button type="dashed">R</i-button>
            </Button-group>
            <br><br>
            <h4>配合图标</h4>
            <br><br>
            <Button-group>
                <i-button type="primary">
                    <Icon type="chevron-left"></Icon>
                    前进
                </i-button>
                <i-button type="primary">
                    后退
                    <Icon type="chevron-right"></Icon>
                </i-button>
            </Button-group>
            <Button-group>
                <i-button type="primary" icon="ios-skipbackward"></i-button>
                <i-button type="primary" icon="ios-skipforward"></i-button>
            </Button-group>
            <Button-group>
                <i-button type="ghost" icon="ios-color-wand-outline"></i-button>
                <i-button type="ghost" icon="ios-sunny-outline"></i-button>
                <i-button type="ghost" icon="ios-crop"></i-button>
                <i-button type="ghost" icon="ios-color-filter-outline"></i-button>
            </Button-group>
            <br><br>
            <h4>圆角</h4>
            <br><br>
            <Button-group shape="circle">
                <i-button type="primary">
                    <Icon type="chevron-left"></Icon>
                    前进
                </i-button>
                <i-button type="primary">
                    后退
                    <Icon type="chevron-right"></Icon>
                </i-button>
            </Button-group>
            <Button-group shape="circle">
                <i-button type="primary" icon="ios-skipbackward"></i-button>
                <i-button type="primary" icon="ios-skipforward"></i-button>
            </Button-group>
            <Button-group shape="circle">
                <i-button type="ghost" icon="ios-color-wand-outline"></i-button>
                <i-button type="ghost" icon="ios-sunny-outline"></i-button>
                <i-button type="ghost" icon="ios-crop"></i-button>
                <i-button type="ghost" icon="ios-color-filter-outline"></i-button>
            </Button-group>
            <br><br>
            <h4>尺寸</h4>
            <br><br>
            <Button-group size="large">
                <i-button type="ghost">Large</i-button>
                <i-button type="ghost">Large</i-button>
            </Button-group>
            <Button-group>
                <i-button type="ghost">Default</i-button>
                <i-button type="ghost">Default</i-button>
            </Button-group>
            <Button-group size="small">
                <i-button type="ghost">Small</i-button>
                <i-button type="ghost">Small</i-button>
            </Button-group>
            <br><br>
            <Button-group size="large" shape="circle">
                <i-button type="ghost">Large</i-button>
                <i-button type="ghost">Large</i-button>
            </Button-group>
            <Button-group shape="circle">
                <i-button type="ghost">Default</i-button>
                <i-button type="ghost">Default</i-button>
            </Button-group>
            <Button-group size="small" shape="circle">
                <i-button type="ghost">Small</i-button>
                <i-button type="ghost">Small</i-button>
            </Button-group>
        </div>
        <div class="example-button">
            <Button-group vertical>
                <i-button type="ghost" icon="social-facebook"></i-button>
                <i-button type="ghost" icon="social-twitter"></i-button>
                <i-button type="ghost" icon="social-googleplus"></i-button>
                <i-button type="ghost" icon="social-tumblr"></i-button>
            </Button-group>
        </div>
    </template>
    <script>
        export default {
            data () {
                return {
                    loading: false,
                    loading2: false
                }
            },
            methods: {
                toLoading () {
                    this.loading = true;
                },
                toLoading2 () {
                    this.loading2 = true;
                }
            }
        }
    </script>
    <style>
        .example-button{
            border-bottom: 2px solid #ddd;
            padding: 30px;
        }
        h4{
            display: inline-block;
        }
        p{
            font-size:14px;
            padding-left:20px;

        }
    </style>