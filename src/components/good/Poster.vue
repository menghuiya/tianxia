<template>
  <div>
    <div class="main">
      <!-- 海报 html 元素 -->
      <div id="posterHtml" class="poster-box" ref="selfReport">
        <div class="posterHtml">
          <div v-if="goodinfo">
            <div class="goodimg">
              <img :src="goodinfo.imgPath[0]" />
            </div>
            <div class="posterklass">
              {{ goodinfo.description.substr(0, 31) }}...
            </div>
            <div class="poster-user">
              <van-icon name="ellipsis" />
              BY
              <img
                class="post-userimg"
                :src="goodinfo.user.headImg + '?' + new Date().getTime()"
                crossOrigin="anonymous"
              />
              <div class="post-username">
                {{ goodinfo.user.userName }}
              </div>
            </div>
          </div>

          <!-- 二维码 -->
          <div class="code-box">
            <div class="code-tps">
              <img src="@/assets/image/good/codeqr.png" />
              <div>
                <p>长按识别二维码查看详情</p>
                <p>来自《 <span>甜虾二手交易平台</span> 》</p>
              </div>
            </div>
            <div id="qrcodeImg" class="imgcode"></div>
          </div>
        </div>
      </div>
      <van-popup
        class="showimg-box"
        position="bottom"
        v-model="imgboxshow"
        :safe-area-inset-bottom="true"
      >
        <div class="myCanvas">
          <img :src="imgUrl" alt="" />
          <div class="showimg-tps">
            ↑长按上图保存图片,分享好友或者朋友圈
          </div>
          <div class="close-show">
            <van-icon
              name="clear"
              size="40"
              @click="closeshow"
              color="#ffffff"
            />
          </div>
        </div>
      </van-popup>
      <div class="buidbtn" @click="buildPoster">
        <van-icon class="btn-icon" name="qr" color="#ffffff" size="22" />
        <div class="btn-text">海报</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import html2canvas from 'html2canvas';
import { qrcanvas } from 'qrcanvas';
export default {
  props: ['goodinfo'],
  data() {
    return {
      imgboxshow: false,
      isShow: false,
      posterHtmlBg: require('@/assets/image/good/poterbg.png'),
      imgUrl: '', //最后转化出来的图片base64地址,
      codeImgSrc: '',
      postcode: false,
    };
  },
  computed: {
    good_id() {
      return this.$route.params.good_id;
    },
  },

  methods: {
    buildPoster() {
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0, // 持续展示 toast
      });
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      //生成一个二维码 data是二维码跳转的地址（写自己需要跳转的地址即可）4
      let num = document.getElementById('qrcodeImg').childElementCount;
      if (num == 0) {
        const canvas = qrcanvas({
          data: location.href,
          size: 80,
        });
        // document.getElementById('qrcodeImg').removeChild(canvas);

        document.getElementById('qrcodeImg').appendChild(canvas);
        this.getPoster();
      } else {
        //点击生成canvas转换成base64的图片
        this.getPoster();
      }
    },
    getPoster() {
      let shareContent = this.$refs.selfReport; //需要截图的包裹的（原生的）DOM 对象
      let width = shareContent.offsetWidth; //获取dom 宽度
      let height = shareContent.offsetHeight; //获取dom 高度
      let canvas = document.createElement('canvas'); //创建一个canvas节点
      let scale = 1; //定义任意放大倍数 支持小数
      canvas.width = width * scale; //定义canvas 宽度 * 缩放
      canvas.height = height * scale; //定义canvas高度 *缩放
      canvas.getContext('2d').scale(scale, scale); //获取context,设置scale
      let opts = {
        scale: scale, // 添加的scale 参数
        canvas: canvas, //自定义 canvas
        // logging: true, //日志开关，便于查看html2canvas的内部执行流程
        width: width, //dom 原始宽度
        height: height,
        useCORS: true, // 【重要】开启跨域配置
        backgroundColor: null,
      };

      html2canvas(shareContent, opts).then((canvas) => {
        var context = canvas.getContext('2d');
        // 【重要】关闭抗锯齿
        context.mozImageSmoothingEnabled = false;
        context.webkitImageSmoothingEnabled = false;
        context.msImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;

        // 【重要】默认转化的格式为png,也可设置为其他格式
        let imgUrl = canvas.toDataURL('image/png');
        this.imgUrl = imgUrl;
        Toast.clear();
        this.imgboxshow = true;
      });
    },
    closeshow() {
      this.imgboxshow = false;
    },
  },
};
</script>

<style lang="less" scoped>
.poster-box {
  background: #ffffff;
  border-radius: 2vw;
  overflow: hidden;
  z-index: -9999;
  position: absolute;
  left: 2vw;
  top: 0;
  min-height: 120vw;
  width: 94vw;
  margin: 0 auto;
  .goodimg {
    width: 100%;
    height: 60vw;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .posterklass {
    margin: 2vw 3vw;
    font-weight: 600;
    color: #000000;
    min-height: 50px;
  }
  .poster-user {
    display: flex;
    align-items: center;
    color: #c8c9cc;
    margin: 0 3vw;
    font-size: 0.8rem;
    .van-icon {
      flex: 1;
    }
    .post-userimg {
      height: 10vw;
      width: 10vw;
      border-radius: 5vw;
      margin: 0 1.5vw;
    }
    .post-username {
      color: #19be6b;
    }
  }
  .code-box {
    display: flex;
    margin: 2vw 3vw;
    .code-tps {
      flex: 1;
      display: flex;
      align-items: center;
      img {
        width: 16vw;
        height: 16vw;
      }
      div {
        font-size: 0.8rem;
        color: #c8c9cc;
        span {
          color: #ff9900;
        }
      }
    }
    .imgcode {
      margin-right: 3vw;
      margin-top: 2vw;
    }
  }
}
.showimg-box {
  background: transparent;
  .myCanvas {
    text-align: center;
    img {
      height: 120vw;
      width: 94vw;
      border-radius: 5vw;
    }
    .showimg-tps {
      color: #ffffff;
      margin-top: 2vw;
      font-size: 14px;
      text-align: center;
    }
    .close-show {
      text-align: center;
      margin-top: 15vw;
      margin-bottom: 5vw;
    }
  }
}
.buidbtn {
  background: rgba(20, 20, 20, 0.705);
  width: 13vw;
  height: 13vw;
  border-radius: 50%;
  text-align: center;
  position: fixed;
  right: 6vw;
  bottom: 40vw;
  .btn-icon {
    margin-top: 1vw;
    vertical-align: middle;
  }
  .btn-text {
    font-size: 12px;
    color: #ffffff;
  }
}
</style>
