<template>
  <div>
    <head-title :title="title"></head-title>
    <div class="b_box">
      <van-icon name="gold-coin" color="#F6C543" size="3rem" />
      <div class="b_may_title">我的余额</div>
      <div class="b_my_box">
        <div class="b_my_icon">
          ¥
        </div>
        <div class="b_my_num">
          {{ balance }}
        </div>
      </div>
      <div class="b_btn_box">
        <van-button type="primary" @click="showPopup">充值</van-button>
        <van-button type="default" @click="withdraw">提现</van-button>
        <van-popup v-model="show">
          <van-field
            v-model="p.amount"
            type="digit"
            label="充值金额"
            placeholder="只能为整数"
            clearable
            required
            colon
          />
          <van-field
            v-model="verifycode"
            clearable
            required
            label="验证码"
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
          <van-button round block type="info" @click="recharge">
            提交
          </van-button>
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import { request } from '@/network/request';
import { Toast } from 'vant';
import HeadTitle from '../headtitle';
export default {
  data() {
    return {
      title: '我的余额',
      balance: 0,
      show: false,
      error_message: '',
      p: {
        amount: 1,
        userId: '',
      },
      verifyimg: '',
      verifycodes: '',
      verifycode: '',
    };
  },
  components: {
    HeadTitle,
  },
  methods: {
    showPopup() {
      this.show = true;
      this.recondimg();
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
    recharge() {
      if (this.verifycode == '') {
        this.error_message = '请输入验证码';
        return;
      }
      if (this.verifycode.toUpperCase() !== this.verifycodes.toUpperCase()) {
        this.error_message = '验证码错误';
        return;
      }
      Toast.loading({
        message: '充值中...',
        forbidClick: true,
        loadingType: 'spinner',
        duration: 0, // 持续展示 toast
      });
      request({
        url: '/api/user/balance/',
        method: 'post',
        data: this.p,
      }).then((res) => {
        Toast.clear();
        Toast.success('充值成功');
        this.f5(this.p.userId);
        this.show = false;
      });
    },
    withdraw() {
      Toast('暂未开发此功能');
    },
    f5(id) {
      request({
        url: '/api/user/balance/' + id,
        method: 'get',
      }).then((res) => {
        this.balance = res.data.data.balance.toFixed(2);
      });
    },
  },
  mounted() {
    let id = JSON.parse(Cookies.get('userData')).id;
    this.p.userId = id;
    this.f5(id);
  },
};
</script>

<style lang="less" scoped>
.b_box {
  text-align: center;
  padding: 5vw;
  .van-icon {
    margin-top: 10vw;
  }
  .b_may_title {
    margin-top: 6vw;
    font-size: 0.85rem;
  }
  .b_my_box {
    margin-top: 5vw;
    div {
      display: inline-block;
      font-weight: 600;
    }
    .b_my_icon {
      font-size: 1.3rem;
    }
    .b_my_num {
      font-size: 2rem;
      margin-left: 2vw;
    }
  }
  .b_btn_box {
    margin-top: 10vh;
    .van-button {
      display: block;
      margin: 5vw auto;
      width: 50vw;
      height: 10vw;
      border-radius: 1vw;
    }
    .van-popup {
      text-align: left;
      width: 80vw;
      padding: 3vw 0;
      border-radius: 1vw;
      .recharge {
        height: 30vw;
      }
      .verifyimg {
        width: 20vw;
        height: 8vw;
        background: lemonchiffon;
      }
    }
  }
}
</style>
