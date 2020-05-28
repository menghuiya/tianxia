<template>
  <div class="n-box">
    <notice-card
      v-for="(item, index) in n_data"
      :key="index"
      :item="item"
    ></notice-card>
  </div>
</template>

<script>
import NoticeCard from './noticeCard';
export default {
  props: ['n_data'],
  components: {
    NoticeCard,
  },
};
</script>

<style lang="less" scoped>
.n-box {
  margin: 3vw;
}
</style>
