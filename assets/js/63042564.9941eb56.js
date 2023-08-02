"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[8476],{3905:(e,n,i)=>{i.d(n,{Zo:()=>m,kt:()=>g});var r=i(67294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,r,t=function(e,n){if(null==e)return{};var i,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var o=r.createContext({}),d=function(e){var n=r.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):s(s({},n),e)),i},m=function(e){var n=d(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var i=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(i),p=t,g=u["".concat(o,".").concat(p)]||u[p]||c[p]||a;return i?r.createElement(g,s(s({ref:n},m),{},{components:i})):r.createElement(g,s({ref:n},m))}));function g(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=i.length,s=new Array(a);s[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[u]="string"==typeof e?e:t,s[1]=l;for(var d=2;d<a;d++)s[d]=i[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},57970:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=i(87462),t=(i(67294),i(3905));const a={sidebar_position:5},s="Zeitrennen Radsport",l={unversionedId:"8a-repetition/zeitrennen",id:"8a-repetition/zeitrennen",title:"Zeitrennen Radsport",description:"Simulieren Sie mit einem Programm ein Zeitrennen aus dem Radsport:",source:"@site/docs/8a-repetition/zeitrennen.md",sourceDirName:"8a-repetition",slug:"/8a-repetition/zeitrennen",permalink:"/bbzbl-modul-319/docs/8a-repetition/zeitrennen",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/8a-repetition/zeitrennen.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Memory",permalink:"/bbzbl-modul-319/docs/8a-repetition/memory"},next:{title:"Effizienter mit Eclipse",permalink:"/bbzbl-modul-319/docs/effizienter"}},o={},d=[{value:"Spielregeln",id:"spielregeln",level:2},{value:"\ud83e\uddf0 Implementierungshilfe",id:"-implementierungshilfe",level:2}],m={toc:d},u="wrapper";function c(e){let{components:n,...i}=e;return(0,t.kt)(u,(0,r.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"zeitrennen-radsport"},"Zeitrennen Radsport"),(0,t.kt)("p",null,"Simulieren Sie mit einem Programm ein Zeitrennen aus dem Radsport:"),(0,t.kt)("h2",{id:"spielregeln"},"Spielregeln"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"In einer definierten Startaufstellung f\xe4hrt ein Radrennfahrer nach dem anderen\ndas Rennen und erreicht dabei eine Zeit zwischen 30 Minuten und einer Stunde\n(1800 \u2013 3600 Sekunden)."),(0,t.kt)("li",{parentName:"ul"},"Direkt nach der Zieleinfahrt erscheint der Fahrer mit der aktuell gefahrenen\nZeit auf der Konsole."),(0,t.kt)("li",{parentName:"ul"},"Nachdem alle Fahrer das Rennen beendet haben, wird eine Rangliste mit den\nerreichten Zeiten ausgegeben.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Beispiel einer Ausgabe des Programms:"',title:'"Beispiel',einer:!0,Ausgabe:!0,des:!0,'Programms:"':!0},"Racer Van Vleuten finished: 3167\nRacer Van Der Breggen finished: 2753\nRacer Vos finished: 2231\nRacer Spratt finished: 1975\nRacer Moolman-Pasio finished: 2560\nRacer Pieters finished: 3025\nRacer Rivera finished: 2003\nRacer Van Djik finished: 2093\nRacer Niewiadoma finished: 2912\nRacer Hosking finished: 1950\n*********** Rankings *************\n1: Hosking: 1950\n2: Spratt: 1975\n3: Rivera: 2003\n4: Van Djik: 2093\n5: Vos: 2231\n6: Moolman-Pasio: 2560\n7: Van Der Breggen: 2753\n8: Niewiadoma: 2912\n9: Pieters: 3025\n10: Van Vleuten: 3167\n")),(0,t.kt)("h2",{id:"-implementierungshilfe"},"\ud83e\uddf0 Implementierungshilfe"),(0,t.kt)("p",null,"Folgende Hinweise helfen Ihnen bei der Implementierung:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Definieren Sie die Startaufstellung mit allen Fahrern in einem Array."),(0,t.kt)("li",{parentName:"ul"},"F\xfcr die Rangliste ben\xf6tigen sie entweder zwei Arrays (einen f\xfcr die Namen,\neinen zweiten f\xfcr die gefahrene Zeit) ODER falls Sie sich mit\nzweidimensionalen Arrays auskennen, definieren Sie einen zweidimensionalen\nArray f\xfcr die Zeit sowie den Namen eines Rennfahrers."),(0,t.kt)("li",{parentName:"ul"},"F\xfcr jeden Fahrer in der definierten Startreihenfolge berechnen Sie die\nRennzeit, welche zwischen 1800 und 3600 Sekunden liegen soll und geben diese\nauf die Konsole aus."),(0,t.kt)("li",{parentName:"ul"},"Nachdem die Zeit f\xfcr einen Fahrer berechnet wurde, sortieren Sie die Zeit\nsowie den Fahrer in die Arrays f\xfcr die Rangliste ein. Dieses Einf\xfcgen an der\nkorrekten Position in den Arrays lagern Sie in eine eigene Methode aus, welche\nSie aufrufen, nachdem die Zeit berechnet wurde. Die Methode nennen Sie insert.\nBedenken Sie, dass alle Fahrer, die langsamer gefahren sind wie der aktuelle\nFahrer, im Array eine Position nach hinten geschoben werden m\xfcssen. Achten Sie\ndarauf, dass Sie keine Werte \xfcberschreiben!"),(0,t.kt)("li",{parentName:"ul"},"Nachdem alle Fahrer das Rennen beendet haben und an der korrekten Stelle\neinsortiert wurden, geben Sie die Rangliste auf die Konsole aus. Dies kann\nebenfalls in eine Methode namens ",(0,t.kt)("inlineCode",{parentName:"li"},"printRanking")," ausgelagert werden.")),(0,t.kt)("details",null,(0,t.kt)("summary",null,"Musterl\xf6sung:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BikeTimeTrial.java"',title:'"BikeTimeTrial.java"'},'public class BikeTimeTrial {\n\n    public static void main(String[] args) {\n\n        String[] racerStart = { "Van Vleuten", "Van Der Breggen", "Vos", "Spratt", "Moolman-Pasio", "Pieters", "Rivera",\n                "Van Djik", "Niewiadoma", "Hosking"};\n\n        //sorted Arrays\n        //rankingNames = names of racer\n        //rankingTimes = corresponding times\n        //Index 0 of rankingNames = racer with time in rankingTimes on Index 0\n        String[] rankingNames = new String[10];\n        int[] rankingTimes = new int[10];\n        //(better implementation would be to use a two-dimensional array)\n\n        for (int i = 0; i < racerStart.length; i++) {\n            //generate random time from 1800-3600\n            int secs = (int) (Math.random() * 1801) + 1800;\n\n            System.out.println("Racer " + racerStart[i] + " finished: " + secs);\n\n            //add the racer to the correct rank\n            insert(racerStart[i], secs, rankingNames, rankingTimes);\n        }\n\n        //print final rankings\n        printRanking(rankingNames, rankingTimes);\n    }\n\n    private static void insert(String name, int time, String[] names, int[] times) {\n        int i = 0;\n        for (i = 0; i < times.length - 1; i++) {\n            if (times[i] == 0 || times[i] > time) {\n                break;\n            }\n        }\n        for (int k = times.length - 2; k >= i; k--) {\n            times[k + 1] = times[k];\n            names[k + 1] = names[k];\n        }\n        times[i] = time;\n        names[i] = name;\n\n    }\n\n    private static void printRanking(String[] rankingNames, int[] rankingTimes) {\n        System.out.println("*********** Rankings *************");\n        for (int i = 0; i < rankingNames.length; i++) {\n            System.out.println(i + 1 + ": " + rankingNames[i] + ": " + rankingTimes[i]);\n        }\n    }\n}\n'))))}c.isMDXComponent=!0}}]);