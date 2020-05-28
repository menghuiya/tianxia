<template>
  <div>
    <head-title :title="title"></head-title>
  </div>
</template>

<script>
import HeadTitle from './headtitle';
export default {
  data() {
    return {
      title: '官方通知',
    };
  },
  components: {
    HeadTitle,
  },
};
</script>

<style lang="less" scoped></style>
