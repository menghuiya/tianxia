<template>
  <van-tabs v-model="active" :sticky="true" :offset-top="46">
    <van-tab title="我的 10">
      <person-my-list
        :imgdata="comdata"
        :userinfo="user"
        v-if="comdata"
      ></person-my-list>
      <van-empty description="您还没有上架商品" v-if="comdata.length == 0" />
    </van-tab>
    <van-tab title="帖子 0">
      <van-empty
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        description="帖子为空"
      />
    </van-tab>
    <van-tab title="评价 13">
      <person-comments></person-comments>
    </van-tab>
    <van-tab title="动态 0">
      <van-empty
        class="custom-image"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        description="动态为空"
      />
    </van-tab>
  </van-tabs>
</template>

<script>
import PersonMyList from './public/ProductList';
import PersonComments from './comments/PersonComments';
export default {
  props: ['comdata', 'user'],
  data() {
    return {
      active: 0,
    };
  },
  components: {
    PersonMyList,
    PersonComments,
  },
};
</script>

<style lang="less" scoped>
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
</style>
