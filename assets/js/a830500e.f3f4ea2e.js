"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[8662],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),c=i,g=m["".concat(o,".").concat(c)]||m[c]||d[c]||a;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=c;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[m]="string"==typeof e?e:i,s[1]=l;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4638:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:4,keywords:["pdf"]},s="Memory",l={unversionedId:"8a-repetition/memory",id:"8a-repetition/memory",title:"Memory",description:"Programmierung eines Memory-Games. (Ged\xe4chtnisspiel)",source:"@site/docs/8a-repetition/memory.md",sourceDirName:"8a-repetition",slug:"/8a-repetition/memory",permalink:"/bbzbl-modul-319/docs/8a-repetition/memory",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/8a-repetition/memory.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,keywords:["pdf"]},sidebar:"tutorialSidebar",previous:{title:"Mathematik Olympiade",permalink:"/bbzbl-modul-319/docs/8a-repetition/mathe-olympiade"},next:{title:"Zeitrennen Radsport",permalink:"/bbzbl-modul-319/docs/8a-repetition/zeitrennen"}},o={},u=[{value:"Spielregeln",id:"spielregeln",level:2},{value:"Einfache Umsetzung",id:"einfache-umsetzung",level:2},{value:"Fortgeschrittene Umsetzung",id:"fortgeschrittene-umsetzung",level:2}],p={toc:u},m="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"memory"},"Memory"),(0,i.kt)("p",null,"Programmierung eines Memory-Games. (Ged\xe4chtnisspiel)"),(0,i.kt)("h2",{id:"spielregeln"},"Spielregeln"),(0,i.kt)("p",null,"In einer ersten Version definieren Sie eine fixe Liste an Worten, z.B. diese:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Car, Pen, Star, Apple, Book, Printer, Highway, Cat, Clock, Tree\n")),(0,i.kt)("p",null,"Der Benutzer soll nun zwischen drei Befehlen w\xe4hlen k\xf6nnen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"learn/lernen"),": alle W\xf6rter werden angezeigt"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"guess/raten"),": der Benutzer kann ein Wort raten"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"stop"),": das Programm endet")),(0,i.kt)("p",null,"Die Funktionen ",(0,i.kt)("inlineCode",{parentName:"p"},"learn")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"guess")," sollen solange gew\xe4hlt werden k\xf6nnen, bis der\nBenutzer stop eingibt (riecht nach Schlaufe). Dann beendet das Programm."),(0,i.kt)("p",null,"W\xe4hlen Sie geeignete Datentypen, Variablenbezeichnungen und Kontrollstrukturen."),(0,i.kt)("h2",{id:"einfache-umsetzung"},"Einfache Umsetzung"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Wenn ein Benutzer ein Wort eingibt, welches in der Liste enthalten ist, dann\nerh\xf6hen Sie eine entsprechende ",(0,i.kt)("em",{parentName:"li"},"Z\xe4hlervariable")," um eins."),(0,i.kt)("li",{parentName:"ul"},"Sobald der Wert der Variablen der Listengr\xf6sse entspricht, endet das Programm\nund gratuliert dem Benutzer.")),(0,i.kt)("h2",{id:"fortgeschrittene-umsetzung"},"Fortgeschrittene Umsetzung"),(0,i.kt)("p",null,"Erstellen Sie eine neue Version des Games, am besten mit einer Kopie der\nbisherigen L\xf6sung."),(0,i.kt)("p",null,"W\xe4hlen Sie aus der folgenden Liste einzelne schwierigere Anforderungen, mit\ndenen Sie interessante Fragen der Programmierung festigen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Das Programm kann sich f\xfcr jedes Wort individuell merken, ob es bereits\nrichtig geraten wurde.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Bei der einfachen Version kann man "cheaten" und 10 mal das gleiche Wort\neingeben ;)'))),(0,i.kt)("li",{parentName:"ul"},"Das Programm fragt direkt nach dem Wort an einer bestimmten Position.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"z.B. wie heisst das Wort an Position 4? Korrekte Antwort: Apple"))),(0,i.kt)("li",{parentName:"ul"},"Das Programm l\xe4sst es zu, dass der Benutzer die Worte selbst erfassen kann.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Musterl\xf6sung:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Memory.java"',title:'"Memory.java"'},'import mytools.StdInput;\n\npublic class Memory {\n\n    public static void main(String[] args) {\n        String[] cards = new String[10];\n        cards[0] = "Car";\n        cards[1] = "Pen";\n        cards[2] = "Star";\n        cards[3] = "Apple";\n        cards[4] = "Book";\n        cards[5] = "Printer";\n        cards[6] = "Highway";\n        cards[7] = "Cat";\n        cards[8] = "Clock";\n        cards[9] = "Tree";\n\n        boolean[] guesses = {false,false,false,false,false,false,false,false,false,false};\n\n        String answer = "";\n\n        while (!answer.equals("stop")) {\n            System.out.println("");\n            //switch: player turns\n            System.out.println("choose: g=guess, l=learn, stop");\n            answer = StdInput.readString();\n\n            if (answer.equals("l")) {\n                for (int i = 0; i < cards.length; i++) {\n                    System.out.print("\\t" + cards[i]);\n                }\n            }\n\n            if (answer.equals("g")) {\n                for (int i = 0; i < 2; i++) {\n                    System.out.println("");\n                }\n                int pos = (int) (Math.random() * 10);\n\n                System.out.println("Guess at position: " + pos);\n\n                String guess = StdInput.readString();\n\n                if (cards[pos].equals(guess)) {\n                    System.out.println("Woaw! Great!");\n                    guesses[pos] = true;\n                } else {\n                    System.out.println("Oh, better guess next time");\n                }\n            }\n        }\n    }\n\n}\n'))))}d.isMDXComponent=!0}}]);