(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4qC0":function(t,e,n){var o=n("NykK"),r=n("Z0cm"),i=n("ExA7");t.exports=function(t){return"string"==typeof t||!r(t)&&i(t)&&"[object String]"==o(t)}},AP2z:function(t,e,n){n("q8oJ"),n("C9fy"),n("8npG");var o=n("nmnc"),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,c=o?o.toStringTag:void 0;t.exports=function(t){var e=i.call(t,c),n=t[c];try{t[c]=void 0;var o=!0}catch(f){}var r=a.call(t);return o&&(e?t[c]=n:delete t[c]),r}},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},KfNM:function(t,e,n){n("q8oJ"),n("C9fy"),n("8npG");var o=Object.prototype.toString;t.exports=function(t){return o.call(t)}},Kz5y:function(t,e,n){var o=n("WFqU"),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();t.exports=i},NykK:function(t,e,n){var o=n("nmnc"),r=n("AP2z"),i=n("KfNM"),a=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?r(t):i(t)}},R48M:function(t,e,n){var o=n("P8UN");o(o.S+o.F*!n("QPJK"),"Object",{defineProperty:n("rjfK").f})},RXBc:function(t,e,n){"use strict";n.r(e);n("E5k/");var o=n("iYmT"),r=(n("q1tI"),n("Wbzz")),i=n("p3AD"),a=n("qKvR");function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var f=function(t){return Object(a.a)(r.Link,c({css:Object(o.a)({color:"inherit",textDecoration:"none"})},t))};e.default=function(){return Object(a.a)("div",{css:Object(o.a)({display:"flex",height:"100vh",background:"#ffffff"})},Object(a.a)("div",{css:Object(o.a)({position:"absolute",left:"33.333%",width:Object(i.rhythm)(1),height:"22vh",zIndex:10,background:"#ffffff",borderBottomRightRadius:"34px 41%"})}),Object(a.a)("div",{css:Object(o.a)({position:"absolute",left:"33.33%",bottom:0,width:Object(i.rhythm)(1),height:"24vh",zIndex:10,background:"#ffffff",borderTopLeftRadius:"34px 41%"})}),Object(a.a)("div",{css:Object(o.a)({display:"flex",position:"absolute",margin:Object(i.rhythm)(3/4),top:0,bottom:0,left:0,right:0,justifyContent:"center",alignItems:"center",background:"#4d999c"})},Object(a.a)("h1",{css:Object(o.a)({width:"80%",color:"#ffffff",fontWeight:600,fontSize:Object(i.scale)(1).fontSize,lineHeight:1.1,"@media (min-width: 420px)":{fontSize:Object(i.scale)(1.4).fontSize},"@media (min-width: 768px)":{fontSize:Object(i.scale)(2).fontSize}})},"1 người con",Object(a.a)("br",null)," 1 người cha",Object(a.a)("br",null)," 1 người chồng",Object(a.a)("br",null),"1 ông giám đốc tay ngang")),Object(a.a)("div",{css:Object(o.a)({color:"#ffffff",position:"absolute",top:Object(i.rhythm)(1.5),zIndex:10,transform:"rotate(90deg)",transformOrigin:"left top 0",left:Object(i.rhythm)(2.5),fontSize:Object(i.scale)(.4).fontSize,lineHeight:Object(i.scale)(.4).lineHeight,"@media (min-width: 420px)":{left:Object(i.rhythm)(1.5),transform:"none"}})},Object(a.a)(f,{to:"/"},"RK")),Object(a.a)("div",{css:Object(o.a)({color:"#ffffff",position:"absolute",right:Object(i.rhythm)(1.5),top:Object(i.rhythm)(1.5),zIndex:10,fontSize:Object(i.scale)(.4).fontSize,lineHeight:Object(i.scale)(.4).lineHeight})},Object(a.a)(f,{to:"/blog/"},"blog"),","," ",Object(a.a)(f,{to:"/about/"},"about")))}},UB5X:function(t,e,n){var o=n("NykK"),r=n("ExA7");t.exports=function(t){return"number"==typeof t||r(t)&&"[object Number]"==o(t)}},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("yLpj"))},Z0cm:function(t,e,n){n("MIFh");var o=Array.isArray;t.exports=o},aZJH:function(t,e){function n(t){return!isNaN(parseFloat(t))&&isFinite(t)}t.exports=function(t,e,o){if(void 0===e&&(e=0),void 0===o&&(o=!1),"cool"===e?e=237:"slate"===e?e=122:"warm"===e&&(e=69),!n(e))throw new Error("Hue is not a number");if(!n(t))throw new Error("Lightness is not a number");t>100&&(t=100),t<0&&(t=0);var r=0;if(0!==e){r=19.92978+-.3651759*t+.001737214*Math.pow(t,2)}var i=0;return o?(i=t/100,t="100%,"):(i=(100-t)/100,t="0%,"),"hsla("+e+","+r+"%,"+t+i+")"}},dSf1:function(t,e,n){"use strict";n("R48M"),Object.defineProperty(e,"__esModule",{value:!0});var o=a(n("aZJH")),r=a(n("UB5X")),i=a(n("4qC0"));function a(t){return t&&t.__esModule?t:{default:t}}e.default=function(){return function(t,e){var n=t.rhythm,a=void 0;return a=(0,r.default)(e.blockMarginBottom)?n(e.blockMarginBottom):(0,i.default)(e.blockMarginBottom)?e.blockMarginBottom:n(1),{"tt,code":{backgroundColor:(0,o.default)(96),borderRadius:"3px",fontFamily:'"SFMono-Regular", Consolas,"Roboto Mono","Droid Sans Mono","Liberation Mono",Menlo,Courier,monospace',padding:0,paddingTop:"0.2em",paddingBottom:"0.2em"},pre:{background:(0,o.default)(96),borderRadius:"3px",lineHeight:1.42,overflow:"auto",wordWrap:"normal",padding:a},"pre code":{background:"none",lineHeight:1.42},"code:before,code:after,tt:before,tt:after":{letterSpacing:"-0.2em",content:'" "'},"pre code:before,pre code:after,pre tt:before,pre tt:after":{content:"none"}}}}},mBog:function(t,e,n){t.exports=n("pnCv")},nmnc:function(t,e,n){var o=n("Kz5y").Symbol;t.exports=o},p3AD:function(t,e,n){var o=new(n("mBog"))({baseFontSize:"18px",headerFontFamily:["Fira Sans","sans-serif"],bodyFontFamily:["Fira Sans","sans-serif"],plugins:[new(0,n("dSf1").default)],baseLineHeight:1.45,blockMarginBottom:.85,overrideThemeStyles:function(t){var e=t.rhythm;return{a:{color:"#4d999c"},blockquote:{marginLeft:0,paddingLeft:e(5/8),borderLeft:e(3/8)+" solid #CDE7B0"},"blockquote > *":{fontStyle:"italic"},"blockquote > h1, blockquote > h2, blockquote > h3, blockquote > h4":{marginTop:0},"li > p":{marginBottom:e(.5)},"p code":{fontSize:"75%"},"tt,code":{fontSize:"85%"},pre:{lineHeight:1.22}}}});t.exports=o},pnCv:function(t,e,n){n("q8oJ"),n("C9fy"),n("Ll4R"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("HQhv"),n("JHok"),n("AqHK"),n("E5k/"),n("4DPX");var o,r,i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,f=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(t){o[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,o,r=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),f=1;f<arguments.length;f++){for(var l in n=Object(arguments[f]))a.call(n,l)&&(r[l]=n[l]);if(i){o=i(n);for(var s=0;s<o.length;s++)c.call(n,o[s])&&(r[o[s]]=n[o[s]])}}return r},l=function(t,e){e||(e=[0,""]),t=String(t);var n=parseFloat(t,10);return e[0]=n,e[1]=t.match(/[\d.\-\+]*\s*(.*)/)[1]||"",e},s=function(t){return l(t)[0]},u=function(t){return null==t&&(t=t),function(e,n,o,r){null==o&&(o=t),null==r&&(r=o);var i=l(e)[1];if(i===n)return e;var a=s(e);if("px"!==i)if("em"===i)a=s(e)*s(o);else if("rem"===i)a=s(e)*s(t);else{if("ex"!==i)return e;a=s(e)*s(o)*2}var c=a;if("px"!==n)if("em"===n)c=a/s(r);else if("rem"===n)c=a/s(t);else{if("ex"!==n)return e;c=a/s(r)/2}return parseFloat(c.toFixed(5))+n}},b=l,h=function(t){return b(t)[1]},d=function(t){return b(t)[0]},p={baseFontSize:"16px",baseLineHeight:1.5,rhythmUnit:"rem",defaultRhythmBorderWidth:"1px",defaultRhythmBorderStyle:"solid",roundToNearestHalfLine:!0,minLinePadding:"2px"},g=function(t,e){var n,o=u(e.baseFontSize),r=d(o(t,"px")),i=d(e.baseLineHeightInPx),a=d(o(e.minLinePadding,"px"));return(n=e.roundToNearestHalfLine?Math.ceil(2*r/i)/2:Math.ceil(r/i))*i-r<2*a&&(n+=e.roundToNearestHalfLine?.5:1),n},m=function(t){var e=u(t.baseFontSize);return function(n,o,r){null==n&&(n=1),null==o&&(o=t.baseFontSize),null==r&&(r=0);var i=n*d(t.baseLineHeightInPx)-r+"px",a=e(i,t.rhythmUnit,o);return"px"===h(a)&&(a=Math.floor(d(a))+h(a)),parseFloat(d(a).toFixed(5))+h(a)}},j=Object.prototype.toString;o=function(t){return"number"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Number]"==j.call(t)},r={"minor second":16/15,"major second":9/8,"minor third":1.2,"major third":4/3,"diminished fourth":Math.sqrt(2),"perfect fifth":1.5,"minor sixth":1.6,golden:1.61803398875,phi:1.61803398875,"major sixth":5/3,"minor seventh":16/9,"major seventh":15/8,octave:2,"major tenth":2.5,"major eleventh":8/3,"major twelfth":3,"double octave":4},t.exports=function(t){var e,n,i,a,c=f({},{baseFontSize:"16px",baseLineHeight:1.45,headerLineHeight:1.1,scaleRatio:2,googleFonts:[],headerFontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"],bodyFontFamily:["georgia","serif"],headerColor:"inherit",bodyColor:"hsla(0,0%,0%,0.8)",headerWeight:"bold",bodyWeight:"normal",boldWeight:"bold",includeNormalize:!0,blockMarginBottom:1},t),l=(e=c,n=JSON.parse(JSON.stringify(p)),i=Object.assign({},n,e),a=u(i.baseFontSize),h(i.baseLineHeight)?(d(a(i.baseFontSize,"px")),i.baseLineHeightInPx=a(i.baseLineHeight,"px")):i.baseLineHeightInPx=d(i.baseFontSize)*i.baseLineHeight+"px",{rhythm:m(i),establishBaseline:function(){return u((t=i).baseFontSize),{fontSize:d(t.baseFontSize)/16*100+"%",lineHeight:t.baseLineHeight.toString()};var t},linesForFontSize:function(t){return g(t,i)},adjustFontSizeTo:function(t,e,n){return null==e&&(e="auto"),function(t,e,n,o){null==n&&(n=o.baseFontSize),"%"===h(t)&&(t=d(o.baseFontSize)*(d(t)/100)+"px");var r=u(o.baseFontSize);t=r(t,"px",n=r(n,"px"));var i=m(o);return"auto"===e&&(e=g(t,o)),{fontSize:r(t,o.rhythmUnit,n),lineHeight:i(e,n)}}(t,e,n,i)}});return l.scale=function(t){var e=c.baseFontSize.slice(0,-2),n=function(t,e){var n;return null==t&&(t=0),null==e&&(e="golden"),n=o(e)?e:null!=r[e]?r[e]:r.golden,Math.pow(n,t)}(t,c.scaleRatio)*e+"px";return l.adjustFontSizeTo(n)},Object.assign({},{options:c},l)}},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(o){"object"==typeof window&&(n=window)}t.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-js-841651b62280f5973f2c.js.map