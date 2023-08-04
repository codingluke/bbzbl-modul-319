"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[7277],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),m=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=m(e.components);return a.createElement(o.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(t),d=r,g=p["".concat(o,".").concat(d)]||p[d]||c[d]||i;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var m=2;m<i;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79904:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=t(87462),r=(t(67294),t(3905));const i={},l="\ud83d\udcdd Text mit Scanner einlesen",s={unversionedId:"2a-eva/aufgabe-scanner",id:"2a-eva/aufgabe-scanner",title:"\ud83d\udcdd Text mit Scanner einlesen",description:"Aufgabenbeschreibung",source:"@site/docs/2a-eva/aufgabe-scanner.md",sourceDirName:"2a-eva",slug:"/2a-eva/aufgabe-scanner",permalink:"/bbzbl-modul-319/docs/2a-eva/aufgabe-scanner",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/2a-eva/aufgabe-scanner.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2a - Das EVA-Prinzip",permalink:"/bbzbl-modul-319/docs/2a-eva/"},next:{title:"\ud83d\udcdd Bibliothek MyTools einbinden",permalink:"/bbzbl-modul-319/docs/2a-eva/aufgabe1-bibliothek-einbinden"}},o={},m=[{value:"Aufgabenbeschreibung",id:"aufgabenbeschreibung",level:2},{value:"Schritt f\xfcr Schritt Anleitung",id:"schritt-f\xfcr-schritt-anleitung",level:2},{value:"Weitere Datentypen einlesen",id:"weitere-datentypen-einlesen",level:3}],u={toc:m},p="wrapper";function c(e){let{components:n,...i}=e;return(0,r.kt)(p,(0,a.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-text-mit-scanner-einlesen"},"\ud83d\udcdd Text mit ",(0,r.kt)("inlineCode",{parentName:"h1"},"Scanner")," einlesen"),(0,r.kt)("h2",{id:"aufgabenbeschreibung"},"Aufgabenbeschreibung"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Informieren Sie den Benutzer, dass er nun seinen Namen eintippen soll."),(0,r.kt)("li",{parentName:"ul"},"Legen Sie eine ",(0,r.kt)("inlineCode",{parentName:"li"},"String"),"-Variable an, um die Antwort zu speichern."),(0,r.kt)("li",{parentName:"ul"},"Die Funktion, um Daten eingeben zu k\xf6nnen, ist in der Klasse mit dem Namen\n",(0,r.kt)("inlineCode",{parentName:"li"},"Scanner")," enthalten.")),(0,r.kt)("h2",{id:"schritt-f\xfcr-schritt-anleitung"},"Schritt f\xfcr Schritt Anleitung"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Kopieren Sie den folgenden Code in eine Datei namens ",(0,r.kt)("inlineCode",{parentName:"li"},"EinUndAusgabe.java"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="EinUndAusgabe.java" showLineNumbers',title:'"EinUndAusgabe.java"',showLineNumbers:!0},'public class EinUndAusgabe {\n\n  // highlight-next-line\n  private static Scanner scanner = new Sc  // hier fehlt noch was\n\n  public static void main (String[] args) {\n    System.out.println("Please type your name:");\n    // highlight-next-line\n    String name = scanner // hier fehlt noch was!\n  }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Zeile 3:")," Vervollst\xe4ndigen Sie ",(0,r.kt)("inlineCode",{parentName:"p"},"new Sc")," mit ",(0,r.kt)("inlineCode",{parentName:"p"},"new Scan")," und dr\xfccken Sie\ndanach ",(0,r.kt)("em",{parentName:"p"},"CTRL+LEERTASTE"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Dadurch wird eine automatische Vervollst\xe4ndigung von Eclipse aktiviert\nwelche ebenfalls den korrekte Import f\xfcr die Klasse hinzuf\xfcgt."),(0,r.kt)("li",{parentName:"ul"},"Nun wurde Ihre Klasse gerade zu oberst mit folgender Zeile erg\xe4nzt, die\ndaf\xfcr sorgt, dass ",(0,r.kt)("inlineCode",{parentName:"li"},"Scanner")," in Ihrer Klasse genutzt werden kann:\n",(0,r.kt)("inlineCode",{parentName:"li"},"import java.util.Scanner;")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Zeile 7/8:")," Geben Sie direkt hinter ",(0,r.kt)("inlineCode",{parentName:"p"},"scanner")," ",(0,r.kt)("strong",{parentName:"p"},"einen Punkt")," ein."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Nun erscheint folgender Dialog, \xfcber welchen Sie die ",(0,r.kt)("strong",{parentName:"p"},"Methoden der Klasse\n",(0,r.kt)("inlineCode",{parentName:"strong"},"scanner")," aufrufen")," k\xf6nnen:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"autocompete",src:t(84528).Z,width:"641",height:"262"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Da wir einen String-Wert einlesen wollen, w\xe4hlen gleich den obersten\nEintrag ",(0,r.kt)("inlineCode",{parentName:"p"},"next()")," und schliessen die Zeile mit einem Semikolon ",(0,r.kt)("inlineCode",{parentName:"p"},";")," ab.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Als n\xe4chstes geben wir den eingegebenen Namen aus"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Daf\xfcr verwenden wir ",(0,r.kt)("inlineCode",{parentName:"li"},"System.out.println()"),". Dies ist der Standardweg in\nJava text auf die Konsole auszugeben.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="EinUndAusgabe.java"',title:'"EinUndAusgabe.java"'},'import java.util.Scanner;\n\npublic class EinUndAusgabe {\n\n  private static Scanner scanner = new Scanner(System.in);\n\n  public static void main (String[] args) {\n    System.out.println("Please type your name:");\n    // highlight-start\n    String name = scanner.next();\n    System.out.println("Your name is " + name);\n    // highlight-end\n  }\n}\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"F\xfchren Sie das Programm aus. Funktioniert es? Begr\xfcsst Sie Ihr Programm mit\ndem eingegebenen Namen?")),(0,r.kt)("admonition",{title:"Methodenzugriff \xfcber Punkt",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Auf statische ",(0,r.kt)("strong",{parentName:"p"},"Methoden")," einer statischen Klasse wird immer ",(0,r.kt)("strong",{parentName:"p"},"\xfcber einen\nPunkt")," zugegriffen."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"KlassenName.methodenName([optionaleParemeter]);\n//         ^\n//   wichtiger Punkt!\n"))),(0,r.kt)("admonition",{title:"Strings Zusammensetzen",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Mit einem ",(0,r.kt)("inlineCode",{parentName:"li"},"+")," k\xf6nnen Strings Zusammensetzen werden"),(0,r.kt)("li",{parentName:"ul"},"Der erste String sollte mit einem Leerzeichen Enden, wieso?")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Strings zusammensetzen"',title:'"Strings','zusammensetzen"':!0},'String name = "Herr Lehrer";\nSystem.out.println("Your name is " + name);\n//                              ^ Leerzeichen!\n//                  Your name is Herr Lehrer\n\nSystem.out.println("Your name is" + name);\n//                  Your name isHerr Lehrer\n'))),(0,r.kt)("h3",{id:"weitere-datentypen-einlesen"},"Weitere Datentypen einlesen"),(0,r.kt)("p",null,"Die Bibliothek unterst\xfctzt verschiedene Datentypen, wie aus der Tabelle der\nMethoden ersichtlich ist. Anstelle von ",(0,r.kt)("inlineCode",{parentName:"p"},"readString()")," rufen Sie demnach\nlediglich eine andere ",(0,r.kt)("inlineCode",{parentName:"p"},"read..."),"-Methode auf."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Datentypen mit Scanner einlesen"',title:'"Datentypen',mit:!0,Scanner:!0,'einlesen"':!0},"int     ganzZahl       = scanner.nextInt();\nchar    character      = scanner.next().charAt(0);\nString  text           = scanner.next();\ndouble  gleitKommaZahl = scanner.nextDouble();\nboolean bool           = scanner.nextBoolean();\n")))}c.isMDXComponent=!0},84528:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/methoden-autocomplete-12e80e5750ed08081cbcf069bc48fe75.png"}}]);