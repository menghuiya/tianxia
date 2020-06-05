<template>
  <div v-if="msgdata">
    <router-link
      :to="'/room/' + msgdata._id + '_' + user_id"
      tag="div"
      class="m-c-box"
    >
      <img class="m-c-user-img" :src="msgdata.headImg" />
      <div class="m-c-user-info">
        <div class="user-info-name">{{ msgdata.userName }}</div>
        <div class="user-info-message van-ellipsis">
          请点击后查看详细信息
        </div>
        <!-- <div class="user-info-date">5天前</div> -->
      </div>
      <!-- <img
      class="m-c-goodimg"
      src="http://test.wdf5.com/public/uploadImgs/upload_1589506822260.jpg"
    /> -->
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['msgdata', 'user_id'],
};
</script>

<style lang="less" scoped>
.m-c-box {
  display: flex;
  padding: 3vw 0;
  border-bottom: 0.01rem solid #ece9e9;
  .m-c-user-img {
    height: 10vw;
    width: 10vw;
    border-radius: 2vw;
  }
  .m-c-user-info {
    flex: 1;
    margin-left: 3vw;
    .user-info-name {
      font-size: 0.8rem;
      font-weight: 600;
    }
    .user-info-message {
      font-size: 0.75rem;
      color: #c4c2c4;
      width: 40vw;
    }
    .user-info-date {
      font-size: 0.5rem;
      color: #9a9a9bf3;
      margin-top: 2vw;
    }
  }
  .m-c-goodimg {
    width: 15vw;
    height: 15vw;
  }
}
</style>
