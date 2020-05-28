<template>
  <van-skeleton title avatar :row="1" :loading="loading" animate>
    <div class="g-user-box" v-if="user">
      <img class="g-user-img" :src="user.headImg" alt="" />
      <div class="g-user-info">
        <div class="g-user-name">
          <span>{{ user.userName }}</span>
          <div class="p-user-very">
            <van-icon name="medal" color="#04a6f4" size="0.6rem" />
            <span>信用极好</span>
            <van-icon name="gem" color="#04a6f4" size="0.6rem" />
          </div>
        </div>
        <div class="g-user-root">
          5小时前来过 发布于中山
        </div>
      </div>
      <router-link :to="'/person/' + user._id" tag="div" class="g-user-person">
        ta的主页
      </router-link>
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
.g-user-box {
  background: #ffffff;
  display: flex;
  padding-bottom: 3vw;
  border-bottom: 0.01rem solid #ebedf0;
  .g-user-img {
    width: 10vw;
    height: 10vw;
  }
  .g-user-info {
    flex: 1;
    margin-left: 2vw;
    .g-user-name {
      font-size: 0.7rem;
      font-weight: 600;
      .p-user-very {
        display: inline-block;
        background: #04a4f418;
        font-size: 0.5rem;
        border-radius: 3vw;
        position: relative;
        top: -0.5vw;
        span {
          vertical-align: middle;
          color: #04a6f4;
          font-weight: 500;
        }
        .van-icon {
          font-weight: 600;
          display: inline-block;
          vertical-align: middle;
          margin-left: 1vw;
        }
      }
    }
    .g-user-root {
      font-size: 0.5rem;
      color: #cdd1d1;
      margin-top: 1vw;
    }
  }
  .g-user-person {
    border: 0.05rem solid #cdd1d1;
    border-radius: 2vw;
    font-size: 0.8rem;
    height: 6vw;
    padding: 0 2vw;
    margin-top: 2vw;
  }
}
</style>
