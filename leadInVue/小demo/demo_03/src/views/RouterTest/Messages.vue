<template>
  <div>
    <ul>
      <li v-for="item in array" :key="item.id">
        <router-link
          :to="`/Home/Messages/MessageChildren?message=${item.message}`"
          >{{ item.message }}</router-link
        >&nbsp;&nbsp;
      </li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Messgaes',
  data () {
    return {
      array: [
        {
          id: '001',
          message: 'message001'
        },
        {
          id: '002',
          message: 'message002'
        },
        {
          id: '003',
          message: 'message003'
        }
      ]
    }
  }
}
</script>

<style></style>
