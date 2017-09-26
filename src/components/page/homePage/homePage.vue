<template>
    <div class="wrapper">
        <!--header组件-->
        <v-head></v-head>
        <!--banner组件-->
        <v-banner></v-banner>
        <!-- 课程介绍 -->
        <v-courseIntroduction></v-courseIntroduction>
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
    import vCourseIntroduction from './courseIntroduction.vue';
    export default {
        name: 'homePage',
        components: {
            vHead,
            vBanner,
            vCourseIntroduction
        }
    }
</script>

<style>
    .wrapper{
        width: 1150px;
        margin: 0 auto;
    }
</style>
