"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[131],{39:function(e,t,n){var r=n(165),a=n(861),i=n(885),s=n(791),u=n(44);t.Z=function(){var e=(0,s.useState)(!1),t=(0,i.Z)(e,2),n=t[0],c=t[1],l=(0,s.useState)(null),o=(0,i.Z)(l,2),f=o[0],d=o[1],x=(0,s.useCallback)(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,i,s,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),d(null),e.prev=2,a=new AbortController,i=a.signal,e.next=7,u.ZP.get(t,{signal:i});case 7:return s=e.sent,l=s.data,n(l),e.abrupt("return",(function(){return a.abort()}));case 13:e.prev=13,e.t0=e.catch(2),d(e.t0.response.data||"Something went wrong");case 16:c(!1);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,n){return e.apply(this,arguments)}}(),[]);return{isLoading:n,error:f,getData:x}}},131:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(791),a=n(885),i=n(689),s=n(39),u=n(184),c=(0,r.lazy)((function(){return n.e(87).then(n.bind(n,87))})),l=(0,r.lazy)((function(){return n.e(321).then(n.bind(n,321))})),o=(0,r.lazy)((function(){return n.e(965).then(n.bind(n,965))})),f=(0,r.lazy)((function(){return n.e(170).then(n.bind(n,170))})),d=function(){var e=(0,i.UO)().id,t=(0,r.useState)(),n=(0,a.Z)(t,2),d=n[0],x=n[1],v=(0,s.Z)().getData;return(0,r.useEffect)((function(){e&&v("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=3bb216411421fdef32dab7fb43d28fa2&language=en-US"),x)}),[e]),(0,u.jsx)(u.Fragment,{children:d?(0,u.jsxs)("div",{className:"overflow-x-hidden flex flex-col items-center justify-center",children:[(0,u.jsx)(o,{movieData:d}),(0,u.jsx)("div",{className:" gap-10 flex items-start justify-start w-full",children:(0,u.jsxs)("div",{className:"flex flex-col gap-7 max-w-[100vw] p-10",children:[(0,u.jsx)(l,{movieData:d}),(0,u.jsx)(c,{id:e}),(0,u.jsx)(f,{id:e})]})})]}):(0,u.jsx)("div",{className:"text-white font-bold text-center text-lg",children:"Loading"})})},x=function(){return(0,u.jsx)(d,{})}}}]);
//# sourceMappingURL=131.257027c9.chunk.js.map