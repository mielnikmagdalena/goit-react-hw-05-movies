"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{881:function(r,t,n){n.r(t),n.d(t,{default:function(){return m}});var e=n(861),c=n(439),u=n(757),a=n.n(u),o=n(791),s=n(87),i=n(409),f="Movies_container__+-Cnt",p="Movies_searchInput__8fq2n",v="Movies_movieList__FD6N4",h="Movies_movieCard__jhhqX",l="Movies_poster__Yc3Qb",d=n(184),m=function(){var r=(0,o.useState)(""),t=(0,c.Z)(r,2),n=t[0],u=t[1],m=(0,o.useState)([]),w=(0,c.Z)(m,2),x=w[0],_=w[1];(0,o.useEffect)((function(){if(n){var r=function(){var r=(0,e.Z)(a().mark((function r(){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.z1)(n);case 3:t=r.sent,_(t.results),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error searching movies:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}}),[n]);return(0,d.jsxs)("div",{className:f,children:[(0,d.jsx)("h1",{children:"Search Results"}),(0,d.jsx)("input",{type:"text",className:p,placeholder:"Search for movies...",value:n,onChange:function(r){u(r.target.value)}}),(0,d.jsx)("ul",{className:v,children:x.map((function(r){return(0,d.jsx)("li",{className:h,children:(0,d.jsxs)(s.rU,{to:"/movies/".concat(r.id),children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r.poster_path),alt:r.title,className:l}),(0,d.jsx)("h2",{children:r.title})]})},r.id)}))})]})}},409:function(r,t,n){n.d(t,{Df:function(){return o},TP:function(){return i},tx:function(){return p},z1:function(){return s},zv:function(){return f}});var e=n(861),c=n(757),u=n.n(c),a=function(){var r=(0,e.Z)(u().mark((function r(t){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("https://api.themoviedb.org/3".concat(t,"?api_key=").concat("904ef6f007cb228dd6ac008b3d697336"));case 3:if((n=r.sent).ok){r.next=6;break}throw new Error("Request failed with status: ".concat(n.status));case 6:return r.next=8,n.json();case 8:return e=r.sent,r.abrupt("return",e);case 12:throw r.prev=12,r.t0=r.catch(0),console.error("API Error:",r.t0),r.t0;case 16:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(t){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(u().mark((function r(){return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",a("/trending/movie/day"));case 1:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),s=function(){var r=(0,e.Z)(u().mark((function r(t){return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",a("/search/movie?query=".concat(t)));case 1:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),i=function(){var r=(0,e.Z)(u().mark((function r(t){return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",a("/movie/".concat(t)));case 1:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(t){return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",a("/movie/".concat(t,"/credits")));case 1:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(u().mark((function r(t){return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",a("/movie/".concat(t,"/reviews")));case 1:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},861:function(r,t,n){function e(r,t,n,e,c,u,a){try{var o=r[u](a),s=o.value}catch(i){return void n(i)}o.done?t(s):Promise.resolve(s).then(e,c)}function c(r){return function(){var t=this,n=arguments;return new Promise((function(c,u){var a=r.apply(t,n);function o(r){e(a,c,u,o,s,"next",r)}function s(r){e(a,c,u,o,s,"throw",r)}o(void 0)}))}}n.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=881.48749ff8.chunk.js.map