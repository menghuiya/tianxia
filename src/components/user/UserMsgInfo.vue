<template>
  <div class="user-msg-info">
    <div>
      <div class="datanum">{{ Math.floor(Math.random() * 100) }}</div>
      <div class="dataname">收藏</div>
    </div>
    <div>
      <div class="datanum">{{ Math.floor(Math.random() * 10000) }}</div>
      <div class="dataname">历史浏览</div>
    </div>
    <div>
      <div class="datanum">{{ Math.floor(Math.random() * 1000) }}</div>
      <div class="dataname">关注</div>
    </div>
    <div>
      <div class="datanum">{{ Math.floor(Math.random() * 100000) }}</div>
      <div class="dataname">粉丝</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.user-msg-info {
  margin-top: 1vw;
  height: 13vw;
  display: flex;
  font-size: 0.8rem;
  padding: 3vw 0;
  > div {
    flex: 1;
    text-align: center;
    .datanum {
      font-weight: 700;
    }
    .dataname {
      color: #4d4d4d;
      margin-top: 1vw;
      font-size: 0.7rem;
    }
  }
}
</style>
