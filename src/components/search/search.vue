<template>
  <div>
    <search-head :keyword="keyword" @newkey="newkey"></search-head>
    <search-menu></search-menu>
    <search-list
      :imgdata="searchdata"
      v-if="isShow && searchdata.length > 0"
    ></search-list>
    <van-empty
      image="search"
      v-if="isShow && searchdata.length == 0"
      description="推荐商品为空"
    />
  </div>
</template>

<script>
import { request } from '@/network/request';
import { Toast } from 'vant';
import SearchHead from './SearchHead';
import SearchMenu from './SearchMenu';
import SearchList from '../public/ProductList';
export default {
  data() {
    return {
      searchdata: [],
      keyword: this.$route.params.keyword,
      isShow: true,
    };
  },
  methods: {
    newkey(key) {
      this.keyword = key;
      this.$router.push('/search/' + key);
    },
    getData() {
      this.isShow = false;
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        loadingType: 'spinner',
      });
      request({
        url: '/api/commodity/search/' + this.keyword,
        method: 'get',
      }).then((res) => {
        this.searchdata = res.data.data; // 数据
        Toast.clear();
        this.isShow = true;
      });
    },
  },
  components: {
    SearchHead,
    SearchMenu,
    SearchList,
  },
  mounted() {
    this.getData();
  },
  watch: {
    $route() {
      //监听路由是否变化
      if (this.$route.params.keyword) {
        this.getData();
      }
    },
  },
};
</script>

<style lang="less" scoped></style>
