<template>
  <div id="app">
    <el-container>
       <el-header class="header">
         <Header/>
       </el-header>
    </el-container>
    <div class="main">
      <div class="blank-left"></div>
      <div class="elmain">
        <el-container>
            <el-main>
              <Main/>
            </el-main>
            <el-aside width='300px' class="aside">
              <Aside/>
            </el-aside>
        </el-container>
      </div>
      <div class="blank-right"></div>
    </div>
    <el-container>
      <el-footer>
        <Footer/>
      </el-footer>
    </el-container>
  </div>

</template>

<script>
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'
import Footer from './components/Footer.vue'
import Main from './components/Main.vue'
export default {
  name: 'app',
  components: {
    Header,
    Aside,
    Footer,
    Main
  }
}
</script>

<style scoped>
#app {
  height: 100%;
  background-attachment:fixed;
  background-repeat:no-repeat;
  background-color: #E9EAED;
  background-size: 100% 100%;
  overflow-y: auto;
}
.header {
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 1;
  padding: 0 0;
}
.blank-left {
  width: 18%;
  height: 100%;
  position: absolute;
  left: 0;
  background-color: #E4E5E6;

}
.blank-right {
  width: 18%;
  height: 100%;
  position: absolute;
  right: 0;
  background-color: #E4E5E6;
}
.main {
  display: flex;
  justify-content: center;
  margin-top: 60px;
  overflow-y: auto;
}
.elmain {
 width: 64%;
 height: auto;
}
.aside {
  margin-right: 0%;
  height: 800px;
}
</style>
