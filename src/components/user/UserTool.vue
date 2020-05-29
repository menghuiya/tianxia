<template>
  <div class="user-tool">
    <div class="user-tool-title">{{ headtitle }}</div>
    <van-grid :column-num="colnum" :border="false">
      <van-grid-item
        v-for="item in datas"
        :key="item.id"
        :icon="item.iconimg"
        :text="item.name + ' ' + item.num"
        :to="item.url"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  props: ['headtitle', 'colnum', 'datas'],
};
</script>

<style lang="less" scoped>
.user-tool {
  background: #ffffff;
  border-radius: 5vw;
  padding: 3vw;
  margin: 3vw;
  .user-tool-title {
    font-size: 0.9rem;
    font-weight: 700;
    margin-left: 2vw;
  }
  .van-grid {
    margin-top: 2vw;
    .van-grid-item {
    }
  }
}
</style>
