"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[679],{8417:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=i(5893),s=i(1151);const r={keywords:["pdf"]},l="\u26a1 Reaktionsspiel",o={id:"woche06/6a-spiele/reaktionsspiel",title:"\u26a1 Reaktionsspiel",description:"Diese Aufgabe besitzt komplexere Mathematik und ist somit eher schwer. Aber das",source:"@site/docs/woche06/6a-spiele/reaktionsspiel.md",sourceDirName:"woche06/6a-spiele",slug:"/woche06/6a-spiele/reaktionsspiel",permalink:"/bbzbl-modul-319/docs/woche06/6a-spiele/reaktionsspiel",draft:!1,unlisted:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/woche06/6a-spiele/reaktionsspiel.md",tags:[],version:"current",frontMatter:{keywords:["pdf"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude36\u200d\ud83c\udf2b\ufe0f Ratespiel \ud83c\udf1f",permalink:"/bbzbl-modul-319/docs/woche06/6a-spiele/ratespiel"},next:{title:"\ud83c\udfb2 W\xfcrfelspiel",permalink:"/bbzbl-modul-319/docs/woche06/6a-spiele/wuerfelspiel"}},a={},c=[{value:"\ud83d\udd52 Aktuelle Zeit",id:"clock3-aktuelle-zeit",level:2},{value:"\ud83d\udd8a Auftrag",id:"pen-auftrag",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-reaktionsspiel",children:"\u26a1 Reaktionsspiel"}),"\n",(0,t.jsxs)(n.admonition,{title:"Spielen",type:"tip",children:[(0,t.jsx)(n.p,{children:"Diese Aufgabe besitzt komplexere Mathematik und ist somit eher schwer. Aber das\nSpiel macht Spass und zeigt was mit wenig Zeilen Code so m\xf6glich ist."}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Kopiert euch die Musterl\xf6sung"})," in eine Klasse ",(0,t.jsx)(n.code,{children:"ReactionGame.java"})," und\nspielt."]}),"\n",(0,t.jsxs)(n.li,{children:["Habt auch Spass. ","\ud83d\udd2b"," ","\ud83d\udd79"," ","\ud83c\udf1f"," ","\ud83c\udf08"]}),"\n"]})]}),"\n",(0,t.jsxs)(n.h2,{id:"clock3-aktuelle-zeit",children:["\ud83d\udd52"," Aktuelle Zeit"]}),"\n",(0,t.jsx)(n.p,{children:"Die aktuelle Zeit kann mit folgendem Code in Millisekunden seit dem 01.01.1970\nausgelesen werden:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"long time = System.currentTimeMillis();\n"})}),"\n",(0,t.jsx)(n.p,{children:"Die Differenz zwischen zwei Zeiten ergibt somit die Zeitspanne zwischen zwei\nMessungen in Millisekunden."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"long time1 = System.currentTimeMillis();\n\n// highlight-next-line\n// hier folgen die Anweisungen deren Zeit man messen m\xf6chte\n\nlong time2 = System.currentTimeMillis();\nlong reactionInMs = time2 - time1;\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"pen-auftrag",children:["\ud83d\udd8a"," Auftrag"]}),"\n",(0,t.jsxs)(n.p,{children:["Erstellen Sie ein Programm namens ",(0,t.jsx)(n.code,{children:"ReactionGame"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Dieses Programm:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Begr\xfcsst den Spieler"}),"\n",(0,t.jsx)(n.li,{children:"Definiert dabei, welche Zahl, welchem Buchstaben entspricht:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Welcome to the reaction game!\nHit as fast as possible according to the following map:\n\n0 => a\n1 => s\n2 => d\n3 => f\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Danach wird zuf\xe4llig eine Zahl zwischen 0 und 3 generiert und ausgegeben:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Please immediately response to:\n\n2\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Der Benutzer muss nun so schnell wie m\xf6glich eine ",(0,t.jsx)(n.code,{children:"d"})," eingeben und ",(0,t.jsx)(n.code,{children:"Enter"}),"\ndr\xfccken"]}),"\n",(0,t.jsx)(n.li,{children:"Dies wird 10x wiederholt"}),"\n",(0,t.jsx)(n.li,{children:"Zum Schluss erh\xe4lt der Spieler seine Reaktionszeit in Sekunden auf der Konsole"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Your score: 1.6265 seconds\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Gibt der Benutzer einen falschen Buchstaben ein, z\xe4hlt dies als Versuch, wird\naber in der Berechnung der Reaktionszeit ignoriert."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Komplette Beispielausgabe:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Welcome to the reaction game!\nHit as fast as possible according to the following map:\n\n0 => a\n1 => s\n2 => d\n3 => f\n\nPlease immediately response to: 1\ns\nPlease immediately response to: 2\nd\nPlease immediately response to: 1\ns\nPlease immediately response to: 2\nd\nPlease immediately response to: 1\ns\nPlease immediately response to: 1\ns\nPlease immediately response to: 2\nd\nPlease immediately response to: 1\ns\nPlease immediately response to: 3\nf\nPlease immediately response to: 2\nd\nYour score: 1.6265\n"})}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Musterl\xf6sung:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="ReactionGame.java"',children:'import mytools.StdInput;\n\npublic class ReactionGame {\n\n  /*\n   *\tobjective: have users type as fast as possible a for 0,\n   *\tb for 1, c for 2 and d for 3. If user hit the correct\n   *\tkeyboard button, increment correctHits, and reactionTimeSum.\n   *\tAt the end divide reactionTimeSum by correctHits to calculate\n   *\tthe users reaction rate.\n   *\n   * \tdatatypes: stimulus as int, reaction as char/String\n   * \t\t\t\tcorrectHits as int, reactionTimeSum as double\n   *\n   * \tcontrol structures: do while, if\n   */\n  public static void main(String[] args) {\n    int times = 10;\n    int correctHits = 0;\n    double reactionTimeSum = 0;\n    double reactionRate = 0;\n\n    System.out.println("Welcome to the reaction game!");\n    System.out.println("Hit as fast as possible according to the following map:\\n");\n    System.out.println("0 => a");\n    System.out.println("1 => s");\n    System.out.println("2 => d");\n    System.out.println("3 => f\\n");\n\n    do {\n      int stimulus = (int) (Math.random() * 3 + 1); // random number 0 - 3\n      System.out.println("Please immediately response to: " + stimulus);\n\n      long startTime = System.currentTimeMillis();\n      char reaction = StdInput.readChar();\n      long endTime = System.currentTimeMillis();\n\n      if ((stimulus == 0 && reaction == \'a\')\n          || (stimulus == 1 && reaction == \'s\')\n          || (stimulus == 2 && reaction == \'d\')\n          || (stimulus == 3 && reaction == \'f\')) {\n        reactionTimeSum = reactionTimeSum + (endTime - startTime);\n        correctHits++;\n      }\n\n      times--;\n    } while (times > 0);\n\n    System.out.print("Your score: ");\n\n    reactionRate = reactionTimeSum / correctHits / 1000;\n\n    System.out.println("" + reactionRate);\n  }\n}\n'})})]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var t=i(7294);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);