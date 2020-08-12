<template>
  <div class="container">
    <headers msg="中南路桥-组织架构"></headers>
    <div class="look" @click="lookDetail()">查看人才盘点详情</div>
    <div class="center">
      <div class="title">
        <div>
          <div>中南路桥</div>
          <span></span>
        </div>
      </div>
      <div class="list1">
        <swiper class="swiper-container" ref="mySwiper" :options="swiperOptions">
          <swiper-slide class="swiper-slide" :style="swiperStyle" v-if="firstclass&& firstclass.length>0"
                        v-for="(item,key) in firstclass" :key="item.name">
            <div class="list1_item" @click="topeople(item.name)">
              <template v-if="firstclass.length>1">
                <template v-if="key==0">
                  <div class="top1">
                    <div></div>
                  </div>
                </template>
                <template v-else-if="key===firstclass.length-1">
                  <div class="top2">
                    <div></div>
                  </div>
                </template>
                <template v-else>
                  <div class="top">
                    <div></div>
                  </div>
                </template>
              </template>
              <template v-else>
                <div class="top3">
                  <div></div>
                </div>
              </template>
              <div class="item">
                <img src="../assets/green.png" alt="" class="img" v-if="item.color==1">
                <img src="../assets/red.png" alt="" class="img" v-else-if="item.color==3">
                <img src="../assets/yellow.png" alt="" class="img" v-else>
                <div class="left">
                  <div class="name">{{item.name}}</div>
                  <div class="position">
                    年龄：
                    {{item.age}}
                  </div>
                  <div class="position">
                    学历：
                    {{item.xueli}}
                  </div>
                  <div class="position">职位：
                    {{item.org}}
                  </div>
                  <div class="position">职级：
                    {{item.zhiji}}
                  </div>
                </div>
                <template v-if="item.userimg">
                  <img :src="item.userimg" alt="" class="right">
                </template>
                <template v-else>
                  <div class="right"></div>
                </template>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="title">
        <div>
          <div>经理层</div>
          <span></span>
        </div>
      </div>
      <div class="list2">
        <swiper class="swiper-container" ref="mySwiper" :options="swiperOptions">
          <swiper-slide class="swiper-slide" :style="swiperStyle" v-if="secondclass&& secondclass.length>0"
                        v-for="(item,key) in secondclass" :key="item.name">
            <div class="list2_item" @click="topeople(item.name)">
              <template v-if="secondclass.length>1">
                <template v-if="key==0">
                  <div class="top1">
                    <div></div>
                  </div>
                </template>
                <template v-else-if="key===secondclass.length-1">
                  <div class="top2">
                    <div></div>
                  </div>
                </template>
                <template v-else>
                  <div class="top">
                    <div></div>
                  </div>
                </template>
              </template>
              <template v-else>
                <div class="top3">
                  <div></div>
                </div>
              </template>
              <div class="item">
                 <img src="../assets/green.png" alt="" class="img" v-if="item.color==1">
                <img src="../assets/red.png" alt="" class="img" v-else-if="item.color==3">
                <img src="../assets/yellow.png" alt="" class="img" v-else>
                <div class="left">
                  <div class="name">{{item.name}}</div>
                  <div class="position">
                    年龄：
                    {{item.age}}
                  </div>
                  <div class="position">
                    学历：
                    {{item.xueli}}
                  </div>
                  <div class="position">职位：
                    {{item.org}}
                  </div>
                  <div class="position">职级：
                    {{item.zhiji}}
                  </div>
                </div>
                <template v-if="item.userimg">
                  <img :src="item.userimg" alt="" class="right">
                </template>
                <template v-else>
                  <div class="right"></div>
                </template>
              </div>
            </div>

          </swiper-slide>
        </swiper>
      </div>
      <div class="list3">
        <swiper class="swiper-container" ref="mySwiper" :options="swiperOptions">
          <swiper-slide class="swiper-slide" v-if="thirdclass&& thirdclass.length>0"
                        v-for="(item1,key) in thirdclass" :key="key"
                        :style="{width:(item1.user?item1.user.length:'1')*287+'px'}">
            <div class="list3_item">
              <div class="item">
                <div class="top_top">
                  <div>
                    <div>{{item1.org}}</div>
                    <span></span>
                  </div>
                </div>
                <div class="bottom">
                  <!--                  <template></template>-->
                  <div v-for="(item2,key) in item1.user" :key="key">
                    <template v-if="item1.user.length>1">
                      <template v-if="key==0">
                        <div class="top1">
                          <div></div>
                        </div>
                      </template>
                      <template v-else-if="key===item1.user.length-1">
                        <div class="top2">
                          <div></div>
                        </div>
                      </template>
                      <template v-else>
                        <div class="top">
                          <div></div>
                        </div>
                      </template>
                    </template>
                    <template v-else>
                      <div class="top3">
                        <div></div>
                      </div>
                    </template>
                    <div class="bottom_list">

                      <img src="../assets/green.png" alt="" class="img" v-if="item2.color==1">
                      <img src="../assets/red.png" alt="" class="img" v-else-if="item2.color==3">
                      <img src="../assets/yellow.png" alt="" class="img" v-else>
                      <div class="left" @click="topeople(item2.name)">
                        <div class="name">{{item2.name}}</div>
                        <!--                    <div class="detail1">{{item2.level}}</div>-->
                        <div class="position">
                          年龄：
                          {{item2.age}}
                        </div>
                        <div class="position">
                          学历：
                          {{item2.xueli}}
                        </div>
                        <div class="position">职位：
                          {{item2.org}}
                        </div>
                        <div class="position">职级：
                          {{item2.zhiji}}
                        </div>
                      </div>
                      <template v-if="item2.userimg">
                        <img :src="item2.userimg" alt="" class="right">
                      </template>
                      <template v-else>
                        <div class="right"></div>
                      </template>
                    </div>
                  </div>
                </div>
                <div class="bottom_add" v-if="item1.children&& item1.children.length>0">
                  <template v-if="key==key1">
                    <img src="../assets/less.png" alt="" @click="close()">
                  </template>
                  <img src="../assets/add.png" alt="" @click="sel(key)" v-else>
                </div>
              </div>


            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="list3">
        <swiper class="swiper-container" ref="mySwiper" :options="swiperOptions">
          <swiper-slide class="swiper-slide" v-if="fourclass&& fourclass.length>0"
                        v-for="(item1,key) in fourclass" :key="key"
                        :style="{width:(item1.user?item1.user.length:'1')*287+'px'}">
            <div class="list3_item">
              <div class="item">
                <div class="top_top">
                  <div>
                    <div>{{item1.org}}</div>
                    <span></span>
                  </div>
                </div>
                <div class="bottom">
                  <div v-for="(item2,key) in item1.user" :key="key">
                    <template v-if="item1.user.length>1">
                      <template v-if="key==0">
                        <div class="top1">
                          <div></div>
                        </div>
                      </template>
                      <template v-else-if="key===item1.user.length-1">
                        <div class="top2">
                          <div></div>
                        </div>
                      </template>
                      <template v-else>
                        <div class="top">
                          <div></div>
                        </div>
                      </template>
                    </template>
                    <template v-else>
                      <div class="top3">
                        <div></div>
                      </div>
                    </template>
                    <div class="bottom_list">

                      <img src="../assets/green.png" alt="" class="img" v-if="item2.color==1">
                      <img src="../assets/red.png" alt="" class="img" v-else-if="item2.color==3">
                      <img src="../assets/yellow.png" alt="" class="img" v-else>
                      <div class="left" @click="topeople(item2.name)">
                        <div class="name">{{item2.name}}</div>
                        <div class="position">
                          年龄：
                          {{item2.age}}
                        </div>
                        <div class="position">
                          学历：
                          {{item2.xueli}}
                        </div>
                        <div class="position">职位：
                          {{item2.org}}
                        </div>
                        <div class="position">职级：
                          {{item2.zhiji}}
                        </div>
                      </div>
                      <template v-if="item2.userimg">
                        <img :src="item2.userimg" alt="" class="right">
                      </template>
                      <template v-else>
                        <div class="right"></div>
                      </template>
                    </div>
                  </div>
                </div>
                <div class="bottom_add" v-if="item1.children&& item1.children.length>0">
                  <template v-if="key==key1">
                    <img src="../assets/less.png" alt="" @click="close()">
                  </template>
                  <img src="../assets/add.png" alt="" @click="sel1(key)" v-else>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="list4" v-if="show">
        <swiper class="swiper-container" ref="mySwiper" :options="swiperOptions">
          <swiper-slide class="swiper-slide" :style="swiperStyle" v-if="children&& children.length>0"
                        v-for="(item1,key) in children" :key="key">
            <div class="list4_item" @click="topeople(item1.name)">
              <template v-if="children.length>1">
                <template v-if="key==0">
                  <div class="top1">
                    <div></div>
                  </div>
                </template>
                <template v-else-if="key===children.length-1">
                  <div class="top2">
                    <div></div>
                  </div>
                </template>
                <template v-else>
                  <div class="top">
                    <div></div>
                  </div>
                </template>
              </template>
              <template v-else>
                <div class="top3">
                  <div></div>
                </div>
              </template>
              <div class="item">
                <img src="../assets/green.png" alt="" class="img" v-if="item1.color==1">
                <img src="../assets/red.png" alt="" class="img" v-else-if="item1.color==3">
                <img src="../assets/yellow.png" alt="" class="img" v-else>

                <div class="left">
                  <div class="name">{{item1.name}}</div>
                  <!--                  <div class="detail1">{{item1.level}}</div>-->
                  <div class="position">
                    年龄：
                    {{item1.age}}
                  </div>
                  <div class="position">
                    学历：
                    {{item1.xueli}}
                  </div>
                  <div class="position">职位：
                    {{item1.org}}
                  </div>
                  <div class="position">职级：
                    {{item1.zhiji}}
                  </div>
                </div>
                <template v-if="item1.userimg">
                  <img :src="item1.userimg" alt="" class="right">
                </template>
                <template v-else>
                  <div class="right"></div>
                </template>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import headers from './header.vue';

