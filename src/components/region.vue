<template>
  <div class="container">
    <headers msg="安装-区域项目经营分析"></headers>
    <div class="content">
      <div class="left">
        <!--      开累净利润及开累近利润率-->
        <div class="total">
          <div class="title">
            <div class="title_left">
              <span></span>
              <div>开累净利润及开累近利润率</div>
            </div>
          </div>
          <div class="content" ref="total" :style="{width: '462px', height: '274px'}"></div>
        </div>

        <div class="profit">
          <div class="title">
            <span></span>
            <div>开累产值及实际成本与责任成本比值</div>
          </div>
          <div
            class="profit_content"
            id="profit_content"
            :style="{width: '462px', height: '274px'}"
          ></div>
        </div>
      </div>
      <div class="center">
        <div class="center_echarts" ref="myEchart"></div>
        <div class="center_list">
          <div class="item">
            <span style=" background:rgba(73,172,76,1);"></span>
            <div>经营盈利</div>
          </div>
          <div class="item">
            <span style=" background:rgba(255,149,28,1);"></span>
            <div>经营持平</div>
          </div>
          <div class="item">
            <span style=" background:rgba(172,35,23,1);"></span>
            <div>经营亏损</div>
          </div>
        </div>
      </div>
      <div class="right">
        <!--        人效指标-->
        <div class="contribution">
          <div class="title">
            <span></span>
            <div>人效指标</div>
          </div>
          <div class="content" ref="contribution" :style="{width: '462px', height: '274px'}"></div>
        </div>
        <!--        区域公司人员绩效结果分布-->
        <div class="result">
          <div class="title">
            <span></span>
            <div>经营质量趋势</div>
          </div>
          <div
            class="result_content"
            id="result_content"
            :style="{width: '462px', height: '274px'}"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  let data = [];
  import headers from "./header.vue";

  let echarts = require("echarts");
  let convertData = function (data) {
    let res = [];
    if (data && data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        let latLng = [];
        latLng.push(data[i].lng);
        latLng.push(data[i].lat);
        latLng.push(data[i].usernum);
        latLng.push(data[i].colortype);
        latLng.push(data[i].xmnum);
        latLng.push(data[i].level);
        res.push({
          name: data[i].name,
          value: latLng
        });
      }
      return res;
    }
  };
  let mapData = function (data) {
    let res = [];
    if (data.length > 0 && data) {
      for (let i = 0; i < data.length; i++) {
        let latLng = [];
        latLng.push(data[i].rjcb);
        latLng.push(data[i].rjlr);
        latLng.push(data[i].rjhte);
        res.push({
          name: data[i].name,
          value: latLng
        });
      }
      let arr = [];
      if (res && res.length > 0) {
        for (let i = 0; i < res.length; i++) {
          let obj = {
            name: res[i].name,
            symbolSize: function (data, params) {
              if (params.data[2] < 5000) {
                return 40;
              } else if (params.data[2] > 5000 && params.data[2] < 10000) {
                return 50;
              } else {
                return 60;
              }
            },
            label: {
              normal: {
                show: true,
                align: "center",
                fontSize: "11",
                verticalAlign: "middle",
                padding: [15, 0, 0, 0],
                formatter: params => {
                  var strs = params.seriesName.split(""); //字符串数组
                  var str = "";
                  for (var i = 0, s; (s = strs[i++]);) {
                    //遍历字符串数组
                    str += s;
                    if (!(i % 2)) str += "\n"; //按需要求余
                  }
                  return str;
                }
              }
            },
            data: [res[i].value],
            type: "scatter"
          };
          arr.push(obj);
        }
        console.log(arr);
        return arr;
      }
    }
  };

  import "../../node_modules/echarts/map/js/province/anhui.js"; // 安徽
  import "../../node_modules/echarts/map/js/province/aomen.js"; // 澳门
  import "../../node_modules/echarts/map/js/province/beijing.js"; // 北京
  import "../../node_modules/echarts/map/js/province/fujian.js"; // 福建
  import "../../node_modules/echarts/map/js/province/chongqing.js"; //重庆
  import "../../node_modules/echarts/map/js/province/gansu.js"; //甘肃
  import "../../node_modules/echarts/map/js/province/guangdong.js"; //广东
  import "../../node_modules/echarts/map/js/province/guangxi.js"; //广西
  import "../../node_modules/echarts/map/js/province/guizhou.js"; //贵州
  import "../../node_modules/echarts/map/js/province/hainan.js"; //海南
  import "../../node_modules/echarts/map/js/province/hebei.js"; //河北
  import "../../node_modules/echarts/map/js/province/heilongjiang.js"; //黑龙江
  import "../../node_modules/echarts/map/js/province/henan.js"; //河南
  import "../../node_modules/echarts/map/js/province/hunan.js"; //湖南
  import "../../node_modules/echarts/map/js/province/hubei.js"; //湖北
  import "../../node_modules/echarts/map/js/province/jiangsu.js"; //江苏
  import "../../node_modules/echarts/map/js/province/jiangxi.js"; //江西
  import "../../node_modules/echarts/map/js/province/jilin.js"; //吉林
  import "../../node_modules/echarts/map/js/province/liaoning.js"; //辽宁
  import "../../node_modules/echarts/map/js/province/neimenggu.js"; //内蒙古
  import "../../node_modules/echarts/map/js/province/ningxia.js"; //宁夏
  import "../../node_modules/echarts/map/js/province/qinghai.js"; //青海
  import "../../node_modules/echarts/map/js/province/shandong.js"; //山东
  import "../../node_modules/echarts/map/js/province/shanghai.js"; //上海
  import "../../node_modules/echarts/map/js/province/shanxi.js"; //山西
  import "../../node_modules/echarts/map/js/province/shanxi1.js"; //陕西
  import "../../node_modules/echarts/map/js/province/sichuan.js"; //四川
  import "../../node_modules/echarts/map/js/province/taiwan.js"; //台湾
  import "../../node_modules/echarts/map/js/province/tianjin.js"; //天津
  import "../../node_modules/echarts/map/js/province/xianggang.js"; //香港
  import "../../node_modules/echarts/map/js/province/xizang.js"; //西藏
  import "../../node_modules/echarts/map/js/province/xinjiang.js"; //西藏
  import "../../node_modules/echarts/map/js/province/yunnan.js"; //云南
  import "../../node_modules/echarts/map/js/province/zhejiang.js"; //浙江
  export default {
    name: "region",
    data() {
      return {
        klcz: null,
        rjxnarr: null,
        cpmsgmap: null,
        cplist: null,
        sjcbyzrcb: null,
        jyzlqs: null,
        kljlrarr: null,
        kljlrlarr: null,

      };
    },
    created() {
      window.scrollTo(0, 0);
    },
    mounted() {
      let that = this;
      let name = this.$route.query.name;
      let qy = this.$route.query.qy;
      that.$api.getxmmsgaz(qy).then(data => {
        if (data.code == 200) {
          that.klcz = data.klcz;
          that.cplist = data.cplist;
          that.cpmsgmap = data.cpmsgmap;
          that.rjxnarr = data.rjxnarr;
          that.sjcbyzrcb = data.sjcbyzrcb;
          that.kljlrlarr = data.kljlrlarr;
          that.kljlrarr = data.kljlrarr;
          that.jxmsgxzhou = data.jxmsgxzhou;
          that.jyzlqs = data.jyzlqs;
          that.jxarr = data.jxarr; //
          that.chinaConfigure(name, that.cpmsgmap);
          let arr = [];
          // that.jyzlqs.map(el=>{
          //   let obj = {
          //    name: el.name,
          //    type: "line",
          //    smooth: true,
          //    data: el.data,
          //    areaStyle: {
          //      normal: {}
          //    }
          //  }
          //  arr.push(obj)
          // })
          console.log(arr)


          that.result1(data.jyzlqsx, that.cplist, arr);
          that.profit(that.cplist, that.klcz, that.sjcbyzrcb);
          that.contribution(that.rjxnarr, that.cplist); // 人均效能贡献值分析
          that.total(that.cplist, that.kljlrarr, that.kljlrlarr);
        } else {
          that.chinaConfigure(name, that.cpmsgmap);
        }
      });
    },
    components: {
      headers
    },
    methods: {
      // 开累净利润及开累近利润率
      total(list, arr, arr1) {
        let total = this.$echarts.init(this.$refs.total);
        total.setOption({
          grid: {
            top: "30px",
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          legend: {
            data: ["开累净利润", "开累近利润率"]
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          xAxis: {
            type: "category", //类型
            show: true, //是否显示x轴
            // boundaryGap: false,//两侧留白
            axisLine: {
              lineStyle: {
                //轴线样式
                color: "#E8E8E8"
              }
            },
            data: list,
            // axisTick: {show: false},
            // axisLine: {show: false},
            axisLabel: {
              interval: 0,
              rotate: 0,
              textStyle: {
                color: "#9B9B9B"
              },
              formatter: function (val) {
                var strs = val.split(""); //字符串数组
                var str = "";
                for (var i = 0, s; (s = strs[i++]);) {
                  //遍历字符串数组
                  str += s;
                  if (!(i % 2)) str += "\n"; //按需要求余
                }
                return str;
              }
            }
          },
          yAxis: [
            {
              name: "开累净利润",
              nameTextStyle: {
                padding: [0, 0, 0, -50], // 四个数字分别为上右下左与原位置距离
                color: "#9B9B9B"
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: "#E8E8E8",
                  width: 1,
                  type: "solid"
                }
              },
              axisTick: {show: false},
              axisLine: {show: false},
              axisLabel: {
                show: true,
                textStyle: {
                  color: "#9B9B9B"
                }
              }
            },
            {
              name: "开累近利润率",
              nameTextStyle: {
                padding: [0, 0, 0, 50], // 四个数字分别为上右下左与原位置距离
                color: "#9B9B9B"
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: "#E8E8E8",
                  width: 1,
                  type: "solid"
                }
              },
              axisTick: {show: false},
              axisLine: {show: false},
              axisLabel: {
                show: true,
                formatter: "{value} %",
                textStyle: {
                  color: "#9B9B9B"
                }
              }
            }
          ],
          color: ["#106BE9"],
          series: [
            {
              name: "开累净利润",
              type: "pictorialBar",
              //位置偏移
              // barCategoryGap: "-10%",
              //图形宽度
              // barWidth: 30,
              //图形形状
              symbol: "path://M150 50 L130 130 L170 130  Z",
              itemStyle: {
                normal: {
                  //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#106BE9" // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "#106BE9" // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#7ED2FF" // 100% 处的颜色
                    }
                  ]), //背景渐变色
                  lineStyle: {
                    // 系列级个性化折线样式
                    width: 3,
                    type: "solid",
                    color: "#E77899"
                  }
                }
              },
              data: arr,
              z: 10
            },
            {
              name: "glyph",
              type: "pictorialBar",
              barGap: "-100%",
              symbolPosition: "end",
              symbolSize: 50,
              symbolOffset: [0, "-120%"]
            },
            {
              name: "开累近利润率",
              data: arr1,
              yAxisIndex: 1,
              type: "line",
              itemStyle: {
                normal: {
                  color: "#FFC31C"
                }
              }
            }
          ]
        });
      },
      // 开累产值及实际成本与责任成本比值
      profit(list, arr, arr1) {
        let profit = this.$echarts.init(
          document.getElementById("profit_content")
        );
        profit.setOption({
          grid: {
            top: "30px",
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          legend: {
            data: ["开累产值", "实际成本与责任成本比值"]
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          xAxis: {
            type: "category", //类型
            show: true, //是否显示x轴
            // boundaryGap: false,//两侧留白
            axisLine: {
              lineStyle: {
                //轴线样式
                color: "#E8E8E8"
              }
            },
            data: list,
            // axisTick: {show: false},
            // axisLine: {show: false},
            axisLabel: {
              interval: 0,
              rotate: 0,
              textStyle: {
                color: "#9B9B9B"
              },
              formatter: function (val) {
                var strs = val.split(""); //字符串数组
                var str = "";
                for (var i = 0, s; (s = strs[i++]);) {
                  //遍历字符串数组
                  str += s;
                  if (!(i % 2)) str += "\n"; //按需要求余
                }
                return str;
              }
            }
          },
          yAxis: [
            {
              name: "开累产值",
              nameTextStyle: {
                padding: [0, 0, 0, -50], // 四个数字分别为上右下左与原位置距离
                color: "#9B9B9B"
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: "#E8E8E8",
                  width: 1,
                  type: "solid"
                }
              },
              axisTick: {show: false},
              axisLine: {show: false},
              axisLabel: {
                show: true,
                textStyle: {
                  color: "#9B9B9B"
                }
              }
            },
            {
              name: "实际成本与责任成本比值",
              nameTextStyle: {
                padding: [0, 0, 0, 50], // 四个数字分别为上右下左与原位置距离
                color: "#9B9B9B"
              },
              splitLine: {
                show: false,
                lineStyle: {
                  color: "#E8E8E8",
                  width: 1,
                  type: "solid"
                }
              },
              axisTick: {show: false},
              axisLine: {show: false},
              axisLabel: {
                show: true,
                formatter: "{value} %",
                textStyle: {
                  color: "#9B9B9B"
                }
              }
            }
          ],
          color: ["#106BE9"],
          series: [
            {
              name: "开累产值",
              type: "pictorialBar",
              //位置偏移
              // barCategoryGap: "-10%",
              //图形宽度
              // barWidth: 30,
              //图形形状
              symbol: "path://M150 50 L130 130 L170 130  Z",
              itemStyle: {
                normal: {
                  //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#106BE9" // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "#106BE9" // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#7ED2FF" // 100% 处的颜色
                    }
                  ]), //背景渐变色
                  lineStyle: {
                    // 系列级个性化折线样式
                    width: 3,
                    type: "solid",
                    color: "#E77899"
                  }
                }
              },
              data: arr,
              z: 10
            },
            {
              name: "glyph",
              type: "pictorialBar",
              barGap: "-100%",
              symbolPosition: "end",
              symbolSize: 50,
              symbolOffset: [0, "-120%"]
            },
            {
              name: "实际成本与责任成本比值",
              data: arr1,
              yAxisIndex: 1,
              type: "line",
              itemStyle: {
                normal: {
                  color: "#FFC31C"
                }
              }
            }
          ]
        });
      },
      // 区域公司人员绩效结果分布
      result1(list, cplist, arr) {
        let result = this.$echarts.init(
          document.getElementById("result_content")
        );
        result.setOption({
          grid: {
            top: "60px",
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          tooltip: {
            trigger: "axis"
          },
          legend: {
            data: cplist
          },

          toolbox: {},
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: list
          },
          yAxis: {
            type: "value"
          },
          series: arr
        });
      },
      // 地图
      chinaConfigure(name, arr) {
        let that = this;
        let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
        window.onresize = myChart.resize;
        myChart.setOption({
          // 进行相关配置
          tooltip: {
            formatter: function (params, ticket, callback) {
              return (
                params.name +
                "<br />" +
                "项目等级" +
                "：" +
                params.value[5] +
                "<br />" +
                "项目数量" +
                "：" +
                params.value[4] +
                "<br />" +
                "项目人数" +
                "：" +
                params.value[2]
              );
            } //数据格式化
          },
          grid: {
            top: "30px",
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          visualMap: {
            type: "continuous",
            min: 0,
            max: 200,
            calculable: true,
            inRange: {
              // color: ['#50a3ba', '#eac736', '#d94e5d']
            }
          },
          dataRange: {
            show: false,
            min: 0,
            max: 1000,
            left: "left",
            top: "top",
            realtime: false,
            calculable: false
          },

          geo: {
            // 这个是重点配置区
            map: "china", // 表示中国地图
            roam: true,
            // zoom:1.00,
            hoverAnimation: true, //鼠标悬浮是否有区域弹出动画，false:无  true:有
            label: {
              normal: {
                show: true, // 是否显示对应地名
                textStyle: {
                  color: "rgba(0,0,0,0.4)"
                }
              }
            },

            itemStyle: {
              normal: {
                color: "#FFF6F6",
                borderColor: "#E4434A"
              },
              emphasis: {
                areaColor: "",
                color: ""
              }
            }
          },
          // series,
          series: [
            {
              name: "启动次数", // 浮动框的标题
              type: "scatter",
              geoIndex: 0,
              coordinateSystem: "geo", // 对应上方配置
              data: convertData(arr),
              symbolSize: 35,
              symbol: function (data, params) {
                if (params.value[3] == 1) {
                  return "image://data:image/png;base64,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";
                } else if (params.value[3] == 2) {
                  return "image://data:image/png;base64,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";
                } else if (params.value[3] == 3) {
                  return "image://data:image/png;base64,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";
                }
              },
              label: {
                normal: {
                  show: false
                }
              },
              itemStyle: {
                normal: {},
                emphasis: {
                  areaColor: "", //设置为空字符串可使颜色不变
                  color: ""
                }
              }
            }
          ]
        });

        // 设置鼠标移入指定省份颜色不变的效果
        myChart.on("mouseover", function (params) {
          myChart.dispatchAction({
            type: "downplay"
          });
        });
        //点击事件,根据点击某个省份计算出这个省份的数据
        myChart.on("click", function (params) {
          let name = params.name;
          let arr = that.cplist;
          arr.map(el => {
            if (el == name) {
              that.$router.push({path: "/contribution", query: {xm: el}});
            } else {
            }
          });
        });
      },
      // 人均效能贡献值分析
      contribution(arr, arrName) {
        let contribution = echarts.init(this.$refs.contribution); //这里是为了获得容器所在位置
        contribution.setOption({
          grid: {
            top: "30px",
            left: "3%",
            right: "40px",
            bottom: "3%",
            containLabel: true
          },
          // legend: {
          //   data: arrName
          // },
          tooltip: {
            formatter: function (params, ticket, callback) {
              return (
                params.seriesName +
                "<br />" +
                "人均产值" +
                "：" +
                params.value[0] +
                "<br />" +
                "人均利润" +
                "：" +
                params.value[1] +
                "<br />" +
                "人均合同额" +
                "：" +
                params.value[2]
              );
            } //数据格式化
          },
          xAxis: {
            name: "人均成本",
            nameTextStyle: {
              padding: [0, 0, 0, -25], // 四个数字分别为上右下左与原位置距离
              color: "#9B9B9B"
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#E8E8E8",
                width: 1,
                type: "solid"
              }
            },
            axisTick: {show: false},
            axisLine: {show: false}
          },
          yAxis: {
            name: "人均利润",
            nameTextStyle: {
              padding: [0, 0, 0, -50], // 四个数字分别为上右下左与原位置距离
              color: "#9B9B9B"
            },
            splitLine: {
              lineStyle: {
                color: "#E8E8E8",
                width: 1,
                type: "solid"
              }
            },
            axisTick: {
              //y轴刻度线
              show: false
            },
            axisLine: {show: false}
          },
          series: mapData(arr)
        });
      }
    }
  };
