<template>
  <div class="main">
    <GithubCaseHeader />
    <GithubCaseList />
  </div>
</template>

<script>
import GithubCaseHeader from './GithubCaseHeader.vue'
import GithubCaseList from './GithubCaseList.vue'
export default {
  name: 'GithubCase',
  components: {
    GithubCaseList,
    GithubCaseHeader
  }
}
</script>

<style>
.main {
  margin: 20px;
}
</style>
