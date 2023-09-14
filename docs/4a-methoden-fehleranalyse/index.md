---
keywords:
  - pdf
---

# 4 - Methoden und Fehleranalyse

Sie erhalten einen **ersten Einblick in Methoden**, die für grössere Programme
zur Strukturierung unerlässlich sind. Zusätzlich wird Ihnen das **Verfahren des
Debuggings** vorgestellt, da es besonders hilfreich sein kann, um Methoden
besser zu verstehen und Ihnen auch künftig hilft, Fehler zu finden.

## :dart: Ziele

- Sie können einfache Methoden erklären und anwenden.
- Sie können mittels Debugging Ihr Programm schrittweise durchlaufen, dabei die
  Werte von Variablen beobachten und so Abläufe verstehen und Fehlerquellen
  entdecken.
- Sie kennen die Methode `main` inzwischen und können nun begründen, warum ein
  Programm mit Methoden besser strukturiert werden kann.
- Sie können Methoden aufrufen, diesen Parameter-Werte übermitteln und
  Rückgabewerte verwenden.
- Sie kennen den Geltungsbereich von Variablen und können erklären, ob eine
  Variable aus der Main-Methode auch in anderen Methoden zur Verfügung steht.
- Sie können bei Laufzeitfehlern (das Programm stürzt ab) den Stacktrace
  erkennen und von dort angezeigte Fehlerstellen in Ihrem Programm anspringen.

## Was ist eine Methode?

Die bisher in diesem Modul entwickelten Programme sind alle mit einer Methode,
der Methode `main` ausgekommen. In der Praxis sind Programme jedoch wesentlich
komplexer. Daher werden sie auf verschiedene Art strukturiert und aufgeteilt.
Einen ersten Ansatz, um Programme in diesem Sinne zu gliedern, stellen Methoden
dar.

Methoden dienen also dazu spezifische Funktionalitäten unter einem
aussagekräftigem Namen zu Gruppieren, damit diese:

1. nur einmal definiert werden müssen
2. an verscheidenen Orte ausgeführt werden könne
3. das Programm lesbarer machen, da der Name beschreibt was sie macht

**Beispiele**

- Eine mathematische Funktion beschreibt z.B. der Satz des Pythagoras **
  a<sup>2</sup>+b<sup>2</sup> = c<sup>2</sup> **.
- Im Programmieren kann man jedoch nicht nur Rechnen, sondern z.B. auch einfach
  etwas auf die Konsole ausgeben, zum Beispiel das aktuelle Datum.

## Was ist Debugging?

Debugging ist eine Arbeitstechnik in der Programmierung, welche es erlaubt, den
Ablauf eines Programms besser nachzuvollziehen. Dabei kann das Programm in einem
speziellen Modus ausgeführt werden, der es erlaubt, das Programm auf jeder
ausführbaren Codezeile anzuhalten, die in den Variablen gespeicherten Werte
einzusehen, zu ändern, etc.

Dies hilft um zu verstehen, wie sich das Programm genau verhält und unterstütz
somit die Fehlersuche von Laufzeitfehlern.

## :open_book: Themen

<DocCardList className="pdf-exclude"/>

## :tv: Erklärvideos von Studyflix

- [Java Methoden einfach erklärt](https://studyflix.de/informatik/java-methoden-1901)
- [Parameter von Methoden einfach erklärt](https://studyflix.de/informatik/parameter-von-methoden-426)
