"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[2395],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),o=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=o(e.components);return r.createElement(u.Provider,{value:n},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=o(t),g=a,p=d["".concat(u,".").concat(g)]||d[g]||h[g]||i;return t?r.createElement(p,s(s({ref:n},c),{},{components:t})):r.createElement(p,s({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=g;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var o=2;o<i;o++)s[o]=t[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},50331:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=t(87462),a=(t(67294),t(3905));const i={sidebar_position:2,keywords:["pdf"]},s="Switch - Kontrollstruktur",l={unversionedId:"3a-konditionen/switch-kontrollstruktur",id:"3a-konditionen/switch-kontrollstruktur",title:"Switch - Kontrollstruktur",description:"Wir haben bereits die if-Verzweigung kennengelernt. Dort kann anhand einer",source:"@site/docs/3a-konditionen/switch-kontrollstruktur.md",sourceDirName:"3a-konditionen",slug:"/3a-konditionen/switch-kontrollstruktur",permalink:"/bbzbl-modul-319/docs/3a-konditionen/switch-kontrollstruktur",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/3a-konditionen/switch-kontrollstruktur.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:["pdf"]},sidebar:"tutorialSidebar",previous:{title:"if - Kontrollstruktur",permalink:"/bbzbl-modul-319/docs/3a-konditionen/if-kontrollstruktur"},next:{title:"Weitere \xdcbungen",permalink:"/bbzbl-modul-319/docs/3a-konditionen/uebungen"}},u={},o=[{value:"\ud83d\udcdd Auftrag 1",id:"-auftrag-1",level:2},{value:"\ud83d\udcdd Auftrag 2",id:"-auftrag-2",level:2},{value:"\ud83d\udcdd Auftrag 3",id:"-auftrag-3",level:2},{value:"Extra: <code>switch</code> oder <code>if</code> ?",id:"extra-switch-oder-if-",level:2}],c={toc:o},d="wrapper";function h(e){let{components:n,...i}=e;return(0,a.kt)(d,(0,r.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"switch---kontrollstruktur"},"Switch - Kontrollstruktur"),(0,a.kt)("p",null,"Wir haben bereits die if-Verzweigung kennengelernt. Dort kann anhand einer\nBedingung eine Wahl zwischen zwei M\xf6glichkeiten getroffen werden. Das ist eine\nsehr gute M\xf6glichkeit, ein Programm flexibel zu machen."),(0,a.kt)("p",null,"Aber manchmal gibt es Situationen, bei denen man zwischen ",(0,a.kt)("strong",{parentName:"p"},"mehr als zwei\nM\xf6glichkeiten")," unterscheiden m\xf6chte. So eine Situation l\xe4sst sich l\xf6sen, indem\nman etliche ifs nacheinander h\xe4ngt."),(0,a.kt)("p",null,"Hier ein Auszug aus einer \xdcbungsaufgabe, in der ein W\xfcrfelspiel implementiert\nwurde:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"int number = rollDice();\nif (number == 1) {\n    countOne++;\n} else if (number == 2) {\n    countTwo++;\n} else if (number == 3) {\n    countThree++;\n} else if (number == 4) {\n    countFour++;\n} else if (number == 5) {\n    countFive++;\n} else if (number == 6) {\n    countSix++;\n}\ncountAll++;\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Das obere Beispiel ist nicht alleine lauff\xe4hig, daf\xfcr fehlt die Methode\n",(0,a.kt)("inlineCode",{parentName:"p"},"rollDice()")," sowie die Variable ",(0,a.kt)("inlineCode",{parentName:"p"},"countOne"),".")),(0,a.kt)("p",null,"F\xfcr solche Mehrfachverzweigungen gibt es auch die Kontrollstruktur ",(0,a.kt)("inlineCode",{parentName:"p"},"switch"),".\nSwitch erm\xf6glicht es, ",(0,a.kt)("strong",{parentName:"p"},"auf genaue"),", unterschiedliche Werte zu reagieren\n(",(0,a.kt)("inlineCode",{parentName:"p"},"=="),"). Dabei k\xf6nnen die Wert numerisch oder ein String sein. Das Muster sieht\nso aus:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"switch (<Ausdruck>) {\n    case value:\n        <Anweisung>;\n        break;\n    case value:\n        <Anweisung>;\n        break;\n    default:\n        <Anweisung>;\n        break;\n}\n")),(0,a.kt)("p",null,"Nach dem Schl\xfcsselwort steht in runden Klammern eine Variable, deren Werte in\nden anschliessenden case-Bl\xf6cken ausgewertet werden. Besteht f\xfcr den aktuellen\nWert der Variablen ein passender case-Block, springt das Programm dort hinein,\nf\xfchrt die Anweisungen aus, und springt aufgrund der break-Anweisung aus dem\nswitch heraus (ohne break w\xfcrden alle nachfolgenden Bl\xf6cke auch durchlaufen).\nDas default am Schluss erm\xf6glicht es, Anweisungen f\xfcr alle anderen F\xe4lle\nfestzulegen, in denen kein exakter Wert in einem case steht."),(0,a.kt)("p",null,"Ein konkretes Beispiel sieht so aus:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class SwitchDemo {\n    public static void main(String[] args) {\n        int month = 8;\n        String monthString;\n        switch (month) {\n            case 1:\n                monthString = "January";\n                break;\n            case 2:\n                monthString = "February";\n                break;\n            //... andere F\xe4lle hier ausgelassen\n            case 8:\n                monthString = "August";\n                break;\n            //... andere F\xe4lle hier ausgelassen\n            default:\n                monthString = "Invalid month";\n                break;\n        }\n        System.out.println(monthString);\n    }\n}\n')),(0,a.kt)("h2",{id:"-auftrag-1"},"\ud83d\udcdd Auftrag 1"),(0,a.kt)("p",null,"Erstellen Sie eine Klasse, welche f\xfcr die Eingabe einer (vereinfachten, ganzen)\nNote die entsprechende textuelle Bewertung ausgibt resp. Fehlermeldung bei\nung\xfcltiger Note:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"sehr gut"),(0,a.kt)("li",{parentName:"ul"},"gut"),(0,a.kt)("li",{parentName:"ul"},"gen\xfcgend"),(0,a.kt)("li",{parentName:"ul"},"ungen\xfcgend"),(0,a.kt)("li",{parentName:"ul"},"schwach"),(0,a.kt)("li",{parentName:"ul"},"sehr schwach"),(0,a.kt)("li",{parentName:"ul"},"falsche Eingabe")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Musterl\xf6sung"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import mytools.StdInput;\n\npublic class A1GradesToText {\n\n    public static void main(String[] args) {\n\n        System.out.print("Note eingeben: ");\n        int grade = StdInput.readInt();\n        String gradeText = "";\n\n        switch (grade) {\n        case 1:\n            gradeText = "sehr schwach";\n            break;\n        case 2:\n            gradeText = "schwach";\n            break;\n        case 3:\n            gradeText = "ungen\xfcgend";\n            break;\n        case 4:\n            gradeText = "gen\xfcgend";\n            break;\n        case 5:\n            gradeText = "gut";\n            break;\n        case 6:\n            gradeText = "sehr gut";\n            break;\n        default:\n            gradeText = "falsche Eingabe";\n            break;\n        }\n        System.out.println(gradeText);\n    }\n\n}\n'))),(0,a.kt)("h2",{id:"-auftrag-2"},"\ud83d\udcdd Auftrag 2"),(0,a.kt)("p",null,"Programmieren eines Rechners mit switch."),(0,a.kt)("p",null,"Erstellen Sie ein Programm, das zwei Zahlen plus einen Operator einliest.\nBerechnen Sie dann mittels des switch-Statements, welche Rechenart erforderlich\nist, f\xfchren die Berechnung aus und geben das Ergebnis aus."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Musterl\xf6sung:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import mytools.StdInput;\n\npublic class A2Calculator {\n\n    public static void main(String[] args) {\n        double firstNumber = StdInput.readDouble(\"Zahl 1 eingeben: \");\n        double secondNumber = StdInput.readDouble(\"Zahl 2 eingeben: \");\n        char operator = StdInput.readChar(\"Operator eingeben: \");\n        double res = 0;\n\n        switch(operator) {\n            case '+':\n                res = firstNumber + secondNumber;\n                break;\n            case '-':\n                res = firstNumber - secondNumber;\n                break;\n            case '*':\n                res = firstNumber * secondNumber;\n                break;\n            case '/':\n                res = firstNumber / secondNumber;\n                break;\n        }\n\n        System.out.println(\"Resultat: \" + res);\n    }\n}\n"))),(0,a.kt)("h2",{id:"-auftrag-3"},"\ud83d\udcdd Auftrag 3"),(0,a.kt)("p",null,"Die Beaufort-Skala wurde 1806 von dem englischen Admiral Sir Francis Beaufort\n(1774 \u2013 1857) erarbeitet. Mit ihrer Hilfe kann anhand der Auswirkungen des\nWindes die Windst\xe4rke gesch\xe4tzt werden. Sie reicht von St\xe4rke 0 (Windstille) bis\nSt\xe4rke 12 (Orkan)."),(0,a.kt)("admonition",{title:"nur zur Info",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Die Aufgabe l\xe4sst sich ohne das genaue Studieren dieser Tabelle l\xf6sen ;)"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("img",{src:t(10884).Z,width:"1171",height:"415"}))),(0,a.kt)("p",null,"Es gelten die folgenden Annahmen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Beaufort 0 - 8: es besteht keine Gefahr"),(0,a.kt)("li",{parentName:"ul"},"Beaufort 9: es bestehen m\xf6gliche Gefahren"),(0,a.kt)("li",{parentName:"ul"},"Beaufort 10 - 12: es bestehen erhebliche Gefahren")),(0,a.kt)("p",null,"Ein Benutzer will wissen, ",(0,a.kt)("strong",{parentName:"p"},"ob f\xfcr eine gewisse Windst\xe4rke eine Gefahr\nbesteht"),". Schreiben Sie ein kleines Programm daf\xfcr. Das Programm soll folgendes\nmachen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nach der Windst\xe4rke in Beaufort fragen und den Wert einlesen."),(0,a.kt)("li",{parentName:"ul"},"Einen Gefahren-text ausgibt")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Musterl\xf6sung"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import mytools.StdInput;\n\npublic class A3Beaufort {\n\n    public static void main(String[] args) {\n        System.out.print("Beaufort-Stufe: ");\n        int level = StdInput.readInt();\n\n        switch(level) {\n            case 0: // wenn kein `brake` steht springt es zur n\xe4chsten Anweisung\n            case 1: // wenn kein `brake` steht springt es zur n\xe4chsten Anweisung\n            case 2: // wenn kein `brake` steht springt es zur n\xe4chsten Anweisung\n            case 3: // wenn kein `brake` steht springt es zur n\xe4chsten Anweisung\n            case 4: // wenn kein `brake` steht springt es zur n\xe4chsten Anweisung\n            case 5: // wenn kein `brake` steht springt es zur n\xe4chsten Anweisung\n            case 6: // wenn kein `brake` steht springt es zur n\xe4chsten Anweisung\n            case 7: // wenn kein `brake` steht springt es zur n\xe4chsten Anweisung\n            case 8:\n                // wird von 0-8 ausgef\xfchrt\n                System.out.println("Es besteht keine Gefahr.");\n                break;\n\n            case 9:\n                System.out.println("Es bestehen moegliche Gefahren.");\n                break;\n\n            case 10: // wenn kein `brake` steht springt es zur n\xe4chsten Anweisung\n            case 11: // wenn kein `brake` steht springt es zur n\xe4chsten Anweisung\n            case 12:\n                // wird von 10-12 ausgef\xfchrt\n                System.out.println("Es bestehen erhebliche Gefahren.");\n                break;\n\n            default:\n                System.out.println("Ungueltige Eingabe");\n        }\n    }\n\n}\n')),(0,a.kt)("p",null,"Wie ich finde, ist auch hier ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," eleganter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import mytools.StdInput;\n\npublic class A3BeaufortIf {\n\n    public static void main(String[] args) {\n        System.out.print("Beaufort-Stufe: ");\n        int level = StdInput.readInt();\n\n        if (level <= 8) {\n            System.out.println("Es besteht keine Gefahr.");\n        } else if (level == 9) {\n            System.out.println("Es bestehen moegliche Gefahren.");\n        } else if (level <= 12) {\n            System.out.println("Es bestehen erhebliche Gefahren.");\n        } else {\n            System.out.println("Ungueltige Eingabe");\n        }\n    }\n\n}\n\n'))),(0,a.kt)("h2",{id:"extra-switch-oder-if-"},"Extra: ",(0,a.kt)("inlineCode",{parentName:"h2"},"switch")," oder ",(0,a.kt)("inlineCode",{parentName:"h2"},"if")," ?"),(0,a.kt)("p",null,"Sie werden nachvollziehen k\xf6nnen oder bereits festgestellt haben, dass die\n",(0,a.kt)("inlineCode",{parentName:"p"},"switch")," Kontrollstruktur fast immer durch mehrfache ",(0,a.kt)("inlineCode",{parentName:"p"},"if-else")," ersetzt werden\nk\xf6nnte."),(0,a.kt)("p",null,"Die folgende Tabelle stellt Argumente gegen\xfcber:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Kontrollstruktur"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Begr\xfcndung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"if"),(0,a.kt)("td",{parentName:"tr",align:"left"},"jedes Mal wird das Ergebnis eines boolean Ausdrucks berechnet"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\xfcberschaubare Anzahl F\xe4lle; alle Datentypen m\xf6glich")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"switch"),(0,a.kt)("td",{parentName:"tr",align:"left"},"definierte, einzelne Werte werden gepr\xfcft"),(0,a.kt)("td",{parentName:"tr",align:"left"},"etwas besser lesbar bei vielen Varianten; nur m\xf6glich mit Zeichen, Strings und Ganzzahlen")))),(0,a.kt)("admonition",{title:"Herr Hodels Meinung",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Grunds\xe4tzlich kann man auf Switch verzichten. Ist switch wirklich leserlicher?\nVor allem das ",(0,a.kt)("inlineCode",{parentName:"p"},"break")," nach jeder Anweisung macht es h\xe4ufig komplexer."),(0,a.kt)("p",{parentName:"admonition"},"Eigentlich macht switch nur dann Sinn, wenn mehrere ",(0,a.kt)("inlineCode",{parentName:"p"},"<Anweisungen>")," bei\nspezifischen Werten ausgef\xfchrt werden sollen. Also dann, wenn man das ",(0,a.kt)("inlineCode",{parentName:"p"},"break"),"\nnicht schreiben m\xfcsste. Nun hat sich in der Praxis ergeben, dass dies fast nie\nder Fall ist.")))}h.isMDXComponent=!0},10884:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/beauford-skala-d2e2d5269232ec8f969c09f54fd4ba96.jpg"}}]);