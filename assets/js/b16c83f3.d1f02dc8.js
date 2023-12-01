"use strict";(self.webpackChunkdocosaurus_rex=self.webpackChunkdocosaurus_rex||[]).push([[3672],{3912:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var t=i(5893),r=i(1151);const l={keywords:["pdf"]},a="W\xfcrfelspiel",s={id:"woche06/6a-spiele/wuerfelspiel",title:"W\xfcrfelspiel",description:"Zufall erzeugen",source:"@site/docs/woche06/6a-spiele/wuerfelspiel.md",sourceDirName:"woche06/6a-spiele",slug:"/woche06/6a-spiele/wuerfelspiel",permalink:"/bbzbl-modul-319/docs/woche06/6a-spiele/wuerfelspiel",draft:!1,unlisted:!1,editUrl:"https://github.com/codingluke/bbzbl-modul-319/tree/main/docs/woche06/6a-spiele/wuerfelspiel.md",tags:[],version:"current",frontMatter:{keywords:["pdf"]},sidebar:"tutorialSidebar",previous:{title:"Reaktionsspiel",permalink:"/bbzbl-modul-319/docs/woche06/6a-spiele/reaktionsspiel"},next:{title:"Woche 7 \ud83c\udfc5",permalink:"/bbzbl-modul-319/docs/woche07/"}},o={},u=[{value:"\ud83e\udde0 Zufall erzeugen",id:"brain-zufall-erzeugen",level:2},{value:"\ud83d\udd8a Einspieler Variante",id:"pen-einspieler-variante",level:2},{value:"\ud83d\udd8a Zweispieler Variante",id:"pen-zweispieler-variante",level:2},{value:"\ud83d\udd8a Zusatz Variante",id:"pen-zusatz-variante",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"w\xfcrfelspiel",children:"W\xfcrfelspiel"}),"\n",(0,t.jsxs)(n.h2,{id:"brain-zufall-erzeugen",children:["\ud83e\udde0"," Zufall erzeugen"]}),"\n",(0,t.jsx)(n.p,{children:"Die allgemeine Formel f\xfcr eine Zufallszahl lautet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="Generelle Zufallszahl Formel"',children:"public int randomNumberInRange(int min, int max) {\n    return (int)(Math.random() * (max - min + 1)) + min;\n}\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"pen-einspieler-variante",children:["\ud83d\udd8a"," Einspieler Variante"]}),"\n",(0,t.jsxs)(n.p,{children:["Erstellen Sie das Programm namens ",(0,t.jsx)(n.code,{children:"DiceGame"}),". Dieses Programm:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Wird zuerst nur f\xfcr einen Spieler implementiert."}),"\n",(0,t.jsx)(n.li,{children:"Der Benutzer gibt zu Beginn ein Maximum an Punkten an"}),"\n",(0,t.jsx)(n.li,{children:"Danach wird f\xfcr den Spieler so lange gew\xfcrfelt, bis er das Maximum erreicht\noder \xfcber-schritten hat. Das W\xfcrfeln an sich soll in eine Methode ausgelagert\nwerden. Der R\xfcckgabewert ist die gew\xfcrfelte Zahl."}),"\n",(0,t.jsx)(n.li,{children:"Die einzelnen W\xfcrfe sollen auf der Konsole dargestellt werden."}),"\n",(0,t.jsx)(n.li,{children:"Zum Schluss soll auch ausgegeben werden, wie viele W\xfcrfe ben\xf6tigt wurden, um\nauf das Maximum zu kommen"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Beispielausgabe:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Enter the maximum of points: 100\nYou rolled: 6 3 4 6 1 2 4 1 6 3 1 5 4 4 4 6 5 6 2 6 4 6 4 5 5\nTotal points: 103, number of dice: 25\n"})}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Musterl\xf6sung:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="DiceGame.java"',children:'import mytools.StdInput;\n\npublic class DiceGame {\n\n  public static void main(String[] args) {\n    System.out.print("Enter the maximum of points: ");\n\n    int maximum = StdInput.readInt();\n\n    System.out.print("You rolled: ");\n    int total = 0;\n    int counter = 0;\n\n    do {\n      total = total + dice();\n      counter++;\n\n    } while (total < maximum);\n\n    System.out.println();\n    System.out.println("Total points: " + total + ", number of dice: " + counter);\n  }\n\n  public static int dice() {\n    int rolled = randomNumberInRange(1, 6);\n    System.out.print(rolled + " ");\n    return rolled;\n  }\n\n  public static int randomNumberInRange(int min, int max) {\n    return (int) (Math.random() * (max - min + 1)) + min;\n  }\n}\n'})})]}),"\n",(0,t.jsxs)(n.h2,{id:"pen-zweispieler-variante",children:["\ud83d\udd8a"," Zweispieler Variante"]}),"\n",(0,t.jsxs)(n.p,{children:["Sie haben nun das Programm f\xfcr einen Spieler erstellt. Kopieren Sie nun die\nKlasse ",(0,t.jsx)(n.code,{children:"DiceGame"})," und benennen Sie die Kopie ",(0,t.jsx)(n.code,{children:"DiceGame2Player"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Programmieren Sie es nun so um, dass:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"zwei Spieler daran teilnehmen k\xf6nnen."}),"\n",(0,t.jsx)(n.li,{children:"Sie treten nacheinander an."}),"\n",(0,t.jsx)(n.li,{children:"Zuerst versucht also Spieler 1 auf das Maximum zu kommen, danach Spieler 2."}),"\n",(0,t.jsxs)(n.li,{children:["Lagern Sie den Spielmechanismus in eine Methode aus.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Die Methode erh\xe4lt als Parameter das Punktemaximum und liefert als\nR\xfcckgabewert die ben\xf6tigte Anzahl W\xfcrfe, um das Maximum zu erreichen."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Es gewinnt derjenige, der das Maximum mit weniger W\xfcrfen erreichen konnte."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Beispielausgabe:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Enter the maximum of points: 100\n1 3 2 1 6 4 3 3 1 5 2 5 4 6 5 4 3 1 4 2 4 3 3 1 1 3 2 1 3 3 2 3 4 2\n1 3 4 6 6 4 5 6 6 4 2 6 4 5 5 3 2 3 1 4 1 4 1 1 6 1 2 2 6\nNumber of dice Player 1: 34\nNumber of dice Player 2: 29\nPlayer 2 wins.\n"})}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Musterl\xf6sung:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'import mytools.StdInput;\n\npublic class DiceGame2Player {\n\n  public static void main(String[] args) {\n    System.out.print("Enter the maximum of points: ");\n\n    int maximum = StdInput.readInt();\n\n    int counter1 = play(maximum);\n    System.out.println();\n    int counter2 = play(maximum);\n\n    System.out.println();\n    System.out.println("Number of dice Player 1: " + counter1);\n    System.out.println("Number of dice Player 2: " + counter2);\n\n    if (counter1 < counter2) {\n      System.out.println("Player 1 wins.");\n    } else if (counter2 < counter1) {\n      System.out.println("Player 2 wins.");\n    } else {\n      System.out.println("Draw.");\n    }\n  }\n\n  public static int play(int max) {\n    int total = 0;\n    int counter = 0;\n\n    do {\n      total = total + dice();\n      counter++;\n\n    } while (total < max);\n\n    return counter;\n  }\n\n  public static int dice() {\n    int rolled = randomNumberInRange(1, 6);\n    System.out.print(rolled + " ");\n    return rolled;\n  }\n\n  public int randomNumberInRange(int min, int max) {\n    return (int) (Math.random() * (max - min + 1)) + min;\n  }\n}\n'})})]}),"\n",(0,t.jsxs)(n.h2,{id:"pen-zusatz-variante",children:["\ud83d\udd8a"," Zusatz Variante"]}),"\n",(0,t.jsxs)(n.p,{children:["Machen Sie wiederum eine Kopie von ",(0,t.jsx)(n.code,{children:"DiceGame2Player"})," und benennen Sie die Kopie\n",(0,t.jsx)(n.code,{children:"DiceGameVariante"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Der Benutzer gibt zu Beginn z.B. nicht ein Punktemaximum an, sondern ",(0,t.jsx)(n.strong,{children:"definiert\ndie Anzahl W\xfcrfe"}),", welche die Spieler w\xfcrfeln sollen. Derjenigen mit der\nh\xf6heren Punktzahl gewinnt zum Schluss das Spiel."]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Musterl\xf6sung:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'import mytools.StdInput;\n\npublic class DiceGameVariante {\n\n  public static void main(String[] args) {\n    System.out.print("Enter the number of dice: ");\n\n    int numberOfDice = StdInput.readInt();\n\n    int total1 = play(numberOfDice);\n    System.out.println();\n    int total2 = play(numberOfDice);\n\n    System.out.println();\n    System.out.println("Total Player 1: " + total1);\n    System.out.println("Total Player 2: " + total2);\n\n    if (total1 > total2) {\n      System.out.println("Player 1 wins.");\n    } else if (total2 > total1) {\n      System.out.println("Player 2 wins.");\n    } else {\n      System.out.println("Draw.");\n    }\n  }\n\n  public static int play(int numberOfDice) {\n    int total = 0;\n    int counter = 0;\n\n    do {\n      total = total + dice();\n      counter++;\n\n    } while (counter < numberOfDice);\n\n    return total;\n  }\n\n  public static int dice() {\n    int rolled = randomNumberInRange(1, 6);\n    System.out.print(rolled + " ");\n    return rolled;\n  }\n\n  public int randomNumberInRange(int min, int max) {\n    return (int) (Math.random() * (max - min + 1)) + min;\n  }\n}\n'})})]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>a});var t=i(7294);const r={},l=t.createContext(r);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);