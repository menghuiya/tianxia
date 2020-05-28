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
      title: '编辑地址',
    };
  },
  methods: {
    onSave(value) {
      let postdata = {
        userId: JSON.parse(Cookies.get('userData')).id,
        name: value.name,
        area: `${value.province}-${value.city}-${value.county}-${value.addressDetail}`,
        phoneNum: value.tel,
      };
      request({
        url: '/api/user/location',
        method: 'post',
        data: postdata,
      }).then(() => {
        const toast = Toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true,
          message: '添加成功',
        });

        let second = 3;
        const timer = setInterval(() => {
          second--;
          if (second) {
            toast.message = `添加成功`;
          } else {
            clearInterval(timer);
            // 手动清除 Toast
            Toast.clear();
            this.$router.push('/userset/address');
          }
        }, 1000);
      });
    },
    onDelete() {
      Toast('delete');
    },
  },
  components: {
    HeadTitle,
  },
};
</script>

<style lang="less" scoped></style>
