<template>
  <div id="app">
    <el-container>
       <el-header class="header">
         <Header/>
       </el-header>
    </el-container>
    <router-view></router-view>
  </div>

</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'app',
  components: {
    Header
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
  z-index: 100;
  padding: 0 0;
}
</style>
