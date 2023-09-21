"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[7137],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(g,a(a({ref:n},c),{},{components:t})):r.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3498:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:2,keywords:["pdf"]},a="ShoppingList",s={unversionedId:"8a-repetition/shoppinglist",id:"8a-repetition/shoppinglist",title:"ShoppingList",description:"Programmierung einer einfachen ShoppingList.",source:"@site/docs/8a-repetition/shoppinglist.md",sourceDirName:"8a-repetition",slug:"/8a-repetition/shoppinglist",permalink:"/bbzbl-modul-319/docs/8a-repetition/shoppinglist",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/8a-repetition/shoppinglist.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:["pdf"]},sidebar:"tutorialSidebar",previous:{title:"Puzzles",permalink:"/bbzbl-modul-319/docs/8a-repetition/puzzles"},next:{title:"Mathematik Olympiade",permalink:"/bbzbl-modul-319/docs/8a-repetition/mathe-olympiade"}},l={},p=[{value:"Spielregeln",id:"spielregeln",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"shoppinglist"},"ShoppingList"),(0,i.kt)("p",null,"Programmierung einer einfachen ShoppingList."),(0,i.kt)("h2",{id:"spielregeln"},"Spielregeln"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Das Programm soll es erm\xf6glichen, dass bis zu zehn beliebige Produkte in die\nListe eingetragen werden k\xf6nnen."),(0,i.kt)("li",{parentName:"ul"},"Sobald der Benutzer mit einem Leerstring (\u201e\u201c) abbricht oder 10 Produkte\neingegeben hat, folgt die Ausgabe der vom Benutzer erfassten Produkte."),(0,i.kt)("li",{parentName:"ul"},"W\xe4hlen Sie geeignete Datentypen, Variablenbezeichnungen und\nKontrollstrukturen.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Musterl\xf6sung:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="SimpleMemory.java"',title:'"SimpleMemory.java"'},'import mytools.StdInput;\n\npublic class SimpleMemory {\n\n    public static void main(String[] args) {\n        String[] cards = new String[10];\n        cards[0] = "Car";\n        cards[1] = "Pen";\n        cards[2] = "Star";\n        cards[3] = "Apple";\n        cards[4] = "Book";\n        cards[5] = "Printer";\n        cards[6] = "Highway";\n        cards[7] = "Cat";\n        cards[8] = "Clock";\n        cards[9] = "Tree";\n\n        String answer = "";\n        int correctAnsweser = 0;\n\n        while (!answer.equals("stop") && correctAnsweser < 10) {\n            System.out.println("");\n            System.out.println("choose: g=guess, l=learn, stop");\n            answer = StdInput.readString();\n\n            if (answer.equals("l")) {\n                for (int i = 0; i < cards.length; i++) {\n                    System.out.print("\\t" + cards[i]);\n                }\n            }\n\n            if (answer.equals("g")) {\n                System.out.println("Guess a word: ");\n\n                String guess = StdInput.readString();\n\n                boolean contained = false;\n\n                for (int i = 0; i < cards.length; i++) {\n                    if (cards[i].equals(guess)) {\n                        contained = true;\n                    }\n                }\n\n                if (contained) {\n                    System.out.println("Woaw! Great!");\n                    correctAnsweser++;\n                } else {\n                    System.out.println("Oh, better guess next time");\n                }\n            }\n        }\n\n        System.out.println("Great, you did remember all cards");\n    }\n}\n'))))}d.isMDXComponent=!0}}]);