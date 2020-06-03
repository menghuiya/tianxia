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
      <custom-input
        placeholder="二次密码"
        v-model="p.repassword"
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
        新用户注册，即表示已同意
        <span>《用户服务协议》</span>
        和
        <span>《隐私权政策》</span>
      </p>
      <button class="login-button" @click="login" :disabled="isLogining">
        {{ this.loginTips }}
      </button>
      <p class="about">
        已有账号? <router-link to="/login">点击登录</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import md5 from 'js-md5';
import backNavigation from './backNavigation';
import { request } from '@/network/request';
import { Notify } from 'vant';
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
        repassword: '',
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
        return '注册中';
      }
      return '注册';
    },
  },
  methods: {
    // vuex处理登录状态
    login() {
      const _this = this;
      this.isLogining = true;
      if (
        this.p.userName == '' ||
        this.p.password == '' ||
        this.p.repassword == ''
      ) {
        Notify({ type: 'danger', message: '请检查表单完整性!' });
        _this.isLogining = false;
        return;
      } else if (this.p.password !== this.p.repassword) {
        Notify({ type: 'danger', message: '两次密码不一致' });
        _this.isLogining = false;
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
        url: '/api/user/register',
        method: 'post',
        data: data,
      })
        .then((res) => {
          console.log(res);
          const data = res.data;
          if (data.status === 1) {
            _this.$router.push('login');
          } else {
            Notify({ type: 'danger', message: '注册失败' });
          }
          _this.isLogining = false;
        })
        .catch(() => {
          Notify({ type: 'danger', message: '注册失败' });
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
      width: 100%;
      border: none;
      padding: 2% 0;
      line-height: 100%;
      color: white;
      background: #4cd96f;
      border-radius: 0.21333333333333335rem;
      margin: 5% 0;
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
