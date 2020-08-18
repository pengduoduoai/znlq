<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    //  alert('PC端')
    var whdef = 100 / 1920; // 表示1920的设计图,使用100PX的默认值
    var wH = window.innerHeight; // 当前窗口的高度
    var wW = window.innerWidth; // 当前窗口的宽度
    var rem
    if (wW <= 1024) {
      rem = 1024 * whdef;
    } else {
      rem = wW * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    }
    $('html').css('font-size', rem + "px");
    $(window).resize(function () // 绑定到窗口的这个事件中
    {
      var whdef = 100 / 1920; // 表示1920的设计图,使用100PX的默认值
      var wH = window.innerHeight; // 当前窗口的高度
      var wW = window.innerWidth; // 当前窗口的宽度
      if (wW <= 1024) {
        rem = 1024 * whdef;
      } else {
        rem = wW * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
      }
      $('html').css('font-size', rem + "px");
    });
  }
}
</script>

<style lang="scss">
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
  width: 19.2rem;
  font-family: 'PingFang';
  height: 10.8rem;
  user-select: none;
}
</style>
