"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[9475],{954:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>t,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var r=i(5893),s=i(1151);const l={sidebar_position:2,keywords:["pdf"]},t="\ud83e\uddd0 Fehleranalyse",d={id:"woche04/fehleranalyse",title:"\ud83e\uddd0 Fehleranalyse",description:"Ziele",source:"@site/docs/woche04/fehleranalyse.md",sourceDirName:"woche04",slug:"/woche04/fehleranalyse",permalink:"/bbzbl-modul-319/docs/woche04/fehleranalyse",draft:!1,unlisted:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/woche04/fehleranalyse.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:["pdf"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd6 Geltungsbereich von lokalen Variablen",permalink:"/bbzbl-modul-319/docs/woche04/4a-methoden-fehleranalyse/geltungsbereich-variablen"},next:{title:"Woche 5",permalink:"/bbzbl-modul-319/docs/woche05/"}},h={},a=[{value:"\ud83c\udfaf Ziele",id:"dart-ziele",level:2},{value:"\ud83d\udd8a A1: Bewusst Fehler generieren \ud83d\ude80",id:"pen-a1-bewusst-fehler-generieren-rocket",level:2},{value:"\ud83d\udc1b Die vier Arten von Fehlern",id:"bug-die-vier-arten-von-fehlern",level:2},{value:"1. Syntaxfehler, die direkt angezeigt werden",id:"1-syntaxfehler-die-direkt-angezeigt-werden",level:3},{value:"Warnings (Gelb unterwellt)",id:"warnings-gelb-unterwellt",level:4},{value:"2. Kompilierfehler",id:"2-kompilierfehler",level:3},{value:"3. Fehler zur Laufzeit",id:"3-fehler-zur-laufzeit",level:3},{value:"4. Logische Fehler",id:"4-logische-fehler",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-fehleranalyse",children:"\ud83e\uddd0 Fehleranalyse"}),"\n",(0,r.jsxs)(n.h2,{id:"dart-ziele",children:["\ud83c\udfaf"," Ziele"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Sie kennen die vier Arten von Fehlern, k\xf6nnen Sie benennen und reproduzieren"}),"\n",(0,r.jsx)(n.li,{children:"Sie k\xf6nnen bei Laufzeitfehlern (das Programm st\xfcrzt ab) den Stacktrace\nerkennen und von dort angezeigte Fehlerstellen in Ihrem Programm anspringen."}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"pen-a1-bewusst-fehler-generieren-rocket",children:["\ud83d\udd8a"," A1: Bewusst Fehler generieren ","\ud83d\ude80"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Machen Sie eine ",(0,r.jsx)(n.strong,{children:"Kopie"})," einer bereits gel\xf6sten Aufgabe Ihrer Wahl"]}),"\n",(0,r.jsxs)(n.li,{children:["Machen Sie sich mit den\n",(0,r.jsx)(n.a,{href:"#bug-die-vier-arten-von-fehler",children:"vier Arten von Fehlern"})," bekannt"]}),"\n",(0,r.jsx)(n.li,{children:"Verschlimmbessern Sie die Kopie, sodass Sie jede der vier Arten einmal zu\nGesicht bekommen"}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{title:"lesen und direkt nachstellen",type:"tip",children:[(0,r.jsx)(n.p,{children:"Wenn Sie die Kopie des Programmes bereits zur Hand haben w\xe4hrend Sie die Theorie\nlesen, k\xf6nnen Sie direkt beim lesen versuchen den Fehler zu reproduzieren."}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Dies spart Zeit ","\ud83d\ude09"]}),"\n",(0,r.jsxs)(n.li,{children:["Sie k\xf6nnen das gelesene besser verarbeiten ","\ud83e\udde0"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"bug-die-vier-arten-von-fehlern",children:["\ud83d\udc1b"," Die vier Arten von Fehlern"]}),"\n",(0,r.jsx)(n.p,{children:"Um Herausforderungen beim Programmieren zu l\xf6sen, m\xfcssen Sie erkennen k\xf6nnen,\nwelche Meldungen von Eclipse nur Warnings sind, die Sie mindestens zuerst mal\nnicht beachten m\xfcssen."}),"\n",(0,r.jsxs)(n.p,{children:["Dann bleiben ",(0,r.jsx)(n.strong,{children:"vier Fehlerarten"}),":"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Fehler, die bereits ",(0,r.jsx)(n.strong,{children:"beim Programmieren/Eintippen"})," angezeigt werden","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Syntaxfehler (analog zu Rechtschreibefehler im Deutschen)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Fehler, die ",(0,r.jsx)(n.strong,{children:"beim Kompilieren"})," angezeigt werden und anhand des angezeigten\nFehlers analysiert werden k\xf6nnen"]}),"\n",(0,r.jsxs)(n.li,{children:["Fehler die ",(0,r.jsx)(n.strong,{children:"zur Laufzeit"}),' eine "Exception" ergeben, f\xfcr die ein\n"Stacktrace" besteht, der einen Link zu einer m\xf6glichen Fehlerquelle enth\xe4lt.']}),"\n",(0,r.jsxs)(n.li,{children:["Fehler in der ",(0,r.jsx)(n.strong,{children:"Logik"}),". Das Programm ist zwar korrekt, macht jedoch das\nFalsche.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Dies ist die schwerwiegendste und fieseste Fehlerart!"}),"\n",(0,r.jsx)(n.li,{children:"Daf\xfcr braucht man vor allem den Debugger"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"1-syntaxfehler-die-direkt-angezeigt-werden",children:"1. Syntaxfehler, die direkt angezeigt werden"}),"\n",(0,r.jsxs)(n.p,{children:["Bei verschiedenen Fehlern kann Eclipse direkt erkennen, dass ein Fehler\nvorliegt. Sowie hier im Beispiel, auf ",(0,r.jsx)(n.strong,{children:"Zeile 7"}),", wo versucht wird, einen\n",(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"String"}),"-Wert in einer ",(0,r.jsx)(n.code,{children:"int"}),"-Variablen zu speichern"]}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Die Fehlerquelle ist mit einer ",(0,r.jsx)(n.strong,{children:"roten Schlangenlinie"})," unterstrichen und rechts\nerscheint neben der Zeilennummer ein ",(0,r.jsx)(n.strong,{children:"rotes Quadrat mit einem weissen x"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Wenn man nun mit dem Cursor \xfcber das unterstrichene Wort f\xe4hrt, wird ein Dialog\nmit dem Fehlerbeschrieb und m\xf6glichen L\xf6sungen vorgeschlagen. Ob die\nvorgeschlagene L\xf6sung sinnvoll ist, muss im Einzelfall gepr\xfcft werden."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"error",src:i(7298).Z+"",width:"867",height:"429"})}),"\n",(0,r.jsx)(n.h4,{id:"warnings-gelb-unterwellt",children:"Warnings (Gelb unterwellt)"}),"\n",(0,r.jsxs)(n.p,{children:["Nicht alles was Eclipse anzeigt, sind Fehler. So zeigt Eclipse auch verschiedene\nWarnings an. Dabei kann ein ",(0,r.jsx)(n.strong,{children:"gelbes Dreieck mit einem Ausrufezeichen"})," bei den\nZeilennummern angezeigt werden."]}),"\n",(0,r.jsxs)(n.p,{children:["Meist ist dann ein Ausdruck mit einer ",(0,r.jsx)(n.strong,{children:"gelben Schlangenlinie unterstrichen"}),".\nWenn man mit der Maus dar\xfcberf\xe4hrt, wird ein Dialog anzeigt, der es erm\xf6glich,\ndie Ursache der Warnung zu entfernen."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"warnings",src:i(5289).Z+"",width:"813",height:"327"})}),"\n",(0,r.jsx)(n.h3,{id:"2-kompilierfehler",children:"2. Kompilierfehler"}),"\n",(0,r.jsxs)(n.p,{children:["Werden ",(0,r.jsx)(n.strong,{children:"direkt angezeigte Fehler ignoriert"}),' und das Programm wird kompiliert,\nzeigt Eclipse einen Kompilierfehler an. Die Fehlerursache kann im sogenannten\n"Stacktrace", der Ausgabe der Fehlermeldung, analysiert werden.']}),"\n",(0,r.jsxs)(n.p,{children:["Kompilierfehler sind meistens ",(0,r.jsx)(n.strong,{children:"Rechtschreibefehler"}),". Im Beispiel wurde die\nVariable ",(0,r.jsx)(n.code,{children:"anotherValue"})," falsch geschrieben ",(0,r.jsx)(n.code,{children:"anotheValue"}),". Wird dieser Code nun\nKompiliert erscheint folgender Fehler."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"In der ersten Zeile steht \xabunresolved compilation problem\xbb."}),"\n",(0,r.jsx)(n.li,{children:"In der vierten Zeile ist die Fehlerquelle angegeben, der Klassenname und die\nFehlerzeile."}),"\n",(0,r.jsx)(n.li,{children:"Diese Fehlerquelle kann man anklicken, dann springt der Cursor direkt an diese\nPosition."}),"\n",(0,r.jsx)(n.li,{children:"Der Fehler wird ebenfalls direkt beim Code (Zeile 9) rot markiert."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"compile-error",src:i(2101).Z+"",width:"1053",height:"571"})}),"\n",(0,r.jsxs)(n.admonition,{title:"Analogie: Aufsatz schreiben in Word.",type:"tip",children:[(0,r.jsx)(n.p,{children:"Der Fehlertyp 1 und 2 sind quasi Gleich. Der Unterschied liegt darin wer den\nFehler findet."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Syntaxfehler"}),": Word unterstreicht ein Wort weil es falsch geschrieben wird","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Der Sch\xfchler ignoriert es trotzdem"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Kompilierfehler"}),": Der Lehrer liest den Aufsatz, unterstreicht das Wort\nebenfalls und gibt Abzug!","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Nur dass ein Kompilierfehler keinen Abzug gibt ","\ud83d\ude05"]}),"\n",(0,r.jsx)(n.li,{children:"Es wir einen Link zum Problem ausgegeben"}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(n.h3,{id:"3-fehler-zur-laufzeit",children:"3. Fehler zur Laufzeit"}),"\n",(0,r.jsxs)(n.p,{children:["Laufzeitfehler sind die g\xe4ngigsten und auch die am schwierigsten zu finden!\nFehler zur Laufzeit sind ",(0,r.jsx)(n.strong,{children:"Inhaltsfehler"}),". Sie passieren, wenn die Eingabe vom\nBenutzer nicht korrekt gepr\xfcft wurde. Der h\xe4ufigste Laufzeitfehler ist die\n",(0,r.jsx)(n.code,{children:"NullPointerException"}),". Dieser tritt auf, wenn ein Objekt noch nicht\ninitialisiert wurde und somit ",(0,r.jsx)(n.code,{children:"null"})," ist. Wird dann versucht eine Methode auf\ndem Objekt auszuf\xfchren gibt es einen Fehler."]}),"\n",(0,r.jsxs)(n.p,{children:["Im Beispiel ist das Problem eine solche ",(0,r.jsx)(n.code,{children:"NullPointerException"}),'. Es wird versucht\nauf Zeile 12 die L\xe4nge vom String-Objekt name herauszufinden. Nur wurde die\nVariable "name" auf der Zeile 10 mit ',(0,r.jsx)(n.code,{children:"null"}),' \xfcberschrieben. Es wird also wieder\nein "Stacktrace" angezeigt die Hinweise zum Fehler ausgeben. Die letzte Zeile\nder Meldung ist wiederum Klassenname und die Zeile. Es ist wieder ein Link, den\nman anklicken kann, damit der Cursor direkt an der Fehlerquelle steht.']}),"\n",(0,r.jsx)(n.p,{children:'Diesmal wird jedoch kein Fehler direkt bei der Zeile 12 dargestellt. Eclipse\nzeigt nur Rechtschreibefehler direkt bei der Zeile an. Inhaltsfehler werden\nausschliesslich durch den "Stacktrace" beschrieben.'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"laufzeitfehler",src:i(6083).Z+"",width:"1058",height:"631"})}),"\n",(0,r.jsx)(n.h3,{id:"4-logische-fehler",children:"4. Logische Fehler"}),"\n",(0,r.jsxs)(n.p,{children:["Der Logische Fehler ist nun der Problematischste. Stellt euch vor Ihr habt eine\nKassensoftware geschrieben. Viele Kunden verwenden diese bereits in Ihren\nGesch\xe4ften. Nun stellt jemand Fest, dass in der Software ein ",(0,r.jsx)(n.code,{children:"<"})," mit einem ",(0,r.jsx)(n.code,{children:">"}),"\nverwechselt ist."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Es erhalten also alle einen Rabatt unter 1000 und nicht \xfcber 1000 Franken.\n","\ud83d\ude31"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Dies zu finden kann schnell oder lange dauern. Es gibt jedoch keinen Error! Der\nFehler ist nicht technischer sondern Inhaltlicher Natur. Der Fehler hat die\nKunden schon mehrere 1000.- gekostet!"}),"\n",(0,r.jsxs)(n.admonition,{title:"Debugging",type:"tip",children:[(0,r.jsxs)(n.p,{children:["Logische Fehler k\xf6nnen am Besten ",(0,r.jsxs)(n.strong,{children:["durch das\n",(0,r.jsx)(n.a,{href:"/bbzbl-modul-319/docs/woche03/debugging",children:"Debugging"})," analysiert"]})," werden."]}),(0,r.jsxs)(n.p,{children:["Wirklich helfen tut jedoch nur eine ",(0,r.jsx)(n.strong,{children:"gute Qualit\xe4tssicherung"})," w\xe4hrend der\nSoftware-Entwicklung durch manuelle und automatisierte Tests"]})]})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},2101:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/compile-error-5c65d7d5b1c4f1982aa3d77db887c74c.png"},7298:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/error-a09ead0bbe09a63172063629b6e8f02c.png"},6083:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/laufzeitfehler-ca7317cfb192c004509f523bf7deb7ea.png"},5289:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/warnings-9147bbe1ad75550924ebc7cb7e1f2eab.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>t});var r=i(7294);const s={},l=r.createContext(s);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);