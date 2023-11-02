---
keywords:
  - pdf
---
# 7 - Arrays und for(each)

## :dart: Ziele

- Sie können mittels Arrays effizient mit mehreren Werte des gleichen Datentyps
  programmieren.
- Sie können die for Kontrollstruktur nutzen, die besonders für das Durchlaufen
  von Arrays hilfreich ist.

## :teacher: Präsentation

[:computer: Open in Browser](pathname:///slides/arrays) | [:floppy_disk: download PDF](pathname:///slides/arrays.pdf)

<iframe src="/bbzbl-modul-319/slides/arrays" width="100%" height="400px"></iframe>

## Einleitung

Wir haben Datentypen kennengelernt und wissen, wie wir Variablen anlegen können.
Damit können wir Werte zwischenspeichern und später wieder darauf zurückgreifen.

Stellen Sie sich nun einmal vor, Sie schreiben ein Programm, mit dem Sie
Messwerte erfassen. Alle Messwerte haben den gleichen Datentyp. Wenn wir
annehmen, dass Sie 100 solche Messwerte speichern möchten, dann könnten Sie das
so machen:

```java
int wert1;
int wert2;
int wert3;
// immer weiter so
int wert100;
```

Das wäre sicher möglich, aber sehr aufwendig und nicht gut umsetzbar. Möchten
Sie jetzt die Messwerte auslesen (über eine **fiktive Messmethode
`mess_methode`**), dann könnte das so aussehen:

```java
wert1 = mess_methode();
wert2 = mess_methode();
wert3 = mess_methode();
// und so weiter
wert100 = mess_methode();
```

Wenn Sie jetzt zum Beispiel den Durchschnitt der Messwerte ausrechnen möchten,
dann schreiben Sie einen Code wie diesen:

```java
int summe = wert1 + wert2 + wert3 + /* ... */ + wert100;
int durchschnitt = summe / 100;
```

Soll das Programm jetzt noch so erweitert werden, dass Sie mehr Messwerte
erfassen können, zum Beispiel 1000, dann läuft es endgültig aus dem Ruder.

Wie man das Program trotzdem zähmen kann, erfahren Sie im nächsten Kapitel.

## :open_book: Themen

<DocCardList className="pdf-exclude"/>

## :tv: Erklärvideos von Studyflix

- [Array einfach erklärt](https://studyflix.de/informatik/java-array-1898)
- [for-Schleife einfach erklärt](https://studyflix.de/informatik/for-schleife-226)
- [foreach-Schleife einfach erklärt](https://studyflix.de/informatik/java-foreach-1935)
