<template>
  <div class="c-card">
    <div class="c-user-img">
      <img src="@/assets/image/user/default.jpg" alt="" />
    </div>
    <div class="c-user-info">
      <div class="c-user-name">tb073670423</div>
      <div class="c-user-comment">很好的卖家</div>
      <div class="c-user-date">2020-03-04 16:23:35</div>
    </div>
    <div class="c-user-good">
      <van-icon name="smile" color="#ffda44" size="1.5rem" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.c-card {
  display: flex;
  .c-user-img {
    img {
      width: 9vw;
      height: 9vw;
      margin-top: 4vw;
      margin-left: 4vw;
      border-radius: 2vw;
    }
  }
  .c-user-info {
    padding-top: 5vw;
    margin-left: 2vw;
    padding-bottom: 3vw;
    flex: 1;
    border-bottom: 1px solid #ececec;
    .c-user-name {
      font-size: 0.9rem;
      color: #a3a3a3;
    }
    .c-user-comment {
      font-size: 0.9rem;
      color: #000000;
      font-weight: 550;
      margin-top: 1vw;
    }
    .c-user-date {
      font-size: 0.7rem;
      color: #a3a3a3;
      margin-top: 5vw;
    }
  }
  .c-user-good {
    border-bottom: 1px solid #ececec;
    .van-icon {
      margin-top: 5vw;
      margin-right: 4vw;
    }
  }
}
</style>
