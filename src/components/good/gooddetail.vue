<template>
  <div>
    <div class="boxs" id="contain">
      <div class="g-box" v-if="boxshow">
        <good-head @buildpost="buildpost"></good-head>
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
    <img :src="imgUrl" class="posterimg" />
    <good-poster :goodinfo="goodinfo" v-if="boxshow" ref="footer"></good-poster>
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
import GoodPoster from './Poster';
export default {
  data() {
    return {
      boxshow: false,
      goodinfo: {},
      isShow: false,
      noimg: require('@/assets/image/good/noimg.png'),
      imgUrl: '', //最后转化出来的图片base64地址,
      imgshow: false,
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
    GoodPoster,
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
    buildpost(val) {
      console.log(val);
      this.imgshow = true;
      this.$refs.footer.$emit('buildPoste');
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
      document.title = this.goodinfo.description.substr(0, 20) + '...';
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
.posterimg {
  background: #ffffff;
  margin: 0 4vw;
}
</style>
