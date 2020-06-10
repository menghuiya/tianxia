<template>
  <div class="loadBox" v-if="isAndroid">
    <van-icon name="cross" color="#ffffff" size="24" @click="closeapp" />
    <img src="@/assets/image/app.png" class="load-app-icon" />
    <div class="app-msg">
      <div class="app-msg-top">
        下载甜虾二手交易市场APP
      </div>
      <div class="app-msg-bt">
        及时便捷获取交易以及相关信息
      </div>
    </div>
    <van-button color="#53bcf5" size="small" @click="download"
      >点击下载</van-button
    >
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      isAndroid: false,
    };
  },
  methods: {
    download() {
      window.open(
        'https://static-resource-1256396014.cos.ap-nanjing.myqcloud.com/apk/sweet.apk'
      );
      sessionStorage.setItem('isShowApp', 0);
    },
    closeapp() {
      this.isAndroid = false;
      sessionStorage.setItem('isShowApp', 0);
      Toast('除非您清除数据,否则不会再次显示');
    },
  },
  mounted() {
    let appdata = sessionStorage.getItem('isShowApp');
    if (appdata) {
      this.isAndroid = false;
    } else {
      const u = navigator.userAgent;
      this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    }
  },
};
</script>

<style lang="less" scoped>
.loadBox {
  position: fixed;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 60px;
  padding: 5px 10px;
  color: #fff !important;
  z-index: 99999;
  display: flex;
  align-items: center;
  .van-icon {
    vertical-align: middle;
  }
  .load-app-icon {
    width: 38px;
    height: 38px;
    margin: 0 10px;
    border-radius: 50%;
  }
  .app-msg {
    flex: 1;
    .app-msg-top {
      height: 20px;
      line-height: 20px;
      font-size: 16px;
      font-weight: 100;
      overflow: hidden;
    }
    .app-msg-bt {
      font-size: 12px;
      height: 20px;
      line-height: 20px;
      color: #c8c9cc;
    }
  }
}
</style>
