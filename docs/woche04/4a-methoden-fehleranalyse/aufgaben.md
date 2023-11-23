---
sidebar_position: 1
keywords:
  - pdf
---

# 🖊️ Methoden Aufgaben

Lösen Sie diese Aufgaben selbständig. Wenn Sie nicht weiter kommen, ist auch immer
eine Musterlösung vorhanden. Verwenden Sie diese erst wenn Sie mindestens 20 Minuten
nicht weiter kommen.

Die Theorie zu den Aufgaben finden Sie unter:

- [:man_teacher: Präsentation](/docs/woche04/4a-methoden-fehleranalyse/index.md#manteacher-präsentation)
- [:open_book: Methoden Vertiefung](/docs/woche04/4a-methoden-fehleranalyse/methoden.md)
- [:open_book: Geltungsbereich von lokalen Variablen](/docs/woche04/4a-methoden-fehleranalyse/geltungsbereich-variablen.md)

:::tip Untersuchen Sie alle Aufgabe auch mittels [Debugging](/docs/woche03/debugging.md)

- :mag: Verfolgen Sie den Programmablauf und die Werte der Variablen.
- :man_superhero: Schauen Sie auf welchen Zeilen überhaupt ein "Breakpoint" Sinn macht.
Sie werden sehen, dies geht nur auf Zeilen die auch wirklich ausgeführt werden.
Also auf Zeilen im Methodenkörper.

:::

## :pen: A1: Grössere Zahl

Erstellen Sie ein Programm, das zwei Zahlen von der Konsole einliest.

- Diese beiden Zahlen sollen an eine Methode als Parameter übergeben werden
  können.
- Die Methode soll die grössere der beiden Zahlen ermitteln und diese als
  Rückgabewert zurückgeben.

<details>
<summary>Musterlösung</summary>

```java title="A1EvaluateBiggerNumber.java"
import mytools.StdInput;

public class A1EvaluateBiggerNumber {

  public static void main(String[] args) {
    System.out.print("Input value 1: ");
    int number1 = StdInput.readInt();

    System.out.print("Input value 2: ");
    int number2 = StdInput.readInt();

    int biggerNumber = evaluate(number1, number2);
    System.out.println("Die grössere Zahl ist: " + biggerNumber);
  }

  public static int evaluate(int value1, int value2) {
    if (value1 > value2) {
      return value1;
    } else {
      return value2;
    }
  }
}
```

</details>

## :pen: A2: Intervall

Erstellen Sie ein Programm, in dem eine Methode prüft, ob eine Zahl innerhalb
eines Intervalls liegt.

- Der Intervall (unterer und oberer Grenzwert) und die Zahl werden als Parameter
  an die Methode übermittelt.
- Die Methode gibt true zurück, falls die Zahl im Intervall liegt, sonst false.
- Das Ergebnis soll in der `main`-Methode auf die Konsole ausgegeben werden.

<details>
<summary>Musterlösung</summary>

```java title="A2Intervall.java"
import mytools.StdInput;

public class A2Intervall {

  public static void main(String[] args) {
    int min = 1;
    int max = 10;

    System.out.print("Input value: ");
    int number = StdInput.readInt();

    boolean inRange = isInRange(min, max, number);
    System.out.println("Ist im Intervall: " + inRange);
  }

  public static boolean isInRange(int minimum, int maximum, int value) {
    return value >= minimum && value <= maximum;
  }
}
```

</details>

## :pen: A3: Zinsrechner

Erstellen Sie ein Programm, wobei Sie einen Sparbetrag eingeben können, sowie
einen Zins in %.

- In einer Methode soll entsprechend der Zinsbetrag ausgerechnet und
  zurückgegeben werden.
- Dieser Zinsbetrag soll dann in der main-Methode auf die Konsole ausgegeben
  werden.

<details>
<summary>Musterlösung</summary>

```java title="A3InterestCalculator.java"
import mytools.StdInput;

public class A3InterestCalculator {

  public static void main(String[] args) {
    double amount = StdInput.readDouble("Betrag eingeben: ");
    double interestRate = StdInput.readDouble("Zinssatz in % eingeben: ");

    double interest = calcInterest(amount, interestRate);
    System.out.println("Der Zinsbetrag beträgt: " + interest);
  }

  public static double calcInterest(double amount, double interestRate) {
    return (amount / 100) * interestRate;
  }
}
```

</details>

## :pen: A4: Einfacher Rechner :rocket:

Dieses Programm erwartet die Eingabe zweier Zahlen `a` und `b` durch den
Benutzer, sowie den Rechenoperator als String `+` oder `*`.

- Für die Operatoren `+` und `*` sollen zwei Methoden (z.B. `add`, `mulitpy`)
  existieren welche die Parameter `a` und `b` besitzen und das Resultat
  zurückgeben.
- Je nach Operator werden die beiden Zahlen `a` und `b` an die zuständige
  Methode als Parameter übergeben
- Das Ergebnis wird berechnet und als Rückgabewert an die `main`-Methode
  zurückgegeben.
- Das Ergebnis soll in die Konsole ausgegeben werden.

<details>
<summary>Musterlösung</summary>

```java title="A4SimpleCalculator.java"
import mytools.StdInput;

public class A4SimpleCalculator {

  public static void main(String[] args) {
    // Initialisierung der Variablen
    int a = 0;
    int b = 0;
    int result = 0;
    char operator;

    // Einlesen der Werte
    System.out.println("Bitte erste Zahl eingeben:");
    a = StdInput.readInt();
    System.out.println("Bitte zweite Zahl eingeben:");
    b = StdInput.readInt();
    System.out.println("Welche Operation wollen Sie ausführen: + *");
    operator = StdInput.readChar(); // INFO: auch möglich als String

    // Operator prüfen und Resultat entsprechend berechnen
    if (operator == '+')) { // INFO: Wenn string dann `equals`
      result = add(a, b);
    } else if (operator == '-') { // INFO: Wenn string dann `equals`
      result = multiply(a, b);
    }

    // Resultat ausgeben
    System.out.println("Das Resultat ist " + result);
  }

  public static int add(int a, int b) {
    return a + b;
  }

  public static int multiply(int a, int b) {
    return a * b;
  }
}
```

</details>

## :pen: A5: Eigenes Beispiel :star2:

Adaptieren Sie ein Beispiel mit Methoden inkl. Parameter(n) und Rückgabewert auf eine eigene Situation.

## :pen: A6: Geltungsbereich

- Lesen Sie die Themenseite [Geltungsbereich von lokalen Variablen](/docs/woche04/4a-methoden-fehleranalyse/geltungsbereich-variablen.md)
- Studieren Sie das folgenden Programm. (Kopieren Sie es nach Eclipse)

```java title="A6Geltunsbereich.java" showLineNumbers
public class A6Geltunsbereich {

  public static void main(String[] args) {
    if (true) {
      int a = 2
    }
    // highlight-red-next-line
    int b = a; // wieso ist `a` hier nicht verfügbar
    int c = 4;
    // highlight-next-line
    int result = add(); // die Methode add() wird aufgerufen
    System.out.println(result);
  }

  public static int add() {
    // highlight-red-next-line
    return b + c; // wieso sind `b` und `c` hier nicht verfügbar?
  }
}
```

1. Wieso ist auf **Zeile 7** die Variable `a` nicht sichtbar?
2. Wieso sind auf **Zeile 14** die Variablen `b` und `c` nicht sichtbar?
3. Korrigieren Sie das Programm so, dass auf der Konsole `6` ausgegeben wird.

:::warning Relative Zeilennummern

Die Zeilen **7** und **14** beziehen Sie auf das Beispiel oben.
Wenn Sie es nach Eclipse kopieren und evt. noch ein `package` hinzufügen,
sind die Zeilen natürlich verschoben.

:::
