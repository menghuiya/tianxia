<template>
  <div>
    <div class="m-content" v-if="msglist.length > 0">
      <message-card
        v-for="(item, index) in msglist"
        :msgdata="item"
        :user_id="id"
        :key="index"
      ></message-card>
    </div>
    <van-empty description="暂无信息" v-else />
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import { request } from '@/network/request';
import MessageCard from './MessageCard';
export default {
  data() {
    return {
      id: '',
      msglist: [],
    };
  },
  components: {
    MessageCard,
  },
  mounted() {
    if (Cookies.get('userData')) {
      this.id = JSON.parse(Cookies.get('userData')).id;
    }
    request({
      url: '/api/chat/msglist/' + this.id,
      method: 'get',
    }).then((res) => {
      this.msglist = res.data.data;
    });
  },
};
</script>

<style lang="less" scoped>
.m-content {
  padding: 2vw 3vw;
  background: #ffffffa4;
}
</style>
