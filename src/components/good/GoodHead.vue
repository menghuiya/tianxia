<template>
  <div>
    <van-nav-bar
      fixed
      :placeholder="true"
      :border="false"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
        <van-icon name="arrow-left" size="1.5rem" />
      </template>
      <template #right>
        <van-icon name="ellipsis" size="1.5rem" />
      </template>
    </van-nav-bar>
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showShare: false,
      options: [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
    };
  },
  methods: {
    onClickLeft() {
      let path = this.$store.state.lastpath;
      if (path == '/edit') {
        this.$router.push('/second');
      } else {
        this.$router.back();
      }
    },
    onClickRight() {
      this.showShare = true;
    },
    onSelect(option, index) {
      console.log(option, index);
      this.showShare = false;
    },
  },
};
</script>

<style lang="less" scoped></style>
