<template>
  <div>
    <div class="p-price-box" v-if="!isSale">
      <div class="p-price"><span>¥</span>{{ price }}</div>
      <van-tag round type="danger" color="#f3dcdc94" text-color="#ad0000"
        >包邮</van-tag
      >
      <van-tag round color="#b8b5b57a">不讲价</van-tag>
    </div>
    <div class="issale" v-if="isSale">
      该商品已出售!
    </div>
  </div>
</template>

<script>
export default {
  props: ['price', 'isSale'],
};
</script>

<style lang="less" scoped>
.p-price-box {
  margin-top: 4vw;
  display: flex;
  .p-price {
    color: red;
    font-size: 1.2rem;
    font-weight: 700;
    span {
      font-size: 0.5rem;
      display: inline-block;
    }
  }
  /deep/ .van-tag {
    margin-left: 2vw;
    font-size: 0.4rem;
    height: 4.2vw;
    margin-top: 1vw;
  }
}
.issale {
  background: #18b566;
  color: #ffffff;
  text-align: center;
  border-radius: 1vw;
}
</style>
