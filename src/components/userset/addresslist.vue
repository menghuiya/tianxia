<template>
  <div>
    <head-title :title="title"></head-title>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      v-if="list"
    />
    <van-empty description="还没有地址,请先增加地址" v-if="list.length == 0" />
  </div>
</template>

<script>
import { request } from '@/network/request';
import Cookies from 'js-cookie';
import HeadTitle from './headtitle';
import { Toast } from 'vant';
export default {
  data() {
    return {
      chosenAddressId: '5ec75e966e302c10ea313b85',
      title: '我的地址',
      list: [],
    };
  },
  methods: {
    onAdd() {
      this.$router.push('/userset/addressadd');
    },
    onEdit(item, index) {
      Toast('编辑地址:' + this.list[index].id);
      this.$router.push({
        path: '/userset/addressedit',
        query: this.list[index],
      });
    },
  },
  components: {
    HeadTitle,
  },
  mounted() {
    let id = JSON.parse(Cookies.get('userData')).id;
    request({
      url: '/api/user/location/' + id,
      method: 'get',
    }).then((res) => {
      let data = res.data.data;
      for (let item in data) {
        let newdata = {
          id: data[item]._id,
          name: data[item].name,
          tel: data[item].phoneNum,
          address: data[item].area,
        };
        newdata.isDefault = item == 0 ? true : false;
        this.chosenAddressId = data[0]._id;
        this.list.push(newdata);
      }
    });
  },
};
</script>

<style lang="less" scoped></style>
