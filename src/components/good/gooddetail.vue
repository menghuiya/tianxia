<template>
  <div class="boxs">
    <div class="g-box" v-if="boxshow">
      <good-head></good-head>
      <good-user :user="goodinfo.user"></good-user>
      <good-price
        :price="goodinfo.price"
        :isSale="goodinfo.isSale"
      ></good-price>
      <good-content
        :des="goodinfo.description"
        :imgPath="goodinfo.imgPath"
      ></good-content>
    </div>
    <good-user-info :user="goodinfo.user"></good-user-info>
    <good-comment-list
      :comments="goodinfo.comment"
      :user="goodinfo.user"
    ></good-comment-list>
    <good-action
      @commentval="commentval"
      :good_id="good_id"
      :user_id="goodinfo.user._id"
      v-if="isShow"
    ></good-action>
  </div>
</template>

<script>
import { request } from '@/network/request';
import Cookies from 'js-cookie';
import { Toast } from 'vant';
import GoodHead from './GoodHead';
import GoodUser from './GoodUser';
import GoodPrice from './GoodPrice';
import GoodContent from './GoodContent';
import GoodUserInfo from './GoodUserInfo';
import GoodCommentList from './GoodCommentList';
import GoodAction from './GoodAction';
export default {
  data() {
    return {
      boxshow: false,
      goodinfo: {},
      isShow: false,
      noimg: require('@/assets/image/good/noimg.png'),
    };
  },
  components: {
    GoodHead,
    GoodUser,
    GoodPrice,
    GoodContent,
    GoodUserInfo,
    GoodCommentList,
    GoodAction,
  },
  computed: {
    good_id() {
      return this.$route.params.good_id;
    },
  },
  methods: {
    commentval(val) {
      Toast.loading({
        message: '留言中...',
        forbidClick: true,
        duration: 0, // 持续展示 toast
      });

      request({
        url: '/api/commodity/comment',
        method: 'post',
        data: {
          commodityId: this.goodinfo._id,
          userId: val.userId,
          comment: val.value,
        },
      }).then((res) => {
        Toast.clear();
        location.reload();
      });
    },
  },
  created() {
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration: 0, // 持续展示 toast
    });
    request({
      url: '/api/commodity/info/' + this.good_id,
      method: 'get',
    }).then((res) => {
      this.goodinfo = res.data.data; // 数据
      if (this.goodinfo.imgPath.length == 0) {
        this.goodinfo.imgPath.push(this.noimg);
      }
      this.boxshow = true;
      Toast.clear();
      let user_id = '';
      if (Cookies.get('userData')) {
        user_id = JSON.parse(Cookies.get('userData')).id;
      }
      if (this.goodinfo.user._id == user_id || this.goodinfo.isSale) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    });
  },
};
</script>

<style lang="less" scoped>
.boxs {
  padding-bottom: 15vw;
  .g-box {
    padding: 3vw 4vw;
    background: #ffffff;
  }
}
</style>
