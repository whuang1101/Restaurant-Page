(()=>{"use strict";var e={11:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(81),o=t.n(a),r=t(645),s=t.n(r)()(o());s.push([e.id,".main-contact {\n    color: white;\n    font-size: 2em;\n    width: 32rem;\n    height:auto;\n    opacity: .9;\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    padding: 1.5em;\n    gap: 1em;\n    animation: fadeIn 2s;\n}\n.phone {\n    width:1em;\n    height:1em;\n}\n.contact-info{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    font-size: .7em;\n    gap: .2em;\n}\n@keyframes fadeIn {\n    0% { opacity: 0; }\n    100% { opacity: .9; }\n}",""]);const i=s},78:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(81),o=t.n(a),r=t(645),s=t.n(r)()(o());s.push([e.id,".main-menu {\n    color: white;\n    font-size: 2em;\n    width: 32rem;\n    height:auto;\n    opacity: .9 ;\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 1.5em;\n    gap: 1em;\n    animation: fadeIn 2s;\n}\n.menu-items{\n    display: flex;\n    flex-direction: column;\n    gap: .2em;\n    justify-content: space-between;\n}\n.split {\n    display: flex;\n    justify-content: space-between;\n}\n.ingredients{\n    font-size: .5em;\n}\n.breakfast {\n    font-size: 1.2em;\n    border-bottom: 2px solid white;\n    font-weight: bold;\n}\n@keyframes fadeIn {\n    0% { opacity: 0; }\n    100% { opacity: .9; }\n}",""]);const i=s},426:(e,n,t)=>{t.d(n,{Z:()=>f});var a=t(81),o=t.n(a),r=t(645),s=t.n(r),i=t(667),c=t.n(i),d=new URL(t(783),t.b),l=new URL(t(282),t.b),p=s()(o()),m=c()(d),u=c()(l);p.push([e.id,`* {\n    margin: 0;\n    padding: 0;\n}\n#content{\n    background-image: url(${m});\n    background-size: cover;\n    background-attachment: fixed;\n    opacity: 1;\n    display: flex;\n    flex-direction: column;\n}\n.header{\n    flex: 1.2;\n    background-color: black;\n    opacity: .8 !important;\n    display: grid;\n    grid-template-rows: repeat(2,1fr);\n    justify-content: center;\n    font-family: 'MyFont', cursive, Arial, Helvetica, sans-serif;\n    color: white;\n}\n.title {\n    grid-row: 1/2;\n    font-size: 4em;\n    padding-top: .2em;\n}\n.tab-bar {\n    display: grid;\n    grid-row: 2/3;\n    font-size: 2em;\n    grid-template-columns: repeat(3,1fr);\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\n.home:hover, .menu:hover, .contact:hover {\n    transform: translate(0,-.5em);\n    animation-delay: 1s;\n}\n.underline{\n    border-bottom: 2px solid white;\n}\n.main-content{\n    flex:5;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 2em;\n}\n.main-screen {\n    color: white;\n    font-size: 1.8em;\n    width: 32rem;\n    height: auto;\n    opacity: 9 ;\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 1.5em;\n    gap: 1.5em;\n    animation: fadeIn 2s;\n}\n.restaurant-image{\n    border-radius: 20rem;\n    height: 10em;\n    width: 10em;\n    opacity: 1 !important;\n}\n\n.footer {\n    flex: .3;\n    background-color: black;\n    opacity: .8 !important;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.copyright { \n    color: white;\n    font-size: 1.5em;\n}\n.hide {\n    display: none !important;\n}\n@font-face {\n    font-family: 'MyFont';\n    src: url(${u}) format('otf');\n    font-weight: 600;\n    font-style: normal;\n  }\n\n@keyframes fadeIn {\n    0% { opacity: 0; }\n    100% { opacity: .9; }\n}\n  `,""]);const f=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(a)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&s[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},s=[],i=0;i<e.length;i++){var c=e[i],d=a.base?c[0]+a.base:c[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var m=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var f=o(u,a);a.byIndex=i,n.splice(i,0,{identifier:p,updater:f,references:1})}s.push(p)}return s}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var i=t(r[s]);n[i].references--}for(var c=a(e,o),d=0;d<r.length;d++){var l=t(r[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},282:(e,n,t)=>{e.exports=t.p+"2933a476830ebe1a8e99.otf"},783:(e,n,t)=>{e.exports=t.p+"c83b345ca90f28d0a41b.jpg"}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!e;)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),o=t.n(a),r=t(569),s=t.n(r),i=t(565),c=t.n(i),d=t(216),l=t.n(d),p=t(589),m=t.n(p),u=t(426),f={};f.styleTagTransform=m(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,t(783);var h=t(78),g={};function v(e,n,t,a){const o=document.createElement("div");o.classList.add("menu-items");const r=document.createElement("div");r.classList.add("split");const s=document.createElement("div"),i=document.createElement("div");s.textContent=e,i.textContent=n,r.append(s),r.append(i),o.append(r);const c=document.createElement("div");c.textContent=t,c.classList.add("ingredients"),o.append(c),a.append(o)}g.styleTagTransform=m(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),n()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var y=t(11),b={};b.styleTagTransform=m(),b.setAttributes=c(),b.insert=s().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=l(),n()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals;const x=t.p+"1fd794016413e84dccac.svg",w=t.p+"4040c74c7e9a30b80b63.svg",L=t.p+"9bb338a7bab46cfa0744.png",E=document.createElement("div"),C=document.querySelector("body");E.setAttribute("id","content");const k=document.createElement("div");k.classList.add("header");const T=document.createElement("div");T.classList.add("main-content");const I=document.createElement("div");I.classList.add("footer");const A=document.createElement("h1");A.textContent="Darrell's Dog Gone Good Diner",A.classList.add("title");const S=document.createElement("div");S.className="tab-bar";const Z=document.createElement("div");Z.className="home",Z.classList.add("underline"),Z.textContent="Home";const N=document.createElement("div");N.textContent="Menu",N.className="menu";const j=document.createElement("div");j.textContent="Contact",j.className="contact",C.append(E),E.append(k),E.append(T),E.append(I),k.append(A),k.append(S),S.append(Z),S.append(N),S.append(j);const M=document.createElement("div");M.className="main-screen",T.append(M);const z=document.createElement("div");z.textContent="Best food in all of North Florida!",M.append(z);const F=document.createElement("img");F.src="https://lh3.googleusercontent.com/p/AF1QipOL4wvLxO2B9_GbS42gLJAyV3fvzFoZmvU_MsAu=s1360-w1360-h1020",F.alt="A picture of the restaurant",F.classList.add("restaurant-image");const $=document.createElement("div");$.textContent="Founded in 2016";const O=document.createElement("div");O.textContent="Order Now!",M.append(F),M.append($),M.append(O);const P=document.createElement("div");P.textContent="Copyright © 2023 whuang1101",P.className="copyright",I.append(P);const B=function(){const e=document.createElement("div");e.classList.add("main-menu");const n=document.createElement("div");return n.textContent="Breakfast",n.className="breakfast",e.append(n),v("Egg & Cheese Breakfast Sandwich","$2.75","Eggs, Cheese, and Croissant",e),v("Eggs","$4.50","Two (2) eggs served with toast. Your choice of grits, hash browns or home fries.",e),v("Two Egg Omelet with Toast","$6.49","With your choice of 2 (2): cheese, tomatoes, ham sausage, bacon, onion, mushrooms, green peppers, salsa. Choose your choice of home fries, hash browns or grits.",e),v("2 Eggs Any Way","$5.99","Toast and your choice of bacon or sausage and choice of potato or grits, toast and your beverage.",e),v('Darrell\'s "Famous" Scramble Cheese Eggs with Toast',"$5.49","Your choice of grits, hash browns or home fries.",e),e}();B.classList.add("hide"),T.append(B);const R=function(){const e=document.createElement("div");e.classList.add("main-contact");const n=new Image,t=document.createElement("div"),a=document.createElement("div");t.classList.add("contact-info"),a.textContent="(877) 585-1085",n.src=x,n.classList.add("phone"),t.append(n),t.append(a),e.append(t);const o=new Image;o.src=w;const r=document.createElement("div"),s=document.createElement("div");o.classList.add("phone"),r.classList.add("contact-info"),s.textContent="4409 Northwest Blitchton Road, Ocala, FL 34482",r.append(o),r.append(s),e.append(r);const i=new Image;return i.src=L,i.classList.add("opaque"),e.append(i),e}();R.classList.add("hide"),T.append(R),N.addEventListener("click",(()=>{M.classList.add("hide"),B.classList.remove("hide"),Z.classList.remove("underline"),N.classList.add("underline"),j.classList.remove("underline"),R.classList.add("hide")})),Z.addEventListener("click",(()=>{M.classList.remove("hide"),B.classList.add("hide"),Z.classList.add("underline"),N.classList.remove("underline"),j.classList.remove("underline"),R.classList.add("hide")})),j.addEventListener("click",(()=>{N.classList.remove("underline"),Z.classList.remove("underline"),j.classList.add("underline"),B.classList.add("hide"),M.classList.add("hide"),R.classList.remove("hide")}))})()})();