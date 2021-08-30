<template>
  <div>
    <h1>我是MessageChildren</h1>
    <!-- {{ message }} -->
    {{ $route.query.message }}
  </div>
</template>

<script>
export default {
  //   props: ['message'],
  mounted () {
    console.log(this.$route)
    console.log(this.$router)
  }
}
</script>

<style></style>