</script>

<style scoped lang="scss">
  .container {
    width: 1920px;
    min-height: 1080px;

    .head {
      width: 1920px;
      height: 105px;
      background: rgba(172, 35, 23, 1);
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        font-size: 30px;
        color: rgba(255, 255, 255, 1);
        margin: 0 0 0 51px;
        font-family: "PangMenZhengDao";
      }

      .center {
        width: 826px;
        height: 146px;
        position: relative;

        img {
          width: 826px;
          position: absolute;
          left: 0;
          top: 0;
        }

        div {
          position: absolute;
          left: 0;
          top: 0;
          text-align: center;
          width: 826px;
          line-height: 146px;
          font-size: 40px;
          color: rgba(172, 35, 23, 1);
          font-family: "ZhangHaiShan";
        }
      }

      .right {
        text-align: right;
        margin: 0 68px 0 0;
        height: 105px;

        .detail {
          font-size: 8px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.84);
          margin: 32px 0 0 0;
          font-family: "PingFang-bold";
        }

        .time {
          font-size: 8px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
          margin: 4px 0 0 0;
        }
      }
    }

    .content {
      margin: 81px 0 0 0;
      display: flex;
      justify-content: flex-start;

      .left {
        margin: 0 0 0 64px;
        /*开累净利润及开累近利润率*/
        .total {
          width: 462px;
          height: 350px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.1);
          border-radius: 4px;

          .title {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #f1f1f1;

            .title_left {
              height: 75px;
              display: flex;
              justify-content: flex-start;
              align-items: center;

              span {
                width: 6px;
                height: 25px;
                background: rgba(172, 35, 23, 1);
                margin: 0 8px 0 32px;
              }

              div {
                font-size: 26px;
                font-family: PingFang-bold;
                font-weight: 800;
                color: rgba(0, 0, 0, 1);
              }
            }

            .title_right {
              .list {
                padding: 25px 0 0 0;

                .item {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  margin: 0 22px 8px 0;

                  span {
                    width: 12px;
                    height: 12px;
                    margin: 0 8px 0 0;
                    display: inline-block;
                  }

                  div {
                    font-size: 12px;
                    color: rgba(140, 140, 140, 1);
                    margin: 0 3px 0 0;
                  }
                }
              }
            }
          }

          .content {
            margin: 0 0 0 0;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            align-content: flex-start;

            .list {
              margin-top: 22px;

              .item {
                width: 401px;
                height: 21px;
                background: rgba(241, 241, 241, 1);
                border-radius: 11px;
                margin-bottom: 30px;
                position: relative;
                display: flex;
                justify-content: center;

                .item_left {
                  width: 122px;
                  height: 21px;
                  background: rgba(255, 152, 152, 1);
                  border-radius: 11px;
                  position: absolute;
                  right: 200px;
                  padding-left: 10px;
                  font-size: 14px;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 1);
                }

                .item_center {
                  line-height: 21px;
                  background: rgba(169, 169, 169, 1);
                  border-radius: 2px;
                  font-size: 16px;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 1);
                  padding: 0 10px;
                  z-index: 999;
                }

                .item_right {
                  width: 140px;
                  height: 21px;
                  background: rgba(40, 182, 222, 1);
                  border-radius: 0 11px 11px 0;
                  text-align: right;
                  padding-right: 10px;
                  font-size: 14px;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 1);
                  position: absolute;
                  left: 200px;
                }
              }
            }
          }
        }

        /*开累签约额及管理净利润率*/
        .profit {
          width: 462px;
          height: 350px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.1);
          border-radius: 4px;
          margin: 33px 0 0 0;

          .title {
            height: 75px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-bottom: 1px solid #f1f1f1;

            span {
              width: 6px;
              height: 25px;
              background: rgba(172, 35, 23, 1);
              margin: 0 8px 0 32px;
            }

            div {
              font-size: 26px;
              font-family: PingFang-bold;
              font-weight: 800;
              color: rgba(0, 0, 0, 1);
            }
          }
        }
      }

      .center {
        /*background-image: url("../assets/below.png")*/
        width: 867px;
        height: 640px;
        position: relative;

        .center_list {
          position: absolute;
          right: 20px;
          top: 0px;

          .item {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 0 0 9px 0;

            span {
              width: 14px;
              height: 14px;

              margin: 0 14px 0 0;
            }

            div {
              font-size: 16px;
              color: rgba(51, 51, 51, 1);
            }
          }
        }

        .center_echarts {
          width: 867px;
          height: 800px;
          background: rgba(0, 0, 0, 0);
        }
      }

      .right {
        /*区域公司人员绩效结果分布*/
        .result {
          width: 462px;
          height: 350px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.15);
          border-radius: 4px;

          .title {
            height: 75px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-bottom: 1px solid #f1f1f1;

            span {
              width: 6px;
              height: 25px;
              background: rgba(172, 35, 23, 1);
              margin: 0 8px 0 32px;
            }

            div {
              font-size: 26px;
              font-family: PingFang-bold;
              font-weight: 800;
              color: rgba(0, 0, 0, 1);
            }
          }
        }

        /*人均效能贡献值分析*/
        .contribution {
          width: 462px;
          height: 350px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.1);
          border-radius: 4px;
          margin: 0 0 33px 0;

          .title {
            height: 75px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-bottom: 1px solid #f1f1f1;

            span {
              width: 6px;
              height: 25px;
              background: rgba(172, 35, 23, 1);
              margin: 0 8px 0 32px;
            }

            div {
              font-size: 26px;
              font-family: PingFang-bold;
              font-weight: 800;
              color: rgba(0, 0, 0, 1);
            }
          }

          .content {
            margin: 0;
          }
        }
      }
    }
  }
</style>
