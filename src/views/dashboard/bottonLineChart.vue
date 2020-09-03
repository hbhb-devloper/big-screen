<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

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
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler() {
        // this.setOptions(val)
        this.$nextTick(() => {
          this.initChart();
        });
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
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
      this.setOptions(this.chartData)
    },
    setOptions({ actualData } = {}) {
      this.chart.setOption({
        // 横坐标
        xAxis: {
          data: ['免费', '1小时', '2小时', '3小时', '4小时', '5小时', '5小时以上'],
          // 坐标轴两边留白
          boundaryGap: false,
          // 是否显示坐标轴刻度
          axisTick: {
            show: false
          }
        },
        // 图标位置
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          // grid 区域是否包含坐标轴
          containLabel: true
        },
        // 提示框组件。
        tooltip: {
          trigger: 'axis',
          // 十字准星指示器
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          // 是否显示坐标轴刻度
          axisTick: {
            show: false
          }
        },
        legend: {
          data: [ '停车时长显示']
        },
        series: [
          
        {
          name: '停车时长显示',
          smooth: true,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#3888fa',
              lineStyle: {
                color: '#3888fa',
                width: 2
              },
              areaStyle: {
                color: '#02E9F4'
              }
            }
          },
          data: actualData,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        }]
      })
    }
  }
}
</script>
