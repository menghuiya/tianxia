<template>
  <div class="edit-box">
    <van-nav-bar
      title="发布"
      left-text="取消"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      :border="false"
      fixed
      placeholder
    >
      <template #right>
        <van-button round type="info" size="small">发布</van-button>
      </template>
    </van-nav-bar>
    <edit-content
      :content="p.description"
      @contchange="contchange"
    ></edit-content>
    <edit-img @imgChange="imgChange"></edit-img>
    <edit-price @priceChange="priceChange"></edit-price>
    <edit-find @kindChange="kindChange"></edit-find>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import { request } from '@/network/request';
import { Toast } from 'vant';
import EditContent from './EditContent';
import EditImg from './EditImg';
import EditPrice from './EditPrice';
import EditFind from './EditFind';
export default {
  data() {
    return {
      p: {
        description: '',
        imgPath: [],
        price: 0,
        kind: '',
      },
    };
  },
  components: {
    EditContent,
    EditImg,
    EditPrice,
    EditFind,
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {
      let userdata = JSON.parse(Cookies.get('userData'));
      this.p.owner = userdata.id;
      request({
        url: '/api/commodity/info',
        method: 'post',
        data: this.p,
      }).then((res) => {
        const toast = Toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true,
          message: '发表成功,跳转商品详情页 3',
        });
        let second = 3;
        const timer = setInterval(() => {
          second--;
          if (second) {
            toast.message = `发表成功,跳转商品详情页 ${second}`;
          } else {
            clearInterval(timer);
            // 手动清除 Toast
            Toast.clear();
            this.$router.push('/gooddetail/' + res.data.data._id);
          }
        }, 1000);
      });
    },
    contchange(val) {
      this.p.description = val;
    },
    kindChange(val) {
      this.p.kind = val;
    },
    priceChange(val) {
      this.p.price = val;
    },
    imgChange(val) {
      this.p.imgPath = val;
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar {
  background: transparent;
  .van-nav-bar__text {
    color: black;
    font-size: 0.8rem;
  }
  .van-ellipsis {
    color: #030303;
    font-size: 0.95rem;
    font-weight: 600;
  }
  .van-button {
    color: #837c7c;
    font-size: 0.8rem;
    font-weight: 600;
    border: none;
    background: linear-gradient(to right, #fefa58, #fcee52);
  }
}
</style>
