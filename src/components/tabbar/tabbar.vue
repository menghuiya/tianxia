<template>
  <van-tabbar v-model="active" :placeholder="true">
    <van-tabbar-item name="home" to="/home" icon="wap-home"
      >首页</van-tabbar-item
    >
    <van-tabbar-item name="shop" to="/second" icon="shop-collect"
      >卖闲置</van-tabbar-item
    >
    <van-tabbar-item name="chat" to="/message" badge="99+" icon="chat"
      >消息</van-tabbar-item
    >
    <van-tabbar-item name="manager" to="/user" icon="manager"
      >我的</van-tabbar-item
    >
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 'home',
    };
  },
  methods: {
    changeActive() {
      let url = this.$route.path;
      switch (url) {
        case '/home':
          this.active = 'home';
          break;
        case '/message':
          this.active = 'chat';
          break;
        case '/user':
          this.active = 'manager';
          break;
        case '/second':
          this.active = 'shop';
          break;
        default:
          this.active = 'home';
      }
    },
  },
  created() {
    this.changeActive();
  },
};
</script>

<style scoped></style>
