<template>
  <div>
    <van-nav-bar
      :title="userdata.userName"
      @click-right="onClickRight"
      v-if="isScollo"
      fixed
      :placeholder="true"
    >
      <template #right>
        <van-icon name="setting-o" size="1rem" />
      </template>
    </van-nav-bar>

    <van-nav-bar
      @click-right="onClickRight"
      style="background: transparent;"
      :border="false"
      v-else
    >
      <template #right>
        <van-icon name="setting-o" size="1.5rem" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  props: ['userdata'],
  data() {
    return {
      user_title: '',
      isScollo: false,
    };
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      this.$router.push('/userset');
    },
    // 先分别获得id为testNavBar的元素距离顶部的距离和页面滚动的距离
    // 比较他们的大小来确定是否添加fixedNavbar样式
    handleTabFix() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // var offsetTop = document.querySelector('#pagelet_navigation').offsetTop;
      scrollTop > 46 ? (this.isScollo = true) : (this.isScollo = false);
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
/deep/ .van-nav-bar {
  background: #ffff00;
  /deep/ .van-ellipsis {
    font-weight: 700;
  }
  .van-icon {
    color: black;
    font-weight: 700;
  }
}
</style>
