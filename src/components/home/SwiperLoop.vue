<template>
  <van-swipe class="my-swipe van-hairline--top" :autoplay="3000">
    <van-swipe-item
      v-for="(image, index) in loopdata"
      :key="index"
      @click="swripClick(image)"
    >
      <img :src="image.imgPath" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { request } from '@/network/request';
import { Toast } from 'vant';
export default {
  data() {
    return {
      loopdata: [],
    };
  },
  mounted() {
    request({
      url: '/api/carousel',
      method: 'get',
    })
      .then((res) => {
        this.loopdata = res.data.data; // 数据
      })
      .catch((err) => {
        Toast.fail(err.msg);
      });
  },
  methods: {
    swripClick(image) {
      if (image.url) {
        const toast = Toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true,
          message: '正在进入外链地址 3',
        });
        let second = 3;
        const timer = setInterval(() => {
          second--;
          if (second) {
            toast.message = `正在进入外链地址 ${second}`;
          } else {
            clearInterval(timer);
            // 手动清除 Toast
            Toast.clear();
            window.open(image.url);
          }
        }, 1000);
      }
      if (image.commodityId) {
        this.$router.push('/gooddetail/' + image.commodityId);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.my-swipe {
  margin: 1vw;
  border-radius: 2vw;
  .van-swipe-item {
    color: #fff;
    font-size: 1.2rem;
    text-align: center;
    border-radius: 2vw;
    height: 40vw;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
