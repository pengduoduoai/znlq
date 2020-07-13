<template>
  <div class="container" ref="myEchart"></div>
</template>

<script>
  let echarts = require('echarts');
  var data = [
    {
      lng: "121.59874400",
      aqi: "92",
      time: "2020-03-19 08",
      stationname: "太古小学（鄞州）",
      lat: "29.85970300"
    },
    {
      lng: "121.57025100",
      aqi: "25",
      time: "2020-03-19 08",
      stationname: "万里学院（鄞州）",
      lat: "29.82393300"
    },
    {
      lng: "121.72304700",
      aqi: "120",
      time: "2020-03-19 08",
      stationname: "龙赛医院（镇海）",
      lat: "29.96021500"
    },
    {
      lng: "121.84661500",
      aqi: "140",
      time: "2020-03-19 08",
      stationname: "环保大楼（北仑）",
      lat: "29.91421000"
    },
    {
      lng: "121.57000639",
      aqi: "110",
      time: "2020-03-19 08",
      stationname: "白沙活动中心（江北）",
      lat: "29.90139717"
    },
    {
      lng: "121.53491900",
      aqi: "80",
      time: "2020-03-19 08",
      stationname: "市监测中心（海曙）",
      lat: "29.87092600"
    },
    {
      lng: "121.43101500",
      aqi: "59",
      time: "2020-03-19 08",
      stationname: "城南小学（宁海）",
      lat: "29.29136000"
    },
    {
      lng: "121.28829300",
      aqi: "57",
      time: "2020-03-19 08",
      stationname: "溪口镇政府（奉化）",
      lat: "29.69543800"
    },
    {
      lng: "121.26432700",
      aqi: "120",
      time: "2020-03-19 08",
      stationname: "实验小学（慈溪）",
      lat: "30.18224100"
    }
  ];
  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var latLng = [];
      latLng.push(data[i].lng);
      latLng.push(data[i].lat);
      latLng.push(data[i].aqi);
      res.push({
        name: data[i].stationname,
        value: latLng

      });
    }
    return res;
  };

  // import '../../node_modules/echarts/map/js/china.js' // 引入中国地图数据

  import '../../node_modules/echarts/map/js/province/anhui.js' // 安徽
  import '../../node_modules/echarts/map/js/province/aomen.js' // 澳门
  import '../../node_modules/echarts/map/js/province/beijing.js' // 北京
  import '../../node_modules/echarts/map/js/province/fujian.js' // 福建
  import '../../node_modules/echarts/map/js/province/chongqing.js'//重庆
  import '../../node_modules/echarts/map/js/province/gansu.js'//甘肃
  import '../../node_modules/echarts/map/js/province/guangdong.js'//广东
  import '../../node_modules/echarts/map/js/province/guangxi.js'//广西
  import '../../node_modules/echarts/map/js/province/guizhou.js'//贵州
  import '../../node_modules/echarts/map/js/province/hainan.js'//海南
  import '../../node_modules/echarts/map/js/province/hebei.js'//河北
  import '../../node_modules/echarts/map/js/province/heilongjiang.js'//黑龙江
  import '../../node_modules/echarts/map/js/province/henan.js'//河南
  import '../../node_modules/echarts/map/js/province/hunan.js'//湖南
  import '../../node_modules/echarts/map/js/province/hubei.js'//湖北
  import '../../node_modules/echarts/map/js/province/jiangsu.js'//江苏
  import '../../node_modules/echarts/map/js/province/jiangxi.js'//江西
  import '../../node_modules/echarts/map/js/province/jilin.js'//吉林
  import '../../node_modules/echarts/map/js/province/liaoning.js'//辽宁
  import '../../node_modules/echarts/map/js/province/neimenggu.js'//内蒙古
  import '../../node_modules/echarts/map/js/province/ningxia.js'//宁夏
  import '../../node_modules/echarts/map/js/province/qinghai.js'//青海
  import '../../node_modules/echarts/map/js/province/shandong.js'//山东
  import '../../node_modules/echarts/map/js/province/shanghai.js'//上海
  import '../../node_modules/echarts/map/js/province/shanxi.js'//陕西
  import '../../node_modules/echarts/map/js/province/sichuan.js'//四川
  import '../../node_modules/echarts/map/js/province/taiwan.js'//台湾
  import '../../node_modules/echarts/map/js/province/tianjin.js'//天津
  import '../../node_modules/echarts/map/js/province/xianggang.js'//香港
  import '../../node_modules/echarts/map/js/province/xizang.js'//西藏
  import '../../node_modules/echarts/map/js/province/xinjiang.js'//西藏
  import '../../node_modules/echarts/map/js/province/yunnan.js' //云南
  import '../../node_modules/echarts/map/js/province/zhejiang.js' //浙江
  export default {
    name: "map1",
    data() {
      return {}
    },
    created() {
    },
    mounted() {
      let that = this;
      that.chinaConfigure(name);
    },
    methods: {
      chinaConfigure(name) {
        let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
        window.onresize = myChart.resize;
        myChart.setOption({ // 进行相关配置
          tooltip: {
            formatter: function (params, ticket, callback) {
              return params.seriesName + '<br />' + params.name + '：' + params.value[2]
            }//数据格式化
          },
          visualMap: {
            type: 'continuous',
            min: 0,
            max: 200,
            calculable: true,
            inRange: {

            },
          },
          dataRange: {
            show: false,
            min: 0,
            max: 1000,
            realtime: false,
            calculable: false,
          },

          geo: { // 这个是重点配置区
            map: [], // 表示中国地图
            roam: true,
            hoverAnimation: true, //鼠标悬浮是否有区域弹出动画，false:无  true:有
            label: {
              normal: {
                show: true, // 是否显示对应地名
                textStyle: {
                  color: 'rgba(0,0,0,0.4)'
                }
              }
            },

            itemStyle: {
              normal: {
                color: '#FFF6F6',
                borderColor: '#E4434A',
              },
              emphasis: {
                areaColor: '',
                color: ''
              }
            }
          },
          // series,
          series: [{
            name: '启动次数', // 浮动框的标题
            type: 'scatter',
            geoIndex: 0,
            coordinateSystem: 'geo', // 对应上方配置
            data: convertData(data),
            symbolSize: 35,
            symbol: function (data, params) {
              if (params.value[2] >= 0 && params.value[2] < 50) {
                return 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAA0CAYAAAGLGJomAAABYWlDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokWNgYFJJLCjIYWFgYMjNKykKcndSiIiMUmB/yMAOhLwMYgwKicnFBY4BAT5AJQwwGhV8u8bACKIv64LMOiU1tUm1XsDXYqbw1YuvRJsw1aMArpTU4mQg/QeIU5MLikoYGBhTgGzl8pICELsDyBYpAjoKyJ4DYqdD2BtA7CQI+whYTUiQM5B9A8hWSM5IBJrB+API1klCEk9HYkPtBQFul8zigpzESoUAYwKuJQOUpFaUgGjn/ILKosz0jBIFR2AopSp45iXr6SgYGRiaMzCAwhyi+nMgOCwZxc4gxJrvMzDY7v////9uhJjXfgaGjUCdXDsRYhoWDAyC3AwMJ3YWJBYlgoWYgZgpLY2B4dNyBgbeSAYG4QtAPdHFacZGYHlGHicGBtZ7//9/VmNgYJ/MwPB3wv//vxf9//93MVDzHQaGA3kAFSFl7jXH0fsAAAA4ZVhJZk1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAKgAgAEAAAAAQAAACqgAwAEAAAAAQAAADQAAAAAKAKu0gAADN9JREFUaAW9WcuPHEcZr0c/puex6409BJN1ZBsTobWIiGw4wMGbQ5BAREIoGwkpAgsOoMBfgITWK7jkyAUR4MAhAuRFIsIoEuLg9QFFUeIgkOMIBRaUbHDI2NnXzPR0dz34fjVbvT3jWe86TqjVTtfjq9/3VdX36mrOqFhr+dLSEkd9cXHRcs6ta/zu08cP8a30mCKCuhQ3vvSPdzoBqEQa65z1/8aIbEOItusDDAvzOhooLcXq6OP4+e3H7zfD7uHva19/WpZt8Hnh1EcdDDqFHyk+8ZntZPaT677tpjhMzsX8/Dy/fPky4xcXFiR79cUTImD1kJnsgebR1duY2jPnAv7KmTPhv9bfyj3eEVNPxGr0X7co38kajWHbXrgglk9+xF6en98lAHd04okZ7ucCUX72uefCQsrIJFm5srgbmGRW5fPz53N+4YJxMIs0azkeNHia32JFyZUpqnbf5JdWVla+SlUz3AU6j2ZWw9htJQnkNzvttsVAAHn+cPaBJBf6CBvZ6uG8jLEj7OrVgha17ZDTk5/PjLL/vA2WOqxSr7cffLBH6jBcpSfyXAbrqheFM1PZww/3n1xe1n7c7YbfGq9TfhC6hbrTLxAtP/mkSFb/HKfrtTCcMm4yCIqioU7WatmZV15R7iBXTpyIt2J9X6aLQ0IGbhuFKoyNxLYW6tb1he/2S8Kbop8CZbzYpN1auHatJ8C/dfiwtkE0O07Ehfgem9p0C3LbtDoY8GScCm07PHpUBc6fnlFGKo+OkcJNVO+KGhYrzq2sCJbdShhXnxshooY1/Ec2M3V2/boUONd6EpHlmV+OExJpMlD5NfS7VV89ezaoqvX4hCfI2MrNxeALp07Fqe19w1j97FSTN7/w13f62BWMDdUONSrJ7Ky20pLyMKb7ZNGVMkJ4ZX7ecG0HGP/iU08VHg3tkjXOHEox99prvN3p8Nb2Nsf+gmivsl6r2ZmTJ83C6dMW6gg6p0CoOE0jwOXlZdKJd6NAR3Esw3CQFUFk7IiEoNec2VwKE+iiULaRsfvzvB2fKuYvX9YALc18mSQkNZBTW3HU47qZZoMmMzwphA5JbzghO6nJ0CwXWtNvZmzYayRmW73XMK3mttpR/6EBlUsnSWfSNNlg3Q1IdKDC2e9rh4KvwWIXLl40paSoUGE/u3TJxkqZiMUP5EX29n6gUHIRyN80W6H5Mu0rcDDH7Rckha4+dOuWzIJeqIQK9wPEuKHtU7T3nU4jIIEkbAJYzjMBsP3yy2GvZRLWM81QkFc7ACo3POapaoX1vp2Bcl26lC3ROTpJoUJvTaWyn+ZBIPQjmTHOJvbFteYZy/NXs7wIWJrKY5ubYpEmOVCKKqamjxSDuu1rY5/fF6xKYFmTq3ytbUwGyyFJh2qCfQCdV37UT66uiuvFWhQMZBIos8CZ+Qn6RZx8TGey3xRiABB4Aig/wEoPCsJJBZs+RyqWZ1ktYdsLxthfgM4m0eGkZgbN1kO5V/bx+W75451oO65zc7CtgWFDG0d/uxf0Aehsf0eF0F8tbtnVjmq9ui04ACwRpVzmfqAeYDhtuL++Punpgf2YV3y0ne2XgHAq5APW6ZDm9vFQV8n6tlsti4O6TgdFxXmoEtRxI0AilO3WLckGjaCZZSJrqol7XmwJ+zaZs2A3dHNtTc8xBmcCb+eASy9FmYLoIHt5M4oCfjPukvlF20bISmxyzOnHCG6CwKisx4s03swoytjF06dLj+4kgX7CKbOtTDZFP6L4msTcNA3T05lVh7JQlP+a+uh/qjdQTWlFHIaNoN3rCec6d7iWkqIdq/u4jTNpUxXRbyIEiy0LpFDDyA9fashlCCMKJhRXgheNworO0d0IAhynUjiolUcflZ1Op8bSm78ix/44Bg9SYAzQ3fnz53OEFGhBeRA4xaS2Tk6Wdvsuykwa6U6jYbwOY2oJikYaCVvI4Fsuw0DHPgXZST8MDSVCFnrrddWBogGn0I4DWxND770PnhuOdyzq6hixA8We4vQ6meKhIY81QY3G5rkmnRkPteYzY4bi3D9UClbEtqZlGkYBnXCZHk8C83251EE3HgxViqIHhMOYUymXQFB8onAS2h6pE4Ee5LRsJqO4TjGqUQ/I/2oSjnAtk7SfInjpJWmEiATTSV7YhmX2NKnkY16ivZ6xsM9mudF1CsF2Y6AbdGinFxasiyluTyjGCMSawEgy4gt7AVX7c8vOykAHiG3dw7lArMO4OyhyHq6BNNdq9TL8e3XyXnUkk9ywT2F8vaBkaKeIJap049i2k0RTALtGJ9/0gwd5IlAiW601QgMDwhwnabvdNqzXg5c5dBCgcZr3eJaT5miX/dGgS3cpjHK4vptvXq+8Po1P3bt9YuZYtIqUknIpUA1BqQJdRRyCEWDD07U12TWmJmNdN1n6HxBbJp5WgVhWNZ3OhbM5gNAPz+/DC6yz3FwM+gIlhtfK33s91n1e7xnzLsYEl98WrfgivS+mLnumd0U/p/p0e1rtqNbzUNpuHJTvYowb3aMXUBwsDnivsicoTlJu1nWsGuU+W8HV9HRf4WD9cicBTwTFvmCfkNZMZdkuqDEqHcworzqTANE3ERQDkASJGzt+fDegWa4YZS1gCJq9ysSDArH3ONAKtKEZ2Ee/bKwG/ZPKbaAezBN7VUO7GjH9+L08vbFUhfV440KPCOqF9MJ5O6AgK+BzEqV456hyc5J8933dgx/kiTAIuvaNwKZBQBpLboeUCWd/W5pb2eFSUC8kvAAERHBBBt9tDyjIUN6STbvMyg4KiSgmjeEDsrsBIhqVBn4mlN5OH8JpjRhrQfGa6rwWatzjdONNw6Zi3ezUzFvT02bSSykgRgTFTvq3XXgTPd2XZFKBoMiW9fMwo4iYKCNtqKXWkSBHSmkRCRpNkLDaRVdYhhyXpKxOSjqKQuqU3oHiIldxPSoMXRkRLwXz9S8R3kN5FRhJzjy2y/5mFd+60ZJp3AtiEtKKIAoNj7KAhUJRBJaGrhMsbSylTSQI1ctFexw8KX1wR81JSPIbWimm6QpMERaldfSO0s9ZRvclcbdlm7OZAe9JLmCioFVGqGec/5xb9TjdXWFrmHODqnQxjnxPc90Bs3C63vGStPhDodzrEj3Oo36nMuKf4Cag0Hg1SNcoTYs3TBgGd51Y3onh+BiprQUP8AJP8IYM3mV5+lJQrwtIg7H1sMZNCuJQeNqtv9MZvkiT3vATP4DnG8AENniAF3i6YycZgF/KRPVS0OoAVoRrISS/dONqgzB8JoriJyiz/jHoPogCLGACGzzACzzBG/hVIdEeERQdvpzxlf/j8048S2PyfhQuCteSKflQzXJRL4TY5oryaVo2230xulf5iZ+wSlPyr2WdPGt3OwdPS5mcvUJmR+OOhd9ZJ6gXEs4eQiISJeRDcWPMgkGoWBhKVtCtP6PU+l5F3JnPmdS452OhGbCBIV4smekz4m1JBhAZ2Atkg7Dlq4nPS52QtfUAQiYkZEp3OiRkTKQx+ZLyBHbYvf8HYQET2ODheIEneFOwQY4MmcAAwjodxXEjbEJI3HAiGgXk2rtcRuTdw4BT1FQ6pLegmfcv2ehMYAET2OABXuAJ3gjbkAUyQTbMdIIuUgVJOBKPQa8QIcVxCmqiSStB5MmVfoTizosU1r8/yu79t4AFTGCDB3iBJ3hDBsgCmSAbyojVw4/NUA5O9mMHgTTKmNNW2Vdp739NtLd/GHAQ9/RTBzZ4gBd4gjdkgCxV5OHRUw8cLfwYEgMkCDWVFMqoPxL1dHXCh1EHD/ACT5+cQBbItLTDcORdzGdO0I8eXS3RldTELzsfhrDA7NLnwQbd6fj81GdQGCutCg0UKC8ERj38y5XjBelOTPWC0iCkdKibwIrMhFLQJwhOuRCnj1nasMfI+f0Q83yhT1Q/kIL9yRqtKMej0xUqFgV96uIG1+ZI/UJKu1APyQUVj5z7N+ZWBUQb7skJhAYK3MCwNvrrLQ+9bhH0Dard7omtG3GIjwBIA3Mhv0LXDT8dmcnldyKjn88o58Rr4tTRrKAPAGb8xWs8AfEY3tmjPeIXqwOeeOfpFBsLIaHZuU6HMp2Mb9Y3TK3bgKlSpmmRvIwUWrURIb0c0zXdZpMysbWWbc+2zZWd7Mjzowv0kXmTGiOCTiKY1AclP7m9bZKW0h2dcGTBlu5Oh4nq7gwESUVXSaxI9LH7jG6F02aV5u5SHLx2V4JiB6hAkdkKhbpOZ2DoPlfR7RO5Qq58XuzZC+oLZJ4f2mCmw+jI28NcE6HR76an3e95V4KWYMRono6VIoel4GxS8hLC3CwvADyddbcLR1TzON1F0U7OI4WjuX78bp4TjedOAFWD80a2SBMQ7ibNQ365tDNQNZq73dGJ4JMYTuqrCj1pfLzvboWrzv8fPKhQWhiGLM8AAAAASUVORK5CYII=';
              } else if (params.value[2] >= 50 && params.value[2] < 100) {
                return 'image://data:image/png;base64,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';
              } else if (params.value[2] >= 100 && params.value[2] < 150) {
                return 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAwCAYAAAEKtTi+AAABYWlDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokWNgYFJJLCjIYWFgYMjNKykKcndSiIiMUmB/yMAOhLwMYgwKicnFBY4BAT5AJQwwGhV8u8bACKIv64LMOiU1tUm1XsDXYqbw1YuvRJsw1aMArpTU4mQg/QeIU5MLikoYGBhTgGzl8pICELsDyBYpAjoKyJ4DYqdD2BtA7CQI+whYTUiQM5B9A8hWSM5IBJrB+API1klCEk9HYkPtBQFul8zigpzESoUAYwKuJQOUpFaUgGjn/ILKosz0jBIFR2AopSp45iXr6SgYGRiaMzCAwhyi+nMgOCwZxc4gxJrvMzDY7v////9uhJjXfgaGjUCdXDsRYhoWDAyC3AwMJ3YWJBYlgoWYgZgpLY2B4dNyBgbeSAYG4QtAPdHFacZGYHlGHicGBtZ7//9/VmNgYJ/MwPB3wv//vxf9//93MVDzHQaGA3kAFSFl7jXH0fsAAAA4ZVhJZk1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAKgAgAEAAAAAQAAACagAwAEAAAAAQAAADAAAAAASJpgQwAACk9JREFUWAm9WUtsXFcZ/s65985ce2Y8cWLLTXGaJqRpcRtVCJQFYpEuKxEJCZJKEFURQkFGINQuWLAgDjtAIkhVUhK1G9QNdVukBnVDpSQLKBREkSAupGkUEkMeQx6OPfbMfR2+/9y5dx5+B8ORPPc8//Of//mdYwUWMzGhMXZBSR0HXk9sxfxsx9OI48cAlSD23nXtaKzvAOGkre/Z4WljjIIT7LAd8nNp+iFtG7E5n3cGjWt53bw8+i3zzq6idCi7fPJguuLAk0apiUTZ0SvNZ2GUC43ravzqbzSe/SiAMb8EkkkkZq8s13h126BUbFEYMq8fcDQKm5tZH1d8D6Rr22Zin2tOjKYN9qTHPPUZD8GtYXheCVHaBxcGkQkQhLfUi9ML6dEHdyao3fwn4qC1lCTiFpnRKs8zTYay4qpdWTX/Kue7uNG0uyor8q0/H0UY/I2b9uWTsoqjn4Qa/sjOlj7z8qOPQscOYvM8ufs+/OQJBAV7UjV+5Uq2zn6Fujn5yCE5rcikczA9tagNxxQmW1qXGSKnYzzbhOhAJrz0WAVuMITETSUgk1SQwO2/hyNfueNMKKVR/tMm6vFxaPMIdfMQrWUESlehwzlcLs6klE4+VQJmZoVAV1HqbYxf/aJWShk0Z0ScSxR1WMZTW6uW2rx0TvWcgpxaY/IpD83g4c6xvB7Goyi91afxD8dDFFbzgc6K0nvRF/jKnN3nYupS2DnWVY99PxWmqEZKSIqO+jOM8zmq6AZcZUQ1dpKdwB9zamcVUXAPrvMwjly5YU/O/rbp2JmD8/ZTUHftt/WTbpfp7vQZUSwP0tDwI4V63LVTvrDkGHjFBEPzEd4fjXH0bCy7pnI8RiPY+5pHl6pChUPkv4pAFeGZHo5ILuGpFpoxmgt11PVtbJ6+g8mDdY6kO1ujOf1ZF87NCpq4nXOwWkXhV3BGnsOR/Q2JAHZnK5gjf4wwgAV6yO9Wo2HHFT4mlxewuxIIIelrH0OOeneE4arw3NqIqRPw8aPOuZaYMRMaA68UEd0eYIBpR6DOmb11gxLm1SAuXi0ZhhwRlWODQI2E5v0t9JdPcM0ILeSrvWsXtbX6Oxxnmn6nENdD1N8O02PWXaqagQt4FyZ+Z9HCpToSM44kOsvA8kkMFKwLpnZGd7JZofZetNS6Vfu++XXa51EJNEsX62AfXq5QRc8jTn5qZxX8bZht3MYL12gKDAo9pa3NngHUhg2c4SZDcuo6Mh4GdZRGluV+eWJMgri+v0Fl3M/3Gf/aDGiPS3Elc/JjWi8QWzvaWtoZY3NqrUor5uLoUXvUjHiqAHH0Y8842Dvt4N/9LsKmXtHJG9S+64vVh3QlapLCpwxbxKjN47S1Un+JgapEZ/foCSrPeZ2cSf5Lopgm0YApzqFYXciOnkYNOZLrM2oEZehkCxJVIlZw4LTFkNMzxA9aNanlGXpLhG0zTYh4KNzuUC7ZLVE+tK5w/yJDUreCNM3BxDFhwRy0M48k5nibRPuYp8/4iG/+gkS+kHOxWqWILYhHZrNjtnamVgYbtB8eYT2lWQ0gcKFVLDGr2uHhhMf6kFL6OBtc8Stxb5hpUUBZyxt6ZKJ/SHmcWJFINmiKB4lRuko3sQKRX3dP1+SuhkuzKjGYppq0Q3apjWl/ocEaz4PRbfV0re5t0BabM65EG+s9HE6z/VamuGLiYyEqM/1YzNi7dFHbuGU4UT+m3ytYiCPEmKY07ocFa1uu2sS+xZBrESXpiKpMKJuYhPowOekKdxrDNZ79XoEuUibUqVCba8sBiS4RwlUY7vuJhhyRncbFWYWkX8PYtPcpmsf4koz0dibxm/RPRfEQzmy2stfMewabopButIPcnexds2xbEKijfs11DQzdT3OATXMvERo4DQbCByiVzWVsIxbfd1Ycla707UPLg6nV6PuPN3B+n/UC6+gy32LibGFEWfRTwwveZqj4t7Zb4QfE8W+hqOeQOPZY0t+Jl3MD7ey0Rnh8m4+KV0fQWqd59XFxFbt3zqpnzi2ZVJZ3nicYlpMw54DajuG4Cc5n7C/+Lk/sWpU3MobmrCSa14DBEGNMgcuU5YlJnOrTC/k6RbglCWSqdWvKB9qVJYnZ+CR58/BhwR9pMSZkHiXkTNNb1t35zbUpnZn327AiN9IputpWeoiUwUbXXNv3ID93/VRM1+ksIjI5aU/+FbL5ZpYpiXP2ijxFUEPfneU9pMmboeMzadG+XcbOIE216+apwMQWacOkRr02YhT7IlTqtLAqDWYszhjMMkBusnajjKkaCjDlIpw5H5Fk0UYRIa85ceIwmDKwr5M53gHR5B9ZQiEM6UdNqHoDt8oNiqaJ4akAY/YCnBtdmzGbFai67XVKRjuIEo8YwGe6LrPeD4cxHexLmCCIDogb1lasAzEZqyTiGjLFeAVCAU1hJZScy0pdAmItyTCGEO5WpX1voBpnoyIjhY96yOQSl+E5ZUZfIiOi/kQViK6ZxXowyHJsKjJlVEwp85UCDR62jjCeI3NzKHlzvBI2UHHpplRnRzJvS0wIW5cj59uvhPBcOmLyKnv3E1ml22aCzr5p78q/pjU5AyNCyvpvcoYGc4iYkq6+laPd7p4zJkbHwkxKRQVnYgREjLiVkVt58wcbTVCvSnglq/sS8czM8IVcrsqMtvXOc0TJH1zy4GufwIPqDL7MYPKTbM5/91UvAoU3CJjn0Ega+PSuUFJaJ1NCf8mgmG/cSB/V8vZGVlahnatS9sxjmQTVIcKGBT4eJAH9j08nzEkbUjRpgWC+RFjT56cQ5/wxsSN0Ss1KTBiymFG8UuCeoLTgTpHXCsYw8UTjbQhTQkRoCU2hLXvIXrIn9xYerHA4zcK8NH6c4wMXweysU8AWhop5j8iNdx5oIj8S2rjiM5rxPUo04TnYMs/Qw6fM8gfMpbVYnE+kl764ScTfcdHFJbkj8SaHkFdoPcB4NQDHkDnspqI/vyG8KfV70vwXD8vLnZhIyDRH57/NdLXnfoIq35bemGoZ/93LGteqTDeux0hcQMiIrwylxPek2DxN0POdDWFKiAgtoSm0ZQ/ZS/aUvYUH4YWly/gRzFGG/WLlhMjBLkaYUzwZJbihhQc2P2bQloexbzB0/IEPqIyb3JtPzFlJGbOXxKkIfYTJc/foHuavDLN8UM2m/Q++cuAErzGe3YOJdjIKBPDlkjvGNw/K03pBBnfkqlOradR4af9/lmE+qMtlWV51Wvgsl0nmptZDh1/ZoKC1xtPV+KjVAxZzxtZCwjLfm65U+CUa9PGu9Uq/wFT25mppp2tNT2PllNQz2TbP83eQr0h9gkab8t67GGtIn4zJHJkra9ZZ1s+Y4PRZbpYUCY/9wOKs3k0Fe8mYzJG5K1yHepdm7fUzJsa5h4/qW/lvoYXiAsFR+16WUZU+GZM5MtfivGxwbd/uOLbKGkmyLClmG7vAR8HLCaL7ixnTZMz1GXro+u+nt6DOBL3KNnZ4XYzJipw5Rkk2E5zYHjPoWGL5j0BpeftvlfUyJcv+AzgTcrSGYDmWAAAAAElFTkSuQmCC';
              }
            },
            label: {
              normal: {
                show: false,
              },
            },
            itemStyle: {
              normal: {},
              emphasis: {
                areaColor: '',//设置为空字符串可使颜色不变
                color: ''
              }

            }
          },
          ]
        })

        // 设置鼠标移入指定省份颜色不变的效果
        myChart.on("mouseover", function (params) {
          myChart.dispatchAction({
            type: 'downplay'
          });
        });
        //点击事件,根据点击某个省份计算出这个省份的数据
        myChart.on('click', function (params) {
          console.log(params.name);
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    width: 1920px;
    height: 1080px;
  }
</style>
