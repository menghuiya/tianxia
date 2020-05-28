<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="waterfull">
      <div class="column">
        <product-card
          v-for="(item, index) in col1"
          :key="index"
          :imginfo="item"
          :userinfo="userinfo"
        ></product-card>
      </div>
      <div class="column">
        <product-card
          v-for="(item, index) in col2"
          :key="index"
          :imginfo="item"
          :userinfo="userinfo"
        ></product-card>
      </div>
    </div>
    <!-- <van-row>
      
    </van-row> -->
  </van-pull-refresh>
</template>

<script>
import ProductCard from './ProductCard';
import { Toast } from 'vant';
export default {
  props: ['imgdata', 'userinfo'],
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    ProductCard,
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
  computed: {
    col1() {
      let col = [];
      for (let i = 0; i < this.imgdata.length; i += 2) {
        let good = this.imgdata[i];
        col.push(good);
      }
      return col;
    },
    col2() {
      let col = [];
      for (let i = 1; i < this.imgdata.length; i += 2) {
        col.push(this.imgdata[i]);
      }
      return col;
    },
  },
};
</script>

<style lang="less" scoped>
.waterfull {
  display: flex;
  min-height: 100%;
  display: -webkit-flex;
  margin: 0 1vw;
  .column {
    flex-grow: 1;
    padding: 1vw;
    min-height: 100%;
    flex: 1;
  }
}
</style>
