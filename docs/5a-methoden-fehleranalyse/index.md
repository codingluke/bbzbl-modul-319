# 5 - Methoden und Fehleranalyse (Debugging)

Sie erhalten einen **ersten Einblick in Methoden**, die für grössere Programme
zur Strukturierung unerlässlich sind. Zusätzlich wird Ihnen das **Verfahren des
Debuggings** vorgestellt, da es besonders hilfreich sein kann, um Methoden
besser zu verstehen und Ihnen auch künftig hilft, Fehler zu finden.

:::info Ziele

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

:::

## :teacher: Präsentation

<!-- [:computer: Open in Browser](pathname:///slides/operatoren) | [:floppy_disk: download PDF](pathname:///slides/operatoren.pdf) -->

<!-- <iframe src="/bbzbl-modul-319/slides/operatoren" width="100%" height="400px"></iframe> -->

## Was ist eine Methode?

Die bisher in diesem Modul entwickelten Programme sind alle mit einer Methode,
der Methode `main` ausgekommen. In der Praxis sind Programme jedoch wesentlich
komplexer. Daher werden sie auf verschiedene Art strukturiert und aufgeteilt.
Einen ersten Ansatz, um Programme in diesem Sinne zu gliedern, stellen Methoden
dar.

Eine Methode kann vereinfacht als **Gruppierung von Befehlen** angesehen werden,
welche in Kombination eine **spezifische Funktionalität** unter einem
**aussagekräftigem Namen** beschreiben.

Eine mathematische Funktion beschreibt z.B. der Satz des Pythagoras **
a<sup>2</sup>+b<sup>2</sup> = c<sup>2</sup> **

```java title="Satz des Pythagoras"
public double pythagoras(double a, double b) {
    return (a*a) + (b*b);
}
```

Im Programmieren kann man jedoch nicht nur Rechnen, sondern z.B. auch einfach
etwas auf die Konsole ausgeben. Die folgende Methode gibt das aktuelle Datum
aus:

```java title="printCurrentDate() gibt das aktuelle Datum aus"
public static void printCurrentDate() {
    System.out.println("Current date is: " + LocalDate.now());
}
```

Methoden dienen also dazu spezifische Funktionalitäten unter einem
aussagekräftigem Namen zu Gruppieren, damit diese

1. nur einmal definiert werden müssen
2. an verscheidenen Orte ausgeführt werden könne
3. das Programm lesbarer machen, da der Name beschreibt was sie macht

:::note Methode oder Funktion?

Grundsätzlich ist der Name Methode ein Synonym zu Funktion. In
objektorientierten Programmiersprachen wie Java spricht man jedoch von Methoden.
Eine "Daumenregel" ist:

- Eine Funktion in einer <u>Klasse</u> nennt man Methode.
  - Eine Methode besitzt immer einen Zeiger auf das Objekt (`this` in Java,
    `self` in Python und Ruby, ...)
- Eine Funktion ausserhalb einer Klasse, nennt man Funktion.

**:bulb: In Java gibt es nur Funktionen in Klassen, daher wird immer von
Methoden gesprochen!**

:::

## Was ist Debugging?

Debugging ist eine Arbeitstechnik in der Programmierung, welche es erlaubt, den
Ablauf eines Programms besser nachzuvollziehen. Dabei kann das Programm in einem
speziellen Modus ausgeführt werden, der es erlaubt, das Programm auf jeder
ausführbaren Codezeile anzuhalten, die in den Variablen gespeicherten Werte
einzusehen, zu ändern, etc.

Dies hilft um zu verstehen, wie sich das Programm genau verhält und unterstütz
somit die Fehlersuche von Laufzeitfehlern.

## :open_book: Themen

<DocCardList />

## :tv: Erklärvideos von Studyflix

- [Java Methoden einfach erklärt](https://studyflix.de/informatik/java-methoden-1901)
- [Parameter von Methoden einfach erklärt](https://studyflix.de/informatik/parameter-von-methoden-426)
