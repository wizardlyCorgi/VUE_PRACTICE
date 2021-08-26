<template>
  <div class="item">
    <h1 class="title">{{ title }}</h1>
    <!-- 默认插槽 -->
    <!-- <slot>我是默认内容</slot> -->
    <!-- 具名插槽 -->
    <!-- <slot name="big">我是默认内容</slot> -->
    <!-- <slot name="small">我是默认内容</slot> -->
    <slot :games="games">我是默认内容</slot>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['title'],
  data () {
    return {
      games: ['英雄联盟', '地下城与勇士', 'QQ三国', '梦幻西游', '...']
    }
  }
}
</script>

<style>
.item {
  background-color: orange;
  width: 300px;
  height: 400px;
  /* text-align: center; */
}
.title {
  text-align: center;
}
</style>
