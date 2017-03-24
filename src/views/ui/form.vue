<template>
    <Card style="width: 40%;margin: 20px">
        <i-form :model="formItem" :label-width="80">
            <Form-item label="输入框">
                <i-input :value.sync="formItem.input" placeholder="请输入"></i-input>
            </Form-item>
            <Form-item label="选择器">
                <i-select :model.sync="formItem.select" placeholder="请选择">
                    <i-option value="beijing">北京市</i-option>
                    <i-option value="shanghai">上海市</i-option>
                    <i-option value="shenzhen">深圳市</i-option>
                </i-select>
            </Form-item>
            <Form-item label="日期控件">
                <Row>
                    <i-col span="11">
                        <Date-picker type="date" placeholder="选择日期" :value.sync="formItem.date"></Date-picker>
                    </i-col>
                    <i-col span="2" style="text-align: center">-</i-col>
                    <i-col span="11">
                        <Time-picker type="time" placeholder="选择时间" :value.sync="formItem.time"></Time-picker>
                    </i-col>
                </Row>
            </Form-item>
            <Form-item label="单选框">
                <Radio-group :model.sync="formItem.radio">
                    <Radio value="male">男</Radio>
                    <Radio value="female">女</Radio>
                </Radio-group>
            </Form-item>
            <Form-item label="多选框">
                <Checkbox-group :model.sync="formItem.checkbox">
                    <Checkbox value="吃饭"></Checkbox>
                    <Checkbox value="睡觉"></Checkbox>
                    <Checkbox value="跑步"></Checkbox>
                    <Checkbox value="看电影"></Checkbox>
                </Checkbox-group>
            </Form-item>
            <Form-item label="开关">
                <Switch :checked.sync="formItem.switch" size="large">
                    <span slot="open">开启</span>
                    <span slot="close">关闭</span>
                </Switch>
            </Form-item>
            <Form-item label="滑块">
                <Slider :value.sync="formItem.slider" range></Slider>
            </Form-item>
            <Form-item label="文本域">
                <i-input :value.sync="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
            </Form-item>
            <Form-item>
                <i-button type="primary">提交</i-button>
                <i-button type="ghost" style="margin-left: 8px">取消</i-button>
            </Form-item>
        </i-form>
    </Card>

    <Card>
      <pre data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Form</span> <span class="hljs-attribute">ref</span>=<span class="hljs-value">"formInline"</span> <span class="hljs-attribute">:model</span>=<span class="hljs-value">"formInline"</span> <span class="hljs-attribute">:rules</span>=<span class="hljs-value">"ruleInline"</span> <span class="hljs-attribute">inline</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Form-item</span> <span class="hljs-attribute">prop</span>=<span class="hljs-value">"user"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Input</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"text"</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"formInline.user"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Username"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ios-person-outline"</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"prepend"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-title">Input</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Form-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Form-item</span> <span class="hljs-attribute">prop</span>=<span class="hljs-value">"password"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Input</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"password"</span> <span class="hljs-attribute">v-model</span>=<span class="hljs-value">"formInline.password"</span> <span class="hljs-attribute">placeholder</span>=<span class="hljs-value">"Password"</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ios-locked-outline"</span> <span class="hljs-attribute">slot</span>=<span class="hljs-value">"prepend"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-title">Input</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Form-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">Form-item</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"handleSubmit('formInline')"</span>&gt;</span>登录<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">Form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">Form</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                formInline: {
                    user: <span class="hljs-string">''</span>,
                    password: <span class="hljs-string">''</span>
                },
                ruleInline: {
                    user: [
                        { required: <span class="hljs-literal">true</span>, message: <span class="hljs-string">'请填写用户名'</span>, trigger: <span class="hljs-string">'blur'</span> }
                    ],
                    password: [
                        { required: <span class="hljs-literal">true</span>, message: <span class="hljs-string">'请填写密码'</span>, trigger: <span class="hljs-string">'blur'</span> },
                        { type: <span class="hljs-string">'string'</span>, min: <span class="hljs-number">6</span>, message: <span class="hljs-string">'密码长度不能小于6位'</span>, trigger: <span class="hljs-string">'blur'</span> }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                <span class="hljs-keyword">this</span>.$refs[name].validate((valid) =&gt; {
                    <span class="hljs-keyword">if</span> (valid) {
                        <span class="hljs-keyword">this</span>.$Message.success(<span class="hljs-string">'提交成功!'</span>);
                    } <span class="hljs-keyword">else</span> {
                        <span class="hljs-keyword">this</span>.$Message.error(<span class="hljs-string">'表单验证失败!'</span>);
                    }
                })
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre>
    </Card>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        }
    }
</script>
