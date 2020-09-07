<!--
 * @Descripttion: 
 * @version: 
 * @Author: CYZ
 * @Date: 2020-09-01 10:06:32
 * @LastEditors: CYZ
 * @LastEditTime: 2020-09-04 10:26:45
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
          <div v-for="(item,index) in chartData" :key="index" class="pieMid">
            <centerChart :id="item.id" :tips="item.tips" :colorObj="rate[index].colorData" />
            <div class="pieTitle">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import centerChart from "@/components/echart/center/centerChartRate";
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
          colorData: {
            textStyle: "#50c2ff",
            series: {
              color: ["#faf3a378", "transparent"],
              dataColor: {
                normal: "#50c2ff",
                shadowColor: "#97e2f5",
              },
            },
          },
        },
        {
          colorData: {
            textStyle: "#50c2ff",
            series: {
              color: ["#faf3a378", "transparent"],
              dataColor: {
                normal: "#ff9800",
                shadowColor: "#97e2f5",
              },
            },
          },
        },
        {
          colorData: {
            textStyle: "#f9d905",
            series: {
              color: ["#faf3a378", "transparent"],
              dataColor: {
                normal: "#f9d905",
                shadowColor: "#97e2f5",
              },
            },
          },
        },
        {
          colorData: {
            textStyle: "#4c83ff",
            series: {
              color: ["#faf3a378", "transparent"],
              dataColor: {
                normal: "#4c83ff",
                shadowColor: "#97e2f5",
              },
            },
          },
        },
        {
          colorData: {
            textStyle: "#caff6f",
            series: {
              color: ["#faf3a378", "transparent"],
              dataColor: {
                normal: "#caff6f",
                shadowColor: "#97e2f5",
              },
            },
          },
        },
        {
          colorData: {
            textStyle: "#01ef97",
            series: {
              color: ["#faf3a378", "transparent"],
              dataColor: {
                normal: "#01ef97",
                shadowColor: "#97e2f5",
              },
            },
          },
        },
        {
          colorData: {
            textStyle: "#fe6529",
            series: {
              color: ["#faf3a378", "transparent"],
              dataColor: {
                normal: "#fe6529",
                shadowColor: "#97e2f5",
              },
            },
          },
        },
        {
          colorData: {
            textStyle: "#2f37d9",
            series: {
              color: ["#faf3a378", "transparent"],
              dataColor: {
                normal: "#2f37d9",
                shadowColor: "#97e2f5",
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
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.chartData=val
      },
    },
  },
  mounted() {
  },
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
    text-align: center;
}
</style>