<template>
  <div class="p-head" :class="{ isscolor: isScollo }">
    <van-nav-bar
      :title="title"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      :border="false"
      fixed
      placeholder
      z-index="9999"
    >
      <template #left>
        <van-icon name="arrow-left" size="1.5rem" />
      </template>
      <template #right>
        <van-icon name="qr" size="1.5rem" />
        <van-icon name="ellipsis" size="1.5rem" />
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
import { Toast } from 'vant';

export default {
  data() {
    return {
      title: '',
      isScollo: false,
    };
  },
  methods: {
    onClickLeft() {
      if (!this.goHome) {
        this.$router.back();
      } else {
        this.$router.push('/home');
      }
    },
    onClickRight() {
      Toast('按钮');
    },
    handleTabFix() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // var offsetTop = document.querySelector('#pagelet_navigation').offsetTop;
      // scrollTop > 46 ? (this.isScollo = true) : (this.isScollo = false);
      if (scrollTop > 46) {
        this.isScollo = true;
        this.title = '甜虾号';
      } else {
        this.isScollo = false;
        this.title = '';
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleTabFix, true);
  },
  beforeRouteLeave(to, from, next) {
    window.removeEventListener('scroll', this.handleTabFix, true);
    next();
  },
};
</script>

<style lang="less" scoped>
.p-head {
  /deep/ .van-nav-bar {
    background-color: transparent;
    .van-icon {
      color: #ffffff;
    }
  }
}

.isscolor {
  /deep/ .van-nav-bar {
    background-color: #ffffff;
    .van-ellipsis {
      font-size: 1rem;
      font-weight: 700;
    }
    .van-icon {
      color: #030303;
    }
  }
}
</style>
