<template>
  <div>
    <head-title :title="title"></head-title>
    <notice-content :n_data="n_data"></notice-content>
  </div>
</template>

<script>
import { request } from '@/network/request';
import HeadTitle from './headtitle';
import NoticeContent from './noticecontent';
export default {
  data() {
    return {
      title: '官方通知',
      n_data: '',
    };
  },
  components: {
    HeadTitle,
    NoticeContent,
  },
  mounted() {
    request({
      url: '/api/notice',
      method: 'get',
    }).then((res) => {
      this.n_data = res.data.data;
    });
  },
};
</script>

<style lang="less" scoped></style>
