<template>
  <div>
    <head-title :title="title"></head-title>
    <van-cell-group>
      <van-cell
        icon="manager-o"
        title="个人资料设置"
        is-link
        to="/userset/info"
      />
      <van-cell
        icon="location-o"
        title="收货地址"
        is-link
        to="/userset/address"
      />
      <van-cell icon="friends-o" title="鱼塘设置" is-link to="/" />
      <van-cell icon="user-o" title="账号" is-link to="/" />
      <van-cell
        icon="balance-o"
        title="账户余额"
        is-link
        to="/userset/balance"
      />
    </van-cell-group>
    <van-cell-group>
      <van-cell icon="exchange" title="宝贝自动回复" is-link to="/" />
      <van-cell icon="photo-o" title="图片质量设置" is-link to="/" />
      <van-cell icon="play-circle-o" title="自动播放视频设置" is-link to="/" />
      <van-cell icon="phone-circle-o" title="语音电话设置" is-link to="/" />
      <van-cell icon="warning-o" title="隐私" is-link to="/" />
    </van-cell-group>
    <van-cell-group>
      <van-cell
        icon="certificate"
        title="关于甜虾"
        is-link
        to="/userset/about"
      />
      <van-cell icon="like-o" title="把甜虾推荐给朋友" is-link to="/" />
      <van-cell icon="bullhorn-o" title="甜虾社区公约" is-link />
    </van-cell-group>
    <van-cell-group>
      <van-cell icon="replay" title="清除缓存" is-link to="/" />
    </van-cell-group>
    <div class="logout">
      <van-button type="danger" @click="logout">退出登录</van-button>
    </div>
  </div>
</template>

<script>
import { request } from '@/network/request';
import Cookies from 'js-cookie';
import { Toast } from 'vant';
import HeadTitle from './headtitle';
export default {
  data() {
    return {
      title: '设置',
    };
  },
  components: {
    HeadTitle,
  },
  methods: {
    logout() {
      request({
        url: '/api/user/logout',
        method: 'get',
      }).then(() => {
        Cookies.remove('userData');
        const toast = Toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true,
          message: '正在退出 3',
        });
        let second = 3;
        const timer = setInterval(() => {
          second--;
          if (second) {
            toast.message = `正在退出 ${second}`;
          } else {
            clearInterval(timer);
            // 手动清除 Toast
            Toast.clear();
            this.$router.push('/');
          }
        }, 1000);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.van-cell-group {
  margin-top: 2vw;
}
.logout {
  margin: 3vw;
  .van-button {
    width: 100%;
    font-size: 1rem;
  }
}
</style>
