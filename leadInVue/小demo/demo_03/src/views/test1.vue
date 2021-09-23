<template>
  <div class="test">
    <div class="box1" v-for="(aitem, aindex) in arr1" :key="aindex">
      <div class="box2" v-for="(item, index) in aitem.num" :key="index">
        {{ aitem.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr1: [
        {
          num: 1,
          name: 'nihao1132'
        },
        {
          num: 3,
          name: 'nihao12323'
        },
        {
          num: 2,
          name: 'nihao22231232'
        },
        {
          num: 4,
          name: 'nihao32'
        },
        {
          num: 3,
          name: 'nihao4'
        }
      ]
    }
  }
}
</script>

<style>
.test {
  /* display: flex; */
  /* width: 320px; */
  /* flex-wrap: wrap; */
}
.box1 {
  /* display: flex;
  flex-wrap: wrap; */
  display: inline-block;
  background-color: red;
  /* min-height: 100px; */
  /* min-width: 100px; */
  border: 1px solid black;
}
.box2 {
  display: inline-block;
  background-color: green;
  /* height: 50px; */
  min-width: 100px;
  border: 1px solid blue;
}
</style>
