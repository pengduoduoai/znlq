<template>
  <div class="container">
    <headers msg="安装-关键岗位人才画像"></headers>
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
                    <el-button style="width:100px">{{gangwei}}</el-button>
                  </el-tooltip>
                </div>
                <div class="item">
                  <div style="width: 70px">毕业学校：</div>
                  <el-tooltip class="item" effect="light" :content="biyexuexiao" placement="top">
                    <el-button  style="width: 85px">{{biyexuexiao}}</el-button>
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
    width: 1920px;
    min-height: 1080px;
    padding-bottom: 30px;

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
      margin: 84px 0 0 0;
      display: flex;
      justify-content: flex-start;

      .left {
        margin: 0 0 0 66px;
        /*基本信息*/
        .info {
          width: 492px;
          height: 289px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.1);
          border-radius: 4px;

          .title {
            height: 77px;
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
              font-size: 26px;
              font-weight: 800;
              color: rgba(0, 0, 0, 1);
            }
          }

          .info_center {
            display: flex;
            justify-content: flex-start;
            margin: 37px 0 0 0;

            .info_left {
              width: 113px;
              margin: 0 0 0 31px;
            }

            .info_right {
              margin: 0 0 0 32px;

              .name {
                font-size: 22px;
                font-weight: bold;
                color: rgba(0, 0, 0, 1);
                margin: 0 0 10px 0;
                font-family: "PingFang-bold";
              }

              .info_list {
                width: 315px;
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                align-items: flex-start;

                .item {
                  width: 157px;
                  display: flex;
                  justify-content: flex-start;
                  align-items: flex-start;
                  font-size: 14px;
                  margin: 10px 0 0 0;

                  div {
                    color: rgba(51, 51, 51, 0.77);
                  }
                  button{
                    padding: 0!important;
                    border: 0!important;
                    margin: 0;
                    height: 20px;
                    line-height: 20px;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    white-space:nowrap;
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
          color: #000000!important;
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap;
        }
        /*绩效表现*/
        .performance {
          width: 492px;
          height: 303px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.1);
          border-radius: 4px;
          margin: 25px 0 0 0;

          .title {
            height: 77px;
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
              font-size: 26px;
              font-weight: 800;
              color: rgba(0, 0, 0, 1);
            }
          }

          .performance_list {
            margin: 9px 0 0 31px;

            .item {
              width: 431px;
              height: 40px;
              background: rgba(228, 236, 251, 0.2);
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin: 24px 0 0 0;

              div {
                font-size: 16px;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                margin: 0 0 0 31px;
              }

              span {
                font-size: 20px;
                font-weight: bold;
                color: rgba(16, 107, 233, 1);
                margin: 0 13px 0 0;
                font-family: "PingFang-bold";
              }
            }
          }
        }

        /*岗位胜任匹配度*/
        .competent {
          width: 492px;
          height: 314px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.1);
          border-radius: 4px;
          margin: 25px 0 0 0;

          .title {
            height: 77px;
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
              font-size: 26px;
              font-weight: 800;
              color: rgba(0, 0, 0, 1);
            }
          }

          .competent_list {
            .item {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 27px;

              span {
                font-size: 18px;
                color: rgba(109, 109, 109, 1);
                margin: 0 0 0 31px;
              }

              img {
                width: 132px;
                margin: 0 17px 0 0;
              }
            }
          }
        }
      }

      .center {
        margin: 0 0 0 50px;
        /*任职经历*/
        .experience {
          width: 591px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.1);
          border-radius: 4px;

          .title {
            height: 76px;
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
              font-size: 26px;
              font-weight: 800;
              color: rgba(0, 0, 0, 1);
            }
          }

          .experience_list {
            margin: 10px 0 0 0;
            height: 380px;
            overflow-y: auto;

            .item {
              width: 546px;
              padding: 10px 0;
              background: rgba(163, 172, 160, 0.06);
              margin: 0 0 15px 22px;
              display: inline-block;
              position: relative;

              .item_top {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin: 12px 0 0 0;

                .company {
                  width:300px ;
                  font-size: 15px;
                  color: rgba(72, 72, 72, 1);
                  margin: 0 0 0 20px;
                  font-family: "PingFang-Medium";
                }
              }

              .time {
                font-size: 14px;
                font-weight: 400;
                margin: 4px 0 0 20px;
              }
              .position {
                width: 180px;
                font-size: 15px;
                font-weight: 500;
                color: rgba(0, 0, 0, 1);
                font-family: "PingFang-Medium";
                position: absolute;
                right: 30px;
                top: 22px;
              }
            }
          }
          .more{
            width: 591px;
            height: 68px;
            background: white;
            border-top: 1px solid #f1f1f1;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 21px;
            font-weight: 400;
            color: #000000;
            div{
              margin-right: 10px;
            }
          }
        }


        /*关键业绩指标及达成情况*/
        .reach {
          width: 591px;
          height: 397px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.1);
          border-radius: 4px;
          margin: 23px 0 0 0;

          .title {
            height: 75px;
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
              font-size: 26px;
              font-weight: 800;
              color: rgba(0, 0, 0, 1);
            }
          }

          .detail {
            width: 564px;
            height: 200px;
            font-size: 14px;
            font-weight: 400;

            overflow-y: auto;
            display: flex;
            justify-content: flex-start;

            .left {
              width: 282px;
              margin: 0;

              .left_title {
                color: black;
              }

              div {
                margin: 10px 0 0 10px;
              }
            }

            .right {
              width: 262px;
              margin: 0 0 0 20px;

              .right_title {
                color: black;
              }

              div {
                margin: 10px 0 0 10px;
              }
            }
          }
        }
      }

      .right {
        margin: 0 0 0 50px;
        /*主管综合评价*/
        .overview {
          width: 606px;
          height: 367px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.1);
          border-radius: 4px;

          .title {
            height: 75px;
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
              font-size: 26px;
              font-weight: 800;
              color: rgba(0, 0, 0, 1);
            }
          }

          .advantage {
            width: 576px;
            height: 69px;
            margin: 0 0 22px 29px;
            border-bottom: 1px solid #f1f1f1;
            position: relative;

            .border {
              position: absolute;
              left: 0;
              bottom: 0;
              width: 80px;
              height: 2px;
              background: #ac2317;
            }

            .advantage_title {
              font-size: 20px;
              font-weight: 500;
              color: rgba(51, 51, 51, 1);
              padding-top: 31px;
              font-family: "PingFang-Medium";
            }
          }

          .advantage_detail {
            width: 564px;
            font-weight: 400;
            font-size: 14px;

            height: 120px;
            overflow-y: auto;

            div {
              margin: 0px 0 0 29px;
            }
          }
        }

        /*有待提升*/
        .promote {
          width: 606px;
          height: 272px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.1);
          border-radius: 4px;
          margin-top: 25px;

          .title {
            width: 576px;
            height: 69px;
            border-bottom: 1px solid #f1f1f1;
            margin: 0 0 0 31px;
            position: relative;
            font-family: "PingFang-Medium";

            span {
              font-size: 20px;
              font-weight: 500;
              color: rgba(51, 51, 51, 1);
              margin: 31px 0 0 0;
              display: inline-block;
            }

            div {
              position: absolute;
              left: 0;
              bottom: 0;
              width: 80px;
              height: 2px;
              background: #ac2317;
            }
          }

          .detail {
            margin: 22px 0 0 29px;
            width: 564px;
            font-size: 14px;
            font-weight: 400;

          }
        }

        /*发展措施建议*/
        .suggest {
          width: 606px;
          height: 272px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 3px 31px 0px rgba(121, 121, 121, 0.1);
          border-radius: 4px;
          margin-top: 25px;

          .title {
            width: 576px;
            height: 69px;
            border-bottom: 1px solid #f1f1f1;
            margin: 0 0 0 31px;
            position: relative;
            font-family: "PingFang-Medium";

            span {
              font-size: 20px;
              font-weight: 500;
              color: rgba(51, 51, 51, 1);
              margin: 31px 0 0 0;
              display: inline-block;
            }

            div {
              position: absolute;
              left: 0;
              bottom: 0;
              width: 80px;
              height: 2px;
              background: #ac2317;
            }
          }

          .detail {
            margin: 22px 0 0 29px;
            width: 564px;
            font-size: 14px;
            font-weight: 400;

          }
        }
      }
    }
  }
</style>
