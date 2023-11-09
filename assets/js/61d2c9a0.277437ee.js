"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[6327],{3629:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var t=i(5893),r=i(1151);const s={sidebar_position:2,keywords:["pdf"]},l="do { } while-Schlaufe",a={id:"woche05/5a-while/dowhile",title:"do { } while-Schlaufe",description:'Zus\xe4tzlich zur while-Schlaufe existiert eine sogenannt "flussgesteuerte"',source:"@site/docs/woche05/5a-while/dowhile.md",sourceDirName:"woche05/5a-while",slug:"/woche05/5a-while/dowhile",permalink:"/bbzbl-modul-319/docs/woche05/5a-while/dowhile",draft:!1,unlisted:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/woche05/5a-while/dowhile.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:["pdf"]},sidebar:"tutorialSidebar",previous:{title:"while-Schlaufe",permalink:"/bbzbl-modul-319/docs/woche05/5a-while/while"},next:{title:"for-Schleife",permalink:"/bbzbl-modul-319/docs/woche05/5a-while/for"}},d={},o=[{value:"\ud83d\udd8a Aufgaben",id:"pen-aufgaben",level:2},{value:"Fahrenheit Umrechner",id:"fahrenheit-umrechner",level:3},{value:"Beispiel Werte zur Pr\xfcfung",id:"beispiel-werte-zur-pr\xfcfung",level:4},{value:"Guthaben aufbrauchen",id:"guthaben-aufbrauchen",level:3},{value:"Passwort-Pr\xfcfung",id:"passwort-pr\xfcfung",level:3}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"do---while-schlaufe",children:[(0,t.jsx)(n.code,{children:"do { } while"}),"-Schlaufe"]}),"\n",(0,t.jsxs)(n.p,{children:["Zus\xe4tzlich zur ",(0,t.jsx)(n.code,{children:"while"}),'-Schlaufe existiert eine sogenannt "flussgesteuerte"\nVariante von ',(0,t.jsx)(n.code,{children:"while"}),". Diese Variante ",(0,t.jsxs)(n.strong,{children:["beginnt mit dem Schl\xfcsselwort ",(0,t.jsx)(n.code,{children:"do"})]}),", und\ndas ",(0,t.jsx)(n.code,{children:"while"})," rutscht an den Schluss."]}),"\n",(0,t.jsxs)(n.p,{children:["Hier ein explizites Beispiel zur ",(0,t.jsx)(n.code,{children:"do..while"}),"-Schlaufe:"]}),"\n",(0,t.jsxs)("div",{class:"grid",children:[(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="do { } while Code-Beispiel"',children:'int x = 10;\ndo {\n    System.out.println("value of x: " + x);\n    x = x-1;\n} while (x > 0);\n'})})}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Ablaufdiagram"})}),(0,t.jsx)(n.mermaid,{value:"stateDiagram-v2\n    direction LR\n    do: { Code-Block }\n    state bedingung <<choice>>\n    [*] --\x3e do\n    state do..while {\n        do --\x3e bedingung\n        bedingung --\x3e do: true\n    }\n    bedingung --\x3e [*]: false"})]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Der ",(0,t.jsx)(n.code,{children:"do"}),"-Block in den gescheiften Klammern ",(0,t.jsx)(n.code,{children:"{}"})," wird immer einmal ausgef\xfchrt,\nbevor die Bedingung \xfcberpr\xfcft wird."]}),"\n",(0,t.jsxs)(n.li,{children:["Ist die Bedingung, wie z.B. ",(0,t.jsx)(n.code,{children:"while (x > 0)"}),", erf\xfcllt, wird der do-Block erneut\nausgef\xfchrt, solange bis die Bedingung nicht mehr erf\xfcllt ist. Die ",(0,t.jsx)(n.code,{children:"do..while"})]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"do..while",type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Der Code-Block wird ",(0,t.jsx)(n.strong,{children:"immer zuerst einmal ausgef\xfchrt"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Solange-die-Bedingung-zutrifft"})})," wird der Code-Block wiederholt\nausgef\xfchrt."]}),"\n"]})}),"\n",(0,t.jsxs)(n.h2,{id:"pen-aufgaben",children:["\ud83d\udd8a"," Aufgaben"]}),"\n",(0,t.jsx)(n.h3,{id:"fahrenheit-umrechner",children:"Fahrenheit Umrechner"}),"\n",(0,t.jsx)(n.p,{children:"Schreiben Sie ein Programm, welches eine Auflistung der Celsiuswerte von -20 bis\n100 Grad in 5er Schritten in Fahrenheit ausgibt."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Die Formel dazu lautet:"',children:"fahrenheit = (9.0/5.0) * celsius + 32\n"})}),"\n",(0,t.jsx)(n.h4,{id:"beispiel-werte-zur-pr\xfcfung",children:"Beispiel Werte zur Pr\xfcfung"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Celsius"}),(0,t.jsx)(n.th,{children:"Fahrenheit"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Gefrierpunkt"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"32"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Kochpunkt"}),(0,t.jsx)(n.td,{children:"100"}),(0,t.jsx)(n.td,{children:"212"})]})]})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Musterl\xf6sung:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="ACFahrenheit.java"',children:'public class ACFahrenheit {\n\n\tpublic static void main(String[] args) {\n\t\tdouble celsius = -20;\n\t\tdouble fahrenheit;\n\n\t\tdo {\n\t\t\tfahrenheit = (9.0 / 5.0) * celsius + 32;\n\t\t\tSystem.out.println("celsius " + celsius + " = fahrenheit " + fahrenheit);\n\t\t\tcelsius = celsius + 5;\n\t\t} while (celsius <= 100);\n\t}\n\n}\n'})})]}),"\n",(0,t.jsx)(n.h3,{id:"guthaben-aufbrauchen",children:"Guthaben aufbrauchen"}),"\n",(0,t.jsx)(n.p,{children:"Schreiben Sie ein Programm, welches zuerst ein Startguthaben von 100.00 Franken\nin einer Variablen festlegt."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Nun soll jeweils wiederholt der Benutzer \xfcber sein aktuelles Guthaben\ninformiert und nach einem Betrag gefragt werden, den man abheben m\xf6chte."}),"\n",(0,t.jsx)(n.li,{children:"Dieser Betrag wird so lange abgezogen, bis das Guthaben 0 oder weniger\nbetr\xe4gt."}),"\n",(0,t.jsx)(n.li,{children:"Am Schluss soll \xabSorry, your balance now is zero or below\xbb auf die Konsole\nausgegeben werden."}),"\n"]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Musterl\xf6sung:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="AD1Balance.java"',children:'import mytools.StdInput;\n\npublic class AD1Balance {\n\tpublic static void main(String[] args) {\n\n\t\tdouble balance = 100.0;\n\n\t\tdo {\n\t\t\tSystem.out.println("Your credit is " + balance + ", please enter the amount to withdraw");\n\t\t\tdouble amount = StdInput.readDouble();\n\t\t\tbalance = balance - amount;\n\t\t} while (balance > 0);\n\n\t\tSystem.out.println("Sorry, your balance now is zero or below");\n\n\t}\n}\n'})})]}),"\n",(0,t.jsx)(n.h3,{id:"passwort-pr\xfcfung",children:"Passwort-Pr\xfcfung"}),"\n",(0,t.jsxs)(n.p,{children:["Erstellen Sie ein Programm, welches mittels ",(0,t.jsx)(n.code,{children:"do..while"}),' nach dem Passwort\n"abrakadabra" fragt.']}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Solange das Passwort falsch ist, soll die Anforderung wiederholt werden."}),"\n",(0,t.jsx)(n.li,{children:'Sobald das Passwort "abrakadabra" richtig eingegeben wurde, soll dem Benutzer\ndie Best\xe4tigung \u201eLogged in!\u201c angezeigt werden.'}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Falls es nicht klappt \u2794 if-Blatt lesen \u2794 Regeln f\xfcr String!"})}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Musterl\xf6sung:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="AD2Password.java"',children:'import mytools.StdInput;\n\npublic class AD2Password {\n\n\tpublic static void main(String[] args) {\n\t\tString password = "abrakadabra";\n\t\tString entry = "";\n\n\t\tdo {\n\n\t\t\tSystem.out.print("Please enter the password: ");\n\t\t\tentry = StdInput.readString();\n\t\t} while (!password.equals(entry));\n\n\t\tSystem.out.println("Logged in!");\n\t}\n}\n'})})]})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var t=i(7294);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);