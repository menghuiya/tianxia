<template>
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
    <template #right>
      <van-icon name="phone-o" size="1.2rem" color="black" class="phone" />
      <van-icon name="ellipsis" size="1.2rem" color="black" />
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar {
  .van-ellipsis {
    font-size: 0.9rem;
    font-weight: 600;
  }
  .van-icon {
    color: #030303;
  }
  .phone {
    margin-right: 2vw;
  }
}
</style>
