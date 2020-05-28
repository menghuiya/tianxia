<template>
  <div>
    <order-head :title="title"></order-head>
    <van-tabs v-model="active" :sticky="true" offset-top="46">
      <van-tab title="待发货">
        <order-card v-for="i in 5" :key="i"></order-card>
      </van-tab>
      <van-tab title="待收货">
        <order-card v-for="i in 3" :key="i"></order-card
      ></van-tab>
      <van-tab title="待评价">
        <order-card v-for="i in 2" :key="i"></order-card
      ></van-tab>
      <van-tab title="已完成">
        <order-card v-for="i in 10" :key="i"></order-card
      ></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import OrderHead from './OrderHead';
import OrderCard from './OrderCard';
export default {
  data() {
    return {
      title: '我的订单',
      active: 0,
    };
  },
  components: {
    OrderHead,
    OrderCard,
  },
};
</script>

<style lang="less" scoped></style>
