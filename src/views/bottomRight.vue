<!--
 * @Descripttion: 
 * @version: 
 * @Author: CYZ
 * @Date: 2020-09-01 10:06:32
 * @LastEditors: CYZ
 * @LastEditTime: 2020-09-07 14:52:50
-->
<template>
  <div id="centreLeft1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-pie"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">整体车位使用情况</span>
          <dv-decoration-1 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" />
        </div>
      </div>
      <div class="d-flex centerList">
        <div
          class="pieList"
          style="display: flex;flex-direction: column;justify-content: center;align-items: center;"
        >
          <div v-for="(item,index) in chartData" :key="index" class="pieMid1">
            <rightChartRate
              :id="item.id+100"
              :tips="(item.use/item.all)*100"
              :pieUse="item.use"
              :pieAll="item.all"
              :pieName="rate[index].name"
              :colorObj="rate[0].colorData"
            />
            <div class="pieTitle1">·{{rate[index].name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rightChartRate from "@/components/echart/center/rightChartRate";
export default {
  props: {
    chartData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      rate: [
        {
          name: "接入停车场",
          colorData: {
            textStyle: "#50d6d9",
            series: {
              color: ["#00bcd44a", "transparent"],
              dataColor: {
                normal: "#50d6d9",
                shadowColor: "#97e2f5",
              },
            },
          },
        },
        {
          name: "封闭停车场",
          colorData: {
            textStyle: "#67e0e3",
            series: {
              color: ["#faf3a378", "transparent"],
              dataColor: {
                normal: "#ff9800",
                shadowColor: "#fcebad",
              },
            },
          },
        },
        {
          name: "泊位停车场",
          colorData: {
            textStyle: "#67e0e3",
            series: {
              color: ["#faf3a378", "transparent"],
              dataColor: {
                normal: "#ff9800",
                shadowColor: "#fcebad",
              },
            },
          },
        },
      ],
    };
  },
  components: {
    rightChartRate,
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.chartData = val;
      },
    },
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.pieList {
  flex: 8;
  //   width: 100%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
}
.pieMid1 {
  width: 30%;
  margin: 5px;
}
.centerList {
  display: flex;
  flex-direction: row;
  height: 85%;
}
.select {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 2;
  height: 100% !important;
}
.pieTitle1 {
  font-size: 12px;
  // transform: scale(0.7);
  white-space: nowrap;
  text-align: center;
}
</style>