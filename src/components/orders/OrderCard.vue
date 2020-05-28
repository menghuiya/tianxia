<template>
  <div class="o-box">
    <van-card
      price="999.00"
      title="出一个二手的平板电脑,因为上班没时间使用了,所以想转手给卖掉"
      desc="发布者:梦回吖"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #footer>
        <van-button size="small" round>查看物流</van-button>
        <van-button size="small" round type="danger">删除订单</van-button>
        <van-button size="small" round type="info">评价</van-button>
      </template>
    </van-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.o-box {
  background-color: #ffffff;
  border-radius: 2vw;
  overflow: hidden;
  margin: 2vw;
  /deep/ .van-card {
    background-color: #ffffff;
    .van-card__title {
      font-size: 0.8rem;
    }
    .van-card__price {
      color: red;
    }
    .van-button {
      width: 20vw;
      height: 4vh;
    }
  }
}
</style>
