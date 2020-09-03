<!--
 * @Descripttion: 
 * @version: 
 * @Author: CYZ
 * @Date: 2020-09-01 10:06:32
 * @LastEditors: CYZ
 * @LastEditTime: 2020-09-02 11:11:04
-->
<template>
  <div id="centreLeft1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-pie"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">今日累积停车收费总量</span>
          <dv-decoration-1 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" />
        </div>
      </div>
      <div class="d-flex jc-center">
        <!-- <centreLeft2Chart /> -->
        <line-chart :chart-data="lineChartData" height="2.8rem" />
      </div>
    </div>
  </div>
</template>

<script>
// import centreLeft2Chart from "@/components/echart/centerLeft2/centreLeft2Chart";
import LineChart from "./dashboard/LineChart";
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145],
  },
};
export default {
  props:{
    chartData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
    };
  },
  
  components: {
    // centreLeft2Chart,
    LineChart,
  },
   watch: {
    chartData: {
      deep: true,
      handler(val) {
        console.log('val',val);
        this.lineChartData=val
      },
    },
  },
  mounted() {
    console.log('this.chartData',this.chartData);
    this.lineChartData=this.chartData
  },
  methods: {
    
  },
};
</script>

<style lang="scss">
#centreLeft1 {
  padding: 0.2rem;
  height: 3.5rem;
  min-width: 3.75rem;
  border-radius: 0.0625rem;
  width: 100%;
  .bg-color-black {
    height: 3.1rem;
    border-radius: 0.125rem;
  }
  .text {
    color: #c3cbde;
  }
  .chart-box {
    margin-top: 0.2rem;
    width: 2.125rem;
    height: 2.125rem;
    .active-ring-name {
      padding-top: 0.125rem;
    }
  }
}
</style>