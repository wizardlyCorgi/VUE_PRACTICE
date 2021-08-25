<template>
  <div class="list">
    <!-- 列表 -->
    <div class="row" v-show="info.users.length">
      <div class="card" v-for="user in info.users" :key="user.id">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.login }}</p>
      </div>
    </div>
    <!-- 第一次进来 -->
    <div class="first" v-show="info.firstEnter">
      <h1>欢迎光临!!亲亲</h1>
    </div>
    <!-- 数据加载中的时候 -->
    <div class="loading" v-show="info.loading">
      <h1>正在加载中....</h1>
    </div>
    <!-- 网络错误 -->
    <div class="error" v-show="info.errMsg">
      <h1>{{ info.errMsg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: {
        users: [],
        firstEnter: true, // 第一次进来显示
        loading: false, // 数据加载中的时候
        errMsg: '' // 网络错误
      }
    }
  },
  methods: {
    getData (obj) {
      // 解构赋值
      this.info = { ...this.info, ...obj }
    }
  },
  mounted () {
    this.$bus.$on('userData', this.getData)
  },
  beforeDestroy () {
    this.$bus.$off('userData')
  }
}
</script>

<style scoped>
.list {
  margin-top: 20px;
}
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
