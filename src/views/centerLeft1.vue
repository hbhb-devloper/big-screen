<!--
 * @Descripttion: 
 * @version: 
 * @Author: CYZ
 * @Date: 2020-09-01 10:06:32
 * @LastEditors: CYZ
 * @LastEditTime: 2020-09-04 13:46:48
-->
<template>
  <div id="centreLeft1">
    <div class="bg-color-black" style="padding: 0 18px;">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-pie"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">高负荷停车场预警（Top10）</span>
          <dv-decoration-1 style="width:1.25rem;height:.25rem; position:relative;top:-.0375rem;" />
        </div>
      </div>
      <div class="d-flex jc-center">
        <dv-scroll-ranking-board
          ref="deconfig"
          :config="yujinList"
          style="width:100%;height:2.6rem"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    yujinListData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      yujinList: {
        data: [
          {
            name: "周口",
            value: 55,
          },
          {
            name: "南阳",
            value: 120,
          },
          {
            name: "西峡",
            value: 78,
          },
          {
            name: "驻马店",
            value: 66,
          },
          {
            name: "新乡",
            value: 80,
          },
          {
            name: "新乡",
            value: 80.9,
          },
          {
            name: "新乡",
            value: 80,
          },
          {
            name: "新乡",
            value: 80,
          },
        ],
        waitTime: 4000,
        unit: "%",
      },
    };
  },
  components: {},
  watch: {
    yujinListData: {
      deep: true,
      handler(val) {
        console.log("yujinListData", val);
        // this.$nextTick(() => {
          // this.yujinList.data = val;
          this.$set(this.yujinList,'data', val);
          // this.$refs.deconfig = val;
        // });
      },
    },
  },
  mounted() {
    this.yujinList.data = this.yujinListData;
  },
  methods: {},
};
</script>

<style lang="scss">
</style>