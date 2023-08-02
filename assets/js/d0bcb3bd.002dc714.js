"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[1490],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>g});var n=t(67294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=l,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return t?n.createElement(g,o(o({ref:r},s),{},{components:t})):n.createElement(g,o({ref:r},s))}));function g(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},52799:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(87462),l=(t(67294),t(3905));const a={},o="W\xf6rter suchen",i={unversionedId:"1a-grundlagen-algorithmus/algorithmen-woerter-suchen",id:"1a-grundlagen-algorithmus/algorithmen-woerter-suchen",title:"W\xf6rter suchen",description:"In solchen R\xe4tseln sind in einem oft quadratischen Feld W\xf6rter versteckt, die",source:"@site/docs/1a-grundlagen-algorithmus/algorithmen-woerter-suchen.md",sourceDirName:"1a-grundlagen-algorithmus",slug:"/1a-grundlagen-algorithmus/algorithmen-woerter-suchen",permalink:"/bbzbl-modul-319/docs/1a-grundlagen-algorithmus/algorithmen-woerter-suchen",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/1a-grundlagen-algorithmus/algorithmen-woerter-suchen.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sprecher suchen",permalink:"/bbzbl-modul-319/docs/1a-grundlagen-algorithmus/algorithmen-sprecher-suchen"},next:{title:"1b - Hello World Programm",permalink:"/bbzbl-modul-319/docs/1b-hello-world/"}},u={},c=[{value:"Aufgabe",id:"aufgabe",level:2}],s={toc:c},d="wrapper";function p(e){let{components:r,...t}=e;return(0,l.kt)(d,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"w\xf6rter-suchen"},"W\xf6rter suchen"),(0,l.kt)("p",null,"In solchen R\xe4tseln sind in einem oft quadratischen Feld W\xf6rter versteckt, die\nhorizontal, vertikal oder diagonal (auch r\xfcckw\xe4rts) geschrieben sind. In einem\nkleinen Feld lassen sich gesuchte W\xf6rter noch schnell selbst finden. Schon bei\n50x20 Zeichen ist es aber sehr erm\xfcdend."),(0,l.kt)("div",{class:"grid"},(0,l.kt)("div",null,(0,l.kt)("h2",{id:"aufgabe"},"Aufgabe"),(0,l.kt)("p",null,"Erl\xe4utern Sie pr\xe4zise, wie Sie einen Suchknecht instruieren k\xf6nnten, damit er\nalle versteckten W\xf6rter findet."),(0,l.kt)("p",null,"Versteckt wurden folgende vier W\xf6rter potentiell in alle Richtungen:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"LEIM"),(0,l.kt)("li",{parentName:"ul"},"INFORMATIK"),(0,l.kt)("li",{parentName:"ul"},"KURS"),(0,l.kt)("li",{parentName:"ul"},"EIMER"))),(0,l.kt)("div",null,(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Buchstabenquadrat")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ASDFERFGTHZJUKIJERTX\nTIERNKMENOAERSOIMMEL\nKJHZRUINNVHMGSHEBOLE\nOKDFJRUEHZCCRBOHDARI\nIRGENSJISEREMIELIERN\nLPOUJNASHZRTEUFIFNEF\nEHSZEURKITAMROFNIASF\nAGREHZTUECINBHEEIOWU\n")))))}p.isMDXComponent=!0}}]);