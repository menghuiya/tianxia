<template>
  <div tag="div" class="r-btn-box" @click="btnClick">
    <van-icon name="plus" size="1.5rem" />
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  methods: {
    btnClick() {
      const toast = Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: '正在检测当前环境 3',
      });
      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = `正在检测当前环境 ${second}`;
        } else {
          clearInterval(timer);
          Toast.clear();
          this.$router.push('/edit');
        }
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
.r-btn-box {
  height: 14vw;
  width: 15vw;
  background: #ffe60f;
  border-radius: 7vw;
  position: fixed;
  z-index: 9999;
  right: 5vw;
  bottom: 30vw;
  text-align: center;
  box-shadow: 0.4vw 0.4vw 0.4vw #888888;
  opacity: 0.85;
  .van-icon {
    line-height: 14vw;
    font-weight: 700;
  }
}
</style>
