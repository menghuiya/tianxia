<template>
  <div class="second">
    <div class="secondhead">
      <div class="head-title">闲置专区</div>
      <van-search
        class="head-search"
        v-model="value"
        shape="round"
        input-align="center"
        placeholder="请输入搜索关键词"
        :class="{ fixedsearch: isfixTab }"
        @search="onSearch"
      />
    </div>
    <release-btn></release-btn>
    <div class="box">
      <second-products :imgdata="recommend" v-if="isShow"></second-products>
    </div>
  </div>
</template>

<script>
import { request } from '@/network/request';
import { Toast } from 'vant';
import SecondProducts from '../public/ProductList';
import ReleaseBtn from './ReleaseBtn';
export default {
  data() {
    return {
      value: '',
      isfixTab: false,
      recommend: [],
      isShow: true,
    };
  },
  components: {
    SecondProducts,
    ReleaseBtn,
  },
  methods: {
    // 先分别获得id为testNavBar的元素距离顶部的距离和页面滚动的距离
    // 比较他们的大小来确定是否添加fixedNavbar样式
    handleTabFix() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // var offsetTop = document.querySelector('#pagelet_navigation').offsetTop;
      scrollTop > 46 ? (this.isfixTab = true) : (this.isfixTab = false);
    },
    onSearch(val) {
      if (val) {
        this.$router.push('/search/' + val);
      } else {
        this.$router.push('/search/' + '手机');
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleTabFix, true);
    this.isShow = false;
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      loadingType: 'spinner',
    });
    request({
      url: '/api/commodity/recommend',
      method: 'get',
    }).then((res) => {
      this.recommend = res.data.data; // 数据
      Toast.clear();
      this.isShow = true;
    });
    document.title = '闲置页面';
  },
  beforeRouteLeave(to, from, next) {
    window.removeEventListener('scroll', this.handleTabFix, true);
    next();
  },
};
</script>

<style lang="less" scoped>
.secondhead {
  position: relative;
  top: 0;
  left: 0;
  background-color: #ffe60f;
  border-radius: 2vw;
  .head-title {
    height: 12vw;
    text-align: center;
    line-height: 12vw;
    font-size: 1rem;
    background-color: #ffe60f;
  }
  .head-search {
    background: #ffe60f;
    border-radius: 2vw;
  }

  .fixedsearch {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 0;
  }
}
.box {
  margin-top: 2vw;
}
</style>
