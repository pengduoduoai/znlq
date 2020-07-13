import http from './http'

export const api = {

  getorgmsglq: function () {
    return http.get('/apiwages/cyrcpd/getorgmsglq')
  },
  getcplq: function () {
    return http.get('/apiwages/cyrcpd/getcplq')
  },
  // // http://test.ninewe.com/apiwages/cyrcpd/getxmdetailaz?xm=兴化市中医院南亭分院一期PPP项目(安装)
  // // https://test.ninewe.com/apiwages/cyrcpd/getqymsgtm?type=A
  getqymsglq: function (type) {
    return http.get('/apiwages/cyrcpd/getqymsglq', {type})
  },
  // getxmmsgaz: function (qy) {
  //   return http.get('/apiwages/cyrcpd/getxmmsgaz', {qy})
  // },
  getxmdetaillq: function (xm) {
    return http.get('/apiwages/cyrcpd/getxmdetaillq', {xm})
  },
  // getusermsgaz: function (username) {
  //   return http.get('/apiwages/cyrcpd/getusermsgaz', {username})
  // },
  //
  getcpofjz: function (name) {
    return http.get('/apiwages/cyrcpd/getcpofjz',{name})
  },
  // getorgmsg: function (name) {
  //   return http.get('/apiwages/cyrcpd/getorgmsg', {name})
  // },
  getusermsglq: function (username) {
    return http.get('apiwages/cyrcpd/getusermsglq', {username})
  },
}
