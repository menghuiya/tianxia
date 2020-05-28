<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text="返回"
      fixed
      :placeholder="true"
      @click-left="onClickLeft"
    >
      <template #left>
        <van-icon name="arrow-left" size="1.2rem" color="black" />
      </template>
    </van-nav-bar>
    <order-scu-main></order-scu-main>
  </div>
</template>

<script>
import OrderScuMain from './OrderScuMain';
export default {
  data() {
    return {
      title: '购买成功',
    };
  },
  components: {
    OrderScuMain,
  },
  methods: {
    onClickLeft() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar {
  .van-ellipsis {
    font-size: 0.9rem;
    font-weight: 500;
  }
  .van-icon {
    color: #030303;
  }
  .phone {
    margin-right: 2vw;
  }
}
</style>
