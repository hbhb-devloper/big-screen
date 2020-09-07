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
          <dv-decoration-10 style="width:33.3%;height:.0625rem; transform: rotateY(180deg);" />-->
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
          </div>-->
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
              <el-row
                style="width:100%;height:100%;display:flex;justify-content: center;align-items: center;position: relative;"
              >
                <!-- <center-map /> -->
                <div class="orderList">
                  <dv-decoration-7 style="height:30px;">
                    <div style="padding:0 5px;">今日订单：</div>
                    <numberGrow :value="orderNum"></numberGrow>
                    <div style="padding:0 5px;">【个】</div>
                  </dv-decoration-7>
                </div>
                <div class="orderList" style="margin-top:30px;">
                  <dv-decoration-7 style="height:30px;">
                    <div style="padding:0 5px;">今日收入：</div>
                    <numberGrow :value="incomeNum"></numberGrow>
                    <div style="padding:0 5px;">【元】</div>
                  </dv-decoration-7>
                </div>
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
                  <bottomRight :chartData="currentUseList" />
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
import numberGrow from "@/components/echart/number/numberGrow";

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
      currentUseList: [],
      orderNumber: {},
      incomeNum: 0,
      orderNum: 0,
      yemianload:false,
      config: {
        points: [
          {
            name: "廊坊停车场",
            coordinate: [0.5, 0.3],
            text: {
              show: false,
            },
          },
          {
            name: "特抱抱停车场",
            coordinate: [0.7, 0.23],
            text: {
              show: false,
            },
          },
          {
            name: "武汉停车场",
            coordinate: [0.65, 0.46],
            text: {
              show: false,
            },
          },
          {
            name: "大兴停车场",
            coordinate: [0.7, 0.68],
            text: {
              show: false,
            },
          },
          {
            name: "洛阳停车场",
            coordinate: [0.68, 0.13],
            text: {
              show: false,
            },
          },
          {
            name: "焦作停车场",
            coordinate: [0.2, 0.25],
            text: {
              show: false,
            },
          },
          {
            name: "开封停车场",
            coordinate: [0.75, 0.4],
            text: {
              show: false,
            },
          },
          {
            name: "天津停车场",
            coordinate: [0.37, 0.1],
            text: {
              show: false,
            },
          },
          {
            name: "许昌停车场",
            coordinate: [0.8, 0.6],
            text: {
              show: false,
            },
          },
          {
            name: "平顶山停车场",
            coordinate: [0.74, 0.85],
            text: {
              show: false,
            },
          },
          {
            name: "洛阳停车场",
            coordinate: [0.5, 0.14],
            text: {
              show: false,
            },
          },

          {
            name: "北京停车场",
            coordinate: [0.35, 0.2],
            text: {
              show: false,
            },
          },
          {
            name: "合肥停车场",
            coordinate: [0.6, 0.54],
            text: {
              show: false,
            },
          },
          {
            name: "双流停车场",
            coordinate: [0.75, 0.74],
            text: {
              show: false,
            },
          },
          {
            name: "杭州停车场",
            coordinate: [0.69, 0.32],
            text: {
              show: false,
            },
          },
        ],
        lines: [
          // {
          //   source: "廊坊停车场",
          //   target: "廊坊停车场",
          //   width: 0,
          // },
          {
            source: "特抱抱停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "武汉停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "大兴停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "洛阳停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "焦作停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "开封停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "天津停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "许昌停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "平顶山停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "洛阳停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "北京停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "合肥停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "双流停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "杭州停车场",
            target: "廊坊停车场",
            width: 0,
          },
        ],
        icon: {
          show: true,
          // src: "https://www.zjkbtc.com/location_dot.png",
        },
        text: {
          show: false,
        },
        bgImgSrc: "https://www.zjkbtc.com/map.png",
      },
    };
  },
   watch: {
    yemianload: {
      deep: true,
      handler() {
        // this.config = {...this.config};
        if (this.yemianload) {
          this.loading=false
        }
      },
    },
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
    numberGrow,
    // centerMap,
  },
  mounted() {
    // this.cancelLoading();
    this.showinfo();
    this.timer1();
    this.config= {
        points: [
          {
            name: "廊坊停车场",
            coordinate: [0.5, 0.3],
            text: {
              show: false,
            },
          },
          {
            name: "特抱抱停车场",
            coordinate: [0.7, 0.23],
            text: {
              show: false,
            },
          },
          {
            name: "武汉停车场",
            coordinate: [0.65, 0.46],
            text: {
              show: false,
            },
          },
          {
            name: "大兴停车场",
            coordinate: [0.7, 0.68],
            text: {
              show: false,
            },
          },
          {
            name: "洛阳停车场",
            coordinate: [0.68, 0.13],
            text: {
              show: false,
            },
          },
          {
            name: "焦作停车场",
            coordinate: [0.2, 0.25],
            text: {
              show: false,
            },
          },
          {
            name: "开封停车场",
            coordinate: [0.75, 0.4],
            text: {
              show: false,
            },
          },
          {
            name: "天津停车场",
            coordinate: [0.37, 0.1],
            text: {
              show: false,
            },
          },
          {
            name: "许昌停车场",
            coordinate: [0.8, 0.6],
            text: {
              show: false,
            },
          },
          {
            name: "平顶山停车场",
            coordinate: [0.74, 0.85],
            text: {
              show: false,
            },
          },
          {
            name: "洛阳停车场",
            coordinate: [0.5, 0.14],
            text: {
              show: false,
            },
          },

          {
            name: "北京停车场",
            coordinate: [0.35, 0.2],
            text: {
              show: false,
            },
          },
          {
            name: "合肥停车场",
            coordinate: [0.6, 0.54],
            text: {
              show: false,
            },
          },
          {
            name: "双流停车场",
            coordinate: [0.75, 0.74],
            text: {
              show: false,
            },
          },
          {
            name: "杭州停车场",
            coordinate: [0.69, 0.32],
            text: {
              show: false,
            },
          },
        ],
        lines: [
          // {
          //   source: "廊坊停车场",
          //   target: "廊坊停车场",
          //   width: 0,
          // },
          {
            source: "特抱抱停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "武汉停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "大兴停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "洛阳停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "焦作停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "开封停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "天津停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "许昌停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "平顶山停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "洛阳停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "北京停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "合肥停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "双流停车场",
            target: "廊坊停车场",
            width: 0,
          },
          {
            source: "杭州停车场",
            target: "廊坊停车场",
            width: 0,
          },
        ],
        icon: {
          show: true,
          // src: "https://www.zjkbtc.com/location_dot.png",
        },
        text: {
          show: false,
        },
        bgImgSrc: "https://www.zjkbtc.com/map.png",
      }
  },
  methods: {
    // 这是一个定时器
    timer1() {
      this.timer = setTimeout(() => {
        this.showinfo();
        this.timer1();
        // }, 3600000);
      }, 10000);
    },
    async showinfo() {
      this.getAmountSummary();
      this.getLoadFactorParking();
      this.getspaceUse();
      this.getdurationStatistics();
      this.getmonitoring();
      this.getcurrentUse();
      this.getTotalIncome();
      await this.getLoadFactorParkingNow();
      this.yemianload=true
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
        res.data.map((item) => {
          item.value = Number(item.value);
        });
        this.loadFactorParkingList = res.data;
      });
    },
    getLoadFactorParkingNow() {
      let that = this;
      new Promise(function (resolve, reject) {
        that.$http
          .get("/loadFactorParking/now")
          .then((res) => {
            console.log("loadFactorParking", res);
            let target = res.data[0].name;
            res.data.map((item, index) => {
              let lowIcon = {
                show: true,
                src: "https://www.zjkbtc.com/light.png",
                width: 30,
                height: 30,
              };
              let midIcon = {
                show: true,
                src: "https://www.zjkbtc.com/location_dot.png",
                width: 30,
                height: 30,
              };
              let highIcon = {
                show: true,
                src: "https://www.zjkbtc.com/light.png",
                width: 30,
                height: 30,
              };
              let point = that.config.points[index];
              // let line = that.config.lines[index];
              if (item.name != target) {
                that.config.lines[index - 1] = {
                  source: item.name,
                  target: target,
                  width: 0,
                };
              }

              if (item.value <= 50) {
                point.name = item.name;
                point.icon = lowIcon;
                point.text.show = true;
              } else if (item.value > 50 && item.value < 80) {
                point.name = item.name;
                point.icon = midIcon;
                point.text.show = true;
              } else {
                point.name = item.name;
                point.icon = highIcon;
                point.text.show = true;
              }
            });
            let conObj = that.deepClone(that.config);
            // that.config.lines.shift();
            console.log('conObj',conObj);
            that.config = { ...conObj };
            resolve();
          })
          .catch((err) => {
            console.log("err", err);
            reject();
          });
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
        res.data.map((item) => {
          item.tips = Number(item.tips);
        });
        // console.log("monitoring", res);

        this.monitoringList = res.data;
      });
    },
    getcurrentUse() {
      this.$http.get("/spaceUse/currentUse").then((res) => {
        this.currentUseList = res.data;
      });
    },
    getTotalIncome() {
      let that = this;
      this.$http.get("/nowIncome/totalIncome").then((res) => {
        // console.log("nowIncome", res);
        that.orderNum = Number(res.data.data.totalOrder);
        that.incomeNum = Number(res.data.data.payMoney) / 100;
      });
    },
    // cancelLoading() {
    //   setTimeout(() => {
    //     this.loading = false;
    //   }, 500);
    // },
    deepClone(obj) {
      let result = typeof obj.splice === "function" ? [] : {};
      if (obj && typeof obj === "object") {
        for (let key in obj) {
          if (obj[key] && typeof obj[key] === "object") {
            result[key] = this.deepClone(obj[key]); //如果对象的属性值为object的时候，递归调用deepClone,即在吧某个值对象复制一份到新的对象的对应值中。
          } else {
            result[key] = obj[key]; //如果对象的属性值不为object的时候，直接复制参数对象的每一个键值到新的对象对应的键值对中。
          }
        }
        return result;
      }
      return obj;
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
.orderList {
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 0;
  left: 15px;
  justify-content: start;
}
</style>