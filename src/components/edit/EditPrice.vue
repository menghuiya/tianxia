<template>
  <div>
    <van-field
      readonly
      clickable
      left-icon="gold-coin"
      right-icon="arrow"
      input-align="right"
      label="出售价格"
      error
      :value="values"
      @touchstart.native.stop="show = true"
    />
    <van-number-keyboard
      v-model="value"
      theme="custom"
      close-button-text="完成"
      extra-key="."
      :show="show"
      :maxlength="9"
      @blur="priceInput"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      value: '',
    };
  },
  computed: {
    values() {
      if (this.value.length > 0) {
        return '¥' + this.value;
      }
      return this.value;
    },
  },
  methods: {
    priceInput() {
      this.show = false;
      this.$emit('priceChange', this.value);
    },
  },
};
</script>

<style lang="less" scoped>
.van-field {
  font-size: 0.8rem;
  background: transparent;
  /deep/.van-icon {
    font-size: 1rem;
    color: #a7a4a4;
  }
  /deep/ .van-field__control {
    font-weight: 600;
  }
}
</style>
