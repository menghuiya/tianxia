<template>
  <div class="record-box">
    <room-card
      v-for="(item, index) in saylist"
      :key="index"
      :saydata="item"
      :local_id="local_id"
    ></room-card>
  </div>
</template>

<script>
import RoomCard from './RoomCard';
export default {
  props: ['saylist', 'local_id'],
  components: {
    RoomCard,
  },
};
</script>

<style lang="less" scoped>
.record-box {
  margin: 0 3vw;
  overflow: auto;
  max-height: 75vh;
}
</style>
