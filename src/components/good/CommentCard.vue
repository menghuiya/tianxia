<template>
  <div class="c-card">
    <div class="c-user-img">
      <img :src="comment_data.userId.headImg" alt="" />
    </div>
    <div class="c-user-info">
      <div class="c-user-name">
        {{ comment_data.userId.userName }}
        <van-tag plain type="danger" v-if="isOwner">主人</van-tag>
      </div>
      <div class="c-user-comment">{{ comment_data.comment }}</div>
      <div class="c-user-date">{{ comment_data.createTime }}</div>
    </div>
    <div class="c-user-good">
      <van-icon name="good-job-o" color="#000000" size="1rem" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['comment_data', 'user_data'],
  computed: {
    isOwner() {
      if (this.comment_data.userId._id === this.user_data._id) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.c-card {
  display: flex;
  .c-user-img {
    img {
      width: 7vw;
      height: 7vw;
      margin-top: 4vw;
      border-radius: 2vw;
    }
  }
  .c-user-info {
    padding-top: 5vw;
    margin-left: 2vw;
    padding-bottom: 3vw;
    flex: 1;
    border-bottom: 0.02rem solid #fdfbff;
    .c-user-name {
      font-size: 0.8rem;
      color: #000000;
      font-weight: 550;
    }
    .c-user-comment {
      font-size: 0.8rem;
      color: #000000;
      margin-top: 1vw;
    }
    .c-user-date {
      font-size: 0.62rem;
      color: #a3a3a3;
      margin-top: 5vw;
    }
  }
  .c-user-good {
    border-top: 0.03rem solid #ececec;
    .van-icon {
      margin-top: 5vw;
      margin-right: 4vw;
    }
  }
}
</style>
