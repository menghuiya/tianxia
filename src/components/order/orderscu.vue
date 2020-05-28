<template>
  <div>
    <order-head :title="title"></order-head>
    <order-scu-main></order-scu-main>
  </div>
</template>

<script>
import OrderHead from './OrderHead';
import OrderScuMain from './OrderScuMain';
export default {
  data() {
    return {
      title: '购买成功',
    };
  },
  components: {
    OrderHead,
    OrderScuMain,
  },
};
</script>

<style lang="less" scoped></style>
