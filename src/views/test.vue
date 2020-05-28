<template>
  <div>
    <div class="waterfull">
      <div class="column">
        <div class="good" v-for="(good, index) in col1" :key="index">
          <div class="good-image">
            <img :src="good" alt="" />
          </div>
          <div class="van-multi-ellipsis--l2 shoptitle">
            这是一段最多显示两行的商品信息，多余的内容会被省略多余的内容会被省略
          </div>
          <div class="p-price-box">
            <div class="p-price">
              <span>¥</span>{{ Math.floor(Math.random() * 10000) }}
            </div>
            <div class="p-want">
              {{ Math.floor(Math.random() * 100) }}人想要
            </div>
          </div>
          <div class="p-user">
            <img src="@/assets/image/avator/1.jpg" class="p-user-img" />
            <div class="p-user-name">梦回&小冉</div>
            <div class="p-user-tag">
              <van-tag color="#7232dd" size="medium" plain>超级卖家</van-tag>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="good" v-for="(good, index) in col2" :key="index">
          <div class="good-image">
            <img :src="good" alt="" />
          </div>
          <div class="van-multi-ellipsis--l2 shoptitle">
            这是一段最多显示两行的商品信息，多余的内容会被省略多余的内容会被省略
          </div>
          <div class="p-price-box">
            <div class="p-price">
              <span>¥</span>{{ Math.floor(Math.random() * 10000) }}
            </div>
            <div class="p-want">
              {{ Math.floor(Math.random() * 100) }}人想要
            </div>
          </div>
          <div class="p-user">
            <img src="@/assets/image/avator/1.jpg" class="p-user-img" />
            <div class="p-user-name">梦回&小冉</div>
            <div class="p-user-tag">
              <van-tag color="#7232dd" size="medium" plain>超级卖家</van-tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: [
        'http://test.wdf5.com/public/uploadImgs/upload_1589002683759.jpg',
        'http://test.wdf5.com/public/uploadImgs/upload_1589025941593.jpg',
        'http://test.wdf5.com/public/uploadImgs/upload_1589025941593.jpg',
        'http://test.wdf5.com/public/uploadImgs/upload_1589002683759.jpg',
        'http://test.wdf5.com/public/uploadImgs/upload_1589025941593.jpg',
        'http://test.wdf5.com/public/uploadImgs/upload_1589002683759.jpg',
        'http://test.wdf5.com/public/uploadImgs/upload_1589025941593.jpg',
        'http://test.wdf5.com/public/uploadImgs/upload_1589002683759.jpg',
        'http://test.wdf5.com/public/uploadImgs/upload_1589025941593.jpg',
        'http://test.wdf5.com/public/uploadImgs/upload_1589002683759.jpg',
        'http://test.wdf5.com/public/uploadImgs/upload_1589025941593.jpg',
        'http://test.wdf5.com/public/uploadImgs/upload_1589025941593.jpg',
        'http://test.wdf5.com/public/uploadImgs/upload_1589002683759.jpg',
        'http://test.wdf5.com/public/uploadImgs/upload_1589025941593.jpg',
        'http://test.wdf5.com/public/uploadImgs/upload_1589002683759.jpg',
        'http://test.wdf5.com/public/uploadImgs/upload_1589002683759.jpg',
      ],
    };
  },
  computed: {
    col1() {
      var col = [];
      for (var i = 0; i < this.goods.length; i += 2) {
        var good = this.goods[i];
        col.push(good);
      }
      return col;
    },
    col2() {
      var col = [];
      for (var i = 1; i < this.goods.length; i += 2) {
        col.push(this.goods[i]);
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
}

.column {
  flex-grow: 1;
  padding: 10px;
  min-height: 100%;
  flex: 1;
}

.good {
  margin-bottom: 10px;
}

.good-image {
  background-color: #fff;
  border-radius: 8px;
  max-height: 50vw;
  min-height: 40vw;
  img {
    width: 100%;
    // height: 100%;
  }
}

.good-title {
  color: #ffffff;
}
.p-price-box {
  margin-top: 3vw;
  margin-left: 2vw;
  display: flex;
  .p-price {
    color: red;
    font-size: 0.8rem;
    font-weight: 700;
    flex: 1;
    span {
      font-size: 0.5rem;
      display: inline-block;
      margin-left: 1vw;
      margin-right: 2vw;
    }
  }
  .p-want {
    font-size: 0.5rem;
    color: #89878a;
    margin-right: 2vw;
  }
}
.p-user {
  display: flex;
  height: 8vw;
  margin-left: 2vw;
  .p-user-img {
    width: 6vw;
    height: 6vw;
    margin-top: 1vw;
    border-radius: 3vw;
  }
  .p-user-name {
    font-size: 0.5rem;
    color: #9d99a1;
    line-height: 8vw;
    margin-left: 2vw;
    flex: 1;
  }
  .p-user-tag {
    margin-right: 2vw;
    line-height: 8vw;
    .van-tag {
      height: 4vw;
      font-size: 0.5rem;
    }
  }
}
</style>
