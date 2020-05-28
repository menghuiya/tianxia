<template>
  <van-card
    :price="orderdata.price.toFixed(2)"
    :title="orderdata.description"
    :thumb="orderdata.imgPath[0]"
  />
</template>

<script>
export default {
  props: ['orderdata'],
  data() {
    return {
      desc: '韩国87mm情侣短袖男女短袖明星同款宽松字母mmlg',
    };
  },
};
</script>

<style lang="less" scoped>
.van-card {
  background: #ffffff;
  .van-card__title {
    font-size: 0.8rem;
  }
}
/deep/ .van-card__price {
  color: red;
}
</style>
