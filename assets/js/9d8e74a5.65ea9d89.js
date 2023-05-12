"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[701],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>p});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),d=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(t),p=a,k=c["".concat(m,".").concat(p)]||c[p]||u[p]||i;return t?r.createElement(k,l(l({ref:n},s),{},{components:t})):r.createElement(k,l({ref:n},s))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var m in n)hasOwnProperty.call(n,m)&&(o[m]=n[m]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},49061:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(87462),a=(t(67294),t(3905));const i={},l="Code-Konventionen",o={unversionedId:"1b-hello-world/aufgabe5-konventionen",id:"1b-hello-world/aufgabe5-konventionen",title:"Code-Konventionen",description:"Wenn programmiert wird, kommen meist eine ganze Reihe an Konventionen zur Anwendung. Je nach Betrieb k\xf6nnen die sich erheblich unterscheiden. Wir stellen hier einige wichtige Konventionen vor.",source:"@site/docs/1b-hello-world/aufgabe5-konventionen.md",sourceDirName:"1b-hello-world",slug:"/1b-hello-world/aufgabe5-konventionen",permalink:"/bbzbl-modul-319/docs/1b-hello-world/aufgabe5-konventionen",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Klammerpaare und Bl\xf6cke",permalink:"/bbzbl-modul-319/docs/1b-hello-world/aufgabe4-klammern-bloecke"},next:{title:"2a - Das EVA-Prinzip",permalink:"/bbzbl-modul-319/docs/2a-eva/"}},m={},d=[{value:"<strong>Keine Umlaute</strong> im Code",id:"keine-umlaute-im-code",level:2},{value:"Klassennamen",id:"klassennamen",level:2},{value:"Methodennamen",id:"methodennamen",level:2},{value:"Codebl\xf6cke einr\xfccken",id:"codebl\xf6cke-einr\xfccken",level:2},{value:"UTF-8 als Standard-Encoding",id:"utf-8-als-standard-encoding",level:2},{value:"Kommentare",id:"kommentare",level:2},{value:"Einzeiliger Kommentar",id:"einzeiliger-kommentar",level:3},{value:"Mehrzeiliger Kommentar",id:"mehrzeiliger-kommentar",level:3},{value:"JavaDoc Kommentare",id:"javadoc-kommentare",level:3},{value:"\ud83d\udcdd Auftrag: Kommentieren Sie Ihr \xabHelloWorld\xbb",id:"-auftrag-kommentieren-sie-ihr-helloworld",level:2}],s={toc:d};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"code-konventionen"},"Code-Konventionen"),(0,a.kt)("p",null,"Wenn programmiert wird, kommen meist eine ganze Reihe an Konventionen zur Anwendung. Je nach Betrieb k\xf6nnen die sich erheblich unterscheiden. Wir stellen hier einige wichtige Konventionen vor."),(0,a.kt)("h2",{id:"keine-umlaute-im-code"},(0,a.kt)("strong",{parentName:"h2"},"Keine Umlaute")," im Code"),(0,a.kt)("p",null,"Programmcode ist wenn m\xf6glich in englisch gehalten.\nUmlaute k\xf6nnen auf verschiedenen Systeme zu Fehlern f\xfchren und sind nicht international verst\xe4ndlich.\nDesswegen sollen Umlaute beim Programmieren vermieden werden!"),(0,a.kt)("h2",{id:"klassennamen"},"Klassennamen"),(0,a.kt)("p",null,"Jede ",(0,a.kt)("strong",{parentName:"p"},"Klasse")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"beginnt mit einem ",(0,a.kt)("strong",{parentName:"li"},"Grossbuchstaben")," "),(0,a.kt)("li",{parentName:"ul"},"hat einen ",(0,a.kt)("inlineCode",{parentName:"li"},"AusdrucksstarkenNamen")," in \ud83d\udc2b ",(0,a.kt)("a",{parentName:"li",href:"http://wiki.c2.com/?UpperCamelCase"},(0,a.kt)("inlineCode",{parentName:"a"},"UpperCamelCase")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public MeinTollerKlasseName {\n\n}\n")),(0,a.kt)("h2",{id:"methodennamen"},"Methodennamen"),(0,a.kt)("p",null,"Jede ",(0,a.kt)("strong",{parentName:"p"},"Methode")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"beginnt mit einem ",(0,a.kt)("strong",{parentName:"li"},"Kleinbuchstaben")," "),(0,a.kt)("li",{parentName:"ul"},"hat einen ",(0,a.kt)("inlineCode",{parentName:"li"},"ausdrucksstarkenNamen")," in \ud83d\udc2b ",(0,a.kt)("a",{parentName:"li",href:"http://wiki.c2.com/?LowerCamelCase"},(0,a.kt)("inlineCode",{parentName:"a"},"lowerCamelCase")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public MeinTollerKlasseName {\n  public void meinTollerMethodenName() {\n    \n  }\n}\n")),(0,a.kt)("h2",{id:"codebl\xf6cke-einr\xfccken"},"Codebl\xf6cke einr\xfccken"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bl\xf6cke ",(0,a.kt)("inlineCode",{parentName:"li"},"{ }")," werden ",(0,a.kt)("strong",{parentName:"li"},"einger\xfcckt")," ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u2328\ufe0f Ctrl-Shift-F"),(0,a.kt)("li",{parentName:"ul"},"\ud83c\udf4e Command-Shift-F")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public MeinTollerKlasseName {\n  // Dieser Block ist einger\xfcckt\n  // highlight-start\n  public void meinTollerMethodenName() {\n    \n  }\n  // highlight-end\n}\n")),(0,a.kt)("h2",{id:"utf-8-als-standard-encoding"},"UTF-8 als Standard-Encoding"),(0,a.kt)("p",null,"Wenn UTF-8 verwendet wird, sollten theoretisch auch Umlaute auf allen Systemen funktionieren. Diese werden jedoch trotzdem vermieden ;) Sie gelten als schlechter Stiel und geben abzug!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Standard-Encoding ",(0,a.kt)("inlineCode",{parentName:"li"},"UTF-8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Preferences > General > Workspace")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"UTF-8"))),(0,a.kt)("h2",{id:"kommentare"},"Kommentare"),(0,a.kt)("p",null,"Es gibt gute Gr\xfcnde f\xfcr Kommentare:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"eine ",(0,a.kt)("strong",{parentName:"li"},"\xf6ffentliche Methode")," f\xfcr JavaDoc kurz Beschreiben"),(0,a.kt)("li",{parentName:"ul"},"erl\xe4utern ",(0,a.kt)("strong",{parentName:"li"},"warum")," eine Entscheidung getroffen wurde"),(0,a.kt)("li",{parentName:"ul"},"TODO: Kommentare f\xfcr Infos was man in Zukunft verbessern sollte")),(0,a.kt)("admonition",{title:"Es gibt aber auch schlechte Kommentare!",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\ud83d\ude31 Kommentare veralten schnell! Nichts ist schlimmer als ein Kommentar der nicht mehr stimmt")),(0,a.kt)("p",{parentName:"admonition"},"Kommentare ",(0,a.kt)("strong",{parentName:"p"},"sollten nicht beschreiben was der Programmcode im detail macht"),"!\nDas steht im Code. Wenn daf\xfcr Kommentare n\xf6tig sind, sollte der Code \xfcberdacht werden."),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Kleinere Methoden wo der Namen bereits sagt was es macht"),(0,a.kt)("li",{parentName:"ol"},"Komplexe Abh\xe4ngigkeiten entkoppeln"))),(0,a.kt)("h3",{id:"einzeiliger-kommentar"},"Einzeiliger Kommentar"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Ich bin ein einzeiliger Kommentar\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kommentare beginnen mit Zwei Fronslashes ",(0,a.kt)("inlineCode",{parentName:"li"},"//")," und gelten f\xfcr die ganze Zeile danach"),(0,a.kt)("li",{parentName:"ul"},"Man kann also nach einem ",(0,a.kt)("inlineCode",{parentName:"li"},"//")," kein ausf\xfchrbaren code mehr schreiben")),(0,a.kt)("h3",{id:"mehrzeiliger-kommentar"},"Mehrzeiliger Kommentar"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"/* \nIch \nbin \nein \nMehrzeiliger \nKommentar\n*/\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mehrzeilige Kommentare beginnen mit ",(0,a.kt)("inlineCode",{parentName:"li"},"/*")," und enden mit ",(0,a.kt)("inlineCode",{parentName:"li"},"*/")),(0,a.kt)("li",{parentName:"ul"},"Jeglicher Code dazwischen wird nie ausgef\xfchrt!")),(0,a.kt)("h3",{id:"javadoc-kommentare"},"JavaDoc Kommentare"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'/*\n * Ein JavaDoc Klassen Kommentar wird angezeigt, \n * wenn die Methode von Eclipse vorgeschlagen wird.\n * Er steht immer direkt vor der Klasse.\n * \n * @author HerrLehrer\n * @version 1.0.0\n */\npublic MeinTollerKlasseName {\n\n  /*\n   * Die diese Methode wird ganz tolle Sachen machen\n   * die man dann irgend wann auch verwenden kann.\n   * \n   * @param einParameter Parameter k\xf6nnen so beschrieben werden\n   * @return es wird einfach nur der "einParameter" zur\xfcckgegeben\n   */\n  public String meinTollerMethodenName(String einParameter) {\n    // TODO: Hier wird noch was tolles programmiert\n    return einParameter;\n  }\n\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JavaDoc Methodenkommentare beschreiben Methoden so, dass direkt eine Dokumentation daraus generiert werden kann."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Javadoc"},"\ud83d\udd17 JavaDoc Beschreibung auf Wikipedia"))),(0,a.kt)("h2",{id:"-auftrag-kommentieren-sie-ihr-helloworld"},"\ud83d\udcdd Auftrag: Kommentieren Sie Ihr \xabHelloWorld\xbb"),(0,a.kt)("p",null,"Beschreiben Sie mit Kommentaren Ihr \xabHelloWorld\xbb-Programm, so dass Sie sich sp\xe4ter wieder an alle Schritte der Erstellung erinnern."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Diese Kommentare sind zwar nicht sinnvoll f\xfcr die Softwareentwicklung"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Hier sind sie jedoch sinnvoll f\xfcr sie selbst zur Dokumentation!"))))}u.isMDXComponent=!0}}]);