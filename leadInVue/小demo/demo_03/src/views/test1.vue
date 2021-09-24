<template>
  <div class="test">
    <!-- <div class="box1" v-for="(aitem, aindex) in arr1" :key="aindex">
      <div class="box2" v-for="(item, index) in aitem.num" :key="index">
        {{ aitem.name }}
      </div>
    </div> -->
    <canvas id="myChart" width="400" height="260"></canvas>
    {{}}
  </div>
</template>

<script>
import F2 from '@antv/f2'
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
  },
  methods: {
    initData () {
      // console.log(this.$f2.Chart())
      // F2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
      const data = [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
        { genre: 'Other1', sold: 1150 },
        { genre: 'Other2', sold: 2150 },
        { genre: 'Other3', sold: 3150 },
        { genre: 'Other4', sold: 4150 }
      ]

      // Step 1: 创建 Chart 对象
      const chart = new F2.Chart({
        id: 'myChart',
        pixelRatio: window.devicePixelRatio // 指定分辨率
      })

      // Step 2: 载入数据源
      chart.source(data)

      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      chart
        .interval()
        .position('genre*sold')
        .color('genre')

      // Step 4: 渲染图表
      chart.render()
    }
  },
  mounted () {
    // this.initData()
    console.log(this)
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
