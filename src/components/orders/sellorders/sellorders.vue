<template>
  <div>
    <order-head :title="title"></order-head>
    <van-tabs v-model="active" :sticky="true" offset-top="46">
      <van-tab title="待发货">
        <div v-if="sell_a.length > 0">
          <order-card
            v-for="item in sell_a"
            :key="item._id"
            :g_data="item"
            @delive="delive"
          ></order-card>
        </div>
        <van-empty v-if="sell_a.length == 0" description="您还没有相关订单" />
      </van-tab>
      <van-tab title="待收货">
        <div v-if="sell_b.length > 0">
          <order-card
            v-for="item in sell_b"
            :key="item._id"
            :g_data="item"
            @delive="delive"
          ></order-card>
        </div>
        <van-empty v-if="sell_b.length == 0" description="您还没有相关订单" />
      </van-tab>
      <van-tab title="待评价">
        <div v-if="sell_c.length > 0">
          <order-card
            v-for="item in sell_c"
            :key="item._id"
            :g_data="item"
            @delive="delive"
          ></order-card>
        </div>
        <van-empty v-if="sell_c.length == 0" description="您还没有相关订单" />
      </van-tab>
      <van-tab title="已完成">
        <div v-if="sell_d.length > 0">
          <order-card
            v-for="item in sell_d"
            :key="item._id"
            :g_data="item"
            @delive="delive"
          ></order-card>
        </div>
        <van-empty v-if="sell_d.length == 0" description="您还没有相关订单" />
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
      title: '出售订单',
      active: 0,
      user_id: this.$route.params.user_id,
      sell_a: [],
      sell_b: [],
      sell_c: [],
      sell_d: [],
    };
  },
  components: {
    OrderHead,
    OrderCard,
  },
  methods: {
    delive(val) {
      request({
        method: 'put',
        url: '/api/order/seller/delivery',
        data: {
          orderId: val,
          userId: this.user_id,
        },
      })
        .then(() => {
          Toast.success('发货成功');
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
      url: '/api/order/seller/' + this.user_id,
    }).then((res) => {
      let dataarr = res.data.data;
      for (let item of dataarr) {
        switch (item.status) {
          case 0:
            this.sell_a.push(item);
            break;
          case 1:
            this.sell_b.push(item);
            break;
          case 2:
            this.sell_c.push(item);
            break;
          case 3:
            this.sell_d.push(item);
            break;
          default:
            this.sell_a.push(item);
        }
      }
    });
  },
};
</script>

<style lang="less" scoped></style>
