(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(9),r=a.n(c),i=a(2),s=a(11),u=a(6),o=a(3),j=a(0),d=function(e){var t=e.setCategories,a=Object(n.useState)({category:""}),c=Object(i.a)(a,2),r=c[0],d=c[1];return Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),d({category:""}),t((function(e){return[r.category].concat(Object(s.a)(e))}))},children:Object(j.jsx)("input",{name:"category",type:"text",value:r.category,onChange:function(e){d(Object(o.a)(Object(o.a)({},r),{},Object(u.a)({},e.target.name,[e.target.value])))}})})},b=a(8),l=a.n(b),m=a(10),p=function(){var e=Object(m.a)(l.a.mark((function e(t){var a,n,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=rp7YDfxo67m2wIC41GyHt518aEgFKDzA"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:null===e||void 0===e?void 0:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.url,a=e.title;return Object(j.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(j.jsx)("img",{src:t,alt:a}),Object(j.jsx)("p",{children:a})]})},O=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],cargando:!0}),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){p(e).then((function(e){return r({data:e,cargando:!1})}))}),[e]),c}(t),c=a.data,r=a.cargando;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{className:"animate__animated animate__fadein",children:t}),r&&Object(j.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando..."}),Object(j.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(n.createElement)(f,Object(o.a)(Object(o.a)({},e),{},{key:e.id}))}))})]})},g=function(){var e=Object(n.useState)(["One Punch"]),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"GifExpertApp"}),Object(j.jsx)(d,{setCategories:c}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:a.map((function(e){return Object(j.jsx)(O,{category:e},e)}))})]})};a(18);r.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1eec7ff7.chunk.js.map