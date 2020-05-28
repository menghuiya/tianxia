<template>
  <div>
    <head-title :title="title"></head-title>

    <div class="msgbox">
      <div class="manitxt">基本信息</div>

      <div class="user-group">
        <van-cell title="头像" is-link center>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #default>
            <van-uploader
              :after-read="afterRead"
              :max-size="1 * 500 * 1024"
              @oversize="onOversize"
            >
              <img class="userimg" :src="userdata.headImg" alt="" />
            </van-uploader>
          </template>
        </van-cell>

        <van-cell title="会员名" is-link :value="userdata.userName" />
        <van-cell title="性别" is-link value="男" />
        <van-cell title="生日" is-link />
        <van-cell title="常住" is-link />
        <van-cell title="简介" is-link />
        <van-cell title="行业" is-link />
        <van-cell title="职位名称" is-link />
        <van-cell title="院校名称" is-link />
        <van-cell title="喜欢的" is-link />
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import { request } from '@/network/request';
import { Toast } from 'vant';
import HeadTitle from './headtitle';
export default {
  data() {
    return {
      title: '个人资料',
      userdata: '',
    };
  },
  components: {
    HeadTitle,
  },
  methods: {
    afterRead(file) {
      Toast.loading({
        message: '上传中...',
        forbidClick: true,
        duration: 0, // 持续展示 toast
      });
      let surl =
        'https://static-resource-1256396014.cos.ap-nanjing.myqcloud.com/img/public/';
      let content = file.file;
      let headdata = new FormData();
      headdata.append('img', content);
      request({
        url: '/api/upload/img',
        method: 'post',
        data: headdata,
      })
        .then((res) => {
          let imgurl = surl + res.data.data.src;
          this.userdata.headImg = imgurl;
          let data = {
            userId: this.userdata.id,
            headImg: imgurl,
          };
          return data;
        })
        .then((data) => {
          request({
            url: '/api/user/headimg',
            method: 'put',
            data: data,
          }).then(() => {
            Toast.clear();
          });
        });
    },
    onOversize() {
      Toast('文件过大! 请上传小于500kb的头像');
    },
  },
  mounted() {
    let id = JSON.parse(Cookies.get('userData')).id;
    request({
      url: '/api/user/profile/' + id,
      method: 'get',
    }).then((res) => {
      this.userdata = res.data.data;
      this.userdata.id = id;
    });
  },
};
</script>

<style lang="less" scoped>
.msgbox {
  margin: 3vw;
  .manitxt {
    font-size: 0.7rem;
    color: #949797;
    margin-top: 4vw;
    margin-left: 2vw;
  }
  .user-group {
    border-radius: 4vw;
    overflow: hidden;
    margin-top: 2vw;
    .userimg {
      width: 14vw;
      height: 14vw;
      border-radius: 3vw;
    }
  }
}
</style>
