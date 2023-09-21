"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[8068],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=u(t),m=i,c=g["".concat(o,".").concat(m)]||g[m]||p[m]||a;return t?r.createElement(c,l(l({ref:n},d),{},{components:t})):r.createElement(c,l({ref:n},d))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[g]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},519:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:2,keywords:["pdf"]},l="Debugging / Fehleranalyse",s={unversionedId:"4a-methoden-fehleranalyse/debugging",id:"4a-methoden-fehleranalyse/debugging",title:"Debugging / Fehleranalyse",description:"Debugging ist eine Arbeitstechnik in der Programmierung, welche es erlaubt, den",source:"@site/docs/4a-methoden-fehleranalyse/debugging.md",sourceDirName:"4a-methoden-fehleranalyse",slug:"/4a-methoden-fehleranalyse/debugging",permalink:"/bbzbl-modul-319/docs/4a-methoden-fehleranalyse/debugging",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/4a-methoden-fehleranalyse/debugging.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:["pdf"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcdd Einfacher Methodenaufruf",permalink:"/bbzbl-modul-319/docs/4a-methoden-fehleranalyse/einfache-methode"},next:{title:"Methoden Vertiefung",permalink:"/bbzbl-modul-319/docs/4a-methoden-fehleranalyse/methoden"}},o={},u=[{value:"\ud83d\udcdd Eine Debugging-Session Schritt-f\xfcr-Schritt",id:"-eine-debugging-session-schritt-f\xfcr-schritt",level:2},{value:"\ud83d\udcdd Debuggen der Methode <code>printCurrentDate()</code>",id:"-debuggen-der-methode-printcurrentdate",level:2}],d={toc:u},g="wrapper";function p(e){let{components:n,...a}=e;return(0,i.kt)(g,(0,r.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"debugging--fehleranalyse"},"Debugging / Fehleranalyse"),(0,i.kt)("p",null,"Debugging ist eine Arbeitstechnik in der Programmierung, welche es erlaubt, den\nAblauf eines Programms besser nachzuvollziehen. Dabei kann das Programm in einem\nspeziellen Modus ausgef\xfchrt werden, der es erlaubt, das Programm auf jeder\nbeliebigen Codezeile anzuhalten, die in den Variablen gespeicherten Werte\neinzusehen, zu \xe4ndern, etc."),(0,i.kt)("h2",{id:"-eine-debugging-session-schritt-f\xfcr-schritt"},"\ud83d\udcdd Eine Debugging-Session Schritt-f\xfcr-Schritt"),(0,i.kt)("p",null,"Folgende Schritte sind n\xf6tig, um eine Debugging-Session f\xfcr folgenden\nProgrammcode durchzuf\xfchren."),(0,i.kt)("p",null,"Erstellen Sie in Eclipse eine neue Klasse mit dem Namen Mini und kopiert das\nfolgende Code-Beispiel in die Datei. Dann k\xf6nnen Sie direkt die\nSchritt-f\xfcr-Schritt Session nachvollziehen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Das verwendete Code-Beispiel"',title:'"Das',verwendete:!0,'Code-Beispiel"':!0},'public class Mini {\n    public static void main(String[] args) {\n        String message = "Hi";\n\n        if (message.equals("Hi")) {\n            System.out.println(message);\n        } else {\n            // nix tun\n        }\n    }\n}\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Einen (oder mehr) Breakpoint (Haltepunkt) setzen")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(4644).Z,width:"794",height:"355"})),(0,i.kt)("admonition",{title:"Dazu auf das blaue Band links vom Code doppelklicken",type:"info"}),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Das Debugging durch den \u201eK\xe4fer-Button\u201c starten")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Auf Ebene Betriebssystem bei allf\xe4lliger Nachfrage \u201eZugriff zulassen\u201c w\xe4hlen"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(1276).Z,width:"415",height:"318"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"In Eclipse den Wechsel in eine andere Perspektive (\u201eAnsichtsart\u201c) best\xe4tigen")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(6949).Z,width:"354",height:"161"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Die Debugging-Perspektive analysieren")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(2134).Z,width:"805",height:"660"})),(0,i.kt)("p",null,"Was wird hier angezeigt?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"(1)")," Code-Fenster: die Zeile mit dem Breakpoint, gr\xfcn unterlegt ist der\nCode, der beim n\xe4chsten Schritt ausgef\xfchrt wird"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"(2)")," Buttons zur Steuerung:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Resume"),": Programm weiter laufen lassen, bis zum n\xe4chsten Breakpoint"),(0,i.kt)("li",{parentName:"ul"},"Pause: Kann ignoriert werden"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stop"),": Debugging Session wird beendet"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step-Into"),": Springt zur ",(0,i.kt)("strong",{parentName:"li"},"n\xe4chsten Linie welche ausgef\xfchrt wird"),". Also\nauch weiter zu einer m\xf6glichen Methode. So kann manuell durch den gesamten\nProgrammablauf navigiert werden."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step-Over"),": Springt zur ",(0,i.kt)("strong",{parentName:"li"},"n\xe4chsten Linie in der aktuellen Methode"),".\n\xdcberspringt also den Aufruf einer m\xf6gliche Methode auf der aktuellen Linie."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"(3)")," Variablen-Fenster: hier sind alle bereits initialisierten Variablen\nund deren Werte einsehbar (das Programm ist bereits einen Schritt weiter als\nder Breakpoint)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"(4)")," Debug-Fenster: alle laufenden Debug-Prozesse (mit Doppel-x am oberen\nRand aufr\xe4umen)")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Einzelne Ausdr\xfccke genauer untersuchen (Rechtsklick auf Linie)")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(3097).Z,width:"788",height:"766"})),(0,i.kt)("p",null,"Als Beispiel wurde ",(0,i.kt)("strong",{parentName:"p"},"Display")," ausgew\xe4hlt, welches den Ausdruck ausf\xfchrt, und\ndas Ergebnis anzeigt:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(8602).Z,width:"796",height:"89"})),(0,i.kt)("p",null,"Nun kann man ",(0,i.kt)("strong",{parentName:"p"},"Anpassungen am Code vornehmen"),", und sofort die ",(0,i.kt)("strong",{parentName:"p"},"Folgen\nbeobachten"),'. Wenn man z.B. "Hi" nach "i" \xe4ndert, wird der Ausdruck ',(0,i.kt)("inlineCode",{parentName:"p"},"false"),", da\n",(0,i.kt)("inlineCode",{parentName:"p"},'String message = "Hi"'),' ist und nicht "i"'),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(230).Z,width:"772",height:"114"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Das Debugging wird \xfcber den Stopp-Button beendet. Anschliessend k\xf6nnen Sie in\nder Entwicklungsumgebung oben rechts wieder zur Java-Perspektive zur\xfcck\nwechseln. Sobald Debugging einmal ausgef\xfchrt wurde, wird oben rechts\neinerseits ein Symbol f\xfcr die Java-Perspektive (J), und andererseits ein\nSymbol f\xfcr die Debugging-Perspektive (K\xe4fer) angezeigt.")),(0,i.kt)("h2",{id:"-debuggen-der-methode-printcurrentdate"},"\ud83d\udcdd Debuggen der Methode ",(0,i.kt)("inlineCode",{parentName:"h2"},"printCurrentDate()")),(0,i.kt)("p",null,"Wir Untersuchen den Ablauf der Methode ",(0,i.kt)("inlineCode",{parentName:"p"},"printCurrentDate()")," vom Abschnitt\n",(0,i.kt)("a",{parentName:"p",href:"/bbzbl-modul-319/docs/4a-methoden-fehleranalyse/einfache-methode"},"Einfacher Methodenaufruf")),(0,i.kt)("p",null,'Erstellen Sie daf\xfcr in Eclipse eine neue Klasse "OutputMethodExample" und kopieren Sie\nfolgendes Beispiel in die neue Datei.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'import java.time.LocalDate;\npublic class OutputMethodExample {\n    public static void main(String[] args) {\n        printCurrentDate();\n    }\n    public static void printCurrentDate() {\n        System.out.println("Current date is: " + LocalDate.now());\n    }\n}\n\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ein ",(0,i.kt)("strong",{parentName:"li"},"Breakpoint")," muss dabei ",(0,i.kt)("u",null,"mindestens")," auf die ",(0,i.kt)("strong",{parentName:"li"},"Zeile 4"),", mit dem\nAufruf der Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"printCurrentDate"),", gesetzt werden."),(0,i.kt)("li",{parentName:"ul"},"Sobald der Debugger dort anh\xe4lt, muss:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step Into")," gew\xe4hlt werden, damit der Debugger in die Methode verzweigt."),(0,i.kt)("li",{parentName:"ul"},"Diese Debugging-Session soll aufzeigen, wie der Aufruf einer Methode\nerfolgt."))),(0,i.kt)("li",{parentName:"ul"},"Spielen Sie mit den M\xf6glichkeiten")))}p.isMDXComponent=!0},4644:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/debugging-1-58b8012a6ccfe8198b1408a2d0712378.png"},1276:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/debugging-3-cc4128981a59fb42fd3e765ce8be10f2.png"},6949:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/debugging-4-8573ed57e83c86ddf6e2b1964ff9a9b5.png"},2134:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/debugging-5-1203aceb1898ec8fd5cc262e9325bb7b.png"},3097:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/debugging-6-d899549ff467cb209aa579ebcf3d2a9b.png"},8602:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/debugging-62-b31159d82b310fa8862e147f2929508f.png"},230:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/debugging-63-7956d4c42d82646c6fd39d35941a57c6.png"}}]);