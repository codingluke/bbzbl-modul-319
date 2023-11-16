"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[3481],{2393:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var s=i(5893),l=i(1151);const r={sidebar_position:4,keywords:["pdf"]},d="\ud83d\udcd6 if / else - Selektion",t={id:"woche03/selektion/if-selektion",title:"\ud83d\udcd6 if / else - Selektion",description:"Mit dem Schl\xfcsselwort if (engl. falls) in Kombination mit dem Datentyp",source:"@site/docs/woche03/selektion/if-selektion.md",sourceDirName:"woche03/selektion",slug:"/woche03/selektion/if-selektion",permalink:"/bbzbl-modul-319/docs/woche03/selektion/if-selektion",draft:!1,unlisted:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/woche03/selektion/if-selektion.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,keywords:["pdf"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd6 Bedingungen",permalink:"/bbzbl-modul-319/docs/woche03/selektion/bedingungen"},next:{title:"\ud83d\udcd6 switch - Selektion",permalink:"/bbzbl-modul-319/docs/woche03/selektion/switch-selektion"}},o={},c=[{value:"Anatomie",id:"anatomie",level:2},{value:"Aufbau einer if-Selektion",id:"aufbau-einer-if-selektion",level:3},{value:"Flow Diagram einer if-Selektion",id:"flow-diagram-einer-if-selektion",level:3},{value:"Praktisches Beispiel",id:"praktisches-beispiel",level:2},{value:"Programmcode",id:"programmcode",level:3},{value:"Flussdiagramm",id:"flussdiagramm",level:3},{value:"Erl\xe4uterung",id:"erl\xe4uterung",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"-if--else---selektion",children:"\ud83d\udcd6 if / else - Selektion"}),"\n",(0,s.jsxs)(n.p,{children:["Mit dem Schl\xfcsselwort ",(0,s.jsx)(n.strong,{children:"if"})," ",(0,s.jsx)(n.em,{children:"(engl. falls)"})," in Kombination mit dem ",(0,s.jsx)(n.strong,{children:"Datentyp\nboolean"})," k\xf6nnen Programme erstellt werden, die abh\xe4ngig von Benutzereingaben\noder Variablenwerten unterschiedlich reagieren."]}),"\n",(0,s.jsx)(n.admonition,{title:"Bedingungen und Vergleichsoperatoren",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Der Datentyp ",(0,s.jsx)(n.code,{children:"boolean"})," wird durch\n",(0,s.jsx)(n.a,{href:"/bbzbl-modul-319/docs/woche03/selektion/bedingungen",children:"\ud83d\udc6e Bedingungen"})," generiert und ist\n",(0,s.jsxs)(n.strong,{children:["elementar f\xfcr die ",(0,s.jsx)(n.code,{children:"if"}),"-Selektion"]}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Die Bedingungen wiederum kommen durch\n",(0,s.jsx)(n.a,{href:"/bbzbl-modul-319/docs/woche02/operatoren#vergleichsoperatoren",children:"Vergleichsoperatoren"}),"\nzustande."]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"anatomie",children:"Anatomie"}),"\n",(0,s.jsxs)(n.p,{children:["Eine Selektion mit einem ",(0,s.jsx)(n.code,{children:"if"})," sieht so aus, wie im folgend dargestellt. Ein\n",(0,s.jsx)(n.strong,{children:"praktisches Beispiel"})," zur Veranschaulichung kann ausgeklappt werden."]}),"\n",(0,s.jsxs)(n.p,{children:["Hier ist nun eine ",(0,s.jsx)(n.code,{children:"if-Selektion"})," mit drei m\xf6glichen Codeblock Anweisungen\ndargestellt. Im laufenden Programm wird immer nur eine der Anweisungen\nausgef\xfchrt. Dies erm\xf6glicht es dynamisch auf die Benutzereingabe zu reagieren\nindem je nach Eingabe einen anderen Code ausgef\xfchrt wird."]}),"\n",(0,s.jsxs)(n.p,{children:["Die Bezeichnungen ",(0,s.jsx)(n.code,{children:"<Bedingung>"})," und ",(0,s.jsx)(n.code,{children:"<Anweisung>"})," dienen als ",(0,s.jsx)(n.strong,{children:"Platzhalter"}),".\nSie sind sogenannter Pseudocode und somit ",(0,s.jsx)(n.strong,{children:"nicht korrekter Java-Code"}),". Im\nsp\xe4teren praktischen Beispiel werden diese mit korrektem Java-Code ersetzt."]}),"\n",(0,s.jsxs)("div",{className:"grid",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(n.h3,{id:"aufbau-einer-if-selektion",children:"Aufbau einer if-Selektion"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"// highlight-start\nif (<Bedingung1>) {\n    <Anweisung1>\n}\n// highlight-end\n// highlight-green-start\nelse if (<Bedingung2>) { // Optionaler Block\n    <Anweisung2>\n}\n// highlight-green-end\n// highlight-blue-start\nelse {                  // Optionaler Block\n    <Anweisung3>\n}\n// highlight-blue-end\n"})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(n.h3,{id:"flow-diagram-einer-if-selektion",children:"Flow Diagram einer if-Selektion"}),(0,s.jsx)(n.mermaid,{value:'flowchart TD\n    C{if-Selektion}\n    C --\x3e|"if\\n< Bedingung1 >"| D["< Anweisung1 >"]\n    C --\x3e|"else if\\n< Bedingung2 >"| E["< Anweisung2 >"]\n    C --\x3e|else| F["< Anweisung3 >"]\n\n    style E fill:#00A17020,stroke:#00A17080,stroke-width:2px\n    style F fill:#0072B520,stroke:#0072B580,stroke-width:2px'})]})]}),"\n",(0,s.jsx)("div",{className:"theme-code-block-highlighted-line",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Der erste Block ",(0,s.jsx)(n.code,{children:"if (<Bedingung1>) { <Anweisung1> }"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ist zwingend"}),"\n",(0,s.jsxs)(n.li,{children:["und zwar von ",(0,s.jsx)(n.code,{children:"if"})," bis zur ersten schliessenden geschweiften Klammer."]}),"\n",(0,s.jsxs)(n.li,{children:["Wenn die ",(0,s.jsx)(n.code,{children:"<Bedingung1>"})," ",(0,s.jsx)(n.code,{children:"wahr"})," ist, wird nur die ",(0,s.jsx)(n.code,{children:"<Anweisung1>"})," ausgef\xfchrt."]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)("div",{className:"code-block-green-line",children:(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Der n\xe4chste Block ",(0,s.jsx)(n.code,{children:"else if (<Bedingung2>) { <Anweisung2> }"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Wenn die ",(0,s.jsx)(n.code,{children:"<Bedingung1>"})," ",(0,s.jsx)(n.code,{children:"falsch"})," und die ",(0,s.jsx)(n.code,{children:"<Bedingung2>"})," ",(0,s.jsx)(n.code,{children:"wahr"})," ist, wird\nnur die ",(0,s.jsx)(n.code,{children:"<Anweisung2>"})," ausgef\xfchrt."]}),"\n",(0,s.jsx)(n.li,{children:"ist optional"}),"\n",(0,s.jsx)(n.li,{children:"kann auch noch mehrfach wiederholt folgen"}),"\n",(0,s.jsxs)(n.li,{children:["kann nie alleine stehen ",(0,s.jsxs)(n.em,{children:["(nie ohne vorausgehender ",(0,s.jsx)(n.code,{children:"if"}),"-Block)"]})]}),"\n",(0,s.jsxs)(n.li,{children:["wird ausgef\xfchrt, sofern die Bedingung vom vorausgehendem ",(0,s.jsx)(n.code,{children:"if"})," oder\n",(0,s.jsx)(n.code,{children:"else if"})," Block ",(0,s.jsx)(n.strong,{children:"false"})," war"]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)("div",{className:"code-block-blue-line",children:(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Der letzte Block ",(0,s.jsx)(n.code,{children:"else { <Anweisung3> }"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ist optional"}),"\n",(0,s.jsx)(n.li,{children:"besitzt keine Bedingung"}),"\n",(0,s.jsx)(n.li,{children:"darf nur ein Mal vorkommen, und zwar ganz am Schluss"}),"\n",(0,s.jsx)(n.li,{children:"wird ausgef\xfchrt wenn kein anderer Block ausgef\xfchrt wurde"}),"\n",(0,s.jsxs)(n.li,{children:["Wenn die ",(0,s.jsx)(n.code,{children:"<Bedingung1>"})," ",(0,s.jsx)(n.code,{children:"falsch"})," und die ",(0,s.jsx)(n.code,{children:"<Bedingung2>"})," ",(0,s.jsx)(n.code,{children:"falsch"})," ist, wird\nnur die ",(0,s.jsx)(n.code,{children:"<Anweisung3>"})," ausgef\xfchrt."]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"praktisches-beispiel",children:"Praktisches Beispiel"}),"\n",(0,s.jsxs)(n.p,{children:["Im praktischen Beispiel wollen wir herausfinden ob es sich um ein Kind,\nJugendlicher oder Erwachsener handelt. Dazu existiert eine Variable ",(0,s.jsx)(n.code,{children:"int age"})," in\nder das Alter gespeichert ist. In der if-Selektion wird nun das Alter gepr\xfcft\nund je nach Situation in die Console geschrieben ob es sich um ein Kind,\nJugendlicher oder Erwachsener handelt."]}),"\n",(0,s.jsxs)("div",{className:"grid",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(n.h3,{id:"programmcode",children:"Programmcode"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:"showLineNumbers",children:'// highlight-green-next-line\nint age = 14;\n\nif (age < 12) {\n    System.out.println("Hallo Kind");\n}\n// highlight-green-start\nelse if (age < 18) {\n    System.out.println("Hallo Jugendlicher");\n}\n// highlight-green-end\nelse {\n    System.out.println("Hallo Erwachsener");\n}\n'})}),(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Die Variable ",(0,s.jsx)(n.code,{children:"int age"}),' k\xf6nnte nun auch von der Konsole eingelesen werden und\nsomit "dynamisch" sein. Dann macht die Kondition auch mehr Sinn!']})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(n.h3,{id:"flussdiagramm",children:"Flussdiagramm"}),(0,s.jsx)(n.mermaid,{value:'flowchart TD\n    A[int age] --\x3e|14| B{if-Selektion}\n    B --\x3e|"if (age < 12)"| D[Hallo Kind]\n    B --\x3e|"else if (age < 18)"| E[Hallo Jugendlicher]\n    B --\x3e|else| F[Hallo Erwachsener]\n\n    style A fill:#00A17020,stroke:#00A17080,stroke-width:2px\n    style B fill:#00A17020,stroke:#00A17080,stroke-width:2px\n    style E fill:#00A17020,stroke:#00A17080,stroke-width:2px'})]})]}),"\n",(0,s.jsx)(n.h3,{id:"erl\xe4uterung",children:"Erl\xe4uterung"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Es existiert eine Variable ",(0,s.jsx)(n.em,{children:"age"})," vom Typ ",(0,s.jsx)(n.code,{children:"int"})," mit dem Wert ",(0,s.jsx)(n.code,{children:"14"})]}),"\n",(0,s.jsxs)(n.li,{children:["Die ",(0,s.jsx)(n.code,{children:"if"}),"-Block Bedingung ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.em,{children:"(Linie 3)"})," wir ausgef\xfchrt"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Die Bedingung pr\xfcft ob es sich um ein Kind handelt, also kleiner als 12 ist"}),"\n",(0,s.jsxs)(n.li,{children:["Da der Wert von ",(0,s.jsx)(n.em,{children:"age"})," ",(0,s.jsx)(n.code,{children:"14"})," ist, ist der ",(0,s.jsx)(n.code,{children:"boolean"})," der Pr\xfcfung ",(0,s.jsx)(n.code,{children:"false"}),", also\nfalsch"]}),"\n",(0,s.jsxs)(n.li,{children:["Der Code-Block ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.em,{children:"(Linie 4)"})," wird \xfcbersprungen"]})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Die ",(0,s.jsx)(n.code,{children:"else if"})," Bedingung ",(0,s.jsx)(n.em,{children:"(Linie 6)"})," wird nun ausgef\xfchrt","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Es wird gepr\xfcft ob der Wert von ",(0,s.jsx)(n.code,{children:"age"})," kleiner als 18 ist."]}),"\n",(0,s.jsxs)(n.li,{children:["Da der Wert 14 kleiner als 18 ist, ist der ",(0,s.jsx)(n.code,{children:"boolean"})," der ",(0,s.jsxs)(n.strong,{children:["Pr\xfcfung ",(0,s.jsx)(n.code,{children:"true"}),",\nalso richtig"]})]}),"\n",(0,s.jsxs)(n.li,{children:["Der ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"else if"}),"-Block ",(0,s.jsx)(n.em,{children:"(Linie 7)"})," wird ausgef\xfchrt"]}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Da eine Bedingung ",(0,s.jsx)(n.code,{children:"true"})," war, wird der ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"else"}),"-Block ",(0,s.jsx)(n.em,{children:"(Linie 10)"}),"\n\xfcbersprungen!"]})]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>d});var s=i(7294);const l={},r=s.createContext(l);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);