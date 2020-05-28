<template>
  <div class="p-card">
    <router-link
      :to="'/gooddetail/' + imginfo._id"
      tag="div"
      class="p-card-main"
    >
      <img
        :src="imginfo.imgPath[0]"
        alt=""
        class="p-img"
        :class="{ gray: imginfo.isSale }"
      />
      <div class="van-multi-ellipsis--l2 shoptitle">
        {{ imginfo.description }}
      </div>
      <div class="p-price-box">
        <div class="p-price"><span>¥</span>{{ imginfo.price }}</div>
        <div class="p-want">{{ Math.floor(Math.random() * 100) }}人想要</div>
      </div>
      <div class="p-user">
        <img :src="userinfo.headImg" class="p-user-img" />
        <div class="p-user-name">{{ userinfo.userName }}</div>
        <div class="p-user-tag">
          <van-tag color="#7232dd" size="medium" plain>超级卖家</van-tag>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['imginfo', 'userinfo'],
};
</script>

<style lang="less" scoped>
.p-card {
  color: #303133;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  // height: 80vw;
  .p-card-main {
    // margin: 1vw;
    margin-bottom: 1.5vw;
    border-radius: 2vw;
    background-color: #fff;
    .p-img {
      width: 100%;
      max-height: 50vw;
      min-height: 30vw;
      // height: 50vw;
      border-top-left-radius: 2vw;
      border-top-right-radius: 2vw;
    }
    .shoptitle {
      margin-left: 2vw;
      margin-right: 1vw;
      font-size: 0.7rem;
      font-weight: 600;
      color: black;
    }
    .p-price-box {
      margin-top: 3vw;
      margin-left: 2vw;
      display: flex;
      .p-price {
        color: red;
        font-size: 0.8rem;
        font-weight: 700;
        flex: 1;
        span {
          font-size: 0.5rem;
          display: inline-block;
          margin-left: 1vw;
          margin-right: 2vw;
        }
      }
      .p-want {
        font-size: 0.5rem;
        color: #89878a;
        margin-right: 2vw;
      }
    }
    .p-user {
      display: flex;
      height: 8vw;
      margin-left: 2vw;
      .p-user-img {
        width: 6vw;
        height: 6vw;
        margin-top: 1vw;
        border-radius: 3vw;
      }
      .p-user-name {
        font-size: 0.5rem;
        color: #9d99a1;
        line-height: 8vw;
        margin-left: 2vw;
        flex: 1;
      }
      .p-user-tag {
        margin-right: 2vw;
        line-height: 8vw;
        .van-tag {
          height: 4vw;
          font-size: 0.5rem;
        }
      }
    }
  }
}
.gray {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
}
</style>
