"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[3444],{3905:(e,n,i)=>{i.d(n,{Zo:()=>s,kt:()=>g});var t=i(67294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function d(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=t.createContext({}),u=function(e){var n=t.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},s=function(e){var n=u(e.components);return t.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=u(i),g=a,h=m["".concat(o,".").concat(g)]||m[g]||p[g]||r;return i?t.createElement(h,l(l({ref:n},s),{},{components:i})):t.createElement(h,l({ref:n},s))}));function g(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=m;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var u=2;u<r;u++)l[u]=i[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}m.displayName="MDXCreateElement"},80384:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var t=i(87462),a=(i(67294),i(3905));const r={sidebar_position:3},l="for",d={unversionedId:"4a-while/for",id:"4a-while/for",title:"for",description:"Neben while und do..while existiert noch eine dritte Schleifenart, die",source:"@site/docs/4a-while/for.md",sourceDirName:"4a-while",slug:"/4a-while/for",permalink:"/bbzbl-modul-319/docs/4a-while/for",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"do..while",permalink:"/bbzbl-modul-319/docs/4a-while/dowhile"},next:{title:"5 - Methoden und Fehleranalyse (Debugging)",permalink:"/bbzbl-modul-319/docs/5a-methoden-fehleranalyse/"}},o={},u=[{value:"Grundform",id:"grundform",level:2},{value:"for - Muster",id:"for---muster",level:4},{value:"for - Ablaufdiagram",id:"for---ablaufdiagram",level:4},{value:"<code>&lt;Z\xe4hlervariable&gt;</code>",id:"z\xe4hlervariable",level:4},{value:"<code>&lt;Bedingung&gt;</code>",id:"bedingung",level:4},{value:"<code>&lt;Schrittweite&gt;</code>",id:"schrittweite",level:4},{value:"<code>&lt;Anweisungen, Sequenz&gt;</code>",id:"anweisungen-sequenz",level:4},{value:"Grundform am Beispiel",id:"grundform-am-beispiel",level:3},{value:"Programmablauf",id:"programmablauf",level:2},{value:"\ud83d\udcdd Aufgaben",id:"-aufgaben",level:2},{value:"Auftrag 1",id:"auftrag-1",level:3},{value:"Auftrag 2a",id:"auftrag-2a",level:3},{value:"Auftrag 2b",id:"auftrag-2b",level:3},{value:"Auftrag 3",id:"auftrag-3",level:3},{value:"Auftrag 4",id:"auftrag-4",level:3},{value:"Auftrag 5",id:"auftrag-5",level:3}],s={toc:u};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"for"},(0,a.kt)("inlineCode",{parentName:"h1"},"for")),(0,a.kt)("p",null,"Neben ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"do..while")," existiert noch eine dritte Schleifenart, die\n",(0,a.kt)("inlineCode",{parentName:"p"},"for"),"-Schleife."),(0,a.kt)("p",null,"Die ",(0,a.kt)("inlineCode",{parentName:"p"},"for"),"-Schleife ist eine Erweiterung der ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," Schleife, sodass zwischen\nden runden Klammern ",(0,a.kt)("inlineCode",{parentName:"p"},"()")," nicht nur eine ",(0,a.kt)("inlineCode",{parentName:"p"},"<Bedingung>")," definiert wird, sonder\nauch eine ",(0,a.kt)("inlineCode",{parentName:"p"},"<Z\xe4hlervariable>")," sowie eine ",(0,a.kt)("inlineCode",{parentName:"p"},"<Schrittweite>"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udca1 Die drei Teile werden mit einem ",(0,a.kt)("inlineCode",{parentName:"li"},";")," Semikolon getrennt."),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udca1 F\xfcr die ",(0,a.kt)("inlineCode",{parentName:"li"},"for"),"-Schleife existiert ",(0,a.kt)("s",null,"keine ",(0,a.kt)("inlineCode",{parentName:"li"},"do..for"))," Variante.")),(0,a.kt)("h2",{id:"grundform"},"Grundform"),(0,a.kt)("p",null,"Die for Kontrollstruktur ist zuerst einmal gew\xf6hnungsbed\xfcrftig. Das Muster sieht\nso aus:"),(0,a.kt)("div",{class:"grid"},(0,a.kt)("div",null,(0,a.kt)("h4",{id:"for---muster"},"for - Muster"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"for (\n  <Z\xe4hlervariable>;\n  <Bedingung>;\n  <Schrittweite>\n) {\n    <Anweisungen, Sequenz>\n}\n")),(0,a.kt)("admonition",{title:"Semikolon",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Die 3 Teile in den Runden Klammern ",(0,a.kt)("inlineCode",{parentName:"p"},"()")," sind mit einem Semikolon ",(0,a.kt)("inlineCode",{parentName:"p"},";")," getrennt!\n",(0,a.kt)("em",{parentName:"p"},"(und stehen meist auf einer Linie nebeneinander)")))),(0,a.kt)("div",null,(0,a.kt)("h4",{id:"for---ablaufdiagram"},"for - Ablaufdiagram"),(0,a.kt)("mermaid",{value:"stateDiagram-v2\n    direction TB\n    [*] --\x3e init\n    state bedingung <<choice>>\n\n    state for {\n        init: < Z\xe4hlervariable >\n        do: { Code-Block }\n        schritt: < Schrittweite >\n\n        init --\x3e bedingung\n        bedingung --\x3e do: true\n        do --\x3e schritt\n        schritt --\x3e bedingung\n    }\n\n    bedingung --\x3e [*]: false\n"}))),(0,a.kt)("div",{class:"grid three"},(0,a.kt)("div",null,(0,a.kt)("h4",{id:"z\xe4hlervariable"},(0,a.kt)("inlineCode",{parentName:"h4"},"<Z\xe4hlervariable>")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Ganz am Anfang")," wird die ",(0,a.kt)("inlineCode",{parentName:"p"},"<Z\xe4hlervariable>")," initialisiert und ist im\nCode-Block sichtbar."),(0,a.kt)("p",null,"\ud83d\udca1 H\xe4ufig dient die ",(0,a.kt)("inlineCode",{parentName:"p"},"<Z\xe4hlervariable>")," als Indexnummer und heisst dadurch\n",(0,a.kt)("inlineCode",{parentName:"p"},"i"),".")),(0,a.kt)("div",null,(0,a.kt)("h4",{id:"bedingung"},(0,a.kt)("inlineCode",{parentName:"h4"},"<Bedingung>")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Vor jeder Sequenz")," wird die Bedingung auf Wahrheit gepr\xfcft (",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"), ob die\ndie ",(0,a.kt)("inlineCode",{parentName:"p"},"<Anweisungen, Sequenz>")," ausgef\xfchrt werden sollen oder ob die Schlaufe\nbeendet wird."),(0,a.kt)("p",null,"\ud83d\udca1 Meistens betrifft die ",(0,a.kt)("inlineCode",{parentName:"p"},"<Bedingung>")," die ",(0,a.kt)("inlineCode",{parentName:"p"},"<Z\xe4hlervariable>"),".")),(0,a.kt)("div",null,(0,a.kt)("h4",{id:"schrittweite"},(0,a.kt)("inlineCode",{parentName:"h4"},"<Schrittweite>")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Am Schluss einer Sequenz"),", vor der ",(0,a.kt)("inlineCode",{parentName:"p"},"<Bedingung>"),", wird die ",(0,a.kt)("inlineCode",{parentName:"p"},"<Z\xe4hlervariable>")," hoch\noder runter gez\xe4hlt."),(0,a.kt)("p",null,"\ud83d\udca1 ",(0,a.kt)("inlineCode",{parentName:"p"},"i++")," Z\xe4hlt z.B. die Variable ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," mit der Schrittweite 1 hoch."))),(0,a.kt)("h4",{id:"anweisungen-sequenz"},(0,a.kt)("inlineCode",{parentName:"h4"},"<Anweisungen, Sequenz>")),(0,a.kt)("p",null,"Die ",(0,a.kt)("inlineCode",{parentName:"p"},"<Anweisungen>")," im Code-Block werden Ausgef\xfchrt, solange die ",(0,a.kt)("inlineCode",{parentName:"p"},"<Bedingung>"),"\nwahr (",(0,a.kt)("inlineCode",{parentName:"p"},"true"),") ist."),(0,a.kt)("h3",{id:"grundform-am-beispiel"},"Grundform am Beispiel"),(0,a.kt)("p",null,"Damit es weniger abstrakt ist, hier ein Beispiel als ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," sowie ",(0,a.kt)("inlineCode",{parentName:"p"},"while"),"\nSchleife, welches die Zahlen 0 bis 4 ausgibt. Dies soll veranschaulichen, wieso\ndie ",(0,a.kt)("inlineCode",{parentName:"p"},"for"),"-Schleife zus\xe4tzlich zur ",(0,a.kt)("inlineCode",{parentName:"p"},"while"),"-Schlaufe in fast jeder\nprogrammiersprache existiert."),(0,a.kt)("div",{class:"grid"},(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"for")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",5:!0,className:"language-java",metastring:'title="for: Wiederhole 5 mal fix"',title:'"for:',Wiederhole:!0,mal:!0,'fix"':!0},"public class FixeWiederholung {\n\n    public static void main(String[] args) {\n        // highlight-start\n        for (int i = 0; i < 5; i++) {\n            System.out.println(i);\n        }\n        // highlight-end\n    }\n\n}\n")),(0,a.kt)("p",null,"Es wird als Erstes die Variable ",(0,a.kt)("inlineCode",{parentName:"p"},"int i = 0;")," initialisiert. Sobald die\nAnweisungen innerhalb des Code-Blocks abgearbeitet sind\n(",(0,a.kt)("inlineCode",{parentName:"p"},"System.out.pringln(i);"),"), springt die Programmausf\xfchrung bei der schliessenden\ngeschweiften Klammer wieder zur\xfcck zum for, ver\xe4ndert die Variable um die\nSchrittweite (",(0,a.kt)("inlineCode",{parentName:"p"},"i++"),") und pr\xfcft, ob die Bedingung (",(0,a.kt)("inlineCode",{parentName:"p"},"i < 5"),") noch erf\xfcllt ist.\nWenn ja, wird die Schleife erneut ausgef\xfchrt.")),(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"while")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",5:!0,className:"language-java",metastring:'title="while: Wiederhole 5 mal fix"',title:'"while:',Wiederhole:!0,mal:!0,'fix"':!0},"public class FixeWiederholungWhile {\n\n    public static void main(String[] args) {\n        // highlight-yellow-next-line\n        int i = 0;\n        // highlight-start\n        while (i < 5) {\n          System.out.println(i);\n          i++;\n        }\n        // highlight-end\n    }\n\n}\n")),(0,a.kt)("p",null,"Die ",(0,a.kt)("inlineCode",{parentName:"p"},"while")," Variante verh\xe4lt sie gleich wie die ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," Variante. Sie brauch\njedoch mehr Zeilen."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Wieso wird ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"for")," hier bevorzugt?"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"int i = 0;")," ist ausserhalb der Schlaufe initialisiert!"),(0,a.kt)("p",{parentName:"admonition"},"Dadurch ist diese also in der ganzen \xe4usseren Methode sichtbar und nicht nur im\nCode-Block der Schlaufe und existiert auch nach dem Beenden der Schlaufe weiter.")))),(0,a.kt)("div",{class:"grid three"},(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"<Z\xe4hlervariable>"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"int i = 0"),": Eine Variable ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," mit Datentyp ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," wird mit ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," initialisiert")),(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"<Bedingung>"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"i < 5"),": Solange ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," kleiner als 5 ist, wird die for-Schleife weiterhin\nausgef\xfchrt")),(0,a.kt)("div",null,(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"<Schrittweite>"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"i++"),": Die Variable ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," wird bei jedem Durchlauf um 1 erh\xf6ht"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"<Anweisungen, Sequenz>"))),(0,a.kt)("p",null,"Mir der Anweisung ",(0,a.kt)("inlineCode",{parentName:"p"},"System.out.println(i);")," wird bei jeder Sequenz/Iteration bei\nder die ",(0,a.kt)("inlineCode",{parentName:"p"},"<Bedingung>")," wahr ist, die Variable ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," auf die Konsole ausgegeben."),(0,a.kt)("h2",{id:"programmablauf"},"Programmablauf"),(0,a.kt)("p",null,"Eine for-Schleife wird so durchlaufen, wie folgend dargestellt. Wenn die\nBedingung nicht mehr erf\xfcllt ist, wird die Schleife beendet und es wird die\nerste Anweisung unterhalb der Schleife ausgef\xfchrt (roter Pfeil)."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(31850).Z,width:"892",height:"274"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Die Bearbeitung der for-Schleife beginnt beim roten Pfeil. Es wird im ersten\nTeil die ",(0,a.kt)("inlineCode",{parentName:"li"},"<Z\xe4hlervariable>")," ",(0,a.kt)("inlineCode",{parentName:"li"},"i")," mit 0 initialisiert."),(0,a.kt)("li",{parentName:"ol"},"Im zwieten Teil, der ",(0,a.kt)("inlineCode",{parentName:"li"},"<Bedingung>"),", wird gepr\xfcft ob die Z\xe4hlervariable ",(0,a.kt)("inlineCode",{parentName:"li"},"i"),"\nkleiner als 5 ist."),(0,a.kt)("li",{parentName:"ol"},"Da dies der Fall ist, wird nun die ",(0,a.kt)("inlineCode",{parentName:"li"},"<Anweisungen>")," (",(0,a.kt)("inlineCode",{parentName:"li"},"System.out.println(i);"),")\nim Code-Block ",(0,a.kt)("inlineCode",{parentName:"li"},"{}")," ausgef\xfchrt."),(0,a.kt)("li",{parentName:"ol"},'Danach wird "nach oben" zum letzten Teil, der ',(0,a.kt)("inlineCode",{parentName:"li"},"<Schrittweite>")," gesprungen.\nHier wird durch ",(0,a.kt)("inlineCode",{parentName:"li"},"i++")," die ",(0,a.kt)("inlineCode",{parentName:"li"},"<Z\xe4hlervariable>")," ",(0,a.kt)("inlineCode",{parentName:"li"},"i")," um 1 hochgez\xe4hlt."),(0,a.kt)("li",{parentName:"ol"},"Nun wird wieder zur ",(0,a.kt)("inlineCode",{parentName:"li"},"<Bedingung>")," gesprungen."),(0,a.kt)("li",{parentName:"ol"},"Wenn die Variable ",(0,a.kt)("inlineCode",{parentName:"li"},"i")," immer noch kleiner als 5 ist, wird die ",(0,a.kt)("inlineCode",{parentName:"li"},"<Anweisung>"),"\nwiederholt ausgef\xfchrt.")),(0,a.kt)("p",null,"Die Punkte 3-6 (gr\xfcn), werden solange wiederholt, bis die ",(0,a.kt)("inlineCode",{parentName:"p"},"<Bedingung>")," falsch\n(",(0,a.kt)("inlineCode",{parentName:"p"},"false"),") und somit die Variable ",(0,a.kt)("inlineCode",{parentName:"p"},"i")," mindestens 5 ist. Im oberen Beispiel wird\ndas nach der 5. Wiederholung der Fall sein."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Ausgabe vom oberen Beispiel"',title:'"Ausgabe',vom:!0,oberen:!0,'Beispiel"':!0},"0\n1\n2\n3\n4\n")),(0,a.kt)("h2",{id:"-aufgaben"},"\ud83d\udcdd Aufgaben"),(0,a.kt)("h3",{id:"auftrag-1"},"Auftrag 1"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Geben Sie die Zahlen von 1 bis 10 aus."),(0,a.kt)("li",{parentName:"ol"},"Geben Sie die Zahlen von 37 bis 55 aus."),(0,a.kt)("li",{parentName:"ol"},"Geben Sie jede zweite Zahl von 18 bis 96 aus."),(0,a.kt)("li",{parentName:"ol"},"Fragen Sie den Benutzer nach Startwert, Endwert und Schrittweite und geben\nSie die entsprechenden Zahlen aus.")),(0,a.kt)("h3",{id:"auftrag-2a"},"Auftrag 2a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Schreiben Sie ein Programm, das eine Zeile mit 10 Sternen ausgibt."),(0,a.kt)("li",{parentName:"ul"},"Die Sterne sollen einzeln in einer for-Schleife ausgegeben werden (also bei\njedem Durchlauf der Schleife wird ein Stern der Zeile hinzugef\xfcgt)."),(0,a.kt)("li",{parentName:"ul"},"Verwenden Sie dazu die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"System.out.print")," (und nicht\nSystem.out.println). Die Ausgabe sieht also so aus:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Ausgabe"',title:'"Ausgabe"'},"**********\n")),(0,a.kt)("h3",{id:"auftrag-2b"},"Auftrag 2b"),(0,a.kt)("p",null,"Erweitern Sie das obige Programm so, dass 5 Zeilen mit jeweils 10 Sternen\nausgegeben werden. Die 5 Zeilen m\xfcssen auch in einer for-Schleife erstellt\nwerden. Die Ausgabe sollte also so aussehen :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Ausgabe"',title:'"Ausgabe"'},"**********\n**********\n**********\n**********\n**********\n")),(0,a.kt)("h3",{id:"auftrag-3"},"Auftrag 3"),(0,a.kt)("p",null,"Schreiben Sie ein Programm Flaggen, das folgende Anforderungen erf\xfcllt:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"die Anzahl Zeilen f\xfcr die Flaggen werden vom Benutzer angegeben"),(0,a.kt)("li",{parentName:"ul"},"Zeile 1 enth\xe4lt 1 Stern, Zeile n enth\xe4lt n Sterne Die Ausgabe soll so\naussehen:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Ausgabe"',title:'"Ausgabe"'},"Flaggen 1\nAnzahl Zeilen: 5\n*\n**\n***\n****\n*****\n")),(0,a.kt)("h3",{id:"auftrag-4"},"Auftrag 4"),(0,a.kt)("p",null,"Erweitern Sie das Programm so, dass der Benutzer das Zeichen, mit dem die Flagge\ngezeichnet wird, selbst festlegen kann."),(0,a.kt)("p",null,"Die Ausgabe soll so aussehen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Ausgabe"',title:'"Ausgabe"'},"Flaggen 2\nAnzahl Zeilen: 5\nZeichen: x\nx\nxx\nxxx\nxxxx\nxxxxx\n")),(0,a.kt)("h3",{id:"auftrag-5"},"Auftrag 5"),(0,a.kt)("p",null,"Erweitern Sie das Programm so, dass der Benutzer eingeben kann, wie viele\nFlaggen gezeichnet werden."),(0,a.kt)("p",null,"Die Ausgabe soll so aussehen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Ausgabe"',title:'"Ausgabe"'},"Flaggen 3\nAnzahl Zeilen: 5\nAnzahl Flaggen: 2\nZeichen: @\n\nFlagge 1\n@\n@@\n@@@\n@@@@\n@@@@@\n\nFlagge 2\n@\n@@\n@@@\n@@@@\n@@@@@\n")))}p.isMDXComponent=!0},31850:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/for-loop-cd7d017ca387cecb5c98160de08388a8.png"}}]);