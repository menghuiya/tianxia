<template>
  <div class="o-box">
    <van-card
      :price="g_data.commodity.price.toFixed(2)"
      :title="g_data.commodity.description"
      :desc="'购买者:' + g_data.buyerId.userName"
      :thumb="g_data.commodity.imgPath[0]"
    >
      <template #footer>
        <van-tag class="statutext" v-if="g_data.status == 1" color="#7232dd">
          买家收货中
        </van-tag>
        <van-tag class="statutext" v-if="g_data.status == 2" color="#f2826a">
          买家评价中
        </van-tag>
        <van-tag class="statutext" v-if="g_data.status == 3" color="#19be6b">
          交易已完成!关闭订单
        </van-tag>
        <van-button size="small" round v-if="g_data.status == 1">
          查看物流
        </van-button>
        <van-button
          size="small"
          v-if="isdeliver"
          round
          type="info"
          @click="sureDelive"
        >
          确认发货
        </van-button>
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  props: ['g_data'],
  computed: {
    isdeliver() {
      if (this.g_data.status == 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    sureDelive() {
      this.$emit('delive', this.g_data._id);
    },
  },
};
</script>

<style lang="less" scoped>
.o-box {
  background-color: #ffffff;
  border-radius: 2vw;
  overflow: hidden;
  margin: 2vw;
  /deep/ .van-card {
    background-color: #ffffff;
    .van-card__title {
      font-size: 0.8rem;
    }
    .van-card__price {
      color: red;
    }
    .van-button {
      width: 20vw;
      height: 4vh;
    }
    .statutext {
      margin-right: 3vw;
    }
  }
}
</style>
