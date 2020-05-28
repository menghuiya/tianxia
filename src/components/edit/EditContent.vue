<template>
  <van-field
    v-model="content_c"
    rows="1"
    type="textarea"
    placeholder="品牌型号,新旧程度,入手渠道,转手原因..."
    @input="contInput"
  />
</template>

<script>
export default {
  props: ['content'],
  data() {
    return {
      content_c: this.content,
      autosize: {
        maxHeight: 160,
        minHeight: 120,
      },
    };
  },
  methods: {
    contInput(value) {
      this.content_c = value;
      this.$emit('contchange', this.content_c);
    },
  },
};
</script>

<style lang="less" scoped>
.van-field {
  background: transparent;
  font-size: 0.8rem;
  min-height: 35vw !important;
  max-height: 35vw !important;
}
</style>
