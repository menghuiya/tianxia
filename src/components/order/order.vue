<template>
  <div v-if="orderdata">
    <order-head :title="title"></order-head>
    <order-card :orderdata="orderdata"></order-card>
    <order-adress :list="list" @adress="adress"></order-adress>
    <van-submit-bar
      :price="orderdata.price * 100"
      button-text="立即付款"
      text-align="left"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import { request } from '@/network/request';
import Cookies from 'js-cookie';
import { Toast } from 'vant';
import OrderHead from './OrderHead';
import OrderCard from './OrderCard';
import OrderAdress from './OrderAdress';
export default {
  data() {
    return {
      title: '购买宝贝',
      orderdata: null,
      list: [],
      areaval: '',
      balance: 0,
    };
  },
  components: {
    OrderHead,
    OrderCard,
    OrderAdress,
  },
  methods: {
    adress(val) {
      this.areaval = val;
    },
    onSubmit() {
      if (this.areaval) {
        if (this.balance >= this.orderdata.price) {
          let buyerId = JSON.parse(Cookies.get('userData')).id;
          let sellerId = this.orderdata.user._id;
          request({
            url: '/api/order',
            method: 'post',
            data: {
              commodityId: this.orderdata._id,
              receive: {
                area: this.areaval.split('|')[0],
                phoneNum: this.areaval.split('|')[1],
              },
              buyerId: buyerId,
              sellerId: sellerId,
            },
          }).then((res) => {
            Toast.success('购买成功');
            this.$router.push('/orderscu');
          });
        } else {
          Toast.fail('余额不足,请充值');
        }
      } else {
        Toast.fail('请先选择或添加收货地址');
      }
    },
  },
  computed: {
    good_id() {
      return this.$route.params.good_id;
    },
  },
  mounted() {
    request({
      url: '/api/commodity/info/' + this.good_id,
      method: 'get',
    }).then((res) => {
      this.orderdata = res.data.data; // 数据
    });
    let id = JSON.parse(Cookies.get('userData')).id;
    request({
      url: '/api/user/location/' + id,
      method: 'get',
    }).then((res) => {
      this.list = res.data.data;
    });
    request({
      url: '/api/user/balance/' + id,
      method: 'get',
    }).then((res) => {
      this.balance = res.data.data.balance.toFixed(2);
    });
  },
};
</script>

<style lang="less" scoped></style>
