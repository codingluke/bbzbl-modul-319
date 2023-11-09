"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[5920],{6786:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var t=i(5893),r=i(1151);const s={sidebar_position:2,keywords:["pdf"]},d="\u2728 Einfacher Methodenaufruf",o={id:"woche03/einfache-methode",title:"\u2728 Einfacher Methodenaufruf",description:"Ziele",source:"@site/docs/woche03/einfache-methode.md",sourceDirName:"woche03",slug:"/woche03/einfache-methode",permalink:"/bbzbl-modul-319/docs/woche03/einfache-methode",draft:!1,unlisted:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/woche03/einfache-methode.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:["pdf"]},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddb8 Weitere \xdcbungen",permalink:"/bbzbl-modul-319/docs/woche03/3a-konditionen/uebungen"},next:{title:"\ud83d\udc1b Debugging / Fehleranalyse",permalink:"/bbzbl-modul-319/docs/woche03/debugging"}},l={},a=[{value:"\ud83c\udfaf Ziele",id:"dart-ziele",level:2},{value:"\ud83d\udd8a A1: Methodenaufruf ohne Parameter",id:"pen-a1-methodenaufruf-ohne-parameter",level:2}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-einfacher-methodenaufruf",children:"\u2728 Einfacher Methodenaufruf"}),"\n",(0,t.jsxs)(n.h2,{id:"dart-ziele",children:["\ud83c\udfaf"," Ziele"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sie k\xf6nnen einfache Methoden erkl\xe4ren und anwenden."}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"pen-a1-methodenaufruf-ohne-parameter",children:["\ud83d\udd8a"," A1: Methodenaufruf ohne Parameter"]}),"\n",(0,t.jsx)(n.p,{children:"Das folgende Beispiel zeigt einen einfachen Methodenaufruf, ohne Parameter."}),"\n",(0,t.jsxs)(n.p,{children:["Die hervorgehobenen Linien zeigen den grunds\xe4tzlichen Ablauf des Programms. Wie\nbisher bekannt, wird das Programm in der ",(0,t.jsx)(n.code,{children:"main"}),"-Methode ausgef\xfchrt, und die\nAnweisung welche dort steht, ruft die Methode ",(0,t.jsx)(n.code,{children:"printCurrentDate"}),' auf, die ihre\nAufgabe, das aktuelle Datum auszugeben, ausf\xfchrt. Der Name ist frei gew\xe4hlt!\nDiese sollte beschreiben was die Mehtode macht. Da wir hier die aktuelle Zeit\nausgeben heisst diese "printCurrentDate".']}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Erstellen Sie in Eclipse eine neue Klasse mit dem Namen "OutputMethodExample"\nund kopieren Sie das folgende Beispiel in die neue Datei.'}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:"showLineNumbers",children:'import java.time.LocalDate ;\n\npublic class OutputMethodExample {\n    public static void main(String[] args) {\n        // highlight-yellow-next-line\n        printCurrentDate();\n    }\n\n    public static void printCurrentDate() {\n        // highlight-yellow-next-line\n        System.out.println("Current date is: " + LocalDate.now());\n    }\n}\n'})}),"\n",(0,t.jsxs)("div",{class:"grid",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Programm starten"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Starten Sie die Klasse durch ",(0,t.jsx)(n.em,{children:'"Rechtsklick auf die Datein > Run As > Java\nApplication"'})]}),"\n",(0,t.jsxs)(n.li,{children:["Es sollte nun ",(0,t.jsx)(n.code,{children:"Current date is: 2023-09-14"})," ausgegeben werden. (nat\xfcrlich mit\naktuellem Datum)"]}),"\n"]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Programmablauf"})}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Das Programm startet auf ",(0,t.jsx)(n.strong,{children:"Zeile 5"})]}),"\n",(0,t.jsxs)(n.li,{children:["und springt sogleich durch den Methodenaufruf ",(0,t.jsx)(n.code,{children:"printCurrentDate();"})," zur\n",(0,t.jsx)(n.strong,{children:"Zeile 9"}),", in den Methodenk\xf6rper von ",(0,t.jsx)(n.code,{children:"printCurrentDate"}),"."]}),"\n"]})]})]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{children:(0,t.jsx)(n.strong,{children:"Verwendete Schl\xfcsselw\xf6rter noch nicht relevant"})}),(0,t.jsxs)(n.p,{children:["Die Schl\xfcsselw\xf6rter ",(0,t.jsx)(n.code,{children:"public"}),", ",(0,t.jsx)(n.code,{children:"static"})," und ",(0,t.jsx)(n.code,{children:"void"})," m\xfcsst ihr momentan noch nicht\nverstehen. Diese werden in einem sp\xe4teren Zeitpunkt eingef\xfchrt."]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>d});var t=i(7294);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);