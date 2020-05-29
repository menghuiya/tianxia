<template>
  <div class="o-box">
    <van-card
      :price="g_data.commodity.price.toFixed(2)"
      :title="g_data.commodity.description"
      :desc="'发布者:' + g_data.sellerId.userName"
      :thumb="g_data.commodity.imgPath[0]"
    >
      <template #footer>
        <van-tag class="statutext" v-if="g_data.status == 0" color="#7232dd">
          卖家发货中
        </van-tag>
        <van-tag class="statutext" v-if="g_data.status == 1" color="#71d5a1">
          商品正在路上
        </van-tag>
        <van-tag class="statutext" v-if="g_data.status == 3" color="#19be6b">
          交易已完成!关闭订单
        </van-tag>
        <van-button size="small" round v-if="g_data.status == 1">
          查看物流
        </van-button>
        <van-button
          size="small"
          round
          type="primary"
          v-if="g_data.status == 1"
          @click="sureReceipt"
        >
          确认收货
        </van-button>
        <van-button
          size="small"
          round
          type="info"
          v-if="g_data.status == 2"
          @click="show = !show"
        >
          评价
        </van-button>
      </template>
    </van-card>
    <!-- 评价区域 -->
    <van-popup
      v-model="show"
      closeable
      position="bottom"
      :style="{ height: '30%' }"
    >
      <van-field
        v-model="message"
        rows="1"
        autosize
        label="评价:"
        label-width="12vw"
        type="textarea"
        placeholder="请输入对该商品的评价"
        maxlength="100"
        :show-word-limit="true"
      />
      <van-button class="postbtn" color="#7232dd" @click="surePost"
        >提交评价</van-button
      >
    </van-popup>
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  props: ['g_data'],
  data() {
    return {
      show: false,
      message: '',
    };
  },
  methods: {
    sureReceipt() {
      Dialog.confirm({
        title: '确认收货',
        message: '请确认货物是否属于正常状态',
      }).then(() => {
        this.$emit('receipt', this.g_data._id);
      });
    },
    surePost() {
      let evdata = {
        orderId: this.g_data._id,
        evaluate: this.message,
      };
      this.$emit('evaluate', evdata);
      this.show = false;
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
      margin-bottom: 1vw;
      max-height: 1.90667rem;
      line-height: 0.9rem;
    }
    .van-card__price {
      color: red;
    }
    .van-button {
      width: 20vw;
      height: 4vh;
    }
    .statutext {
      margin-right: 1vw;
    }
  }
  .van-field {
    margin: 6vw 0;
  }
  .postbtn {
    float: right;
    margin-right: 5vw;
  }
}
</style>
