<template>
  <div class="header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的博客</template>
        <el-menu-item index="2-1">博客1</el-menu-item>
        <el-menu-item index="2-2">博客2</el-menu-item>
        <el-menu-item index="2-3">博客3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">博客4</template>
          <el-menu-item index="2-4-1">没写完</el-menu-item>
          <el-menu-item index="2-4-2">你瞅啥？</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.baidu.com" target="_blank">友情链接</a></el-menu-item>
    </el-menu>
    <h1 class="wtmb">Welcome to my blog</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }

}
</script>

<style scoped>
.el-menu-demo {
  margin:0;
  padding:0;
}
.el-menu.el-menu--horizontal {
    border-bottom: solid 0px;

}
.wtmb {
  color: #FFFFFF;
  text-align: center;
}
</style>
