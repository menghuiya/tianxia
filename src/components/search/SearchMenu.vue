<template>
  <van-sticky :offset-top="53">
    <van-dropdown-menu active-color="#ee0a24">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item title="筛选" ref="item">
        <van-switch-cell v-model="switch1" title="包邮" />
        <van-switch-cell v-model="switch2" title="团购" />
        <van-button block type="info" @click="onConfirm">确认</van-button>
      </van-dropdown-item>
    </van-dropdown-menu>
  </van-sticky>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 'a',
      switch1: true,
      switch2: false,
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
    };
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
  },
};
</script>

<style lang="less" scoped></style>
