<template>
  <div id="app">
    <el-header>
      <Header/>
    </el-header>
    <el-aside width='500px'>
      <Aside/>
    </el-aside>
    <el-main>
      <Main/>
    </el-main>
    <el-footer>
      <Footer/>
    </el-footer>
  </div>

</template>

<script>
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  components: {
    Header,
    Aside,
    Footer
  }
}
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url('./assets/images/logo.png');
  background-size: 100% 100%;
}
</style>
