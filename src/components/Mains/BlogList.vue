<template>
  <div>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <h2 class="list">博客列表</h2>
        </div>
        <div v-for="(mblog ,index) in blogs" :key="index" class="text item">
          <h3 class="title">{{mblog.title}}</h3>
          <p style="text-align: center"><i class="el-icon-date"></i> <span> 发表于{{mblog.time}}</span> | <i class="el-icon-folder-opened"></i> 分类{{mblog.classify}}</p>
            <div>
              <div class="content">
                <p v-text="mblog.content"></p>
              </div>
              <div class="contentImg">
                <img :src=mblog.img >
              </div>
            </div>
            <p style="text-align: center"><el-button class="btn" plain @click="select(mblog.id)" >查看原文 <i class="el-icon-view"></i></el-button></p>
        </div>
        <div class="block" style="text-align: center">
          <el-pagination
            layout="prev, pager, next"
            :total="total"
            :current-page="currentpage"
            @current-change="clickPage"
            >
          </el-pagination>
        </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blogs: [],
      clickId: '',
      currentpage: 0,
      total: 10
    }
  },
  methods: {
    select (id) {
      this.$router.push({
        path: '/Blog',
        query: {
          id: id
        }
      })
    },
    clickPage (page) {
      const _this = this
      this.axios({
        method: 'post',
        url: 'http://localhost:8081/getPage',
        params: {
          i: page
        }
      }).then((response) => {
        _this.blogs = response.data
      })
    }
  },
  mounted () {
    const _this = this
    this.axios({
      method: 'post',
      url: 'http://localhost:8081/getMaxPage'
    }).then((response) => {
      _this.total = response.data * 10
    })
    this.clickPage(1)
  }
}
</script>

<style scoped>
div[class*=item] {
  box-shadow: 4px 4px 4px rgba(0, 0, 0, .22), 0 0 6px rgba(0, 0, 0, .24);
  margin-top: 15px;
}
.clearfix {
  height: 20px;
}
.content, .contentImg {
  display: inline-block;
}
img {
  width: 210px;
  height: 110px;
}
.contentImg {
  vertical-align: middle;
  width: 210px;
  height: 110px;
}
.content {
  width: 580px;
  vertical-align: middle;
  height: 110px;
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
