<!--
 * @Descripttion: 
 * @version: 
 * @Author: CYZ
 * @Date: 2020-09-01 10:06:32
 * @LastEditors: CYZ
 * @LastEditTime: 2020-09-02 18:22:43
-->
<template>
  <div id="centreLeft1" style="height: 4.5rem;">
    <div class="bg-color-black" style="margin-top:40px;height: calc(100% - 40px)">
      <!-- <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-pie"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">车位周转率分析</span>
          <dv-decoration-1 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" />
        </div>
      </div> -->
      <div class="d-flex centerList">
        <div class="select">
          <dv-decoration-9 style="width:40px;height:40px;">道路</dv-decoration-9>
          <dv-decoration-9 style="width:40px;height:40px;">封闭</dv-decoration-9>
        </div>
        <div class="pieList">
          <div v-for="index in 8" :key="index" class="pieMid">
            <centerChart :id="index" :tips="30" :colorObj="rate[1].colorData" />
            <div class="pieTitle">贝因美停车场</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import centerChart from "@/components/echart/center/centerChartRate";
export default {
  data() {
    return {
      rate: [
        {
          id: "centerRate1",
          tips: 60,
          colorData: {
            textStyle: "#3fc0fb",
            series: {
              color: ["#00bcd44a", "transparent"],
              dataColor: {
                normal: "#03a9f4",
                shadowColor: "#97e2f5",
              },
            },
          },
        },
        {
          id: "centerRate2",
          tips: 40,
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
    centerChart,
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
.pieMid {
  width: 20%;
  margin: 5px;
}
.centerList {
  display: flex;
  flex-direction: row;
  height:100%;
}
.select {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex: 2;
  height: 100% !important;
}
.pieTitle{
    font-size: 12px;
    transform: scale(0.7);
    white-space: nowrap;
    margin-top: 6px;
}
</style>