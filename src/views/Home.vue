<template>
  <div >
      <div class="home">
        <div class="blank-left"></div>
        <div class="elmain">
          <el-container>
              <el-main style="padding-top: 0px;">
                <Main/>
              </el-main>
              <el-aside width='300px' class="aside">
                <Aside/>
              </el-aside>
          </el-container>
        </div>
        <div class="blank-right"></div>
      </div>
      <div>
        <el-container>
          <el-footer class="footer">
            <Footer/>
          </el-footer>
        </el-container>
      </div>
  </div>
</template>
<script>
import Main from '../components/Main'
import Aside from '../components/Aside'
import Footer from '../components/Footer.vue'
export default {
  components: {
    Main,
    Aside,
    Footer
  }
}
</script>

<style scoped>
.blank-left {
  width: 18%;
  height: 100%;
  height: auto;
  position: absolute;
  left: 0;
  background-color: #E4E5E6;

}
.blank-right {
  width: 18%;
  height: 100%;
  height: auto;
  position: absolute;
  right: 0;
  background-color: #E4E5E6;
}
.home {
  display: flex;
  justify-content: center;
  margin-top: 60px;
  overflow-y: auto;
}
.elmain {
 width: 64%;
 margin-top: 15px;
 height: auto;
}
.aside {
  margin-right: 0%;
  height: 800px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.footer {
  width: 100%;
}
</style>
