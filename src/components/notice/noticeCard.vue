<template>
  <div class="n-card-box">
    <div class="n-c-time">
      <span>{{ item.createTime }}</span>
    </div>
    <div class="n-c-main">
      <div class="n-c-main-content">
        {{ item.content }}
      </div>
      <div class="n-c-main-img">
        <img :src="item.imgPath" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
};
</script>

<style lang="less" scoped>
.n-card-box {
  margin: 2vw 0;
  .n-c-time {
    text-align: center;
    margin-bottom: 3vw;
    span {
      background: #c8c9cc;
      display: inline-block;
      font-size: 0.5rem;
      padding: 0 0.8vw;
      color: #f4f4f5;
      border-radius: 1vw;
    }
  }
  .n-c-main {
    background-color: #ffffff;
    border-radius: 1.5vw;
    padding: 2vw 4vw;
    box-shadow: 0.5vw 0.5vw 1vw 0 #c8c9cc;
    .n-c-main-content {
      font-size: 0.8rem;
      margin-bottom: 2vw;
    }
    .n-c-main-img {
      img {
        width: 100%;
        height: 40vw;
        border-radius: 1.5vw;
      }
    }
  }
}
</style>
