webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),a=n("Au9i"),l=n.n(a),s=(n("d8/S"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]});var i=n("VU/8")({name:"App"},s,!1,function(t){n("TOCP")},null,null).exports,r=n("/ocq"),c={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App. Hello TianYe."+(new Date).toLocaleString(),msg_test_html:"<h2>Momo is the best beautiful girl.</h2>",sites:[{name:"A1"},{name:"A2"}]}},methods:{say:function(t){alert(t)},submit:function(){alert("submit test.")}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("mt-header",{attrs:{fixed:"",title:"设备管理"}},[n("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[n("mt-button",{on:{click:t.handleClose}},[t._v("关闭")])],1),t._v(" "),n("mt-button",{attrs:{slot:"right",icon:"more"},slot:"right"})],1),t._v(" "),n("mt-cell",{attrs:{title:"标题文字",value:"A icon"}}),t._v(" "),n("mt-cell",{attrs:{title:"设备名称",value:"Lora网关"}}),t._v(" "),n("mt-tabbar",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-item",{attrs:{id:"tab1"}},[n("img",{attrs:{slot:"icon"},slot:"icon"}),t._v("\n      设备参数\n    ")]),t._v(" "),n("mt-tab-item",{attrs:{id:"tab2"}},[n("img",{attrs:{slot:"icon"},slot:"icon"}),t._v("\n      设备状态\n    ")]),t._v(" "),n("mt-tab-item",{attrs:{id:"tab3"}},[n("img",{attrs:{slot:"icon"},slot:"icon"}),t._v("\n      维护记录\n    ")])],1)],1)},staticRenderFns:[]};var m=n("VU/8")(c,u,!1,function(t){n("kdyu")},"data-v-1c7f8901",null).exports;o.default.use(r.a);var d=new r.a({routes:[{path:"/",name:"HelloWorld",component:m}]});o.default.config.productionTip=!1,o.default.use(l.a),new o.default({el:"#app",router:d,components:{App:i},template:"<App/>"})},TOCP:function(t,e){},"d8/S":function(t,e){},kdyu:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4f6293c29027f8428169.js.map