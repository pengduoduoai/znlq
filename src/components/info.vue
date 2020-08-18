<template>
  <div class="container">
    <headers msg="路桥-关键岗位人才画像"></headers>
    <div class="content">
      <div class="left">
        <!--        基本信息-->
        <div class="info">
          <div class="title">
            <span></span>
            <div>基本信息</div>
          </div>
          <div class="info_center">
            <template v-if="userimg">
              <img :src="userimg" alt="" class="info_left">
            </template>
            <template v-else>
              <div class="info_left"></div>
            </template>
            <div class="info_right">
              <div class="name">{{username}}</div>
              <div class="info_list">
                <div class="item">
                  <div>岗位：</div>
                  <el-tooltip class="item" effect="light" :content="gangwei" placement="top" >
                    <el-button style="width:1rem">{{gangwei}}</el-button>
                  </el-tooltip>
                </div>
                <div class="item">
                  <div >毕业学校：</div>
                  <el-tooltip class="item" effect="light" :content="biyexuexiao" placement="top">
                    <el-button  style="width: .85rem">{{biyexuexiao}}</el-button>
                  </el-tooltip>
                </div>
                <div class="item">
                  <div>年龄：</div>

                  <span>{{age}}岁</span>
                </div>
                <div class="item">
                  <div>最高学历：</div>

                  <span>{{xueli}}</span>
                </div>
                <div class="item">
                  <div>职级：</div>

                  <span>{{zhiji}}</span>
                </div>
                <div class="item">
                  <div style="width: 70px">专业：</div>
                  <!--                  <span>{{zhuanye}}</span>-->
                  <el-tooltip class="item" effect="light" :content="zhuanye" placement="top">
                    <el-button  style="width: 85px">{{zhuanye}}</el-button>
                  </el-tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--        绩效表现-->
        <div class="performance">
          <div class="title">
            <span></span>
            <div>绩效表现</div>
          </div>
          <div class="performance_list">
            <div class="item">
              <div>2017</div>
              <span>{{jx2017}}</span>
            </div>
            <div class="item">
              <div>2018</div>
              <span>{{jx2018}}</span>
            </div>
            <div class="item">
              <div>2019</div>
              <span>{{jx2019}}</span>
            </div>
          </div>
        </div>
        <!--        岗位胜任匹配度-->
        <div class="competent">
          <div class="title">
            <span></span>
            <div>岗位胜任匹配度</div>
          </div>
          <div class="competent_list">
            <div class="item" v-for="(item,index) in gwsrppd">
              <span>{{item.index}}</span>
              <!--              -->
              <template v-if="item.color =='2'">
                <img src="../assets/conform.png" alt="">
              </template>
              <template v-else-if="item.color =='1'">
                <img src="../assets/exceed.png" alt="">
              </template>
              <template v-else-if="item.color =='3'">
                <img src="../assets/below.png" alt="">
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="center">
        <!--        任职经历-->
        <div class="experience">
          <div class="title">
            <span></span>
            <div>任职经历</div>
          </div>
          <div class="experience_list">
            <div class="item" v-for="(item,index) in rzjl">
              <div class="item_top">
                <div class="company">{{item.cp}}</div>
              </div>
              <div class="time">{{item.from}} 至 {{item.to}}</div>
              <div class="position">{{item.pos}}</div>
            </div>
          </div>
          <div class="more">
            <template v-if="rzjl.length>4">
              <div>查看更多</div>
              <img src="../assets/bottom.png" alt="">
            </template>
          </div>
        </div>


        <!--        关键业绩指标及达成情况-->
        <div class="reach">
          <div class="title">
            <span></span>
            <div>业绩指标及达成情况</div>
          </div>
          <div class="detail">
            <div class="left">
              <div class="left_title">关键业绩</div>
              <template v-for="(item,index) in gjzb">
                <div>{{item}}</div>
              </template>
            </div>
            <div class="right">
              <div class="right_title">达成情况</div>
              <template v-for="(item,index) in dcqk">
                <div>{{item}}</div>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <!--        主管综合评价-->
        <div class="overview">
          <div class="title">
            <span></span>
            <div>综合评价</div>
          </div>
          <div class="advantage">
            <div class="border"></div>
            <div class="advantage_title">核心优势</div>
          </div>
          <div class="advantage_detail">
            <template v-for="(item,index) in hxys">
              <div>{{item}}</div>
            </template>
          </div>
        </div>
        <!--        有待提升-->
        <div class="promote">
          <div class="title">
            <span>有待提升</span>
            <div></div>
          </div>
          <div class="detail" v-for="(item,index) in ydts">{{item}}</div>
        </div>
        <!--        发展措施建议-->
        <div class="suggest">
          <div class="title">
            <span>发展措施建议</span>
            <div></div>
          </div>
          <div class="detail">{{fzcsjy}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 个人信息
  import headers from "./header";

  export default {
    name: "info",
    data() {
      return {
        date: null,
        username: null,
        biyexuexiao: null,
        xueli: null,
        age: null,
        zhiji: null,
        gangwei: null,
        fzcsjy: null,
        hxys: null,
        rzjl: null,
        ydts: null,
        gwsrppd: null,
        zhuanye: null,
        jx2017: null,
        jx2018: null,
        jx2019: null,
        gjzb: null,
        userimg: null,
        dcqk: null,
      };
    },
    components: {
      headers,
    },
    created() {
      let that = this;
      window.scrollTo(0, 0);
      let username = this.$route.query.username;
      that.$api.getusermsglq(username).then((data) => {
        if (data.code == 200) {
          that.username = data.username;
          that.biyexuexiao = data.biyexuexiao;
          that.xueli = data.xueli;
          that.zhuanye = data.zhuanye;
          that.age = data.age;
          that.zhiji = data.zhiji;
          that.gangwei = data.gangwei;
          that.fzcsjy = data.fzcsjy;
          that.hxys = data.hxys;
          that.rzjl = data.rzjl;
          that.ydts = data.ydts;
          that.gwsrppd = data.gwsrppd;
          that.jx2017 = data.jx2017;
          that.jx2018 = data.jx2018;
          that.jx2019 = data.jx2019;
          that.gjzb = data.gjzb;
          that.dcqk = data.dcqk;
          that.rzjl = data.rzjl;
          that.userimg = data.userimg;
        }
      });
    },
    mounted() {
      let that = this; // 声明一个变量指向Vue实例this，保证作用域一致
      that.timer = setInterval(() => {
        that.date = new Date(); // 修改数据date
      }, 1000);
    },
    beforeDestroy() {
      let that = this;
      if (that.timer) {
        clearInterval(that.timer); // 在Vue实例销毁前，清除我们的定时器
      }
    },
    methods: {},
  };
</script>

<style lang="scss" scoped>
.container {
  width: 19.2rem;
  min-height: 10.8rem;
  padding-bottom: .3rem;

  .content {
    margin: .84rem 0 0 0;
    display: flex;
    justify-content: flex-start;

    .left {
      margin: 0 0 0 .66rem;
      /*基本信息*/
      .info {
        width: 4.92rem;
        height: 2.89rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.1);
        border-radius: 4px;

        .title {
          height: .77rem;
          border-bottom: 1px solid #f1f1f1;
          display: flex;
          align-items: center;
          font-family: "PingFang-bold";

          span {
            width: .06rem;
            height: .25rem;
            background: rgba(172, 35, 23, 1);
            margin: 0 .08rem 0 .32rem;
          }

          div {
            font-size: .26rem;
            font-weight: 800;
            color: rgba(0, 0, 0, 1);
          }
        }

        .info_center {
          display: flex;
          justify-content: flex-start;
          margin: .37rem 0 0 0;

          .info_left {
            width: 1.13rem;
            margin: 0 0 0 .31rem;
          }

          .info_right {
            margin: 0 0 0 .32rem;

            .name {
              font-size: .22rem;
              font-weight: bold;
              color: rgba(0, 0, 0, 1);
              margin: 0 0 .1rem 0;
              font-family: "PingFang-bold";
            }

            .info_list {
              width: 3.15rem;
              display: flex;
              justify-content: flex-start;
              flex-wrap: wrap;
              align-items: flex-start;

              .item {
                width: 1.57rem;
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                font-size: .14rem;
                margin: .1rem 0 0 0;

                div {
                  color: rgba(51, 51, 51, 0.77);
                }

                button {
                  padding: 0 !important;
                  border: 0 !important;
                  margin: 0;
                  height: .2rem;
                  line-height: .2rem;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }

                span {
                  color: #000000;
                }
              }
            }
          }
        }
      }

      .el-button {
        color: #000000 !important;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      /*绩效表现*/
      .performance {
        width: 4.92rem;
        height: 3.03rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px .31rem 0px rgba(121, 121, 121, 0.1);
        border-radius: 4px;
        margin: .25rem 0 0 0;

        .title {
          height: .77rem;
          border-bottom: 1px solid #f1f1f1;
          display: flex;
          align-items: center;
          font-family: "PingFang-bold";

          span {
            width: .06rem;
            height: .25rem;
            background: rgba(172, 35, 23, 1);
            margin: 0 .08rem 0 .32rem;
          }

          div {
            font-size: .26rem;
            font-weight: 800;
            color: rgba(0, 0, 0, 1);
          }
        }

        .performance_list {
          margin: .09rem 0 0 .31rem;

          .item {
            width: 4.31rem;
            height: .4rem;
            background: rgba(228, 236, 251, 0.2);
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: .24rem 0 0 0;

            div {
              font-size: .16rem;
              font-weight: 400;
              color: rgba(51, 51, 51, 1);
              margin: 0 0 0 .31rem;
            }

            span {
              font-size: .2rem;
              font-weight: bold;
              color: rgba(16, 107, 233, 1);
              margin: 0 .13rem 0 0;
              font-family: "PingFang-bold";
            }
          }
        }
      }

      /*岗位胜任匹配度*/
      .competent {
        width: 4.92rem;
        height: 3.14rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px .31rem 0px rgba(121, 121, 121, 0.1);
        border-radius: 4px;
        margin: .25rem 0 0 0;

        .title {
          height: .77rem;
          border-bottom: 1px solid #f1f1f1;
          display: flex;
          align-items: center;
          font-family: "PingFang-bold";

          span {
            width: 6px;
            height: .25rem;
            background: rgba(172, 35, 23, 1);
            margin: 0 8px 0 .32rem;
          }

          div {
            font-size: .26rem;
            font-weight: 800;
            color: rgba(0, 0, 0, 1);
          }
        }

        .competent_list {
          .item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: .27rem;

            span {
              font-size: .18rem;
              color: rgba(109, 109, 109, 1);
              margin: 0 0 0 .31rem;
            }

            img {
              width: 1.32rem;
              margin: 0 .17rem 0 0;
            }
          }
        }
      }
    }

    .center {
      margin: 0 0 0 .5rem;
      /*任职经历*/
      .experience {
        width: 5.91rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px .31rem 0px rgba(121, 121, 121, 0.1);
        border-radius: 4px;

        .title {
          height: .76rem;
          border-bottom: 1px solid #f1f1f1;
          display: flex;
          align-items: center;
          font-family: "PingFang-bold";

          span {
            width: .06rem;
            height: .25rem;
            background: rgba(172, 35, 23, 1);
            margin: 0 .08rem 0 .32rem;
          }

          div {
            font-size: .26rem;
            font-weight: 800;
            color: rgba(0, 0, 0, 1);
          }
        }

        .experience_list {
          margin: .1rem 0 0 0;
          height: 3.80rem;
          overflow-y: auto;

          .item {
            width: 5.46rem;
            padding: .1rem 0;
            background: rgba(163, 172, 160, 0.06);
            margin: 0 0 .15rem .22rem;
            display: inline-block;
            position: relative;

            .item_top {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              margin: .12rem 0 0 0;

              .company {
                width: 3rem;
                font-size: .15rem;
                color: rgba(72, 72, 72, 1);
                margin: 0 0 0 .2rem;
                font-family: "PingFang-Medium";
              }
            }

            .time {
              font-size: .14rem;
              font-weight: 400;
              margin: 4px 0 0 .2rem;
            }

            .position {
              width: 1.8rem;
              font-size: .15rem;
              font-weight: 500;
              color: rgba(0, 0, 0, 1);
              font-family: "PingFang-Medium";
              position: absolute;
              right: .3rem;
              top: .22rem;
            }
          }
        }

        .more {
          width: 5.91rem;
          height: .68rem;
          background: white;
          border-top: 1px solid #f1f1f1;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: .21rem;
          font-weight: 400;
          color: #000000;

          div {
            margin-right: .1rem;
          }
        }
      }


      /*关键业绩指标及达成情况*/
      .reach {
        width: 5.91rem;
        height: 3.97rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px .31rem 0px rgba(121, 121, 121, 0.1);
        border-radius: .04rem;
        margin: .23rem 0 0 0;

        .title {
          height: .75rem;
          border-bottom: 1px solid #f1f1f1;
          display: flex;
          align-items: center;
          font-family: "PingFang-bold";

          span {
            width: 6px;
            height: 25px;
            background: rgba(172, 35, 23, 1);
            margin: 0 8px 0 32px;
          }

          div {
            font-size: .26rem;
            font-weight: 800;
            color: rgba(0, 0, 0, 1);
          }
        }

        .detail {
          width: 5.64rem;
          height: 3rem;
          font-size: .14rem;
          font-weight: 400;

          overflow-y: auto;
          display: flex;
          justify-content: flex-start;

          .left {
            width: 5.64rem;
            margin: 0;

            .left_title {
              color: black;
            }

            div {
              margin: .1rem 0 0 .1rem;
            }
          }

          .right {
            width: 2.62rem;
            margin: 0 0 0 .2rem;

            .right_title {
              color: black;
            }

            div {
              margin: .1rem 0 0 .1rem;
            }
          }
        }
      }
    }

    .right {
      margin: 0 0 0 .5rem;
      /*主管综合评价*/
      .overview {
        width: 6.06rem;
        height: 3.67rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px .31rem 0px rgba(121, 121, 121, 0.1);
        border-radius: 4px;

        .title {
          height: .75rem;
          border-bottom: 1px solid #f1f1f1;
          display: flex;
          align-items: center;
          font-family: "PingFang-bold";

          span {
            width: .06rem;
            height: .25rem;
            background: rgba(172, 35, 23, 1);
            margin: 0 8px 0 32px;
          }

          div {
            font-size: .26rem;
            font-weight: 800;
            color: rgba(0, 0, 0, 1);
          }
        }

        .advantage {
          width: 5.76rem;
          height: .69rem;
          margin: 0 0 .22rem .29rem;
          border-bottom: 1px solid #f1f1f1;
          position: relative;

          .border {
            position: absolute;
            left: 0;
            bottom: 0;
            width: .8rem;
            height: .02rem;
            background: #ac2317;
          }

          .advantage_title {
            font-size: .2rem;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            padding-top: .31rem;
            font-family: "PingFang-Medium";
          }
        }

        .advantage_detail {
          width: 5.64rem;
          font-weight: 400;
          font-size: .14rem;

          height: 1.2rem;
          overflow-y: auto;

          div {
            margin: 0px 0 0 .29rem;
          }
        }
      }

      /*有待提升*/
      .promote {
        width: 6.06rem;
        height: 2.72rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px .31rem 0px rgba(121, 121, 121, 0.1);
        border-radius: 4px;
        margin-top: .25rem;

        .title {
          width: 5.76rem;
          height: .69rem;
          border-bottom: 1px solid #f1f1f1;
          margin: 0 0 0 .31rem;
          position: relative;
          font-family: "PingFang-Medium";
          display: flex;
          align-items: center;

          span {
            font-size: .20rem;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            margin: .31rem 0 0 0;
            display: inline-block;
          }

          div {
            position: absolute;
            left: 0;
            bottom: 0;
            width: .8rem;
            height: .02rem;
            background: #ac2317;
          }
        }

        .detail {
          margin: .22rem 0 0 .29rem;
          width: 5.64rem;
          font-size: .14rem;
          font-weight: 400;

        }
      }

      /*发展措施建议*/
      .suggest {
        width: 6.06rem;
        height: 2.72rem;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 3px .31rem 0px rgba(121, 121, 121, 0.1);
        border-radius: 4px;
        margin-top: .25rem;

        .title {
          width: 5.76rem;
          height: .69rem;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #f1f1f1;
          margin: 0 0 0 .31rem;
          position: relative;
          font-family: "PingFang-Medium";

          span {
            font-size: .2rem;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            margin: .31rem 0 0 0;
            display: inline-block;
          }

          div {
            position: absolute;
            left: 0;
            bottom: 0;
            width: .8rem;
            height: .02rem;
            background: #ac2317;
          }
        }

        .detail {
          margin: .22rem 0 0 .29rem;
          width: 5.64rem;
          font-size: .14rem;
          font-weight: 400;

        }
      }
    }
  }
}
</style>
