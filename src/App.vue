<template>
  <div id="app">
    <app-download></app-download>
    <keep-alive include="Home,Second">
      <router-view />
    </keep-alive>

    <tab-bar v-if="isLoad"></tab-bar>
  </div>
</template>
<script>
import { debounceFactory } from './tools';
import TabBar from './components/tabbar/tabbar';
import AppDownload from './components/public/download';
export default {
  components: {
    TabBar,
    AppDownload,
  },
  created() {
    const debounce = debounceFactory(100);
    window.addEventListener('resize', () => {
      debounce(() => {
        document.documentElement.style.fontSize =
          document.documentElement.clientWidth / 20 + 'px';
      });
    });
  },
  computed: {
    isLoad() {
      let url = this.$route.path;
      if (
        url === '/home' ||
        url === '/user' ||
        url === '/second' ||
        url === '/message'
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
@import './assets/css/base.css';
</style>
