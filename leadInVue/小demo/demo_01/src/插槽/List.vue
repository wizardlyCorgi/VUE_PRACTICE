<template>
  <div class="list">
    <Item :title="'游戏'">
      <template slot-scope="{ games }">
        <ul>
          <li v-for="item in games" :key="item">
            {{ item }}
          </li>
        </ul>
      </template>
      <!-- 具名插槽 -->
      <!-- <template slot="big">
        <h1>我来占坑</h1>
        <h1>我来占坑</h1>
      </template> -->
      <!-- 具名插槽可以追加 -->
      <!-- <h1 slot="big">我来占坑11</h1>
      <h1 slot="big">我也来</h1> -->
      <!-- <h1 slot="small">我也来</h1> -->
    </Item>
  </div>
</template>

<script>
import Item from './ListItem.vue'
export default {
  name: 'List',
  components: {
    Item
  },
  data () {
    return {
      //   games: ['英雄联盟', '地下城与勇士', 'QQ三国', '梦幻西游', '...'],
      //   foods: ['炸鸡', '烧烤', '奶茶', '火锅', '...'],
      //   films: ['中国医生', '扫黑风暴', '我爱我的祖国', '傲慢与偏见', '...']
    }
  }
}
</script>

<style>
.list {
  display: flex;
  justify-content: space-around;
}
</style>
