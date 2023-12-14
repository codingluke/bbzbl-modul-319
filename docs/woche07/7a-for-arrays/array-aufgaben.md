---
sidebar_position: 2
---

# 🖊️ Array Aufgaben

Häufig benötigt man eine Liste von Werte, die man hintereinander verarbeiten
möchte. Um nicht für jeden Wert eine eigene Variable definieren zu müssen
existieren Listen, auch Arrays genannt.

:::tip Theorie offen behalten

Wenn Ihr [:open_book: Arrays / Listen](/docs/woche07/7a-for-arrays/arrays.md) in
einem eigenen Tab (oder Splitscreen) offen habt, könnt Ihr während dem Lösen der
Aufgabe komfortabel spicken ;)

:::

## A1: Array Chars

Verwenden Sie eine for-Schleife, um den folgenden Array auszugeben:

```java
char[] text = {'h','a','l','l','o',' ','w','e','l','t'};
```

- Geben Sie danach den Array in **umgekehrter Reihenfolge** aus, also von hinten
  nach vorne.
- Verwenden Sie dafür auch wieder eine for-Schleife.

<details>
<summary>Lösung Array Chars</summary>

```java title="A1ArrayChars.java"
public class A1ArrayChars {

  public static void main(string[] args) {
    char[] text = {'h','e','l','l','o',' ','f','e','l','l','o','w'};

    for (int i = 0; i < text.length; i++) {
      System.out.print(text[i]);
    }

    System.out.println();

    for (int i = text.length - 1; i >= 0; i--) {
      System.out.print(text[i]);
    }

    System.out.println();
  }

}
```

</details>

## A2: String sortieren

1. Kopieren Sie den untenstehenden Code in ein Eclipse-Projekt und lassen Sie
   ihn laufen.
2. Erweitern Sie das Programm so, dass der Array sortiert und danach wieder
   ausgegeben wird.

```java title="A2SortString.java"
public class A2SortString {

  public static void main (String[] args) {
    String beruf[] = {
      "Wurstmacher",
      "Holzbearbeiter",
      "Laufbursche",
      "Taxifahrer",
      "Velokurier",
      "Wasserfahrer",
      "Zitronenfalter",
      "Fensterputzer",
      "Halsabschneider",
    };
    //Ausgabe aller Werte des Arrays
    for (int i = 0; i < beruf.length; i++){
        System.out.println(i + ". " + beruf[i]);
    }
    // highlight-next-line
    // Erweitern Sie hier das Programm.
  }

}
```

<details>
<summary>Lösung: String sortieren</summary>

```java title="A2SortString.java"
import java.util.Arrays;

public class A2SortString {

  public static void main(String[] args) {
    String beruf[] = {
      "Wurstmacher",
      "Holzbearbeiter",
      "Laufbursche",
      "Taxifahrer",
      "Velokurier",
      "Wasserfahrer",
      "Zitronenfalter",
      "Fensterputzer",
      "Halsabschneider",
    }

    System.out.println("Ausgabe VOR der Sotierung");
    for(int i = 0; i < beruf.length; i++) {
      System.out.println(beruf[i]);
    }

    Arrays.sort(beruf);

    System.out.println();
    System.out.println("Ausgabe NACH der Sotierung");
    for(int i = 0; i < beruf.length; i++) {
      System.out.println(beruf[i]);
    }
  }

}
```

</details>

## A3: Array negativ

Gegeben ist Array `a`. Geben Sie alle Elemente mit einem negativen Wert
untereinander auf der Konsole aus. Verwenden Sie auch wieder eine for-Schleife.

```java
int[] a = { 1, -2, -25, 6, -3, 5 };
```

<details>
<summary>Lösung: Array negativ</summary>

```java title="A3ArrayNegativ.java"
public class A3ArrayNegativ {

  public static void main(String[] args) {
    int[] a = { 1, -2, -25, 6, -3, 5 };

    for(int i = 0; i < a.length; i++) {
      if(a[i] < 0) {
        System.out.println(a[i]);
      }
    }
  }

}
```

</details>

## A4: Arrays addieren

Gegeben sind drei Arrays `a`, `b` und `c`. Verändern Sie durch Java-Code den
Array `c` so, dass im Element `c[0]` die Summe `a[0]` plus `b[0]` steht und
entsprechend für die Elemente 1, 2, 3.

```java
int[] a = { 1, 2, 25, 6 };  //   {  1,  2, 25,  6 }
int[] b = { 9, 18, 5, 34 }; // + {  9, 18,  5, 34 }
int[] c = new int[4];       // = { 10, 20, 30, 40 }
```

<details>
<summary>Lösung: Add Arrays</summary>

```java title="A4AddArrays.java"
public class A4AddArrays {

  public static void main(String[] args) {
    int[] a = { 1, 2, 25, 6 };
    int[] b = { 9, 18, 5, 34 };
    int[] c = new int[4];

    // Zahlen addieren und in c speichern
    for(int i = 0; i < a.length; i++) {
      c[i] = a[i] + b[i];
    }

    // Array c ausgeben
    for(int i = 0; i < a.length; i++) {
      System.out.println(c[i]);
    }
  }

}
```

</details>

## A5: Arrays verbinden

Gegeben sind zwei Arrays `a` und `b`. Erzeugen Sie einen neuen Array `c`, der so
lang ist wie `a` und `b` zusammengenommen und auch die Werte von `a` und `b` (in
dieser Reihenfolge) enthält.

```java
int[] a = { 1, 2, 25 };
int[] b = { 9, 18 };
```

<details>
<summary>Lösung: Combine Arrays</summary>

