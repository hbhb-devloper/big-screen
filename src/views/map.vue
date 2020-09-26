<!--
 * @Descripttion: 
 * @version: 
 * @Author: CYZ
 * @Date: 2020-09-24 17:47:58
 * @LastEditors: CYZ
 * @LastEditTime: 2020-09-26 14:56:46
-->
<template>
  <div style="width: 100%; height: 100%">
    <div id="mapDom" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import * as maptalks from "maptalks";
import borderMapData from "@/assets/cian.json";
const edgeColor = "#2bd0c0";
const polygonColors = ["#C0C0C0", "#87CEFA"];
// const mapCenter = [116.694544, 39.502569]
const mapCenter = [116.713708, 39.401931];

const altitude = 1500;

export default {
  props: {
    mapArr: {
      type: Array,
      required: true,
    },
    loadArr: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      mapDom: {},
      polygons: [],
      limitLines: [],
      layer:undefined
    };
  },
  watch: {
    mapArr: {
      deep: true,
      handler() {
        this.$nextTick(() => {
          this.drawMarkers();
        });
      },
    },
  },
  mounted() {
    this.initMapTalk();
    // this.drawRegion()
    this.drawWall();
    this.drawMarkers();
  },

  methods: {
    initMapTalk() {
      // const url = 'https://api.mapbox.com/styles/v1/ling13/cjpv0upr10vc52sodrbmtrmrb/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGluZzEzIiwiYSI6ImNqbHozcGRwZDBzMHIzcXBqNXV2dGR4dHAifQ.32-e7GIttC0FriVwvJ0GqA#6.1/27.044989/106.588086/0'
      const url =
        "https://api.mapbox.com/styles/v1/cangyezh1/ckfdru45naj7019qlrldwd41p.html?fresh=true&title=view&access_token=pk.eyJ1IjoiY2FuZ3llemgxIiwiYSI6ImNrZmRyNDVjbTA5aXoyeHJ3MTNxaGhobWUifQ.i3JOKffN0PLkVPXbGK3ulQ";
      this.mapDom = new maptalks.Map("mapDom", {
        center: mapCenter,
        zoom: 9.6,
        minZoom: 9.6, // set map's min zoom to 14
        maxZoom: 9.6, // set map's max zoom to 14
        pitch: 25, // y方向倾斜角度
        touchZoom: false,
        dragPitch: false,
        draggable: false, //disable drag
        dragPan: false, //disable drag panning
        dragRotate: false,
        baseLayer: new maptalks.TileLayer("base", {
          urlTemplate: url,
          subdomains: ["a", "b", "c", "d"],
          attribution:
            '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',
        }),
      });
      console.log("this.mapDom", this.mapDom);
    },
    drawLimitLines(idx, coordinates, properties) {
      const outLine = new maptalks.MultiLineString(coordinates, {
        symbol: {
          lineColor: edgeColor,
          lineWidth: 1,
          textPlacement: "vertex",
        },
        properties: {
          altitude: altitude,
          index: idx,
          id: properties.id,
          properties: properties,
        },
      });
      this.limitLines.push(outLine);
    },
    drawBorderLines(coordinates, properties) {
      const outLine = new maptalks.MultiLineString(coordinates, {
        symbol: {
          lineColor: edgeColor,
          lineWidth: 1,
          textPlacement: "vertex",
        },
        properties: {
          altitude: altitude,
          id: properties.id,
          properties: properties,
        },
      });
      this.limitLines.push(outLine);
    },
    drawPolygons(idx, coordinates, properties) {
      const polygon = new maptalks.MultiPolygon(coordinates, {
        symbol: {
          lineWidth: 1,
          lineColor: edgeColor,
          polygonFill: polygonColors[0],
          polygonOpacity: 0.5,
        },
        properties: {
          altitude: altitude,
          id: properties.id,
          index: idx,
          properties: properties,
        },
      })
        .on("mouseenter", function (e) {
          e.target.updateSymbol({
            polygonFill: polygonColors[1],
          });
        })
        .on("mouseout", function (e) {
          e.target.updateSymbol({
            polygonFill: polygonColors[0],
          });
        });
      this.polygons.push(polygon);
    },
    // drawRegion() {
    //   const self = this;
    //   $.getJSON("langfang.json", "", function (mapData) {
    //     const features = mapData.features;
    //     features.forEach((g, i) => {
    //       const properties = g.properties;
    //       const coordinates = g.geometry.coordinates;
    //       self.drawPolygons(i, coordinates, properties);
    //     });
    //     const polygonsLayer = new maptalks.VectorLayer(
    //       "vector-polygon",
    //       self.polygons,
    //       {
    //         enableAltitude: true,
    //       }
    //     ).addTo(self.mapDom);
    //   });
    // },
    drawWall() {
      const self = this;
      //   $.getJSON("cian.json", "", function (borderMapData) {
      const borderFeatures = borderMapData.features[0];
      const properties = borderFeatures.properties;
      const pathCoordinates = borderFeatures.geometry.coordinates.map((d) => {
        return d[0];
      });
      self.drawBorderLines(pathCoordinates, properties);
      const limitLinesLayer = new maptalks.VectorLayer(
        "vector-line",
        self.limitLines,
        {
          enableAltitude: true,
          drawAltitude: {
            polygonFill: edgeColor,
            polygonOpacity: 0.3,
            lineWidth: 0,
          },
        }
      ).addTo(self.mapDom);
      console.log("limitLinesLayer", limitLinesLayer);
      //   });
      // $.getJSON("guangyang.json", "", function(borderMapData) {
      //     const borderFeatures = borderMapData.features[0]
      //     const properties = borderFeatures.properties;
      //     const pathCoordinates = borderFeatures.geometry.coordinates.map(d => {
      //         return d[0]
      //     })
      //     self.drawBorderLines(pathCoordinates, properties)
      //     const limitLinesLayer = new maptalks.VectorLayer(
      //         "vector-line",
      //         self.limitLines, {
      //             enableAltitude: true,
      //             drawAltitude: {
      //                 polygonFill: edgeColor,
      //                 polygonOpacity: 0.3,
      //                 lineWidth: 0
      //             }
      //         }
      //     ).addTo(self.mapDom);
      // })
    },
    drawMarkers() {
      const self = this;
      if (!self.layer) {
        self.layer = new maptalks.VectorLayer("vector", {
          enableAltitude: true, // enable altitude
          altitudeProperty: "altitude", // altitude property in properties, default by 'altitude'
        }).addTo(self.mapDom);
      }

      // let arr = [
      //   [116.694544, 39.492569],
      //   [116.674544, 39.482569],
      //   [116.684544, 39.472569],
      //   [116.734544, 39.382569],
      //   [116.764544, 39.352569],
      //   [116.694544, 39.512569],
      //   [116.684544, 39.462569],
      //   [116.784544, 39.322569],
      //   [116.754544, 39.372569],
      //   [116.784544, 39.362569],
      //   [116.684544, 39.472569],
      //   [116.694544, 39.482569],
      // ];
      // console.log("arr", arr);
      // console.log('loadArr',this.loadArr);
      let colorStops =[]
      // let random=Math.floor((Math.random()*100)+1)
      for (let i = 0; i < this.mapArr.length; i++) {
        if (this.loadArr[i]>80) {
          colorStops=[
                [0.0, "rgba(224,253,255,0)"],
                [0.5, "rgba(224,253,255,1)"],
                [1.0, "rgba(224,253,255,1)"],
              ]
        }else if(this.loadArr[i]>50 && this.loadArr[i]<80){
          colorStops=[
                [0.0, `rgba(138, 223,  ${153+(Math.floor((Math.random()*100)+1))},0)`],
                [0.5, `rgba(138, 223,  ${153+(Math.floor((Math.random()*100)+1))},1)`],
                [1.0, `rgba(138, 223,  ${153+(Math.floor((Math.random()*100)+1))},1)`],
              ]
        }else{
          colorStops=[
                [0.0, `rgba(53, 206,  ${147+(Math.floor((Math.random()*100)+1))},0)`],
                [0.5, `rgba(53, 206,  ${147+(Math.floor((Math.random()*100)+1))},1)`],
                [1.0, `rgba(53, 206,  ${147+(Math.floor((Math.random()*100)+1))},1)`],
              ]
        }
        var marker1 = new maptalks.Marker(this.mapArr[i], {
          properties: {
            altitude: altitude,
          },
          symbol: {
            markerType: "ellipse",
            markerFill: {
              type: "radial",
              colorStops: colorStops,
            },
            markerLineWidth: 0,
            markerWidth: 5,
            markerHeight: 5,
          },
        }).addTo(self.layer);
      }
      console.log("marker1", marker1);

      // new maptalks.VectorLayer('vector', [point0, point], {
      //     enableAltitude: true, // enable altitude
      //     altitudeProperty: 'altitude' // altitude property in properties, default by 'altitude'
      // }).addTo(map);
    },
  },
};
</script>

<style scoped>
#mapDom /deep/ .maptalks-attribution {
  display: none;
}
</style>