"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[5839],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var i=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=i.createContext({}),s=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(t),c=l,h=m["".concat(u,".").concat(c)]||m[c]||p[c]||r;return t?i.createElement(h,a(a({ref:n},d),{},{components:t})):i.createElement(h,a({ref:n},d))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,a=new Array(r);a[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var s=2;s<r;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},11735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=t(87462),l=(t(67294),t(3905));const r={sidebar_position:1},a="while",o={unversionedId:"5a-while/while",id:"5a-while/while",title:"while",description:"Das while ist dem if \xe4hnlich. Es hat auch eine Bedingung, aber nur einen",source:"@site/docs/5a-while/while.md",sourceDirName:"5a-while",slug:"/5a-while/while",permalink:"/bbzbl-modul-319/docs/5a-while/while",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"5 - Schleifen und Wiederholungen",permalink:"/bbzbl-modul-319/docs/5a-while/"},next:{title:"do..while",permalink:"/bbzbl-modul-319/docs/5a-while/dowhile"}},u={},s=[{value:"\ud83d\udcfa Erkl\xe4rvideos von Studyflix",id:"-erkl\xe4rvideos-von-studyflix",level:2},{value:"\ud83d\udcdd Aufgaben",id:"-aufgaben",level:2},{value:"Wiederholte Ausgabe",id:"wiederholte-ausgabe",level:3},{value:"Zusatzaufgabe:",id:"zusatzaufgabe",level:4},{value:"Multiplikationstafel ausgeben",id:"multiplikationstafel-ausgeben",level:3}],d={toc:s};function p(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"while"},(0,l.kt)("inlineCode",{parentName:"h1"},"while")),(0,l.kt)("p",null,"Das ",(0,l.kt)("inlineCode",{parentName:"p"},"while")," ist dem if \xe4hnlich. Es hat auch eine Bedingung, aber nur einen\nCode-Block, der solange ausgef\xfchrt wird, bis die Bedingung den boolean Wert\n",(0,l.kt)("inlineCode",{parentName:"p"},"false")," ergibt."),(0,l.kt)("p",null,"Das ",(0,l.kt)("inlineCode",{parentName:"p"},"while")," erm\xf6glicht es nun grunds\xe4tzlich, dass Programme geschrieben werden\nk\xf6nnen, die nicht nur einmal durchlaufen, sondern Abschnitte resp. Bl\xf6cke\nenthalten, die mehrfach ausgef\xfchrt werden k\xf6nnen."),(0,l.kt)("p",null,"Beim ",(0,l.kt)("inlineCode",{parentName:"p"},"while")," wird das Wissen \xfcber den boolean Datentyp, wie es beim ",(0,l.kt)("inlineCode",{parentName:"p"},"if"),"\nangewandt wurde, ebenfalls ben\xf6tigt. Zentral ist also wieder, dass eine\nBedingung formuliert werden kann."),(0,l.kt)("p",null,"Das grunds\xe4tzliche Muster der ",(0,l.kt)("inlineCode",{parentName:"p"},"while"),"-Kontrollstruktur sieht folgendermassen aus:"),(0,l.kt)("div",{class:"grid"},(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="While Code-Beispiel" showLineNumbers',title:'"While','Code-Beispiel"':!0,showLineNumbers:!0},'int i = 10;\nwhile (i > 0) {\n  System.out.println("value of i: " + i);\n  i = i - 1;\n}\n'))),(0,l.kt)("div",null,(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Ablaufdiagram")),(0,l.kt)("mermaid",{value:"stateDiagram-v2\n    while: while (solange-die-Bedingung-zutrifft)\n    do: { wird der Code-Block ausgef\xfchrt }\n    [*] --\x3e while\n\n    while --\x3e do\n    do --\x3e while\n    while --\x3e [*]"}))),(0,l.kt)("p",null,"Der Aufbau der Anweisung ist also so:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Es besteht ein Anfangsstatus.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Hier eine Variable ",(0,l.kt)("inlineCode",{parentName:"li"},"int i = 10;"),"."))),(0,l.kt)("li",{parentName:"ol"},"Es folgt das Schl\xfcsselwort ",(0,l.kt)("inlineCode",{parentName:"li"},"while")," mit einer ",(0,l.kt)("strong",{parentName:"li"},"booleschen Bedingung")," im runden Klammerpaar ",(0,l.kt)("inlineCode",{parentName:"li"},"()"),".",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Hier ",(0,l.kt)("inlineCode",{parentName:"li"},"i")," gr\xf6sser als ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," also ",(0,l.kt)("inlineCode",{parentName:"li"},"(i > 0)")))),(0,l.kt)("li",{parentName:"ol"},"dann folgt zwischen den beiden geschweiften Klammern ",(0,l.kt)("inlineCode",{parentName:"li"},"{}")," der\nCode- Block, dessen Ausf\xfchrung durch das ",(0,l.kt)("inlineCode",{parentName:"li"},"while")," kontrolliert wird.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Er wird solange ausgef\xfchrt bis die Bedingung ",(0,l.kt)("inlineCode",{parentName:"li"},"false")," ergibt.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Und wie oft wird also obige Anweisung ausgef\xfchrt?")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Beim ersten Durchlauf hat ",(0,l.kt)("inlineCode",{parentName:"li"},"i")," den Wert 10 wie auf ",(0,l.kt)("strong",{parentName:"li"},"Zeile 1")," initialisiert."),(0,l.kt)("li",{parentName:"ul"},"Dann wird dieser Wert auf ",(0,l.kt)("strong",{parentName:"li"},"Zeile 4 um 1 verringert")),(0,l.kt)("li",{parentName:"ul"},"Sobald ",(0,l.kt)("inlineCode",{parentName:"li"},"i")," von 1 nach 0 verringert wird ist die Bedingung nicht mehr erf\xfcllt,\nda die Bedingung verlangt, dass der Wert von i gr\xf6sser als 0 sein muss."),(0,l.kt)("li",{parentName:"ul"},"Die Schlaufe wird somit 10 Mal durchlaufen.")),(0,l.kt)("admonition",{title:"while",type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Solange-die-Bedingung-zutrifft"))," wird ein Code-Block ausgef\xfchrt."),(0,l.kt)("li",{parentName:"ul"},"Trifft die Bedingung von Anfang an nicht zu, wird der Code-Block auch nie ausgef\xfchrt."))),(0,l.kt)("h2",{id:"-erkl\xe4rvideos-von-studyflix"},"\ud83d\udcfa Erkl\xe4rvideos von Studyflix"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://studyflix.de/informatik/while-schleife-224"},"https://studyflix.de/informatik/while-schleife-224"))),(0,l.kt)("h2",{id:"-aufgaben"},"\ud83d\udcdd Aufgaben"),(0,l.kt)("h3",{id:"wiederholte-ausgabe"},"Wiederholte Ausgabe"),(0,l.kt)("p",null,"Schreiben Sie ein Programm, welches 10-mal \u201eHopp Schwiiz\u201c ausgibt."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Schreiben Sie das Programm ",(0,l.kt)("strong",{parentName:"li"},"zuerst als Sequenz von 10 Zeilen")," mit\n",(0,l.kt)("inlineCode",{parentName:"li"},"System.out.println"),"."),(0,l.kt)("li",{parentName:"ul"},"Schreiben Sie dann das Programm k\xfcrzer und einfacher mit einer\n",(0,l.kt)("inlineCode",{parentName:"li"},"while"),"-Schleife.")),(0,l.kt)("h4",{id:"zusatzaufgabe"},"Zusatzaufgabe:"),(0,l.kt)("p",null,"Schreiben Sie das Programm mit einer ",(0,l.kt)("inlineCode",{parentName:"p"},"while"),"-Schleife und einer Variablen,\nwelche diese steuert, wobei Sie die Variable wie folgt deklarieren:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"int zaehler = -5;\n")),(0,l.kt)("p",null,"Bis zu welchem Wert muss diese Variable laufen?"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Musterl\xf6sung:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="AASwitzerland.java"',title:'"AASwitzerland.java"'},'public class AASwitzerland {\n\n    public static void main(String[] args) {\n        // 10 mal die gleiche Zeile\n        System.out.println("Hopp Schwiiz");\n        System.out.println("Hopp Schwiiz");\n        System.out.println("Hopp Schwiiz");\n        System.out.println("Hopp Schwiiz");\n        System.out.println("Hopp Schwiiz");\n        System.out.println("Hopp Schwiiz");\n        System.out.println("Hopp Schwiiz");\n        System.out.println("Hopp Schwiiz");\n        System.out.println("Hopp Schwiiz");\n        System.out.println("Hopp Schwiiz");\n\n        System.out.println("---------------------------------");\n\n        // mit einer while-Schleife\n        int x = 0;\n        while (x < 10) {\n            System.out.println(x + " Hopp Schwiiz");\n            x = x + 1;  // ein k\xfcrzere Formulierung, um die Variable um eins zu erh\xf6hen, w\xe4re  x++;\n        }\n\n        System.out.println("---------------------------------");\n\n        // mit einer while-Schleife, aber wir beginnen bei -5\n        int i = -5;\n        while (i < 5) {\n            System.out.println(i + " Hopp Schwiiz");\n            i = i + 1;\n        }\n    }\n}\n'))),(0,l.kt)("h3",{id:"multiplikationstafel-ausgeben"},"Multiplikationstafel ausgeben"),(0,l.kt)("p",null,"Schreiben Sie ein Programm, welches eine Multiplikationstafel ausgibt."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Der Benutzer gibt an, f\xfcr welche Zahl die Multiplikationstafel erstellt werden soll.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",2:!0,className:"language-bash",metastring:'title="Folgende Ausgabe ist erw\xfcnscht, falls der Benutzer z.B. 2 eingibt:"',title:'"Folgende',Ausgabe:!0,ist:!0,"erw\xfcnscht,":!0,falls:!0,der:!0,Benutzer:!0,"z.B.":!0,'eingibt:"':!0},"1 x 2 = 2\n2 X 2 = 4\n3 X 2 = 6\n4 x 2 = 8\n5 x 2 = 10\n6 x 2 = 12\n7 x 2 = 14\n8 x 2 = 16\n9 x 2 = 18\n10 x 2 = 20\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Musterl\xf6sung:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="ABMultiplication.java"',title:'"ABMultiplication.java"'},'import mytools.StdInput;\n\npublic class ABMultiplication {\n\n    public static void main(String[] args) {\n        System.out.print("Zahl fuer die Multiplikationstabelle: ");\n        int number = StdInput.readInt();\n\n        int ergebnis;\n        int i = 1;\n        while(i <= 10) {\n            ergebnis = i * number;\n            System.out.println(i + " * " + number + " = " + ergebnis);\n            i = i + 1;\n        }\n    }\n\n}\n'))))}p.isMDXComponent=!0}}]);