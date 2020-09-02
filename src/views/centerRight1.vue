<!--
 * @Descripttion: 
 * @version: 
 * @Author: CYZ
 * @Date: 2020-09-01 10:06:32
 * @LastEditors: CYZ
 * @LastEditTime: 2020-09-01 14:10:14
-->
<template>
  <div id="centreLeft1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-pie"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">停车场基本情况</span>
          <dv-decoration-1 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" />
        </div>
      </div>
      <div class="d-flex jc-center">
         <bar-chart height="2.8rem" />
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "./dashboard/BarChart";

export default {
  data() {
    return {
    };
  },
  components: {
    BarChart,
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">

</style>