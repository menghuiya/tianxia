<template>
  <div class="img-box">
    <van-uploader
      v-model="fileList"
      multiple
      preview-size="30vw"
      max-count="9"
      :after-read="afterRead"
      @delete="delImg"
      @oversize="over"
    />
  </div>
</template>

<script>
import { request } from '@/network/request';
export default {
  data() {
    return {
      fileList: [],
      imgPath: [],
    };
  },
  methods: {
    afterRead(file) {
      let surl =
        'http://static-resource-1256396014.picnj.myqcloud.com/img/public/';
      let eurl = '/shui_ying';
      file.status = 'uploading';
      file.message = '上传中...';
      if (file.length) {
        for (let item of file) {
          let content = item.file;
          let data = new FormData();
          data.append('img', content);
          request({
            url: '/api/upload/img',
            method: 'post',
            data: data,
          })
            .then((res) => {
              let imgurl = surl + res.data.data.src + eurl;
              file.status = 'done';
              file.url = imgurl;
              file.message = '上传成功';
              this.imgPath.push(imgurl);
              this.$emit('imgChange', this.imgPath);
            })
            .catch((err) => {
              console.log(err);
              file.status = 'failed';
              file.message = '上传失败';
            });
        }
      } else {
        let content = file.file;
        let data = new FormData();
        data.append('img', content);
        request({
          url: '/api/upload/img',
          method: 'post',
          data: data,
        })
          .then((res) => {
            let imgurl = surl + res.data.data.src + eurl;
            file.status = 'done';
            file.url = imgurl;
            file.message = '上传成功';
            this.imgPath.push(imgurl);
            this.$emit('imgChange', this.imgPath);
          })
          .catch((err) => {
            console.log(err);
            file.status = 'failed';
            file.message = '上传失败';
          });
      }
    },
    delImg(file) {
      let val = file.url;
      for (let item in this.imgPath) {
        if (val == this.imgPath[item]) {
          this.imgPath.splice(item, 1);
          this.$emit('imgChange', this.imgPath);
          break;
        }
      }
    },
    over() {
      alert('文件太大');
    },
  },
};
</script>

<style lang="less" scoped>
.img-box {
  margin-left: 3vw;
}
</style>
