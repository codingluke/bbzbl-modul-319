"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:2,keywords:["pdf"]},i="do { } while",o={unversionedId:"5a-while/dowhile",id:"5a-while/dowhile",title:"do { } while",description:'Zus\xe4tzlich existiert eine sogenannt "flussgesteuerte" Variante von while.',source:"@site/docs/5a-while/dowhile.md",sourceDirName:"5a-while",slug:"/5a-while/dowhile",permalink:"/bbzbl-modul-319/docs/5a-while/dowhile",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/5a-while/dowhile.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:["pdf"]},sidebar:"tutorialSidebar",previous:{title:"while",permalink:"/bbzbl-modul-319/docs/5a-while/while"},next:{title:"for",permalink:"/bbzbl-modul-319/docs/5a-while/for"}},u={},s=[{value:"\ud83d\udcdd Aufgaben",id:"-aufgaben",level:2},{value:"Fahrenheit Umrechner",id:"fahrenheit-umrechner",level:3},{value:"Beispiel Werte zur Pr\xfcfung",id:"beispiel-werte-zur-pr\xfcfung",level:4},{value:"Guthaben aufbrauchen",id:"guthaben-aufbrauchen",level:3},{value:"Passwort-Pr\xfcfung",id:"passwort-pr\xfcfung",level:3}],d={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"do---while"},(0,a.kt)("inlineCode",{parentName:"h1"},"do { } while")),(0,a.kt)("p",null,'Zus\xe4tzlich existiert eine sogenannt "flussgesteuerte" Variante von ',(0,a.kt)("inlineCode",{parentName:"p"},"while"),".\nDiese Variante ",(0,a.kt)("strong",{parentName:"p"},"beginnt mit dem Schl\xfcsselwort ",(0,a.kt)("inlineCode",{parentName:"strong"},"do")),", und das ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," rutscht\nan den Schluss."),(0,a.kt)("div",{class:"grid"},(0,a.kt)("div",null,(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="do { } while Code-Beispiel"',title:'"do',"{":!0,"}":!0,while:!0,'Code-Beispiel"':!0},'int x = 10;\ndo {\n    System.out.println("value of x: " + x);\n    x = x-1;\n} while(x > 0);\n'))),(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Ablaufdiagram")),(0,a.kt)("mermaid",{value:"stateDiagram-v2\n    direction LR\n    do: { Code-Block }\n    state bedingung <<choice>>\n    [*] --\x3e do\n    state do..while {\n        do --\x3e bedingung\n        bedingung --\x3e do: true\n    }\n    bedingung --\x3e [*]: false"}))),(0,a.kt)("p",null,"Der ",(0,a.kt)("inlineCode",{parentName:"p"},"do"),"-Block in den gescheiften Klammern ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")," wird ",(0,a.kt)("strong",{parentName:"p"},"immer einmal\nausgef\xfchrt"),", bevor die Bedingung \xfcberpr\xfcft wird."),(0,a.kt)("p",null,"Ist die Bedingung erf\xfcllt, wird der do-Block erneut ausgef\xfchrt, solange bis die\nBedingung x > 0 nicht mehr erf\xfcllt ist. Die ",(0,a.kt)("inlineCode",{parentName:"p"},"do..while")," Schlaufe ist dadurch\nunerscheidlich zur ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," Schlaufe, dass der Code-Block immer ",(0,a.kt)("strong",{parentName:"p"},"mindestens ein\nMal ausgef\xfchrt wird"),"."),(0,a.kt)("admonition",{title:"do..while",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Der Code-Block wird ",(0,a.kt)("strong",{parentName:"li"},"immer zuerst einmal ausgef\xfchrt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Solange-die-Bedingung-zutrifft"))," wird der Code-Block wiederholt\nausgef\xfchrt."))),(0,a.kt)("h2",{id:"-aufgaben"},"\ud83d\udcdd Aufgaben"),(0,a.kt)("h3",{id:"fahrenheit-umrechner"},"Fahrenheit Umrechner"),(0,a.kt)("p",null,"Schreiben Sie ein Programm, welches eine Auflistung der Celsiuswerte von -20 bis\n100 Grad in 5er Schritten in Fahrenheit ausgibt."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Die Formel dazu lautet:"',title:'"Die',Formel:!0,dazu:!0,'lautet:"':!0},"fahrenheit = (9.0/5.0) * celsius + 32\n")),(0,a.kt)("h4",{id:"beispiel-werte-zur-pr\xfcfung"},"Beispiel Werte zur Pr\xfcfung"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Celsius"),(0,a.kt)("th",{parentName:"tr",align:null},"Fahrenheit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Gefrierpunkt"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"32")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kochpunkt"),(0,a.kt)("td",{parentName:"tr",align:null},"100"),(0,a.kt)("td",{parentName:"tr",align:null},"212")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Musterl\xf6sung:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="ACFahrenheit.java"',title:'"ACFahrenheit.java"'},'public class ACFahrenheit {\n\n    public static void main(String[] args) {\n        double celsius = -20;\n        double fahrenheit;\n\n        do {\n            fahrenheit = (9.0 / 5.0) * celsius + 32;\n            System.out.println("celsius " + celsius + " = fahrenheit " + fahrenheit);\n            celsius = celsius + 5;\n        } while (celsius <= 100);\n    }\n\n}\n'))),(0,a.kt)("h3",{id:"guthaben-aufbrauchen"},"Guthaben aufbrauchen"),(0,a.kt)("p",null,"Schreiben Sie ein Programm, welches zuerst ein Startguthaben von 100.00 Franken\nin einer Variablen festlegt."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nun soll jeweils wiederholt der Benutzer \xfcber sein aktuelles Guthaben\ninformiert und nach einem Betrag gefragt werden, den man abheben m\xf6chte."),(0,a.kt)("li",{parentName:"ul"},"Dieser Betrag wird so lange abgezogen, bis das Guthaben 0 oder weniger\nbetr\xe4gt."),(0,a.kt)("li",{parentName:"ul"},"Am Schluss soll \xabSorry, your balance now is zero or below\xbb auf die Konsole\nausgegeben werden.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Musterl\xf6sung:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="AD1Balance.java"',title:'"AD1Balance.java"'},'import mytools.StdInput;\n\npublic class AD1Balance {\n    public static void main(String[] args) {\n\n        double balance = 100.0;\n\n        do {\n            System.out.println("Your credit is " + balance + ", please enter the amount to withdraw");\n            double amount = StdInput.readDouble();\n            balance = balance - amount;\n        } while (balance > 0);\n\n        System.out.println("Sorry, your balance now is zero or below");\n\n    }\n}\n'))),(0,a.kt)("h3",{id:"passwort-pr\xfcfung"},"Passwort-Pr\xfcfung"),(0,a.kt)("p",null,"Erstellen Sie ein Programm, welches mittels ",(0,a.kt)("inlineCode",{parentName:"p"},"do..while"),' nach dem Passwort\n"abrakadabra" fragt.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Solange das Passwort falsch ist, soll die Anforderung wiederholt werden."),(0,a.kt)("li",{parentName:"ul"},'Sobald das Passwort "abrakadabra" richtig eingegeben wurde, soll dem Benutzer\ndie Best\xe4tigung \u201eLogged in!\u201c angezeigt werden.')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Falls es nicht klappt \u2794 if-Blatt lesen \u2794 Regeln f\xfcr String!")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Musterl\xf6sung:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="AD2Password.java"',title:'"AD2Password.java"'},'import mytools.StdInput;\n\npublic class AD2Password {\n\n    public static void main(String[] args) {\n        String password = "abrakadabra";\n        String entry = "";\n\n        do {\n\n            System.out.print("Please enter the password: ");\n            entry = StdInput.readString();\n        } while (!password.equals(entry));\n\n        System.out.println("Logged in!");\n    }\n}\n'))))}c.isMDXComponent=!0}}]);