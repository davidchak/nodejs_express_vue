(function(e){function t(t){for(var a,o,c=t[0],l=t[1],u=t[2],i=0,d=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,c=1;c<s.length;c++){var l=s[c];0!==n[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},n={app:0},r=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var f=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},2395:function(e,t,s){},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return s(t)}function r(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],o={name:"App"},c=o,l=(s("7c55"),s("2877")),u=Object(l["a"])(c,n,r,!1,null,null,null),f=u.exports,i=s("5f5b"),d=s("b1e0"),b=s("8c4f"),j=s("2f62"),p={namespaced:!0,state:{user:Object()},mutations:{SET_USER_DATA:function(e,t){e.user=t}},actions:{setUser:function(e,t){var s=e.commit,a=t.value;s("SET_USER_DATA",a)}}},m={namespaced:!0,state:{user:Object()},mutations:{SET_USER_DATA:function(e,t){e.user=t}},actions:{setUser:function(e,t){var s=e.commit,a=t.value;s("SET_USER_DATA",a)}}};a["default"].use(j["a"]);var h=new j["a"].Store({modules:{store_auth:p,store_cart:m}}),y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("base-layout",{scopedSlots:e._u([{key:"header",fn:function(){return[s("header-element")]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"content__block"},[s("div",{staticClass:"wrapper"},[s("span",[e._v("Index page")])])])]},proxy:!0},{key:"footer",fn:function(){},proxy:!0}])})},v=[],_=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page"},[s("header",{staticClass:"page__header"},[e._t("header")],2),s("div",{staticClass:"container h-100"},[s("div",{staticClass:"page__content row"},[e._t("content")],2)]),s("div",{staticClass:"container"},[s("div",{staticClass:"page__footer row"},[e._t("footer")],2)])])},g=[],k={name:"BaseLayout"},x=k,w=Object(l["a"])(x,_,g,!1,null,"41c75b4f",null),C=w.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-nav",[s("b-nav-item",[s("router-link",{attrs:{to:"/"}},[s("span",[e._v("Главная")])])],1),s("b-nav-item",{staticClass:"mr-auto"},[s("router-link",{attrs:{to:"/catalog"}},[s("span",[e._v("Каталог")])])],1),s("b-nav-item",[s("a",{on:{click:e.goToPersonal}},[s("span",[e._v("Личный кабинет")])])])],1)},E=[],z=s("5530"),S={name:"HeaderElement",computed:Object(z["a"])({},Object(j["b"])({user:function(e){return e.store_auth.user}})),methods:{goToPersonal:function(){null!=this.user.length?this.$router.push("user"):this.$router.push("login")}}},P=S,T=Object(l["a"])(P,O,E,!1,null,"fe6ae628",null),$=T.exports,A={name:"IndexPage",components:{BaseLayout:C,HeaderElement:$}},L=A,U=Object(l["a"])(L,y,v,!1,null,"1810ea76",null),H=U.exports,D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("base-layout",{scopedSlots:e._u([{key:"header",fn:function(){return[s("header-element")]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"content__block"},[s("div",{staticClass:"wrapper"},[s("span",[e._v("Catalog")])])])]},proxy:!0},{key:"footer",fn:function(){},proxy:!0}])})},B=[],M={name:"CatalogPage",components:{BaseLayout:C,HeaderElement:$}},R=M,I=Object(l["a"])(R,D,B,!1,null,"3ec341c2",null),q=I.exports,G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("base-layout",{scopedSlots:e._u([{key:"header",fn:function(){return[s("header-element")]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"content__block"},[s("div",{staticClass:"wrapper"},[s("span",[e._v("Personal Page")])])])]},proxy:!0},{key:"footer",fn:function(){},proxy:!0}])})},J=[],N={name:"PersonalPage",components:{BaseLayout:C,HeaderElement:$}},F=N,W=Object(l["a"])(F,G,J,!1,null,"65e4fac6",null),K=W.exports,Q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("base-layout",{scopedSlots:e._u([{key:"header",fn:function(){return[s("header-element")]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"content__block"},[s("div",{staticClass:"wrapper"},[s("div",{staticClass:"row"},[s("form",{staticClass:"text-center"},[s("div",{staticClass:"form-group"},[s("input",{staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"login"}}),s("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[e._v("We'll never share your email with anyone else.")])]),s("div",{staticClass:"form-group"},[s("input",{staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"password"}})]),s("button",{staticClass:"btn btn-primary w-50",attrs:{type:"submit"}},[e._v("Login")]),s("button",{staticClass:"btn btn-primary w-50",attrs:{type:"submit"}},[e._v("Register")])])])])])]},proxy:!0},{key:"footer",fn:function(){},proxy:!0}])})},V=[],X={name:"LoginPage",components:{BaseLayout:C,HeaderElement:$}},Y=X,Z=Object(l["a"])(Y,Q,V,!1,null,"258d6ba0",null),ee=Z.exports;a["default"].use(b["a"]);var te=new b["a"]({mode:"history",routes:[{path:"/",name:"home",component:H},{path:"/catalog",name:"catalog",component:q},{path:"/user",name:"user",component:K},{path:"/login",name:"login",component:ee}]}),se=s("c1df"),ae=s.n(se),ne=s("2ef0"),re=s.n(ne);s("f9e3"),s("2dd8");a["default"].config.productionTip=!1,a["default"].use(i["a"]),a["default"].use(d["a"]),a["default"].use(b["a"]),a["default"].use(j["a"]),a["default"].prototype.$lodash=re.a,a["default"].prototype.$moment=ae.a,new a["default"]({router:te,store:h,render:function(e){return e(f)}}).$mount("#app")},"7c55":function(e,t,s){"use strict";var a=s("2395"),n=s.n(a);n.a}});
//# sourceMappingURL=app.3f00917d.js.map