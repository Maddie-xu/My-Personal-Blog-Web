<template>
  <div>
      <div class="block">
        <el-carousel height="450px" >
          <el-carousel-item v-for="url in urls" :key="url" :v-bind="url">
            <img :src=url>
          </el-carousel-item>
        </el-carousel>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      urls: [
        'https://pic.downk.cc/item/5eafd709c2a9a83be5971cfe.jpg',
        'https://pic.downk.cc/item/5eafd6bdc2a9a83be596dc29.jpg',
        'https://pic.downk.cc/item/5ea11746c2a9a83be5948afc.jpg'
      ]
    }
  }
}
</script>
<style scoped>
img {
  width: 809px;
  height: 532px;
}
.block {
  width: 870px;
  margin-top: 0%;
  text-align: center;
}
</style>
