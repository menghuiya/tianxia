<template>
  <van-field
    v-model="value"
    left-icon="volume-o"
    right-icon="smile-o"
    :autosize="autodata"
    type="textarea"
    rows="1"
    placeholder="想跟TA说点什么呢"
  >
    <template #button>
      <van-button @click="sendmsg" size="small" type="primary">发送</van-button>
    </template>
  </van-field>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      autodata: { maxHeight: 60 },
    };
  },
  methods: {
    sendmsg() {
      this.$emit('senddata', this.value);
      this.value = '';
    },
  },
};
</script>

<style lang="less" scoped>
.van-field {
  position: fixed;
  bottom: 0;
  left: 0;
  /deep/ .van-icon-smile-o {
    font-size: 1.2rem;
  }
}
</style>
