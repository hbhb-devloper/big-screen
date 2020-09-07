<template>
  <div >
    <div :id="id" :class="className" :style="{height:height,width:width}"></div>
  </div>
</template>

<script>
import echartMixins from "@/utils/resizeMixins";

export default {
  props: {
    id: {
      type: String,
      required: true,
      default: "chartRate",
    },
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
      chart: null,
    };
  },
  mixins: [echartMixins],
  mounted() {
    this.$nextTick(() => {
      this.draw()
    })
  },
  
  watch: {
    barChart: {
      deep: true,
      handler() {
        // this.barChart = val;
        this.$nextTick(() => {
          this.draw();
        });
      },
    },
  },
  methods: {
    draw() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = this.$echarts.init(document.getElementById(this.id),'light');
      //  ----------------------------------------------------------------
      let option = {
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [7, 35],
            center: ["50%", "50%"],
            roseType: "area",
            label: {
              show: true,
              formatter: "{b}: {c} 个",
            },
            data: this.barChart,
            // [
            //   { value: 10, name: "接入停车场数" },
            //   { value: 5, name: "封闭停车场数" },
            //   { value: 15, name: "泊位停车场数" },
            //   { value: 25, name: "公共停车场数" },
            //   { value: 20, name: "封闭社会停车场数" },
            //   { value: 35, name: "私人单位停车场数量" },
            //   { value: 30, name: "私人单位停车位数量" },
            //   { value: 40, name: "道路泊位数量" },
            // ],
          },
        ],
      };
      this.chart.setOption(option);
    },
  },
  destroyed() {
    window.onresize = null;
  },
};
</script>

<style lang="scss" scoped>
.pieItem {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  // margin: 10px;
  position: relative;
}
.pieCanvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>