---
sidebar_position: 1
---

# 🖊️ for - Aufgaben

Muss ein Programmabschnitt eine bestimmte Anzahl Mal wiederholt werden, braucht
es in der Regel eine Zählervariable `int i`. Da dies sehr oft vorkommt, gibt es
dazu eine eigene Kontrollstruktur, die `for` - Schleife. Hier findet Ihr
Aufgaben dazu.

:::tip Theorie offen behalten

Wenn Ihr [:open_book: for - Schleife](/docs/woche07/5a-while/for.md) in einem
eigenen Tab (oder Splitscreen) offen habt, könnt Ihr während dem Lösen der
Aufgabe komfortabel spicken ;)

:::

## A1: Nummerieren

1. Geben Sie die Zahlen von 1 bis 10 aus.
2. Geben Sie die Zahlen von 37 bis 55 aus.
3. Geben Sie jede zweite Zahl von 18 bis 96 aus.
4. Fragen Sie den Benutzer nach Startwert, Endwert und Schrittweite und geben
   Sie die entsprechenden Zahlen aus.

<details>
<summary>Musterlösung</summary>

```java
public class A1aFor1to10 {

  public static void main(String[] args) {
    for (int i = 1; i <= 10; i++) {
      System.out.println(i);
    }
  }
}
```

```java
public class A1bFor37to55 {

  public static void main(String[] args) {
    for (int i = 37; i <= 55; i++) {
      System.out.println(i);
    }
  }
}
```

```java
public class A1cFor18to96 {

  public static void main(String[] args) {
    for (int i = 18; i <= 96; i = i + 2) { // es würde auch gehen  i += 2;
      System.out.println(i);
    }
  }
}
```

```java
import mytools.StdInput;

public class A1dFor {

  public static void main(String[] args) {
    System.out.print("Startwert: ");
    int start = StdInput.readInt();

    System.out.print("Endwert: ");
    int ende = StdInput.readInt();

    System.out.print("Schrittweite: ");
    int sw = StdInput.readInt();

    for (int i = start; i <= ende; i = i + sw) { // es würde auch gehen  i += sw;
      System.out.println(i);
    }
  }
}
```

</details>

## A2: Sterne

- Schreiben Sie ein Programm, das eine Zeile mit 10 Sternen ausgibt.
- Die Sterne sollen einzeln in einer for-Schleife ausgegeben werden (also bei
  jedem Durchlauf der Schleife wird ein Stern der Zeile hinzugefügt).
- Verwenden Sie dazu die Methode `System.out.print` (und nicht
  System.out.println). Die Ausgabe sieht also so aus:

```bash title="Ausgabe"
**********
```

<details>
<summary>Musterlösung</summary>

```java
public class A2Sterne {

  public static void main(String[] args) {

    for (int i = 0; i < 10; i++) {
      System.out.print("*");
    }
  }
}
```

</details>

## A3: Erweiterte Sterne :star2:

Erweitern Sie das obige Programm A2 so, dass 5 Zeilen mit jeweils 10 Sternen
ausgegeben werden. Die 5 Zeilen müssen auch in einer for-Schleife erstellt
werden. Die Ausgabe sollte also so aussehen :

```bash title="Ausgabe"
**********
**********
**********
**********
**********
```

<details>
<summary>Musterlösung</summary>

```java
public class A3Sterne {

  public static void main(String[] args) {

    for (int j = 0; j < 5; j++) {
      for (int i = 0; i < 10; i++) {
        System.out.print("*");
      }

      System.out.println();
    }
  }
}
```

</details>

## A4: Flaggen

Schreiben Sie ein Programm Flaggen, das folgende Anforderungen erfüllt:

- die Anzahl Zeilen für die Flaggen werden vom Benutzer angegeben
- Zeile 1 enthält 1 Stern, Zeile n enthält n Sterne Die Ausgabe soll so
  aussehen:

```bash title="Ausgabe"
Anzahl Zeilen: 5
*
**
***
****
*****
```

<details>
<summary>Musterlösung</summary>

```java
import mytools.StdInput;

public class A4Flaggen {

  public static void main(String[] args) {
    System.out.println("Flaggen 1");
    System.out.print("Anzahl Zeilen: ");
    int lines = StdInput.readInt();

    for (int currentLine = 0; currentLine < lines; currentLine++) {
      for (int currentPos = 0; currentPos <= currentLine; currentPos++) {
        System.out.print('*');
      }

      System.out.println();
    }
  }
}
```

