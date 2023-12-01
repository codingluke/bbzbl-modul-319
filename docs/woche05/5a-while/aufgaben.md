---
sidebar_position: 1
keywords:
  - pdf
---

# 🖊️ Schleifen Aufgaben
Lösen Sie diese Aufgaben selbständig. Wenn Sie nicht weiter kommen, ist auch immer
eine Musterlösung vorhanden. Verwenden Sie diese erst wenn Sie mindestens 20 Minuten
nicht weiter kommen.

Die Theorie zu den Aufgaben finden Sie unter:

- [:man_teacher: Präsentation](/docs/woche05/5a-while/index.md#manteacher-präsentation)
- [:open_book: while](/docs/woche05/5a-while/while.md)
- [:open_book: do..while](/docs/woche05/5a-while/dowhile.md)

:::tip Untersuchen Sie alle Aufgabe auch mittels [Debugging](/docs/woche03/debugging.md)

- :mag: Verfolgen Sie den Programmablauf und die Werte der Variablen.

:::

## `while`-Schleife

### :pen: A1: Wiederholte Ausgabe

Schreiben Sie ein Programm, welches 10-mal „Hopp Schwiiz“ ausgibt.

- Schreiben Sie das Programm **zuerst als Sequenz von 10 Zeilen** mit
  `System.out.println`.
- Schreiben Sie dann das Programm kürzer und einfacher mit einer
  `while`-Schleife.

<details>
<summary>Musterlösung:</summary>

```java title="A1WiederholteAusgabeStatisch.java"
public class A1WiederholteAusgabeStatisch {

  public static void main(String[] args) {
    // 10 mal die gleiche Zeile
    System.out.println("Hopp Schwiiz");
    System.out.println("Hopp Schwiiz");
    System.out.println("Hopp Schwiiz");
    System.out.println("Hopp Schwiiz");
    System.out.println("Hopp Schwiiz");
    System.out.println("Hopp Schwiiz");
    System.out.println("Hopp Schwiiz");
    System.out.println("Hopp Schwiiz");
    System.out.println("Hopp Schwiiz");
    System.out.println("Hopp Schwiiz");
  }
}
```

```java title="A1WiederholteAusgabeWhile.java"
public class A1WiederholteAusgabeWhile {

  public static void main(String[] args) {
    // mit einer while-Schleife
    int zaehler = 0;
    while (zaehler < 10) {
      System.out.println(x + " Hopp Schwiiz");
      zaehler++; // oder zaehler += 1 rsp. zaehler = zaehler + 1
    }
  }
}
```

</details>

#### :man_superhero: Zusatzaufgabe

Schreiben Sie das Programm ebenfalls mit einer `while`-Schleife wobei Sie die
Variable zum Steuern der Anzahl Wiederholungen wie folgt initialisieren:

```java
int zaehler = -5;
```

Bis zu welchem Wert muss diese Variable laufen?

<details>
<summary>Musterlösung:</summary>

```java title="A1WiederholteAusgabeZusatz.java"
public class A1WiederholteAusgabeZusatz {

  public static void main(String[] args) {
    // mit einer while-Schleife, aber wir beginnen bei -5
    int zaehler = -5;
    while (zaehler < 5) {
      System.out.println(i + " Hopp Schwiiz");
      zaehler++;
    }
  }
}
```

</details>

### :pen: A2: Multiplikationstafel ausgeben

Schreiben Sie ein Programm, welches eine Multiplikationstafel ausgibt.

- Der Benutzer gibt an, für welche Zahl die Multiplikationstafel erstellt werden
  soll.

```bash title="Folgende Ausgabe ist erwünscht, falls der Benutzer z.B. 2 eingibt:"
1 x 2 = 2
2 X 2 = 4
3 X 2 = 6
4 x 2 = 8
5 x 2 = 10
6 x 2 = 12
7 x 2 = 14
8 x 2 = 16
9 x 2 = 18
10 x 2 = 20
```

<details>
<summary>Musterlösung:</summary>

```java title="A2Multiplication.java"
import mytools.StdInput;

public class A2Multiplication {

  public static void main(String[] args) {
    System.out.print("Zahl fuer die Multiplikationstabelle: ");
    int number = StdInput.readInt();
    int ergebnis;
    int zaeler = 1;
    while (zaeler <= 10) {
      ergebnis = zaehler * number;
      System.out.println(zaehler + " * " + number + " = " + ergebnis);
      zaehler++;
    }
  }
}
```

</details>

## `do..while`-Schleife

### :pen: A3: Passwortprüfung :star2:

Erstellen Sie ein Programm, welches mittels `do..while` nach dem Passwort
"abrakadabra" fragt.

- Solange das Passwort falsch ist, soll die Anforderung wiederholt werden.
- Sobald das Passwort "abrakadabra" richtig eingegeben wurde, soll dem Benutzer
  die Bestätigung „Logged in!“ angezeigt werden.

:::info

Falls es nicht klappt ➔
[:open_book: Regeln für Strings vergleichen lesen](/docs/woche02/2b-datentypen/string.md#strings-vergleichen)!

:::

<details>
<summary>Musterlösung:</summary>

```java title="A3Password.java"
import mytools.StdInput;

public class A3Password {

  public static void main(String[] args) {
    String password = "abrakadabra";
    String eingabe = "";

    do {
      System.out.print("Bitte Passwort eingeben: ");
      eingabe = StdInput.readString();
    } while (!password.equals(eingabe));

    System.out.println("Logged in!");
  }
}
```

</details>

### :pen: A4: Fahrenheit Umrechner

Schreiben Sie ein Programm, welches eine Auflistung der Celsiuswerte von -20 bis
100 Grad in 5er Schritten in Fahrenheit ausgibt.

```java title="Die Formel dazu lautet:"
fahrenheit = (9.0/5.0) * celsius + 32
```

#### Beispiel Werte zur Prüfung

|              | Celsius | Fahrenheit |
| ------------ | ------- | ---------- |
| Gefrierpunkt | 0       | 32         |
| Kochpunkt    | 100     | 212        |

<details>
<summary>Musterlösung:</summary>

```java title="A4Fahrenheit.java"
public class A4Fahrenheit {

  public static void main(String[] args) {
    double celsius = -20;
    double fahrenheit;

    do {
      fahrenheit = (9.0 / 5.0) * celsius + 32;
      System.out.println("celsius " + celsius + " = fahrenheit " + fahrenheit);
      celsius = celsius + 5;
    } while (celsius <= 100);
  }
}
```

</details>

### :pen: A5: Guthaben aufbrauchen

Schreiben Sie ein Programm, welches zuerst ein Startguthaben von 100.00 Franken
in einer Variablen festlegt.

- Nun soll jeweils wiederholt der Benutzer über sein aktuelles Guthaben
  informiert und nach einem Betrag gefragt werden, den man abheben möchte.
- Dieser Betrag wird so lange abgezogen, bis das Guthaben 0 oder weniger
  beträgt.
- Am Schluss soll «Sorry, your balance now is zero or below» auf die Konsole
  ausgegeben werden.

<details>
<summary>Musterlösung:</summary>

```java title="A5Guthaben.java"
import mytools.StdInput;

public class A4Guthaben {
  public static void main(String[] args) {
    double guthaben = 100.0;

    do {
      System.out.println("Ihr Guthaben ist " + guthaben + ", wie viel wollen Sie abheben?");
      double abhebenWert = StdInput.readDouble();
      guthaben = guthaben - abhebenWert;
    } while (guthaben > 0);

    System.out.println("Entschuldigung ihr Guthaben ist 0 oder im Minus");
  }
}
```

</details>
