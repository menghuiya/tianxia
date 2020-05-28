<template>
  <div class="user-msg-smbox">
    <img :src="userdata.headImg" alt="" />
    <div class="user-msg-name">
      <div class="user-msg-name-top">{{ userdata.userName }}</div>
      <div class="user-msg-name-bottom">昵称:{{ userdata.userName }}</div>
    </div>
    <router-link tag="div" class="user-msg-own" :to="'/person/' + userdata.id">
      <span>个人主页</span><van-icon name="arrow" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['userdata'],
};
</script>

<style lang="less" scoped>
.user-msg-smbox {
  display: flex;
  img {
    width: 15vw;
    height: 15vw;
    border-radius: 2vw;
    margin-left: 4vw;
  }
  .user-msg-name {
    margin-left: 3vw;
    flex: 1;
    margin-top: 1.5vw;
    .user-msg-name-top {
      font-weight: 800;
      font-size: 1rem;
    }
    .user-msg-name-bottom {
      font-size: 0.7rem;
      color: #6e6e6e;
      margin-top: 1vw;
    }
  }
  .user-msg-own {
    background-color: #ffffff;
    height: 6vw;
    line-height: 6vw;
    padding: 0 2vw;
    font-size: 0.7rem;
    border-radius: 3vw;
    margin-top: 4vw;
    margin-right: 4vw;
    .van-icon {
      color: black;
      font-weight: 600;
      font-size: 0.6rem;
      display: inline-block;
      margin-left: 1vw;
    }
  }
}
</style>
