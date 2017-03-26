<template>
    <div id="map_done" style="background-color:#eee;">
        <p class="map">地图</p>
        <Menu mode="horizontal" :theme="theme1" active-name="1">
            <Menu-item name="1">
                <Icon type="ios-paper"></Icon>
                Simple Map
            </Menu-item>
            <Menu-item name="2">
                <Icon type="ios-people"></Icon>
                Sattelite Map
            </Menu-item>
            <Menu-item name="3">
                <Icon type="ios-people"></Icon>
                Terrain Map
            </Menu-item>
            <Menu-item name="4">
                <Icon type="settings"></Icon>
                Simple Marker
            </Menu-item>
            <Menu-item name="5">
                <Icon type="ios-people"></Icon>
                Customer Marker
            </Menu-item>
            <Menu-item name="6">
                <Icon type="ios-people"></Icon>
                Info window
            </Menu-item>
        </Menu>
    </div>
</template>
<script>
    export default {

    }
</script>
<style>
    .map{
        font-family: Help;
        font-size: 30px;
        color:#c3cbd6;
        width:100%;
        height: 150px;
        background-color:#3399ff;
        padding-left:10px;
        padding-top:30px;
    }
</style>