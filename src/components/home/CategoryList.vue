<template>
  <div class="head-cate">
    <van-grid :column-num="5" :border="false">
      <van-grid-item
        v-for="value in catedata"
        :key="value._id"
        :icon="value.imgPath"
        :text="value.kindName"
        :to="'/kind/' + value._id"
      />
    </van-grid>
  </div>
</template>

<script>
import { request } from '@/network/request';
import { Toast } from 'vant';
export default {
  data() {
    return {
      catedata: [],
    };
  },
  mounted() {
    request({
      url: '/api/commodity/kind',
      method: 'get',
    })
      .then((res) => {
        this.catedata = res.data.data; // 数据
      })
      .catch((err) => {
        Toast.fail(err.msg);
      });
  },
};
</script>

<style lang="less" scoped>
.head-cate {
  margin-top: 1vw;
  /deep/ .van-grid {
    /deep/ .van-grid-item {
      background-color: transparent;
    }
  }
}
</style>
