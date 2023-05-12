"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[75],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),m=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(d.Provider,{value:n},e.children)},o={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=m(t),k=i,g=u["".concat(d,".").concat(k)]||u[k]||o[k]||r;return t?a.createElement(g,l(l({ref:n},s),{},{components:t})):a.createElement(g,l({ref:n},s))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var m=2;m<r;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7727:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=t(87462),i=(t(67294),t(3905));const r={},l="2b - Datentypen & Variablen",p={unversionedId:"2b-datentypen/index",id:"2b-datentypen/index",title:"2b - Datentypen & Variablen",description:"Wenn Programme Daten bearbeiten, so sind diese in Variablen (\xe4nderbar) und Konstanten (nicht \xe4nderbar) gespeichert. Die Variablen und Konstanten besitzen einen Namen sowie einen f\xfcr die zu speichernden Daten passenden Datentyp.",source:"@site/docs/2b-datentypen/index.md",sourceDirName:"2b-datentypen",slug:"/2b-datentypen/",permalink:"/bbzbl-modul-319/docs/2b-datentypen/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcdd Text mit StdInput einlesen",permalink:"/bbzbl-modul-319/docs/2a-eva/aufgabe2-eingabe"},next:{title:"\ud83d\udcdd Datetypen bestimmen",permalink:"/bbzbl-modul-319/docs/2b-datentypen/aufgabe1-datentypen-bestimmen"}},d={},m=[{value:"Deklaration und Initialisierung von Variablen",id:"deklaration-und-initialisierung-von-variablen",level:2},{value:"Deklaration von Konstanten",id:"deklaration-von-konstanten",level:2},{value:"<em>Primitive</em> Datentypen",id:"primitive-datentypen",level:2},{value:"Initialisierung",id:"initialisierung",level:3},{value:"<em>H\xf6here</em> Datentypen",id:"h\xf6here-datentypen",level:2},{value:"Der Datentyp <code>String</code>",id:"der-datentyp-string",level:2},{value:"Strings initialisieren",id:"strings-initialisieren",level:3},{value:"Strings zusammensetzen",id:"strings-zusammensetzen",level:3},{value:"Strings mit Zahlen zusammensetzen",id:"strings-mit-zahlen-zusammensetzen",level:3},{value:"Der Datentyp <code>LocalDate</code> f\xfcr Datumswerte",id:"der-datentyp-localdate-f\xfcr-datumswerte",level:2},{value:"Datentypen konvertieren (Casting)",id:"datentypen-konvertieren-casting",level:2},{value:"Rechnen und Operatoren",id:"rechnen-und-operatoren",level:2},{value:"\ud83d\udcfa Erkl\xe4rvideos von Studyflix",id:"-erkl\xe4rvideos-von-studyflix",level:2},{value:"\ud83d\udcdd Aufgaben",id:"-aufgaben",level:2}],s=(o="DocCardList",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var o;const u={toc:m};function k(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2b---datentypen--variablen"},"2b - Datentypen & Variablen"),(0,i.kt)("p",null,"Wenn Programme Daten bearbeiten, so sind diese in ",(0,i.kt)("strong",{parentName:"p"},"Variablen (\xe4nderbar)")," und ",(0,i.kt)("strong",{parentName:"p"},"Konstanten (nicht \xe4nderbar)")," gespeichert. Die Variablen und Konstanten besitzen einen Namen sowie einen f\xfcr die zu speichernden Daten passenden ",(0,i.kt)("strong",{parentName:"p"},"Datentyp"),"."),(0,i.kt)("admonition",{title:"Ziele",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Sie kennen die primitiven Datentypen und den h\xf6heren Datentyp String"),(0,i.kt)("li",{parentName:"ul"},"Sie k\xf6nnen diese als Variablen in Programmen nutzen."))),(0,i.kt)("h2",{id:"deklaration-und-initialisierung-von-variablen"},"Deklaration und Initialisierung von Variablen"),(0,i.kt)("p",null,"Das generelle Muster ",(0,i.kt)("em",{parentName:"p"},"(die Syntax)"),", um eine Variable zu deklarieren ",(0,i.kt)("em",{parentName:"p"},"(dem Programm bekannt machen)"),', hat zwei Varianten. Die Variable kann "nur" deklariert oder aber sogleich mit einem entsprechenden Wert initialisiert werden.'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"bei der Ersten Variante wird die Variable durch Angabe des ",(0,i.kt)("strong",{parentName:"p"},"Datentyps gefolgt vom Variablennamen"),", ",(0,i.kt)("u",null,"deklariert")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"char favoriteSign; // Variante 1 Deklaration: Variable ohne Wert\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"die Zweiten Variante ",(0,i.kt)("strong",{parentName:"p"},"erg\xe4nzt die Erste Variante")," mit einem Wert welcher durch den ",(0,i.kt)("strong",{parentName:"p"},"Zuweisungsoperator")," ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," zugewiesen wird. Damit wird die Variable ",(0,i.kt)("u",null,"deklariert und direkt initialisiert"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},"char favoriteSign = 'b'; // Variante 2 Deklaration + Initialisierung:\n")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Wir verwenden in den Beispielen der Datentyp ",(0,i.kt)("inlineCode",{parentName:"p"},"char"),", das Muster ist jedoch f\xfcr alle Datentypen gleich. Die Ausnahme ist der Wert, der pro Datentyp anders ist.")),(0,i.kt)("h2",{id:"deklaration-von-konstanten"},"Deklaration von Konstanten"),(0,i.kt)("p",null,"Sollen Variablen ",(0,i.kt)("strong",{parentName:"p"},"nicht \xe4nderbar")," sein, dann werden diese als Konstanten bezeichnet, was durch das Schl\xfcsselwort ",(0,i.kt)("inlineCode",{parentName:"p"},"final")," erfolgt. Der Variablenname wird gem\xe4ss Konvention in ",(0,i.kt)("strong",{parentName:"p"},"GROSSBUCHSTABEN")," geschrieben:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"   final float MWST = 7.7;\n// ^^^^^       ^^^^ GROSSBUCHSTABEN als Konvention f\xfcr Konstante\n// final definiert eine Konstante\n")),(0,i.kt)("h2",{id:"primitive-datentypen"},(0,i.kt)("em",{parentName:"h2"},"Primitive")," Datentypen"),(0,i.kt)("p",null,"In Java gibt es eine beachtliche Anzahl an Datentypen gem\xe4ss folgender Tabelle.\nVorerst nutzen wir die ",(0,i.kt)("em",{parentName:"p"},"primitiven")," Datentypen. Diese sind erkennbar, indem der ",(0,i.kt)("strong",{parentName:"p"},"Datentyp kleingeschrieben")," ist."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Datentyp"),(0,i.kt)("th",{parentName:"tr",align:null},"Gr\xf6sse"),(0,i.kt)("th",{parentName:"tr",align:null},"Beschreibung"),(0,i.kt)("th",{parentName:"tr",align:null},"Spezifika"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"1 bit"),(0,i.kt)("td",{parentName:"tr",align:null},"Speichert ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," ",(0,i.kt)("em",{parentName:"td"},"(wahr)")," oder ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," ",(0,i.kt)("em",{parentName:"td"},"(falsch)")," Werte"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"byte"),(0,i.kt)("td",{parentName:"tr",align:null},"1 byte"),(0,i.kt)("td",{parentName:"tr",align:null},"Speichert ganze Zahlen von ",(0,i.kt)("inlineCode",{parentName:"td"},"-128")," bis ",(0,i.kt)("inlineCode",{parentName:"td"},"127")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"short"),(0,i.kt)("td",{parentName:"tr",align:null},"2 bytes"),(0,i.kt)("td",{parentName:"tr",align:null},"Speichert ganze Zahlen von ",(0,i.kt)("inlineCode",{parentName:"td"},"-32'768")," bis ",(0,i.kt)("inlineCode",{parentName:"td"},"32'767")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"char"),(0,i.kt)("td",{parentName:"tr",align:null},"2 bytes"),(0,i.kt)("td",{parentName:"tr",align:null},"Speichert ein einzelnes Zeichen oder ",(0,i.kt)("a",{parentName:"td",href:"https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange"},"ASCII")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"''"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"4 bytes"),(0,i.kt)("td",{parentName:"tr",align:null},"Speichert ganze Zahlen ",(0,i.kt)("inlineCode",{parentName:"td"},"-2'147'483'648")," bis ",(0,i.kt)("inlineCode",{parentName:"td"},"2'147'483'647")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"float"),(0,i.kt)("td",{parentName:"tr",align:null},"4 bytes"),(0,i.kt)("td",{parentName:"tr",align:null},"Speichert Gleitkommazahlen von ",(0,i.kt)("inlineCode",{parentName:"td"},"6")," bis ",(0,i.kt)("inlineCode",{parentName:"td"},"7")," Dezimalstellen"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"f"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"long"),(0,i.kt)("td",{parentName:"tr",align:null},"8 bytes"),(0,i.kt)("td",{parentName:"tr",align:null},"Speichert ganze Zahlen von ",(0,i.kt)("inlineCode",{parentName:"td"},"-9'223'372'036'854'775'808l")," bis ",(0,i.kt)("inlineCode",{parentName:"td"},"9'223'372'036'854'775'807l")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"l"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"double"),(0,i.kt)("td",{parentName:"tr",align:null},"8 bytes"),(0,i.kt)("td",{parentName:"tr",align:null},"Speichert Gleitkommazahlen von ",(0,i.kt)("inlineCode",{parentName:"td"},"15")," Dezimalstellen"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"d"))))),(0,i.kt)("h3",{id:"initialisierung"},"Initialisierung"),(0,i.kt)("p",null,"Beispiele, wie Variablen initialisiert werden k\xf6nnen. Die Leerzeichen dienen nur der \xdcbersichtlichkeit."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Deklarierung von Variablen"',title:'"Deklarierung',von:!0,'Variablen"':!0},"// Datentyp     Variablenname  Semikolon\n   int          number         ;\n   char         sign           ;\n   ...\n")),(0,i.kt)("p",null,"Die Initialisierung der Werte verwendet spezifische Zeichen f\xfcr die verscheidenen Datentypen. So endet ein ",(0,i.kt)("inlineCode",{parentName:"p"},"float"),"-Wert immer mit ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," oder ",(0,i.kt)("inlineCode",{parentName:"p"},"long")," mit ",(0,i.kt)("inlineCode",{parentName:"p"},"l"),'. Die Spezifikas pro Datentyp finden Sie in der Tabelle oberhalb unter "Spezifika".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Deklarierung & Initialisierung von Variablen"',title:'"Deklarierung',"&":!0,Initialisierung:!0,von:!0,'Variablen"':!0},"\n// Datentyp     Variablenname  Zuweiseoperator   Wert  Semikolon\n   int          number         =                 5     ;\n   char         sign           =                 'c'   ;\n   //                                            ^ ^  spezifisch f\xfcr char sind ('')\n   long         longNumber     =                 123l  ;\n   //                                               ^ spezifisch f\xfcr long (l)\n   ...\n")),(0,i.kt)("admonition",{title:"Speichergr\xf6sse",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Fr\xfcher hatte man wehnig Speicher zur Verf\xfcgung und hat immer abgew\xe4gt, welchen Datentyp verwendet werden soll. Heute nimmt man f\xfcr gew\xf6hnlich einfach den Gr\xf6ssten."),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Dies verkleinert die Liste auf folgende vier: ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"long"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"double")," und ",(0,i.kt)("inlineCode",{parentName:"li"},"char"),"."),(0,i.kt)("li",{parentName:"ul"},"F\xfcr den Test m\xfcsst ihr trotzdem alle kennen \ud83d\ude0b"))),(0,i.kt)("h2",{id:"h\xf6here-datentypen"},(0,i.kt)("em",{parentName:"h2"},"H\xf6here")," Datentypen"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"H\xf6here")," Datentypen bauen auf den ",(0,i.kt)("em",{parentName:"p"},"primitiven")," Datentypen auf. Es handelt sich bei diesen auch um Objekte. "),(0,i.kt)("admonition",{title:"Abgrenzung",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Was genau Objekte sind m\xfcsst Ihr noch nicht verstehen."),(0,i.kt)("li",{parentName:"ul"},"Ihr solltet in dem Modul den Datentyp ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," anwenden k\xf6nnen."))),(0,i.kt)("h2",{id:"der-datentyp-string"},"Der Datentyp ",(0,i.kt)("inlineCode",{parentName:"h2"},"String")),(0,i.kt)("p",null,"Der Datentyp ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," ",(0,i.kt)("strong",{parentName:"p"},"dient zur Speicherung von Zeichenfolgen"),", also allgemeiner Text. Der Text muss immer zwischen zwei ",(0,i.kt)("strong",{parentName:"p"},'"doppelten Anf\xfchrungszeichen"')," gestellt werden."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Datentyp"),(0,i.kt)("th",{parentName:"tr",align:null},"Gr\xf6sse"),(0,i.kt)("th",{parentName:"tr",align:null},"Beschreibung"),(0,i.kt)("th",{parentName:"tr",align:null},"Spezifika"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"2 byte pro Zeichen"),(0,i.kt)("td",{parentName:"tr",align:null},"Speichert beliebigen Text"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'""'))))),(0,i.kt)("h3",{id:"strings-initialisieren"},"Strings initialisieren"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Datentyp     Variablenname  Zuweiseoperator   Wert   Semikolon\n   String       zeichenFolge   =                 "abc"  ;\n//                                               ^   ^\n//                                   "doppelten Anf\xfchrungszeichen"\n')),(0,i.kt)("h3",{id:"strings-zusammensetzen"},"Strings zusammensetzen"),(0,i.kt)("p",null,"Mehrere Variablen vom Datentyp ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," k\xf6nnen durch ein Plus-Zeichen ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," zusammengesetzt werden. Dabei sollte man darauf achten, dass der erste Text mit einem Leerzeichen enden soll. Wieso, sieht ihr im Beispiel:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Mit + Strings zusammensetzen"',title:'"Mit',"+":!0,Strings:!0,'zusammensetzen"':!0},'String name = "Mr Robot";\nSystem.out.println("Your name is " + name);\n//                              ^ Leerzeichen!\n//                  Your name is Mr Robot\n\nSystem.out.println("Your name is" + name);\n//                  Your name isMr Robot\n')),(0,i.kt)("admonition",{title:"H\xf6here Datentypen sind Grossgeschrieben",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"String")," ist Gross geschrieben, da es sich um einen ",(0,i.kt)("em",{parentName:"li"},"h\xf6heren")," Datentyp handelt."),(0,i.kt)("li",{parentName:"ul"},"Ein ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," baut auf dem ",(0,i.kt)("em",{parentName:"li"},"primitiven")," Datentyp ",(0,i.kt)("inlineCode",{parentName:"li"},"char")," auf ",(0,i.kt)("em",{parentName:"li"},"(\ud83d\udca1 daher h\xf6her)")," ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Evt. Hilft die Analogie von "Atome (primitiv)" zu "Molek\xfcle (h\xf6her)".'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"H\xf6here")," Datentypen sind auch Objekte.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Was Objekte genau sind, erfahrt ihr im Folgemodul 404 und ist noch nicht relevant!"))))),(0,i.kt)("h3",{id:"strings-mit-zahlen-zusammensetzen"},"Strings mit Zahlen zusammensetzen"),(0,i.kt)("p",null,"Strings k\xf6nnen auch mit allen ",(0,i.kt)("em",{parentName:"p"},"primitiven")," Datentypen, also auch mit numerischen Werten, durch das Plus-Zeichen ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," zu einer Zeichenfolge kombiniert werden. Der ",(0,i.kt)("em",{parentName:"p"},"primitive")," Datentyp wird dadurch automatisch zu einem String!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="String mit Zahlen kombinieren"',title:'"String',mit:!0,Zahlen:!0,'kombinieren"':!0},'System.out.println("Ihre Geschwindigkeit lautet " + 21);\n//                  Ihre Geschwindigkeit lautet 21 \n')),(0,i.kt)("admonition",{title:"Eine Zahl in einen String umwandeln",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Werden Zahlen mit einem ",(0,i.kt)("strong",{parentName:"p"},'leeren String ""'),' konkatiniert, wird die Zahl alleine in einen String umgewandelt. Dies ist ein g\xe4ngiger Java "Hack".'),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Zahl in String umwandeln"',title:'"Zahl',in:!0,String:!0,'umwandeln"':!0},'String zahl = "" + 21;\n// zahl ist nun "21"\n'))),(0,i.kt)("h2",{id:"der-datentyp-localdate-f\xfcr-datumswerte"},"Der Datentyp ",(0,i.kt)("inlineCode",{parentName:"h2"},"LocalDate")," f\xfcr Datumswerte"),(0,i.kt)("p",null,"Mit der Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"java.time.LocalDate")," lassen sich Datumswerte speichern resp. das aktuelle Datum erzeugen, wie nachfolgendes Beispiel zeigt:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Momentane Zeit (jetzt, now) ausgeben"',title:'"Momentane',Zeit:!0,"(jetzt,":!0,"now)":!0,'ausgeben"':!0},"LocalDate d = LocalDate.now();\nSystem.out.println(d);\n")),(0,i.kt)("h2",{id:"datentypen-konvertieren-casting"},"Datentypen konvertieren (Casting)"),(0,i.kt)("p",null,"Manchmal muss man oder will den aktuellen Datentypen \xe4ndern, und Daten in einen anderen Datentyp konvertieren. In manchen F\xe4llen ist das unproblematisch, wie hier, da Java ermitteln kann, dass kein Genauigkeitsverlust auftritt:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int smallNumber = 123;\nlong convertedSmallNumber = smallNumber;\n")),(0,i.kt)("p",null,"In anderen F\xe4llen wird die Entwicklungsumgebung hingegen eine Fehlermeldung anzeigen, wie hier:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"long bigNumber = 1112223334445566L;\nint convertedBigNumber = bigNumber;\n")),(0,i.kt)("p",null,"In wieder anderen F\xe4llen, werden Sie Berechnungen programmieren, deren Ergebnis ganzzahlig sein muss. Angenommen ein strenges Notensystem liesse nur ganze, abgerundetee Modulnoten zu, w\xe4hrend diese den Semestertests mit Zehntelsnoten berechnet werden, dann k\xf6nnte Eclipse darauf hinweisen, dass folgende Zuweisung ung\xfcltig ist."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int grade = (3 + 4 + 5.5) / 3;\n")),(0,i.kt)("p",null,"Die obige Fehlermeldung kann nun beim Programmieren \xfcbersteuert werden, indem ein Casting erzwungen wird, dazu wird der Datentyp in Klammern dazwischen geschrieben:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int grade = (int) ((3 + 4 + 5.5) / 3);\n")),(0,i.kt)("p",null,"Casting kann sichtbar machen, dass alle Buchstaben am Computer durch Zahlen repr\xe4sentiert werden (ASCII-Tabelle u.\xe4.)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"int a = 65;\nSystem.out.println((char)a);\n")),(0,i.kt)("p",null,"Je nach Reihenfolge und Stelle des Castings k\xf6nnen unterschiedliche Ergebnisse berechnet werden, wie das folgende Beispiel zeigt (Ergebnis einmal 70, einmal 60: aber warum?):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'int i = (int) (20.0 * 3.5);\nSystem.out.println("i " + i);\nint j = (int) 20.0 * (int) 3.5;\nSystem.out.println("j " + j);\n')),(0,i.kt)("admonition",{title:"in Eclipse ausf\xfchren!",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"F\xfchrt die Code-Bl\xf6cke selbst in Eclipse aus und sieht was genau f\xfcr Ergebnisse oder Fehler angezeigt werden!")),(0,i.kt)("h2",{id:"rechnen-und-operatoren"},"Rechnen und Operatoren"),(0,i.kt)("p",null,"Mit den numerischen Datentypen kann mit den bekannten Operatoren gerechnet werden. Also jene die aus der Mathematik bekannt sind: ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,i.kt)("p",null,"Dann gibt es noch einige Spezialf\xe4lle in Java, die Sie fr\xfcher oder sp\xe4ter kennen lernen werden. Darum werden diese hier vorgestellt:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"++")," erh\xf6ht die Zahl um 1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--")," reduziert die Zahl um 1")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Spezial-Operatoren in Java"',title:'"Spezial-Operatoren',in:!0,'Java"':!0},"int a = 1;\nint b = 1;\na++; // a = a + 1;\nSystem.out.println(a); // 1 + 1 = 2\n\nb--; // b = b - 1\nSystem.out.println(b); // 1 - 1 = 0\n")),(0,i.kt)("h2",{id:"-erkl\xe4rvideos-von-studyflix"},"\ud83d\udcfa Erkl\xe4rvideos von Studyflix"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://studyflix.de/informatik/primitive-datentypen-215"},"Java Datentypen einfach Erkl\xe4hrt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://studyflix.de/informatik/variablen-216"},"Java Variablen deklarieren und initialisieren")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://studyflix.de/informatik/ausdrucke-und-arithmetische-operatoren-217"},"Ausdr\xfccke und Operatoren in Java")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://studyflix.de/informatik/boolesche-ausdrucke-221"},"Boolsche ausdr\xfccke in Java"))),(0,i.kt)("h2",{id:"-aufgaben"},"\ud83d\udcdd Aufgaben"),(0,i.kt)(s,{mdxType:"DocCardList"}))}k.isMDXComponent=!0}}]);