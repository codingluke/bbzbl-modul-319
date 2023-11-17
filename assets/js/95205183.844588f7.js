"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[5719],{7482:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>t});var l=i(5893),s=i(1151);const r={keywords:["pdf"]},d="Analyse des Programms",a={id:"woche01/1b-hello-world/aufgabe4-klammern-bloecke",title:"Analyse des Programms",description:"Nun haben wir schon ein ausf\xfchrbares Programm. Hier wird nun analysiert wie es",source:"@site/docs/woche01/1b-hello-world/aufgabe4-klammern-bloecke.md",sourceDirName:"woche01/1b-hello-world",slug:"/woche01/1b-hello-world/aufgabe4-klammern-bloecke",permalink:"/bbzbl-modul-319/docs/woche01/1b-hello-world/aufgabe4-klammern-bloecke",draft:!1,unlisted:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/woche01/1b-hello-world/aufgabe4-klammern-bloecke.md",tags:[],version:"current",frontMatter:{keywords:["pdf"]},sidebar:"tutorialSidebar",previous:{title:'\ud83d\udd8a A2: "HelloWorld" programmieren',permalink:"/bbzbl-modul-319/docs/woche01/1b-hello-world/aufgabe2-helloworld"},next:{title:"Java Kompilierung",permalink:"/bbzbl-modul-319/docs/woche01/1b-hello-world/aufgabe5-compiler"}},o={},t=[{value:"Von Klammerpaaren und Bl\xf6cken",id:"von-klammerpaaren-und-bl\xf6cken",level:2},{value:"\ud83d\udd8a A3: Bl\xf6cke finden",id:"pen-a3-bl\xf6cke-finden",level:3},{value:"Struktur der Klasse &quot;HelloWorld&quot;",id:"struktur-der-klasse-helloworld",level:2},{value:"\ud83d\udd8a A4: Klasse Umbenennen",id:"pen-a4-klasse-umbenennen",level:3},{value:"Die Klassendefinition",id:"die-klassendefinition",level:3},{value:"Die Methode <code>main</code>",id:"die-methode-main",level:3},{value:"Der Methodenk\xf6rper",id:"der-methodenk\xf6rper",level:3},{value:"Package (optional)",id:"package-optional",level:3},{value:"Import (optional)",id:"import-optional",level:3},{value:"Dateienstruktur",id:"dateienstruktur",level:2},{value:"\ud83d\udd8a A5: <em>HelloWorld.java</em> Datei finden",id:"pen-a5-helloworldjava-datei-finden",level:3}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"analyse-des-programms",children:"Analyse des Programms"}),"\n",(0,l.jsx)(n.p,{children:"Nun haben wir schon ein ausf\xfchrbares Programm. Hier wird nun analysiert wie es\ngenau aufgebaut ist."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Wie ist die Struktur?"}),"\n",(0,l.jsx)(n.li,{children:"Wo liegen die Dateien?"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"von-klammerpaaren-und-bl\xf6cken",children:"Von Klammerpaaren und Bl\xf6cken"}),"\n",(0,l.jsx)(n.p,{children:"Klammerpaare dienen in Java zum Gruppieren von zusammengeh\xf6rigem Code. Diese\nGruppen werden auch Bl\xf6cke genannt."}),"\n",(0,l.jsxs)(n.p,{children:["Es ist nun wichtig, dass Sie bei allen Klammern immer daran denken, dass diese\n",(0,l.jsx)(n.strong,{children:"paarweise eingesetzt werden"}),". Sie m\xfcssen also geschlossen werden. Nur so\nk\xf6nnen Sie Code Gruppieren. Wird eine Klammer nicht geschlossen, gibt es keine\nklare Abgrenzung (\xe4hnlich wie bei normalem Text... Da fehlt wohl eine Klammer!"]}),"\n",(0,l.jsx)(n.p,{children:"In Java werden folgende Klammertypen verwendet:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"{ }"})," Geschweifte Klammern f\xfcr ",(0,l.jsx)(n.strong,{children:"Codeblock"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"( )"})," Runde Klammern f\xfcr ",(0,l.jsx)(n.strong,{children:"Methoden/Funktions Signatur"})," (meistens gefolgt von\neinem Codeblock)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[ ]"})," Eckige Klammern f\xfcr Auflistungen, auch ",(0,l.jsx)(n.strong,{children:"Arrays"})," genannt"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Als eine Besonderheit kennzeichnet dieses Klammerpaar ",(0,l.jsx)(n.code,{children:"{ }"})," sogenannte Bl\xf6cke,\ndie man auch als Programmabschnitte bezeichnen kann."]}),"\n",(0,l.jsx)(n.admonition,{title:"Fabrik",type:"tip",children:(0,l.jsx)(n.p,{children:"Stellt euch eine Fabrik vor. Diese ist auch in verschiedene R\xe4ume unterteilt,\nwobei jeder Raum eine eigene Funktion hat. Das B\xfcro, die Werkstatt, die\nFertigungsstrasse."})}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Nach einem Codeblock ",(0,l.jsx)(n.code,{children:"}"})," folgt ",(0,l.jsx)(n.strong,{children:"kein"})," Semikolon"]}),"\n",(0,l.jsxs)(n.li,{children:["Nach einer Schliessenden normalen Klammer ",(0,l.jsx)(n.code,{children:")"})," folgt in der Regel eine\ngeschweifte Klammer ",(0,l.jsx)(n.code,{children:"{"})]}),"\n",(0,l.jsxs)(n.li,{children:["Jeder Befehl endet mit einem Semikolon ",(0,l.jsx)(n.code,{children:";"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Nach jedem Semikolon sollte eine neue Zeile beginnen, muss aber nicht!"}),"\n",(0,l.jsxs)(n.li,{children:["Dies nicht zu machen ist ",(0,l.jsx)(n.strong,{children:"schlechter Stil und gibt Abzug"}),"!"]}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,l.jsxs)(n.h3,{id:"pen-a3-bl\xf6cke-finden",children:["\ud83d\udd8a"," A3: Bl\xf6cke finden"]}),"\n",(0,l.jsxs)(n.p,{children:["Wenden Sie nun das im oberen Abschnitt vorgestellte Konzept der Bl\xf6cke an.\nBisher haben wir die Klassen und ",(0,l.jsx)(n.code,{children:"main"}),"-Methode von Java kennen gelernt."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Tragen Sie im folgenden HelloWorld-Programm die ",(0,l.jsx)(n.strong,{children:"vorhandenen Bl\xf6cke"})," ein."]}),"\n",(0,l.jsx)(n.li,{children:"Zeichnen Sie ein, welche anderen Klammern Paare bilden."}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",metastring:'title="HalloWorld.java"',children:'public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello World");\n  }\n}\n'})}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Sie k\xf6nnen in Eclipse mit ",(0,l.jsx)(n.code,{children:"// Kommentaren"})," die Bl\xf6cke benennen"]}),"\n",(0,l.jsxs)(n.li,{children:["Oder Sie k\xf6nnen den Block auch mit dem Snipping-Tool ",(0,l.jsx)(n.strong,{children:'"screenshoten"'})," und in\neinem Programm Ihrer Wahl, mit dem ",(0,l.jsx)(n.strong,{children:"Markertool"})," durchf\xfchren. (Paint / ...)"]}),"\n",(0,l.jsxs)(n.li,{children:["Order, wenn Sie diese Seite ",(0,l.jsx)(n.strong,{children:"ausdrucken"}),", k\xf6nnen Sie die Aufgabe mit einem\nkonventionellen Marker von Hand durchf\xfchren."]}),"\n"]})}),"\n",(0,l.jsx)(n.h2,{id:"struktur-der-klasse-helloworld",children:'Struktur der Klasse "HelloWorld"'}),"\n",(0,l.jsx)(n.p,{children:"Java-Programme bestehen aus Klassen. Diese Klassen werden dann als Programme\nausgef\xfchrt."}),"\n",(0,l.jsxs)(n.p,{children:["Java-Klassen ",(0,l.jsx)(n.strong,{children:"(3)"})," befinden sich in Eclipse in einem Verzeichnis namens ",(0,l.jsx)(n.code,{children:"src"}),"\n",(0,l.jsx)(n.strong,{children:"(1)"})," und haben eine ",(0,l.jsx)(n.code,{children:".java"}),"-Dateiendung ",(0,l.jsx)(n.strong,{children:"(2)"}),"."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Der ",(0,l.jsx)(n.strong,{children:"Dateinamen ist immer gleich zum Klassennamen"}),", inklusive Gross- und\nKleinschreibung!"]}),"\n",(0,l.jsxs)(n.li,{children:["Die Klasse ",(0,l.jsx)(n.code,{children:"HelloWorld"})," befindet sich also in der Datei ",(0,l.jsx)(n.code,{children:"HelloWorld.java"}),"."]}),"\n",(0,l.jsx)(n.li,{children:"Eclipse generiert einen Error, wenn dies nicht \xfcbereinstimmt."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"class files",src:i(6334).Z+"",width:"817",height:"397"})}),"\n",(0,l.jsxs)(n.h3,{id:"pen-a4-klasse-umbenennen",children:["\ud83d\udd8a"," A4: Klasse Umbenennen"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Nennen Sie die Klasse (Nicht Datei) ",(0,l.jsx)(n.code,{children:"HelloWorld"})," in ",(0,l.jsx)(n.code,{children:"HoiWelt"})," um.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Sehen Sie den Fehler?"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Nennen Sie die Klasse wieder ",(0,l.jsx)(n.code,{children:"HelloWorld"}),". Dann sollte der Fehler wieder weg\nsein"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"die-klassendefinition",children:"Die Klassendefinition"}),"\n",(0,l.jsxs)(n.p,{children:["Die Java-Klasse ",(0,l.jsx)(n.code,{children:"HelloWorld"})," beginnt mit der Anweisung\n",(0,l.jsx)(n.code,{children:"public class HelloWorld"}),", was aussagt, dass es sich um eine \xf6ffentliche Klasse\nmit dem Namen HelloWorld handelt. Nach dieser folgt eine \xf6ffnende geschweifte\nKlammer ",(0,l.jsx)(n.code,{children:"{"}),", die mit der letzten schliessenden geschweiften Klammer ",(0,l.jsx)(n.code,{children:"}"})," zusammen\nden Klassenk\xf6rper bildet."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'// highlight-yellow-next-line\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n// highlight-yellow-next-line\n}\n'})}),"\n",(0,l.jsxs)(n.h3,{id:"die-methode-main",children:["Die Methode ",(0,l.jsx)(n.code,{children:"main"})]}),"\n",(0,l.jsxs)(n.p,{children:["Im Klassenk\xf6rper befindet sich die ",(0,l.jsx)(n.code,{children:"main"}),"-Methode\n",(0,l.jsx)(n.code,{children:"public static void main(String[] args)"}),". Die ",(0,l.jsx)(n.code,{children:"main"}),"-Methode ist eine ganz\nbesondere, ",(0,l.jsx)(n.strong,{children:"sie dient immer als Startort des Programms"}),"."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\ud83c\udff0"," Sie ist sozusagen die Pforte zum Schloss! ","\ud83c\udff0"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'public class HelloWorld {\n  // highlight-yellow-next-line\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"Diese Zeile wird auch als Methodensignatur bezeichnet. Im Detail wird die\nMethodensignatur sp\xe4ter angesehen."}),"\n",(0,l.jsx)(n.h3,{id:"der-methodenk\xf6rper",children:"Der Methodenk\xf6rper"}),"\n",(0,l.jsx)(n.p,{children:"Das n\xe4chste paar geschweifter Klammern bildet den Methodenk\xf6rper. Darin steht\ndas, was die eigentliche Leistung des Programms ausmacht. \xdcber die Java-Klasse\nSystem erfolgt die Ausgabe auf die Console (out), wo eine Zeile ausgegeben wird\n(println)."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'public class HelloWorld {\n\tpublic static void main(String[] args) {\n    // highlight-yellow-next-line\n\t\tSystem.out.println("Hello World");\n\t}\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"package-optional",children:"Package (optional)"}),"\n",(0,l.jsxs)(n.p,{children:["In der ",(0,l.jsx)(n.code,{children:".java"}),"-Datei kann zuerst das ",(0,l.jsx)(n.code,{children:"package"})," angegeben werden, in welchem sich\ndie aktuelle Klasse befindet."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Wird kein ",(0,l.jsx)(n.code,{children:"package"})," angegeben, wie beim ",(0,l.jsx)(n.code,{children:"HelloWorld"})," Programm der Fall,\nbefindet sich die Datei direkt unter dem ",(0,l.jsx)(n.code,{children:"src"})," Ordner, ",(0,l.jsx)(n.code,{children:"src/HelloWorld.java"}),".\nEclipse zeigt dann ein ",(0,l.jsx)(n.code,{children:"(default package)"})]}),"\n",(0,l.jsxs)(n.li,{children:["Ist ein ",(0,l.jsx)(n.code,{children:"package"})," angegeben, befindet sich die Klasse in einem Unterordner der\ngleich heisst wie das package. In folgenden Fall unter\n",(0,l.jsx)(n.code,{children:"src/helloworld/HelloWorld.java"})]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'// highlight-next-line\npackage helloworld;\n\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"import-optional",children:"Import (optional)"}),"\n",(0,l.jsxs)(n.p,{children:["Dann folgen optional ",(0,l.jsx)(n.code,{children:"import"}),"-Anweisungen, die andere Java- und Programmteile im\neigenen Programm nutzbar machen."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'package helloworld;\n// highlight-start\nimport some.other.package;\n// highlight-end\n\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"dateienstruktur",children:"Dateienstruktur"}),"\n",(0,l.jsx)(n.p,{children:"Wenn Ihr in Eclipse Dateien erstellt, werden automatisch auch Dateien auf dem\nDateisystem angelegt. Die Struktur ist meistens gleich zum Project-Explorer von\nEclipse."}),"\n",(0,l.jsxs)(n.h3,{id:"pen-a5-helloworldjava-datei-finden",children:["\ud83d\udd8a"," A5: ",(0,l.jsx)(n.em,{children:"HelloWorld.java"})," Datei finden"]}),"\n",(0,l.jsxs)(n.p,{children:["Und wo liegt nun die ",(0,l.jsx)(n.em,{children:"HelloWorld.java"})," Datei?"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Klicken Sie ",(0,l.jsx)(n.em,{children:"in Eclipse"})," mit der rechten Maustaste auf die Klasse ",(0,l.jsx)(n.code,{children:"HelloWorld"}),"\nund w\xe4hlen Sie ",(0,l.jsx)(n.em,{children:"\xabShow in\xbb"}),", dann ",(0,l.jsx)(n.em,{children:"\xabSystem Explorer\xbb"}),"."]}),"\n",(0,l.jsx)(n.li,{children:"Anschliessende sehen Sie die Klasse im Windows Explorer rsp. Finder."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},6334:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/class-files-71a1a942f1edf59afb5ea629ad8e7d8f.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>d});var l=i(7294);const s={},r=l.createContext(s);function d(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);