<template>
  <div class="home">
    <div class="homehead">
      <div class="head-title">首页</div>
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
    <swiper-loop></swiper-loop>
    <category-list></category-list>
    <div class="box">
      <new-products :imgdata="recommend" v-if="recommend"></new-products>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { request } from '@/network/request';
import CategoryList from './CategoryList';
import SwiperLoop from './SwiperLoop';
import NewProducts from '../public/ProductList';
export default {
  name: 'Home',
  data() {
    return {
      value: '',
      isfixTab: false,
      recommend: [],
    };
  },
  components: {
    SwiperLoop,
    CategoryList,
    NewProducts,
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
      console.log(val);
      this.$router.push('/search/' + val);
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleTabFix, true);
    request({
      url: '/api/commodity/recommend',
      method: 'get',
    }).then((res) => {
      this.recommend = res.data.data; // 数据
    });
  },
  beforeRouteLeave(to, from, next) {
    window.removeEventListener('scroll', this.handleTabFix, true);
    next();
  },
};
</script>

<style lang="less" scoped>
.homehead {
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
