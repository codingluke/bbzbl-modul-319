"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[1810],{2826:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var i=r(5893),t=r(1151);const s={sidebar_position:3,keywords:["pdf"]},d="\ud83d\udcd6 Methoden Vertiefung",l={id:"woche04/4a-methoden-fehleranalyse/methoden",title:"\ud83d\udcd6 Methoden Vertiefung",description:"Jetzt lernen Sie, wie Sie Methoden erstellen k\xf6nnen, denen Sie bestimmte Werte",source:"@site/docs/woche04/4a-methoden-fehleranalyse/methoden.md",sourceDirName:"woche04/4a-methoden-fehleranalyse",slug:"/woche04/4a-methoden-fehleranalyse/methoden",permalink:"/bbzbl-modul-319/docs/woche04/4a-methoden-fehleranalyse/methoden",draft:!1,unlisted:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/woche04/4a-methoden-fehleranalyse/methoden.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,keywords:["pdf"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd8a\ufe0f Methoden Aufgaben",permalink:"/bbzbl-modul-319/docs/woche04/4a-methoden-fehleranalyse/aufgaben"},next:{title:"\ud83d\udcd6 Geltungsbereich von lokalen Variablen",permalink:"/bbzbl-modul-319/docs/woche04/4a-methoden-fehleranalyse/geltungsbereich-variablen"}},a={},h=[{value:"Anatomie einer Methode",id:"anatomie-einer-methode",level:2},{value:"\ud83e\uddec Signatur / Kopf / Struktur <code>public ...</code>",id:"dna-signatur--kopf--struktur-public-",level:3},{value:"\ud83e\uddbe Methodenk\xf6rper <code>{ ... }</code>",id:"-methodenk\xf6rper---",level:3},{value:"R\xfcckgabe <code>return</code>",id:"r\xfcckgabe-return",level:4},{value:"\ud83d\udc40 Beispiel Methode mit Parameter und R\xfcckgabewert",id:"eyes-beispiel-methode-mit-parameter-und-r\xfcckgabewert",level:3},{value:"Ablauf des Beispiels",id:"ablauf-des-beispiels",level:4},{value:"\ud83d\udcfa Erkl\xe4rvideos von Studyflix",id:"tv-erkl\xe4rvideos-von-studyflix",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"-methoden-vertiefung",children:"\ud83d\udcd6 Methoden Vertiefung"}),"\n",(0,i.jsxs)(n.p,{children:["Jetzt lernen Sie, wie Sie Methoden erstellen k\xf6nnen, ",(0,i.jsx)(n.strong,{children:"denen Sie bestimmte Werte\n\xfcbermitteln"})," und die ein berechnetes ",(0,i.jsx)(n.strong,{children:"Ergebnis zur\xfcckgeben"})," k\xf6nnen."]}),"\n",(0,i.jsx)(n.h2,{id:"anatomie-einer-methode",children:"Anatomie einer Methode"}),"\n",(0,i.jsxs)(n.p,{children:["Im Programmieren gibt es immer Code der die ",(0,i.jsxs)(n.strong,{children:["\ud83e\uddec"," Struktur"]})," , definiert, das\n",(0,i.jsx)(n.strong,{children:"wie"}),", und Code der ",(0,i.jsx)(n.strong,{children:"konkret etwas macht"})," \ud83e\uddbe, das ",(0,i.jsx)(n.strong,{children:"was"}),". Stellt euch ein\nHaus vor. Die Struktur sind die R\xe4ume, T\xfcren, Fenster. Der Architekt definiert\nwie das Haus aussehen soll. Nun Stellt sich noch die Frage um das was. Wof\xfcr\nwird das Haus gebaut?"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Handelt es sich um einen Bunker, dann wird im Haus Schutz gesucht. Es braucht\nalso keine Fenster."}),"\n",(0,i.jsxs)(n.li,{children:["Handelt es sich aber um eine Uhrenwerkstatt, ist Licht ganz wichtig. Da\nbraucht es viele Fenster.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Auch wird etwas produziert, es braucht also auch einen Wahrenausgang\n(",(0,i.jsx)(n.code,{children:"return"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"dna-signatur--kopf--struktur-public-",children:["\ud83e\uddec"," Signatur / Kopf / Struktur ",(0,i.jsx)(n.code,{children:"public ..."})]}),"\n",(0,i.jsxs)(n.p,{children:["Die unten hervorgehobene Zeile einer Methode, in der die Sichtbarkeit, Name,\nParameter und der Datentyp des R\xfcckgabewertes deklariert werden, heisst ",(0,i.jsx)(n.strong,{children:"Kopf"}),"\n(oder auch ",(0,i.jsx)(n.strong,{children:"Signatur"}),") der Methode. In der Signatur wird definiert ",(0,i.jsx)(n.strong,{children:"wie"})," die\nMethode aufgerufen werden muss. Nicht aber, was sie genau macht."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Signatur einer Methode (Zeile 1)" showLineNumbers',children:'// highlight-blue-next-line\npublic static String methodenName(int parameter1, String parameter2)\n{\n    int lokaleVariable = parameter1 + 2;\n    return lokaleVariable + " " + parameter2;\n}\n'})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Konkretes Schl\xfcsselwort"}),(0,i.jsx)(n.th,{children:"Beschreibung"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"public"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"Sichtbarkeit"}),": momentan immer ",(0,i.jsx)(n.code,{children:"public"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"static"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"Art"}),": momentan immer ",(0,i.jsx)(n.code,{children:"static"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"String"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)("a",{class:"custom-anchor",id:"return"}),(0,i.jsx)(n.strong,{children:"Datentyp vom R\xfcckgabewert"}),": ",(0,i.jsx)(n.code,{children:"void"})," oder beliebiger Datentyp ",(0,i.jsx)("br",{}),"- ",(0,i.jsx)(n.code,{children:"void"})," besitzt keinen R\xfcckgabewert und braucht kein ",(0,i.jsx)(n.code,{children:"return"})," ",(0,i.jsx)("br",{}),"- Wenn ein R\xfcckgabewert angegeben wird (z.B. ",(0,i.jsx)(n.code,{children:"String"}),"), ist ein ",(0,i.jsx)(n.code,{children:"return"})," im Methodenk\xf6rper Pflicht!"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"methodenName"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"Methodenname"}),": frei w\xe4hlbar, sollte in ",(0,i.jsx)(n.strong,{children:"lowerCamelCase"})," geschrieben sein"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"(int parameter1, String parameter2)"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"Parameterliste"}),": Kommaseparierte Parameterliste in Klammern.",(0,i.jsx)("br",{}),"- Jeder Parameter besteht aus: ",(0,i.jsx)(n.code,{children:"Datentyp Variabelnamen"}),(0,i.jsx)("br",{}),"- Jeder Parameter ist im Methodenk\xf6rper als Variable verwendbar ",(0,i.jsx)("br",{}),"- Darf leer sein ",(0,i.jsx)(n.code,{children:"()"})]})]})]})]}),"\n",(0,i.jsxs)(n.h3,{id:"-methodenk\xf6rper---",children:["\ud83e\uddbe Methodenk\xf6rper ",(0,i.jsx)(n.code,{children:"{ ... }"})]}),"\n",(0,i.jsxs)(n.p,{children:["Nach dem Kopf/Signatur folgt ",(0,i.jsxs)(n.strong,{children:["zwischen geschweiften Klammern ",(0,i.jsx)(n.code,{children:"{}"})]})," der K\xf6rper\nder Methode. Hier wird nun definiert, ",(0,i.jsx)(n.strong,{children:"was"})," gemacht werden soll, wenn die\nMethode aufgerufen wird."]}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udca1"," Im Methodenk\xf6rper befindet sich somit ",(0,i.jsx)(n.strong,{children:"der ausf\xfchrbare Code"})," in Java"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Methodenk\xf6rper, ausf\xfchrbarer Code (Zeilen 2 und 5)" showLineNumbers',children:'public static String methodenName(int parameter1, String parameter2)\n{\n// highlight-green-start\n    int lokaleVariable = parameter1 + 2;\n    return lokaleVariable + " " + parameter2;\n// highlight-green-end\n}\n'})}),"\n",(0,i.jsxs)(n.h4,{id:"r\xfcckgabe-return",children:["R\xfcckgabe ",(0,i.jsx)(n.code,{children:"return"})]}),"\n",(0,i.jsxs)(n.p,{children:["Generiert die Methode ein Resultat das zur\xfcckgegeben werden soll, geschieht\ndiese in der letzten Zeile durch das Schl\xfcsselwort ",(0,i.jsx)(n.code,{children:"return"}),". Dies bedingt in der\nSignatur den ",(0,i.jsx)(n.a,{href:"#return",children:"entsprechenden Datentyp als R\xfcckgabewert"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Datentyp f\xfcr den R\xfcckgabewert und return (Zeilen 1 und 5)" showLineNumbers',children:'// highlight-blue-next-line\npublic static String methodenName(int parameter1, String parameter2)\n//            ^^^^^^ Datentyp f\xfcr den R\xfcckgabewert\n{\n    int lokaleVariable = parameter1 + 2;\n    // highlight-green-next-line\n    return lokaleVariable + " " + parameter2;\n//         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Der R\xfcckgabewert muss hier `String` sein\n//  ^^^^^^ return ist Pflicht da in der Signatur `String` und nicht `void` steht\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Auf ",(0,i.jsx)(n.strong,{children:"Zeile 1"}),", beim Schl\xfcsselwort 3 der Signatur, wird der Datentyp f\xfcr den\nR\xfcckgabewert als ",(0,i.jsx)(n.code,{children:"String"})," definiert"]}),"\n",(0,i.jsxs)(n.li,{children:["Daher muss auf ",(0,i.jsx)(n.strong,{children:"Zeile 5"})," ein ",(0,i.jsx)(n.code,{children:"return"})," stehen das einen ",(0,i.jsx)(n.code,{children:"String"})," zur\xfcck gibt"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"eyes-beispiel-methode-mit-parameter-und-r\xfcckgabewert",children:["\ud83d\udc40"," Beispiel Methode mit Parameter und R\xfcckgabewert"]}),"\n",(0,i.jsx)(n.p,{children:"Nun wollen wir an einem expliziten Beispiel eine Methode analysieren welche \xfcber\nParameter und R\xfcckgabewert verf\xfcgt."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Wir erstellen eine Methode mit dem Namen ",(0,i.jsx)(n.code,{children:"readNumberInRange(int min, int max)"}),"\nwelche vom Benutzer eine Nummer erwartet."]}),"\n",(0,i.jsx)(n.li,{children:"Die Nummer muss sich in einem gew\xe4hlten Bereich befinden."}),"\n",(0,i.jsx)(n.li,{children:"Wenn eine Nummer eingegeben wird, welche nicht im Bereich ist, soll nochmals\nnachgefragt werden."}),"\n",(0,i.jsx)(n.li,{children:"Die korrekt eingegebene Nummer soll in der Konsole ausgegeben werden."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="Explizites Beispiel" showLineNumbers',children:'import mytools.StdInput;\n\npublic class Beispiel {\n\n  public static void main(String[] args) {\n    // highlight-yellow-next-line\n    int userInput = readNumberInRange(40, 60); // Verwendung/aufrufen\n    System.out.println("Sie haben " + userInput + " eingegeben!");\n  }\n\n  // highlight-blue-next-line\n  private static int readNumberInRange(int min, int max) // Kopf / Signatur\n  {\n    // highlight-green-start\n    // Methodenk\xf6rper / Methoden-Body\n    int userInput;\n    do {\n      System.out.print("Geben Sie eine Zahl zwischen " + min + " und " + max + " ein: ");\n      userInput = StdInput.readInt();\n    } while (min > userInput || userInput > max);\n    return userInput;\n    // highlight-green-end\n  }\n}\n'})}),"\n",(0,i.jsxs)("div",{class:"grid three",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{class:"code-block-yellow-line",children:(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["\ud83d\udce3"," Methode aufrufen"]})," ",(0,i.jsx)("br",{})," gelb, ",(0,i.jsx)(n.strong,{children:"Zeile 6"})]})}),(0,i.jsxs)(n.p,{children:["Die Verwendung befindet sich ",(0,i.jsx)(n.strong,{children:"immer in einem Methoden-Body"}),". Dies ist\nausf\xfchrbarer Code."]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{class:"code-block-blue-line",children:(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["\ud83e\uddec"," Methoden Kopf / Signatur"]})," ",(0,i.jsx)("br",{})," blau auf ",(0,i.jsx)(n.strong,{children:"Zeile 10"})]})}),(0,i.jsxs)(n.p,{children:["Es wird definiert ",(0,i.jsx)(n.strong,{children:"wie"})," eine Methode genau aufgerufen werden muss. Der\nMethoden-Kopf ist nicht ausf\xfchrbarer Code, sondern geh\xf6rt zur Struktur."]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{class:"code-block-green-line",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\ud83e\uddbe Methodenk\xf6rper"})," ",(0,i.jsx)("br",{})," gr\xfcn, ",(0,i.jsx)(n.strong,{children:"Zeilen 12 - 18"})]})}),(0,i.jsxs)(n.p,{children:["Es wird definiert ",(0,i.jsx)(n.strong,{children:"was"})," genau geschehen soll, wenn die Methode aufgerufen\nwird. Im Methoden-Body befindet sich der ausf\xfchrbare Code."]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"ablauf-des-beispiels",children:"Ablauf des Beispiels"}),"\n",(0,i.jsxs)(n.p,{children:["Hier wird nochmals das selbe Programm dargestellt. Es wird nun aufgezeigt wie\ndas Program genau durchlaufen wird. In allen Programmiersprachen wird ein\nProgramm immer von ",(0,i.jsx)(n.strong,{children:"Rechts nach Links, nach Unten"})," ","\ud83d\udc48"," durchlaufen."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(7545).Z+"",width:"945",height:"483"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Das Programm startet im K\xf6rper der Methode ",(0,i.jsx)(n.code,{children:"main"})," auf Zeile 6"]}),":"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Da es von Rechts nach Links abl\xe4uft wird zuerst die Methode\n",(0,i.jsx)(n.code,{children:"readNumberInRange(40, 60)"})," auf ",(0,i.jsx)(n.strong,{children:"Zeile 6"})," ausgef\xfchrt. Die Methode\n",(0,i.jsx)(n.code,{children:"readNumberInRange"})," wird mit den ",(0,i.jsx)(n.strong,{children:"Parameter min=40 und max=60"})," ausgef\xfchrt."]}),"\n",(0,i.jsxs)(n.li,{children:["Nun Springt das Programm in den K\xf6rper der Methode ",(0,i.jsx)(n.code,{children:"readNumberInRange"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Zuerst wird auf ",(0,i.jsx)(n.strong,{children:"Zeile 13"})," die lokale Variable ",(0,i.jsx)(n.code,{children:"int userInput;"}),"\ndeklariert. Sie wird nicht initialisiert, da der Wert direkt vom Benutzer\neingelesen wird."]}),"\n",(0,i.jsxs)(n.li,{children:["dann wird in der ",(0,i.jsx)(n.code,{children:"do..while"})," Schlaufe mit Hilfe von\n",(0,i.jsx)(n.code,{children:"mytools.StdInput.readInt()"})," auf ",(0,i.jsx)(n.strong,{children:"Zeile 16"})," ein Integer eingelesen und in\nder Variable ",(0,i.jsx)(n.code,{children:"userInput"})," gespeichert."]}),"\n",(0,i.jsxs)(n.li,{children:["Auf ",(0,i.jsx)(n.strong,{children:"Zeile 17"})," wird gepr\xfcft ob ",(0,i.jsx)(n.code,{children:"userInput"})," zwischen ",(0,i.jsx)(n.code,{children:"min"})," und ",(0,i.jsx)(n.code,{children:"max"}),"\nliegt. Hier also zwischen 40 und 60."]}),"\n",(0,i.jsxs)(n.li,{children:["Wurde keine korrekte Zahl eingelesen Springt das Programm wieder zur\n",(0,i.jsx)(n.strong,{children:"Zeile 15"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Wurde eine korrekte Zahl eingelesen, wird sie nun auf ",(0,i.jsx)(n.strong,{children:"Zeile 18"}),"\nzur\xfcckgegeben."]}),"\n",(0,i.jsxs)(n.li,{children:["Nun springt das Programm wieder zur\xfcck zur ",(0,i.jsx)(n.strong,{children:"Zeile 6"}),". Der zur\xfcckgegebene\nWert wird nun durch den Zuweisungsoperator ",(0,i.jsx)(n.code,{children:"="})," in die lokale Variable\n",(0,i.jsx)(n.code,{children:"int userInput"})," der ",(0,i.jsx)(n.code,{children:"main"}),"-Methode gespeichert."]}),"\n",(0,i.jsxs)(n.li,{children:["Als weiteres wird nun die Variable ",(0,i.jsx)(n.code,{children:"userInput"})," auf ",(0,i.jsx)(n.strong,{children:"Zeile 7"})," mit einem\nString verkn\xfcpft und durch die Methode ",(0,i.jsx)(n.code,{children:"System.out.println"})," auf die Konsole\nausgegeben. Es wird bei einem Methodenaufruf also immer zuerst der Code\ninnerhalb der Klammer ",(0,i.jsx)(n.code,{children:"()"})," ausgef\xfchrt."]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{title:"Zeilen-Flow",type:"note",children:[(0,i.jsx)(n.p,{children:"6, 13, (14, 15, 16, 17), 18, 6, 7"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Wobei die Zeilen (14, 15, 16, 17) mehrmals ausgef\xfchrt werden k\xf6nnen."}),"\n",(0,i.jsx)(n.li,{children:"Die Zeilen 1-5, 8-11, 19-21 werden nie ausgef\xfchrt. Sie beinhalten Struktur\nInformationen, nicht aber ausf\xfchrbarer Code."}),"\n"]})]}),"\n",(0,i.jsxs)(n.admonition,{title:"Sortierung von Methoden in Klassen ist egal!",type:"tip",children:[(0,i.jsxs)(n.p,{children:["Die ",(0,i.jsx)(n.code,{children:"main"}),"-Methode ist im Beispiel vor der ",(0,i.jsx)(n.code,{children:"readNumberInRange"})," Methode definiert\nworden. Die Reihenfolge spielt keine Rolle. Diese k\xf6nnte auch am Ende definiert\nwerden."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Die Reihenfolge ist daher egal, da es sich hier um Struktur und nicht\nausf\xfchrbarem Code handelt."}),"\n",(0,i.jsxs)(n.li,{children:["\ud83d\udd25"," ",(0,i.jsx)(n.strong,{children:"Achtung!"})," die Reihenfolge vom ausf\xfchrbarem Code im Methodenk\xf6rper\nspielt nat\xfcrlich eine Rolle!"]}),"\n"]})]}),"\n",(0,i.jsxs)(n.h2,{id:"tv-erkl\xe4rvideos-von-studyflix",children:["\ud83d\udcfa"," Erkl\xe4rvideos von Studyflix"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://studyflix.de/informatik/java-methoden-1901",children:"Java Methoden einfach erkl\xe4rt"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://studyflix.de/informatik/parameter-von-methoden-426",children:"Parameter von Methoden einfach erkl\xe4rt"})}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},7545:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/methodenflow-14609264826c9fdcd6e0398a9f35192e.png"},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>d});var i=r(7294);const t={},s=i.createContext(t);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);