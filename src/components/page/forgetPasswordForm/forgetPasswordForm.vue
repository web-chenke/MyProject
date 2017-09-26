<template>
    <div>
            <div class="forgetPassword">
                <div class="rl-modal-header">
                    <h3>忘记密码</h3>
                    <div style="width:100%;overflow: hidden">
                        <span class="span">通过注册邮箱或手机号重设密码</span>
                        <el-button type="text" @click="$router.push('/');">返回立即登录</el-button>   
                    </div>
                </div>
                <div class="main1">
                    <!-- 忘记密码 -->
                    <template>
                        <el-form :model="forgetPasswordForm" :rules="rules" ref="forgetPasswordForm">
                            <el-form-item prop="username">
                                <el-input v-model="forgetPasswordForm.username" placeholder="请输入邮箱/手机号"></el-input>
                            </el-form-item>
                            <el-form-item prop="verificationvCode">
                                <el-input  v-model="forgetPasswordForm.verificationvCode" style="width:130px;" placeholder="请输入验证码"></el-input>
                                <span>
                                    <img class="uitlImg" src="http://www.imooc.com/passport/user/verifycode?t=1504187751261" alt=""></span>
                                    <span class="rotate">
                                        <span class="iconfont">&#xe6ae;</span>
                                    </span>
                            </el-form-item>
                            <el-form-item> 
                               <el-button class="register loginBtn" type="primary" @click="submitForm('forgetPasswordForm')">提 交</el-button>
                            </el-form-item>
                        </el-form>
                    </template>

                </div>
            </div>
    </div>
</template>
<script>
    export default {
        name:'forgetPassword',
        data: function(){
            return {
                //忘记密码
                forgetPasswordForm:{
                    username: '',
                    verificationvCode: ''
                },
                //登录表单验证
                rules: {
                    username: [
                        { required: true, message: '手机号/邮箱不能为空！', trigger: 'blur' }
                    ],
                    verificationvCode: [
                        { required: true, message: '请输入验证码', trigger: 'blur' }
                    ],
                },
            }
        },
        methods: {
            //验证
            submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        if( this.indexs == 0){
                            alert(11)
                        }else if(this.indexs == 1){
                            alert(22)
                        }else{
                            alert(33)
                        }
//                        self.$router.push('/readme');
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style lang="less">

    .forgetPassword{
       position: absolute;
       padding:0 20px 20px 20px;
        width: 360px;
        left: 50%;
        top:50%;
        margin-left: -180px;
        margin-top: -200px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px;
        box-sizing: border-box;
        background: rgb(255, 255, 255);
        border-radius: 2px;
        h3{
            text-align: center;
            color:#787d82;
            line-height: 50px;
        }
        .rl-modal-header{
            height: 90px;
            width:100%;
            .span{
                font-size: 12px;
                color:#b5b9bc;
                display: inline-block;
            }
            .el-button--text{
                color:#f01400;
                padding:0;
                color:red;
                width:60px;
                border-radius:0;
                margin-left: 74px;
                font-size: 12px;
            }

        }
        .main1{
            padding-top: 30px;
            border-top:1px #ccc solid;
            margin-top: -7px;
        }
        .el-input__inner{
                height: 40px;
                background-color: #fff;
                border-color: #d0d6d9;
                border-radius:0;
        }
        .loginBtn{
            height: 50px;
            width: 100%;
            background:red;
            color:#fff;
            border:0;
            border-radius:0;
            font-size: 16px;
        }
        .register{
            margin-top: 10px;
        }
        .uitlImg{
            width: 70px;
            height: 40px;
            vertical-align: top;
            margin-left:5px;
        }
       
        @font-face {
          font-family: 'iconfont';  /* project id 402632 */
          src: url('//at.alicdn.com/t/font_402632_4chvt8vv4r71fw29.eot');
          src: url('//at.alicdn.com/t/font_402632_4chvt8vv4r71fw29.eot?#iefix') format('embedded-opentype'),
          url('//at.alicdn.com/t/font_402632_4chvt8vv4r71fw29.woff') format('woff'),
          url('//at.alicdn.com/t/font_402632_4chvt8vv4r71fw29.ttf') format('truetype'),
          url('//at.alicdn.com/t/font_402632_4chvt8vv4r71fw29.svg#iconfont') format('svg');
        }
        .iconfont{
            display: inline-block;
          font-family:"iconfont";
          color:#707070;
          font-size: 18px;
          vertical-align: sub;
          margin-left:5px;
          cursor: pointer;
          -webkit-transition: -webkit-transform 0.4s ease-out;
            -moz-transition: -moz-transform 0.4s ease-out;
            -o-transition: -o-transform 0.4s ease-out;
            -ms-transition: -ms-transform 0.4s ease-out;
        }
        .rotate{

        }
        .iconfont:hover{-webkit-transform: rotateZ(360deg);
            color:#333;
            -moz-transform: rotateZ(360deg);
            -o-transform: rotateZ(360deg);
            -ms-transform: rotateZ(360deg);
            transform: rotateZ(360deg);
        }
    }
</style>