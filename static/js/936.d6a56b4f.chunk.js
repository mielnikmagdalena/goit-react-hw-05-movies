"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{936:function(r,n,t){t.r(n),t.d(n,{default:function(){return v}});var e=t(861),c=t(439),o=t(757),a=t.n(o),u=t(791),i=t(87),s=t(409),f={container:"Home_container__w+u63","link-container":"Home_link-container__JTWI+",link:"Home_link__2zIq5",movieList:"Home_movieList__Sm4J-",movieCard:"Home_movieCard__-NT8X",poster:"Home_poster__GFYjc"},p=t(184),v=function(){var r=(0,u.useState)([]),n=(0,c.Z)(r,2),t=n[0],o=n[1];return(0,u.useEffect)((function(){var r=function(){var r=(0,e.Z)(a().mark((function r(){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,s.Df)();case 3:n=r.sent,o(n.results),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,p.jsxs)("div",{className:f.container,children:[(0,p.jsx)(i.rU,{to:"/",className:f.homeLink,children:"Home"}),(0,p.jsx)(i.rU,{to:"/movies",className:f.link,children:"Movies"}),(0,p.jsx)("ul",{className:f.movieList,children:t.map((function(r){return(0,p.jsx)("li",{className:f.movieCard,children:(0,p.jsxs)(i.rU,{to:"/movies/".concat(r.id),children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r.poster_path),alt:r.title,className:f.poster}),(0,p.jsx)("h2",{children:r.title})]})},r.id)}))})]})}},409:function(r,n,t){t.d(n,{Df:function(){return u},TP:function(){return s},tx:function(){return p},z1:function(){return i},zv:function(){return f}});var e=t(861),c=t(757),o=t.n(c),a=function(){var r=(0,e.Z)(o().mark((function r(n){var t,e;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("https://api.themoviedb.org/3".concat(n,"?api_key=").concat("904ef6f007cb228dd6ac008b3d697336"));case 3:if((t=r.sent).ok){r.next=6;break}throw new Error("Request failed with status: ".concat(t.status));case 6:return r.next=8,t.json();case 8:return e=r.sent,r.abrupt("return",e);case 12:throw r.prev=12,r.t0=r.catch(0),console.error("API Error:",r.t0),r.t0;case 16:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(n){return r.apply(this,arguments)}}(),u=function(){var r=(0,e.Z)(o().mark((function r(){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",a("/trending/movie/day"));case 1:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),i=function(){var r=(0,e.Z)(o().mark((function r(n){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",a("/search/movie?query=".concat(n)));case 1:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),s=function(){var r=(0,e.Z)(o().mark((function r(n){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",a("/movie/".concat(n)));case 1:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(o().mark((function r(n){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",a("/movie/".concat(n,"/credits")));case 1:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(o().mark((function r(n){return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",a("/movie/".concat(n,"/reviews")));case 1:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}()},861:function(r,n,t){function e(r,n,t,e,c,o,a){try{var u=r[o](a),i=u.value}catch(s){return void t(s)}u.done?n(i):Promise.resolve(i).then(e,c)}function c(r){return function(){var n=this,t=arguments;return new Promise((function(c,o){var a=r.apply(n,t);function u(r){e(a,c,o,u,i,"next",r)}function i(r){e(a,c,o,u,i,"throw",r)}u(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=936.d6a56b4f.chunk.js.map