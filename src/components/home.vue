<template>
  <div class="container">
    <headers msg="路桥-经营概况总览"/>
    <div class="center">
      <div class="left">
        <!--        财务指标-->
        <div class="finance">
          <div class="title">
            <div class="title_left">
              <span></span>
              <div>财务指标(亿元)</div>
            </div>
            <div class="title_right">
              <div>{{usermsg?usermsg.jlrl:'0'}}%</div>
              <span>净利润率</span>
            </div>
          </div>
          <div class="list">
            <div class="item" style="line-height: 40px">
              <div style="width:20%"></div>
              <div style="font-size: 18px">完成情况</div>
              <div style="font-size: 18px">完成率</div>
              <div style="font-size: 18px">同期增长率</div>
            </div>
            <div class="item" style=" background: rgba(238,238,238,.6)">
              <div style="width:20%;text-align: center;">产值</div>
              <div class="num">{{usermsg?usermsg.czwcqk:'0'}}</div>
              <div class="num">{{usermsg?usermsg.czwcl:'0'}}%</div>
              <div class="num">{{usermsg?usermsg.cztqzzl:'0'}}%</div>
            </div>
            <div class="item" style=" background: rgba(238,238,238,.6)">
              <div style="width:20%;text-align: center;">利润</div>
              <div class="num">{{usermsg?usermsg.lrwcqk:'0'}}</div>
              <div class="num">{{usermsg?usermsg.lrwcl:'0'}}%</div>
              <div class="num">{{usermsg?usermsg.lrtqzzl:'0'}}%</div>
            </div>
            <div class="item" style=" background: rgba(238,238,238,.6)">
              <div style="width:20%;text-align: center;">合同额</div>
              <div class="num">{{usermsg?usermsg.htewcqk:'0'}}</div>
              <div class="num">{{usermsg?usermsg.htewcl:'0'}}%</div>
              <div class="num">{{usermsg?usermsg.htetqzzl:'0'}}%</div>
            </div>
            <div class="item" style=" background: rgba(238,238,238,.6)">
              <div style="width:20%;text-align: center;">回款</div>
              <div class="num">{{usermsg?usermsg.hkwcqk:'0'}}</div>
              <div class="num">{{usermsg?usermsg.hkwcl:'0'}}%</div>
              <div class="num">{{usermsg?usermsg.hktqzzl:'0'}}%</div>
            </div>
          </div>
        </div>
        <!--        人效指标-->
        <div class="human">
          <div class="title">
            <div class="title_left">
              <span></span>
              <div>人效指标(万元)</div>
            </div>
            <div class="title_right">
              <div>{{usermsg?usermsg.zrs:'0'}}</div>
              <span>总人数(管理人员)</span>
            </div>
          </div>
          <div class="list">
            <div class="item">
              <div class="money">{{usermsg?usermsg.rjhte:'0'}}</div>
              <div class="detail">
                人均合同额
              </div>
            </div>
            <div class="item">
              <div class="money">{{usermsg?usermsg.rjlr:'0'}}</div>
              <div class="detail">
                人均利润
              </div>
            </div>
            <div class="item">
              <div class="money">{{usermsg?usermsg.rjrgcb:'0'}}</div>
              <div class="detail">
                人均人工成本
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="right">

        <div class="right_bottom">
          <div class="right_head">
            <div class="head_left"><span></span>经营概况</div>
            <div class="head_right">
              <div class="item">
                <div style="background:#42BA24 "></div>
                <span>经营盈利</span></div>
              <div class="item">
                <div style="background:#F29426 "></div>
                <span>经营持平</span></div>
              <div class="item">
                <div style="background:#AC2317 "></div>
                <span>经营亏损</span></div>
            </div>
          </div>
          <div class="right_list">
            <div class="list">
              <div class="list_left">
                <div class="num">01</div>
                <div class="title">B类公司</div>
                <div class="look" @click="jump('B')">查看</div>
              </div>
              <div class="list_right">
                <template v-for="(item,index) in A">
                  <template v-if="item.color==1">
                    <div class="item"
                         style="background:rgba(172,35,23,1);box-shadow:0px 5px 7px 0px rgba(172,35,23,0.22);"
                         @click="jump1(item)">
                      <div>{{item.name}}</div>
                      <img src="../assets/region.png" alt style="width: 50px;margin-top: 12px"/>
                    </div>
                  </template>
                  <template v-else-if="item.color==2">
                    <div class="item"
                         style="background:rgba(66,186,36,1);box-shadow:0px 6px 12px 0px rgba(66,186,36,0.25);"
                         @click="jump1(item)">
                      <div>{{item.name}}</div>
                      <img src="../assets/region.png" alt style="width: 50px;margin-top: 12px"/>
                    </div>
                  </template>
                  <template v-else-if="item.color==3">
                    <div class="item"
                         style="background:rgba(242,148,38,1);box-shadow:0px 6px 8px 0px rgba(242,148,38,0.21);"
                         @click="jump1(item)">
                      <div>{{item.name}}</div>
                      <img src="../assets/region.png" alt style="width: 50px;margin-top: 12px"/>
                    </div>
                  </template>
                  <template v-else>
                    <div class="item"
                         style="background:rgba(121,121,121,.5);box-shadow:0px 3px 31px 0px rgba(121,121,121,0.1);"
                         @click="jump1(item)">
                      <div>{{item.name}}</div>
                      <img src="../assets/region.png" alt style="width: 50px;margin-top: 12px"/>
                    </div>
                  </template>


                </template>
              </div>
            </div>
            <div class="list">
              <div class="list_left">
                <div class="num">02</div>
                <div class="title">D类公司</div>
                <div class="look" @click="jump('D')">查看</div>
              </div>
              <div class="list_right">
                <template v-for="(item,index) in B">
                  <template v-if="item.color==1">
                    <div class="item"
                         style="background:rgba(172,35,23,1);box-shadow:0px 5px 7px 0px rgba(172,35,23,0.22);"
                         @click="jump1(item)">
                      <div>{{item.name}}</div>
                      <img src="../assets/region.png" alt style="width: 50px;margin-top: 12px"/>
                    </div>
                  </template>
                  <template v-else-if="item.color==2">
                    <div class="item"
                         style="background:rgba(66,186,36,1);box-shadow:0px 6px 12px 0px rgba(66,186,36,0.25);"
                         @click="jump1(item)">
                      <div>{{item.name}}</div>
                      <img src="../assets/region.png" alt style="width: 50px;margin-top: 12px"/>
                    </div>
                  </template>
                  <template v-else-if="item.color==3">
                    <div class="item"
                         style="background:rgba(242,148,38,1);box-shadow:0px 6px 8px 0px rgba(242,148,38,0.21);"
                         @click="jump1(item)">
                      <div>{{item.name}}</div>
                      <img src="../assets/region.png" alt style="width: 50px;margin-top: 12px"/>
                    </div>
                  </template>
                  <template v-else>
                    <div class="item"
                         style="background:rgba(121,121,121,.5);box-shadow:0px 3px 31px 0px rgba(121,121,121,0.1);"
                         @click="jump1(item)">
                      <div>{{item.name}}</div>
                      <img src="../assets/region.png" alt style="width: 50px;margin-top: 12px"/>
                    </div>
                  </template>
                </template>
              </div>
            </div>
            <div class="list">
              <div class="list_left">
                <div class="num">03</div>
                <div class="title">E类公司</div>
                <div class="look" @click="jump('E')">查看</div>
              </div>
              <div class="list_right">
                <template v-for="(item,index) in C">
                  <template v-if="item.color==1">
                    <div class="item"
                         style="background:rgba(172,35,23,1);box-shadow:0px 5px 7px 0px rgba(172,35,23,0.22);"
                         @click="jump1(item)">
                      <div>{{item.name}}</div>
                      <img src="../assets/region.png" alt style="width: 50px;margin-top: 12px"/>
                    </div>
                  </template>
                  <template v-else-if="item.color==2">
                    <div class="item"
                         style="background:rgba(66,186,36,1);box-shadow:0px 6px 12px 0px rgba(66,186,36,0.25);"
                         @click="jump1(item)">
                      <div>{{item.name}}</div>
                      <img src="../assets/region.png" alt style="width: 50px;margin-top: 12px"/>
                    </div>
                  </template>
                  <template v-else-if="item.color==3">
                    <div class="item"
                         style="background:rgba(242,148,38,1);box-shadow:0px 6px 8px 0px rgba(242,148,38,0.21);"
                         @click="jump1(item)">
                      <div>{{item.name}}</div>
                      <img src="../assets/region.png" alt style="width: 50px;margin-top: 12px"/>
                    </div>
                  </template>
                  <template v-else>
                    <div class="item"
                         style="background:rgba(121,121,121,.5);box-shadow:0px 3px 31px 0px rgba(121,121,121,0.1);"
                         @click="jump1(item)">
                      <div>{{item.name}}</div>
                      <img src="../assets/region.png" alt style="width: 50px;margin-top: 12px"/>
                    </div>
                  </template>
                </template>
              </div>
            </div>

          </div>
        </div>
        <!--          季度运营指标-->
        <div class="operation">
          <div class="title">
            <span></span>
            <div>季度运营指标</div>
          </div>
          <div class="operation_content" id="operation_content"></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  let echarts = require('echarts');
  import headers from './header.vue';

  export default {
    name: 'company',
    data() {
      return {
        usermsg: null,
        msg: null,
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
      };
    },
    components: {
      headers
    },
    created() {
      let that = this;
      window.scrollTo(0, 0);
      let name = that.$route.query.name;
      console.log(name);
      this.$api.getcplq().then(data => {
        if (data.code == 200) {
          that.A = data.datashow.B;
          that.B = data.datashow.D;
          that.C = data.datashow.E;
        }
      });
      that.$api.getcpofjz('路桥公司')
        .then(data => {
          if (data.code == 200) {
            console.log(data.data);
            that.usermsg = data.data;
            that.operation(data.jxx, data.jx);
          }
        });
    },
    methods: {
      jump(e) {
        this.$router.push({ path: "/city", query: { type: e } });
      },
      // jump1(e) {
      //   this.$router.push({
      //     path: "/region",
      //     query: {name: e.sheng, qy: '安装'+e.name}
      //   });
      // },
      operation(list, arr) {
        let operation = this.$echarts.init(document.getElementById('operation_content'));
        operation.setOption({
          grid: {
            top: '30px',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          xAxis: {
            type: 'category',//类型
            show: true,//是否显示x轴
            // boundaryGap: false,//两侧留白
            axisLine: {

              lineStyle: {//轴线样式
                color: '#fff'
              }
            },
            data: list,
            axisLabel: {
              interval: 0,
              rotate: 0,
              textStyle: {
                color: '#9B9B9B'
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
                color: '#9B9B9B'
              }
            }
          },
          color: ['#106BE9'],
          series: [{
            name: '季度运营指标',
            type: 'pictorialBar',
            //位置偏移
            // barCategoryGap: '-10%',
            //图形宽度
            barWidth: 60,
            //图形形状
            symbol: 'path://M150 50 L130 130 L170 130  Z',
            itemStyle: {
              normal: {   //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0, color: '#106BE9' // 0% 处的颜色
                  }, {
                    offset: 0.5, color: '#106BE9' // 100% 处的颜色
                  }, {
                    offset: 1, color: '#7ED2FF' // 100% 处的颜色
                  }]
                ),  //背景渐变色
                lineStyle: {        // 系列级个性化折线样式
                  width: 3,
                  type: 'solid',
                  color: '#E77899'
                }
              },
            },//线条样式
            data: arr,
            z: 10
          }, {
            name: 'glyph',
            type: 'pictorialBar',
            barGap: '-100%',
            symbolPosition: 'end',
            symbolSize: 50,
            symbolOffset: [0, '-120%']
          },

          ]
        });
      },
    }
  };
