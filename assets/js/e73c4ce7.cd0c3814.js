"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[1910],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(t),g=r,c=u["".concat(d,".").concat(g)]||u[g]||m[g]||i;return t?a.createElement(c,l(l({ref:n},s),{},{components:t})):a.createElement(c,l({ref:n},s))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},11274:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={sidebar_position:3,keywords:["pdf"]},l="Text mit StdInput einlesen",o={unversionedId:"2a-eva/aufgabe2-eingabe",id:"2a-eva/aufgabe2-eingabe",title:"Text mit StdInput einlesen",description:"- Informieren Sie den Benutzer, dass er nun seinen Namen eintippen soll.",source:"@site/docs/2a-eva/aufgabe2-eingabe.md",sourceDirName:"2a-eva",slug:"/2a-eva/aufgabe2-eingabe",permalink:"/bbzbl-modul-319/docs/2a-eva/aufgabe2-eingabe",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/2a-eva/aufgabe2-eingabe.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,keywords:["pdf"]},sidebar:"tutorialSidebar",previous:{title:"Bibliothek MyTools einbinden",permalink:"/bbzbl-modul-319/docs/2a-eva/aufgabe1-bibliothek-einbinden"},next:{title:"Zusatz - Scanner",permalink:"/bbzbl-modul-319/docs/2a-eva/aufgabe-scanner"}},d={},p=[{value:"Weitere Datentypen einlesen",id:"weitere-datentypen-einlesen",level:3}],s={toc:p},u="wrapper";function m(e){let{components:n,...i}=e;return(0,r.kt)(u,(0,a.Z)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"text-mit-stdinput-einlesen"},"Text mit ",(0,r.kt)("inlineCode",{parentName:"h1"},"StdInput")," einlesen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Informieren Sie den Benutzer, dass er nun seinen Namen eintippen soll."),(0,r.kt)("li",{parentName:"ul"},"Legen Sie eine String-Variable an, um die Antwort zu speichern."),(0,r.kt)("li",{parentName:"ul"},"Die Funktion, um Daten eingeben zu k\xf6nnen, ist in der Klasse mit dem Namen\n",(0,r.kt)("inlineCode",{parentName:"li"},"StdInput")," enthalten.")),(0,r.kt)("admonition",{title:"Automatische Vervollst\xe4ndigung",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Fangen Sie an zu schreiben und nach \xabStd\xbb dr\xfccken Sie ",(0,r.kt)("em",{parentName:"p"},"CTRL+LEERTASTE"),", worauf\nautomatisch die Klasse vervollst\xe4ndigt wird und der korrekte Import f\xfcr die\nKlasse hinzugef\xfcgt wird.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="EinUndAusgabe.java"',title:'"EinUndAusgabe.java"'},'// highlight-next-line\nimport mytools.StdInput;\n\npublic class EinUndAusgabe {\n  public static void main (String[] args) {\n    System.out.println("Please type your name:");\n    // highlight-next-line\n    String name = StdInput // hier fehlt noch was!\n  }\n}\n')),(0,r.kt)("p",null,"Nun wurde Ihre Klasse gerade zu oberst mit folgender Zeile erg\xe4nzt, die daf\xfcr\nsorgt, dass ",(0,r.kt)("inlineCode",{parentName:"p"},"StdInput")," in Ihrer Klasse genutzt werden kann:\n",(0,r.kt)("inlineCode",{parentName:"p"},"import mytools.StdInput;")),(0,r.kt)("p",null,"Geben Sie direkt hinter ",(0,r.kt)("inlineCode",{parentName:"p"},"StdInput")," ",(0,r.kt)("strong",{parentName:"p"},"einen Punkt")," ein. Nun erscheint folgender\nDialog, \xfcber welchen Sie die ",(0,r.kt)("strong",{parentName:"p"},"Methoden der Klasse ",(0,r.kt)("inlineCode",{parentName:"strong"},"StdInput")," aufrufen")," k\xf6nnen:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(84528).Z,width:"641",height:"262"})),(0,r.kt)("admonition",{title:"Methodenzugriff \xfcber Punkt",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Auf statische ",(0,r.kt)("strong",{parentName:"p"},"Methoden")," einer statischen Klasse wird immer ",(0,r.kt)("strong",{parentName:"p"},"\xfcber einen\nPunkt")," zugegriffen."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"KlassenName.methodenName([optionaleParemeter]);\n//         ^\n//   wichtiger Punkt!\n"))),(0,r.kt)("p",null,"Da wir einen String-Wert einlesen wollen, w\xe4hlen gleich den obersten Eintrag\n",(0,r.kt)("inlineCode",{parentName:"p"},"readString()")," und schliessen die Zeile mit einem Semikolon ",(0,r.kt)("inlineCode",{parentName:"p"},";")," ab. Als n\xe4chstes\ngeben wir den eingegebenen Namen aus, wie in der Programm\xfcbersicht gezeigt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="EinUndAusgabe.java"',title:'"EinUndAusgabe.java"'},'import mytools.StdInput;\n\npublic class EinUndAusgabe {\n  public static void main (String[] args) {\n    System.out.println("Please type your name:");\n    // highlight-start\n    String name = StdInput.readString();\n    System.out.println("Your name is " + name);\n    // highlight-end\n  }\n}\n')),(0,r.kt)("p",null,"F\xfchren Sie das Programm aus. Funktioniert es? Begr\xfcsst Sie Ihr Programm mit dem\neingegebenen Namen?"),(0,r.kt)("admonition",{title:"Strings Zusammensetzen",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Mit einem ",(0,r.kt)("inlineCode",{parentName:"li"},"+")," k\xf6nnen Strings Zusammensetzen werden"),(0,r.kt)("li",{parentName:"ul"},"Der erste String sollte mit einem Leerzeichen Enden, wieso?")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Strings zusammensetzen"',title:'"Strings','zusammensetzen"':!0},'String name = "Herr Lehrer";\nSystem.out.println("Your name is " + name);\n//                              ^ Leerzeichen!\n//                  Your name is Herr Lehrer\n\nSystem.out.println("Your name is" + name);\n//                  Your name isHerr Lehrer\n'))),(0,r.kt)("h3",{id:"weitere-datentypen-einlesen"},"Weitere Datentypen einlesen"),(0,r.kt)("p",null,"Die Bibliothek unterst\xfctzt verschiedene Datentypen, wie aus der Tabelle der\nMethoden ersichtlich ist. Anstelle von ",(0,r.kt)("inlineCode",{parentName:"p"},"readString()")," rufen Sie demnach\nlediglich eine andere ",(0,r.kt)("inlineCode",{parentName:"p"},"read..."),"-Methode auf."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Datentyp"),(0,r.kt)("th",{parentName:"tr",align:null},"Methode"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"StdInput.readInt()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"char"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"StdInput.readChar()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"StdInput.readString()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"double"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"StdInput.readDouble()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"StdInput.readBoolean()"))))),(0,r.kt)("admonition",{title:"Datentypen einlesen",type:"info"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int     ganzZahl       = StdInput.readInt();\nchar    character      = StdInput.readChar();\nString  text           = StdInput.readString();\ndouble  gleitKommaZahl = StdInput.readDouble();\nboolean bool           = StdInput.readBoolean();\n"))))}m.isMDXComponent=!0},84528:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/methoden-autocomplete-12e80e5750ed08081cbcf069bc48fe75.png"}}]);