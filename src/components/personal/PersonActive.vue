<template>
  <div class="person-act-box">
    <div class="user-msg-text">十分钟前来过甜虾</div>
    <div class="user-msg-text">男生</div>
    <div class="user-msg-data">
      <div>{{ Math.floor(Math.random() * 10000) }}超赞</div>
      <div>{{ Math.floor(Math.random() * 100) }}关注</div>
      <div>{{ Math.floor(Math.random() * 10000) }}粉丝</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.person-act-box {
  margin: 4vw;
  .user-msg-text {
    font-size: 0.85rem;
    margin-bottom: 2vw;
  }
  .user-msg-data {
    display: flex;
    margin-top: 10vw;
    font-size: 1rem;
    font-weight: 540;
    div {
      margin-right: 4vw;
    }
  }
}
</style>
