"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[1384],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),d=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(o.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=d(t),p=a,g=m["".concat(o,".").concat(p)]||m[p]||c[p]||i;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7466:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(87462),a=(t(67294),t(3905));const i={keywords:["pdf"]},l="Vom Quellcode zum ausf\xfchrbaren Programm",s={unversionedId:"1b-hello-world/aufgabe3-compiler",id:"1b-hello-world/aufgabe3-compiler",title:"Vom Quellcode zum ausf\xfchrbaren Programm",description:"1. Sourcecode, Compiler, Interpreter",source:"@site/docs/1b-hello-world/aufgabe3-compiler.md",sourceDirName:"1b-hello-world",slug:"/1b-hello-world/aufgabe3-compiler",permalink:"/bbzbl-modul-319/docs/1b-hello-world/aufgabe3-compiler",draft:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/1b-hello-world/aufgabe3-compiler.md",tags:[],version:"current",frontMatter:{keywords:["pdf"]},sidebar:"tutorialSidebar",previous:{title:"Hello World Programm",permalink:"/bbzbl-modul-319/docs/1b-hello-world/aufgabe2-helloworld"},next:{title:"Analyse des bisherigen Programms",permalink:"/bbzbl-modul-319/docs/1b-hello-world/aufgabe4-klammern-bloecke"}},o={},d=[{value:"1. Sourcecode, Compiler, Interpreter",id:"1-sourcecode-compiler-interpreter",level:2},{value:"Interpetationsversuch",id:"interpetationsversuch",level:3},{value:"2. Sourcecode in Form von Klassen",id:"2-sourcecode-in-form-von-klassen",level:2},{value:"\ud83d\udcdd Aufgabe: Visualisierung",id:"-aufgabe-visualisierung",level:2}],u={toc:d},m="wrapper";function c(e){let{components:n,...i}=e;return(0,a.kt)(m,(0,r.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vom-quellcode-zum-ausf\xfchrbaren-programm"},"Vom Quellcode zum ausf\xfchrbaren Programm"),(0,a.kt)("h2",{id:"1-sourcecode-compiler-interpreter"},"1. Sourcecode, Compiler, Interpreter"),(0,a.kt)("p",null,"Programme entstehen aus Quelltext, hier Java, der durch einen Compiler entweder\nin ein Maschinenprogramm oder in ein Zwischenformat \xfcbersetzt wird, und dann\ndirekt von einem Computer, einem Betriebssystem oder einer spezifischen\nLaufzeitumgebung ausgef\xfchrt werden kann."),(0,a.kt)("p",null,"Java verfolgt einen zweistufigen \xdcbersetzungsprozess. Der Programmcode in Java\nwird nicht zu einem ausf\xfchrbaren Programm, sondern in einen Zwischencode, den\nsogenannten Bytecode, kompiliert. Dieser Code ist f\xfcr alle Plattformen gleich\nund kann mithilfe des entsprechenden plattformspezifischen Interpreters auf der\njeweiligen Plattform ausgef\xfchrt werden. Java-Interpreter werden auch virtuelle\nMaschinen (JVM) genannt."),(0,a.kt)("h3",{id:"interpetationsversuch"},"Interpetationsversuch"),(0,a.kt)("p",null,"Ihr versteht nur Bahnhof? Hier, ein Versuch das Obrige an einem Beispiel zu\nerl\xe4utern:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Reale-Welt"),(0,a.kt)("th",{parentName:"tr",align:null},"Java"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Stellt euch vor Ihr seit die Chef:in eines Internationalen Unternehmens."),(0,a.kt)("td",{parentName:"tr",align:null},"Viele Computer mit verschiedenen Betriebssystemen.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Die Aufgaben und Befehle werden alle von Spezialisten in schweizerdeutsch erfasst."),(0,a.kt)("td",{parentName:"tr",align:null},"Java ist in diesem Falle Schweizerdeutsch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Euer Unternehmen hat an jedem Standort lokale Arbeiter die nur die Landessprachen sprechen und dadurch auch nur in dieser Sprache Befehle ausf\xfchren k\xf6nnen."),(0,a.kt)("td",{parentName:"tr",align:null},"Diese k\xf6nnen mit den Betriebssystemen verglichen werden (MacOs, Windows, Linux). Jedes Betriebssystem hat eigene Codierungen! ",(0,a.kt)("em",{parentName:"td"},"(Deswegen funktionieren die meisten Games nur auf Windows)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Da schweizerdeutsch sehr ineffizient (besitzt viele Floskeln) und wenig verbreitet ist, wird vom einem Mitarbeiter alles schweizerdeutsche ins Englische \xdcbersetzt. Bei der \xdcbersetzung ins Englische wird zudem darauf geachtet die ",(0,a.kt)("strong",{parentName:"td"},"Aufgaben zu optimieren"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Das ist die Arbeit vom Compiler!")," Java (Schweizerdeutsch) in Bytecode (Englisch). Es wird auch geschaut dass das Programm optimiert werden kann! ",(0,a.kt)("em",{parentName:"td"},"(Compiler Programmierer sind die wahren Helden)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"An jedem Standort hat die Firma Personen angestellt die Englisch k\xf6nnen und vom Englischen in die jeweilige Landessprache \xfcbersetzen kann. Damit die lokalen Arbeiter effizient ihre Aufgaben erledigen k\xf6nnen."),(0,a.kt)("td",{parentName:"tr",align:null},"Der Bytecode (Englisch), wird also bei jedem Betriebssystem lokal \xfcbersetzt rsp. interpretiert, damit es auf dem jeweiligen Betriebssystem ausgef\xfchrt werden kann. ",(0,a.kt)("strong",{parentName:"td"},"Dies ist die Arbeit der Java Virtual Machine."))))),(0,a.kt)("p",null,"Nun nach dieser Tabelle, liest bitte nochmals\n",(0,a.kt)("a",{parentName:"p",href:"#1-sourcecode-compiler-interpreter"},"von vorne")),(0,a.kt)("admonition",{title:"Don't Panik!",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Man muss das oberige nicht zu 100% verstanden haben um ein guter Programmierer\nzu werden!"),(0,a.kt)("li",{parentName:"ul"},"Ein guter Rennfahrer muss auch nicht ein guter Mechaniker sein ;)"))),(0,a.kt)("h2",{id:"2-sourcecode-in-form-von-klassen"},"2. Sourcecode in Form von Klassen"),(0,a.kt)("p",null,"Java-Programme bestehen aus Klassen. Diese Klassen werden dann als Programme\nausgef\xfchrt."),(0,a.kt)("p",null,"W\xe4hrend ein Programm resp. Klassen ",(0,a.kt)("strong",{parentName:"p"},"(3)")," geschrieben werden, werden sie in\neinem Verzeichnis namens src ",(0,a.kt)("strong",{parentName:"p"},"(1)")," gespeichert und haben eine\n",(0,a.kt)("inlineCode",{parentName:"p"},".java"),"-Dateiendung ",(0,a.kt)("strong",{parentName:"p"},"(2)"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Der Dateinamen ist immer gleich zum Klassennamen, inklusive Gross- und\nKleinschreibung!"),(0,a.kt)("li",{parentName:"ul"},"Die Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"HelloWorld")," befindet sich also in der Datei ",(0,a.kt)("inlineCode",{parentName:"li"},"HelloWorld.java"),".\nEclipse generiert einen Error, wenn dies nicht \xfcbereinstimmt.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"class files",src:t(9322).Z,width:"817",height:"397"})),(0,a.kt)("p",null,"Wenn die Klassen ausgef\xfchrt werden, erfolgt durch die Entwicklungsumgebung eine\nKompilierung im Hintergrund (durch den Compiler javac), und aus den\n",(0,a.kt)("inlineCode",{parentName:"p"},".java"),"-Dateien werden ",(0,a.kt)("inlineCode",{parentName:"p"},".class"),"-Dateien, die in einem Verzeichnis namens ",(0,a.kt)("inlineCode",{parentName:"p"},"bin"),"\n(f\xfcr binaries) abgelegt werden. Diese Klassen k\xf6nnen dann durch das\nJava-Dienstprogramm ",(0,a.kt)("inlineCode",{parentName:"p"},"java")," ausgef\xfchrt werden."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"src bin",src:t(85196).Z,width:"525",height:"173"})),(0,a.kt)("p",null,"Sie k\xf6nnen sich diese auf der Harddisk ansehen, indem Sie z.B. auf dem\n",(0,a.kt)("inlineCode",{parentName:"p"},"src"),"-Ordner die rechte Maustaste bet\xe4tigen und dann ",(0,a.kt)("em",{parentName:"p"},"Show in => System\nExplorer")," w\xe4hlen."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"show in",src:t(56644).Z,width:"654",height:"361"})),(0,a.kt)("p",null,"In der ",(0,a.kt)("inlineCode",{parentName:"p"},".java"),"-Datei kann zuerst das ",(0,a.kt)("inlineCode",{parentName:"p"},"package")," angegeben werden, in welchem sich\ndie aktuelle Klasse befindet."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Wird kein ",(0,a.kt)("inlineCode",{parentName:"li"},"package")," angegeben, wie beim HelloWorld programm der Fall, befindet\nsich die Datei direkt unter dem ",(0,a.kt)("inlineCode",{parentName:"li"},"src")," Ordner, ",(0,a.kt)("inlineCode",{parentName:"li"},"src/HelloWorld.java"),"."),(0,a.kt)("li",{parentName:"ul"},"Ist ein ",(0,a.kt)("inlineCode",{parentName:"li"},"package")," angegeben, befindet sich die Klasse in einem Unterordner der\ngleich heisst wie das package. In folgenden Fall unter\n",(0,a.kt)("inlineCode",{parentName:"li"},"src/helloworld/HelloWorld.java"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// highlight-next-line\npackage helloworld;\n\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello World");\n    }\n}\n')),(0,a.kt)("p",null,"Dann folgen optional ",(0,a.kt)("inlineCode",{parentName:"p"},"import"),"-Anweisungen, die andere Java- und Programmteile im\neigenen Programm nutzbar machen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'package helloworld;\n// highlight-start\nimport some.other.package;\n// highlight-end\n\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello World");\n    }\n}\n')),(0,a.kt)("p",null,"Die eigentliche Klasse beginnt mit der Anweisung ",(0,a.kt)("inlineCode",{parentName:"p"},"public class HelloWorld"),", was\naussagt, dass es sich um eine \xf6ffentliche Klasse mit dem Namen HelloWorld\nhandelt. Nach dieser folgt eine \xf6ffnende geschweifte Klammer, die mit der\nletzten schliessenden geschweiften Klammer zusammen den Klassenk\xf6rper bildet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// highlight-next-line\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello World");\n    }\n// highlight-next-line\n}\n')),(0,a.kt)("p",null,"Dann folgt die main-Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"public static void main(String[] args)"),". Diese\nZeile wird auch als Methodensignatur bezeichnet. Im Detail wird die\nMethodensignatur sp\xe4ter angesehen. Die ",(0,a.kt)("inlineCode",{parentName:"p"},"main"),"-Methode ist eine ganz besondere,\n",(0,a.kt)("strong",{parentName:"p"},"sie dient immer als Startort des Programms"),". "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83c\udff0 Sie ist sozusagen die Pforte zum Schloss! \ud83c\udff0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class HelloWorld {\n// highlight-next-line\n    public static void main(String[] args) {\n        System.out.println("Hello World");\n    }\n}\n')),(0,a.kt)("p",null,"Das n\xe4chste paar geschweifter Klammern bildet den Methodenk\xf6rper. Darin steht\ndas, was die eigentliche Leistung des Programms ausmacht. \xdcber die Java-Klasse\nSystem erfolgt die Ausgabe auf die Console (out), wo eine Zeile ausgegeben wird\n(println)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class HelloWorld {\n    public static void main(String[] args) {\n        // highlight-next-line\n        System.out.println("Hello World");\n    }\n}\n')),(0,a.kt)("h2",{id:"-aufgabe-visualisierung"},"\ud83d\udcdd Aufgabe: Visualisierung"),(0,a.kt)("p",null,"Erstellen Sie eine eigene Visualisierung, welche f\xfcr Ihr HelloWorld Programm\naufzeigt, wie der Sourcecode zu einem ausf\xfchrbaren Programm \xfcberf\xfchrt wird,\nwelcher von einem Interpreter ausgef\xfchrt werden kann."))}c.isMDXComponent=!0},9322:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/class-files-71a1a942f1edf59afb5ea629ad8e7d8f.png"},56644:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/show-in-1e6744d613868164f67139b3008d54d0.png"},85196:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/src-bin-601a46d778f29d36c11c1a8ac3b7f3c4.png"}}]);