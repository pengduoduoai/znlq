<template>
  <div class="info">
    <div class="info_head">
      <template v-if="img">
        <img :src="img" alt="" class="info_img">
      </template>
      <template v-else>
        <div class="info_img"></div>
      </template>

      <div class="info_right">
        <div class="top">
          <div class="name">{{jbxxshowmsg.username}}</div>
          <div class="age">{{jbxxshowmsg.sex}} {{jbxxshowmsg.age}}岁</div>
        </div>
        <div class="bottom">
          <div class="item">工号：{{jbxxshowmsg.usercode}}</div>
          <div class="item">部门：{{jbxxshowmsg.depart}}</div>
          <div class="item">岗位名称：{{jbxxshowmsg.gangwei}}</div>
          <div class="item">职级：{{jbxxshowmsg.zhiji}}</div>
          <div class="item">司龄：{{jbxxshowmsg.silin}}</div>
          <div class="item">岗龄：{{jbxxshowmsg.ganglin}}</div>
          <div class="item">工作地点：{{jbxxshowmsg.city}}</div>
          <div class="item">籍贯：{{jbxxshowmsg.jiguan}}</div>
          <div class="item">直接上级姓名：{{jbxxshowmsg.shangji_name}}</div>
          <div class="item">直接上级岗位：{{jbxxshowmsg.shangji_gangwei}}</div>
          <div class="item">直接下属人数：{{jbxxshowmsg.xiashu_num}}</div>
        </div>
      </div>
      <div class="detail" @click="toHome()">控股综合人力中心</div>

    </div>
    <div class="center">
      <div class="left">
        <!--        任职经历(集团内外部)-->
        <div class="serve">
          <div class="title">
            <div class="border"></div>
            任职经历(集团内外部)
          </div>
          <div class="content">
            <!--            外部任职经验-->
            <div class="external">
              <div class="title">外部任职经验</div>
              <div class="list">
                <div class="item" v-for="(item,index) in wbrzjlshowmsg">
                  <!--                工作时间-->
                  <div class="year"><span></span>{{item.from}}至{{item.to}}</div>
                  <!--                公司-->
                  <div class="company">
                    {{item.buss}}
                  </div>
                  <!--                职位-->
                  <div class="job">
                    {{item.position}}
                  </div>
                </div>

              </div>
            </div>
            <div class="border"></div>
            <div class="internal">
              <div class="title">内部任职经验</div>
              <div class="list">
                <div class="item" v-for="(item,index) in nbrzjlshowmsg">
                  <!--                工作时间-->
                  <div class="year"><span></span>{{item.from}}至{{item.to}}</div>
                  <!--                公司-->
                  <div class="company">
                    {{item.buss}}
                  </div>
                  <!--                职位-->
                  <div class="job">
                    {{item.position}}
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
        <!--        绩效表现-->
        <div class="performance">
          <div class="title"><span></span>绩效表现</div>
          <div class="content">
            <div class="top">
              <div class="left">
                <div class="title">近三年绩效结果</div>
                <div class="item">2017<span>{{jbxxshowmsg[2017]?jbxxshowmsg[2017]:''}}</span></div>
                <div class="item">2018<span>{{jbxxshowmsg[2018]?jbxxshowmsg[2018]:''}}</span></div>
                <div class="item">2019<span>{{jbxxshowmsg[2019]?jbxxshowmsg[2019]:''}}</span></div>
              </div>
              <div class="right">
                <div class="title">2019年关键业绩描述</div>
                <div class="item" v-for="(item,index) in jbxxshowmsg.guanjianjixiao"><span>{{index+1}}.</span>
                  {{item}}
                </div>
              </div>
            </div>
            <!--            关键经验-->
            <div class="experience">
              <div class="title"><span></span>关键经验</div>
              <div class="list">
                <div class="item" v-for="(item,index) in gjjyshowmsg">
                  <el-popover
                    placement="top-start"
                    width="200"
                    trigger="hover"
                    :content="item.content">
                    <div slot="reference">
                      <template v-if="item.key === '扭亏为盈' ">
                        <img src="../assets/img/1.png" alt="" style="width: 34px">
                      </template>
                      <template v-else-if="item.key === '担任项目负责人' ">
                        <img src="../assets/img/2.png" alt="" style="width: 25px">
                      </template>
                      <template v-else-if="item.key === '开拓新区域市场' ">
                        <img src="../assets/img/3.png" alt="" style="width: 24px">
                      </template>
                      <template v-else-if="item.key === '团队管理跨团队' ">
                        <img src="../assets/img/4.png" alt="" style="width: 25px">
                      </template>
                      <template v-else-if="item.key === '跨领域跨职能的岗位调动' ">
                        <img src="../assets/img/5.png" alt="" style="width: 25px">
                      </template>
                      <template v-else-if="item.key === '谈妥关键的交易合同' ">
                        <img src="../assets/img/6.png" alt="" style="width: 25px">
                      </template>
                      <template v-else-if="item.key === '其他关键经验' ">
                        <img src="../assets/img/7.png" alt="" style="width: 25px">
                      </template>
                      <template v-else-if="item.key === '处理重大突发危机' ">
                        <img src="../assets/img/8.png" alt="" style="width: 25px">
                      </template>
                      <span>{{item.key}}</span>
                    </div>
                    <!--                    <el-button >hover 激活</el-button>-->
                  </el-popover>

                </div>
              </div>
            </div>
            <!--            教育背景-->
            <div class="education">
              <div class="title"><span></span>教育背景</div>
              <div class="list">
                <div class="item" v-for="(item,index) in jyjlshowmsg">
                  <div class="time">毕业时间<span>{{item.to}}</span></div>
                  <div class="school">毕业院校<span>{{item.school}}</span></div>
                  <div class="profession">专业<span>{{item.major}}</span></div>
                  <div class="degree">学历<span>{{item.education}}</span></div>
                  <div class="full">学制类型<span>{{item.edutype}}</span></div>
                </div>
              </div>
            </div>
            <div class="bottom">
              <!--              奖励荣誉(集团内)-->
              <div class="honor">
                <div class="title"><span></span>奖励荣誉(集团内)</div>
                <div class="list" v-for="(item,index) in jxzhshowmsg">
                  <div class="item">{{item.time}}年荣获{{item.name}}</div>
                </div>
              </div>
              <!--              资格证书-->
              <div class="certificate">
                <div class="title"><span></span>资格证书</div>
                <div class="list" v-for="(item,index) in zgzsshowmsg">
                  <div class="item">{{item.time}}年荣获{{item.name}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <!--          个人3-5年职业发展规划-->
          <div class="planning">
            <div class="title">个人3-5年职业发展规划</div>
            <div class="detail">{{jbxxshowmsg.zyfzfx35}}</div>
          </div>
          <!--          产业建议发展方向-->
          <div class="growth">
            <div class="title">产业建议发展方向</div>
            <div class="detail">{{jbxxshowmsg.cyjyfx}}</div>
          </div>
        </div>
      </div>
      <div class="right">
        <!--        综合测评结果-->
        <div class="evaluation">

          <div class="title">
            <div class="title_left"><span></span>潜力测评结果</div>
            <div class="title_right"><span></span>人才九宫格</div>
          </div>
          <div class="content">
            <!--            潜力分析表-->
            <div class="potential">
              <!--              <div class="title">潜力分析表</div>-->
              <div class="radar" id="radar" :style="{width: '451px', height: '221px'}"></div>
            </div>
            <!--            人才九宫格-->
            <div class="talent">
              <div class="list">
                <div class="item" :style="[{background:(jgg_arr.jggwz==4?'#FFED28':'#f1f1f1')}]">待发展</div>
                <div class="item" :style="[{background:(jgg_arr.jggwz==2?'#10C576':'#f1f1f1')}]">潜力人员</div>
                <div class="item" :style="[{background:(jgg_arr.jggwz==1?'#36D2F9':'#f1f1f1')}]">高潜人员</div>
                <div class="item" :style="[{background:(jgg_arr.jggwz==7?'#F7902C':'#f1f1f1')}]">需要改进</div>
                <div class="item" :style="[{background:(jgg_arr.jggwz==5?'#FFED28':'#f1f1f1')}]">中坚人员</div>
                <div class="item" :style="[{background:(jgg_arr.jggwz==3?'#10C576':'#f1f1f1')}]">潜力人员</div>
                <div class="item" :style="[{background:(jgg_arr.jggwz==9?'#F01815':'#f1f1f1')}]">差距人员</div>
                <div class="item" :style="[{background:(jgg_arr.jggwz==8?'#F7902C':'#f1f1f1')}]">需要改进</div>
                <div class="item" :style="[{background:(jgg_arr.jggwz==6?'#FFED28':'#f1f1f1')}]">待发展</div>
              </div>
              <div class="detail">潜力</div>
              <div class="detail1">能力/360评估</div>
            </div>
          </div>
        </div>
        <!--        360评价结果-->
        <div class="result">
          <div class="title"><span></span>360评价结果</div>
          <div class="content">
            <div id="column" style="width: 100%;height: 210px"></div>
          </div>
        </div>
        <!--        关键驱动因素-->
        <div class="drive">
          <div class="title"><span></span>关键驱动因素</div>
          <div class="list">
            <div class="item" v-for="(item,index) in djqdys_arr">
              <img src="../assets/img/icon.png" alt="" style="width: 22px">
              <div>{{item}}</div>
            </div>
          </div>
        </div>
        <!--        综合评价-->
        <div class="comprehensive">
          <div class="title"><span></span>综合评价</div>
          <div class="content">
            <!--            核心优势评价-->
            <div class="advantage">
              <div class="title"><span></span>核心优势评价</div>
              <div class="list">
                <div class="item">
                  <div class="left">{{hxysdata[0].index?hxysdata[0].index:''}}</div>
                  <div class="right">{{hxysdata[0].content?hxysdata[0].content:'暂无'}}</div>
                </div>
                <div class="item">
                  <div class="left">{{hxysdata[1].index}}</div>
                  <div class="right">{{hxysdata[1].content?hxysdata[1].content:'暂无'}}</div>
                </div>
                <div class="item">
                  <div class="left">{{hxysdata[2].index}}</div>
                  <div class="right">{{hxysdata[2].content?hxysdata[2].content:'暂无'}}</div>
                </div>
                <div class="item">
                  <div class="left">{{hxysdata[3].index}}</div>
                  <div class="right">{{hxysdata[3].content?hxysdata[3].content:'暂无'}}</div>
                </div>
              </div>
            </div>
            <!--            有待提升评价-->
            <div class="promote">
              <div class="title"><span></span>有待提升评价</div>
              <div class="list">
                <div class="item">
                  <div class="left">{{ydtsdata[0].index}}</div>
                  <div class="right">{{ydtsdata[0].content?ydtsdata[0].content:'暂无'}}</div>
                </div>
                <div class="item">
                  <div class="left">{{ydtsdata[1].index}}</div>
                  <div class="right">{{ydtsdata[1].content?ydtsdata[1].content:'暂无'}}</div>
                </div>
                <div class="item">
                  <div class="left">{{ydtsdata[2].index}}</div>
                  <div class="right">{{ydtsdata[2].content?ydtsdata[2].content:'暂无'}}</div>
                </div>
                <div class="item">
                  <div class="left">{{ydtsdata[3].index}}</div>
                  <div class="right">{{ydtsdata[3].content?ydtsdata[3].content:'暂无'}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // 个人信息
  export default {
    name: "people",
    data() {
      return {
        arr: [],
        jbxxshowmsg: null,//	基本信息
        jyjlshowmsg: null,//	教育经历
        wbrzjlshowmsg: null,//外部工作经历
        nbrzjlshowmsg: null,//内部工作经历
        jxzhshowmsg: null,//	奖项记录
        zgzsshowmsg: null,//资格证书记录
        hxysdata: null,//综合评价-核心优势数据
        ydtsdata: null,//综合评价-核心优势数据
        data360: null,
        data360avg: null,
        gjjyshowmsg: null,
        img: null,
        qlcpjp_arr: null,
        zzpjf_arr: null,
        jgg_arr: null,
        djqdys_arr: null,
      }
    },
    created() {


    },
    mounted() {
      let that = this;
      if (that.$route.query.username) {
        let username = that.$route.query.username;
        // let username = '于斌'
        that.$api.getcoremem(username).then(data => {
          if (data.code == 200) {
            that.jbxxshowmsg = data.data.jbxxshowmsg;
            that.jyjlshowmsg = data.data.jyjlshowmsg;
            that.wbrzjlshowmsg = data.data.wbrzjlshowmsg;
            that.nbrzjlshowmsg = data.data.nbrzjlshowmsg;
            that.jxzhshowmsg = data.data.jxzhshowmsg;
            that.zgzsshowmsg = data.data.zgzsshowmsg;
            that.hxysdata = data.data.hxysdata;
            that.ydtsdata = data.data.ydtsdata;
            that.yxldata = data.data.yxldata;
            that.gjjyshowmsg = data.data.gjjyshowmsg;
            that.data360 = data.data.data360;
            that.data360avg = data.data.data360avg;
            that.qlcpjp_arr = data.data.qlcpjp_arr;
            that.zzpjf_arr = data.data.zzpjf_arr;
            that.jgg_arr = data.data.jgg_arr;
            that.djqdys_arr = data.data.djqdys_arr;
            that.img = data.data.img;
            let arr = ['影响力', '上级', '同事', '下级', '自评'];
            console.log(that.data360);
            that.data360.unshift(arr);
            setTimeout(() => {
              // that.radar(that.qlcpjp_arr, that.zzpjf_arr);
              // that.column(that.data360, that.data360avg);
            }, 1000)
          }
        });
      }
      setTimeout(() => {
        that.column();
      }, 1000)

    },
    methods: {
      toHome() {
        this.$router.go(-1);
      },
      // 雷达图
      radar(arr, arr1) {
        let radar = this.$echarts.init(document.getElementById('radar'))
        radar.setOption({
          textStyle: {
            margin: [
              0,  // 上
              0, // 右
              -10,  // 下
              0, // 左
            ]
          },
          grid: { // 控制图的大小，调整下面这些值就可以，
            x: 40,
            x2: 100,
            y2: 150// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
          },
          tooltip: {},
          legend: {
            orient: 'vertical', // 'vertical' 'horizontal'
            x: 'right', // 'center' | 'left' | {number},
            y: 'top', // 'center' | 'bottom' | {number}
            padding: 5,    // [5, 10, 15, 20]
            data: ['组织平均分', '个人得分'],
            itemWidth: 17,//图例图标的宽
            itemHeight: 6,//图例图标的高
          },
          radar: {
            name: {
              textStyle: {
                color: '#666',
                borderRadius: 3,
                padding: [-10, 0]
              }
            },
            indicator: [
              {name: '盈利导向', max: 10},
              {name: '影响力', max: 10},
              {name: '有效沟通', max: 10},
              {name: '团队合作', max: 10},
              {name: '创新能力', max: 10},
              {name: '远见与策略', max: 10},
              {name: '主动性与责任心', max: 10},
              {name: '业务拓展', max: 10},
            ]
          },
          series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            areaStyle: {normal: {}},
            data: [
              {
                value: arr1,
                name: '组织平均分',

                itemStyle: {
                  normal: {
                    color: 'rgba(243,45,43,.9)',
                    lineStyle: {
                      width: 1,
                      color: 'rgba(60,135,213,.3)',
                    },
                  },
                },
              },
              {
                value: arr,
                name: '个人得分',
                itemStyle: {
                  normal: {
                    color: 'rgba(95,149,255,.9)',
                  },
                },
              }
            ]
          },]
        });
        radar.resize();//直接加这句即可
        window.addEventListener("resize", function () {
          radar.resize();
        });
      },
      column(data, arr) {
        let column = this.$echarts.init(document.getElementById('column'))
        column.setOption({
          grid: {
            left: 24,
            right: 20,
            top: 30,
            bottom: 20,
            containLabel: false,
            backgroundColor: '#ffffff',
          },
          tooltip: {},
          dataset: {
            //动态数据展示
            source: data
          },
          xAxis: {type: 'category'},
          yAxis: {},
          series: [
            {
              type: 'bar',
              barWidth: 15,
              itemStyle: {
                normal: {
                  color: '#82DBF2',
                  label: {
                    show: true,//柱子上显示值
                    position: 'top',//值在柱子上方显示
                    textStyle: {
                      color: '#666666'//值得颜色
                    }
                  }
                }
              }
            },
            {
              type: 'bar',
              barWidth: 15,
              itemStyle: {
                normal: {
                  color: '#5F95FF',
                  label: {
                    show: true,//柱子上显示值
                    position: 'top',//值在柱子上方显示
                    textStyle: {
                      color: '#666666'//值得颜色
                    }
                  }
                }
              }
            }, {
              type: 'bar',
              barWidth: 15,
              itemStyle: {
                normal: {
                  color: '#4BF0F6',
                  label: {
                    show: true,//柱子上显示值
                    position: 'top',//值在柱子上方显示
                    textStyle: {
                      color: '#666666'//值得颜色
                    }
                  }
                }
              }
            }, {
              type: 'bar',
              barWidth: 15,
              itemStyle: {
                normal: {
                  color: '#ADC9FF',
                  label: {
                    show: true,//柱子上显示值
                    position: 'top',//值在柱子上方显示
                    textStyle: {
                      color: '#666666'//值得颜色
                    }
                  }
                }
              }
            }, {
              name: '平均值',
              data: arr,
              type: 'line',
              itemStyle: {
                normal: {
                  color: '#FFC31C',
                }
              }
            }
          ]
        });
        column.resize();//直接加这句即可
        window.addEventListener("resize", function () {
          column.resize();
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .info {
    width: 1920px;
    min-height: 1080px;
    background: #f7f7f7;
    display: inline-block;

    .info_head {
      width: 1920px;
      height: 138px;
      margin: 26px 0 0 0;
      background-image: url("../assets/img/info_head.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      display: flex;
      justify-content: flex-start;
      position: relative;
      /*头像*/
      .info_img {
        height: 165px;
        border-radius: 20px;
        background: red;
        display: inline-block;
        margin: -14px 0 0 26px;
      }

      .info_right {
        margin-left: 25px;

        .top {
          margin: 15px 0 0 0;
          display: flex;
          justify-content: flex-start;
          align-items: flex-end;
          /*姓名*/
          .name {
            font-size: 32px;
            font-weight: 800;
            color: rgba(255, 255, 255, 1);
            font-family: PingFang-bold;
          }

          .age {
            font-size: 20px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            margin: 0 0 0 13px;
            font-family: PingFang-Medium;
          }
        }

        .bottom {
          width: 1280px;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          margin: 15px 0 0 0;

          .item {
            font-size: 16px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            margin-right: 36px;
            margin-bottom: 8px;
          }
        }
      }

      .detail {
        width: 160px;
        height: 138px;
        /*background: blue;*/
        position: absolute;
        right: 0;
        top: 0;
        font-size: 18px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }

    .center {
      display: flex;
      justify-content: flex-start;

      .left {
        margin: 28px 0 0 25px;
        /*任职经历(集团内外部)*/
        .serve {
          .title {
            font-size: 16px;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-family: PingFang-bold;

            .border {
              width: 5px;
              height: 20px;
              background: rgba(240, 23, 20, 1);
              border-radius: 0 0 4px 4px;
              margin-right: 7px;
            }
          }

          .content {
            width: 925px;
            height: 225px;
            background: rgba(255, 255, 255, 1);
            border-radius: 10px;
            margin: 10px 0 0 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            /*外部任职经验*/
            .external {
              width: 471px;

              .title {
                font-family: PingFang-bold;
                width: 106px;
                height: 27px;
                background: rgba(242, 242, 242, 1);
                border-radius: 0 0 10px 10px;
                font-size: 14px;
                font-weight: bold;
                color: rgba(240, 23, 20, 1);
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 14px;
              }

              .list {
                height: 198px;
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                align-content: flex-start;
                overflow: hidden;
                overflow-y: scroll;

                .item {
                  width: 221px;
                  margin: 9px 0 0 7px;

                  .year {
                    font-size: 12px;
                    font-weight: 500;
                    color: rgba(102, 102, 102, 1);
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    margin: 0 0 5px 0;
                    letter-spacing: 1px;

                    span {
                      display: inline-block;
                      width: 7px;
                      height: 7px;
                      background: rgba(255, 255, 255, 1);
                      border: 1px solid rgba(22, 96, 240, 1);
                      border-radius: 50%;
                      margin-right: 2px;
                    }
                  }

                  .company {
                    width: 215px;
                    font-size: 14px;
                    color: #000000;
                    margin-left: 12px;
                  }

                  .job {
                    width: 215px;
                    font-size: 12px;
                    color: #000000;
                    margin-left: 12px;
                  }
                }
              }
            }

            .border {
              width: 1px;
              height: 195px;
              /*background: rgba(255, 255, 255, 1);*/
              /*border: 1px solid;*/
              border-radius: 10px;
              background: rgba(229, 229, 229, 1);
            }

            .internal {
              width: 471px;

              .title {
                font-family: PingFang-bold;
                width: 106px;
                height: 27px;
                background: rgba(242, 242, 242, 1);
                border-radius: 0 0 10px 10px;
                font-size: 14px;
                font-weight: bold;
                color: rgba(240, 23, 20, 1);
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 14px;
              }

              .list {
                height: 198px;
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                align-content: flex-start;
                overflow: hidden;
                overflow-y: scroll;

                .item {
                  width: 221px;
                  margin: 9px 0 0 7px;

                  .year {
                    font-size: 12px;
                    font-weight: 500;
                    color: rgba(102, 102, 102, 1);
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    margin: 0 0 5px 0;
                    letter-spacing: 1px;

                    span {
                      display: inline-block;
                      width: 7px;
                      height: 7px;
                      background: rgba(255, 255, 255, 1);
                      border: 1px solid rgba(22, 96, 240, 1);
                      border-radius: 50%;
                      margin-right: 2px;
                    }
                  }

                  .company {
                    width: 215px;
                    font-size: 14px;
                    color: #000000;
                    margin-left: 12px;
                  }

                  .job {
                    width: 215px;
                    font-size: 12px;
                    color: #000000;
                    margin-left: 12px;
                  }
                }
              }
            }
          }
        }

        /*绩效表现*/
        .performance {
          /*标题*/
          .title {
            font-family: PingFang-bold;
            font-size: 16px;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 10px 0 11px 0;

            span {
              width: 5px;
              height: 20px;
              background: rgba(240, 23, 20, 1);
              border-radius: 3px;
              margin-right: 7px;
            }
          }

          .content {
            width: 925px;
            height: 470px;
            background: rgba(255, 255, 255, 1);
            border-radius: 10px;

            .top {
              display: flex;
              justify-content: flex-start;

              .left {
                width: 217px;
                margin: 0 0 0 15px;

                .title {
                  font-family: PingFang-Medium;
                  font-size: 14px;
                  font-weight: 500;
                  color: rgba(0, 0, 0, 1);
                  margin: 15px 0 11px 0;
                }

                .item {
                  width: 110px;
                  height: 36px;
                  background: rgba(247, 247, 247, 1);
                  border-radius: 4px;
                  font-size: 12px;
                  font-weight: 500;
                  color: rgba(0, 0, 0, 1);
                  margin: 0 0 6px 0;
                  display: flex;
                  justify-content: space-around;
                  align-items: center;

                  span {
                    font-size: 18px;
                    color: rgba(240, 23, 20, 1);
                    font-weight: bold;
                  }
                }
              }

              .right {
                width: 689px;
                height: 170px;
                overflow-y: auto;
                margin: 0;

                .title {
                  font-size: 14px;
                  font-weight: 500;
                  color: rgba(0, 0, 0, 1);
                  margin: 15px 0 0 0;
                  font-family: PingFang-Medium;
                }

                .item {
                  width: 689px;
                  font-size: 14px;
                  color: #000;
                  margin: 10px 0 0 0;

                  span {
                    display: inline-block;
                    font-size: 20px;
                    color: #999;
                  }
                }
              }
            }

            /*关键经验*/
            .experience {
              .title {
                font-family: PingFang-bold;
                font-size: 16px;
                font-weight: bold;
                color: rgba(0, 0, 0, 1);
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin: 0px 0 11px 0;

                span {
                  width: 5px;
                  height: 20px;
                  background: rgba(240, 23, 20, 1);
                  border-radius: 3px;
                  margin-right: 7px;
                }
              }

              .list {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin: 0 0 0 16px;
                font-family: PingFang-Medium;
                height: 53px;

                .item {
                  div {
                    width: 199px;
                    height: 53px;
                    background: rgba(247, 247, 247, 1);
                    border-radius: 10px;
                    margin: 0 30px 0 0;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;

                    img {
                      margin: 0 20px;
                    }

                    span {
                      font-size: 14px;
                      font-weight: 500;
                      color: rgba(0, 0, 0, 1);
                    }
                  }
                }
              }
            }

            /*教育背景*/
            .education {
              font-family: PingFang-Medium;

              .title {
                font-family: PingFang-bold;
                font-size: 16px;
                font-weight: bold;
                color: rgba(0, 0, 0, 1);
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin: 5px 0 11px 0;

                span {
                  width: 5px;
                  height: 20px;
                  background: rgba(240, 23, 20, 1);
                  border-radius: 3px;
                  margin-right: 7px;
                }
              }

              .list {
                height: 60px;
                overflow-y: auto;

                .item {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  font-size: 14px;
                  font-weight: 500;
                  margin: 8px 0 0 19px;
                  /*毕业时间*/
                  .time {
                    color: rgba(102, 102, 102, 1);
                    margin: 0 44px 0 0;

                    span {
                      margin: 0 0 0 21px;
                    }
                  }

                  /*毕业院校*/
                  .school {
                    color: rgba(102, 102, 102, 1);
                    margin: 0 44px 0 0;

                    span {
                      margin: 0 0 0 21px;
                    }
                  }

                  /*专业*/
                  .profession {
                    color: rgba(102, 102, 102, 1);
                    margin: 0 44px 0 0;

                    span {
                      margin: 0 0 0 21px;
                    }
                  }

                  /*最高学位*/
                  .degree {
                    color: rgba(102, 102, 102, 1);
                    margin: 0 44px 0 0;

                    span {
                      color: rgba(95, 149, 255, 1);
                      margin: 0 0 0 21px;
                    }
                  }

                  .full {
                    color: rgba(102, 102, 102, 1);
                    margin: 0 44px 0 0;

                    span {
                      color: rgba(95, 149, 255, 1);
                      margin: 0 0 0 21px;
                    }
                  }
                }
              }
            }

            .bottom {
              margin: 10px 0 0 14px;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              /*奖励荣誉(集团内)*/
              .honor {
                width: 442px;
                height: 94px;
                background: rgba(247, 247, 247, 1);
                border-radius: 4px;
                margin: 0 13px 0 0;
                overflow-y: auto;

                .title {
                  font-family: PingFang-Medium;
                  font-size: 14px;
                  font-weight: 500;
                  color: rgba(0, 0, 0, 1);
                  margin: 11px 0 0 11px;

                  span {
                    width: 5px;
                    height: 5px;
                    background: rgba(255, 0, 0, 1);
                    border-radius: 50%;
                  }
                }

                .list {
                  margin: 10px 0 0 25px;

                  .item {
                    font-size: 14px;
                    color: rgba(0, 0, 0, 1);
                  }
                }
              }

              /*资格证书*/
              .certificate {

                width: 439px;
                height: 94px;
                background: rgba(247, 247, 247, 1);
                border-radius: 4px;
                overflow-y: auto;

                .title {
                  font-family: PingFang-Medium;
                  font-size: 14px;
                  font-weight: 500;
                  color: rgba(0, 0, 0, 1);
                  margin: 11px 0 0 11px;

                  span {
                    width: 5px;
                    height: 5px;
                    background: rgba(255, 0, 0, 1);
                    border-radius: 50%;
                  }
                }

                .list {
                  margin: 10px 0 0 25px;


                  .item {
                    font-size: 14px;
                    color: rgba(0, 0, 0, 1);
                  }
                }
              }
            }
          }
        }

        .bottom {
          margin: 12px 0 0 0;
          display: flex;
          justify-content: flex-start;
          /*个人3-5年职业发展规划*/
          .planning {
            width: 456px;
            height: 93px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            overflow-y: auto;

            .title {
              font-family: PingFang-Medium;
              width: 178px;
              height: 29px;
              background: rgba(242, 242, 242, 1);
              border-radius: 0 0 4px 4px;
              text-align: center;
              font-size: 14px;
              font-weight: bold;
              color: rgba(240, 23, 20, 1);
              line-height: 29px;
              margin-left: 15px;
            }

            .detail {
              font-size: 14px;
              font-weight: 500;
              color: rgba(0, 0, 0, 1);
              margin: 13px 0 0 22px;
            }
          }

          /*产业建议发展方向*/
          .growth {
            width: 456px;
            height: 93px;
            background: rgba(255, 255, 255, 1);
            border-radius: 4px;
            margin-left: 13px;
            overflow-y: auto;

            .title {
              font-family: PingFang-Medium;
              width: 178px;
              height: 29px;
              background: rgba(242, 242, 242, 1);
              border-radius: 0 0 4px 4px;
              font-size: 14px;
              font-weight: bold;
              color: rgba(240, 23, 20, 1);
              text-align: center;
              line-height: 29px;
              margin-left: 15px;
            }

            .detail {
              font-size: 14px;
              font-weight: 500;
              color: rgba(0, 0, 0, 1);
              margin: 13px 0 0 22px;
            }
          }
        }
      }

      .right {
        margin: 0px 0 0 22px;
        /*综合测评结果*/
        .evaluation {
          margin: 25px 0 0 0;

          .title {
            font-size: 16px;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
            display: flex;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-family: PingFang-bold;

            span {
              display: inline-block;
              width: 5px;
              height: 20px;
              background: rgba(240, 23, 20, 1);
              border-radius: 3px;
              margin-right: 8px;
            }

            .title_left {
              width: 451px;
              display: flex;
              justify-content: flex-start;
              align-items: center;
            }

            .title_right {
              width: 451px;
              margin-left: 22px;
              display: flex;
              justify-content: flex-start;
              align-items: center;
            }
          }

          .content {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 10px 0 0 0;
            /*潜力分析表*/
            .potential {
              width: 451px;
              height: 224px;
              background: rgba(255, 255, 255, 1);
              border-radius: 10px;
              margin-right: 21px;
              position: relative;

              .title {
                font-size: 14px;
                font-weight: 500;
                color: rgba(0, 0, 0, 1);
                position: absolute;
                top: 12px;
                left: 19px;
                font-family: PingFang-Medium;
              }
            }

            /*人才九宫格*/
            .talent {
              width: 451px;
              height: 224px;
              background: rgba(255, 255, 255, 1);
              border-radius: 10px;
              position: relative;

              .title {
                font-size: 14px;
                font-weight: 500;
                color: rgba(0, 0, 0, 1);
                margin: 12px 0 0 19px;
                font-family: PingFang-Medium;
              }

              .list {
                width: 369px;
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                margin: 15px 0 0 43px;

                .item {
                  width: 123px;
                  height: 45px;
                  opacity: 0.8;
                  font-size: 12px;
                  font-weight: 500;
                  color: rgba(0, 0, 0, 1);
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border: 1px solid white;
                  box-sizing: border-box;
                }
              }

              .detail {
                width: 13px;
                font-size: 14px;
                font-weight: 500;
                color: rgba(0, 0, 0, 1);
                position: absolute;
                top: 97px;
                left: 20px;
              }

              .detail1 {
                font-size: 14px;
                font-weight: 500;
                color: rgba(0, 0, 0, 1);
                text-align: center;
                margin-top: 15px;
              }
            }
          }
        }

        /*360评价结果*/
        .result {
          margin: 14px 0 0 0;

          .title {
            font-size: 16px;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-family: PingFang-bold;

            span {
              display: inline-block;
              width: 5px;
              height: 20px;
              background: rgba(240, 23, 20, 1);
              border-radius: 3px;
              margin-right: 8px;
            }
          }

          .content {
            width: 924px;
            height: 210px;
            background: rgba(255, 255, 255, 1);
            border-radius: 10px;
            margin: 10px 0 0 0;
          }
        }

        /*关键驱动因素*/
        .drive {
          margin: 10px 0 0 0;

          .title {
            font-size: 16px;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-family: PingFang-bold;

            span {
              display: inline-block;
              width: 5px;
              height: 20px;
              background: rgba(240, 23, 20, 1);
              border-radius: 3px;
              margin-right: 8px;
            }
          }

          .list {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
            font-family: PingFang-Medium;

            .item {
              width: 170px;
              height: 46px;
              background: rgba(255, 255, 255, 1);
              border-radius: 10px;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              font-size: 14px;
              font-weight: 500;

              img {
                margin: 0 12px 0 25px;
              }

              div {

                color: rgba(0, 0, 0, 1);
              }
            }
          }
        }

        /*综合评价*/
        .comprehensive {
          margin: 10px 0 0 0;
          /*标题*/
          .title {
            font-size: 16px;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
            display: flex;
            justify-content: flex-start;
            align-items: center;

            span {
              display: inline-block;
              width: 5px;
              height: 20px;
              background: rgba(240, 23, 20, 1);
              border-radius: 3px;
              margin-right: 8px;
            }
          }

          .content {
            display: flex;
            justify-content: flex-start;
            margin: 10px 0 0 0;
            /*核心优势评价*/
            .advantage {
              width: 449px;
              height: 233px;
              background: rgba(255, 255, 255, 1);
              border-radius: 4px;
              margin: 0 22px 0 0;
              overflow: hidden;
              overflow-y: auto;

              .title {
                margin: 10px 0 0 15px;
                font-size: 14px;
                font-weight: 500;
                color: rgba(0, 0, 0, 1);
                display: flex;
                justify-content: flex-start;
                align-items: center;
                font-family: PingFang-Medium;

                span {
                  width: 5px;
                  height: 5px;
                  background: rgba(240, 23, 20, 1);
                  border-radius: 3px;
                }
              }

              .list {
                margin-top: 15px;

                .item {
                  display: flex;
                  justify-content: flex-start;
                  align-items: flex-start;
                  margin-bottom: 37px;

                  .left {
                    width: 24px;
                    font-size: 12px;
                    font-weight: 500;
                    color: rgba(102, 102, 102, 1);
                    margin: 0 0 0 27px;
                  }

                  .right {
                    width: 377px;
                    font-size: 12px;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                    margin: 0 0 0 10px;
                  }
                }
              }
            }

            /*有待提升评价*/
            .promote {
              width: 449px;
              height: 233px;
              background: rgba(255, 255, 255, 1);
              border-radius: 4px;
              overflow: hidden;
              overflow-y: auto;

              .title {
                font-size: 14px;
                font-weight: 500;
                color: rgba(0, 0, 0, 1);
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin: 10px 0 0 15px;
                font-family: PingFang-Medium;

                span {
                  width: 5px;
                  height: 5px;
                  background: rgba(240, 23, 20, 1);
                  border-radius: 3px;
                }
              }

              .list {
                margin-top: 15px;

                .item {
                  display: flex;
                  justify-content: flex-start;
                  align-items: flex-start;
                  margin-bottom: 37px;

                  .left {
                    width: 24px;
                    font-size: 12px;
                    font-weight: 500;
                    color: rgba(102, 102, 102, 1);
                    margin: 0 0 0 27px;
                  }

                  .right {
                    width: 377px;
                    font-size: 12px;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
                    margin: 0 0 0 10px;
                  }
                }
              }
            }
          }

        }
      }
    }
  }
</style>
