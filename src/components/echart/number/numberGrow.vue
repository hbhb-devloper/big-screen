<!--
 * @Descripttion: 
 * @version: 
 * @Author: CYZ
 * @Date: 2020-09-07 11:59:45
 * @LastEditors: CYZ
 * @LastEditTime: 2020-09-07 15:33:46
-->
<template>
  <div class="number-grow-warp">
    <span ref="numberGrow" :data-time="time" class="number-grow" :data-value="value">0</span>
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: Number,
      default: 2,
    },
    value: {
      type: Number,
      default: 720000,
    },
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.numberGrow(this.$refs.numberGrow);
      },
    },
  },
  methods: {
    numberGrow(ele) {
      let _this = this;

      let step = (_this.value * 10) / (_this.time * 1000);
      let current = 0;
      let start = 0;
      let t = setInterval(function () {
        start += step;
        if (start > _this.value) {
          clearInterval(t);
          start = _this.value;
          t = null;
        }
        if (current === start) {
          return;
        }
        current = start;
        ele.innerHTML = current
          .toFixed(0)
          .toString()
          .replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, "$1,");
      }, 10);
    },
  },
  mounted() {
    this.numberGrow(this.$refs.numberGrow);
  },
};
</script>

<style>
.number-grow-warp {
  transform: translateZ(0);
  display: flex;
  align-items: center;
}
.number-grow {
  font-family: Arial-BoldMT;
  font-size: 20px;
  color: #5cd9e8;
  letter-spacing: 2.67px;
  display: block;
  line-height: 20px;
}
</style>