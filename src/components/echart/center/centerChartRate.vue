<template>
  <div class="pieItem">
    <div :id="id" class="pieCanvas"></div>
    
  </div>
</template>

<script>
import echartMixins from "@/utils/resizeMixins";

export default {
  data() {
    return {
      chart: null,
    };
  },
  mixins: [echartMixins],
  mounted() {
    this.draw();
  },
  props: {
    id: {
      type: Number,
      required: true,
      // default: "chartRate",
    },
    tips: {
      type: Number,
      required: true,
      default: 50,
    },
    colorObj: {
      type: Object,
      default: function () {
        return {
          textStyle: "#3fc0fb",
          series: {
            color: ["#00bcd44a", "transparent"],
            dataColor: {
              normal: "#03a9f4",
              shadowColor: "#97e2f5",
            },
          },
        };
      },
    },
  },
  watch: {
    tips: {
      deep: true,
      handler(val) {
        this.tips=val
        this.$nextTick(() => {
          this.draw();
        });
      },
    },
  },
  methods: {
    draw() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = this.$echarts.init(document.getElementById(this.id));
      //  ----------------------------------------------------------------
      let tips = this.tips;
      let option = {
        title: [
          {
            text: tips * 1 + "%",
            x: "center",
            y: "center",
            textStyle: {
              color: this.colorObj.textStyle,
              fontSize: 16,
            },
          },
        ],
        
        series: [
          {
            type: "pie",
            radius: ["75%", "80%"],
            center: ["50%", "50%"],
            hoverAnimation: false,
            color: this.colorObj.series.color,
            label: {
              // color: 'rgba(255, 255, 255, 0.3)'
              normal: {
                show: false,
              },
            },
            
            data: [
              {
                value: tips,
                itemStyle: {
                  normal: {
                    color: this.colorObj.series.dataColor.normal,
                    shadowBlur: 10,
                    shadowColor: this.colorObj.series.dataColor.shadowColor,
                  },
                },
              },
              {
                value: 100 - tips,
              },
            ],
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