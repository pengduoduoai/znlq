<template>
  <div class="container">
    <headers msg="路桥-项目团队经营贡献盘点情况"></headers>
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
              <img src="../assets/8.png" alt/>开累产值（万元）
            </div>
          </div>
          <div class="item">
            <div class="money">{{klksje?klksje:'0'}}</div>
            <div class="detail">
              <img src="../assets/10.png" alt/>开累亏损金额（万元）
            </div>
          </div>
          <div class="item">
            <div class="money">{{kljlrl?kljlrl:'0'}}</div>
            <div class="detail">
              <img src="../assets/9.png" alt/>开累利润率（%）
            </div>
          </div>
          <div class="item">
            <div class="money">{{tbjlrl?tbjlrl:'0'}}</div>
            <div class="detail">
              <img src="../assets/10.png" alt/>投标/全策净利润率（%）
            </div>
          </div>
          <div class="item">
            <div class="money">{{jlrcy?jlrcy:'0'}}</div>
            <div class="detail">
              <img src="../assets/10.png" alt/>净利润差异（%）
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
                <img src="../assets/3.png" alt/>总人数
              </span>
              <div>{{user_num?user_num:'0'}}</div>
            </div>
          </div>
          <div class="list">
            <div class="item">
              <div>{{rjhte?rjhte:'0'}}</div>
              <span>
                <img src="../assets/4.png" alt/>人均合同额（万元）
              </span>
            </div>
            <div class="item">
              <div>{{rjlv?rjlv:'0'}}</div>
              <span>
                <img src="../assets/1.png" alt/>人均利润（万元）
              </span>
            </div>
            <div class="item">
              <div>{{rjcb?rjcb:'0'}}</div>
              <span>
                <img src="../assets/2.png" alt/>人均人工成本（万元）
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
                <img src="../assets/green.png" alt class="color"/>
              </template>
              <template v-else-if="item.color==2">
                <img src="../assets/yellow.png" alt class="color"/>
              </template>
              <template v-else-if="item.color==3">
                <img src="../assets/red.png" alt class="color"/>
              </template>

              <img :src="item.userimg" alt class="img"/>
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

  let formatNumberRgx = function (num) {
    var parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };
  export default {
    name: "contribution",
    data() {
      return {
        klcz: null,
        kljlrl: null,
        tbjlrl: null,
        rjlv: null,
        rjhte: null,
        rjcb: null,
        user_num: null,
        jxmsgxzhou: null,
        name: null,
        yjqh: null,
        usershow: null,
        klksje: null,
        jlrcy: null,
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
      that.$api.getxmdetaillq(xm).then(data => {
        if (data.code == 200) {
          that.klcz = data.klcz ? formatNumberRgx(data.klcz) : '';//开累产值
          that.kljlrl = data.kljlrl ? formatNumberRgx(data.kljlrl) : '';//开累净利润
          that.tbjlrl = data.tbjlrl;//开累净利润率
          that.rjlv = data.rjlv ? formatNumberRgx(data.rjlv) : '';//人均利润
          that.rjhte = data.rjhte ? formatNumberRgx(data.rjhte) : '';//人均合同额
          that.rjcb = data.rjcb ? formatNumberRgx(data.rjcb) : '';//人均人工成本
          that.user_num = data.user_num;//总人数
          that.jxmsgxzhou = data.jxmsgxzhou;
          that.jxarr = data.jxarr;
          that.name = data.name;
          that.klksje = data.klksje ? formatNumberRgx(data.klksje) : '';
          that.jlrcy = data.jlrcy;
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
        window.onresize = operation.resize;
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
            splitLine: {show: true},
            axisTick: {show: false},
            axisLine: {show: false},
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
              // barCategoryGap: "-10%",
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
        this.$router.push({name: "info", query: {username: e}});
      }
    }
  };
</script>

<style scoped lang="scss">
  .container {
    width: 19.2rem;
    min-height: 10.8rem;
    .content {
      display: flex;
      justify-content: flex-start;
      margin: .81rem 0 0 0;

      .left {
        margin: 0 0 0 .66rem;

        .finance {
          width: 2.71rem;
          height: 7.3rem;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 3px .31rem 0px rgba(121, 121, 121, 0.1);
          border-radius: .04rem;

          .title {
            height: .75rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-bottom: .01rem solid #f1f1f1;

            span {
              width: .06rem;
              height: .25rem;
              background: rgba(172, 35, 23, 1);
              margin: 0 .08rem 0 .32rem;
            }

            div {
              font-size: .26rem;
              font-family: PingFang-bold;
              font-weight: 800;
              color: rgba(0, 0, 0, 1);
            }
          }

          .item {
            margin: 0 0 .38rem .54rem;

            .money {
              font-size: .4rem;
              font-weight: bold;
              color: rgba(56, 122, 225, 1);
              text-shadow: 0px .05rem .05rem rgba(219, 236, 255, 1);
            }

            .detail {
              font-size: .16rem;
              font-weight: 500;
              color: rgba(51, 51, 51, 0.55);
              display: flex;
              justify-content: flex-start;
              align-items: center;

              img {
                margin-right: .07rem;
              }
            }
          }
        }
      }

      .center {
        margin: 0 0 0 .22rem;
        /*人效指标*/
        .index {
          width: 7.54rem;
          height: 2.59rem;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 3px .31rem 0px rgba(121, 121, 121, 0.1);
          border-radius: .04rem;

          .title {
            height: .75rem;
            border-bottom: .01rem solid #f1f1f1;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .title_left {
              margin: 0 0 0 .32rem;
              display: flex;
              justify-content: flex-start;
              align-items: center;

              span {
                width: .06rem;
                height: .25rem;
                background: rgba(172, 35, 23, 1);
                margin: 0 .08rem 0 0;
              }

              div {
                font-size: .26rem;
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
                font-size: .16rem;
                font-family: "PingFang-Medium";
                color: rgba(51, 51, 51, 0.55);
                margin-right: .07rem;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                img {
                  margin-right: .04rem;
                }
              }

              div {
                font-size: .4rem;
                font-weight: bold;
                color: rgba(255, 149, 28, 1);
                text-shadow: 0px .05rem .05rem rgba(255, 235, 213, 1);
              }
            }
          }

          .list {
            height: 1.83rem;
            display: flex;
            justify-content: space-around;
            align-items: center;

            .item {
              div {
                font-size: .4rem;
                font-weight: bold;
                color: rgba(255, 149, 28, 1);
                text-shadow: 0px .05rem .05rem rgba(255, 235, 213, 1);
              }

              span {
                font-size: .16rem;
                font-family: "PingFang-Medium";
                font-weight: 500;
                color: rgba(51, 51, 51, 0.55);
                display: flex;
                justify-content: flex-start;
                align-items: center;

                img {
                  margin-right: .04rem;
                }
              }
            }
          }
        }

        .operation {
          width: 7.52rem;
          height: 4.48rem;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 3px .31rem 0px rgba(121, 121, 121, 0.15);
          border-radius: .04rem;
          margin-top: .23rem;

          .title {
            height: .75rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-bottom: .01rem solid #f1f1f1;

            span {
              width: .06rem;
              height: .25rem;
              background: rgba(172, 35, 23, 1);
              margin: 0 .08rem 0 .32rem;
            }

            div {
              font-size: .26rem;
              font-family: PingFang-bold;
              font-weight: 800;
              color: rgba(0, 0, 0, 1);
            }
          }

          #operation_content {
            width: 100%;
            height: 3.73rem;
          }
        }
      }

      .right {
        width: 7.19rem;
        height: 7.3rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px .31rem 0px rgba(121, 121, 121, 0.1);
        border-radius: .04rem;
        margin: 0 0 0 .23rem;

        .title {
          height: .75rem;
          border-bottom: .01rem solid #f1f1f1;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .title_left {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 0 0 0 .39rem;

            span {
              width: .06rem;
              height: .29rem;
              background: rgba(172, 35, 23, 1);
              margin: 0 .08rem 0 0;
            }

            div {
              font-size: .26rem;
              font-family: "PingFang-bold";
              font-weight: 800;
              color: rgba(0, 0, 0, 1);
            }
          }

          .title_right {
            font-size: .2rem;
            font-family: "PingFang-Medium";
            font-weight: 500;
            color: rgba(172, 35, 23, 1);
            margin: 0 .25rem 0 0;
          }
        }

        .list {
          height: 6.30rem;
          overflow-y: auto;

          .item {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: .54rem 0 .2rem 0;

            .item_left {
              margin: 0 0 0 .5rem;
              width: 2.4rem;
              height: 1.27rem;
              background: rgba(255, 255, 255, 1);
              box-shadow: 0px 11px .36rem 0px rgba(154, 141, 141, 0.33);
              border-radius: .09rem;
              position: relative;
              cursor: pointer;

              .age {
                font-size: .12rem;
                font-weight: 400;
                color: rgba(51, 51, 51, 0.67);
                position: absolute;
                top: .18rem;
                left: .15rem;
                z-index: 9;
              }

              .position {
                font-size: .13rem;
                font-weight: 400;
                color: rgba(0, 0, 0, 1);
                position: absolute;
                top: .46rem;
                left: .15rem;
                z-index: 9;
              }

              .color {
                width: .97rem;
                position: absolute;
                top: .78rem;
                z-index: 9;
                left: -.08rem;
              }

              .img {
                height: 1.18rem;
                position: absolute;
                right: 0px;
                top: .09rem;
              }

              .name {
                font-size: .18rem;
                font-family: PingFang-bold;
                font-weight: bold;
                color: rgba(255, 255, 255, 1);
                position: absolute;
                top: .79rem;
                left: .16rem;
                z-index: 9;
              }
            }

            .item_right {
              width: 4.62rem;
              margin: 0 0 0 .42rem;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              overflow-x: auto;

              .right_item {
                width: .98rem;
                height: 1.02rem;
                background: rgba(233, 16, 16, 0.03);
                border-radius: .08rem;
                margin-right: .42rem;
                text-align: center;
                cursor: pointer;

                .detail {
                  font-size: .14rem;
                  color: rgba(51, 51, 51, 0.44);
                  margin-top: .1rem;
                }

                .name {
                  font-size: .2rem;
                  font-family: PingFang-bold;
                  font-weight: bold;
                  color: rgba(0, 0, 0, 1);
                  margin-top: .05rem;
                }

                .age {
                  font-size: .12rem;
                  font-weight: 400;
                  color: rgba(51, 51, 51, 0.44);
                  margin-top: .1rem;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
