<template>
    <div id=theme>
        <div id="color1">
            <ul class="">
              <li v-for="item in items">
                {{ item.message }}
              </li>
            </ul>
        </div>
        <div id="color2">
            <ul >
                <li v-for="item in items">
                    {{ item.message }}
                </li>
            </ul>
        </div>
        <div id="color3">
            <ul >
                <li v-for="item in items">
                    {{ item.message }}
                </li>
            </ul>
        </div>
        <div id="color4">
            <ul >
                <li v-for="item in items">
                    {{ item.message }}
                </li>
            </ul>
        </div>
    </div>

</template>
<script>
    export default{
        name:"app",
        props:['data'],
        data() {
            return {
                items:[
                    {message:Foo},
                    {message:Soo}
                ]
            }
        },
        methods: {
            handleClick() {}
        },
        components: {

        }
    }
</script>
<style>
    #theme{
        width: 100%;
        text-align: center;
    }
    #theme ul li {
        height: 40px;
        width: 100px;
    }
    #color1{
        border:1px solid #ccc;
        height: 200px;
        width: 100%;
    }
    #color2{
        border:1px solid #ccc;
        height: 200px;
        width: 100%;
        margin-top:35px;
    }
    #color3{
        border:1px solid #ccc;
        height: 200px;
        width: 100%;
        margin-top:35px;
    }
    #color4{
        border:1px solid #ccc;
        height: 200px;
        width: 100%;
        margin-top:35px;
    }


</style>