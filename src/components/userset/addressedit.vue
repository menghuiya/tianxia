<template>
  <div>
    <head-title :title="title"></head-title>
    <van-address-edit
      :area-list="areaList"
      show-delete
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      :addressInfo="addressInfo"
    />
  </div>
</template>

<script>
import HeadTitle from './headtitle';
import { Toast } from 'vant';
import areaList from '@/assets/js/area';
import { request } from '@/network/request';
import Cookies from 'js-cookie';
export default {
  data() {
    return {
      areaList,
      searchResult: [],
      title: '新增地址',
      addressInfo: {},
    };
  },
  methods: {
    onSave(value) {
      // let postdata = {
      //   userId: JSON.parse(Cookies.get('userData')).id,
      //   name: value.name,
      //   area: `${value.province}-${value.city}-${value.county}-${value.addressDetail}`,
      //   phoneNum: value.tel,
      // };
      // request({
      //   url: '/api/user/location',
      //   method: 'post',
      //   data: postdata,
      // }).then(() => {
      //   const toast = Toast.loading({
      //     duration: 0, // 持续展示 toast
      //     forbidClick: true,
      //     message: '编辑成功',
      //   });
      //   let second = 3;
      //   const timer = setInterval(() => {
      //     second--;
      //     if (second) {
      //       toast.message = `编辑成功`;
      //     } else {
      //       clearInterval(timer);
      //       // 手动清除 Toast
      //       Toast.clear();
      //       this.$router.push('/userset/address');
      //     }
      //   }, 1000);
      // });
    },
    onDelete() {
      Toast('delete');
    },
  },
  components: {
    HeadTitle,
  },
  mounted() {
    console.log(this.$route.query.address.split('-'));
    this.addressInfo = {
      id: this.$route.query.id,
      tel: this.$route.query.tel,
      name: this.$route.query.name,
      province: this.$route.query.address.split('-')[0],
      city: this.$route.query.address.split('-')[1],
      county: this.$route.query.address.split('-')[2],
      addressDetail: this.$route.query.address.split('-')[3],
    };
  },
};
</script>

<style lang="less" scoped></style>
