<template>
  <van-sticky>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
  </van-sticky>
</template>

<script>
export default {
  props: ['keyword'],
  data() {
    return {
      value: this.keyword,
    };
  },
  methods: {
    onSearch(val) {
      this.$emit('newkey', val);
    },
    onCancel() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="less" scoped></style>
