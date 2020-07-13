<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  html {
    /*隐藏滚动条，当IE下溢出，仍然可以滚动*/
    -ms-overflow-style: none;
    /*火狐下隐藏滚动条*/
    overflow: -moz-scrollbars-none;
    overflow: -moz-scrollbars-vertical;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @font-face {
    font-family: 'PingFang';
    src: url('assets/PingFang.ttf');

  }

  @font-face {
    font-family: 'DIN';
    src: url('assets/DIN.otf');

  }

  @font-face {
    font-family: 'PingFang-bold';
    src: url('assets/PingFang-bold.ttf');
  }

  @font-face {
    font-family: 'PangMenZhengDao';
    src: url('assets/PangMenZhengDao.ttf');
  }

  @font-face {
    font-family: 'PingFang-Medium';
    src: url('assets/PingFang-Medium.ttf');
  }


  #app {
    width: 1920px;
    font-family: 'PingFang';
    height: 1080px;
    user-select: none;
  }
</style>
