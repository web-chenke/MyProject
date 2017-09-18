<template>
    <div class="banner">
        <div class="main">
            <div class="banner_box" @mouseleave="leave">
                <!--左侧导航-->
                <div class="sidebar">
                    <el-menu class="el-menu-vertical-demo" theme="dark">
                        <el-menu-item
                                :class="{active: isActive == index}"
                                v-for="( item, index) in navText" index=""
                                @mouseenter.native="enter(index)">{{item.text}}
                        </el-menu-item>
                    </el-menu>
                </div>
                <!--右侧轮播图-->
                <div class="carousel" >
                    <!--导航tab切换-->
                    <div class="currentMask" @mouseleave="leave"  v-if="current === 0">
                        <div>
                            <div style="margin-bottom: 20px;">
                                <h3>基础</h3>
                                <el-button type="text">HTML+CSS</el-button>
                                <el-button type="text">CSS</el-button>
                                <el-button type="text">HTML+CSS</el-button>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <h3>进阶</h3>
                                <el-button type="text">JS</el-button>
                                <el-button type="text">PHP</el-button>
                                <el-button type="text">HTML+CSS</el-button>
                            </div>
                        </div>
                        <div>
                            57689879
                        </div>
                    </div>
                    <div class="currentMask" @mouseleave="leave" v-if="current === 1">
                        <div style="margin-bottom: 20px;">
                            <h3>基础</h3>
                            <el-button type="text">HTML+CSS</el-button>
                            <el-button type="text">HTML</el-button>
                            <el-button type="text">HTML+CSS</el-button>
                        </div>
                        <div style="margin-bottom: 20px;">
                            <h3>进阶</h3>
                            <el-button type="text">HTML+CSS</el-button>
                            <el-button type="text">UI</el-button>
                            <el-button type="text">HTML+CSS</el-button>
                        </div>
                    </div>
                    <div class="currentMask"  @mouseleave="leave" v-if="current === 2">
                        <div style="margin-bottom: 20px;">
                            <h3>初级</h3>
                            <el-button type="text">HTML+CSS</el-button>
                            <el-button type="text">HTML+CSS</el-button>
                            <el-button type="text">HTML+CSS</el-button>
                        </div>
                        <div style="margin-bottom: 20px;">
                            <h3>高级</h3>
                            <el-button type="text">HTML+CSS</el-button>
                            <el-button type="text">HTML+CSS</el-button>
                            <el-button type="text">HTML+CSS</el-button>
                        </div>
                    </div>
                    <!--轮播图片-->
                    <div>
                        <template>
                            <el-carousel :interval="5000" arrow="always" height="316">
                                <el-carousel-item  >
                                    <img src="../../../assets/img/banner1.jpg" alt="">
                                </el-carousel-item>
                                <el-carousel-item  >
                                    <img src="../../../assets/img/banner2.jpg" alt="">
                                </el-carousel-item>
                                <el-carousel-item  >
                                    <img src="../../../assets/img/banner3.jpg" alt="">
                                </el-carousel-item>
                            </el-carousel>
                        </template>
                    </div>
                    <!--轮播底部-->
                    <div class="bannerBottom">
                        <el-row>
                            <el-col :span="4">
                                <div class="bannerBox">
                                    <img src="../../../assets/img.jpg" alt="">
                                    <h3>有花堪折直须折</h3>
                                    <span>莫待无花空折枝</span>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="bannerBox">
                                    <img src="../../../assets/img.jpg" alt="">
                                    <h3>有花堪折直须折</h3>
                                    <span>莫待无花空折枝</span>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="bannerBox">
                                    <img src="../../../assets/img.jpg" alt="">
                                    <h3>有花堪折直须折</h3>
                                    <span>莫待无花空折枝</span>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="bannerBox">
                                    <img src="../../../assets/img.jpg" alt="">
                                    <h3>有花堪折直须折</h3>
                                    <span>莫待无花空折枝</span>
                                </div>
                            </el-col>
                            <el-col :span="3">
                                <div class="bannerBox">
                                    <img src="../../../assets/img.jpg" alt="">
                                    <h3>有花堪折直须折</h3>
                                    <span>莫待无花空折枝</span>
                                </div>
                            </el-col>
                        </el-row>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        name: 'banner',
        data(){
            return{
                navText: [
                    {text: '导航1'},
                    {text: '导航2'},
                    {text: '导航3'},
                ],
                current: -1,
                isActive: -1
            }
        },
        methods:{
            enter: function(index){
               this.current = index;
               this.isActive = index;
            },
            leave: function(){
//                this.current = -1;
//                this.isActive = -1;
            }
        }

    }

</script>

<style lang="less">
    .banner{
        .banner_box{
            box-shadow: 0 12px 24px 0 rgba(7,17,27,.2);
            border-radius: 6px;
            width:100%;
            overflow: hidden;
            .sidebar{
                position: relative;
                float: left;
                width: 216px;
                height: 432px;
                z-index: 2;
                padding-top: 12px;
                background: #324157;
                border-bottom-left-radius: 4px;
                font-weight: 200;
                li.active{
                    background: #495869;
                }
            }
            .el-carousel__item h3 {
                color: #475669;
                font-size: 18px;
                opacity: 0.75;
                line-height: 300px;
                margin: 0;
            }

            .el-carousel__item:nth-child(2n) {
                background-color: #99a9bf;
            }

            .el-carousel__item:nth-child(2n+1) {
                background-color: #d3dce6;
            }
            .bannerBottom{
                text-align: center;
                img{
                    display: inline-block;
                    width: 36px;
                    height: 36px;
                    border-radius: 18px;
                    text-align: center;
                }
                h3{
                    font-size: 14px;
                    color: #07111B;
                    letter-spacing: 1px;
                    margin-top: 4px;
                }
                span{
                    font-size: 12px;
                    color: #93999F;
                    line-height: 16px;
                    margin-top: 2px;
                    font-weight: 200;
                }
                .bannerBox{
                    margin-top: 30px;
                    cursor:pointer;
                }
            }
            .el-menu-item{
                margin-left: 12px;
            }
            .carousel{
                position: relative;
                .currentMask{
                    .el-button--text{
                        color:#555656;
                        margin-top: 10px;
                    }
                    h3{
                        border-bottom:1px #dad5d5 solid;font-size: 14px;
                        margin-bottom: 5px;
                        line-height:30px;
                    }
                    span{
                        margin-right: 15px;
                    }
                    padding:30px 0 0 30px;
                    position: absolute;
                    left: 216px;
                    width: 800px;
                    height: 444px;
                    z-index:100;
                    background: #f8fafc;
                }
            }

        }
        .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active{
            color:#e6e6e6;
        }
    }
</style>
