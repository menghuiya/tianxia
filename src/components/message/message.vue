<template>
  <div>
    <div class="head-title">
      <van-sticky>
        <div class="head-title-text">消息中心</div>
      </van-sticky>
    </div>
    <message-menu></message-menu>
    <message-content></message-content>
  </div>
</template>

<script>
import MessageMenu from './MessageMenu';
import MessageContent from './MessageContent';
export default {
  components: {
    MessageMenu,
    MessageContent,
  },
};
</script>

<style lang="less" scoped>
.head-title {
  height: 30vw;
  text-align: center;
  line-height: 12vw;
  font-size: 0.9rem;
  background-color: #ffe60f;
  font-family: '楷书';
  border-bottom-left-radius: 5vw;
  border-bottom-right-radius: 5vw;
  .head-title-text {
    display: block;
    background-color: #ffe60f;
  }
}
</style>
