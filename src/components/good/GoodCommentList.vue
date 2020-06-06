<template>
  <div class="g-comment-box" v-if="comments">
    <div class="g-comment-title">全部留言 · {{ comments.length }}</div>
    <div v-if="comments.length > 0">
      <comment-card
        v-for="(item, index) in comments"
        :comment_data="item"
        :user_data="user"
        :key="index"
      ></comment-card>
    </div>
    <van-empty
      class="custom-image"
      image="https://img.yzcdn.cn/vant/custom-empty-image.png"
      description="暂无评论"
      v-if="comments.length == 0"
    />
  </div>
</template>

<script>
import CommentCard from './CommentCard';
export default {
  props: ['comments', 'user'],
  components: {
    CommentCard,
  },
};
</script>

<style lang="less" scoped>
.g-comment-box {
  padding: 0 4vw;
  margin-top: 3vw;
  background: #ffffff;
  .g-comment-title {
    font-size: 0.8rem;
    font-weight: 600;
    padding-top: 3vw;
  }
}
</style>
