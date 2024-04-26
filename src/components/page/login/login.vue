<template>
  <div>
    <div class="login">
      <h3>系统标题333</h3>
      <div class="rl-modal-header">
        <el-button
          type="text"
          v-for="(val, index) in tabArr"
          :key="index"
          v-bind:class="{ active: indexs == index }"
          v-on:click="tab(index)"
        >
          {{ val }}
        </el-button>
      </div>
      <div class="main1">
        <!--登录-->
        <template v-if="isShow === 0">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="username">
              <el-input
                v-model="ruleForm.username"
                placeholder="请输入正确的邮箱或手机号"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="ruleForm.password"
                type="password"
                placeholder="请输入6-16位密码，区分大小写，不能使用空格"
              ></el-input>
            </el-form-item>
            <el-form-item style="margin-top: -10px; text-align: right">
              <el-button
                type="text"
                @click="$router.push('/forgetPasswordForm')"
                style="color: #787d82"
                >忘记密码</el-button
              >
            </el-form-item>
            <el-form-item>
              <el-button
                class="loginBtn"
                type="primary"
                @click="submitForm('ruleForm')"
                >登 录</el-button
              >
            </el-form-item>
          </el-form>
        </template>
        <!--注册-->
        <template v-if="isShow === 1">
          <el-form :model="registerForm" :rules="rules" ref="registerForm">
            <el-form-item prop="username">
              <el-input
                v-model="registerForm.username"
                placeholder="请输入邮箱/手机号"
              ></el-input>
            </el-form-item>
            <el-form-item prop="verificationvCode">
              <el-input
                v-model="registerForm.verificationvCode"
                style="width: 130px"
                placeholder="请输入验证码"
              ></el-input>
              <span>
                <img
                  class="uitlImg"
                  src="http://www.imooc.com/passport/user/verifycode?t=1504187751261"
                  alt=""
              /></span>
              <span class="rotate">
                <span class="iconfont">&#xe6ae;</span>
              </span>
            </el-form-item>
            <el-form-item>
              <el-button
                class="register loginBtn"
                type="primary"
                @click="submitForm('registerForm')"
                >注 册</el-button
              >
            </el-form-item>
          </el-form>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data: function () {
    return {
      //tab切换数据
      tabArr: { a: "登录", b: "注册" },
      //控制登录注册当前高亮
      indexs: 0,
      //控制显示登录还是注册的表单
      isShow: 0,
      //登录表单
      ruleForm: {
        username: "",
        password: "",
      },
      //注册表单
      registerForm: {
        username: "",
        verificationvCode: "",
      },
      //登录表单验证
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        verificationvCode: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    //登录注册切换
    tab(str) {
      if (str == 1) {
        this.resetForm("ruleForm");
      } else {
        this.resetForm("registerForm");
      }
      this.indexs = str;
      this.isShow = str;
    },
    //验证
    submitForm(formName) {
      const self = this;
      self.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.indexs == 0) {
            self.$router.push("/homePage");
          } else {
            alert("注册");
          }
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less">
.login {
  position: absolute;
  padding: 0 20px 20px 20px;
  width: 360px;
  left: 50%;
  top: 50%;
  margin-left: -180px;
  margin-top: -200px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 3px;
  box-sizing: border-box;
  background: rgb(255, 255, 255);
  border-radius: 2px;
  h3 {
    text-align: center;
    color: #787d82;
    line-height: 50px;
  }
  .rl-modal-header {
    height: 50px;
    line-height: 50px;
    width: 100%;
    .el-button--text {
      color: #787d82;
      width: 60px;
      border-radius: 0;
      font-size: 16px;
    }
    .active {
      color: red;
      border-bottom: 1px red solid;
    }
  }
  .main1 {
    padding-top: 30px;
    border-top: 1px #ccc solid;
    margin-top: -7px;
  }
  .el-input__inner {
    height: 40px;
    background-color: #fff;
    border-color: #d0d6d9;
    border-radius: 0;
  }
  .loginBtn {
    height: 50px;
    width: 100%;
    background: red;
    color: #fff;
    border: 0;
    border-radius: 0;
    font-size: 16px;
  }
  .register {
    margin-top: 10px;
  }
  .uitlImg {
    width: 70px;
    height: 40px;
    vertical-align: top;
    margin-left: 5px;
  }

  .iconfont {
    display: inline-block;
    font-family: "iconfont";
    color: #707070;
    font-size: 18px;
    vertical-align: sub;
    margin-left: 5px;
    cursor: pointer;
    -webkit-transition: -webkit-transform 0.4s ease-out;
    -moz-transition: -moz-transform 0.4s ease-out;
    -o-transition: -o-transform 0.4s ease-out;
    -ms-transition: -ms-transform 0.4s ease-out;
  }
  .iconfont:hover {
    -webkit-transform: rotateZ(360deg);
    color: #333;
    -moz-transform: rotateZ(360deg);
    -o-transform: rotateZ(360deg);
    -ms-transform: rotateZ(360deg);
    transform: rotateZ(360deg);
  }
}
</style>
