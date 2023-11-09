"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[2616],{2253:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var s=r(5893),i=r(1151);const t={keywords:["pdf"]},a="\ud83c\udf61 Arrays und for(each)",d={id:"woche07/7a-for-arrays/index",title:"\ud83c\udf61 Arrays und for(each)",description:"Ziele",source:"@site/docs/woche07/7a-for-arrays/index.md",sourceDirName:"woche07/7a-for-arrays",slug:"/woche07/7a-for-arrays/",permalink:"/bbzbl-modul-319/docs/woche07/7a-for-arrays/",draft:!1,unlisted:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/woche07/7a-for-arrays/index.md",tags:[],version:"current",frontMatter:{keywords:["pdf"]},sidebar:"tutorialSidebar",previous:{title:"Woche 7 \ud83c\udfc5",permalink:"/bbzbl-modul-319/docs/woche07/"},next:{title:"Arrays / Listen",permalink:"/bbzbl-modul-319/docs/woche07/7a-for-arrays/arrays"}},o={},l=[{value:"\ud83c\udfaf Ziele",id:"dart-ziele",level:2},{value:":teacher: Pr\xe4sentation",id:"teacher-pr\xe4sentation",level:2},{value:"Einleitung",id:"einleitung",level:2},{value:"\ud83d\udcd6 Themen",id:"open_book-themen",level:2},{value:"\ud83d\udcfa Erkl\xe4rvideos von Studyflix",id:"tv-erkl\xe4rvideos-von-studyflix",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{DocCardList:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("DocCardList",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"-arrays-und-foreach",children:"\ud83c\udf61 Arrays und for(each)"}),"\n",(0,s.jsxs)(n.h2,{id:"dart-ziele",children:["\ud83c\udfaf"," Ziele"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Sie k\xf6nnen mittels Arrays effizient mit mehreren Werte des gleichen Datentyps\nprogrammieren."}),"\n",(0,s.jsx)(n.li,{children:"Sie k\xf6nnen die for Kontrollstruktur nutzen, die besonders f\xfcr das Durchlaufen\nvon Arrays hilfreich ist."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"teacher-pr\xe4sentation",children:":teacher: Pr\xe4sentation"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.a,{href:"pathname:///slides/arrays",children:["\ud83d\udcbb"," Open in Browser"]})," | ",(0,s.jsxs)(n.a,{href:"pathname:///slides/arrays.pdf",children:["\ud83d\udcbe"," download PDF"]})]}),"\n",(0,s.jsx)("iframe",{src:"/bbzbl-modul-319/slides/arrays",width:"100%",height:"400px"}),"\n",(0,s.jsx)(n.h2,{id:"einleitung",children:"Einleitung"}),"\n",(0,s.jsx)(n.p,{children:"Wir haben Datentypen kennengelernt und wissen, wie wir Variablen anlegen k\xf6nnen.\nDamit k\xf6nnen wir Werte zwischenspeichern und sp\xe4ter wieder darauf zur\xfcckgreifen."}),"\n",(0,s.jsx)(n.p,{children:"Stellen Sie sich nun einmal vor, Sie schreiben ein Programm, mit dem Sie\nMesswerte erfassen. Alle Messwerte haben den gleichen Datentyp. Wenn wir\nannehmen, dass Sie 100 solche Messwerte speichern m\xf6chten, dann k\xf6nnten Sie das\nso machen:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"int wert1;\nint wert2;\nint wert3;\n// immer weiter so\nint wert100;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Das w\xe4re sicher m\xf6glich, aber sehr aufwendig und nicht gut umsetzbar. M\xf6chten\nSie jetzt die Messwerte auslesen (\xfcber eine ",(0,s.jsxs)(n.strong,{children:["fiktive Messmethode\n",(0,s.jsx)(n.code,{children:"mess_methode"})]}),"), dann k\xf6nnte das so aussehen:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"wert1 = mess_methode();\nwert2 = mess_methode();\nwert3 = mess_methode();\n// und so weiter\nwert100 = mess_methode();\n"})}),"\n",(0,s.jsx)(n.p,{children:"Wenn Sie jetzt zum Beispiel den Durchschnitt der Messwerte ausrechnen m\xf6chten,\ndann schreiben Sie einen Code wie diesen:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"int summe = wert1 + wert2 + wert3 + /* ... */ + wert100;\nint durchschnitt = summe / 100;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Soll das Programm jetzt noch so erweitert werden, dass Sie mehr Messwerte\nerfassen k\xf6nnen, zum Beispiel 1000, dann l\xe4uft es endg\xfcltig aus dem Ruder."}),"\n",(0,s.jsx)(n.p,{children:"Wie man das Program trotzdem z\xe4hmen kann, erfahren Sie im n\xe4chsten Kapitel."}),"\n",(0,s.jsxs)(n.h2,{id:"open_book-themen",children:["\ud83d\udcd6"," Themen"]}),"\n",(0,s.jsx)(r,{className:"pdf-exclude"}),"\n",(0,s.jsxs)(n.h2,{id:"tv-erkl\xe4rvideos-von-studyflix",children:["\ud83d\udcfa"," Erkl\xe4rvideos von Studyflix"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://studyflix.de/informatik/java-array-1898",children:"Array einfach erkl\xe4rt"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://studyflix.de/informatik/for-schleife-226",children:"for-Schleife einfach erkl\xe4rt"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://studyflix.de/informatik/java-foreach-1935",children:"foreach-Schleife einfach erkl\xe4rt"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>a});var s=r(7294);const i={},t=s.createContext(i);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);