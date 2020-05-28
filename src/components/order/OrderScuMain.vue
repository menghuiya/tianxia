<template>
  <div class="o-s-box">
    <img class="o-s-img" src="@/assets/image/success.png" alt="" />
    <div class="o-s-text1">购买成功</div>
    <div class="o-s-text2">我们将尽快为您发货</div>
    <div class="o-s-action">
      <van-button type="info">查看订单</van-button>
      <van-button type="info">返回首页</van-button>
      <van-button color="#7232dd">分享商品</van-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.o-s-box {
  text-align: center;
  margin: 3vw;
  padding: 3vw 0;
  background: #ffffff;
  border-radius: 2vw;
  .o-s-img {
    margin: 0 auto;
    height: 15vw;
    width: 15vw;
  }
  .o-s-text1 {
    font-size: 1rem;
    font-weight: 600;
    margin-top: 3vw;
  }
  .o-s-text2 {
    font-size: 0.85rem;
    color: #969696;
    margin-top: 2vw;
  }
  .o-s-action {
    display: flex;
    margin-top: 3vw;
    .van-button {
      flex: 1;
      height: 10vw;
      margin: 0 1vw;
    }
  }
}
</style>
