(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["room"],{"537e":function(t,s,e){"use strict";e.r(s);e("34a3"),e("f763"),e("608b"),e("d4d5");var a={clone:function(t){return JSON.parse(JSON.stringify(t))},formatTime:function(t,s){var e=s||"YYYY-MM-DD HH:mm:ss";return Moment(1e3*t).format(e)},formatMoney:function(t){return Number(t).toFixed(2)},formatNumber:function(t){if(0==t||t)return parseFloat(Number(t).toFixed(2))},formatPercent:function(t){return t?parseFloat((100*Number(t)).toFixed(2)):0}},i=e("f45b"),n={props:["currentData"],data:function(){return{comUtil:a,selectArray:[{value:"0",label:"全部"},{value:"1",label:"浴足房间"},{value:"2",label:"棋牌房间"}],selectArray2:[{value:"0",label:"全部"},{value:"1",label:"停用"},{value:"2",label:"空闲中"},{value:"5",label:"使用中"},{value:"8",label:"已买单未离开"},{value:"9",label:"需要打扫"},{value:"10",label:"已预约"},{value:"11",label:"房间暂停"}],select1:"0",select2:"0",listData:[],miniRefresh:null}},computed:{selectValue1:function(){return this.selectArray[Number(this.select1)].label},selectValue2:function(){var t=this.select2,s=_.find(this.selectArray2,function(s){return s.value==t});return s.label}},watch:{currentData:function(t,s){1==t&&(this.select1="0",this.select2="0",this.getRoomList())}},created:function(){var t=localStorage.getItem("currentInfo");this.currentInfo=JSON.parse(t),this.getRoomList()},mounted:function(){},methods:{changeSelect:function(){var t=Number(this.select1),s=Number(this.select2);this.listData=t&&!s?_.filter(this.allData,{roomType:this.select1}):t&&s?_.filter(this.allData,{roomType:this.select1,roomStatus:this.select2}):!t&&s?_.filter(this.allData,{roomStatus:this.select2}):a.clone(this.allData)},selectClick1:function(){var t=this;weui.picker(this.selectArray,{className:"custom-classname",container:"body",onConfirm:function(s){t.select1=s[0].value,t.changeSelect()},id:"singleLinePicker"})},selectClick2:function(){var t=this;weui.picker(this.selectArray2,{className:"custom-classname",container:"body",onConfirm:function(s){t.select2=s[0].value,t.changeSelect()},id:"singleLinePicker2"})},getRoomList:function(){var t=this,s={holderId:this.currentInfo.holderId,holderType:this.currentInfo.holderType,holderGroup:this.currentInfo.holdGroup};this.$ajaxPost(i["a"].GETROOMINFO,s).then(function(s){s&&(t.allData=t.dealData(s.data),t.listData=a.clone(t.allData)),t.miniRefresh.endDownLoading(),t.select1="0",t.select2="0"})},dealData:function(t){var s=this;if(t&&t.length)return t.forEach(function(t,e){t.restDay=s.transformTime(t.restMinute)}),t},transformTime:function(t){var s=null;return s=t>1440?Math.floor(t/1440):null,s},dealClass:function(t,s){var e=!1;return e=!(3!=t&&5!=t&&11!=t&&12!=t||!s.roomOrder||!s.roomOrder.billBatch),e},getRoomBodyBackground:function(t){return"10"==t?"#cbffc8":"2"==t||"9"==t?"#BEDCF7":"#fff"},statusColor:function(t,s){var e="";return e=1==t||2==t?1==s?"color-error":"color-success":3==t?"color-success":"color-warning",e},formatDate:function(t){return t?a.formatTime(new Date(t.replace(/-/g,"/"))/1e3,"YY/MM/DD HH:mm"):""}},components:{}},o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"room-container"},[e("div",{staticClass:"clearfix select-main"},[e("div",{staticClass:"custom_input"},[e("div",{staticClass:"simulate_input",attrs:{id:"singleLinePicker"},on:{click:t.selectClick1}},[t._v("\n        "+t._s(t.selectValue1)+"\n        "),e("span",{staticClass:"iconfont icon-xiala"})]),t._v(" "),e("div",{staticClass:"simulate_input",attrs:{id:"singleLinePicker2"},on:{click:t.selectClick2}},[t._v("\n        "+t._s(t.selectValue2)+"\n        "),e("span",{staticClass:"iconfont icon-xiala"})])])]),t._v(" "),e("div",{staticClass:"room-container_main"},[t.listData&&t.listData.length?e("div",{staticClass:"clearfix list-main"},t._l(t.listData,function(s,a){return e("div",{key:a,staticClass:"list-item"},[t.dealClass(s.roomStatus,s)?e("div",{staticClass:"list-item-top",class:t.dealClass(s.roomStatus,s)?"active"+s.roomOrder.billBatch%10:""},[t._v("\n          "+t._s(s.roomOrder.billBatch||"")+" "+t._s(s.roomName)+"\n          "),t._v(" "),s.roomOrder?e("span",{staticClass:"item-top-right"},[t._v("￥"+t._s(s.roomOrder.totalGoodsAmount||0)+t._s(2==s.roomType?"+":""))]):t._e()]):e("div",{staticClass:"list-item-top"},[t._v("\n          "+t._s(s.roomName)+"\n        ")]),t._v(" "),5==s.roomStatus||11==s.roomStatus?e("div",{staticClass:"list-item-content clearfix",style:{"background-color":t.getRoomBodyBackground(s.roomStatus)}},[e("div",{staticClass:"content-first"},[t._v("使用中")]),t._v(" "),t._l(s.cashierShowTechnicianInfoList,function(s,a){return e("div",{key:a,staticClass:"content-second ",class:t.statusColor(s.status,s.isTimeout)},[[e("div",{staticClass:"second-left"},[3!=s.sex?e("span",{staticClass:"fa",class:1==s.sex?"fa-female":"fa-male"}):e("span",{staticClass:"fa"}),t._v("\n                "+t._s(s.number)+"\n              ")]),t._v(" "),e("div",{staticClass:"second-center"},[t._v(t._s(s.statusName))]),t._v(" "),e("div",{staticClass:"second-right"},[t._v(t._s(s.timing))])]],2)}),t._v(" "),5==s.roomStatus||11==s.roomStatus?e("div",{staticClass:"content-bottom"},[s.remark?e("span",[t._v("备注:"+t._s(s.remark))]):t._e()]):t._e(),t._v(" "),s.restMinute&&11!=s.roomStatus?e("div",{staticClass:"mask"},[e("div",{staticClass:"mask-opacity"}),t._v(" "),s.restDay?e("span",{staticClass:"mask-text mask-text-text"},[t._v(t._s(s.restDay)),e("span",{staticClass:"unit"},[t._v("天")])]):e("span",{staticClass:"mask-text mask-text-text"},[t._v(t._s(s.restMinute)),e("span",{staticClass:"unit"},[t._v("分钟")])])]):t._e(),t._v(" "),"11"==s.roomStatus?e("div",{staticClass:"mask"},[e("div",{staticClass:"mask-opacity"}),t._v(" "),t._m(0,!0)]):t._e()],2):10==s.roomStatus?e("div",{staticClass:"list-item-content clearfix",style:{"background-color":t.getRoomBodyBackground(s.roomStatus)}},[e("div",{staticClass:"content-first"},[t._v("已预约")]),t._v(" "),s.roomAppointment?e("ul",{staticClass:"content-appointment"},[e("li",{staticClass:"appointmentName"},[t._v(t._s(s.roomAppointment.customerName))]),t._v(" "),e("li",{staticClass:"appointmentTel"},[t._v(t._s(s.roomAppointment.customerPhone))]),t._v(" "),e("li",{staticClass:"appointmentNumber"},[t._v(t._s(s.roomAppointment.customerNumber?s.roomAppointment.customerNumber+"位":""))]),t._v(" "),e("li",{staticClass:"appointmentTime",domProps:{innerHTML:t._s(t.formatDate(s.roomAppointment.appointmentDate))}})]):t._e()]):e("div",{staticClass:"list-item-content clearfix",class:{available:"2"==s.roomStatus||"9"==s.roomStatus},style:{"background-color":t.getRoomBodyBackground(s.roomStatus)}},[e("div",{staticClass:"kong-content clearfix"},[e("div",{staticClass:"icon-box"},[e("img",{attrs:{src:"2"==s.roomStatus||"9"==s.roomStatus?"agentStatic/img/icon-free-available.png":"agentStatic/img/icon-free.png",alt:""}})]),t._v(" "),2==s.roomStatus?e("div",{staticClass:"kong-text"},[t._v("\n              空闲中("+t._s(s.seatNum)+"座)\n            ")]):t._e(),t._v(" "),8==s.roomStatus?e("div",{staticClass:"kong-text"},[t._v("\n              客人未离开("+t._s(s.seatNum)+"座)\n              "),s.remark?e("div",{staticClass:"remark text-ellipsis2"},[t._v("\n                备注:"+t._s(s.remark)+"\n              ")]):t._e()]):t._e(),t._v(" "),9==s.roomStatus?e("div",{staticClass:"kong-text"},[t._v("\n              需要打扫("+t._s(s.seatNum)+"座)\n              "),s.remark?e("div",{staticClass:"remark text-ellipsis2"},[t._v("\n                备注："+t._s(s.remark)+"\n              ")]):t._e()]):t._e(),t._v(" "),1==s.roomStatus?e("div",{staticClass:"kong-text"},[t._v("\n              房间停用\n            ")]):t._e()]),t._v(" "),"11"==s.roomStatus?e("div",{staticClass:"mask"},[e("div",{staticClass:"mask-opacity"}),t._v(" "),t._m(1,!0)]):t._e()])])}),0):e("div",{staticClass:"clearfix list-main"},[e("img",{staticClass:"noDate_img",attrs:{src:"agentStatic/img/wushuju.png",alt:""}})])])])},l=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mask-text"},[e("div",{staticClass:"img-box"},[e("img",{attrs:{src:"agentStatic/img/pauseBtn.png",alt:""}})]),t._v(" "),e("div",{staticClass:"texts"},[t._v("暂停使用")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"mask-text"},[e("div",{staticClass:"img-box"},[e("img",{attrs:{src:"agentStatic/img/pauseBtn.png",alt:""}})]),t._v(" "),e("div",{staticClass:"texts"},[t._v("暂停使用")])])}],r=e("d082"),c=!1,m=null,u=null,v=null,d=Object(r["a"])(n,o,l,c,m,u,v);s["default"]=d.exports},f45b:function(t,s,e){"use strict";e.d(s,"a",function(){return i});var a="https://szy.kiloxy.com";a="https://szy.kiloxy.com";var i={BASE_URL:a,in_theaters:"movie/in_theaters",LOGIN:"user-api/mlogin",GETBUSINESSDATEINFO:a+"/wechatMini/getBusinessDateInfo",GETBUSINESSBASEINFO:a+"/wechatMini/getBusinessBaseInfo",GETBILLINFOWITHOUTFREE:a+"/wechatMini/getBillInfoWithoutFree",GETBILLINFOWITHFREE:a+"/wechatMini/getBillInfoWithFree",GETRECHARGESUMINFO:a+"/wechatMini/getRechargeSumInfo",GETCASHFLOWSUMINFO:a+"/wechatMini/getCashFlowSumInfo",GETROOMSTATUSINFO:a+"/wechatMini/getRoomStatusInfo",GETROOMINFO:a+"/wechatMini/getRoomInfo",GETTECHNICIANQUEUE:a+"/wechatMini/getTechnicianQueue"}}}]);
//# sourceMappingURL=room.31e7d844.js.map