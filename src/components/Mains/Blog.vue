<template>
  <div class="blog" v-html="md.render(data.blog)">
  </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      data: [],
      md: require('markdown-it')()
    }
  },
  mounted () {
    this.axios({
      methods: 'get',
      url: 'api/test'
    }).then((response) => {
      console.log(response.data)
      this.data = response.data
    })
  }
}
</script>

<style scoped>
.blog {
  background-color: #E8EBEB;
}
</style>
