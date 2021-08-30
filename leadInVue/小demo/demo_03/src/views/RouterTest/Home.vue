<template>
  <div class="panel-body">
    <h2>我是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/Home/News"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item "
            active-class="active"
            to="/Home/Messages"
            >Message</router-link
          >
        </li>
      </ul>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style></style>
