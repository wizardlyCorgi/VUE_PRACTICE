<template>
  <div class="panel-body">
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
  name: 'About',
  mounted () {
    console.log(this.$router)
    console.log(this.$route)
  }
}
</script>
