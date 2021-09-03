<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <div class="head">
          <h1>My Tolists {{ activeNav }}</h1>
        </div>
      </el-header>
      <el-container>
        <el-aside width="100">
          <el-menu :collapse="isCollapse" router :default-active="activeNav">
            <el-submenu index="/navigation01">
              <template slot="title"
                ><i class="el-icon-message"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/navigation01">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/navigation02">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>

            <el-submenu index="3">
              <template slot="title"
                ><i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/navigation03">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title"
                ><i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/navigation04">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
          <div class="expand" @click="collapseMenu">
            <i class="el-icon-s-fold unfold" v-show="!isCollapse"></i>
            <i class="el-icon-s-unfold " v-show="isCollapse"></i>
          </div>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isCollapse: false,
      activeNav: '/navigation01'
    }
  },
  methods: {
    collapseMenu () {
      this.isCollapse = !this.isCollapse
    }
  },
  computed: {
    // activeNav(){}
  }
}
</script>
<style lang="less">
.expand {
  border-top: 1px solid #f5f7f9;
  position: absolute;
  right: 0;
  bottom: 10px;
  width: 100%;
  text-align: center;
  line-height: 50px;
  // padding-top: 10px;
  height: 35px;
  i {
    font-size: 24px;
    color: #999999;
    cursor: pointer;
  }
  .unfold {
    position: absolute;
    top: 10px;
    right: 20px;
  }
}
// 解决弹性盒子高度设置百分比无效
.el-container {
  height: 100vh;
}

.el-header {
  background-color: #2877ee;
  color: #333;
  line-height: 60px;
  text-align: center;
  .head {
    color: #fff;
    h1 {
      font-size: 24px;
    }
  }
}

.el-aside {
  color: #f5f7f9;
  height: calc(100vh - 60px);
  /* background-color: red; */
  position: relative;
}
.el-menu {
  width: 200px;
  text-align: left;
  border-radius: 5px;
  overflow: hidden;
  border: 0 !important;
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100% - 46px);
}
// main部分的底层颜色,与内容分割形成类似卡片的效果
.el-main {
  background-color: #f0f4f9;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
