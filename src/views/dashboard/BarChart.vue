<!--
 * @Descripttion: 
 * @version: 
 * @Author: CYZ
 * @Date: 2020-08-20 10:50:58
 * @LastEditors: CYZ
 * @LastEditTime: 2020-09-07 10:23:00
-->
<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 6000

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    barChart: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  watch: {
    barChart: {
      deep: true,
      handler() {
        // this.barChart = val;
        this.$nextTick(() => {
          this.initChart();
        });
      },
    },
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 10,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['接入停车场数', '封闭停车场数', '泊位停车场数', '公共停车场数', '封闭社会停车场数', '封闭社会停车场数', '封闭社会停车场数', '封闭社会停车场数'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: 'pageA',
          type: 'bar',
          stack: 'vistors',
          barWidth: '30%',
          data: this.barChart,
          animationDuration
        }]
      })
    }
  }
}
</script>
