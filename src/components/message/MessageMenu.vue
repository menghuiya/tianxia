<template>
  <div class="msg-nav">
    <van-grid :column-num="4" :border="false" icon-size="2rem">
      <van-grid-item
        v-for="(value, index) in mesdata"
        :key="index"
        :icon="value.imgsrc"
        :text="value.name"
        :to="value.url"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mesdata: [
        {
          id: 1,
          name: '官方公告',
          imgsrc: require('@/assets/image/message/gg.png'),
          url: '/notice',
        },
        {
          id: 2,
          name: '交易信息',
          imgsrc: require('@/assets/image/message/jy.png'),
          url: '/orders',
        },
        {
          id: 3,
          name: '互动信息',
          imgsrc: require('@/assets/image/message/hd.png'),
          url: '/notice',
        },
        {
          id: 4,
          name: '指南教程',
          imgsrc: require('@/assets/image/message/zn.png'),
          url: '/notice',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.msg-nav {
  background: #ffffff;
  border-radius: 5vw;
  padding: 3vw;
  margin: 3vw;
  margin-top: -15vw;
  .van-grid {
    margin-top: 2vw;
    .van-grid-item {
    }
  }
}
</style>
