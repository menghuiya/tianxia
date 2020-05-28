<template>
  <div v-if="userdata">
    <img class="user-poster" :src="userdata.user.headImg" />
    <div class="msg-box">
      <person-head></person-head>
      <person-info :user="userdata.user"></person-info>
      <person-active></person-active>
    </div>
    <person-data
      :comdata="userdata.commodity"
      :user="userdata.user"
    ></person-data>
  </div>
</template>

<script>
import { request } from '@/network/request';
import PersonHead from './PersonHead';
import PersonInfo from './PersonInfo';
import PersonActive from './PersonActive';
import PersonData from './PersonData';
export default {
  data() {
    return {
      userdata: null,
    };
  },
  components: {
    PersonHead,
    PersonInfo,
    PersonActive,
    PersonData,
  },
  computed: {
    user_id() {
      return this.$route.params.user_id;
    },
  },
  created() {
    request({
      url: '/api/user/personal/' + this.user_id,
      method: 'get',
    }).then((res) => {
      this.userdata = res.data.data; // 数据
    });
  },
};
</script>

<style lang="less" scoped>
.user-poster {
  width: 100%;
  height: 70vw;
  display: block;
  position: absolute;
  z-index: -1;
}
.msg-box {
  background: #42424283;
  height: 70vw;
  color: #ffffff;
}
</style>