```java
import mytools.StdInput;

public class A4FlaggenMethode {

  public static void main(String[] args) {
    System.out.println("Flaggen 1");
    System.out.print("Anzahl Zeilen: ");
    int lines = StdInput.readInt();

    flag(lines);
  }

  public static void flag(int nr_of_lines) {
    for (int currentLine = 0; currentLine < nr_of_lines; currentLine++) {
      for (int currentPos = 0; currentPos <= currentLine; currentPos++) {
        System.out.print("*");
      }

      System.out.println();
    }
  }
}
```

</details>

## A5: Erweiterte Flaggen

Erweitern Sie das Programm so, dass der Benutzer das Zeichen, mit dem die Flagge
gezeichnet wird, selbst festlegen kann.

Die Ausgabe soll so aussehen:

```bash title="Ausgabe"
Anzahl Zeilen: 5
Zeichen: x
x
xx
xxx
xxxx
xxxxx
```

<details>
<summary>Musterlösung</summary>

```java
import mytools.StdInput;

public class A5Flaggen {

  public static void main(String[] args) {
    System.out.print("Anzahl Zeilen: ");
    int lines = StdInput.readInt();

    System.out.print("Zeichen: ");
    String zeichen = StdInput.readString();

    for (int currentLine = 0; currentLine < lines; currentLine++) {
      for (int currentPos = 0; currentPos <= currentLine; currentPos++) {
        System.out.print(zeichen);
      }

      System.out.println();
    }
  }
}
```

```java
import mytools.StdInput;

public class A5FlaggenMethode {

  public static void main(String[] args) {
    System.out.print("Anzahl Zeilen: ");
    int lines = StdInput.readInt();

    System.out.print("Zeichen: ");
    String zeichen = StdInput.readString();

    flag(lines, zeichen);
  }

  public static void flag(int nr_of_lines, String character) {
    for (int currentLine = 0; currentLine < nr_of_lines; currentLine++) {
      for (int currentPos = 0; currentPos <= currentLine; currentPos++) {
        System.out.print(character);
      }

      System.out.println();
    }
  }
}
```

</details>

## A6: Super Flaggen

Erweitern Sie das Programm so, dass der Benutzer eingeben kann, wie viele
Flaggen gezeichnet werden.

Die Ausgabe soll so aussehen:

```bash title="Ausgabe"
Anzahl Zeilen: 5
Anzahl Flaggen: 2
Zeichen: @

Flagge 1
@
@@
@@@
@@@@
@@@@@

Flagge 2
@
@@
@@@
@@@@
@@@@@
```

<details>
<summary>Musterlösung</summary>

```java
import mytools.StdInput;

public class A6Flaggen {

  public static void main(String[] args) {
    System.out.print("Anzahl Zeilen: ");
    int lines = StdInput.readInt();

    System.out.print("Anzahl Flaggen: ");
    int flags = StdInput.readInt();

    System.out.print("Zeichen: ");
    String zeichen = StdInput.readString();

    for (int currentFlag = 0; currentFlag < flags; currentFlag++) {
      System.out.println();
      System.out.println("Flagge " + (currentFlag + 1));

      for (int currentLine = 0; currentLine < lines; currentLine++) {
        for (int currentPos = 0; currentPos <= currentLine; currentPos++) {
          System.out.print(zeichen);
        }

        System.out.println();
      }
    }
  }
}
```

```java
import mytools.StdInput;

public class A6FlaggenMethode {

  public static void main(String[] args) {
    System.out.print("Anzahl Zeilen: ");
    int lines = StdInput.readInt();

    System.out.print("Anzahl Flaggen: ");
    int flags = StdInput.readInt();

    System.out.print("Zeichen: ");
    String zeichen = StdInput.readString();

    for (int currentFlag = 0; currentFlag < flags; currentFlag++) {
      flag(currentFlag + 1, lines, zeichen);
    }

    // eine andere Variante fuer das Zaehlen der Flaggen ist:
    for (int currentFlag = 1; currentFlag <= flags; currentFlag++) {
      flag(currentFlag, lines, zeichen);
    }
  }

  public static void flag(int flagNumber, int nr_of_lines, String character) {
    System.out.println();
    System.out.println("Flagge " + flagNumber);

    for (int currentLine = 0; currentLine < nr_of_lines; currentLine++) {
      for (int currentPos = 0; currentPos <= currentLine; currentPos++) {
        System.out.print(character);
      }

      System.out.println();
    }
  }
}
```

</details>
