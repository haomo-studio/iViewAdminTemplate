    <template>
               <h1>Button 按钮</h1>
        <div class="example-button">
            <Card>
            <div class="button-icon">
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
            <div class="button-code">
                    <pre>
                        <code class="java hljs html xml"><span class="hljs-tag"><<span class="hljs-title">template</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">i-button></span>Default</span><span class="hljs-tag"><<span class="hljs-title">/i-button</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span>></span>Primary <span class="hljs-tag"><<span class="hljs-title">/i-button</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span>>Ghost</span><span class="hljs-tag"><<span class="hljs-title">/i-button</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"dashed"</span>>Dashed</span><span class="hljs-tag"><<span class="hljs-title">/i-button</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text"</span>>Text</span><span class="hljs-tag"><<span class="hljs-title">/i-button</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">br</span>></span><span class="hljs-tag"><<span class="hljs-title">br</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"info"</span>>信息按钮</span><span class="hljs-tag"><<span class="hljs-title">/i-button</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"success"</span>>成功按钮</span><span class="hljs-tag"><<span class="hljs-title">/i-button</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"warning"</span>>警告按钮</span><span class="hljs-tag"><<span class="hljs-title">/i-button</span>></span>
    <span class="hljs-tag"><<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"error"</span>>错误按钮</span><span class="hljs-tag"><<span class="hljs-title">/i-button</span>></span><br><span class="hljs-tag"><<span class="hljs-title">/template</span>></span>
                        </code>
                    </pre>
            </div>
            <div class="code-more">
                <i class="ivu-icon ivu-icon-ios-arrow-down"></i>
            </div>
            </Card>
        </div>
        <div class="example-button">
            <Card>
            <i-button type="primary" shape="circle" icon="ios-search"></i-button>
            <i-button type="primary" icon="ios-search">搜索</i-button>
            <i-button type="primary" shape="circle" icon="ios-search">搜索</i-button>
            <i-button type="primary" shape="circle">圆角按钮</i-button>
            <br><br>
            <i-button type="ghost" shape="circle" icon="ios-search"></i-button>
            <i-button type="ghost" icon="ios-search">搜索</i-button>
            <i-button type="ghost" shape="circle" icon="ios-search">搜索</i-button>
            <i-button type="ghost" shape="circle">圆角按钮</i-button>
            <div class="button-code">
                <pre _v-53d23a6d=""><code _v-53d23a6d="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> <span class="hljs-attribute">shape</span>=<span class="hljs-value">"circle"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-search"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-search"</span>&gt;</span>搜索<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> <span class="hljs-attribute">shape</span>=<span class="hljs-value">"circle"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-search"</span>&gt;</span>搜索<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> <span class="hljs-attribute">shape</span>=<span class="hljs-value">"circle"</span>&gt;</span>圆角按钮<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span> <span class="hljs-attribute">shape</span>=<span class="hljs-value">"circle"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-search"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-search"</span>&gt;</span>搜索<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span> <span class="hljs-attribute">shape</span>=<span class="hljs-value">"circle"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-search"</span>&gt;</span>搜索<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span> <span class="hljs-attribute">shape</span>=<span class="hljs-value">"circle"</span>&gt;</span>圆角按钮<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {

    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre>
            </div>
            <div class="code-more">
                <i class="ivu-icon ivu-icon-ios-arrow-down"></i>
            </div>
            </Card>
        </div>
        <div class="example-button">
            <Card>
            <div class="button-icon">
                <i-button type="primary" size="large">Large</i-button>
                <i-button type="primary">Default</i-button>
                <i-button type="primary" size="small">Small</i-button>
                <br><br>
                <i-button type="primary" shape="circle" size="large">Large</i-button>
                <i-button type="primary" shape="circle">Default</i-button>
                <i-button type="primary" shape="circle" size="small">Small</i-button>
            </div>
            <div class="button-code">
                <pre _v-53d23a6d=""><code _v-53d23a6d="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"large"</span>&gt;</span>Large<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"small"</span>&gt;</span>Small<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> <span class="hljs-attribute">shape</span>=<span class="hljs-value">"circle"</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"large"</span>&gt;</span>Large<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> <span class="hljs-attribute">shape</span>=<span class="hljs-value">"circle"</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> <span class="hljs-attribute">shape</span>=<span class="hljs-value">"circle"</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"small"</span>&gt;</span>Small<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {

    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre>
            </div>
            <div class="code-more">
                <i class="ivu-icon ivu-icon-ios-arrow-down"></i>
            </div>
            </Card>
        </div>
        <div class="example-button">
            <Card>
            <div class="button-icon">
                <i-button type="success" long>确认提交</i-button>
                <br><br>
                <i-button type="error" long>确认删除</i-button>
            </div>
            <div class="button-code">
                <pre _v-53d23a6d=""><code _v-53d23a6d="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"success"</span> <span class="hljs-attribute">long</span>&gt;</span>确认提交<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"error"</span> <span class="hljs-attribute">long</span>&gt;</span>确认删除<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {

    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre>
            </div>
            <div class="code-more">
                <i class="ivu-icon ivu-icon-ios-arrow-down"></i>
            </div>
            </Card>
        </div>
        <div class="example-button">
            <Card>
            <div class="button-icon">
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
            <div class="button-code">
                <pre _v-53d23a6d=""><code _v-53d23a6d="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">disabled</span>&gt;</span>Default(Disabled)<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span>&gt;</span>Primary<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> <span class="hljs-attribute">disabled</span>&gt;</span>Primary(Disabled)<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span>&gt;</span>Ghost<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span> <span class="hljs-attribute">disabled</span>&gt;</span>Ghost(Disabled)<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"dashed"</span>&gt;</span>Dashed<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"dashed"</span> <span class="hljs-attribute">disabled</span>&gt;</span>Dashed(Disabled)<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text"</span>&gt;</span>Text<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text"</span> <span class="hljs-attribute">disabled</span>&gt;</span>Text(Disabled)<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {

    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre>
            </div>
            <div class="code-more">
                <i class="ivu-icon ivu-icon-ios-arrow-down"></i>
            </div>
            </Card>
        </div>
        <div class="example-button">
            <Card>
            <div class="button-icon">
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
            <div class="button-code">
                <pre _v-53d23a6d=""><code _v-53d23a6d="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> <span class="hljs-attribute">loading</span>&gt;</span>Loading...<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> <span class="hljs-attribute">:loading</span>=<span class="hljs-value">"loading"</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"toLoading"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">v-if</span>=<span class="hljs-value">"!loading"</span>&gt;</span>Click me!<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">v-else</span>&gt;</span>Loading...<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> <span class="hljs-attribute">:loading</span>=<span class="hljs-value">"loading2"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"checkmark-round"</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"toLoading2"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">v-if</span>=<span class="hljs-value">"!loading2"</span>&gt;</span>Click me!<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">span</span> <span class="hljs-attribute">v-else</span>&gt;</span>Loading...<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                loading: <span class="hljs-literal">false</span>,
                loading2: <span class="hljs-literal">false</span>
            }
        },
        methods: {
            toLoading () {
                <span class="hljs-keyword">this</span>.loading = <span class="hljs-literal">true</span>;
            },
            toLoading2 () {
                <span class="hljs-keyword">this</span>.loading2 = <span class="hljs-literal">true</span>;
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre>
            </div>
            <div class="code-more">
                <i class="ivu-icon ivu-icon-ios-arrow-down"></i>
            </div>
            </Card>
        </div>
        <div class="example-button">
            <Card>
            <div class="button-icon">
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
            <div class="button-code">
                <pre _v-53d23a6d=""><code _v-53d23a6d="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">h4</span>&gt;</span>基本<span class="hljs-tag">&lt;/<span class="hljs-title">h4</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button-group</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span>&gt;</span>取消<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span>&gt;</span>确定<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Button-group</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button-group</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">disabled</span>&gt;</span>昨日<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">disabled</span>&gt;</span>今日<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">disabled</span>&gt;</span>明日<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Button-group</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button-group</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span>&gt;</span>L<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span>&gt;</span>M<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span>&gt;</span>M<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"dashed"</span>&gt;</span>R<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Button-group</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">h4</span>&gt;</span>配合图标<span class="hljs-tag">&lt;/<span class="hljs-title">h4</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button-group</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"chevron-left"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
            前进
        <span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span>&gt;</span>
            后退
            <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"chevron-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Button-group</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button-group</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-skipbackward"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-skipforward"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Button-group</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button-group</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-color-wand-outline"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-sunny-outline"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-crop"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-color-filter-outline"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Button-group</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">h4</span>&gt;</span>圆角<span class="hljs-tag">&lt;/<span class="hljs-title">h4</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button-group</span> <span class="hljs-attribute">shape</span>=<span class="hljs-value">"circle"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"chevron-left"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
            前进
        <span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span>&gt;</span>
            后退
            <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"chevron-right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Button-group</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button-group</span> <span class="hljs-attribute">shape</span>=<span class="hljs-value">"circle"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-skipbackward"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-skipforward"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Button-group</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button-group</span> <span class="hljs-attribute">shape</span>=<span class="hljs-value">"circle"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-color-wand-outline"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-sunny-outline"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-crop"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"ios-color-filter-outline"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Button-group</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">h4</span>&gt;</span>尺寸<span class="hljs-tag">&lt;/<span class="hljs-title">h4</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button-group</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"large"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span>&gt;</span>Large<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span>&gt;</span>Large<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Button-group</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button-group</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Button-group</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button-group</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"small"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span>&gt;</span>Small<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span>&gt;</span>Small<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Button-group</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button-group</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"large"</span> <span class="hljs-attribute">shape</span>=<span class="hljs-value">"circle"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span>&gt;</span>Large<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span>&gt;</span>Large<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Button-group</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button-group</span> <span class="hljs-attribute">shape</span>=<span class="hljs-value">"circle"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span>&gt;</span>Default<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Button-group</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button-group</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"small"</span> <span class="hljs-attribute">shape</span>=<span class="hljs-value">"circle"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span>&gt;</span>Small<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span>&gt;</span>Small<span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Button-group</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {

    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre>
            </div>
            <div class="code-more">
                <i class="ivu-icon ivu-icon-ios-arrow-down"></i>
            </div>
            </Card>
        </div>

        <div class="example-button">
            <Card>
            <div class="button-icon">
                <Button-group vertical>
                    <i-button type="ghost" icon="social-facebook"></i-button>
                    <i-button type="ghost" icon="social-twitter"></i-button>
                    <i-button type="ghost" icon="social-googleplus"></i-button>
                    <i-button type="ghost" icon="social-tumblr"></i-button>
                </Button-group>
            </div>
            <div class="button-code">
                <pre _v-53d23a6d=""><code _v-53d23a6d="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button-group</span> <span class="hljs-attribute">vertical</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"social-facebook"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"social-twitter"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"social-googleplus"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">i-button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ghost"</span> <span class="hljs-attribute">icon</span>=<span class="hljs-value">"social-tumblr"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">i-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Button-group</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {

    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre>
            </div>
            <div class="code-more">
                <i class="ivu-icon ivu-icon-ios-arrow-down"></i>
            </div>
            </Card>
        </div>
    </template>
    <script>
        import $ from "jquery";
        export default {
            data () {
                return {
                    loading: false,
                    loading2: false,

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
        .button-icon{
            width:50%;
            float:left;
        }
        .example-button:after{
            content:"";
            display:block;
            clear: both;
        }
        .example-button:before{
            content:'';
            display:block;
            clear: both;
        }
        h4{
            display: inline-block;
        }
        p{
            font-size:14px;
            padding-left:20px;

        }
        .button-code{
            width:50%;
            float:right;
            font-size: 1em;
        }
        .java{
            text-align: left;
        }
        .code-more:before{
            content: "";
            display:block;
            clear:both;
        }
        .code-more{
            text-align: center;
            cursor:pointer;
        }
    </style>