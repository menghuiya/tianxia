<template>
  <div>
    <img class="user-poster" src="@/assets/image/user/user-bg.png" />
    <div class="user-msg">
      <user-title :userdata="userdata"></user-title>
      <user-msg-smbox :userdata="userdata"></user-msg-smbox>
      <user-msg-info></user-msg-info>
      <user-tool
        :headtitle="namesdata[0]"
        :colnum="3"
        :datas="sellimg"
      ></user-tool>
      <user-tool
        :headtitle="namesdata[1]"
        :colnum="3"
        :datas="buyimg"
      ></user-tool>
      <user-tool
        :headtitle="namesdata[2]"
        :colnum="4"
        :datas="palyimg"
      ></user-tool>
      <user-tool
        :headtitle="namesdata[3]"
        :colnum="4"
        :datas="palyimg"
      ></user-tool>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import { request } from '@/network/request';
import UserTitle from './UserTitle';
import UserMsgSmbox from './UserMsgSmbox';
import UserMsgInfo from './UserMsgInfo';
import UserTool from './UserTool';
export default {
  data() {
    return {
      namesdata: ['卖在甜虾', '买在甜虾', '玩在甜虾', '其他工具'],
      userdata: {},
      sellimg: [
        {
          id: 1,
          iconimg: require('@/assets/image/user/balance-list.png'),
          name: '我发布的',
          num: 0,
        },
        {
          id: 2,
          iconimg: require('@/assets/image/user/gold-coin.png'),
          name: '我卖出的',
          num: 0,
        },
      ],
      buyimg: [
        {
          id: 1,
          iconimg: require('@/assets/image/user/bag.png'),
          name: '我买到的',
          num: 0,
        },
        {
          id: 2,
          iconimg: require('@/assets/image/user/zu.png'),
          name: '我租到的',
          num: 0,
        },
      ],
      palyimg: [
        {
          id: 1,
          iconimg: require('@/assets/image/user/bag.png'),
          name: '我买到的',
          num: '',
        },
        {
          id: 2,
          iconimg: require('@/assets/image/user/zu.png'),
          name: '我租到的',
          num: '',
        },
        {
          id: 3,
          iconimg: require('@/assets/image/user/zu.png'),
          name: '我租到的',
          num: '',
        },
        {
          id: 4,
          iconimg: require('@/assets/image/user/zu.png'),
          name: '我租到的',
          num: '',
        },
        {
          id: 5,
          iconimg: require('@/assets/image/user/zu.png'),
          name: '我租到的',
          num: '',
        },
        {
          id: 6,
          iconimg: require('@/assets/image/user/zu.png'),
          name: '我租到的',
          num: '',
        },
        {
          id: 7,
          iconimg: require('@/assets/image/user/zu.png'),
          name: '我租到的',
          num: '',
        },
      ],
    };
  },
  components: {
    UserTitle,
    UserMsgSmbox,
    UserMsgInfo,
    UserTool,
  },
  mounted() {
    let id = JSON.parse(Cookies.get('userData')).id;
    request({
      url: '/api/user/profile/' + id,
      method: 'get',
    }).then((res) => {
      this.sellimg[0].num = res.data.data.totalCount;
      this.sellimg[1].num = res.data.data.sellCount;
      this.buyimg[0].num = res.data.data.buyCount;
      this.userdata = res.data.data;
      this.userdata.id = id;
    });
  },
};
</script>

<style lang="less" scoped>
.user-poster {
  width: 100%;
  height: 50vw;
  display: block;
  position: absolute;
  z-index: -1;
}
.user-msg {
  width: 100%;
  height: 45vw;
  display: block;
}

.user-links {
  padding: 15px 0;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
}

.user-links .van-icon {
  display: block;
  font-size: 24px;
}

.user-links .van-row {
  padding: 15px 0;
}
</style>
