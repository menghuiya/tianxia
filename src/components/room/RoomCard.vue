<template>
  <div>
    <div class="chat-card-left" v-if="issend">
      <img class="user-img" :src="users.receive_user[0].headImg" />
      <div class="user-message">{{ saydata.msg }}</div>
    </div>
    <div class="chat-card-right" v-else>
      <div class="user-message">{{ saydata.msg }}</div>
      <img class="user-img" :src="users.send_user[0].headImg" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['saydata', 'local_id', 'users'],
  computed: {
    issend() {
      if (this.saydata.send) {
        if (this.saydata.send != this.local_id) {
          return true;
        } else {
          return false;
        }
      } else {
        if (this.saydata.send != this.local_id) {
          return true;
        } else {
          return false;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.chat-card-left {
  text-align: left;
  margin: 2vw 0;
  .user-img {
    height: 10vw;
    width: 10vw;
    border-radius: 2vw;
    display: inline-block;
    vertical-align: middle;
  }
  .user-message {
    font-size: 0.8rem;
    margin-left: 2vw;
    background: #f9db61;
    padding: 2.1vw;
    border-radius: 1vw;
    display: inline-block;
    vertical-align: middle;
    max-width: 50vw;
    word-wrap: break-word;
    word-break: break-all;
  }
}

.chat-card-right {
  text-align: right;
  margin: 2vw 0;
  .user-img {
    height: 10vw;
    width: 10vw;
    border-radius: 2vw;
    display: inline-block;
    vertical-align: middle;
  }
  .user-message {
    font-size: 0.8rem;
    margin-right: 2vw;
    background: #f9db61;
    padding: 2.1vw;
    border-radius: 1vw;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    max-width: 50vw;
    word-wrap: break-word;
    word-break: break-all;
  }
}
</style>
