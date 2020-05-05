<template>
  <div class="aside">
    <Introduce></Introduce>
      <el-divider><i class="thumbs up outline icon"></i></el-divider>
      <Tags></Tags>
      <el-divider><i class="hand peace outline icon"></i></el-divider>
      <div>
      </div>
  </div>
</template>

<script>
import Introduce from './Asides/Introduce'
import Tags from './Asides/Tags'
export default {
  components: {
    Introduce,
    Tags
  }
}
</script>

<style  scoped>
.aside {
  /* margin-left: 200px; */
  border-radius: 4px;
  overflow-y: auto;
  background-color: #FFFFFF;
}
</style>
