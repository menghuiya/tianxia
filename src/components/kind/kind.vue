<template>
  <div>
    <kind-head></kind-head>
    <kind-list
      :imgdata="datalist"
      v-if="isShow && datalist.length > 0"
    ></kind-list>
    <van-empty v-if="isShow && datalist.length == 0" description="分类商品为空">
      <van-button round type="danger" class="bottom-button" @click="backHome">
        返回上一页
      </van-button>
    </van-empty>
  </div>
</template>

<script>
import { request } from '@/network/request';
import { Toast } from 'vant';
import KindHead from './KindHead';
import KindList from '../public/ProductList';
export default {
  data() {
    return {
      kind_id: this.$route.params.kind_id,
      datalist: [],
      isShow: true,
    };
  },
  components: {
    KindHead,
    KindList,
  },
  mounted() {
    this.isShow = false;
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      loadingType: 'spinner',
    });
    request({
      url: '/api/commodity/classification/' + this.kind_id,
      method: 'get',
    }).then((res) => {
      this.datalist = res.data.data; // 数据
      Toast.clear();
      this.isShow = true;
    });
  },
  methods: {
    backHome() {
      this.$router.back();
    },
  },
};
</script>

<style lang="less" scoped>
.bottom-button {
  width: 30vw;
}
</style>
