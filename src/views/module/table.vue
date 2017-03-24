<template>
    <!--<div style="margin:5px">-->
    <!--<i-button type="primary" style="margin-left:10px;">简单表格</i-button>-->
    <!--<i-button type="warning" style="margin-left:10px;">数据表格</i-button>-->
    <!--</div>-->
    <div style="margin: 15px; box-shadow: -5px -5px 5px #ddd; padding: 10px;" >
        <h3 id="ptTable">普通表格</h3>
        <i-table :columns="columns1" :data="data1"></i-table>
        <pre data-v-3802a467="" class="" v-if="showPre1" style="height:928px; margin-bottom: 0">
            <code class="html hljs xml">
                <code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Table</span> <span class="hljs-attribute">:columns</span>=<span class="hljs-value">"columns1"</span> <span class="hljs-attribute">:data</span>=<span class="hljs-value">"data1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                columns1: [
                    {
                        title: <span class="hljs-string">'姓名'</span>,
                        key: <span class="hljs-string">'name'</span>
                    },
                    {
                        title: <span class="hljs-string">'年龄'</span>,
                        key: <span class="hljs-string">'age'</span>
                    },
                    {
                        title: <span class="hljs-string">'地址'</span>,
                        key: <span class="hljs-string">'address'</span>
                    }
                ],
                data1: [
                    {
                        name: <span class="hljs-string">'王小明'</span>,
                        age: <span class="hljs-number">18</span>,
                        address: <span class="hljs-string">'北京市朝阳区芍药居'</span>
                    },
                    {
                        name: <span class="hljs-string">'张小刚'</span>,
                        age: <span class="hljs-number">25</span>,
                        address: <span class="hljs-string">'北京市海淀区西二旗'</span>
                    },
                    {
                        name: <span class="hljs-string">'李小红'</span>,
                        age: <span class="hljs-number">30</span>,
                        address: <span class="hljs-string">'上海市浦东新区世纪大道'</span>
                    },
                    {
                        name: <span class="hljs-string">'周小伟'</span>,
                        age: <span class="hljs-number">26</span>,
                        address: <span class="hljs-string">'深圳市南山区深南大道'</span>
                    }
                ]
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code>
            </code>
        </pre>
        <div style="border:1px solid #ddd; text-align:center;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;" @click="showPre($event,1,'ptTable')">
            <Icon type="chevron-down" size="10" v-if="showPre1"></Icon>
            <Icon type="chevron-up" size="10" v-else></Icon>
        </div>
        <h3 id="gdTable">固定表头</h3>
        <i-table height="200" :columns="columns1" :data="data2"></i-table>
        <pre style="margin-bottom: 0" data-v-3802a467="" class="" v-if="showPre2"><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Table</span> <span class="hljs-attribute">height</span>=<span class="hljs-value">"200"</span> <span class="hljs-attribute">:columns</span>=<span class="hljs-value">"columns1"</span> <span class="hljs-attribute">:data</span>=<span class="hljs-value">"data2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                columns1: [
                    {
                        title: <span class="hljs-string">'姓名'</span>,
                        key: <span class="hljs-string">'name'</span>
                    },
                    {
                        title: <span class="hljs-string">'年龄'</span>,
                        key: <span class="hljs-string">'age'</span>
                    },
                    {
                        title: <span class="hljs-string">'地址'</span>,
                        key: <span class="hljs-string">'address'</span>
                    }
                ],
                data2: [
                    {
                        name: <span class="hljs-string">'王小明'</span>,
                        age: <span class="hljs-number">18</span>,
                        address: <span class="hljs-string">'北京市朝阳区芍药居'</span>
                    },
                    {
                        name: <span class="hljs-string">'张小刚'</span>,
                        age: <span class="hljs-number">25</span>,
                        address: <span class="hljs-string">'北京市海淀区西二旗'</span>
                    },
                    {
                        name: <span class="hljs-string">'李小红'</span>,
                        age: <span class="hljs-number">30</span>,
                        address: <span class="hljs-string">'上海市浦东新区世纪大道'</span>
                    },
                    {
                        name: <span class="hljs-string">'周小伟'</span>,
                        age: <span class="hljs-number">26</span>,
                        address: <span class="hljs-string">'深圳市南山区深南大道'</span>
                    },
                    {
                        name: <span class="hljs-string">'王小明'</span>,
                        age: <span class="hljs-number">18</span>,
                        address: <span class="hljs-string">'北京市朝阳区芍药居'</span>
                    },
                    {
                        name: <span class="hljs-string">'张小刚'</span>,
                        age: <span class="hljs-number">25</span>,
                        address: <span class="hljs-string">'北京市海淀区西二旗'</span>
                    },
                    {
                        name: <span class="hljs-string">'李小红'</span>,
                        age: <span class="hljs-number">30</span>,
                        address: <span class="hljs-string">'上海市浦东新区世纪大道'</span>
                    },
                    {
                        name: <span class="hljs-string">'周小伟'</span>,
                        age: <span class="hljs-number">26</span>,
                        address: <span class="hljs-string">'深圳市南山区深南大道'</span>
                    }
                ]
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre>
        <div style="border:1px solid #ddd; text-align:center;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;" @click="showPre($event,2,'gdTable')">
            <Icon type="chevron-down" size="10" v-if="showPre2"></Icon>
            <Icon type="chevron-up" size="10" v-else></Icon>
        </div>
        <h3 id="gdlTable">固定列</h3>
        <i-table width="700" border :columns="columns2" :data="data3"></i-table>
        <pre style="margin-bottom: 0" v-if="showPre3" data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Table</span> <span class="hljs-attribute">width</span>=<span class="hljs-value">"550"</span> <span class="hljs-attribute">border</span> <span class="hljs-attribute">:columns</span>=<span class="hljs-value">"columns2"</span> <span class="hljs-attribute">:data</span>=<span class="hljs-value">"data3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="actionscript">
    export <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                columns2: [
                    {
                        title: <span class="hljs-string">'姓名'</span>,
                        key: <span class="hljs-string">'name'</span>,
                        width: <span class="hljs-number">100</span>,
                        fixed: <span class="hljs-string">'left'</span>
                    },
                    {
                        title: <span class="hljs-string">'年龄'</span>,
                        key: <span class="hljs-string">'age'</span>,
                        width: <span class="hljs-number">100</span>
                    },
                    {
                        title: <span class="hljs-string">'省份'</span>,
                        key: <span class="hljs-string">'province'</span>,
                        width: <span class="hljs-number">100</span>
                    },
                    {
                        title: <span class="hljs-string">'市区'</span>,
                        key: <span class="hljs-string">'city'</span>,
                        width: <span class="hljs-number">100</span>
                    },
                    {
                        title: <span class="hljs-string">'地址'</span>,
                        key: <span class="hljs-string">'address'</span>,
                        width: <span class="hljs-number">200</span>
                    },
                    {
                        title: <span class="hljs-string">'邮编'</span>,
                        key: <span class="hljs-string">'zip'</span>,
                        width: <span class="hljs-number">100</span>
                    },
                    {
                        title: <span class="hljs-string">'操作'</span>,
                        key: <span class="hljs-string">'action'</span>,
                        fixed: <span class="hljs-string">'right'</span>,
                        width: <span class="hljs-number">120</span>,
                        render () {
                            <span class="hljs-keyword">return</span> `&lt;i-button type=<span class="hljs-string">"text"</span> size=<span class="hljs-string">"small"</span>&gt;查看&lt;/i-button&gt;&lt;i-button type=<span class="hljs-string">"text"</span> size=<span class="hljs-string">"small"</span>&gt;编辑&lt;/i-button&gt;`;
                        }
                    }
                ],
                data3: [
                    {
                        name: <span class="hljs-string">'王小明'</span>,
                        age: <span class="hljs-number">18</span>,
                        address: <span class="hljs-string">'北京市朝阳区芍药居'</span>,
                        province: <span class="hljs-string">'北京市'</span>,
                        city: <span class="hljs-string">'朝阳区'</span>,
                        zip: <span class="hljs-number">100000</span>
                    },
                    {
                        name: <span class="hljs-string">'张小刚'</span>,
                        age: <span class="hljs-number">25</span>,
                        address: <span class="hljs-string">'北京市海淀区西二旗'</span>,
                        province: <span class="hljs-string">'北京市'</span>,
                        city: <span class="hljs-string">'海淀区'</span>,
                        zip: <span class="hljs-number">100000</span>
                    },
                    {
                        name: <span class="hljs-string">'李小红'</span>,
                        age: <span class="hljs-number">30</span>,
                        address: <span class="hljs-string">'上海市浦东新区世纪大道'</span>,
                        province: <span class="hljs-string">'上海市'</span>,
                        city: <span class="hljs-string">'浦东新区'</span>,
                        zip: <span class="hljs-number">100000</span>
                    },
                    {
                        name: <span class="hljs-string">'周小伟'</span>,
                        age: <span class="hljs-number">26</span>,
                        address: <span class="hljs-string">'深圳市南山区深南大道'</span>,
                        province: <span class="hljs-string">'广东'</span>,
                        city: <span class="hljs-string">'南山区'</span>,
                        zip: <span class="hljs-number">100000</span>
                    }
                ]
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre>
        <div style="border:1px solid #ddd; text-align:center;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;" @click="showPre($event,3,'gdlTable')">
            <Icon type="chevron-down" size="10" v-if="showPre3"></Icon>
            <Icon type="chevron-up" size="10" v-else></Icon>
        </div>

        <h3 id="dxTable">多选表格</h3>
        <i-table border :columns="columns4" :data="data1"></i-table>
        <pre style="margin-bottom: 0" v-if="showPre4" data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Table</span> <span class="hljs-attribute">border</span> <span class="hljs-attribute">:columns</span>=<span class="hljs-value">"columns4"</span> <span class="hljs-attribute">:data</span>=<span class="hljs-value">"data1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                columns4: [
                    {
                        type: <span class="hljs-string">'selection'</span>,
                        width: <span class="hljs-number">60</span>,
                        align: <span class="hljs-string">'center'</span>
                    },
                    {
                        title: <span class="hljs-string">'姓名'</span>,
                        key: <span class="hljs-string">'name'</span>
                    },
                    {
                        title: <span class="hljs-string">'年龄'</span>,
                        key: <span class="hljs-string">'age'</span>
                    },
                    {
                        title: <span class="hljs-string">'地址'</span>,
                        key: <span class="hljs-string">'address'</span>
                    }
                ],
                data1: [
                    {
                        name: <span class="hljs-string">'王小明'</span>,
                        age: <span class="hljs-number">18</span>,
                        address: <span class="hljs-string">'北京市朝阳区芍药居'</span>
                    },
                    {
                        name: <span class="hljs-string">'张小刚'</span>,
                        age: <span class="hljs-number">25</span>,
                        address: <span class="hljs-string">'北京市海淀区西二旗'</span>
                    },
                    {
                        name: <span class="hljs-string">'李小红'</span>,
                        age: <span class="hljs-number">30</span>,
                        address: <span class="hljs-string">'上海市浦东新区世纪大道'</span>
                    },
                    {
                        name: <span class="hljs-string">'周小伟'</span>,
                        age: <span class="hljs-number">26</span>,
                        address: <span class="hljs-string">'深圳市南山区深南大道'</span>
                    }
                ]
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre>
        <div style="border:1px solid #ddd; text-align:center;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;" @click="showPre($event,4, 'dxTable')">
            <Icon type="chevron-down" size="10" v-if="showPre4"></Icon>
            <Icon type="chevron-up" size="10" v-else></Icon>
        </div>
        <h3 id="xqTable">详情表格</h3>
        <i-table border :content="self" :columns="columns7" :data="data6"></i-table>
        <pre style="margin-bottom: 0" v-if="showPre5" data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Table</span> <span class="hljs-attribute">border</span> <span class="hljs-attribute">:context</span>=<span class="hljs-value">"self"</span> <span class="hljs-attribute">:columns</span>=<span class="hljs-value">"columns7"</span> <span class="hljs-attribute">:data</span>=<span class="hljs-value">"data6"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="actionscript">
    export <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                self: <span class="hljs-keyword">this</span>,
                columns7: [
                    {
                        title: <span class="hljs-string">'姓名'</span>,
                        key: <span class="hljs-string">'name'</span>,
                        render (row, column, index) {
                            <span class="hljs-keyword">return</span> `&lt;Icon type=<span class="hljs-string">"person"</span>&gt;&lt;/Icon&gt; &lt;strong&gt;${row.name}&lt;/strong&gt;`;
                        }
                    },
                    {
                        title: <span class="hljs-string">'年龄'</span>,
                        key: <span class="hljs-string">'age'</span>
                    },
                    {
                        title: <span class="hljs-string">'地址'</span>,
                        key: <span class="hljs-string">'address'</span>
                    },
                    {
                        title: <span class="hljs-string">'操作'</span>,
                        key: <span class="hljs-string">'action'</span>,
                        width: <span class="hljs-number">150</span>,
                        align: <span class="hljs-string">'center'</span>,
                        render (row, column, index) {
                            <span class="hljs-keyword">return</span> `&lt;i-button type=<span class="hljs-string">"primary"</span> size=<span class="hljs-string">"small"</span> @click=<span class="hljs-string">"show(${index})"</span>&gt;查看&lt;/i-button&gt; &lt;i-button type=<span class="hljs-string">"error"</span> size=<span class="hljs-string">"small"</span> @click=<span class="hljs-string">"remove(${index})"</span>&gt;删除&lt;/i-button&gt;`;
                        }
                    }
                ],
                data6: [
                    {
                        name: <span class="hljs-string">'王小明'</span>,
                        age: <span class="hljs-number">18</span>,
                        address: <span class="hljs-string">'北京市朝阳区芍药居'</span>
                    },
                    {
                        name: <span class="hljs-string">'张小刚'</span>,
                        age: <span class="hljs-number">25</span>,
                        address: <span class="hljs-string">'北京市海淀区西二旗'</span>
                    },
                    {
                        name: <span class="hljs-string">'李小红'</span>,
                        age: <span class="hljs-number">30</span>,
                        address: <span class="hljs-string">'上海市浦东新区世纪大道'</span>
                    },
                    {
                        name: <span class="hljs-string">'周小伟'</span>,
                        age: <span class="hljs-number">26</span>,
                        address: <span class="hljs-string">'深圳市南山区深南大道'</span>
                    }
                ]
            }
        },
        methods: {
            show (index) {
                <span class="hljs-keyword">this</span>.$Modal.info({
                    title: <span class="hljs-string">'用户信息'</span>,
                    content: `姓名：${<span class="hljs-keyword">this</span>.data6[index].name}&lt;br&gt;年龄：${<span class="hljs-keyword">this</span>.data6[index].age}&lt;br&gt;地址：${<span class="hljs-keyword">this</span>.data6[index].address}`
                })
            },
            remove (index) {
                <span class="hljs-keyword">this</span>.data6.splice(index, <span class="hljs-number">1</span>);
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre>
        <div style="border:1px solid #ddd; text-align:center;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;" @click="showPre($event,5,'xqTable')">
            <Icon type="chevron-down" size="10" v-if="showPre5"></Icon>
            <Icon type="chevron-up" size="10" v-else></Icon>
        </div>

        <h3 id="pxTable">排序表格</h3>
        <i-table border :columns="columns5" :data="data6"></i-table>
        <pre style="margin-bottom: 0" v-if="showPre6" data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Table</span> <span class="hljs-attribute">border</span> <span class="hljs-attribute">:columns</span>=<span class="hljs-value">"columns5"</span> <span class="hljs-attribute">:data</span>=<span class="hljs-value">"data5"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                columns5: [
                    {
                        title: <span class="hljs-string">'日期'</span>,
                        key: <span class="hljs-string">'date'</span>,
                        sortable: <span class="hljs-literal">true</span>
                    },
                    {
                        title: <span class="hljs-string">'姓名'</span>,
                        key: <span class="hljs-string">'name'</span>
                    },
                    {
                        title: <span class="hljs-string">'年龄'</span>,
                        key: <span class="hljs-string">'age'</span>,
                        sortable: <span class="hljs-literal">true</span>
                    },
                    {
                        title: <span class="hljs-string">'地址'</span>,
                        key: <span class="hljs-string">'address'</span>
                    }
                ],
                data5: [
                    {
                        name: <span class="hljs-string">'王小明'</span>,
                        age: <span class="hljs-number">18</span>,
                        address: <span class="hljs-string">'北京市朝阳区芍药居'</span>,
                        date: <span class="hljs-string">'2016-10-03'</span>
                    },
                    {
                        name: <span class="hljs-string">'张小刚'</span>,
                        age: <span class="hljs-number">25</span>,
                        address: <span class="hljs-string">'北京市海淀区西二旗'</span>,
                        date: <span class="hljs-string">'2016-10-01'</span>
                    },
                    {
                        name: <span class="hljs-string">'李小红'</span>,
                        age: <span class="hljs-number">30</span>,
                        address: <span class="hljs-string">'上海市浦东新区世纪大道'</span>,
                        date: <span class="hljs-string">'2016-10-02'</span>
                    },
                    {
                        name: <span class="hljs-string">'周小伟'</span>,
                        age: <span class="hljs-number">26</span>,
                        address: <span class="hljs-string">'深圳市南山区深南大道'</span>,
                        date: <span class="hljs-string">'2016-10-04'</span>
                    }
                ]
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre>
        <div style="border:1px solid #ddd; text-align:center;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;" @click="showPre($event,6,'pxTable')">
            <Icon type="chevron-down" size="10" v-if="showPre6"></Icon>
            <Icon type="chevron-up" size="10" v-else></Icon>
        </div>
        <h3 id="dcTable">导出数据</h3>
        <i-table :columns="columns8" :data="data7" size="small" v-ref:table></i-table>
        <br>
        <i-button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> 导出原始数据</i-button>
        <i-button type="primary" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon> 导出排序和过滤后的数据</i-button>
        <i-button type="primary" size="large" @click="exportData(3)"><Icon type="ios-download-outline"></Icon> 导出自定义数据</i-button>
        <pre style="margin-bottom: 0" v-if="showPre7" data-v-3802a467="" class=""><code data-v-3802a467="" class="html hljs xml"><span class="hljs-tag">&lt;<span class="hljs-title">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Table</span> <span class="hljs-attribute">:columns</span>=<span class="hljs-value">"columns8"</span> <span class="hljs-attribute">:data</span>=<span class="hljs-value">"data7"</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"small"</span> <span class="hljs-attribute">ref</span>=<span class="hljs-value">"table"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Table</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">br</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"large"</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"exportData(1)"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ios-download-outline"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span> 导出原始数据<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"large"</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"exportData(2)"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ios-download-outline"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span> 导出排序和过滤后的数据<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">Button</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"primary"</span> <span class="hljs-attribute">size</span>=<span class="hljs-value">"large"</span> @<span class="hljs-attribute">click</span>=<span class="hljs-value">"exportData(3)"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">Icon</span> <span class="hljs-attribute">type</span>=<span class="hljs-value">"ios-download-outline"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">Icon</span>&gt;</span> 导出自定义数据<span class="hljs-tag">&lt;/<span class="hljs-title">Button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
        data () {
            <span class="hljs-keyword">return</span> {
                columns8: [
                    {
                        <span class="hljs-string">"title"</span>: <span class="hljs-string">"名称"</span>,
                        <span class="hljs-string">"key"</span>: <span class="hljs-string">"name"</span>,
                        <span class="hljs-string">"fixed"</span>: <span class="hljs-string">"left"</span>,
                        <span class="hljs-string">"width"</span>: <span class="hljs-number">200</span>
                    },
                    {
                        <span class="hljs-string">"title"</span>: <span class="hljs-string">"展示"</span>,
                        <span class="hljs-string">"key"</span>: <span class="hljs-string">"show"</span>,
                        <span class="hljs-string">"width"</span>: <span class="hljs-number">150</span>,
                        <span class="hljs-string">"sortable"</span>: <span class="hljs-literal">true</span>,
                        filters: [
                            {
                                label: <span class="hljs-string">'大于4000'</span>,
                                value: <span class="hljs-number">1</span>
                            },
                            {
                                label: <span class="hljs-string">'小于4000'</span>,
                                value: <span class="hljs-number">2</span>
                            }
                        ],
                        filterMultiple: <span class="hljs-literal">false</span>,
                        filterMethod (value, row) {
                            <span class="hljs-keyword">if</span> (value === <span class="hljs-number">1</span>) {
                                <span class="hljs-keyword">return</span> row.show &gt; <span class="hljs-number">4000</span>;
                            } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (value === <span class="hljs-number">2</span>) {
                                <span class="hljs-keyword">return</span> row.show &lt; <span class="hljs-number">4000</span>;
                            }
                        }
                    },
                    {
                        <span class="hljs-string">"title"</span>: <span class="hljs-string">"唤醒"</span>,
                        <span class="hljs-string">"key"</span>: <span class="hljs-string">"weak"</span>,
                        <span class="hljs-string">"width"</span>: <span class="hljs-number">150</span>,
                        <span class="hljs-string">"sortable"</span>: <span class="hljs-literal">true</span>
                    },
                    {
                        <span class="hljs-string">"title"</span>: <span class="hljs-string">"登录"</span>,
                        <span class="hljs-string">"key"</span>: <span class="hljs-string">"signin"</span>,
                        <span class="hljs-string">"width"</span>: <span class="hljs-number">150</span>,
                        <span class="hljs-string">"sortable"</span>: <span class="hljs-literal">true</span>
                    },
                    {
                        <span class="hljs-string">"title"</span>: <span class="hljs-string">"点击"</span>,
                        <span class="hljs-string">"key"</span>: <span class="hljs-string">"click"</span>,
                        <span class="hljs-string">"width"</span>: <span class="hljs-number">150</span>,
                        <span class="hljs-string">"sortable"</span>: <span class="hljs-literal">true</span>
                    },
                    {
                        <span class="hljs-string">"title"</span>: <span class="hljs-string">"激活"</span>,
                        <span class="hljs-string">"key"</span>: <span class="hljs-string">"active"</span>,
                        <span class="hljs-string">"width"</span>: <span class="hljs-number">150</span>,
                        <span class="hljs-string">"sortable"</span>: <span class="hljs-literal">true</span>
                    },
                    {
                        <span class="hljs-string">"title"</span>: <span class="hljs-string">"7日留存"</span>,
                        <span class="hljs-string">"key"</span>: <span class="hljs-string">"day7"</span>,
                        <span class="hljs-string">"width"</span>: <span class="hljs-number">150</span>,
                        <span class="hljs-string">"sortable"</span>: <span class="hljs-literal">true</span>
                    },
                    {
                        <span class="hljs-string">"title"</span>: <span class="hljs-string">"30日留存"</span>,
                        <span class="hljs-string">"key"</span>: <span class="hljs-string">"day30"</span>,
                        <span class="hljs-string">"width"</span>: <span class="hljs-number">150</span>,
                        <span class="hljs-string">"sortable"</span>: <span class="hljs-literal">true</span>
                    },
                    {
                        <span class="hljs-string">"title"</span>: <span class="hljs-string">"次日留存"</span>,
                        <span class="hljs-string">"key"</span>: <span class="hljs-string">"tomorrow"</span>,
                        <span class="hljs-string">"width"</span>: <span class="hljs-number">150</span>,
                        <span class="hljs-string">"sortable"</span>: <span class="hljs-literal">true</span>
                    },
                    {
                        <span class="hljs-string">"title"</span>: <span class="hljs-string">"日活跃"</span>,
                        <span class="hljs-string">"key"</span>: <span class="hljs-string">"day"</span>,
                        <span class="hljs-string">"width"</span>: <span class="hljs-number">150</span>,
                        <span class="hljs-string">"sortable"</span>: <span class="hljs-literal">true</span>
                    },
                    {
                        <span class="hljs-string">"title"</span>: <span class="hljs-string">"周活跃"</span>,
                        <span class="hljs-string">"key"</span>: <span class="hljs-string">"week"</span>,
                        <span class="hljs-string">"width"</span>: <span class="hljs-number">150</span>,
                        <span class="hljs-string">"sortable"</span>: <span class="hljs-literal">true</span>
                    },
                    {
                        <span class="hljs-string">"title"</span>: <span class="hljs-string">"月活跃"</span>,
                        <span class="hljs-string">"key"</span>: <span class="hljs-string">"month"</span>,
                        <span class="hljs-string">"width"</span>: <span class="hljs-number">150</span>,
                        <span class="hljs-string">"sortable"</span>: <span class="hljs-literal">true</span>
                    }
                ],
                data7: [
                    {
                        <span class="hljs-string">"name"</span>: <span class="hljs-string">"推广名称1"</span>,
                        <span class="hljs-string">"fav"</span>: <span class="hljs-number">0</span>,
                        <span class="hljs-string">"show"</span>: <span class="hljs-number">7302</span>,
                        <span class="hljs-string">"weak"</span>: <span class="hljs-number">5627</span>,
                        <span class="hljs-string">"signin"</span>: <span class="hljs-number">1563</span>,
                        <span class="hljs-string">"click"</span>: <span class="hljs-number">4254</span>,
                        <span class="hljs-string">"active"</span>: <span class="hljs-number">1438</span>,
                        <span class="hljs-string">"day7"</span>: <span class="hljs-number">274</span>,
                        <span class="hljs-string">"day30"</span>: <span class="hljs-number">285</span>,
                        <span class="hljs-string">"tomorrow"</span>: <span class="hljs-number">1727</span>,
                        <span class="hljs-string">"day"</span>: <span class="hljs-number">558</span>,
                        <span class="hljs-string">"week"</span>: <span class="hljs-number">4440</span>,
                        <span class="hljs-string">"month"</span>: <span class="hljs-number">5610</span>
                    },
                    {
                        <span class="hljs-string">"name"</span>: <span class="hljs-string">"推广名称2"</span>,
                        <span class="hljs-string">"fav"</span>: <span class="hljs-number">0</span>,
                        <span class="hljs-string">"show"</span>: <span class="hljs-number">4720</span>,
                        <span class="hljs-string">"weak"</span>: <span class="hljs-number">4086</span>,
                        <span class="hljs-string">"signin"</span>: <span class="hljs-number">3792</span>,
                        <span class="hljs-string">"click"</span>: <span class="hljs-number">8690</span>,
                        <span class="hljs-string">"active"</span>: <span class="hljs-number">8470</span>,
                        <span class="hljs-string">"day7"</span>: <span class="hljs-number">8172</span>,
                        <span class="hljs-string">"day30"</span>: <span class="hljs-number">5197</span>,
                        <span class="hljs-string">"tomorrow"</span>: <span class="hljs-number">1684</span>,
                        <span class="hljs-string">"day"</span>: <span class="hljs-number">2593</span>,
                        <span class="hljs-string">"week"</span>: <span class="hljs-number">2507</span>,
                        <span class="hljs-string">"month"</span>: <span class="hljs-number">1537</span>
                    },
                    {
                        <span class="hljs-string">"name"</span>: <span class="hljs-string">"推广名称3"</span>,
                        <span class="hljs-string">"fav"</span>: <span class="hljs-number">0</span>,
                        <span class="hljs-string">"show"</span>: <span class="hljs-number">7181</span>,
                        <span class="hljs-string">"weak"</span>: <span class="hljs-number">8007</span>,
                        <span class="hljs-string">"signin"</span>: <span class="hljs-number">8477</span>,
                        <span class="hljs-string">"click"</span>: <span class="hljs-number">1879</span>,
                        <span class="hljs-string">"active"</span>: <span class="hljs-number">16</span>,
                        <span class="hljs-string">"day7"</span>: <span class="hljs-number">2249</span>,
                        <span class="hljs-string">"day30"</span>: <span class="hljs-number">3450</span>,
                        <span class="hljs-string">"tomorrow"</span>: <span class="hljs-number">377</span>,
                        <span class="hljs-string">"day"</span>: <span class="hljs-number">1561</span>,
                        <span class="hljs-string">"week"</span>: <span class="hljs-number">3219</span>,
                        <span class="hljs-string">"month"</span>: <span class="hljs-number">1588</span>
                    },
                    {
                        <span class="hljs-string">"name"</span>: <span class="hljs-string">"推广名称4"</span>,
                        <span class="hljs-string">"fav"</span>: <span class="hljs-number">0</span>,
                        <span class="hljs-string">"show"</span>: <span class="hljs-number">9911</span>,
                        <span class="hljs-string">"weak"</span>: <span class="hljs-number">8976</span>,
                        <span class="hljs-string">"signin"</span>: <span class="hljs-number">8807</span>,
                        <span class="hljs-string">"click"</span>: <span class="hljs-number">8050</span>,
                        <span class="hljs-string">"active"</span>: <span class="hljs-number">7668</span>,
                        <span class="hljs-string">"day7"</span>: <span class="hljs-number">1547</span>,
                        <span class="hljs-string">"day30"</span>: <span class="hljs-number">2357</span>,
                        <span class="hljs-string">"tomorrow"</span>: <span class="hljs-number">7278</span>,
                        <span class="hljs-string">"day"</span>: <span class="hljs-number">5309</span>,
                        <span class="hljs-string">"week"</span>: <span class="hljs-number">1655</span>,
                        <span class="hljs-string">"month"</span>: <span class="hljs-number">9043</span>
                    },
                    {
                        <span class="hljs-string">"name"</span>: <span class="hljs-string">"推广名称5"</span>,
                        <span class="hljs-string">"fav"</span>: <span class="hljs-number">0</span>,
                        <span class="hljs-string">"show"</span>: <span class="hljs-number">934</span>,
                        <span class="hljs-string">"weak"</span>: <span class="hljs-number">1394</span>,
                        <span class="hljs-string">"signin"</span>: <span class="hljs-number">6463</span>,
                        <span class="hljs-string">"click"</span>: <span class="hljs-number">5278</span>,
                        <span class="hljs-string">"active"</span>: <span class="hljs-number">9256</span>,
                        <span class="hljs-string">"day7"</span>: <span class="hljs-number">209</span>,
                        <span class="hljs-string">"day30"</span>: <span class="hljs-number">3563</span>,
                        <span class="hljs-string">"tomorrow"</span>: <span class="hljs-number">8285</span>,
                        <span class="hljs-string">"day"</span>: <span class="hljs-number">1230</span>,
                        <span class="hljs-string">"week"</span>: <span class="hljs-number">4840</span>,
                        <span class="hljs-string">"month"</span>: <span class="hljs-number">9908</span>
                    },
                    {
                        <span class="hljs-string">"name"</span>: <span class="hljs-string">"推广名称6"</span>,
                        <span class="hljs-string">"fav"</span>: <span class="hljs-number">0</span>,
                        <span class="hljs-string">"show"</span>: <span class="hljs-number">6856</span>,
                        <span class="hljs-string">"weak"</span>: <span class="hljs-number">1608</span>,
                        <span class="hljs-string">"signin"</span>: <span class="hljs-number">457</span>,
                        <span class="hljs-string">"click"</span>: <span class="hljs-number">4949</span>,
                        <span class="hljs-string">"active"</span>: <span class="hljs-number">2909</span>,
                        <span class="hljs-string">"day7"</span>: <span class="hljs-number">4525</span>,
                        <span class="hljs-string">"day30"</span>: <span class="hljs-number">6171</span>,
                        <span class="hljs-string">"tomorrow"</span>: <span class="hljs-number">1920</span>,
                        <span class="hljs-string">"day"</span>: <span class="hljs-number">1966</span>,
                        <span class="hljs-string">"week"</span>: <span class="hljs-number">904</span>,
                        <span class="hljs-string">"month"</span>: <span class="hljs-number">6851</span>
                    },
                    {
                        <span class="hljs-string">"name"</span>: <span class="hljs-string">"推广名称7"</span>,
                        <span class="hljs-string">"fav"</span>: <span class="hljs-number">0</span>,
                        <span class="hljs-string">"show"</span>: <span class="hljs-number">5107</span>,
                        <span class="hljs-string">"weak"</span>: <span class="hljs-number">6407</span>,
                        <span class="hljs-string">"signin"</span>: <span class="hljs-number">4166</span>,
                        <span class="hljs-string">"click"</span>: <span class="hljs-number">7970</span>,
                        <span class="hljs-string">"active"</span>: <span class="hljs-number">1002</span>,
                        <span class="hljs-string">"day7"</span>: <span class="hljs-number">8701</span>,
                        <span class="hljs-string">"day30"</span>: <span class="hljs-number">9040</span>,
                        <span class="hljs-string">"tomorrow"</span>: <span class="hljs-number">7632</span>,
                        <span class="hljs-string">"day"</span>: <span class="hljs-number">4061</span>,
                        <span class="hljs-string">"week"</span>: <span class="hljs-number">4359</span>,
                        <span class="hljs-string">"month"</span>: <span class="hljs-number">3676</span>
                    },
                    {
                        <span class="hljs-string">"name"</span>: <span class="hljs-string">"推广名称8"</span>,
                        <span class="hljs-string">"fav"</span>: <span class="hljs-number">0</span>,
                        <span class="hljs-string">"show"</span>: <span class="hljs-number">862</span>,
                        <span class="hljs-string">"weak"</span>: <span class="hljs-number">6520</span>,
                        <span class="hljs-string">"signin"</span>: <span class="hljs-number">6696</span>,
                        <span class="hljs-string">"click"</span>: <span class="hljs-number">3209</span>,
                        <span class="hljs-string">"active"</span>: <span class="hljs-number">6801</span>,
                        <span class="hljs-string">"day7"</span>: <span class="hljs-number">6364</span>,
                        <span class="hljs-string">"day30"</span>: <span class="hljs-number">6850</span>,
                        <span class="hljs-string">"tomorrow"</span>: <span class="hljs-number">9408</span>,
                        <span class="hljs-string">"day"</span>: <span class="hljs-number">2481</span>,
                        <span class="hljs-string">"week"</span>: <span class="hljs-number">1479</span>,
                        <span class="hljs-string">"month"</span>: <span class="hljs-number">2346</span>
                    },
                    {
                        <span class="hljs-string">"name"</span>: <span class="hljs-string">"推广名称9"</span>,
                        <span class="hljs-string">"fav"</span>: <span class="hljs-number">0</span>,
                        <span class="hljs-string">"show"</span>: <span class="hljs-number">567</span>,
                        <span class="hljs-string">"weak"</span>: <span class="hljs-number">5859</span>,
                        <span class="hljs-string">"signin"</span>: <span class="hljs-number">128</span>,
                        <span class="hljs-string">"click"</span>: <span class="hljs-number">6593</span>,
                        <span class="hljs-string">"active"</span>: <span class="hljs-number">1971</span>,
                        <span class="hljs-string">"day7"</span>: <span class="hljs-number">7596</span>,
                        <span class="hljs-string">"day30"</span>: <span class="hljs-number">3546</span>,
                        <span class="hljs-string">"tomorrow"</span>: <span class="hljs-number">6641</span>,
                        <span class="hljs-string">"day"</span>: <span class="hljs-number">1611</span>,
                        <span class="hljs-string">"week"</span>: <span class="hljs-number">5534</span>,
                        <span class="hljs-string">"month"</span>: <span class="hljs-number">3190</span>
                    },
                    {
                        <span class="hljs-string">"name"</span>: <span class="hljs-string">"推广名称10"</span>,
                        <span class="hljs-string">"fav"</span>: <span class="hljs-number">0</span>,
                        <span class="hljs-string">"show"</span>: <span class="hljs-number">3651</span>,
                        <span class="hljs-string">"weak"</span>: <span class="hljs-number">1819</span>,
                        <span class="hljs-string">"signin"</span>: <span class="hljs-number">4595</span>,
                        <span class="hljs-string">"click"</span>: <span class="hljs-number">7499</span>,
                        <span class="hljs-string">"active"</span>: <span class="hljs-number">7405</span>,
                        <span class="hljs-string">"day7"</span>: <span class="hljs-number">8710</span>,
                        <span class="hljs-string">"day30"</span>: <span class="hljs-number">5518</span>,
                        <span class="hljs-string">"tomorrow"</span>: <span class="hljs-number">428</span>,
                        <span class="hljs-string">"day"</span>: <span class="hljs-number">9768</span>,
                        <span class="hljs-string">"week"</span>: <span class="hljs-number">2864</span>,
                        <span class="hljs-string">"month"</span>: <span class="hljs-number">5811</span>
                    }
                ]
            }
        },
        methods: {
            exportData (type) {
                <span class="hljs-keyword">if</span> (type === <span class="hljs-number">1</span>) {
                    <span class="hljs-keyword">this</span>.$refs.table.exportCsv({
                        filename: <span class="hljs-string">'原始数据'</span>
                    });
                } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (type === <span class="hljs-number">2</span>) {
                    <span class="hljs-keyword">this</span>.$refs.table.exportCsv({
                        filename: <span class="hljs-string">'排序和过滤后的数据'</span>,
                        original: <span class="hljs-literal">false</span>
                    });
                } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (type === <span class="hljs-number">3</span>) {
                    <span class="hljs-keyword">this</span>.$refs.table.exportCsv({
                        filename: <span class="hljs-string">'自定义数据'</span>,
                        columns: <span class="hljs-keyword">this</span>.columns8.filter((col, index) =&gt; index &lt; <span class="hljs-number">4</span>),
                        data: <span class="hljs-keyword">this</span>.data7.filter((data, index) =&gt; index &lt; <span class="hljs-number">4</span>)
                    });
                }
            }
        }
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
</code></pre>
        <div style="border:1px solid #ddd; text-align:center;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;" @click="showPre($event,7,'dcTable')">
            <Icon type="chevron-down" size="10" v-if="showPre7"></Icon>
            <Icon type="chevron-up" size="10" v-else></Icon>
        </div>

    </div>
</template>
<script>
    import $ from 'jquery';
    export default {
        data () {
            return {
                self: this,
                columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                columns2: [
                    {
                        title: '姓名',
                        key: 'name',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        width: 100
                    },
                    {
                        title: '省份',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: '市区',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: '地址',
                        key: 'address',
                        width: 200
                    },
                    {
                        title: '邮编',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render () {
                            return `<i-button type="text" size="small">查看</i-button><i-button type="text" size="small">编辑</i-button>`;
                        }
                    }
                ],
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                columns5: [
                    {
                        title: '日期',
                        key: 'date',
                        sortable: true
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        sortable: true
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                columns7: [
                    {
                        title: '姓名',
                        key: 'name',
                        render (row, column, index) {
                            return `<Icon type="person"></Icon> <strong>${row.name}</strong>`;
                        }
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render (row, column, index) {
                            return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
                        }
                    }
                ],
                data5: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        date: '2016-10-03'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        date: '2016-10-01'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        date: '2016-10-02'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        date: '2016-10-04'
                    }
                ],
                columns8: [
                    {
                        "title": "名称",
                        "key": "name",
                        "fixed": "left",
                        "width": 200
                    },
                    {
                        "title": "展示",
                        "key": "show",
                        "width": 150,
                        "sortable": true,
                        filters: [
                            {
                                label: '大于4000',
                                value: 1
                            },
                            {
                                label: '小于4000',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.show > 4000;
                            } else if (value === 2) {
                                return row.show < 4000;
                            }
                        }
                    },
                    {
                        "title": "唤醒",
                        "key": "weak",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "登录",
                        "key": "signin",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "点击",
                        "key": "click",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "激活",
                        "key": "active",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "7日留存",
                        "key": "day7",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "30日留存",
                        "key": "day30",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "次日留存",
                        "key": "tomorrow",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "日活跃",
                        "key": "day",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "周活跃",
                        "key": "week",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "月活跃",
                        "key": "month",
                        "width": 150,
                        "sortable": true
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ],
                data2: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    },
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ],
                data3: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        province: '北京市',
                        city: '朝阳区',
                        zip: 100000
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        province: '北京市',
                        city: '海淀区',
                        zip: 100000
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        province: '上海市',
                        city: '浦东新区',
                        zip: 100000
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道',
                        province: '广东',
                        city: '南山区',
                        zip: 100000
                    }
                ],
                data6: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ],
                data7: [
                    {
                        "name": "推广名称1",
                        "fav": 0,
                        "show": 7302,
                        "weak": 5627,
                        "signin": 1563,
                        "click": 4254,
                        "active": 1438,
                        "day7": 274,
                        "day30": 285,
                        "tomorrow": 1727,
                        "day": 558,
                        "week": 4440,
                        "month": 5610
                    },
                    {
                        "name": "推广名称2",
                        "fav": 0,
                        "show": 4720,
                        "weak": 4086,
                        "signin": 3792,
                        "click": 8690,
                        "active": 8470,
                        "day7": 8172,
                        "day30": 5197,
                        "tomorrow": 1684,
                        "day": 2593,
                        "week": 2507,
                        "month": 1537
                    },
                    {
                        "name": "推广名称3",
                        "fav": 0,
                        "show": 7181,
                        "weak": 8007,
                        "signin": 8477,
                        "click": 1879,
                        "active": 16,
                        "day7": 2249,
                        "day30": 3450,
                        "tomorrow": 377,
                        "day": 1561,
                        "week": 3219,
                        "month": 1588
                    },
                    {
                        "name": "推广名称4",
                        "fav": 0,
                        "show": 9911,
                        "weak": 8976,
                        "signin": 8807,
                        "click": 8050,
                        "active": 7668,
                        "day7": 1547,
                        "day30": 2357,
                        "tomorrow": 7278,
                        "day": 5309,
                        "week": 1655,
                        "month": 9043
                    },
                    {
                        "name": "推广名称5",
                        "fav": 0,
                        "show": 934,
                        "weak": 1394,
                        "signin": 6463,
                        "click": 5278,
                        "active": 9256,
                        "day7": 209,
                        "day30": 3563,
                        "tomorrow": 8285,
                        "day": 1230,
                        "week": 4840,
                        "month": 9908
                    },
                    {
                        "name": "推广名称6",
                        "fav": 0,
                        "show": 6856,
                        "weak": 1608,
                        "signin": 457,
                        "click": 4949,
                        "active": 2909,
                        "day7": 4525,
                        "day30": 6171,
                        "tomorrow": 1920,
                        "day": 1966,
                        "week": 904,
                        "month": 6851
                    },
                    {
                        "name": "推广名称7",
                        "fav": 0,
                        "show": 5107,
                        "weak": 6407,
                        "signin": 4166,
                        "click": 7970,
                        "active": 1002,
                        "day7": 8701,
                        "day30": 9040,
                        "tomorrow": 7632,
                        "day": 4061,
                        "week": 4359,
                        "month": 3676
                    },
                    {
                        "name": "推广名称8",
                        "fav": 0,
                        "show": 862,
                        "weak": 6520,
                        "signin": 6696,
                        "click": 3209,
                        "active": 6801,
                        "day7": 6364,
                        "day30": 6850,
                        "tomorrow": 9408,
                        "day": 2481,
                        "week": 1479,
                        "month": 2346
                    },
                    {
                        "name": "推广名称9",
                        "fav": 0,
                        "show": 567,
                        "weak": 5859,
                        "signin": 128,
                        "click": 6593,
                        "active": 1971,
                        "day7": 7596,
                        "day30": 3546,
                        "tomorrow": 6641,
                        "day": 1611,
                        "week": 5534,
                        "month": 3190
                    },
                    {
                        "name": "推广名称10",
                        "fav": 0,
                        "show": 3651,
                        "weak": 1819,
                        "signin": 4595,
                        "click": 7499,
                        "active": 7405,
                        "day7": 8710,
                        "day30": 5518,
                        "tomorrow": 428,
                        "day": 9768,
                        "week": 2864,
                        "month": 5811
                    }
                ],
                showPre1: false,
                showPre2: false,
                showPre3: false,
                showPre4: false,
                showPre5: false,
                showPre6: false,
                showPre7: false
            }
        },
        methods: {
            exportData (type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: '原始数据'
                    });
                } else if (type === 2) {
                    this.$refs.table.exportCsv({
                        filename: '排序和过滤后的数据',
                        original: false
                    });
                } else if (type === 3) {
                    this.$refs.table.exportCsv({
                        filename: '自定义数据',
                        columns: this.columns8.filter((col, index) => index < 4),
                        data: this.data7.filter((data, index) => index < 4)
                    });
                }
            },
            show (index) {
                this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },
            showPre(event,index,id){
                    if(this['showPre'+index]){
                        var anchor = this.$el.querySelector('#'+id);
                        $("body").animate({scrollTop:anchor.offsetTop});
                        this.$set('showPre'+index, false);
                    }else{
                        this.$set('showPre'+index, true);
                    }
            }
        }
    }
</script>