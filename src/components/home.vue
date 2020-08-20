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
            <div class="item" style="line-height: .4rem">
              <div style="width:20%"></div>
              <div style="font-size: .18rem">完成情况</div>
              <div style="font-size: .18rem">完成率</div>
              <div style="font-size: .18rem">同期增长率</div>
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
                <span>经营良好</span></div>
              <div class="item">
                <div style="background:#F29426 "></div>
                <span>经营持平</span></div>
              <div class="item">
                <div style="background:#AC2317 "></div>
                <span>经营较差</span></div>
            </div>
          </div>
          <div class="right_list">
            <div class="list">
              <div class="list_left">
                <div class="num">01</div>
                <div class="title">{{qycat?qycat.B:''}}</div>
              </div>
              <div class="list_right">
                <div class="list_right_top" :style="{height:datashowB?'auto':'1.2rem'}">
                  <template v-for="(item,index) in datashow.B">
                    <template v-if="item.color==1">
                      <div class="item"
                           style="background:rgba(172,35,23,1);box-shadow:0px .05rem 7px 0px rgba(172,35,23,0.22);"
                           @click="jump1(item)">
                        <div>{{item.name}}</div>
                        <img src="../assets/region.png" alt style="width: .5rem;margin-top: .12rem"/>
                      </div>
                    </template>
                    <template v-else-if="item.color==2">
                      <div class="item"
                           style="background:rgba(66,186,36,1);box-shadow:0px .06rem .12rem 0px rgba(66,186,36,0.25);"
                           @click="jump1(item)">
                        <div>{{item.name}}</div>
                        <img src="../assets/region.png" alt style="width: .5rem;margin-top: .12rem"/>
                      </div>
                    </template>
                    <template v-else-if="item.color==3">
                      <div class="item"
                           style="background:rgba(242,148,38,1);box-shadow:0px .06rem .08rem 0px rgba(242,148,38,0.21);"
                           @click="jump1(item)">
                        <div>{{item.name}}</div>
                        <img src="../assets/region.png" alt style="width: .5rem;margin-top: .12rem"/>
                      </div>
                    </template>
                    <template v-else>
                      <div class="item"
                           style="background:rgba(121,121,121,.5);box-shadow:0px 3px .31rem 0px rgba(121,121,121,0.1);"
                           @click="jump1(item)">
                        <div>{{item.name}}</div>
                        <img src="../assets/region.png" alt style="width: .5rem;margin-top: .12rem"/>
                      </div>
                    </template>


                  </template>
                </div>
                <div class="list_right_bottom" v-if="datashow.B&&datashow.B.length>8" @click="datashowB=!datashowB">
                  <img :src="datashowB?require('../assets/top.png'):require('../assets/bottom.png')"
                       alt="">{{datashowB ? '点击收起' : '点击展开'}}
                </div>
              </div>
            </div>
            <div class="list">
              <div class="list_left">
                <div class="num">02</div>
                <div class="title">{{qycat?qycat.D:''}}</div>
<!--                <div class="look" @click="jump('D')">查看</div>-->
              </div>
              <div class="list_right">
                <div class="list_right_top" :style="{height:datashowD?'auto':'1.2rem'}">
                  <template v-for="(item,index) in datashow.D">
                    <template v-if="item.color==1">
                      <div class="item"
                           style="background:rgba(172,35,23,1);box-shadow:0px .05rem 7px 0px rgba(172,35,23,0.22);"
                           @click="jump1(item)">
                        <div>{{item.name}}</div>
                        <img src="../assets/region.png" alt style="width: .5rem;margin-top: .12rem"/>
                      </div>
                    </template>
                    <template v-else-if="item.color==2">
                      <div class="item"
                           style="background:rgba(66,186,36,1);box-shadow:0px .06rem .12rem 0px rgba(66,186,36,0.25);"
                           @click="jump1(item)">
                        <div>{{item.name}}</div>
                        <img src="../assets/region.png" alt style="width: .5rem;margin-top: .12rem"/>
                      </div>
                    </template>
                    <template v-else-if="item.color==3">
                      <div class="item"
                           style="background:rgba(242,148,38,1);box-shadow:0px .06rem .08rem 0px rgba(242,148,38,0.21);"
                           @click="jump1(item)">
                        <div>{{item.name}}</div>
                        <img src="../assets/region.png" alt style="width: .5rem;margin-top: .12rem"/>
                      </div>
                    </template>
                    <template v-else>
                      <div class="item"
                           style="background:rgba(121,121,121,.5);box-shadow:0px 3px .31rem 0px rgba(121,121,121,0.1);"
                           @click="jump1(item)">
                        <div>{{item.name}}</div>
                        <img src="../assets/region.png" alt style="width: .5rem;margin-top: .12rem"/>
                      </div>
                    </template>
                  </template>
                </div>
                <div class="list_right_bottom" v-if="datashow.D&&datashow.D.length>8" @click="datashowD=!datashowD">
                  <img :src="datashowD?require('../assets/top.png'):require('../assets/bottom.png')"
                       alt="">{{datashowD ? '点击收起' : '点击展开'}}
                </div>
              </div>
            </div>
            <div class="list">
              <div class="list_left">
                <div class="num">03</div>
                <div class="title">{{qycat?qycat.E:''}}</div>
