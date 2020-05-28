<template>
  <van-tabs type="card" :border="false" :sticky="true" :offset-top="90">
    <van-tab title="全部3">
      <comment-card v-for="i in 13" :key="i"></comment-card>
    </van-tab>
    <van-tab title="好评10"
      ><comment-card v-for="i in 10" :key="i"></comment-card
    ></van-tab>
    <van-tab title="有图0">
      <van-empty description="亲,这里是空的哦" />
    </van-tab>
  </van-tabs>
</template>

<script>
import CommentCard from './CommentCard';
export default {
  components: {
    CommentCard,
  },
};
</script>

<style lang="less" scoped>
/deep/ .van-tabs__wrap {
  height: 12vw;
}
/deep/ .van-tabs__nav--card {
  border: none;
  margin: 0;
  height: 12vw;
  .van-tab {
    border: 0.05rem solid #c0bec2;
    border-radius: 4vw;
    margin: 2vw 2vw;
    padding: 0 3vw;
    font-size: 0.7rem;
    float: left;
    flex: none;
    color: #b9b9b8;
  }
  .van-tab--active {
    background: #ffda44;
    border: none;
    color: black;
    font-weight: 600;
  }
}
/deep/ .van-tabs__content {
  .van-tab__pane {
    background: #ffffff;
  }
}
</style>
