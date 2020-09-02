<template>
  <div id="index">
    <dv-full-screen-container class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 style="width:33.3%;height:.0625rem;" />
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
          <dv-decoration-10 style="width:33.3%;height:.0625rem; transform: rotateY(180deg);" />
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex" style="width: 40%">
            <div
              class="react-right ml-4"
              style="width: 6.25rem; text-align: left;background-color: #0f1325;"
            >
              <span class="react-before"></span>
              <!-- <span class="text">数据分析1</span> -->
            </div>
            <div class="react-right ml-3" style="background-color: #0f1325;">
              <!-- <span class="text colorBlue">数据分析2</span> -->
            </div>
          </div>
          <div style="width: 40%" class="d-flex">
            <div class="react-left mr-3" style="background-color: #0f1325;">
              <!-- <span class="text fw-b">vue-big-screen</span> -->
            </div>
            <div
              class="react-left mr-4"
              style="width: 6.25rem; background-color: #0f1325; text-align: right;"
            >
              <span class="react-after"></span>
              <!-- <span class="text">2020年03月16日 周一 12:00</span> -->
            </div>
          </div>
        </div>

        <div class="body-box">
          <el-row type="flex" justify="space-around" align="top">
            <el-col :span="7">
              <el-row>
                <dv-border-box-1>
                  <el-row type="flex" justify="start" align="bottom">
                    <centerLeft2 />
                  </el-row>
                </dv-border-box-1>
                <dv-border-box-1>
                  <centerLeft1 />
                </dv-border-box-1>
              </el-row>
            </el-col>
            <el-col :span="7">
              <el-row></el-row>
            </el-col>
            <el-col :span="7">
              <el-row>
                <dv-border-box-1>
                  <el-row>
                    <centerRight1 />
                  </el-row>
                </dv-border-box-1>
                <dv-border-box-1>
                  <centerRight2 />
                </dv-border-box-1>
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
              <el-row>
                <dv-border-box-1>
                  <bottomLeft />
                </dv-border-box-1>
              </el-row>
            </el-col>
            <el-col :span="7">
              <dv-border-box-1>
                <bottomCenter />
              </dv-border-box-1>
            </el-col>
            <el-col :span="7">
              <el-row>
                <dv-border-box-1>
                  <bottomRight />
                </dv-border-box-1>
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
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145],
  },
};
export default {
  data() {
    return {
      loading: true,
      lineChartData: lineChartData.newVisitis,
      value5: 50,
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
  },
  mounted() {
    this.cancelLoading();
  },
  methods: {
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