```java title="A5CombineArrays.java"
public class A5CombineArrays {

  public static void main(String[] args) {
    int[] a = { 1, 2, 25 };
    int[] b = { 9, 18 };

    // neuer Array so lange die beiden anderen zusammen
    int[] c = new int[a.length + b.length];

    // Index für Array c
    int index_c = 0;

    // Array a kopieren
    for(int i = 0; i < a.length; i++) {
      c[index_c] = a[i];
      index_c++;
    }

    // Array b kopieren
    for(int i = 0; i < b.length; i++) {
      c[index_c] = b[i];
      index_c++;
    }

    // Kontrolle: die 3 Arrays ausgeben
    System.out.println("Array a:");
    for(int i = 0; i < a.length; i++) {
      System.out.println(a[i]);
    }
    System.out.println();

    System.out.println("Array b:");
    for(int i = 0; i < b.length; i++) {
      System.out.println(b[i]);
    }
    System.out.println();

    System.out.println("Array c:");
    for(int i = 0; i < c.length; i++) {
      System.out.println(c[i]);
    }
  }

}
```

</details>

## A6: Arrays mit Methoden verbinden

Verwende den Code von [Arrays verbinden](#a5-arrays-verbinden).

Nun versuche die Aufgabe so zu lösen, dass das Kopieren und Ausgeben in zwei
Methoden gemacht wird. Die Signatur der Methoden sind folgende:

- `public static void copyArray(int[] source, int[] destination, int destination_index)`
- `public static void showArray(String name, int[] array)`

<details>
<summary>Lösung: Combine Arrays with Methods</summary>

```java title="A6CombineArraysWithMethods.java"
public class A6CombineArraysWithMethods {

  public static void main(String[] args) {
    int[] a = { 1, 2, 25 };
    int[] b = { 9, 18 };

    // neuer Array so lange die beiden anderen zusammen
    int[] c = new int[a.length + b.length];

    // Array a kopieren
    copyArray(a, c, 0);

    // Array b kopieren
    copyArray(b, c, a.length);

    // Kontrolle: die 3 Arrays ausgeben
    showArray("a", a);
    showArray("b", b);
    showArray("c", c);
  }

  // einen Array zu einem anderen Array hinzufügen
  // der 3. Parameter (destination_index) ist die Anzahl Elemente, die im Ziel-Array bereits abgefüllt sind
  public static void copyArray(int[] source, int[] destination, int destination_index) {
    for(int i = 0; i < source.length; i++) {
      destination[destination_index] = source[i];
      destination_index++;
    }
  }

  // Array ausgeben
  public static void showArray(String name, int[] array) {
    System.out.println("Array " + name + ":");
    for(int i = 0; i < array.length; i++) {
      System.out.println(array[i]);
    }
    System.out.println();
  }
}
```

</details>

## A7: Noten

Erstellen Sie ein Programm, welches Noten einlesen kann und in einem Array
speichert.

- Zuerst soll es nach der Anzahl Noten fragen...
  - ... und dann mit diesem Wert einen neuen Array anlegen.
- Dann sollen alle Werte vom Benutzer eingegeben werden, wobei...
  - ... nach jedem Wert der Durchschnitt der bisher eingegebenen Noten berechnet
    und angezeigt wird.

:::tip

Die Arbeit mit Methoden kann Ihr Programm übersichtlicher machen.

:::

<details>
<summary>Lösung: Noten</summary>

```java title="A7Noten.java"
import java.util.Scanner;

public class A7Noten {

  public static void main(String[] args) {
    try(Scanner sc = new Scanner(System.in)) {
      System.out.print("Anzahl Noten: ");
      int number = sc.nextInt();

      double[] note = new double[number];
      for(int i = 0; i < note.length; i++) {
        System.out.println("Geben Sie eine Note ein: ");
        note[i] = sc.nextDouble();

        double durchschnitt = durchschnitt(note, i + 1);
        System.out.println("Durchschnitt: " + durchschnitt);
        System.out.println();
      }
    }
  }

  // grade ist der Array mit den Noten
  // count ist die bereits eingegebener Noten
  public static double durchschnitt(double[] grade, int count) {
    double durchschnitt = 0;

    double sum = 0;
    for(int i = 0; i < count; i++) {
      sum = sum + grade[i];
    }

    durchschnitt = sum / count;
    return durchschnitt;
  }
}
```

</details>

## A8: Würfeln

1. Erstellen Sie einen Array mit sechs 0en.
2. Würfeln Sie 100 mal mit der Methode `rollDice()`
   - Bei jedem Wurf zählen Sie für die gewürfelte Zahl der entsprechende index
     im Array hoch.
3. Geben Sie aus wie häufig die jeweiligen Zahlen gewürfelt wurden.

```java title="A8Dice.java"
public class A8Dice {

  public static void main(String[] args) {
    // highlight-next-line
    // die Aufgabe hier implementieren
  }

  public static int rollDice() {
    return (int)(Math.random() * (6 - 1 + 1)) + 1;
  }

}
```

<details>
<summary>Lösung - Dice</summary>

```java title="A8Dice.java"
public class A8Dice {

  public static void main(String[] args) {
    int countAll   = 0;
    int[] count = { 0, 0, 0, 0, 0, 0 };

    while(countAll < 100) {
      int number = rollDice();
      count[number - 1]++;
      countAll++;
    }

    System.out.println("Gewürfelte Zahlen:");
    for(int i = 0; i < count.length; i++) {
      System.out.println((i+1) + ": " + count[i]);
    }
  }

  public static int rollDice() {
    return (int)(Math.random() * (6 - 1 + 1)) + 1;
  }

}
```

</details>