<!--                <div class="look" @click="jump('E')">查看</div>-->
              </div>
              <div class="list_right">
                <div class="list_right_top" :style="{height:datashowE?'auto':'1.2rem'}">
                  <template v-for="(item,index) in datashow.E">
                    <template v-if="item.color==1">
                      <div class="item"
                           style="background:rgba(172,35,23,1);box-shadow:0px .05rem 7px 0px rgba(172,35,23,0.22);"
                           @click="jump1(item)">
                        <div>{{item.name}}</div>
                        <img src="../assets/region.png" alt style="width: .5rem;margin-top: .12rem"/>
                      </div>
                    </template>
                    <template v-else-if="item.color==2">
                      <div class="item"
                           style="background:rgba(66,186,36,1);box-shadow:0px .06rem .12rem 0px rgba(66,186,36,0.25);"
                           @click="jump1(item)">
                        <div>{{item.name}}</div>
                        <img src="../assets/region.png" alt style="width: .5rem;margin-top: .12rem"/>
                      </div>
                    </template>
                    <template v-else-if="item.color==3">
                      <div class="item"
                           style="background:rgba(242,148,38,1);box-shadow:0px .06rem .08rem 0px rgba(242,148,38,0.21);"
                           @click="jump1(item)">
                        <div>{{item.name}}</div>
                        <img src="../assets/region.png" alt style="width: .5rem;margin-top: .12rem"/>
                      </div>
                    </template>
                    <template v-else>
                      <div class="item"
                           style="background:rgba(121,121,121,.5);box-shadow:0px 3px .31rem 0px rgba(121,121,121,0.1);"
                           @click="jump1(item)">
                        <div>{{item.name}}</div>
                        <img src="../assets/region.png" alt style="width: .5rem;margin-top: .12rem"/>
                      </div>
                    </template>
                  </template>
                </div>
                <div class="list_right_bottom" v-if="datashow.E&&datashow.E.length>8" @click="datashowE=!datashowE">
                  <img :src="datashowE?require('../assets/top.png'):require('../assets/bottom.png')"
                       alt="">{{datashowE ? '点击收起' : '点击展开'}}
                </div>
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
        datashow: null,
        datashowB:false,
        datashowD:false,
        datashowE:false,
        qycat:null,
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
          that.qycat = data.qycat?data.qycat:'';
          that.datashow = data.datashow;
          // that.A = data.datashow.B;
          // that.B = data.datashow.D;
          // that.C = data.datashow.E;
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
      },
      jump1(e) {
        this.$router.push({
          path: "/contribution",
          query: { xm: e.name }
        });
      },
      operation(list, arr) {
        let operation = this.$echarts.init(document.getElementById('operation_content'));
        window.onresize = operation.resize;
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
    margin-bottom: .2rem;

    .left {
      margin: .84rem 0 0 .62rem;
      /*财务指标*/

      .finance {
        width: 7.29rem;
        height: 5.7rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px .31rem 0px rgba(121, 121, 121, 0.1);
        border-radius: .04rem;

        .title {
          height: .75rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #f1f1f1;

          .title_left {
            display: flex;
            align-items: center;

            div {
              font-size: .26rem;
              font-weight: 800;
              color: rgba(0, 0, 0, 1);
            }

            span {
              display: inline-block;
              width: .06rem;
              height: .25rem;
              background: rgba(172, 35, 23, 1);
              margin: 0 .08rem 0 .32rem;
            }
          }

          .title_right {
            text-align: center;
            margin: 0 .32rem 0 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            width: 1rem;

            div {
              width: 1rem;
              font-size: .26rem;

              font-weight: bold;
              color: rgba(56, 122, 225, 1);
              text-shadow: 0px .05rem .05rem rgba(232, 243, 255, 1);

            }
            span{
              font-size: .14rem;
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
            margin: .33rem 0 0 3%;
            border-radius: .05rem;
            line-height: .65rem;

            div {
              width: 27%;
              text-align: center;
              font-size: .22rem;
              font-weight: 500;
            }

            .num {
              font-size: .3rem;
              font-weight: bold;
              color: rgba(56, 122, 225, 1);
              text-shadow: 0px .05rem .05rem rgba(232, 243, 255, 1);
            }
          }
        }
      }

      /*人效指标*/
      .human {
        width: 7.29rem;
        height: 3.48rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px .31rem 0px rgba(121, 121, 121, 0.1);
        border-radius: .04rem;
        margin: .12rem 0 0 0;

        .title {
          height: .75rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #f1f1f1;

          .title_left {
            display: flex;
            align-items: center;

            div {
              font-size: .26rem;
              font-weight: 800;
              color: rgba(0, 0, 0, 1);
            }

            span {
              display: inline-block;
              width: .06rem;
              height: .25rem;
              background: rgba(172, 35, 23, 1);
              margin: 0 .08rem 0 .32rem;
            }
          }

          .title_right {
            text-align: center;
            margin: 0 .32rem 0 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            width: 1.4rem;

            div {
              width: 1.4rem;
              font-size: .26rem;

              font-weight: bold;
              color: rgba(56, 122, 225, 1);
              text-shadow: 0px .05rem .05rem rgba(232, 243, 255, 1);

            }
            span{
              font-size: .14rem;
            }
          }
        }

        .list {
          margin: .43rem 0 0 .54rem;
          display: flex;
          justify-content: space-between;

          .item {
            width: 2.06rem;
            /*margin: 0 68px 0 0;*/
            .money {
              font-size: .4rem;
              font-weight: bold;
              color: rgba(255, 149, 28, 1);
              line-height: .40rem;
              text-shadow: 0px .05rem .05rem rgba(255, 235, 213, 1);

              margin-bottom: .1rem;
            }

            .detail {
              font-size: .16rem;
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
      margin: .6rem 0 0 .19rem;
      width: 10.41rem;
      border-radius: .04rem;

      .operation {
        width: 10.41rem;
        height: 3.50rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px .31rem 0px rgba(121, 121, 121, 0.15);
        border-radius: .04rem;
        margin-top: .1rem;

        .title {
          height: .75rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          border-bottom: 1px solid #f1f1f1;

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
          height: 2.5rem;
        }
      }

      .right_bottom {
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px .31rem 0px rgba(121, 121, 121, 0.1);
        margin: .24rem 0 0 0;


        .right_head {
          height: .75rem;
          border-bottom: 1px solid #f1f1f1;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .head_left {
            height: .75rem;
            font-size: .26rem;
            font-weight: 800;
            color: rgba(0, 0, 0, 1);
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-bottom: 1px solid #f1f1f1;

            span {
              display: inline-block;
              width: .06rem;
              height: .25rem;
              background: rgba(172, 35, 23, 1);
              margin: 0 .08rem 0 .32rem;
            }
          }

          .head_right {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin: 0 .16rem 0 0;

            .item {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              margin: 0 0 0 .38rem;

              div {
                width: .13rem;
                height: .13rem;
              }

              span {
                font-size: .12rem;
                font-weight: 400;
                color: rgba(140, 140, 140, 1);
                margin: 0 0 0 3px;
              }
            }
          }
        }

        .right_list {
          padding-bottom: .2rem;
          height: 4.7rem;
          overflow-y: auto;
          /*background: red;*/
        }

        .list {
          display: flex;
          justify-content: flex-start;
          margin: .2rem 0 0 .35rem;


          .list_left {
            width: 2.88rem;
            height: 1.38rem;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 3px .31rem 0px rgba(121, 121, 121, 0.15);
            border-radius: .08rem;
            position: relative;

            .num {
              font-size: 1.1rem;
              font-weight: bold;
              color: rgba(216, 216, 216, 1);
              margin: 0 0 0 .22rem;
              opacity: 0.27;
              font-family: 'DIN';
            }

            .title {
              width: 1.3rem;
              height: 1.38rem;
              line-height: 1.38rem;
              position: absolute;
              right: 0;
              text-align: center;
              top: 0;
              font-size: .26rem;
              color: rgba(51, 51, 51, 1);
              font-family: "PingFang-bold";
            }

            .look {
              width: 1.01rem;
              height: .31rem;
              border-radius: .18rem;
              opacity: 0.79;
              border: 1px solid rgba(151, 151, 151, 1);
              font-size: .18rem;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
              text-align: center;
              line-height: .31rem;
              position: absolute;
              left: 1.39rem;
              top: .72rem;
              cursor: pointer;
            }
          }

          .list_right {
            width: 7.28rem;

            padding-top: 7px;
            margin: 0 0 0 .55rem;
            .list_right_top {
              flex-wrap: wrap;
              display: flex;
              justify-content: flex-start;
              align-items: flex-start;
              align-content: flex-start;
              overflow: hidden;
              .item {
                width: 1.37rem;
                height: .52rem;
                border-radius: .06rem;
                margin: 0 .15rem .15rem 0;
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                position: relative;
                cursor: pointer;

                div {
                  line-height: .52rem;
                  font-size: .16rem;
                  font-weight: 500;
                  color: rgba(255, 255, 255, 1);
                  margin: 0 0 0 .1rem;
                }

                img {
                  position: absolute;
                  top: 0;
                  opacity: 0.18;
                  right: .12rem;
                }
              }
            }
            .list_right_bottom {
              width: 6.5rem;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: .18rem;
              cursor: pointer;
              margin-top: .2rem;

              img {
                width: .2rem;
                margin-right: .2rem;
              }
            }
          }
        }
      }
    }
  }
</style>