export default {
  name: 'character',
  data() {
    return {
      swiperStyle: {},
      swiperOptions: {
        slidesPerView: 'auto',
        freeMode: true,   // 随意拖动位置
        mousewheel: true
      },
      stepActive: 6,
      userlist: [],
      firstclass: [],
      fourclass: [],
      secondclass: [],
      thirdclass: [],
      key1: null,
      treeConfig: {nodeWidth: 120, nodeHeight: 80, levelHeight: 200},
      firstclassobj: {},
      show: false,
      children: [],
      b_width: null

    };
  },
  components: {
    headers,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  watch: {
    stepActive: {
      handler(newVal, oldVal) {
        console.log(this.stepActive);
        if (this.stepActive) {
          this.swiperStyle = 'width:' + 500 * this.stepActive / 16 + 'rem';    // 动态设置宽度
        }
      },
      immediate: false
    }
  },
  created() {
    let that = this;
    window.scrollTo(0, 0);
    that.$api.getorgmsglq()
      .then(data => {
        console.log(data);
        if (data.code == 200) {
          that.firstclass = data.firstclass;
          that.secondclass = data.secondclass;
          that.thirdclass = data.thirdclass;
          that.fourclass = data.fourclass;
        }
      });
  },
  destroyed() {
    this.swiper.destroy(false);
  },
  methods: {
    setTranslate(index) {
      console.log(index, this.swiper.width, this.$refs['item' + index][0].getBoundingClientRect());
      this.swiper.setTransition(1000);
      this.swiper.setTranslate(0 - 500 * (index - 1) + (this.swiper.width / 2 - 500 / 2));//设定位移，可以为正数
    },
    lookDetail() {
      let that = this;
      that.$router.push({path: '/home'});
    },
    sel(key) {
      console.log(key);
      let that = this;
      that.key1 = key;
      that.show = true;

      that.children = this.thirdclass[key].children;
    },
    sel1(key) {
      console.log(key);
      let that = this;
      that.key1 = key;
      that.show = true;
      that.children = this.fourclass[key].children;
    },
    close() {
      this.key1 = null;
      this.show = false;
      window.scrollTo(0, 0);
    },
    topeople(name) {
      console.log(name);
      this.$router.push({path: '/info', query: {username: name}});
    }
  },
};
</script>

<style scoped lang="scss">
.container {
  position: relative;

  .look {
    position: absolute;
    top: 250px;
    right: 430px;
    cursor: pointer;
    color: rgba(222, 40, 37, 1);
    font-size: 30px;
  }
}

.center {
  width: 1920px;
  padding: 10px 0 50px 0;

  .swiper-container {

  }

  .swiper-slide {
    width: 287px;
    margin-right: 20px;
  }

  .title {
    display: flex;
    justify-content: center;
    margin: 30px 0 30px -39px;


    div {
      background: #f1f0f0;
      padding: 10px;
      position: relative;
      text-align: center;

      div {
        font-size: 22px;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
      }

      span {
        display: inline-block;
        width: 1px;
        height: 30px;
        background: #979797;
        position: absolute;
        bottom: -30px;

      }
    }
  }

  .list1 {
    width: 1920px;
    display: flex;
    justify-content: space-around;
    /*margin: 54px 0 0 0;*/
    overflow-y: auto;

    .list1_item {
      .top {
        width: 270px;
        display: flex;
        justify-content: center;
        position: relative;

        div {
          width: 1px;
          height: 27px;
          background: #979797;
        }


      }

      .top::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 200px;
        height: 1px;
        background: #979797;
      }

      .top1 {

        width: 270px;
        display: flex;
        justify-content: center;
        /*border-top: 1px solid #979797;*/
        position: relative;

        div {
          width: 1px;
          height: 27px;
          background: #979797;
        }


      }

      .top1::after {
        content: '';
        position: absolute;
        left: 135px;
        top: 0;
        width: 200px;
        height: 1px;
        background: #979797;
      }

      .top2 {

        width: 270px;
        display: flex;
        justify-content: center;
        /*border-top: 1px solid #979797;*/
        position: relative;

        div {
          width: 1px;
          height: 27px;
          background: #979797;
        }
      }

      .top2::after {
        content: '';
        position: absolute;
        right: 135px;
        top: 0;
        width: 200px;
        height: 1px;
        background: #979797;
      }

      .top3 {

      }

      .item {
        width: 270px;
        height: 152px;
        background: #f1f0f0;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        margin-left: 7px;

        .img {
          width: 110px;
          position: absolute;
          left: -7px;
          top: 10px;
        }

        .left {
          height: 152px;
          margin-left: 21px;
          position: relative;


          .name {
            /*width: 79px;*/
            font-size: 22px;
            font-weight: bold;
            color: white;
            padding: 13px 0 0 0;
          }

          .detail {
            font-size: 14px;
            color: rgba(51, 51, 51, 1);
            padding: 19px 0 0 0;
          }

          .position {
            font-size: 14px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 20px;
            display: flex;
            justify-content: flex-start;
            margin-top: 2px;

            span {
              width: 45px;
            }

            div {
              width: 60px;
              color: #000;
            }
          }

          .detail1 {
            font-size: 14px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            padding: 3px 0 0 0;
          }
        }

        .right {
          height: 124px;
          margin-right: 10px;
        }
      }
    }

  }

  .list2 {
    width: 1920px;
    display: flex;
    justify-content: space-around;
    /*margin: 54px 0 0 0;*/
    overflow-y: auto;

    .list2_item {
      .top {
        width: 270px;
        display: flex;
        justify-content: center;
        /*border-top: 1px solid #979797;*/
        position: relative;

        div {
          width: 1px;
          height: 27px;
          background: #979797;
        }


      }

      .top::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 308px;
        height: 1px;
        background: #979797;
      }

      .top1 {

        width: 270px;
        display: flex;
        justify-content: center;
        /*border-top: 1px solid #979797;*/
        position: relative;

        div {
          width: 1px;
          height: 27px;
          background: #979797;
        }


      }

      .top1::after {
        content: '';
        position: absolute;
        left: 135px;
        top: 0;
        width: 308px;
        height: 1px;
        background: #979797;
      }

      .top2 {

        width: 270px;
        display: flex;
        justify-content: center;
        /*border-top: 1px solid #979797;*/
        position: relative;

        div {
          width: 1px;
          height: 27px;
          background: #979797;
        }


      }

      .top2::after {
        content: '';
        position: absolute;
        right: 135px;
        top: 0;
        width: 308px;
        height: 1px;
        background: #979797;
      }

      .item {
        width: 270px;
        height: 152px;
        background: #f1f0f0;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        margin-left: 7px;

        .img {
          width: 110px;
          position: absolute;
          left: -7px;
          top: 10px;
        }

        .left {
          height: 152px;
          margin-left: 21px;
          position: relative;

          .name {
            font-size: 22px;
            font-weight: bold;
            color: white;
            padding: 13px 0 0 0;
          }

          .detail {
            font-size: 14px;
            color: rgba(51, 51, 51, 1);
            padding: 19px 0 0 0;
          }

          .position {
            font-size: 14px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 20px;
            display: flex;
            justify-content: flex-start;
            margin-top: 2px;

            span {
              width: 45px;
            }

            div {
              width: 60px;
              color: #000;
            }
          }

          .detail1 {
            font-size: 14px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            padding: 3px 0 0 0;
          }
        }

        .right {
          height: 124px;
          margin-right: 10px;
        }
      }
    }

  }

  .list3 {
    width: 1920px;
    display: flex;
    justify-content: center;
    margin: 54px 0 0 0;

    .list3_item {
      .item {
        .top_top {
          display: flex;
          justify-content: center;
          margin: 30px 0 30px -30px;

          div {
            background: #f1f0f0;
            padding: 10px;

            position: relative;
            text-align: center;

            div {
              font-size: 22px;
              font-weight: bold;
              height: 30px;
              line-height: 35px;
              color: rgba(0, 0, 0, 1);
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            }

            span {
              display: inline-block;
              width: 1px;
              height: 30px;
              background: #979797;
              position: absolute;
              bottom: -30px;

            }
          }
        }

        .bottom {
          display: flex;
          justify-content: flex-start;

          .top {
            width: 270px;
            display: flex;
            justify-content: center;
            /*border-top: 1px solid #979797;*/
            position: relative;

            div {
              width: 1px;
              height: 27px;
              background: #979797;
            }
          }

          .top::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 308px;
            height: 1px;
            background: #979797;
          }

          .top1 {
            width: 270px;
            display: flex;
            justify-content: center;
            /*border-top: 1px solid #979797;*/
            position: relative;

            div {
              width: 1px;
              height: 27px;
              background: #979797;
            }


          }

          .top1::after {
            content: '';
            position: absolute;
            left: 135px;
            top: 0;
            width: 200px;
            height: 1px;
            background: #979797;
          }

          .top2 {

            width: 270px;
            display: flex;
            justify-content: center;
            /*border-top: 1px solid #979797;*/
            position: relative;

            div {
              width: 1px;
              height: 27px;
              background: #979797;
            }
          }

          .top2::after {
            content: '';
            position: absolute;
            right: 135px;
            top: 0;
            width: 200px;
            height: 1px;
            background: #979797;
          }

          .top3 {
            width: 1px;
            height: 27px;
            background: #979797;
            margin-left: 129px;

          }

          .bottom_list {

            width: 270px;
            height: 152px;
            background: #f1f0f0;
            border-radius: 4px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            margin-left: 27px;

            .img {
              width: 110px;
              position: absolute;
              left: -7px;
              top: 10px;
            }

            .left {
              height: 152px;
              margin-left: 21px;
              overflow-y: auto;
              position: relative;

              .name {
                font-size: 22px;
                font-weight: bold;
                color: white;
                padding: 13px 0 0 0;
              }

              .detail {
                font-size: 14px;
                color: rgba(51, 51, 51, 1);
                padding: 19px 0 0 0;
              }

              .position {
                font-size: 14px;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                line-height: 20px;
                display: flex;
                justify-content: flex-start;
                margin-top: 2px;

                span {
                  width: 55px;
                }

                div {
                  width: 60px;
                  color: #000;
                }
              }

              .detail1 {
                font-size: 14px;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                padding: 3px 0 0 0;
              }
            }

            .right {
              /*width: 122px;*/
              height: 124px;
              margin-right: 10px;
            }
          }
        }


      }

      .bottom_add {
        display: flex;
        justify-content: center;
        margin: 17px 0 0 0;

        img {
          width: 48px;
        }
      }
    }
  }

  .list4 {
    min-width: 1920px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 54px 0 0 0;


    .list4_item {
      .top {
        width: 270px;
        display: flex;
        justify-content: center;
        /*border-top: 1px solid #979797;*/
        position: relative;

        div {
          width: 1px;
          height: 27px;
          background: #979797;
        }


      }

      .top::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 308px;
        height: 1px;
        background: #979797;
      }

      .top1 {

        width: 270px;
        display: flex;
        justify-content: center;
        /*border-top: 1px solid #979797;*/
        position: relative;

        div {
          width: 1px;
          height: 27px;
          background: #979797;
        }


      }

      .top1::after {
        content: '';
        position: absolute;
        left: 135px;
        top: 0;
        width: 200px;
        height: 1px;
        background: #979797;
      }

      .top2 {

        width: 270px;
        display: flex;
        justify-content: center;
        /*border-top: 1px solid #979797;*/
        position: relative;

        div {
          width: 1px;
          height: 27px;
          background: #979797;
        }


      }

      .top2::after {
        content: '';
        position: absolute;
        right: 135px;
        top: 0;
        width: 200px;
        height: 1px;
        background: #979797;
      }

      .top3 {
        width: 270px;
        display: flex;
        justify-content: center;
        /*border-top: 1px solid #979797;*/
        position: relative;

        div {
          width: 1px;
          height: 27px;
          background: #979797;
        }


      }

      .top3::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 270px;
        height: 1px;
        background: #979797;
      }

      .item {
        width: 270px;
        height: 152px;
        background: #f1f0f0;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        margin-left: 7px;

        .img {
          width: 110px;
          position: absolute;
          left: -7px;
          top: 10px;
        }

        .left {
          height: 152px;
          margin-left: 21px;
          overflow-y: auto;
          position: relative;

          .name {
            font-size: 22px;
            font-weight: bold;
            color: white;
            padding: 13px 0 0 0;
          }

          .detail {
            font-size: 14px;
            color: rgba(51, 51, 51, 1);
            padding: 19px 0 0 0;
          }

          .position {
            font-size: 14px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 20px;
            display: flex;
            justify-content: flex-start;
            margin-top: 2px;

            span {
              width: 55px;
            }

            div {
              width: 60px;
              color: #000;
            }
          }

          .detail1 {
            font-size: 14px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            padding: 3px 0 0 0;
          }
        }

        .right {
          /*width: 122px;*/
          height: 124px;
          margin-right: 10px;
        }
      }
    }
  }
}


</style>
