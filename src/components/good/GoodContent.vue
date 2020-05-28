<template>
  <div class="p-content-box">
    <div class="p-c-text">
      {{ des }}
    </div>
    <div class="p-c-img">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in imgPath"
        :key="index"
        @click="imgClick(index)"
      />
    </div>
    <div class="p-c-data">
      <div class="p-c-data-dan">
        <van-icon name="alipay" size="0.9rem" color="#00a2ff" />
        <span>担保交易</span>
      </div>
      <span class="p-c-data-want">5人想要</span>·
      <span class="p-c-data-views">浏览390</span>
    </div>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
export default {
  props: ['des', 'imgPath'],
  data() {
    return {
      imgdata: [
        require('@/assets/image/good/test.jpg'),
        require('@/assets/image/good/test1.jpg'),
      ],
    };
  },
  methods: {
    imgClick(start) {
      ImagePreview({
        images: this.imgPath,
        startPosition: start,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.p-content-box {
  margin-top: 5vw;
  .p-c-text {
    font-size: 1rem;
  }
  .p-c-img {
    border-radius: 3vw;
    margin: 2vw 0;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .p-c-data {
    display: flex;
    font-size: 0.6rem;
    color: #c4c4c4;
    .p-c-data-dan {
      color: #00a2ff;
      margin-left: 1vw;
      flex: 1;
      .van-icon {
        vertical-align: middle;
        margin-right: 1vw;
      }
    }
    .p-c-data-want {
      margin-right: 1vw;
    }
    .p-c-data-views {
      margin-left: 1vw;
      margin-right: 1vw;
    }
  }
}
</style>
