<template>
    <div class="wrapper">
        <!--header-->
        <v-head></v-head>
        <!--banner-->
        <v-banner></v-banner>
        <!--组件入口-->
        <div class="content">
            <transition name="el-fade-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import vHead from '../../common/header.vue';
    import vBanner from '../banner/index.vue';
    export default {
        name: 'homePage',
        components: {
            vHead,
            vBanner
        }
    }
</script>

