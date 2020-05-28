<template>
  <van-skeleton title avatar :row="1" :loading="loading">
    <div class="p-user-info-box" v-if="user">
      <div class="p-user-info-left">
        <div class="p-user-name">{{ user.userName }}</div>
        <div class="van-multi-ellipsis--l2 p-user-msg">
          该用户暂无设置个人信息分享
        </div>
        <div class="p-user-very-box">
          <van-icon name="gem" color="#8c4acf" size="0.8rem" />
          <span>实名认证已通过</span>
          <van-icon name="medal" color="#8c4acf" size="0.8rem" />
          <span>实名认证已通过</span>
        </div>
      </div>
      <div class="p-user-info-right">
        <img :src="user.headImg" alt="" />
      </div>
    </div>
  </van-skeleton>
</template>

<script>
export default {
  props: ['user'],
  data() {
    return {};
  },
  computed: {
    loading() {
      if (this.user) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.p-user-info-box {
  padding: 0 4vw;
  margin-top: 3vw;
  background: #ffffff;
  display: flex;
  .p-user-info-left {
    flex: 1;
    .p-user-name {
      font-size: 0.9rem;
      font-weight: 600;
      margin-top: 4vw;
    }
    .p-user-msg {
      font-size: 0.5rem;
      margin-top: 2vw;
    }
    .p-user-very-box {
      font-size: 0.6rem;
      border-radius: 3vw;
      margin-top: 2vw;
      span {
        margin-left: 1vw;
        color: #828283;
        font-weight: 500;
        margin-right: 4vw;
      }
      .van-icon {
        color: #8c4acf;
        font-weight: 600;
        display: inline-block;
        vertical-align: middle;
        margin-left: 1vw;
      }
    }
  }
  .p-user-info-right {
    img {
      width: 15vw;
      height: 15vw;
      margin: 6vw 0 6vw 6vw;
      border-radius: 2vw;
    }
  }
}
</style>
