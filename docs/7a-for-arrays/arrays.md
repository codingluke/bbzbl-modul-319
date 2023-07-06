# Arrays / Listen

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
Sie jetzt die Messwerte auslesen (über eine fiktive Messmethode), dann könnte
das so aussehen:

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

## Die Lösung

Wenn wir viele Daten erfassen möchten, die alle den gleichen Datentyp besitzen
und auch zusam- mengehören, dann können wir mit **Arrays** arbeiten.

Mit Arrays können wir viele Werte in einer Variable verwalten. So eine Variable
kann zum Beispiel auf diese Weise angelegt werden:

```java title="Array initialisieren
int[] werte = new int[100];
```

Das Abfüllen der Werte in den Array funktioniert jetzt ganz einfach. Wir haben
ja die for-Schleife kennengelernt und wenden sie an:

```java
for(int i = 0; i < 100; i++) {
    werte[i] = mess_methode();
}
```

In diesem Beispiel sehen Sie auch gleich, wie die 100 Elemente eines Arrays
angesprochen werden. Man schreibt den Namen des Arrays und danach in eckigen
Klammern den Index des Wertes, den man ansprechen möchte. Beachten Sie, dass das
erste Element des Arrays den Index 0 (Null) hat. Entsprechend hat das letzte
Element als Index eine Zahl, die um 1 kleiner ist als die Anzahl Elemente. Wenn
wir jetzt den Durchschnitt aller Messwerte berechnen möchten, funktioniert dies
sehr einfach:

```java
int summe = 0;
for(int i = 0; i < 100; i++){
    summe = summe + werte[i];
}
int durchschnitt = summe / 100;
```

Um das noch einfacher zu schreiben, hat ein Array eine Eigenschaft mit dem Namen
length. Da steht drin, aus wievielen Elementen der Array besteht. Wie diese
Eigenschaft angesprochen und verwendet wird, sehen Sie im Beispiel unten. Es
wird das gleiche gemacht wie vorher.

```java
int summe = 0;
for(int i = 0; i < werte.length; i++){
    summe = summe + werte[i];
}
int durchschnitt = summe / werte.length;
```

Wenn wir mit der Eigenschaft length arbeiten, ist keine andere Anpassung
notwendig.

### Eine Variante für das Anlegen und die Initialisierung

Es ist auch möglich, einen Array anzulegen und gleich mit Werten abzufüllen.
Diese Variante funktioniert so:

```java
int[] zahlen = { 1, 8, 9, 3 };
```

Sie sehen, dass es kein new gibt, sondern nur gleich eine Aufzählung der Werte
in dem Array. Die Grösse wird auch nicht explizit angegeben. Sie ergibt sich
ganz einfach aus der Anzahl Elemente, die angegeben werden.

Diese Variante wird eher für kleinere Arrays verwendet, was sicher noch
nachvollziehbar ist. Es gibt aber keine Limitierung von der Sprachdefinition
her.

Hier ein kleines Beispiel, wie so ein Array angelegt und dann ausgegeben wird.

```java
int[] zahlen = { 1, 8, 9, 3 };
for(int i = 0; i < zahlen.length; i++){
    System.out.println(i + ": " + zahlen[i]);
}
```

### Einen Array sortieren

Wenn wir die Daten in einem Array sortieren möchten, dann müssen wir das nicht
selbst programmieren. Es gibt eine Methode, die das für uns übernimmt. Sie
heisst (wenig überraschend) sort.

```java
int[] zahlen = { 1, 8, 9, 3 };
Arrays.sort(zahlen);
for(int i = 0; i < zahlen.length; i++){
    System.out.println(i + ": " + zahlen[i]);
}
```

Der Datentyp der Werte im Array spielt dabei keine Rolle. Der Aufruf
funktioniert auch bei einem String-Array.

```java
String[] worte = { "eins", "zwei", "drei" };
for(int i = 0; i < worte.length; i++){
    System.out.println(i + ": " + worte[i]);
}
Arrays.sort(worte);
for(int i = 0; i < worte.length; i++){
    System.out.println(i + ": " + worte[i]);
}
```

## :pencil: Aufgaben

### Array Chars

Verwenden Sie eine for-Schleife, um den folgenden Array auszugeben:

```java
char[] text = {'h','a','l','l','o',' ','w','e','l','t'};
```

- Geben Sie danach den Array in **umgekehrter Reihenfolge** aus, also von hinten
  nach vorne.
- Verwenden Sie dafür auch wieder eine for-Schleife.

<details>
<summary>Lösung Array Chars</summary>

```java
public class ArrayChars {

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

### String sortieren

1. Kopieren Sie den untenstehenden Code in ein Eclipse-Projekt und lassen Sie
   ihn laufen.
2. Erweitern Sie das Programm so, dass der Array sortiert und danach wieder
   ausgegeben wird.

```java
public class SortString {

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
    }
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

```java
import java.util.Arrays;

public class SortString {

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

### Array negativ

Gegeben ist Array `a`. Geben Sie alle Elemente mit einem negativen Wert
untereinander auf der Konsole aus. Verwenden Sie auch wieder eine for-Schleife.

```java
int[] a = { 1, -2, -25, 6, -3, 5 };
```

<details>
<summary>Lösung: Array negativ</summary>

```java
public class ArrayNegativ {

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

### Add Arrays

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

```java
public class AddArrays {

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

### Combine Arrays

Gegeben sind zwei Arrays `a` und `b`. Erzeugen Sie einen neuen Array `c`, der so
lang ist wie `a` und `b` zusammengenommen und auch die Werte von `a` und `b` (in
dieser Reihenfolge) enthält.

```java
int[] a = { 1, 2, 25 };
int[] b = { 9, 18 };
```

<details>
<summary>Lösung: Combine Arrays</summary>

```java
public class CombineArrays {

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

### Combine Arrays with Methods

Verwende den Code von [Combine Arrays](#combine-arrays).

Nun versuche die Aufgabe so zu lösen, dass das Kopieren und Ausgeben in zwei
Methoden gemacht wird. Die Signatur der Methoden sind folgende:

- `public static void copyArray(int[] source, int[] destination, int destination_index)`
- `public static void showArray(String name, int[] array)`

<details>
<summary>Lösung: Combine Arrays with Methods</summary>

```java
public class CombineArraysWithMethods {

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

### Noten

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

```java
import java.util.Scanner;

public class Noten {

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

### Dice

1. Erstellen Sie einen Array mit sechs 0en.
2. Würfeln Sie 100 mal mit der Methode `rollDice()`
   - Bei jedem Wurf zählen Sie für die gewürfelte Zahl der entsprechende index
     im Array hoch.
3. Geben Sie aus wie häufig die jeweiligen Zahlen gewürfelt wurden.

:::tip

Diese Aufgabe ist besonders interessant für das Projekt

:::

```java
public class Dice {

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

```java
public class Dice {

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

