(this.webpackJsonpcardzapp=this.webpackJsonpcardzapp||[]).push([[0],{17:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"searchCard",(function(){return L})),n.d(a,"requestData",(function(){return W}));var r=n(0),o=n.n(r),c=n(7),i=n.n(c),l=(n(22),n(8)),s=n(6),u=n(15),d=n(16),h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(28);var p=n(2),v=n(3),m=n(5),b=n(4),g=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return o.a.createElement("h1",{className:"f1"},this.props.text)}}]),n}(o.a.PureComponent),E=n(1),j=function(e){var t=e.info,n=t.id,a=t.name,r=t.email;return o.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{alt:"".concat(a," thumbnail"),src:"https://robohash.org/".concat(n)}),o.a.createElement("h2",null,a),o.a.createElement("div",null,r))},w=function(e){var t=e.values;return o.a.createElement(o.a.Fragment,null,t.map((function(e){return o.a.createElement(j,{key:e.id,info:e})})))},O=function(e){return o.a.createElement("div",{className:"ma2"},o.a.createElement("input",{type:"search",placeholder:"search for card",className:"pa2 ba b--green bg-lightest-blue",onChange:e.onSearch}))},y=(n(29),function(e){return o.a.createElement("div",{className:"scrollable"},e.children)}),C=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(v.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oops! Something went wrong"):this.props.children}}]),n}(o.a.Component),S=(n(30),"REQUEST_DATA.PENDING"),k="REQUEST_DATA.SUCCESS",A="REQUEST_DATA.FAILED",D=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).filter=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestData()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,a=e.data,r=e.isPending,c=this.filter(a,t);return r?o.a.createElement("h4",null,"Loading"):o.a.createElement(C,{className:"tc"},o.a.createElement(O,{onSearch:n}),o.a.createElement(y,null,o.a.createElement(w,{values:c})))}}]),n}(o.a.Component),N=Object(l.b)((function(e){return Object(E.a)(Object(E.a)({},e.searchCard),e.requestData)}),(function(e){return{onSearchChange:function(t){var n={type:"CHANGE_SEARCH_FIELD",payload:t.target.value};return e(n)},onRequestData:function(){return e((function(e){e({type:S}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:k,payload:t})})).catch((function(t){return e({type:A,payload:t})}))}))}}}))(D),P=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"tc"},o.a.createElement(g,{text:this.props.title}),o.a.createElement(N,null))}}]),n}(o.a.PureComponent),R={searchField:""},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(E.a)(Object(E.a)({},e),{},{searchField:t.payload});default:return e}},T={isPending:!1,data:[],error:""},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case S:return Object(E.a)(Object(E.a)({},e),{},{isPending:!0});case k:return Object(E.a)(Object(E.a)({},e),{},{isPending:!1,data:t.payload});case A:return Object(E.a)(Object(E.a)({},e),{},{isPending:!1,error:t.payload});default:return e}},F=(Object(u.createLogger)(),Object(s.c)(a)),U=Object(s.d)(F,Object(s.a)(d.a));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,{store:U},o.a.createElement(P,{title:"Cardzapp"}))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/cardzapp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/cardzapp","/service-worker.js");h?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(t,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.c493a195.chunk.js.map