"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[4260],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),o=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=o(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),m=o(t),c=r,g=m["".concat(s,".").concat(c)]||m[c]||p[c]||i;return t?a.createElement(g,l(l({ref:n},d),{},{components:t})):a.createElement(g,l({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var o=2;o<i;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53888:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var a=t(87462),r=(t(67294),t(3905));const i={sidebar_position:5},l="Aufgaben",u={unversionedId:"5a-methoden-fehleranalyse/aufgaben",id:"5a-methoden-fehleranalyse/aufgaben",title:"Aufgaben",description:"Verfolgen Sie den Programmablauf und die Werte der Variablen.",source:"@site/docs/5a-methoden-fehleranalyse/aufgaben.md",sourceDirName:"5a-methoden-fehleranalyse",slug:"/5a-methoden-fehleranalyse/aufgaben",permalink:"/bbzbl-modul-319/docs/5a-methoden-fehleranalyse/aufgaben",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Fehleranalyse und Fehlersuchen",permalink:"/bbzbl-modul-319/docs/5a-methoden-fehleranalyse/fehleranalyse"},next:{title:"6 - Spiele",permalink:"/bbzbl-modul-319/docs/6a-spiele/"}},s={},o=[{value:"Aufgabe 1 \u2013 \xabGr\xf6ssere Zahl\xbb",id:"aufgabe-1--gr\xf6ssere-zahl",level:2},{value:"Auftrag 2 \u2013 \xabIntervall\xbb",id:"auftrag-2--intervall",level:2},{value:"Auftrag 3 \xabZinsrechner\xbb",id:"auftrag-3-zinsrechner",level:2},{value:"Auftrag 4 \xabEinfacher Rechner\xbb",id:"auftrag-4-einfacher-rechner",level:2},{value:"Auftrag 5 \xabEigenes Beispiel\xbb",id:"auftrag-5-eigenes-beispiel",level:2}],d={toc:o};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aufgaben"},"Aufgaben"),(0,r.kt)("admonition",{title:"Untersuchen Sie alle Aufgabe auch mittels Debugging",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udd0d Verfolgen Sie den Programmablauf und die Werte der Variablen."),(0,r.kt)("p",{parentName:"admonition"},'\ud83e\uddb8 Schauen Sie auf welchen Zeilen \xfcberhaupt ein "Breakpoint" gesetzt\nwerden kann. Sie werden sehen, dies geht nur auf Zeilen die auch wirklich\nausgef\xfchrt werden. Also auf Zeilen im Methodenk\xf6rper.')),(0,r.kt)("h2",{id:"aufgabe-1--gr\xf6ssere-zahl"},"Aufgabe 1 \u2013 \xabGr\xf6ssere Zahl\xbb"),(0,r.kt)("p",null,"Erstellen Sie ein Programm, das zwei Zahlen von der Konsole einliest."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Diese beiden Zahlen sollen an eine Methode als Parameter \xfcbergeben werden\nk\xf6nnen."),(0,r.kt)("li",{parentName:"ul"},"Die Methode soll die gr\xf6ssere der beiden Zahlen ermitteln und diese als\nR\xfcckgabewert zur\xfcckgeben.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Musterl\xf6sung"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="A1EvaluateBiggerNumber.java"',title:'"A1EvaluateBiggerNumber.java"'},'import mytools.StdInput;\n\npublic class A1EvaluateBiggerNumber {\n\n    public static void main(String[] args) {\n        System.out.print("Input value 1: ");\n        int number1 = StdInput.readInt();\n\n        System.out.print("Input value 2: ");\n        int number2 = StdInput.readInt();\n\n        int biggerNumber = evaluate(number1, number2);\n        System.out.println("Die gr\xf6ssere Zahl ist: " + biggerNumber);\n    }\n\n    public static int evaluate(int value1, int value2) {\n        if (value1 > value2) {\n            return value1;\n        } else {\n            return value2;\n        }\n    }\n\n}\n\n'))),(0,r.kt)("h2",{id:"auftrag-2--intervall"},"Auftrag 2 \u2013 \xabIntervall\xbb"),(0,r.kt)("p",null,"Erstellen Sie ein Programm, in dem eine Methode pr\xfcft, ob eine Zahl innerhalb\neines Intervalls liegt."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Der Intervall (unterer und oberer Grenzwert) und die Zahl werden als Parameter\nan die Methode \xfcbermittelt."),(0,r.kt)("li",{parentName:"ul"},"Die Methode gibt true zur\xfcck, falls die Zahl im Intervall liegt, sonst false."),(0,r.kt)("li",{parentName:"ul"},"Das Ergebnis soll in der ",(0,r.kt)("inlineCode",{parentName:"li"},"main"),"-Methode auf die Konsole ausgegeben werden.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Musterl\xf6sung"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="A2Intervall.java"',title:'"A2Intervall.java"'},'import mytools.StdInput;\n\npublic class A2Intervall {\n\n    public static void main(String[] args) {\n        int min = 1;\n        int max = 10;\n\n        System.out.print("Input value: ");\n        int number = StdInput.readInt();\n\n        boolean inRange = isInRange(min, max, number);\n        System.out.println("Ist im Intervall: " + inRange);\n    }\n\n    public static boolean isInRange(int minimum, int maximum, int value) {\n        return value >= minimum && value <= maximum;\n    }\n\n}\n'))),(0,r.kt)("h2",{id:"auftrag-3-zinsrechner"},"Auftrag 3 \xabZinsrechner\xbb"),(0,r.kt)("p",null,"Erstellen Sie ein Programm, wobei Sie einen Sparbetrag eingeben k\xf6nnen, sowie\neinen Zins in %."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In einer Methode soll entsprechend der Zinsbetrag ausgerechnet und\nzur\xfcckgegeben werden."),(0,r.kt)("li",{parentName:"ul"},"Dieser Zinsbetrag soll dann in der main-Methode auf die Konsole ausgegeben\nwerden.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Musterl\xf6sung"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="A3InterestCalculator.java"',title:'"A3InterestCalculator.java"'},'import mytools.StdInput;\n\npublic class A3InterestCalculator {\n\n    public static void main(String[] args) {\n        double amount = StdInput.readDouble("Betrag eingeben: ");\n        double interestRate = StdInput.readDouble("Zinssatz in % eingeben: ");\n\n        double interest = calcInterest(amount, interestRate);\n        System.out.println("Der Zinsbetrag betr\xe4gt: " + interest);\n    }\n\n    public static double calcInterest(double amount, double interestRate) {\n        return (amount / 100) * interestRate;\n    }\n}\n'))),(0,r.kt)("h2",{id:"auftrag-4-einfacher-rechner"},"Auftrag 4 \xabEinfacher Rechner\xbb"),(0,r.kt)("p",null,"Dieses Programm erwartet die Eingabe zweier Zahlen ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," durch den\nBenutzer, sowie den Rechenoperator als String ",(0,r.kt)("inlineCode",{parentName:"p"},"+")," oder ",(0,r.kt)("inlineCode",{parentName:"p"},"*"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"F\xfcr die Operatoren ",(0,r.kt)("inlineCode",{parentName:"li"},"+")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"*")," sollen zwei Methoden (z.B. ",(0,r.kt)("inlineCode",{parentName:"li"},"add"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mulitpy"),")\nexistieren welche die Parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"b")," besitzen und das Resultat\nzur\xfcckgeben."),(0,r.kt)("li",{parentName:"ul"},"Je nach Operator werden die beiden Zahlen ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"b")," an die zust\xe4ndige\nMethode als Parameter \xfcbergeben"),(0,r.kt)("li",{parentName:"ul"},"Das Ergebnis wird berechnet und als R\xfcckgabewert an die ",(0,r.kt)("inlineCode",{parentName:"li"},"main"),"-Methode\nzur\xfcckgegeben."),(0,r.kt)("li",{parentName:"ul"},"Das Ergebnis soll in die Konsole ausgegeben werden.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Musterl\xf6sung"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="A4SimpleCalculator.java"',title:'"A4SimpleCalculator.java"'},'import mytools.StdInput;\n\npublic class A4SimpleCalculator {\n\n    public static void main(String[] args) {\n        // Initialisierung der Variablen\n        int a = 0;\n        int b = 0;\n        int result = 0;\n        String operator;\n\n        // Einlesen der Werte\n        System.out.println("Bitte erste Zahl eingeben:");\n        a = StdInput.readInt();\n        System.out.println("Bitte zweite Zahl eingeben:");\n        b = StdInput.readInt();\n        System.out.println("Welche Operation wollen Sie ausf\xfchren: + *");\n        operator = StdInput.readString();\n\n        // Operator pr\xfcfen und Resultat entsprechend berechnen\n        if ("+".equals(operator)) {\n            result = add(a, b);\n        } else if ("*".equals(operator)) {\n            result = multiply(a, b);\n        }\n\n        // Resultat ausgeben\n        System.out.println("Das Resultat ist " + result);\n    }\n\n    public static int add(int a, int b) {\n        return a + b;\n    }\n\n    public static int multiply(int a, int b) {\n        return a * b;\n    }\n}\n'))),(0,r.kt)("h2",{id:"auftrag-5-eigenes-beispiel"},"Auftrag 5 \xabEigenes Beispiel\xbb"),(0,r.kt)("p",null,"Adaptieren Sie ein Beispiel mit Methoden inkl. Parameter(n) und R\xfcckgabewert auf\neine eigene Situation."))}p.isMDXComponent=!0}}]);