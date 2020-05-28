<template>
  <van-nav-bar
    :title="title"
    fixed
    :placeholder="true"
    @click-left="onClickLeft"
  >
    <template #left>
      <van-icon name="arrow-left" size="1.2rem" color="black" />
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  // props: ['title'],
  data() {
    return {
      title: '二手分类',
    };
  },
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
}
</style>
