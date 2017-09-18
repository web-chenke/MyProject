<template>
    <div class="header">
        <div>
            <el-row>
                <el-col :span="4">
                    <div class="logo">
                            <img src="http://www.imooc.com/static/img/index/logo_new.png" alt="">
                    </div>
                </el-col>
                <el-col :span="13">
                    <div class="group">
                        <el-button type="text">课程</el-button>
                        <el-button type="text">实战</el-button>
                        <el-input type="text" icon="search" placeholder="课程名称"></el-input>
                    </div>

                </el-col>
                <el-col :span="7">
                    <div class="myMsg">
                        <span>
                            <img src="../../assets/img/img.jpg" alt="">
                        </span>
                        <span>狗仔队</span>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'header',
    }
</script>

<style lang="less">
    .header{
        width:100%;
        position: absolute;
        top:0;
        left:0;
        height: 72px;
        box-shadow: 0 4px 8px 0 rgba(7,17,27,.1);
        .logo{
            padding-left: 25px;
            display: block;
            width: 126px;
            height: 72px;
            background: 0 0!important;
            text-indent: 0!important;
            img{
                width: 126px;
            }
        }
        .group{
            .el-button--text{
                padding: 0 20px;
                color: #4D555D;
                font-size: 16px;
                line-height: 72px;
                -webkit-transition: background-color .3s;
                -moz-transition: background-color .3s;
                transition: background-color .3s;
                :hover{
                    color:#000;
                }
            }
            .el-input{
                display: inline-block;
                width:200px;
                margin-left: 50px;
            }
            .el-input__inner:focus{
                border-color:#bfcbd9;
            }
        }
        .myMsg{
            cursor:pointer;
            float: right;
            padding-right:15px;
            span{
                float: left;
                line-height: 72px;
                margin-right: 10px;
            }
            img{
                display: inline-block;
                width: 40px;
                border-radius: 50%;
                float: left;
                margin-top: 16px;
            }
        }

    }
</style>
