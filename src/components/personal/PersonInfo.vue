<template>
  <div class="person-msg-smbox">
    <img :src="user.headImg" alt="" />
    <div class="person-msg-name">
      <div class="person-msg-name-top">{{ user.userName }}</div>
      <div class="person-msg-name-bottom">昵称: {{ user.userName }}</div>
      <router-link tag="div" class="person-msg-own" to="/person">
        <van-icon name="gem" color="#ffae00" size="0.6rem" /><span>未认证</span
        ><van-icon name="arrow" />
      </router-link>
    </div>
    <router-link tag="div" class="person-edit" to="/">
      编辑资料
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['user'],
};
</script>

<style lang="less" scoped>
.person-msg-smbox {
  display: flex;
  img {
    width: 18vw;
    height: 18vw;
    border-radius: 2vw;
    margin-left: 4vw;
    border: 0.15rem solid #ffffff;
  }
  .person-msg-name {
    margin-left: 3vw;
    flex: 1;
    .person-msg-name-top {
      font-weight: 800;
      font-size: 1rem;
    }
    .person-msg-name-bottom {
      font-size: 0.5rem;
      color: #ffffff;
    }
  }
  .person-msg-own {
    background-color: #aaa8ac;
    height: 4vw;
    font-size: 0.6rem;
    border-radius: 3vw;
    width: 20vw;
    margin-top: 2vw;
    span {
      vertical-align: middle;
      margin-left: 1vw;
      color: #ffffff;
      font-weight: 500;
    }
    .van-icon {
      color: #cfcccc;
      font-weight: 600;
      display: inline-block;
      vertical-align: middle;
      margin-left: 1vw;
    }
  }
  .person-edit {
    border: 0.05rem solid #ffffff;
    padding: 1vw 2vw;
    height: 8vw;
    border-radius: 1vw;
    font-size: 0.8rem;
    font-weight: 500;
    vertical-align: middle;
    margin-top: 5vw;
    margin-right: 4vw;
  }
}
</style>
