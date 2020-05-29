<template>
  <div>
    <order-head :title="title"></order-head>
    <van-tabs v-model="active" :sticky="true" offset-top="46">
      <van-tab title="待发货">
        <div v-if="buy_a.length > 0">
          <order-card
            v-for="item in buy_a"
            :key="item._id"
            :g_data="item"
          ></order-card>
        </div>
        <van-empty v-if="buy_a.length == 0" description="您还没有相关订单" />
      </van-tab>
      <van-tab title="待收货">
        <div v-if="buy_b.length > 0">
          <order-card
            v-for="item in buy_b"
            :key="item._id"
            :g_data="item"
            @receipt="receipt"
          ></order-card>
        </div>
        <van-empty v-if="buy_b.length == 0" description="您还没有相关订单" />
      </van-tab>
      <van-tab title="待评价">
        <div v-if="buy_c.length > 0">
          <order-card
            v-for="item in buy_c"
            :key="item._id"
            :g_data="item"
          ></order-card>
        </div>
        <van-empty v-if="buy_c.length == 0" description="您还没有相关订单" />
      </van-tab>
      <van-tab title="已完成">
        <div v-if="buy_d.length > 0">
          <order-card
            v-for="item in buy_d"
            :key="item._id"
            :g_data="item"
          ></order-card>
        </div>
        <van-empty v-if="buy_d.length == 0" description="您还没有相关订单" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { request } from '@/network/request';
import { Toast } from 'vant';
import OrderHead from './OrderHead';
import OrderCard from './OrderCard';
export default {
  data() {
    return {
      title: '购买订单',
      active: 0,
      user_id: this.$route.params.user_id,
      buy_a: [],
      buy_b: [],
      buy_c: [],
      buy_d: [],
    };
  },
  components: {
    OrderHead,
    OrderCard,
  },
  methods: {
    receipt(val) {
      request({
        method: 'put',
        url: '/api/order/buyer/receipt',
        data: {
          orderId: val,
          userId: this.user_id,
        },
      })
        .then(() => {
          Toast.success('收货成功');
          location.reload();
        })
        .catch((err) => {
          Toast.fail(err.msg);
        });
    },
  },
  mounted() {
    request({
      method: 'get',
      url: '/api/order/buyer/' + this.user_id,
    }).then((res) => {
      let dataarr = res.data.data;
      for (let item of dataarr) {
        switch (item.status) {
          case 0:
            this.buy_a.push(item);
            break;
          case 1:
            this.buy_b.push(item);
            break;
          case 2:
            this.buy_c.push(item);
            break;
          case 3:
            this.buy_d.push(item);
            break;
          default:
            this.buy_a.push(item);
        }
      }
      console.log(this.buy_a);
    });
  },
};
</script>

<style lang="less" scoped></style>
