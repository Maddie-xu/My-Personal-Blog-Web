<template>
  <div style="margin-top: 60px; background-color: #FFFFFF; ">
    <div class="updata">
      <el-button type="primary" id="fileImport" @click="clickLoad">上传文件</el-button>
      <input type="file" id="files" ref="refFile" style="display: none" @change="fileLoad">
    </div>
    <div style="text-align: center;">
      <div class="content">
        <span>{{content}}</span>
      </div>
    </div>
    <div style="text-align: center; ">
      <div class="inputs">
        <p>
        <span>分类 </span>
        <el-input class="input" v-model="classify" placeholder="请输入文章分类"></el-input>
      </p>
      <p>
        <span>标题 </span>
        <el-input class="input" v-model="title" placeholder="请输入文章标题"></el-input>
      </p>
      <p>
        <span>时间 </span>
        <el-input class="input" v-model="time" placeholder="请输入发布时间"></el-input>
      </p>
      <p>
        <span>图片 </span>
        <el-input class="input" v-model="imgUrl" placeholder="请输入图片地址"></el-input>
      </p>
      <el-button type="primary" >上传博客</el-button>
      </div>
      <img :src=imgUrl>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import statcidata from '../statcidata'
export default {
  beforeRouteEnter (to, from, next) {
    axios({
      method: 'post',
      url: 'http://localhost:8081/login',
      params: {
        username: statcidata.username,
        password: statcidata.password
      }
    }).then(function (response) {
      if (response.data === 'ok') {
        next()
      } else {
        alert('登录失败')
        next('/Login')
      }
    })
  },
  data () {
    return {
      content: '请上传类容',
      classify: '',
      title: '',
      imgUrl: ''
    }
  },
  computed: {
    time: function () {
      const time = new Date()
      const y = time.getFullYear()
      let m = time.getMonth() + 1
      let d = time.getDate()
      m = m < 10 ? `0${m}` : m
      d = d < 10 ? `0${d}` : d
      return `${y}-${m}-${d}`
    }
  },
  methods: {
    clickLoad () {
      this.$refs.refFile.dispatchEvent(new MouseEvent('click'))
    },
    fileLoad () {
      const selectedFile = this.$refs.refFile.files[0]
      var reader = new FileReader()
      reader.readAsText(selectedFile)
      const _this = this
      reader.onload = function (result) {
        _this.content = result.target.result
        console.log(_this.content)
      }
    }
  }
}
</script>

<style scoped>
img {
  width: 210px;
  height: 110px;
}
p {
  text-align: center;
}
.inputs {
  display: inline-block;
  width: 900px;
  height: 400px;
}
.input {
  width: 400px;
}
.updata {
  text-align: center;
}
.content {
  width: 900px;
  height: 400px;
  display: inline-block;
  margin-top: 10px;
  border-radius: 8px;
  border-color: #C3C4C4;
  border-style: solid;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
}

</style>
