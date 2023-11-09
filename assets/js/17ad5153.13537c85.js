"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[770],{9977:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(5893),s=t(1151);const i={sidebar_position:2,keywords:["pdf"]},l="Switch - Kontrollstruktur",a={id:"woche03/3a-konditionen/switch-kontrollstruktur",title:"Switch - Kontrollstruktur",description:"Wir haben bereits die if-Verzweigung kennengelernt. Dort kann anhand einer",source:"@site/docs/woche03/3a-konditionen/switch-kontrollstruktur.md",sourceDirName:"woche03/3a-konditionen",slug:"/woche03/3a-konditionen/switch-kontrollstruktur",permalink:"/bbzbl-modul-319/docs/woche03/3a-konditionen/switch-kontrollstruktur",draft:!1,unlisted:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/woche03/3a-konditionen/switch-kontrollstruktur.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:["pdf"]},sidebar:"tutorialSidebar",previous:{title:"if - Kontrollstruktur",permalink:"/bbzbl-modul-319/docs/woche03/3a-konditionen/if-kontrollstruktur"},next:{title:"Weitere \xdcbungen",permalink:"/bbzbl-modul-319/docs/woche03/3a-konditionen/uebungen"}},c={},d=[{value:"\ud83d\udd8a Auftrag 1",id:"pen-auftrag-1",level:2},{value:"\ud83d\udd8a Auftrag 2",id:"pen-auftrag-2",level:2},{value:"\ud83d\udd8a Auftrag 3",id:"pen-auftrag-3",level:2},{value:"Extra: <code>switch</code> oder <code>if</code> ?",id:"extra-switch-oder-if-",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"switch---kontrollstruktur",children:"Switch - Kontrollstruktur"}),"\n",(0,r.jsx)(n.p,{children:"Wir haben bereits die if-Verzweigung kennengelernt. Dort kann anhand einer\nBedingung eine Wahl zwischen zwei M\xf6glichkeiten getroffen werden. Das ist eine\nsehr gute M\xf6glichkeit, ein Programm flexibel zu machen."}),"\n",(0,r.jsxs)(n.p,{children:["Aber manchmal gibt es Situationen, bei denen man zwischen ",(0,r.jsx)(n.strong,{children:"mehr als zwei\nM\xf6glichkeiten"})," unterscheiden m\xf6chte. So eine Situation l\xe4sst sich l\xf6sen, indem\nman etliche ifs nacheinander h\xe4ngt."]}),"\n",(0,r.jsx)(n.p,{children:"Hier ein Auszug aus einer \xdcbungsaufgabe, in der ein W\xfcrfelspiel implementiert\nwurde:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"int number = rollDice();\nif (number == 1) {\n    countOne++;\n} else if (number == 2) {\n    countTwo++;\n} else if (number == 3) {\n    countThree++;\n} else if (number == 4) {\n    countFour++;\n} else if (number == 5) {\n    countFive++;\n} else if (number == 6) {\n    countSix++;\n}\ncountAll++;\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Das obere Beispiel ist nicht alleine lauff\xe4hig, daf\xfcr fehlt die Methode\n",(0,r.jsx)(n.code,{children:"rollDice()"})," sowie die Variable ",(0,r.jsx)(n.code,{children:"countOne"}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["F\xfcr solche Mehrfachverzweigungen gibt es auch die Kontrollstruktur ",(0,r.jsx)(n.code,{children:"switch"}),".\nSwitch erm\xf6glicht es, ",(0,r.jsx)(n.strong,{children:"auf genaue"}),", unterschiedliche Werte zu reagieren\n(",(0,r.jsx)(n.code,{children:"=="}),"). Dabei k\xf6nnen die Wert numerisch oder ein String sein. Das Muster sieht\nso aus:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"switch (<Ausdruck>) {\n    case value:\n        <Anweisung>;\n        break;\n    case value:\n        <Anweisung>;\n        break;\n    default:\n        <Anweisung>;\n        break;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Nach dem Schl\xfcsselwort steht in runden Klammern eine Variable, deren Werte in\nden anschliessenden case-Bl\xf6cken ausgewertet werden. Besteht f\xfcr den aktuellen\nWert der Variablen ein passender case-Block, springt das Programm dort hinein,\nf\xfchrt die Anweisungen aus, und springt aufgrund der break-Anweisung aus dem\nswitch heraus (ohne break w\xfcrden alle nachfolgenden Bl\xf6cke auch durchlaufen).\nDas default am Schluss erm\xf6glicht es, Anweisungen f\xfcr alle anderen F\xe4lle\nfestzulegen, in denen kein exakter Wert in einem case steht."}),"\n",(0,r.jsx)(n.p,{children:"Ein konkretes Beispiel sieht so aus:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public class SwitchDemo {\n    public static void main(String[] args) {\n        int month = 8;\n        String monthString;\n        switch (month) {\n            case 1:\n                monthString = "January";\n                break;\n            case 2:\n                monthString = "February";\n                break;\n            //... andere F\xe4lle hier ausgelassen\n            case 8:\n                monthString = "August";\n                break;\n            //... andere F\xe4lle hier ausgelassen\n            default:\n                monthString = "Invalid month";\n                break;\n        }\n        System.out.println(monthString);\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"pen-auftrag-1",children:["\ud83d\udd8a"," Auftrag 1"]}),"\n",(0,r.jsx)(n.p,{children:"Erstellen Sie eine Klasse, welche f\xfcr die Eingabe einer (vereinfachten, ganzen)\nNote die entsprechende textuelle Bewertung ausgibt resp. Fehlermeldung bei\nung\xfcltiger Note:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"sehr gut"}),"\n",(0,r.jsx)(n.li,{children:"gut"}),"\n",(0,r.jsx)(n.li,{children:"gen\xfcgend"}),"\n",(0,r.jsx)(n.li,{children:"ungen\xfcgend"}),"\n",(0,r.jsx)(n.li,{children:"schwach"}),"\n",(0,r.jsx)(n.li,{children:"sehr schwach"}),"\n",(0,r.jsx)(n.li,{children:"falsche Eingabe"}),"\n"]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Musterl\xf6sung"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'import mytools.StdInput;\n\npublic class A1GradesToText {\n\n\tpublic static void main(String[] args) {\n\n\t\tSystem.out.print("Note eingeben: ");\n\t\tint grade = StdInput.readInt();\n\t\tString gradeText = "";\n\n\t\tswitch (grade) {\n\t\tcase 1:\n\t\t\tgradeText = "sehr schwach";\n\t\t\tbreak;\n\t\tcase 2:\n\t\t\tgradeText = "schwach";\n\t\t\tbreak;\n\t\tcase 3:\n\t\t\tgradeText = "ungen\xfcgend";\n\t\t\tbreak;\n\t\tcase 4:\n\t\t\tgradeText = "gen\xfcgend";\n\t\t\tbreak;\n\t\tcase 5:\n\t\t\tgradeText = "gut";\n\t\t\tbreak;\n\t\tcase 6:\n\t\t\tgradeText = "sehr gut";\n\t\t\tbreak;\n\t\tdefault:\n\t\t\tgradeText = "falsche Eingabe";\n\t\t\tbreak;\n\t\t}\n\t\tSystem.out.println(gradeText);\n\t}\n\n}\n'})})]}),"\n",(0,r.jsxs)(n.h2,{id:"pen-auftrag-2",children:["\ud83d\udd8a"," Auftrag 2"]}),"\n",(0,r.jsx)(n.p,{children:"Programmieren eines Rechners mit switch."}),"\n",(0,r.jsx)(n.p,{children:"Erstellen Sie ein Programm, das zwei Zahlen plus einen Operator einliest.\nBerechnen Sie dann mittels des switch-Statements, welche Rechenart erforderlich\nist, f\xfchren die Berechnung aus und geben das Ergebnis aus."}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Musterl\xf6sung:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"import mytools.StdInput;\n\npublic class A2Calculator {\n\n\tpublic static void main(String[] args) {\n\t\tdouble firstNumber = StdInput.readDouble(\"Zahl 1 eingeben: \");\n\t\tdouble secondNumber = StdInput.readDouble(\"Zahl 2 eingeben: \");\n\t\tchar operator = StdInput.readChar(\"Operator eingeben: \");\n\t\tdouble res = 0;\n\n\t\tswitch(operator) {\n            case '+':\n                res = firstNumber + secondNumber;\n                break;\n            case '-':\n                res = firstNumber - secondNumber;\n                break;\n            case '*':\n                res = firstNumber * secondNumber;\n                break;\n            case '/':\n                res = firstNumber / secondNumber;\n                break;\n\t\t}\n\n\t\tSystem.out.println(\"Resultat: \" + res);\n\t}\n}\n"})})]}),"\n",(0,r.jsxs)(n.h2,{id:"pen-auftrag-3",children:["\ud83d\udd8a"," Auftrag 3"]}),"\n",(0,r.jsx)(n.p,{children:"Die Beaufort-Skala wurde 1806 von dem englischen Admiral Sir Francis Beaufort\n(1774 \u2013 1857) erarbeitet. Mit ihrer Hilfe kann anhand der Auswirkungen des\nWindes die Windst\xe4rke gesch\xe4tzt werden. Sie reicht von St\xe4rke 0 (Windstille) bis\nSt\xe4rke 12 (Orkan)."}),"\n",(0,r.jsxs)(n.admonition,{title:"nur zur Info",type:"note",children:[(0,r.jsx)(n.p,{children:"Die Aufgabe l\xe4sst sich ohne das genaue Studieren dieser Tabelle l\xf6sen ;)"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(7180).Z+"",width:"1171",height:"415"})})]}),"\n",(0,r.jsx)(n.p,{children:"Es gelten die folgenden Annahmen:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Beaufort 0 - 8: es besteht keine Gefahr"}),"\n",(0,r.jsx)(n.li,{children:"Beaufort 9: es bestehen m\xf6gliche Gefahren"}),"\n",(0,r.jsx)(n.li,{children:"Beaufort 10 - 12: es bestehen erhebliche Gefahren"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Ein Benutzer will wissen, ",(0,r.jsx)(n.strong,{children:"ob f\xfcr eine gewisse Windst\xe4rke eine Gefahr\nbesteht"}),". Schreiben Sie ein kleines Programm daf\xfcr. Das Programm soll folgendes\nmachen:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Nach der Windst\xe4rke in Beaufort fragen und den Wert einlesen."}),"\n",(0,r.jsx)(n.li,{children:"Einen Gefahren-text ausgibt"}),"\n"]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Musterl\xf6sung"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'import mytools.StdInput;\n\npublic class A3Beaufort {\n\n\tpublic static void main(String[] args) {\n\t\tSystem.out.print("Beaufort-Stufe: ");\n\t\tint level = StdInput.readInt();\n\n\t\tswitch(level) {\n\t\t\tcase 0: // wenn kein `brake` steht springt es zur n\xe4chsten Anweisung\n\t\t\tcase 1: // wenn kein `brake` steht springt es zur n\xe4chsten Anweisung\n\t\t\tcase 2: // wenn kein `brake` steht springt es zur n\xe4chsten Anweisung\n\t\t\tcase 3: // wenn kein `brake` steht springt es zur n\xe4chsten Anweisung\n\t\t\tcase 4: // wenn kein `brake` steht springt es zur n\xe4chsten Anweisung\n\t\t\tcase 5: // wenn kein `brake` steht springt es zur n\xe4chsten Anweisung\n\t\t\tcase 6: // wenn kein `brake` steht springt es zur n\xe4chsten Anweisung\n\t\t\tcase 7: // wenn kein `brake` steht springt es zur n\xe4chsten Anweisung\n\t\t\tcase 8:\n                // wird von 0-8 ausgef\xfchrt\n\t\t\t\tSystem.out.println("Es besteht keine Gefahr.");\n\t\t\t\tbreak;\n\n\t\t\tcase 9:\n\t\t\t\tSystem.out.println("Es bestehen moegliche Gefahren.");\n\t\t\t\tbreak;\n\n\t\t\tcase 10: // wenn kein `brake` steht springt es zur n\xe4chsten Anweisung\n\t\t\tcase 11: // wenn kein `brake` steht springt es zur n\xe4chsten Anweisung\n\t\t\tcase 12:\n                // wird von 10-12 ausgef\xfchrt\n\t\t\t\tSystem.out.println("Es bestehen erhebliche Gefahren.");\n\t\t\t\tbreak;\n\n\t\t\tdefault:\n\t\t\t\tSystem.out.println("Ungueltige Eingabe");\n\t\t}\n\t}\n\n}\n'})}),(0,r.jsxs)(n.p,{children:["Wie ich finde, ist auch hier ",(0,r.jsx)(n.code,{children:"if"})," eleganter:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'import mytools.StdInput;\n\npublic class A3BeaufortIf {\n\n\tpublic static void main(String[] args) {\n\t\tSystem.out.print("Beaufort-Stufe: ");\n\t\tint level = StdInput.readInt();\n\n        if (level <= 8) {\n            System.out.println("Es besteht keine Gefahr.");\n        } else if (level == 9) {\n            System.out.println("Es bestehen moegliche Gefahren.");\n        } else if (level <= 12) {\n            System.out.println("Es bestehen erhebliche Gefahren.");\n        } else {\n            System.out.println("Ungueltige Eingabe");\n        }\n\t}\n\n}\n\n'})})]}),"\n",(0,r.jsxs)(n.h2,{id:"extra-switch-oder-if-",children:["Extra: ",(0,r.jsx)(n.code,{children:"switch"})," oder ",(0,r.jsx)(n.code,{children:"if"})," ?"]}),"\n",(0,r.jsxs)(n.p,{children:["Sie werden nachvollziehen k\xf6nnen oder bereits festgestellt haben, dass die\n",(0,r.jsx)(n.code,{children:"switch"})," Kontrollstruktur fast immer durch mehrfache ",(0,r.jsx)(n.code,{children:"if-else"})," ersetzt werden\nk\xf6nnte."]}),"\n",(0,r.jsx)(n.p,{children:"Die folgende Tabelle stellt Argumente gegen\xfcber:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Kontrollstruktur"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Beschreibung"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Begr\xfcndung"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"if"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"jedes Mal wird das Ergebnis eines boolean Ausdrucks berechnet"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"\xfcberschaubare Anzahl F\xe4lle; alle Datentypen m\xf6glich"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"switch"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"definierte, einzelne Werte werden gepr\xfcft"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"etwas besser lesbar bei vielen Varianten; nur m\xf6glich mit Zeichen, Strings und Ganzzahlen"})]})]})]}),"\n",(0,r.jsxs)(n.admonition,{title:"Herr Hodels Meinung",type:"info",children:[(0,r.jsxs)(n.p,{children:["Grunds\xe4tzlich kann man auf Switch verzichten. Ist switch wirklich leserlicher?\nVor allem das ",(0,r.jsx)(n.code,{children:"break"})," nach jeder Anweisung macht es h\xe4ufig komplexer."]}),(0,r.jsxs)(n.p,{children:["Eigentlich macht switch nur dann Sinn, wenn mehrere ",(0,r.jsx)(n.code,{children:"<Anweisungen>"})," bei\nspezifischen Werten ausgef\xfchrt werden sollen. Also dann, wenn man das ",(0,r.jsx)(n.code,{children:"break"}),"\nnicht schreiben m\xfcsste. Nun hat sich in der Praxis ergeben, dass dies fast nie\nder Fall ist."]})]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},7180:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/beauford-skala-d2e2d5269232ec8f969c09f54fd4ba96.jpg"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var r=t(7294);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);