</script>

<style scoped lang="scss">
  .center {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;

    .left {
      margin: 84px 0 0 62px;
      /*财务指标*/

      .finance {
        width: 729px;
        height: 570px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.1);
        border-radius: 4px;

        .title {
          height: 75px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #f1f1f1;

          .title_left {
            display: flex;
            align-items: center;

            div {
              font-size: 26px;
              font-weight: 800;
              color: rgba(0, 0, 0, 1);
            }

            span {
              display: inline-block;
              width: 6px;
              height: 25px;
              background: rgba(172, 35, 23, 1);
              margin: 0 8px 0 32px;
            }
          }

          .title_right {
            text-align: center;
            margin: 0 32px 0 0;

            div {
              font-size: 26px;

              font-weight: bold;
              color: rgba(56, 122, 225, 1);
              text-shadow: 0px 5px 5px rgba(232, 243, 255, 1);

            }
          }
        }

        .list {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;


          .item {
            width: 94%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 33px 0 0 3%;
            border-radius: 5px;
            line-height: 65px;

            div {
              width: 27%;
              text-align: center;
              font-size: 22px;
              font-weight: 500;
            }

            .num {
              font-size: 30px;
              font-weight: bold;
              color: rgba(56, 122, 225, 1);
              text-shadow: 0px 5px 5px rgba(232, 243, 255, 1);
            }
          }
        }
      }

      /*人效指标*/
      .human {
        width: 729px;
        height: 348px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.1);
        border-radius: 4px;
        margin: 12px 0 0 0;

        .title {
          height: 75px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #f1f1f1;

          .title_left {
            display: flex;
            align-items: center;

            div {
              font-size: 26px;
              font-weight: 800;
              color: rgba(0, 0, 0, 1);
            }

            span {
              display: inline-block;
              width: 6px;
              height: 25px;
              background: rgba(172, 35, 23, 1);
              margin: 0 8px 0 32px;
            }
          }

          .title_right {
            text-align: center;
            margin: 0 32px 0 0;

            div {
              font-size: 26px;
              font-weight: bold;
              color: rgba(255, 149, 28, 1);
              line-height: 40px;
              text-shadow: 0px 5px 5px rgba(255, 235, 213, 1);

            }
          }
        }

        .list {
          margin: 43px 0 0 54px;
          display: flex;
          justify-content: space-between;

          .item {
            width: 206px;
            /*margin: 0 68px 0 0;*/
            .money {
              font-size: 40px;
              font-weight: bold;
              color: rgba(255, 149, 28, 1);
              line-height: 40px;
              text-shadow: 0px 5px 5px rgba(255, 235, 213, 1);

              margin-bottom: 10px;
            }

            .detail {
              font-size: 16px;
              font-weight: 500;
              color: rgba(51, 51, 51, 1);
              display: flex;
              justify-content: flex-start;
              align-items: center;

              img {
                margin: 0 7px 0 0;
              }
            }
          }
        }
      }
    }

    .right {
      margin: 60px 0 0 19px;
      width: 1041px;
      border-radius: 4px;

      .operation {
        width: 1041px;
        height: 350px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.15);
        border-radius: 4px;
        margin-top: 10px;

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
          height: 250px;
        }
      }

      .right_bottom {
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.1);
        margin: 24px 0 0 0;


        .right_head {
          height: 75px;
          border-bottom: 1px solid #f1f1f1;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .head_left {
            height: 75px;
            font-size: 26px;
            font-weight: 800;
            color: rgba(0, 0, 0, 1);
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-bottom: 1px solid #f1f1f1;

            span {
              display: inline-block;
              width: 6px;
              height: 25px;
              background: rgba(172, 35, 23, 1);
              margin: 0 8px 0 32px;
            }
          }

          .head_right {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin: 0 16px 0 0;

            .item {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              margin: 0 0 0 38px;

              div {
                width: 13px;
                height: 13px;
              }

              span {
                font-size: 12px;
                font-weight: 400;
                color: rgba(140, 140, 140, 1);
                margin: 0 0 0 3px;
              }
            }
          }
        }

        .right_list {
          padding-bottom: 20px;
          height: 470px;
          overflow-y: auto;
          /*background: red;*/
        }

        .list {
          display: flex;
          justify-content: flex-start;
          margin: 20px 0 0 35px;


          .list_left {
            width: 288px;
            height: 138px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.15);
            border-radius: 8px;
            position: relative;

            .num {
              font-size: 110px;
              font-weight: bold;
              color: rgba(216, 216, 216, 1);
              margin: 0 0 0 22px;
              opacity: 0.27;
              font-family: 'DIN';
            }

            .title {
              width: 130px;
              position: absolute;
              right: 11px;
              top: 26px;
              font-size: 26px;
              color: rgba(51, 51, 51, 1);
              font-family: "PingFang-bold";
            }

            .look {
              width: 101px;
              height: 31px;
              border-radius: 18px;
              opacity: 0.79;
              border: 1px solid rgba(151, 151, 151, 1);
              font-size: 18px;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
              text-align: center;
              line-height: 31px;
              position: absolute;
              left: 139px;
              top: 72px;
              cursor: pointer;
            }
          }

          .list_right {
            width: 728px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            /*align-content: flex-start;*/
            padding-top: 7px;
            flex-wrap: wrap;
            margin: 0 0 0 55px;

            .item {
              width: 137px;
              height: 52px;
              /*background: rgba(66, 186, 36, 1);*/
              /*box-shadow: 0px 6px 12px 0px rgba(66, 186, 36, 0.25);*/
              border-radius: 6px;
              margin: 0 15px 0 0;
              display: flex;
              justify-content: flex-start;
              align-items: flex-start;
              position: relative;
              cursor: pointer;

              div {
                line-height: 52px;
                font-size: 16px;
                font-weight: 500;
                color: rgba(255, 255, 255, 1);
                margin: 0 0 0 10px;
              }

              img {
                position: absolute;
                top: 0;
                opacity: 0.18;
                right: 12px;
              }
            }
          }
        }
      }
    }
  }
</style>
