<template>
  <div class="fa">
    <div class="nav"><back-navigation :goHome="goHome"></back-navigation></div>
    <div class="login">
      <!-- 网站标志,注意更换为你的标志 -->
      <div class="img"><img src="@/assets/image/logo.png" alt="" /></div>
      <custom-input
        placeholder="账号"
        v-model="p.userName"
        :isFocusAnima="true"
        :isLogin="true"
      ></custom-input>
      <custom-input
        placeholder="密码"
        v-model="p.password"
        type="password"
        :isFocusAnima="true"
        :isLogin="true"
      ></custom-input>
      <div class="codeimg">
        <van-field
          v-model="verifycode"
          clearable
          placeholder="验证码"
          colon
          :error-message="error_message"
          @click-right-icon="recondimg"
          @focus="clsmessage"
        >
          <template #right-icon>
            <img class="verifyimg" :src="verifyimg" alt="" />
          </template>
        </van-field>
      </div>
      <p class="tips">
        用户登录表示已同意
        <span>《用户服务协议》</span>
        和
        <span>《隐私权政策》</span>
      </p>
      <button class="login-button" @click="login" :disabled="isLogining">
        {{ this.loginTips }}
      </button>
      <p class="about">
        没有账号?
        <router-link to="/register">点击注册</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import md5 from 'js-md5';
import { request } from '@/network/request';
import Cookies from 'js-cookie';
import { Notify } from 'vant';
import backNavigation from './backNavigation';
import customInput from './customInput';
export default {
  components: {
    customInput,
    backNavigation,
  },
  data() {
    return {
      p: {
        userName: '',
        password: '',
      },
      goHome: false,
      isLogining: false,
      error_message: '',
      verifyimg: '',
      verifycodes: '',
      verifycode: '',
    };
  },
  computed: {
    loginTips() {
      if (this.isLogining) {
        return '登录中';
      }
      return '登录';
    },
  },
  methods: {
    // vuex处理登录状态
    login() {
      const _this = this;
      this.isLogining = true;
      if (this.p.userName == '' || this.p.password == '') {
        Notify({ type: 'danger', message: '请输入账号或密码' });
        this.isLogining = false;
        return;
      }
      if (this.verifycode == '') {
        this.error_message = '请输入验证码';
        this.isLogining = false;
        return;
      }
      if (this.verifycode.toUpperCase() !== this.verifycodes.toUpperCase()) {
        this.error_message = '验证码错误';
        this.isLogining = false;
        return;
      }
      let data = {
        userName: this.p.userName,
        password: md5(this.p.password),
      };
      request({
        url: '/api/user/login',
        method: 'post',
        data: data,
      })
        .then((res) => {
          let data = res.data;
          if (data.status === 1) {
            let userdata = {
              id: res.data.data._id,
              userName: res.data.data.userName,
            };

            Cookies.set('userData', JSON.stringify(userdata), { expires: 1 });
            _this.$router.back();
          } else {
            Notify({ type: 'danger', message: '账户或者密码错误' });
          }
          _this.isLogining = false;
        })
        .catch(() => {
          Notify({ type: 'danger', message: '账户或者密码错误' });
          _this.isLogining = false;
        });
    },
    clsmessage() {
      this.error_message = '';
    },
    recondimg() {
      request({
        url: '/api/user/captcha',
        method: 'get',
      }).then((res) => {
        this.verifyimg = res.data.data.imgPath;
        this.verifycodes = res.data.data.text;
      });
    },
  },
  created() {
    if (this.$route.query.from === 'location') {
      this.goHome = true;
    }
    this.recondimg();
  },
};
</script>

<style lang="less" scoped>
.fa {
  background-color: white;
  height: 100vh;
  .nav {
    padding: 0 2vw;
  }
  .login {
    padding: 2 * 2vw 4 * 2vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    // height: 55vh;
    > * {
      flex: 1;
    }
    .img {
      width: 45%;
      margin-bottom: 5%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .codeimg {
      border: 0.05333333333333334rem solid #ddd;
      width: 100%;
      border-radius: 0.16rem;
      .verifyimg {
        width: 20vw;
        height: 10vw;
        background: lemonchiffon;
      }
    }
    .tips {
      color: #797979;
      font-size: 0.6933333333333334rem;
      margin-bottom: 5%;
      span {
        color: #0089dc;
      }
    }
    .login-button {
      display: inline-block;
      width: 100%;
      border: none;
      padding: 1vh 0;
      // line-height: 1h;
      color: white;
      background: #4cd96f;
      border-radius: 0.21333333333333335rem;
      margin: 5vw 0;
      font-size: 0.8533333333333334rem;
      &:disabled {
        background: rgb(165, 165, 165);
      }
    }
    .about {
      color: #797979;
      font-size: 0.6933333333333334rem;
      a {
        text-decoration: none;
        color: #0089dc;
      }
    }
  }
}
</style>
