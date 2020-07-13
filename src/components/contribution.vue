<template>
  <div class="container">
    <headers msg="土木-项目团队经营贡献盘点情况"></headers>
    <div class="content">
      <div class="left">
        <!--        财务指标-->
        <div class="finance">
          <div class="title">
            <span></span>
            <div>项目盘点关键指标</div>
          </div>
          <div class="item">
            <div class="money">{{klcz?klcz:'0'}}</div>
            <div class="detail">
              <img src="../assets/8.png" alt />开累产值（万元）
            </div>
          </div>
          <div class="item">
            <div class="money">{{kljlr?kljlr:'0'}}</div>
            <div class="detail">
              <img src="../assets/7.png" alt />开累利润（万元）
            </div>
          </div>
          <div class="item">
            <div class="money">{{yjqh?yjqh:'0'}}</div>
            <div class="detail">
              <img src="../assets/9.png" alt />开累利润率（%）
            </div>
          </div>
          <div class="item">
            <div class="money">{{kljlrl?kljlrl:'0'}}</div>
            <div class="detail">
              <img src="../assets/10.png" alt />实际成本与责任成本比值（万元）
            </div>
          </div>
        </div>
      </div>
      <div class="center">
        <!--        人效指标-->
        <div class="index">
          <div class="title">
            <div class="title_left">
              <span></span>
              <div>人效指标</div>
            </div>
            <div class="title_right">
              <span>
                <img src="../assets/3.png" alt />总人数
              </span>
              <div>{{user_num?user_num:'0'}}</div>
            </div>
          </div>
          <div class="list">
            <div class="item">
              <div>{{rjhte?rjhte:'0'}}</div>
              <span>
                <img src="../assets/4.png" alt />人均合同额（万元）
              </span>
            </div>
            <div class="item">
              <div>{{rjlr?rjlr:'0'}}</div>
              <span>
                <img src="../assets/1.png" alt />人均利润（万元）
              </span>
            </div>
            <div class="item">
              <div>{{rjrgcb?rjrgcb:'0'}}</div>
              <span>
                <img src="../assets/2.png" alt />人均人工成本（万元）
              </span>
            </div>
          </div>
        </div>
        <!--        季度运营指标-->
        <div class="operation">
          <div class="title">
            <span></span>
            <div>季度运营指标</div>
          </div>
          <div class="operation_content" id="operation_content"></div>
        </div>
      </div>
      <!--      关键岗位及后备梯队-->
      <div class="right">
        <div class="title">
          <div class="title_left">
            <span></span>
            <div>关键岗位及后备梯队</div>
          </div>
          <div class="title_right">{{name}}</div>
        </div>
        <div class="list">
          <div class="item" v-for="(item,index) in usershow" :key="index">
            <div class="item_left" @click="getname(item.gjgw_usernama)">
              <div class="age">{{item.gjgw_age}}岁/{{item.gjgw_xueli}}</div>
              <div class="position">{{item.gjgw}}</div>
              <template v-if="item.color==1">
                <img src="../assets/green.png" alt class="color" />
              </template>
              <template v-else-if="item.color==2">
                <img src="../assets/yellow.png" alt class="color" />
              </template>
              <template v-else-if="item.color==3">
                <img src="../assets/red.png" alt class="color" />
              </template>

              <img :src="item.userimg" alt class="img" />
              <div class="name">{{item.gjgw_usernama}}</div>
            </div>
            <div class="item_right">
              <template v-if=" item.firstclass.have">
                <div class="right_item" v-for="(item1,index) in item.firstclass.users" :key="index">
                  <div class="detail">第一继任梯队</div>
                  <div class="name">{{item1.user}}</div>
                  <div class="age">{{item1.age}}岁/{{item1.xueli}}</div>
                </div>
              </template>
              <template v-if="item.secendclass.have!=0">
                <div
                  class="right_item"
                  v-for="(item2,index) in item.secendclass.users"
                  :key="index"
                >
                  <div class="detail">第二继任梯队</div>
                  <div class="name">{{item2.user}}</div>
                  <div class="age">{{item2.age}}岁/{{item2.xueli}}</div>
                </div>
              </template>
              <template v-if=" item.thirdclass.have!=0">
                <div class="right_item" v-for="(item3,index) in item.thirdclass.users" :key="index">
                  <div class="detail">第三继任梯队</div>
                  <div class="name">{{item3.user}}</div>
                  <div class="age">{{item3.age}}岁/{{item3.xueli}}</div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let echarts = require("echarts");
