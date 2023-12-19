"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[4804],{9330:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var r=i(5893),s=i(1151);const t={keywords:["pdf"]},d="Java Kompilierung",l={id:"woche01/1b-hello-world/aufgabe5-compiler",title:"Java Kompilierung",description:"Wenn die Klassen ausgef\xfchrt werden, erfolgt durch die Entwicklungsumgebung eine",source:"@site/docs/woche01/1b-hello-world/aufgabe5-compiler.md",sourceDirName:"woche01/1b-hello-world",slug:"/woche01/1b-hello-world/aufgabe5-compiler",permalink:"/bbzbl-modul-319/docs/woche01/1b-hello-world/aufgabe5-compiler",draft:!1,unlisted:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/woche01/1b-hello-world/aufgabe5-compiler.md",tags:[],version:"current",frontMatter:{keywords:["pdf"]},sidebar:"tutorialSidebar",previous:{title:"Analyse des Programms",permalink:"/bbzbl-modul-319/docs/woche01/1b-hello-world/aufgabe4-klammern-bloecke"},next:{title:"\ud83d\udcd0 Konventionen / Kommentare",permalink:"/bbzbl-modul-319/docs/woche01/aufgabe5-konventionen"}},a={},c=[{value:"\ud83d\udd8a A6: Das <code>bin</code>-Verzeichnis und <code>.class</code>-Dateien suchen",id:"pen-a6-das-bin-verzeichnis-und-class-dateien-suchen",level:2},{value:"Quellcode, Compiler, Interpreter",id:"quellcode-compiler-interpreter",level:2},{value:"Interpetationsversuch",id:"interpetationsversuch",level:3},{value:"\ud83d\udd8a A7: Umwandlung Visualisieren",id:"pen-a7-umwandlung-visualisieren",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"java-kompilierung",children:"Java Kompilierung"}),"\n",(0,r.jsxs)(n.p,{children:["Wenn die Klassen ausgef\xfchrt werden, erfolgt durch die Entwicklungsumgebung eine\nUmwandlung im Hintergrund, und aus den ",(0,r.jsx)(n.code,{children:".java"}),"-Dateien werden ",(0,r.jsx)(n.code,{children:".class"}),"-Dateien,\ndie in einem Verzeichnis namens ",(0,r.jsx)(n.code,{children:"bin"})," abgelegt werden. Erst die ",(0,r.jsx)(n.code,{children:".class"}),"-Dateien\nk\xf6nnen ausgef\xfchrt werden."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"src bin",src:i(7264).Z+"",width:"525",height:"173"})}),"\n",(0,r.jsxs)(n.h2,{id:"pen-a6-das-bin-verzeichnis-und-class-dateien-suchen",children:["\ud83d\udd8a"," A6: Das ",(0,r.jsx)(n.code,{children:"bin"}),"-Verzeichnis und ",(0,r.jsx)(n.code,{children:".class"}),"-Dateien suchen"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["auf dem ",(0,r.jsx)(n.code,{children:"src"}),"-Ordner die rechte Maustaste bet\xe4tigen und dann ",(0,r.jsx)(n.em,{children:"Show in =>\nSystem Explorer"})," w\xe4hlen. ",(0,r.jsx)(n.img,{alt:"show in",src:i(2951).Z+"",width:"654",height:"361"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Suchen Sie von hier aus auch das ",(0,r.jsx)(n.code,{children:"bin"}),"-Verzeichnis. Sie sollten darin die\n",(0,r.jsx)(n.code,{children:"class"}),"-Dateien sehen. Diese werden jeweils bei jeglicher Ver\xe4nderung durch\nEclipse neu an dieser Stelle erzeugt."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\xd6ffnen sie die ",(0,r.jsx)(n.code,{children:"HelloWorld.class"})," Datei mit dem Microsoft Editor. Oder auf\nMac mit dem ",(0,r.jsx)(n.code,{children:"TextEdit"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"quellcode-compiler-interpreter",children:"Quellcode, Compiler, Interpreter"}),"\n",(0,r.jsx)(n.p,{children:"Programme entstehen aus Quelltext, hier Java, der durch einen Compiler entweder\nin ein Maschinenprogramm oder in ein Zwischenformat \xfcbersetzt wird, und dann\ndirekt vom Computer ausgef\xfchrt werden kann."}),"\n",(0,r.jsx)(n.p,{children:"Java verfolgt einen zweistufigen \xdcbersetzungsprozess. Der Programmcode in Java\nwird nicht zu einem ausf\xfchrbaren Programm, sondern in einen Zwischencode, den\nsogenannten Bytecode, kompiliert. Dieser Code ist f\xfcr alle Plattformen gleich\nund kann mithilfe des entsprechenden plattformspezifischen Interpreters auf der\njeweiligen Plattform ausgef\xfchrt werden. Java-Interpreter werden auch virtuelle\nMaschinen (JVM) genannt."}),"\n",(0,r.jsx)(n.h3,{id:"interpetationsversuch",children:"Interpetationsversuch"}),"\n",(0,r.jsx)(n.p,{children:"Ihr versteht nur Bahnhof? Hier, ein Versuch das obige an einem Beispiel zu\nerl\xe4utern:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Reale-Welt"}),(0,r.jsx)(n.th,{children:"Java"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Stellt euch vor Ihr seit die Chef",":in"," eines Internationalen Unternehmens."]}),(0,r.jsx)(n.td,{children:"Viele Computer mit verschiedenen Betriebssystemen."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Die Aufgaben und Befehle werden alle von Spezialisten in schweizerdeutsch erfasst."}),(0,r.jsx)(n.td,{children:"Java ist in diesem Falle Schweizerdeutsch"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Euer Unternehmen hat an jedem Standort lokale Arbeiter die nur die Landessprachen sprechen und dadurch auch nur in dieser Sprache Befehle ausf\xfchren k\xf6nnen."}),(0,r.jsxs)(n.td,{children:["Diese k\xf6nnen mit den Betriebssystemen verglichen werden (MacOs, Windows, Linux). Jedes Betriebssystem hat eigene Codierungen! ",(0,r.jsx)(n.em,{children:"(Deswegen funktionieren die meisten Games nur auf Windows)"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Da Schweizerdeutsch sehr ineffizient (besitzt viele Floskeln) und wenig verbreitet ist, wird vom einem Mitarbeiter alles Schweizerdeutsche ins Englische \xdcbersetzt. Bei der \xdcbersetzung ins Englische wird zudem darauf geachtet die ",(0,r.jsx)(n.strong,{children:"Aufgaben zu optimieren"}),"."]}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"Das ist die Arbeit vom Compiler!"})," Java (Schweizerdeutsch) in Bytecode (Englisch). Es wird auch geschaut dass das Programm optimiert werden kann! ",(0,r.jsx)(n.em,{children:"(Compiler Programmierer sind die wahren Helden)"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"An jedem Standort hat die Firma Personen angestellt die Englisch k\xf6nnen und vom Englischen in die jeweilige Landessprache \xfcbersetzen kann. Damit die lokalen Arbeiter effizient ihre Aufgaben erledigen k\xf6nnen."}),(0,r.jsxs)(n.td,{children:["Der Bytecode (Englisch), wird also bei jedem Betriebssystem lokal \xfcbersetzt rsp. interpretiert, damit es auf dem jeweiligen Betriebssystem ausgef\xfchrt werden kann. ",(0,r.jsx)(n.strong,{children:"Dies ist die Arbeit der Java Virtual Machine."})]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Nun nach dieser Tabelle, liest bitte nochmals\n",(0,r.jsx)(n.a,{href:"#quellcode-compiler-interpreter",children:"von vorne"})]}),"\n",(0,r.jsx)(n.admonition,{title:"Don't Panik!",type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Man muss das obige nicht zu 100% verstanden haben um ein guter Programmierer\nzu werden!"}),"\n",(0,r.jsx)(n.li,{children:"Ein guter Rennfahrer muss auch nicht ein guter Mechaniker sein ;)"}),"\n"]})}),"\n",(0,r.jsxs)(n.h2,{id:"pen-a7-umwandlung-visualisieren",children:["\ud83d\udd8a"," A7: Umwandlung Visualisieren"]}),"\n",(0,r.jsx)(n.p,{children:"Erstellen Sie eine eigene Visualisierung, welche f\xfcr Ihr HelloWorld Programm\naufzeigt, wie der Sourcecode zu einem ausf\xfchrbaren Programm \xfcberf\xfchrt wird,\nwelcher von einem Interpreter ausgef\xfchrt werden kann."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},2951:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/show-in-1e6744d613868164f67139b3008d54d0.png"},7264:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/src-bin-601a46d778f29d36c11c1a8ac3b7f3c4.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>d});var r=i(7294);const s={},t=r.createContext(s);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);