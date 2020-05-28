<template>
  <div>
    <van-field
      readonly
      clickable
      name="picker"
      left-icon="todo-list"
      right-icon="arrow"
      input-align="right"
      :value="value"
      label="商品分类"
      placeholder="点击选择分类"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
        value-key="kindName"
        title="商品分类"
      />
    </van-popup>
  </div>
</template>

<script>
import { request } from '@/network/request';
import { Toast } from 'vant';
export default {
  data() {
    return {
      value: '',
      kind_id: '',
      columns: [],
      showPicker: false,
    };
  },
  methods: {
    onConfirm(value) {
      this.value = value.kindName;
      this.kind_id = value._id;
      this.showPicker = false;
      this.$emit('kindChange', this.kind_id);
    },
  },
  mounted() {
    request({
      url: '/api/commodity/kind',
      method: 'get',
    })
      .then((res) => {
        this.columns = res.data.data; // 数据
      })
      .catch((err) => {
        Toast.fail(err.msg);
      });
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
}
</style>
