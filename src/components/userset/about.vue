<template>
  <div>
    <head-title :title="title"></head-title>
    <div class="user-poster">
      <img src="@/assets/image/logo.png" alt="" />
      <div class="author">梦回项目作品</div>
      <div class="verson">甜虾手机版1.0.0</div>
    </div>

    <van-cell-group class="user-group">
      <van-cell title="检查更新" is-link />
      <van-cell title="软件许可协议" is-link />
      <van-cell title="证照信息" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell
        :icon="qqicon"
        url="https://jq.qq.com/?_wv=1027&k=bRhypsYa"
        title="QQ群"
        is-link
        target="_blank"
      />
      <van-cell
        icon="envelop-o"
        url="mailto:1274323054@qq.com"
        title="给我发邮件"
        is-link
      />
      <van-cell icon="chat-o" url="sms:1008611" title="短信联系我们" is-link />
      <van-cell icon="phone-o" url="tel:1008611" title="电话联系我们" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import HeadTitle from './headtitle';
export default {
  data() {
    return {
      title: '关于甜虾',
      qqicon: require('@/assets/image/user/qq.png'),
    };
  },
  components: {
    HeadTitle,
  },
};
</script>

<style lang="less" scoped>
.user-poster {
  width: 100%;
  height: 45vw;
  display: block;
  text-align: center;
  padding: 5vw 0;
  img {
    width: 20vw;
  }
  .author {
    font-size: 0.75rem;
  }
  .verson {
    font-size: 0.83rem;
    color: #a5a4a4;
    margin-top: 3vw;
  }
}
.van-cell-group {
  margin-bottom: 3vw;
}
</style>
