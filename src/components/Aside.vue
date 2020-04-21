<template>
  <div class="aside">
      <h3 class="h3">热爱编程 热爱知识 拥抱开源</h3>
      <h5 class="h3">我将在这么分享我所学的知识 我所遇到的bug</h5>
      <el-divider><i class="thumbs up outline icon"></i></el-divider>
      <div class="ui gray labels" >
        <ul class="label">
          <li> <a class="ui label">Java <i class="coffee icon"></i> <div class="detail">666</div></a></li>
          <li> <a class="ui label">Android <i class="android icon"></i> <div class="detail">666</div></a></li>
          <li> <a class="ui label">Vue <i class="vuejs icon"></i> <div class="detail">666</div></a></li>
        </ul>
      </div>
      <el-divider><i class="hand peace outline icon"></i></el-divider>
      <div>
        <h4>我的仓库：<a href="https://github.com/Maddie-xu"><i class="github icon"></i></a></h4>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.aside {
  margin-left: 200px;
  margin-top: 100px;
  border-radius: 4px;
  height: 500px;
  box-shadow: 0 2px 4px rgba(151, 147, 147, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: rgb(163, 161, 161);
}
.h3 {
  color: #ffffff;
  text-align: center;
  font-weight: 300;
  margin-top: 20px;
}
.label {
  margin:5px;
}
h4 {
  color: #FFFFFF;
  text-align: center;
}
</style>
