<template>
  <div class="o-adress">
    <van-cell
      icon="location-o"
      title="收货地址"
      :value="value"
      size="large"
      is-link
      center
      @click="choseeAdress"
    />
    <van-popup v-model="show" round position="bottom">
      <van-picker
        show-toolbar
        :columns="arealist"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  props: ['list'],
  data() {
    return {
      show: false,
      loading: true,
      value: '',
    };
  },
  computed: {
    arealist() {
      let arr = [];
      if (this.list) {
        for (let item of this.list) {
          arr.push(item.area + '|' + item.phoneNum);
        }
      } else {
        arr.push('地址为空,请先添加地址');
      }
      return arr;
    },
  },
  methods: {
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
    },
    choseeAdress() {
      this.show = true;
    },
    onConfirm(value) {
      this.value = value;
      this.show = false;
      if (value == '地址为空,请先添加地址') {
        this.$router.push('/userset/address');
      } else {
        this.$emit('adress', this.value);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.o-adress {
  margin-top: 3vw;
}
</style>
