<template>
  <div class="head">
    <div class="left"  @click="getBack()" >中南控股综合人力中心</div>
    <div class="center"><img src="../assets/head.png" alt="">
      <div>{{msg}}</div>
    </div>
    <div class="right">
      <div class="detail">人才盘点项目</div>
      <div class="time">{{date?date.getHours():''}}:{{date?date.getMinutes():''}}:{{date?date.getSeconds():''}} {{date?date.getFullYear():''}}年 {{date?date.getMonth()+1:''}}月{{date?date.getDate():''}}日
      </div>
    </div>
  </div>
</template>

<script>
  //
  export default {
    name: "header",
    data() {
      return {
        date:null,
      }
    },
    props: {
      msg: String
    },
    created() {

    },
    mounted() {
      let that = this;
      that.timer = setInterval(() => {
        that.date = new Date();
      }, 1000)

    },
    methods: {
      getBack() {
        this.$router.back(-1);
      },
    }
  }
</script>

<style scoped lang="scss">
.head {
  width: 19.2rem;
  height: 1.05rem;
  background: rgba(172, 35, 23, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    font-size: 30px;
    color: rgba(255, 255, 255, 1);
    margin: 0 0 0 51px;
    font-family: 'PangMenZhengDao';
    cursor: pointer;
  }

  .center {
    width: 8.26rem;
    height: 1.46rem;
    position: relative;

    img {
      width: 8.26rem;
      position: absolute;
      left: 0;
      top: 0;
    }

    div {
      position: absolute;
      left: 0;
      top: 0;
      text-align: center;
      width: 8.26rem;
      line-height: 1.46rem;
      font-size: .4rem;
      color: rgba(172, 35, 23, 1);
      font-family: 'ZhangHaiShan';
    }
  }

  .right {
    width: 3.2rem;
    text-align: right;
    margin: 0 .68rem 0 0;
    /*height: 105px;*/

    .detail {
      font-size: .2rem;
      font-weight: 800;
      color: rgba(255, 255, 255, .84);
      /*margin: 32px 0 0 0;*/
      font-family: 'PingFang-bold';
    }

    .time {
      font-size: .2rem;
      font-weight: 400;
      color: rgba(255, 255, 255, .60);
      margin: .04rem 0 0 0;
    }
  }
}
</style>
