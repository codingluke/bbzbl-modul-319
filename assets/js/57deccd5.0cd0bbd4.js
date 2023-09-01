"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[8094],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},48556:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={keywords:["pdf"]},i="foreach",l={unversionedId:"7a-for-arrays/foreach",id:"7a-for-arrays/foreach",title:"foreach",description:"Arrays, bzw. allgemein Collections, k\xf6nnen auch mit der foreach Schleife",source:"@site/docs/7a-for-arrays/foreach.md",sourceDirName:"7a-for-arrays",slug:"/7a-for-arrays/foreach",permalink:"/bbzbl-modul-319/docs/7a-for-arrays/foreach",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/7a-for-arrays/foreach.md",tags:[],version:"current",frontMatter:{keywords:["pdf"]},sidebar:"tutorialSidebar",previous:{title:"Arrays / Listen",permalink:"/bbzbl-modul-319/docs/7a-for-arrays/arrays"},next:{title:"8 - Repetition und \xdcbungen",permalink:"/bbzbl-modul-319/docs/8a-repetition/"}},c={},s=[{value:"\ud83d\udcfa Video \xfcber Foreach mit Array",id:"-video-\xfcber-foreach-mit-array",level:2},{value:"\ud83d\udcfa Erkl\xe4rvideos von Studyflix",id:"-erkl\xe4rvideos-von-studyflix",level:2}],u=(d="YouTube",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const p={toc:s},f="wrapper";function m(e){let{components:r,...t}=e;return(0,a.kt)(f,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"foreach"},"foreach"),(0,a.kt)("p",null,"Arrays, bzw. allgemein Collections, k\xf6nnen auch mit der ",(0,a.kt)("inlineCode",{parentName:"p"},"foreach")," Schleife\ndurchlaufen werden. Die Schleife hat ",(0,a.kt)("strong",{parentName:"p"},"keinen Z\xe4hler"),", wie die klassische\n",(0,a.kt)("inlineCode",{parentName:"p"},"for"),"-Schleife."),(0,a.kt)("p",null,"Ist man jedoch haupts\xe4chlich am ",(0,a.kt)("strong",{parentName:"p"},"Inhalt der Auflistung")," interessiert, kann so\nsehr einfach darauf zugegriffen werden. Mit dieser Variante kann jedoch ",(0,a.kt)("strong",{parentName:"p"},"keine\n\xc4nderung des Arrays")," gemacht werden."),(0,a.kt)("div",{class:"grid"},(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Schema"',title:'"Schema"'},"for(Datentyp variable : Array) {\n    // code block\n}\n"))),(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Code-Beispiel"',title:'"Code-Beispiel"'},'String[] worte = { "hallo", "liebe", "Welt" }\nfor(String wort : worte) {\n    System.out.println(wort);\n}\n')))),(0,a.kt)("h2",{id:"-video-\xfcber-foreach-mit-array"},"\ud83d\udcfa Video \xfcber Foreach mit Array"),(0,a.kt)(u,{id:"kUXTO1lwZzY",mdxType:"YouTube"}),(0,a.kt)("h2",{id:"-erkl\xe4rvideos-von-studyflix"},"\ud83d\udcfa Erkl\xe4rvideos von Studyflix"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://studyflix.de/informatik/java-foreach-1935"},"foreach-Schleife einfach erkl\xe4rt"))))}m.isMDXComponent=!0}}]);