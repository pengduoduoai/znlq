<template>
  <div class="container">
    <div class="head_title">中南干部盘点管理系统</div>
    <div class="center">
      <img src="../assets/left.jpg" alt="" class="left">
      <div class="right">
        <div class="list">
          <div class="item">
            <div>中南控股</div>
          </div>
          <div class="item" @click="see('http://test.ninewe.com/znjz/#/')">
            <div>中南建筑</div>
          </div>
          <div class="item" @click="toOrganization()">
            <div>中南高科</div>
          </div>


          <div class="item">
            <div>中南实业</div>
          </div>
          <div class="item">
            <div>中南教育</div>
          </div>
        </div>
      </div>

    </div>
    <div class="bottom_title">中南控股综合人力中心</div>

  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {}
    },
    created() {
    },
    methods: {
      toOrganization() {
        let that = this;
        that.$router.push({path: '/organization'});
      },
      see(e){
        window.location.href = e
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    width: 1920px;
    height: 1080px;
    background-image: url("../assets/bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;

    .head_title {
      font-size: 50px;
      font-weight: bold;
      color: rgba(222, 40, 37, 1);
      text-align: center;
      padding-top: 70px;

    }

    .center {
      width: 1136px;
      height: 695px;
      background: white;
      border-radius: 30px;
      margin: 76px 0 0 392px;
      display: flex;
      justify-content: flex-start;

      .left {
        width: 568px;
        height: 695px;
        border-radius: 30px 0px 0px 30px;
      }

      .right {
        width: 568px;
        height: 695px;
        overflow-y: auto;
        border-radius: 0px 30px 30px 0px;

        .list {
          /*margin: 0 0 0 86px;*/
          padding-top: 60px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;

          .item {
            width: 420px;
            height: 136px;

            text-align: center;
            background: rgba(255, 255, 255, 1);
            font-size: 33px;
            font-weight: 400;
            color: rgba(212, 211, 217, 1);
            cursor: pointer;

            div {
              width: 420px;
              height: 86px;
              line-height: 86px;
              border: 1px solid rgba(234, 232, 235, 1);
              border-radius: 43px;
            }

            div:hover {
              width: 470px;
              height: 136px;
              line-height: 100px !important;
              background-image: url("../assets/btn.png");
              background-repeat: no-repeat;
              background-size: 100% 100%;
              border: 0;
              color: white;
              margin: 0 0 0 -25px;
            }
          }

          .item:hover {

          }
        }
      }

    }

    .bottom_title {
      font-size: 42px;
      font-weight: 400;
      color: rgba(222, 40, 37, 1);
      text-align: center;
      padding-top: 56px;
    }
  }
</style>
