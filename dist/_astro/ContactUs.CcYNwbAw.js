import{r as b,a as x}from"./index._OACqPSs.js";var f={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N;function w(){if(N)return d;N=1;var r=b(),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function m(l,a,u){var n,h={},p=null,v=null;u!==void 0&&(p=""+u),a.key!==void 0&&(p=""+a.key),a.ref!==void 0&&(v=a.ref);for(n in a)o.call(a,n)&&!c.hasOwnProperty(n)&&(h[n]=a[n]);if(l&&l.defaultProps)for(n in a=l.defaultProps,a)h[n]===void 0&&(h[n]=a[n]);return{$$typeof:t,type:l,key:p,ref:v,props:h,_owner:i.current}}return d.Fragment=s,d.jsx=m,d.jsxs=m,d}var _;function C(){return _||(_=1,f.exports=w()),f.exports}var e=C();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),A=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,s,o)=>o?o.toUpperCase():s.toLowerCase()),y=r=>{const t=A(r);return t.charAt(0).toUpperCase()+t.slice(1)},g=(...r)=>r.filter((t,s,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===s).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=x.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:i="",children:c,iconNode:m,...l},a)=>x.createElement("svg",{ref:a,...k,width:t,height:t,stroke:r,strokeWidth:o?Number(s)*24/Number(t):s,className:g("lucide",i),...l},[...m.map(([u,n])=>x.createElement(u,n)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=(r,t)=>{const s=x.forwardRef(({className:o,...i},c)=>x.createElement(E,{ref:c,iconNode:t,className:g(`lucide-${R(y(r))}`,`lucide-${r}`,o),...i}));return s.displayName=y(r),s};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],q=j("mail",L);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],O=j("map-pin",D);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],F=j("phone",$),S=({address:r,phone:t,email:s})=>e.jsxs("div",{className:"bg-white rounded-lg shadow-sm p-8 max-w-4xl mx-auto",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h2",{className:"text-4xl font-bold mb-4",children:"Contact Us"}),e.jsx("p",{className:"text-gray-600",children:"Have a question? We're here to help!"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-start space-x-4",children:[e.jsx("div",{className:"bg-[#FDF4EA] p-3 rounded-full",children:e.jsx(O,{className:"w-6 h-6 text-[#D4A373]"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-xl mb-1",children:"Address"}),e.jsx("p",{className:"text-gray-600",children:r})]})]}),e.jsxs("div",{className:"flex items-start space-x-4",children:[e.jsx("div",{className:"bg-[#FDF4EA] p-3 rounded-full",children:e.jsx(F,{className:"w-6 h-6 text-[#D4A373]"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-xl mb-1",children:"Phone"}),e.jsx("p",{className:"text-gray-600",children:t})]})]}),e.jsxs("div",{className:"flex items-start space-x-4",children:[e.jsx("div",{className:"bg-[#FDF4EA] p-3 rounded-full",children:e.jsx(q,{className:"w-6 h-6 text-[#D4A373]"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-xl mb-1",children:"Email"}),e.jsx("a",{href:`mailto:${s}`,className:"text-[#D4A373] hover:underline",children:s})]})]})]}),e.jsx("div",{className:"bg-gray-100 rounded-lg h-full min-h-[300px] flex items-center justify-center",children:e.jsx("p",{className:"text-gray-500",children:"[Map Coming Soon]"})})]})]});export{S as default};
