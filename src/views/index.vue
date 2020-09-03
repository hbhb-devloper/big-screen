<template>
  <div id="index">
    <dv-full-screen-container class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center" style=" height: 0.625rem;">
          <!-- <dv-decoration-10 style="width:33.3%;height:.0625rem;" />
          <div class="d-flex jc-center">
            <dv-decoration-8 :color="['#568aea', '#000000']" style="width:2.5rem;height:.625rem;" />
            <div class="title">
              <span class="title-text">大数据可视化平台</span>
              <dv-decoration-6
                class="title-bototm"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
                style="width:3.125rem;height:.1rem;"
              />
            </div>
            <dv-decoration-8
              :reverse="true"
              :color="['#568aea', '#000000']"
              style="width:2.5rem;height:.625rem;"
            />
          </div>
          <dv-decoration-10 style="width:33.3%;height:.0625rem; transform: rotateY(180deg);" /> -->
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2" style=" height: 0.625rem;">
          <!-- <div class="d-flex" style="width: 40%">
            <div
              class="react-right ml-4"
              style="width: 6.25rem; text-align: left;background-color: #0f1325;"
            >
              <span class="react-before"></span>
            </div>
            <div class="react-right ml-3" style="background-color: #0f1325;">
            </div>
          </div>
          <div style="width: 40%" class="d-flex">
            <div class="react-left mr-3" style="background-color: #0f1325;">
            </div>
            <div
              class="react-left mr-4"
              style="width: 6.25rem; background-color: #0f1325; text-align: right;"
            >
              <span class="react-after"></span>
              <span class="text">2020年03月16日 周一 12:00</span>
            </div>
          </div> -->
        </div>

        <div class="body-box">
          <el-row type="flex" justify="space-around" align="top">
            <el-col :span="7">
              <el-row>
                <dv-border-box-13>
                  <el-row type="flex" justify="start" align="bottom">
                    <centerLeft2 :chart-data="lineChartData" />
                  </el-row>
                </dv-border-box-13>
                <dv-border-box-13 style="margin-top:25px">
                  <centerLeft1 :yujinListData="loadFactorParkingList" />
                </dv-border-box-13>
              </el-row>
            </el-col>
            <el-col :span="8">
              <el-row style="width:100%;height:100%;display:flex;justify-content: center;align-items: center;">
                <!-- <center-map /> -->
                <dv-flyline-chart-enhanced :config="config" style="width:80%;height:80%;" />
              </el-row>
            </el-col>
            <el-col :span="7">
              <el-row>
                <dv-border-box-13>
                  <el-row>
                    <centerRight1 :bar-list="spaceUseList" />
                  </el-row>
                </dv-border-box-13>
                <dv-border-box-13 style="margin-top:25px">
                  <centerRight2 :yujinListData="loadFactorParkingList" />
                </dv-border-box-13>
              </el-row>
            </el-col>
          </el-row>
          <!-- 第三行数据 -->
          <!-- <div class="content-box">
            <div>
              <dv-border-box-12>
                <centerLeft1 />
              </dv-border-box-12>
            </div>
            <div>
              <dv-border-box-12>
                <centerLeft2 />
              </dv-border-box-12>
            </div>
            <div>
              <center />
            </div>
            <div>
              <centerRight2 />
            </div>
            <div>
              <dv-border-box-13>
                <centerRight1 />
              </dv-border-box-13>
            </div>
          </div>-->

          <!-- 第四行数据 -->
          <!-- <div class="bototm-box"> -->
          <el-row type="flex" justify="space-around" align="top">
            <el-col :span="7">
              <el-row style="margin-top:35px">
                <dv-border-box-13>
                  <bottomLeft :chartData="durationStatisticsList" />
                </dv-border-box-13>
              </el-row>
            </el-col>
            <el-col :span="8">
              <dv-border-box-11 title="车位周转率分析">
                <bottomCenter :chartData="monitoringList" />
              </dv-border-box-11>
            </el-col>
            <el-col :span="7">
              <el-row style="margin-top:35px">
                <dv-border-box-13>
                  <bottomRight :chartData="currentUseList"/>
                </dv-border-box-13>
              </el-row>
            </el-col>
          </el-row>
          <!-- <dv-border-box-13>
              <bottomLeft />
            </dv-border-box-13>
            <dv-border-box-12>
              <bottomRight />
          </dv-border-box-12>-->
        </div>
        <!-- </div> -->
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import centerLeft1 from "./centerLeft1";
import centerLeft2 from "./centerLeft2";
import centerRight1 from "./centerRight1";
import centerRight2 from "./centerRight2";
// import center from "./center";
import bottomCenter from "./bottomCenter";
import bottomLeft from "./bottomLeft";
import bottomRight from "./bottomRight";
// import centerMap from "./centerMap";

