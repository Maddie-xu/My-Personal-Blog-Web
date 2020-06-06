<template>
  <div class="blog" v-if="data" v-html="md.render(data.blog)">
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      data: null,
      md: window.markdownit()
    }
  },
  mounted () {
    var blogId = this.$route.query.id
    this.axios({
      method: 'post',
      url: 'http://localhost:8081/getBlog',
      params: {
        id: blogId
      }
    }).then((response) => {
      this.data = response.data
    })
  }
}
</script>

<style scoped>
.blog {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  padding: 20px;
}
</style>
