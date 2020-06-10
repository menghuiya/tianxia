<template>
  <div>
    <van-nav-bar
      fixed
      :placeholder="true"
      :border="false"
      @click-left="onClickLeft"
    >
      <template #left>
        <van-icon name="arrow-left" size="1.5rem" />
      </template>
      <template #right>
        <van-icon name="ellipsis" size="1.5rem" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showShare: false,

      qurshow: false,
    };
  },
  methods: {
    onClickLeft() {
      let path = this.$store.state.lastpath;
      if (path == '/edit') {
        this.$router.push('/second');
      } else {
        this.$router.back();
      }
    },
  },
};
</script>

<style lang="less" scoped></style>