export default {
  data() {
    return {
      loading: true,
      lineChartData: {},
      value5: 50,
      spaceUseList: [],
      loadFactorParkingList: [],
      durationStatisticsList: [],
      monitoringList: [],
      currentUseList:[],
      config: {
        points: [
          {
            name: "廊坊",
            coordinate: [0.5, 0.3],
          },
          {
            name: "特抱抱停车场",
            coordinate: [0.7, 0.23],
          },
          {
            name: "焦作停车场",
            coordinate: [0.2, 0.25],
          },
          {
            name: "开封停车场",
            coordinate: [0.75, 0.4],
          },
          {
            name: "许昌停车场",
            coordinate: [0.8, 0.65],
          },
          {
            name: "平顶山停车场",
            coordinate: [0.74, 0.85],
          },
          {
            name: "洛阳停车场",
            coordinate: [0.5, 0.14],
          },
          
          
          
        ],
        lines: [
          {
            source: "特抱抱停车场",
            target: "廊坊",
          },
          {
            source: "焦作停车场",
            target: "廊坊",
          },
          {
            source: "开封停车场",
            target: "廊坊",
          },
          {
            source: "许昌停车场",
            target: "廊坊",
          },
          {
            source: "平顶山停车场",
            target: "廊坊",
          },
          {
            source: "洛阳停车场",
            target: "廊坊",
          },
          
          
         
        ],
        icon: {
          show: true,
          src: "https://www.zjkbtc.com/location_dot.png",
        },
        text: {
          show: true,
        },
        bgImgSrc: "https://www.zjkbtc.com/map.png",
      },
    };
  },
  components: {
    centerLeft1,
    centerLeft2,
    centerRight1,
    centerRight2,
    // center,
    bottomLeft,
    bottomCenter,
    bottomRight,
    // centerMap,
  },
  mounted() {
    this.cancelLoading();
    this.showinfo();
    this.timer1();
  },
  methods: {
    // 这是一个定时器
    timer1() {
      this.timer = setTimeout(() => {
        this.showinfo();
        this.timer1();
      }, 10000);
    },
    showinfo() {
      this.getAmountSummary();
      this.getLoadFactorParking();
      this.getspaceUse();
      this.getdurationStatistics();
      this.getmonitoring();
      this.getcurrentUse();
    },
    getAmountSummary() {
      this.$http.get("/amountSummary/nowAndYesterday").then((res) => {
        // console.log("nowAndYesterday", res);
        this.lineChartData = res.data.newVisitis;
      });
    },
    getLoadFactorParking() {
      this.$http.get("/loadFactorParking/topNow").then((res) => {
        // console.log("loadFactorParking", res);
        this.loadFactorParkingList = res.data;
      });
    },
    getspaceUse() {
      this.$http.get("/spaceUse/totalNum").then((res) => {
        // console.log("spaceUse", res);
        this.spaceUseList = res.data.data;
      });
    },
    getdurationStatistics() {
      this.$http.get("/durationStatistics/now").then((res) => {
        // console.log("durationStatistics", res);
        this.durationStatisticsList = res.data;
      });
    },
    getmonitoring() {
      this.$http.get("/monitoring/now").then((res) => {
        // console.log("monitoring", res);
        this.monitoringList = res.data;
      });
    },
    getcurrentUse() {
      this.$http.get("/spaceUse/currentUse").then((res) => {
        this.currentUseList = res.data;
      });
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
  },
};
</script>

<style lang="scss" scope>
@import "../assets/scss/index.scss";
.proCircle {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.circleItem {
  width: 20%;
  height: 0;
  padding-bottom: 20%;
  margin: 10px;
  position: relative;
}
.circleItem .el-progress-circle {
  width: 100% !important;
  height: 100% !important;
}
.yujinList {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* padding: 10px; */
}
.yujinList .yujinItem {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 10px;
}
.yujinList .yujinItem .top {
  display: flex;
  flex-direction: row;
}
.yujinList .yujinItem .top .number {
  color: #02e9f4;
  margin-right: 10px;
}
.el-slider__runway {
  margin: 5px 0;
}
.el-slider__runway.disabled .el-slider__bar {
  background-color: #02e9f4;
}
</style>