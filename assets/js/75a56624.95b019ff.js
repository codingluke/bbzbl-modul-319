"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[1027],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return n?t.createElement(f,s(s({ref:r},u),{},{components:n})):t.createElement(f,s({ref:r},u))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85789:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=n(87462),a=(n(67294),n(3905));const i={},s="7 - Arrays und for(each)",o={unversionedId:"7a-for-arrays/index",id:"7a-for-arrays/index",title:"7 - Arrays und for(each)",description:"- Sie k\xf6nnen mittels Arrays effizient mit mehreren Werte des gleichen Datentyps",source:"@site/docs/7a-for-arrays/index.md",sourceDirName:"7a-for-arrays",slug:"/7a-for-arrays/",permalink:"/bbzbl-modul-319/docs/7a-for-arrays/",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/7a-for-arrays/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"W\xfcrfelspiel",permalink:"/bbzbl-modul-319/docs/6a-spiele/wuerfelspiel"},next:{title:"Arrays / Listen",permalink:"/bbzbl-modul-319/docs/7a-for-arrays/arrays"}},l={},c=[{value:"\ud83d\udcd6 Themen",id:"-themen",level:2},{value:"\ud83d\udcfa Erkl\xe4rvideos von Studyflix",id:"-erkl\xe4rvideos-von-studyflix",level:2}],u=(d="DocCardList",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const m={toc:c},p="wrapper";function f(e){let{components:r,...n}=e;return(0,a.kt)(p,(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"7---arrays-und-foreach"},"7 - Arrays und for(each)"),(0,a.kt)("admonition",{title:"Ziele",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Sie k\xf6nnen mittels Arrays effizient mit mehreren Werte des gleichen Datentyps\nprogrammieren."),(0,a.kt)("li",{parentName:"ul"},"Sie k\xf6nnen die for Kontrollstruktur nutzen, die besonders f\xfcr das Durchlaufen\nvon Arrays hilfreich ist."))),(0,a.kt)("p",null,"Wir haben Datentypen kennengelernt und wissen, wie wir Variablen anlegen k\xf6nnen.\nDamit k\xf6nnen wir Werte zwischenspeichern und sp\xe4ter wieder darauf zur\xfcckgreifen."),(0,a.kt)("p",null,"Stellen Sie sich nun einmal vor, Sie schreiben ein Programm, mit dem Sie\nMesswerte erfassen. Alle Messwerte haben den gleichen Datentyp. Wenn wir\nannehmen, dass Sie 100 solche Messwerte speichern m\xf6chten, dann k\xf6nnten Sie das\nso machen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"int wert1;\nint wert2;\nint wert3;\n// immer weiter so\nint wert100;\n")),(0,a.kt)("p",null,"Das w\xe4re sicher m\xf6glich, aber sehr aufwendig und nicht gut umsetzbar. M\xf6chten\nSie jetzt die Messwerte auslesen (\xfcber eine ",(0,a.kt)("strong",{parentName:"p"},"fiktive Messmethode\n",(0,a.kt)("inlineCode",{parentName:"strong"},"mess_methode")),"), dann k\xf6nnte das so aussehen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"wert1 = mess_methode();\nwert2 = mess_methode();\nwert3 = mess_methode();\n// und so weiter\nwert100 = mess_methode();\n")),(0,a.kt)("p",null,"Wenn Sie jetzt zum Beispiel den Durchschnitt der Messwerte ausrechnen m\xf6chten,\ndann schreiben Sie einen Code wie diesen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"int summe = wert1 + wert2 + wert3 + /* ... */ + wert100;\nint durchschnitt = summe / 100;\n")),(0,a.kt)("p",null,"Soll das Programm jetzt noch so erweitert werden, dass Sie mehr Messwerte\nerfassen k\xf6nnen, zum Beispiel 1000, dann l\xe4uft es endg\xfcltig aus dem Ruder."),(0,a.kt)("p",null,"Wie man das Program trotzdem z\xe4hmen kann, erfahren Sie im n\xe4chsten Kapitel."),(0,a.kt)("h2",{id:"-themen"},"\ud83d\udcd6 Themen"),(0,a.kt)(u,{mdxType:"DocCardList"}),(0,a.kt)("h2",{id:"-erkl\xe4rvideos-von-studyflix"},"\ud83d\udcfa Erkl\xe4rvideos von Studyflix"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://studyflix.de/informatik/java-array-1898"},"Array einfach erkl\xe4rt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://studyflix.de/informatik/for-schleife-226"},"for-Schleife einfach erkl\xe4rt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://studyflix.de/informatik/java-foreach-1935"},"foreach-Schleife einfach erkl\xe4rt"))))}f.isMDXComponent=!0}}]);