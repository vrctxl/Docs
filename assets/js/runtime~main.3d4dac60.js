(()=>{"use strict";var e,a,c,f,t,r={},d={};function o(e){var a=d[e];if(void 0!==a)return a.exports;var c=d[e]={id:e,loaded:!1,exports:{}};return r[e].call(c.exports,c,c.exports,o),c.loaded=!0,c.exports}o.m=r,o.c=d,e=[],o.O=(a,c,f,t)=>{if(!c){var r=1/0;for(i=0;i<e.length;i++){c=e[i][0],f=e[i][1],t=e[i][2];for(var d=!0,b=0;b<c.length;b++)(!1&t||r>=t)&&Object.keys(o.O).every((e=>o.O[e](c[b])))?c.splice(b--,1):(d=!1,t<r&&(r=t));if(d){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[c,f,t]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var t=Object.create(null);o.r(t);var r={};a=a||[null,c({}),c([]),c(c)];for(var d=2&f&&e;"object"==typeof d&&!~a.indexOf(d);d=c(d))Object.getOwnPropertyNames(d).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,o.d(t,r),t},o.d=(e,a)=>{for(var c in a)o.o(a,c)&&!o.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,c)=>(o.f[c](e,a),a)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",96:"c4e85937",275:"a252bdd3",629:"5ae735ed",801:"0149f7ec",873:"3782f8af",899:"1f33cfc6",905:"a8463b84",1367:"5a61e5e0",1531:"fb87d503",1726:"503d770d",2136:"f4da48a2",2207:"f63aecd6",2232:"392c6bc6",2535:"814f3328",2681:"e384c4aa",2685:"ec015fad",2698:"230ac864",2718:"41a9ef2e",3085:"1f391b9e",3089:"a6aa9e1f",3278:"7ca83864",3375:"b764c3ac",3608:"9e4087bc",4073:"5c3b61db",4195:"c4f5d8e4",4368:"55a3cadc",4513:"8e20f879",5049:"f3603841",5086:"1c55e306",5087:"22c3a07e",5114:"df63c708",5720:"064cf3cf",6103:"ccc49370",6463:"00b046e9",6500:"097f6048",7107:"a94703ab",7414:"393be207",7757:"e2ea4e9a",7800:"f6f84a5b",7918:"17896441",8060:"5134c7bf",8303:"0c506342",8444:"9fe71a7c",8518:"a7bd4aaa",8614:"e0eef12d",8666:"1db28ace",8843:"8ac17d6d",9139:"555b91c9",9200:"0a2efa47",9300:"ee14a975",9661:"5e95c892"}[e]||e)+"."+{53:"e6a1ec8e",96:"5d1d274d",275:"83ddd18b",629:"8d274437",801:"f41532ff",873:"b4054366",899:"53558733",905:"450c33fd",1367:"86c00ee6",1531:"79924403",1726:"d4f50c46",1772:"f71840c1",2136:"5b57e518",2207:"c6151061",2232:"94ef2601",2535:"03f22b4d",2681:"7e9bebb1",2685:"a5a1dfd4",2698:"2b445114",2718:"92a287ba",3085:"13c1c47d",3089:"a083d924",3278:"3466b69f",3375:"3da7cc6d",3608:"207ad1fb",4073:"96bf7b83",4195:"ad251a1a",4368:"248c19b7",4513:"e20398ba",5049:"d9081520",5086:"be6a78c5",5087:"32a33a7e",5114:"069ed452",5720:"684e961f",6103:"60c2cd29",6463:"e853ac13",6500:"544b9b77",7107:"d90e601b",7414:"f5b6f63c",7569:"fef7e03d",7757:"74180db9",7800:"491687b6",7918:"ec7bb32d",8060:"ed2d5087",8238:"7d8e8632",8303:"d9b39e0e",8444:"af40a739",8518:"9182da68",8614:"4dc2f227",8666:"8507a8d7",8843:"dbbf9714",8945:"df7b2a78",9139:"eb682888",9200:"5ac03ee6",9300:"5402ad3e",9589:"138aa8fa",9661:"a2e83881"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},t="vrctxl:",o.l=(e,a,c,r)=>{if(f[e])f[e].push(a);else{var d,b;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==t+c){d=l;break}}d||(b=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",t+c),d.src=e),f[e]=[a];var u=(a,c)=>{d.onerror=d.onload=null,clearTimeout(s);var t=f[e];if(delete f[e],d.parentNode&&d.parentNode.removeChild(d),t&&t.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),b&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/Docs/",o.gca=function(e){return e={17896441:"7918","935f2afb":"53",c4e85937:"96",a252bdd3:"275","5ae735ed":"629","0149f7ec":"801","3782f8af":"873","1f33cfc6":"899",a8463b84:"905","5a61e5e0":"1367",fb87d503:"1531","503d770d":"1726",f4da48a2:"2136",f63aecd6:"2207","392c6bc6":"2232","814f3328":"2535",e384c4aa:"2681",ec015fad:"2685","230ac864":"2698","41a9ef2e":"2718","1f391b9e":"3085",a6aa9e1f:"3089","7ca83864":"3278",b764c3ac:"3375","9e4087bc":"3608","5c3b61db":"4073",c4f5d8e4:"4195","55a3cadc":"4368","8e20f879":"4513",f3603841:"5049","1c55e306":"5086","22c3a07e":"5087",df63c708:"5114","064cf3cf":"5720",ccc49370:"6103","00b046e9":"6463","097f6048":"6500",a94703ab:"7107","393be207":"7414",e2ea4e9a:"7757",f6f84a5b:"7800","5134c7bf":"8060","0c506342":"8303","9fe71a7c":"8444",a7bd4aaa:"8518",e0eef12d:"8614","1db28ace":"8666","8ac17d6d":"8843","555b91c9":"9139","0a2efa47":"9200",ee14a975:"9300","5e95c892":"9661"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,c)=>{var f=o.o(e,a)?e[a]:void 0;if(0!==f)if(f)c.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var t=new Promise(((c,t)=>f=e[a]=[c,t]));c.push(f[2]=t);var r=o.p+o.u(a),d=new Error;o.l(r,(c=>{if(o.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var t=c&&("load"===c.type?"missing":c.type),r=c&&c.target&&c.target.src;d.message="Loading chunk "+a+" failed.\n("+t+": "+r+")",d.name="ChunkLoadError",d.type=t,d.request=r,f[1](d)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,c)=>{var f,t,r=c[0],d=c[1],b=c[2],n=0;if(r.some((a=>0!==e[a]))){for(f in d)o.o(d,f)&&(o.m[f]=d[f]);if(b)var i=b(o)}for(a&&a(c);n<r.length;n++)t=r[n],o.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return o.O(i)},c=self.webpackChunkvrctxl=self.webpackChunkvrctxl||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();