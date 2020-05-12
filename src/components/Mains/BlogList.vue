<template>
  <div>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <h2 class="list">博客列表</h2>
        </div>
        <div v-for="(blog ,index) in blogs" :key="index" class="text item">
          <h3 class="title">{{blog.title}}</h3>
          <p style="text-align: center"><i class="el-icon-date"></i> <span> 发表于{{blog.time}}</span> | <i class="el-icon-folder-opened"></i> 分类{{blog.classify}}</p>
            <div>
              <div class="content" v-html="md.render(blog.content)">
              </div>
              <div class="contentImg">
                <img :src=blog.img >
              </div>
            </div>
            <p style="text-align: center"><el-button class="btn" plain @click="select">查看原文 <i class="el-icon-view"></i></el-button></p>
        </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      md: window.markdownit(),
      blogs: [
        {
          classify: 'Mysql',
          title: 'MySql5.7压缩包安装方式',
          content: '## 1.在安装目录下新建my.ini文件\n\r## 2.环境变量配置\n\r## 3.安装\n\r## ...',
          time: '2020-5-1',
          img: 'https://pic.downk.cc/item/5eb28d5ac2a9a83be50d42f0.jpg'
        },
        {
          classify: 'Mybatis',
          title: 'Mybatis核心配置及注意事项',
          content: '## 1.核心配置文件\n\r## 2.静态资源过滤\n\r## ...',
          time: '2020-5-2',
          img: 'https://pic.downk.cc/item/5eb28e3bc2a9a83be50e33f5.jpg'
        },
        {
          classify: 'Spring',
          title: '初识Spring学习笔记',
          content: '## 1.常用依赖\n\r## 2.配置文件\n\r## 3.注入方式\n\r## ...',
          time: '2020-5-3',
          img: 'https://pic.downk.cc/item/5eb28edbc2a9a83be50ee90c.jpg'
        }
      ]
    }
  },
  methods: {
    select () {
      this.$router.replace('/Blog')
    }
  }
}
</script>

<style scoped>
div[class*=item] {
  box-shadow: 4px 4px 4px rgba(0, 0, 0, .22), 0 0 6px rgba(0, 0, 0, .24);
  margin-top: 20px;
}
.content, .contentImg {
  display: inline-block;

}
img {
  width: 210px;
  height: 110px;
}
.contentImg {
  float: right;
}
.content {
  margin-left: 40px;
}
.list,.title {
  text-align: center;
}
.btn {
  text-align: center;
  margin-bottom: 20px;
}
</style>
