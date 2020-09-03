<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import resize from "./mixins/resize";

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "350px",
    },
    autoResize: {
      type: Boolean,
      default: true,
    },
    chartData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        // this.setOptions(val);
        this.chartData=val
        this.$nextTick(() => {
          this.initChart();
        });
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      this.setOptions(this.chartData);
    },
    setOptions({ expectedData, actualData } = {}) {
      this.chart.setOption({
        // 横坐标
        xAxis: {
          data: [
            "0点",
            "3点",
            "6点",
            "9点",
            "12点",
            "15点",
            "18点",
            "21点",
            "24点",
          ],
          // 坐标轴两边留白
          boundaryGap: false,
          // 是否显示坐标轴刻度
          axisTick: {
            show: false,
          },
        },
        // 图标位置
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          // grid 区域是否包含坐标轴
          containLabel: true,
        },
        // 提示框组件。
        tooltip: {
          trigger: "axis",
          // 十字准星指示器
          axisPointer: {
            type: "cross",
          },
          padding: [5, 10],
        },
        yAxis: {
          // 是否显示坐标轴刻度
          axisTick: {
            show: false,
          },
        },
        legend: {
          data: ["昨日", "今日"],
        },
        series: [
          {
            name: "昨日",
            itemStyle: {
              normal: {
                color: "#FF005A",
                lineStyle: {
                  color: "#FF005A",
                  width: 2,
                },
              },
            },
            // 是否平滑曲线显示
            smooth: true,
            type: "line",
            data: expectedData,
            animationDuration: 2800,
            animationEasing: "cubicInOut",
          },
          {
            name: "今日",
            smooth: true,
            type: "line",
            itemStyle: {
              normal: {
                color: "#3888fa",
                lineStyle: {
                  color: "#3888fa",
                  width: 2,
                },
                // areaStyle: {
                //   color: '#f3f8ff'
                // }
              },
            },
            data: actualData,
            animationDuration: 2800,
            animationEasing: "quadraticOut",
          },
        ],
      });
    },
  },
};
</script>
