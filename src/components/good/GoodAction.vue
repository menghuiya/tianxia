<template>
  <div>
    <van-goods-action v-if="!isshow">
      <van-goods-action-icon icon="chat-o" text="聊天" @click="onClicChat" />
      <van-goods-action-icon
        icon="comment-o"
        text="留言"
        @click="onClickcomment"
      />
      <van-goods-action-icon icon="like-o" text="想要" @click="onClickIcon" />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="onClickButton"
      />
    </van-goods-action>
    <van-field
      v-model="p.value"
      placeholder="问问更多细节~"
      size="large"
      ref="getfocus"
      v-if="isshow"
    >
      <template #left-icon>
        <van-icon name="phone-o" />
      </template>
      <template #button>
        <van-button size="small" type="default" @click="closeInput"
          >取消</van-button
        >
        <van-button size="small" type="primary" @click="postcomment"
          >发送</van-button
        >
      </template>
    </van-field>
  </div>
</template>

<script>
import { Toast } from 'vant';
import Cookies from 'js-cookie';
export default {
  props: ['good_id', 'user_id'],
  data() {
    return {
      p: {
        value: '',
        userId: '',
      },
      isshow: false,
    };
  },
  methods: {
    onClickIcon() {
      Toast('点击图标');
    },
    onClicChat() {
      if (Cookies.get('userData')) {
        this.$router.push(
          '/room/' + this.user_id + '_' + JSON.parse(Cookies.get('userData')).id
        );
      } else {
        Toast.fail('请先登录');
        setTimeout(() => {
          this.$router.push('/login');
        }, 2000);
      }
    },
    onClickButton() {
      if (Cookies.get('userData')) {
        this.$router.push('/order/' + this.good_id);
      } else {
        Toast.fail('请先登录');
        setTimeout(() => {
          this.$router.push('/login');
        }, 2000);
      }
    },
    onClickcomment() {
      if (Cookies.get('userData')) {
        this.p.userId = JSON.parse(Cookies.get('userData')).id;
        this.isshow = true;
        setTimeout(() => {
          this.$refs.getfocus.focus();
        }, 500);
      } else {
        Toast.fail('请先登录');
        setTimeout(() => {
          this.$router.push('/login');
        }, 1000);
      }
    },
    closeInput() {
      this.isshow = false;
    },
    postcomment() {
      this.$refs.getfocus.focus();
      this.$emit('commentval', this.p);
    },
  },
};
</script>

<style lang="less" scoped>
.van-field {
  position: fixed;
  left: 0;
  bottom: 0;
  /deep/ .van-field__control {
    background: #f3f3f4;
  }
  /deep/.van-button {
    height: 7vw;
    margin-left: 2vw;
  }
}
</style>
