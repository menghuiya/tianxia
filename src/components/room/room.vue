<template>
  <div class="roombox">
    <room-head :title="title"></room-head>
    <van-sticky :offset-top="46">
      <van-notice-bar
        :text="notice"
        left-icon="info-o"
        color="#fff"
        background="#EB544D"
      />
    </van-sticky>
    <room-content
      :saylist="saylist"
      :local_id="local_id"
      class="chat-content"
    ></room-content>
    <room-send @senddata="senddata"></room-send>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import { request } from '@/network/request';
import io from 'socket.io-client';
import RoomHead from './RoomHead';
import RoomContent from './RoomContent';
import RoomSend from './RoomSend';
const socket = io('https://www.wdf5.com:5050/');
export default {
  data() {
    return {
      title: '冉志成',
      notice: '注意:以扫二维码/点链接/去微信等名义让你交钱的都是骗子!',
      saylist: [],
      local_id: JSON.parse(Cookies.get('userData')).id,
    };
  },
  sockets: {
    //查看socket是否渲染成功
    connect() {
      console.log('链接成功');
    },
    disconnect() {
      console.log('断开链接');
    }, //检测socket断开链接
    reconnect() {
      console.log('重新链接');
    },
    //客户端接收后台传输的socket事件
    message(data) {
      this.$notify({
        title: '新消息',
        message: data,
        type: 'warning',
        duration: 10000,
      });
      console.log('data', data); //接收的消息
    },
    back(data) {
      console.log(data);
      this.saylist.push(data.data);
      setTimeout(() => {
        let div = document.querySelector('.record-box');
        div.scrollTop = div.scrollHeight;
      }, 500);
    },
  },
  components: {
    RoomHead,
    RoomContent,
    RoomSend,
  },
  computed: {
    room_id() {
      return this.$route.params.room_id;
    },
  },
  methods: {
    senddata(msg) {
      let receiveid = this.room_id.replace(this.local_id, '').replace('_', '');
      let info = {
        send: this.local_id, // 发送者id
        receive: receiveid,
        // 接收者id
        msg: msg, // 发送内容
      };
      console.log(info);
      socket.emit('chat', info);
    },
  },
  created() {
    socket.on('back', (res) => {
      this.saylist.push(res.data);
      setTimeout(() => {
        let div = document.querySelector('.record-box');
        div.scrollTop = div.scrollHeight;
      }, 500);
    });
  },
  mounted() {
    request({
      url: '/api/chat/history/' + this.room_id,
      method: 'get',
    }).then((res) => {
      this.saylist = res.data.data;
      // this.title = res.data.data[0].receive.userName;
    });
  },
};
</script>

<style lang="less" scoped></style>