import headers from "./header.vue";

let formatNumberRgx = function(num) {
  var parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};
export default {
  name: "contribution",
  data() {
    return {
      klcz: null,
      kljlr: null,
      kljlrl: null,
      rjlr: null,
      rjhte: null,
      rjrgcb: null,
      user_num: null,
      jxmsgxzhou: null,
      name: null,
      yjqh: null,
      usershow: null
    };
  },
  created() {
    window.scrollTo(0, 0);
  },
  components: {
    headers
  },
  mounted() {
    let that = this;
    let xm = this.$route.query.xm;
    that.$api.getxmdetailaz(xm).then(data => {
      if (data.code == 200) {
        that.klcz = data.klcz?formatNumberRgx(data.klcz):'';//开累产值
        that.kljlr = data.kljlr?formatNumberRgx(data.kljlr):'';//开累净利润
        that.kljlrl = data.kljlrl;//开累净利润率
        that.rjlr = data.rjlr?formatNumberRgx(data.rjlr):'';//人均利润
        that.rjhte = data.rjhte?formatNumberRgx(data.rjhte):'';//人均合同额
        that.rjrgcb = data.rjrgcb?formatNumberRgx(data.rjrgcb):'';//人均人工成本
        that.user_num = data.user_num;//总人数
        that.jxmsgxzhou = data.jxmsgxzhou;
        that.jxarr = data.jxarr;
        that.name = data.name;
        that.yjqh = data.yjqh;
        that.usershow = data.usershow;

        that.operation(that.jxmsgxzhou, that.jxarr);
      }
    });
  },
  methods: {
    operation(list, arr, arr1) {
      let operation = this.$echarts.init(
        document.getElementById("operation_content")
      );
      operation.setOption({
        grid: {
          top: "30px",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
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
              color: "#fff"
            }
          },
          data: list,
          axisLabel: {
            interval: 0,
            rotate: 0,
            textStyle: {
              color: "#9B9B9B"
            }
          }
        },
        yAxis: {
          splitLine: { show: true },
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#9B9B9B"
            }
          }
        },
        color: ["#106BE9"],
        series: [
          {
            name: "季度运营指标",
            type: "pictorialBar",
            //位置偏移
            barCategoryGap: "-10%",
            //图形宽度
            barWidth: 60,
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
            }, //线条样式
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
          }
        ]
      });
    },
    getname(e) {
      this.$router.push({ name: "info", query: { username: e } });
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
    display: flex;
    justify-content: flex-start;
    margin: 81px 0 0 0;

    .left {
      margin: 0 0 0 66px;

      .finance {
        width: 271px;
        height: 730px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.1);
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

        .item {
          margin: 0 0 38px 54px;

          .money {
            font-size: 40px;
            font-family: "DIN";
            font-weight: bold;
            color: rgba(56, 122, 225, 1);
            text-shadow: 0px 5px 5px rgba(219, 236, 255, 1);
          }

          .detail {
            font-size: 16px;
            font-weight: 500;
            color: rgba(51, 51, 51, 0.55);
            display: flex;
            justify-content: flex-start;
            align-items: center;

            img {
              margin-right: 7px;
            }
          }
        }
      }
    }

    .center {
      margin: 0 0 0 22px;
      /*人效指标*/
      .index {
        width: 754px;
        height: 259px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.1);
        border-radius: 4px;

        .title {
          height: 75px;
          border-bottom: 1px solid #f1f1f1;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .title_left {
            margin: 0 0 0 32px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            span {
              width: 6px;
              height: 25px;
              background: rgba(172, 35, 23, 1);
              margin: 0 8px 0 0;
            }

            div {
              font-size: 26px;
              font-family: "PingFang-bold";
              font-weight: 800;
              color: rgba(0, 0, 0, 1);
            }
          }

          .title_right {
            display: flex;
            justify-content: flex-start;
            align-items: flex-end;
            margin: 0 43px 0 0;

            span {
              font-size: 16px;
              font-family: "PingFang-Medium";
              color: rgba(51, 51, 51, 0.55);
              margin-right: 7px;
              display: flex;
              justify-content: flex-start;
              align-items: center;

              img {
                margin-right: 4px;
              }
            }

            div {
              font-size: 40px;
              font-family: "DIN";
              font-weight: bold;
              color: rgba(255, 149, 28, 1);
              text-shadow: 0px 5px 5px rgba(255, 235, 213, 1);
            }
          }
        }

        .list {
          height: 183px;
          display: flex;
          justify-content: space-around;
          align-items: center;

          .item {
            div {
              font-size: 40px;
              font-family: "DIN";
              font-weight: bold;
              color: rgba(255, 149, 28, 1);
              text-shadow: 0px 5px 5px rgba(255, 235, 213, 1);
            }

            span {
              font-size: 16px;
              font-family: "PingFang-Medium";
              font-weight: 500;
              color: rgba(51, 51, 51, 0.55);
              display: flex;
              justify-content: flex-start;
              align-items: center;

              img {
                margin-right: 4px;
              }
            }
          }
        }
      }

      .operation {
        width: 752px;
        height: 448px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.15);
        border-radius: 4px;
        margin-top: 23px;

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

        #operation_content {
          width: 100%;
          height: 373px;
        }
      }
    }

    .right {
      width: 719px;
      height: 730px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.1);
      border-radius: 4px;
      margin: 0 0 0 23px;

      .title {
        height: 75px;
        border-bottom: 1px solid #f1f1f1;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title_left {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin: 0 0 0 39px;

          span {
            width: 6px;
            height: 29px;
            background: rgba(172, 35, 23, 1);
            margin: 0 8px 0 0;
          }

          div {
            font-size: 26px;
            font-family: "PingFang-bold";
            font-weight: 800;
            color: rgba(0, 0, 0, 1);
          }
        }

        .title_right {
          font-size: 20px;
          font-family: "PingFang-Medium";
          font-weight: 500;
          color: rgba(172, 35, 23, 1);
          margin: 0 25px 0 0;
        }
      }

      .list {
        height: 630px;
        overflow-y: auto;

        .item {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin: 54px 0 20px 0;

          .item_left {
            margin: 0 0 0 50px;
            width: 240px;
            height: 127px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 11px 36px 0px rgba(154, 141, 141, 0.33);
            border-radius: 9px;
            position: relative;
            cursor: pointer;

            .age {
              font-size: 12px;
              font-weight: 400;
              color: rgba(51, 51, 51, 0.67);
              position: absolute;
              top: 18px;
              left: 15px;
              z-index: 9;
            }

            .position {
              font-size: 13px;
              font-weight: 400;
              color: rgba(0, 0, 0, 1);
              position: absolute;
              top: 46px;
              left: 15px;
              z-index: 9;
            }

            .color {
              width: 97px;
              position: absolute;
              top: 78px;
              z-index: 9;
              left: -8px;
            }

            .img {
              /*width: 124px;*/
              height: 118px;
              position: absolute;
              right: 0px;
              top: 9px;
            }

            .name {
              font-size: 18px;
              font-family: PingFang-bold;
              font-weight: bold;
              color: rgba(255, 255, 255, 1);
              position: absolute;
              top: 79px;
              left: 16px;
              z-index: 9;
            }
          }

          .item_right {
            width: 462px;
            margin: 0 0 0 42px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            overflow-x: auto;

            .right_item {
              width: 98px;
              height: 102px;
              background: rgba(233, 16, 16, 0.03);
              border-radius: 8px;
              margin-right: 42px;
              text-align: center;
              cursor: pointer;

              .detail {
                font-size: 14px;
                color: rgba(51, 51, 51, 0.44);
                margin-top: 10px;
              }

              .name {
                font-size: 20px;
                font-family: PingFang-bold;
                font-weight: bold;
                color: rgba(0, 0, 0, 1);
                margin-top: 5px;
              }

              .age {
                font-size: 12px;
                font-weight: 400;
                color: rgba(51, 51, 51, 0.44);
                margin-top: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
