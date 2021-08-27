<template>
  <div class="father">
    <Sun></Sun>
    <Sun2></Sun2>
  </div>
</template>

<script>
import Sun from './Sun.vue'
import Sun2 from './Sun2.vue'
export default {
  name: 'Father',
  components: {
    Sun,
    Sun2
  }
}
</script>

<style></style>
