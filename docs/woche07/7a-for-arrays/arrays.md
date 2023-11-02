---
keywords:
  - pdf
---
# Arrays / Listen

Programmierer versuchen immer so wenig wie möglich Code schreiben zu müssen - ja
gute Programmierer sind faul :smiley:. Daher gibt es genau für das in der
Einleitung beschriebene Problem das Konzept der Arrays, also Auflistungen.

:::info Array -> Auflistung

**Eine Variable mit einer Auflistung von Werten des gleichen Typs.**

- Wenn wir viele Daten erfassen möchten, die alle den **gleichen Datentyp**
  besitzen und auch zusammengehören, dann können wir mit Arrays arbeiten.
- Arrays besitzen eine **vordefinierte Länge**. Diese kann nicht einfach so
  geändert werden.
  - :superhero: Es gibt in weiteren Modulen Listen mit dynamischer Länge. Dies
    ist in diesem Modul jedoch noch nicht relevant!

:::

## Array initialisieren

Eine Array-Variable kann auf folgende Weise angelegt werden:

```java title="Array initialisieren"
   int[] werte = new int[100];
//                       ^^^  Array-Länge     (hier 100)
//               ^^^ ^^^^^^^^ Initialisierung (immer mit new)
// ^^^^^ ^^^^^ Definition int-Array           (eckige Klammern)

```

Zuerst wird durch `int[] werte` eine Variable vom Datentyp `int` definiert
welche als Array mehrere Werte fassen kann. Danach wird durch `= new int[100]`
der Array initialisiert. Beim initialisieren wird festgelegt, dass der Array 100
Werte fassen kann. Diese Länge ist fest und kann nicht mehr geändert werden.

:::caution

Alle weiteren Code-Beispiele beziehen sich immer auf oberen Array `werte`

:::

## Array Werte-Zuweisung

Der Zugriff auf eine Wert im Array geschieht wie bei jeder Variable über den
Variablennamen. Da ein Array nun mehrere Werte gespeichert hat, benötigt es
zusätzlich die Stelle an der der Wert in der Liste steht. Die Zuweisung
geschieht nun über den Variablennamen und danach, in eckigen Klammern, die
Stelle/Index des Wertes, den man ansprechen möchte.

Und die sieht wie folgt aus:

```java title="Array-Zuweisung durch index in eckiger Klammer"
   werte[0] = 3;
//      ^^^ Durch eckige Klammern und einem index wird auf
//          einen beliebigen Wert im Array zugegriffen.
//          (hier 0, also der erste Wert)
```

Nun könnte man die Messwerte analog der [Einleitung](./index.md) folgendermassen
aufnehmen:

```java title="Array manuell initialisieren"
werte[0] = mess_methode();
werte[1] = mess_methode();
werte[2] = mess_methode();
// und so weiter
werte[99] = mess_methode();
```

Diese Variante ist nun jedoch nicht weniger Schreibintensiv als mit die Version
mit den 100 eigenen Variablen der Einleitung. Der Vorteil liegt nun aber darin,
dass nur noch eine Variable definiert werden muss.

:::tip `for`-Schleifen

Schreibfaule Programmierer könnten nun auf die Idee kommen, dass Zahlen von 0-99
durch die bereits bekannte `for`-Schlaufe automatisiert erstellt werden könnten!

:::

Und Sie haben recht! Dies geht nun folgendermassen: **:magic_wand:
Abra-kadabara-simsalabim aus 100 Zeilen, da mach 3!**

```java showLineNumbers title="Abfüllen eines Arrays mit Hilfe einer for-Schleife"
for (int index = 0; index < 100; i++) { // 100 ist die Array Länge
    werte[index] = mess_methode(); // die Variable index von 0-99
}
```

In diesem Beispiel wird durch eine `for`-Schleife 100 Mal den Code-Block auf
Zeile 3 ausgeführt. Dabei wird der Variable `index` im Einerschritt _(`i++`)_
die Werte 0 bis 99 zugewiesen _(`index < 100` ist maximal 99)_. Die Methode
`mess_methode()` wird somit 100 Mal ausgeführt und der Rückgabewert jedes Mal
einer anderen Stelle des Arrays `werte` zugewiesen.

:::info Arrays starten bei 0

Beachten Sie, dass das erste Element des Arrays den Index 0 hat. Entsprechend
hat das letzte Element als Index eine Zahl, die um 1 kleiner ist als die Anzahl
Elemente.

:::

## Array Zugriff

Der Zugriff auf Werte eines Arrays funktioniert analog der Zuweisung. Nur
braucht es dafür keinen Zuweisungsoperator `=`. Dieser erfolgt folgendermassen.

```java title="Array-Zugriff"
System.out.println(werte[0]); // Gibt den ersten Wert auf die Konsole aus
```

Wenn wir jetzt den Durchschnitt aller Messwerte berechnen möchten, können wir
nun nochmals die `for`-Schleife zur Hilfe nehmen:

```java title="Summe aller Werte des int-Arrays werte"
int summe = 0;
for (int i = 0; i < 100; i++) {
    summe += werte[i];
}
int durchschnitt = summe / 100;
```

Jeder Array besitzt das Attribut `.length` in welchem seine genaue Länge
abgerufen werden kann. Dies Hilft um nicht immer die Länge nachschauen zu
müssen. Auch ist es besser lesbar. Dies können wir uns zu Nutzen machen um den
Code noch genereller zu schreiben:

```java title="Summe aller Werte optimiert mit .length"
int summe = 0;
for (int i = 0; i < werte.length; i++) {
    summe += werte[i];
}
int durchschnitt = summe / werte.length;
```

:::caution Magische Nummern vermeiden

Zahlen, die nicht klar ersichtlich sind, wofür sie stehen, werden auch magische
Nummern genannt und sollen vermieden werden. Sie machen den Code unübersichtlich
und führen zu Fehlern.

- Hier ist die Zahl 100 eine Magische Nummer :magic_wand:
- `werte.length` sagt klar aus, dass es sich um die Länge vom Array `werte`
  handelt. 100 kann vieles sein. z.B. 100 :rabbit:

:::

### Zugriff mit for(each)

Wenn man von einem Array lediglich alle Werte auslesen möchte, nicht aber
schreiben, gibt es eine spezielle Variante der `for`-Schleife. Die sogenannte
[`foreach`-Schleife](./foreach.md) (Für jedes Element). In dieser Variante
existiert keine Zählervariable, stattdessen wird bei jeder Iteration der nächste
Wert direkt in eine Variable geschrieben. Dies macht das Auslesen eines gesamten
Arrays um einiges einfacher.

```java title="Summe aller Werte optimiert mit foreach"
int summe = 0;
for (int wert : werte) {
//              ^^^^^ Array welcher ausgelesen werden soll
//            ^ Ein Doppelpunkt trennt die Variable pro Iteration und der Array
//   ^^^^^^^^ Die Variable welche pro Iteration den nächsten Wert beinhaltet
    summe += wert;
}
int durchschnitt = summe / werte.length;

```

Mit dieser Variante kann also nicht auf ein Individuelles Element zugegriffen
werden. Auch kann nicht ein Element neu zugewiesen werden. Dafür benötigt es
viel weniger Zeichen und ist somit weniger Komplex und lesbarer.

:::info Eckige Klammern ein-mal-eins

- `datentyp[]` : Difinition eines Arrays
- `new datentyp[100]` : Initialisierung und Definition der Array-Länge
- `variablennamen[n]` : Zugriff auf den n-ten Wert im Array.
  - `variablennamen[0]` : Zugriff auf den 1ten Wert im Array.
  - Ein Array beginnt immer bei 0!

:::

### Generische Durchschnitt-Methode

Mit Hilfe des Attributes `.length` könnten wir nun eine generelle Methode
definieren, welche den Durchschnitt aller Einträge eines **beliebigen**
`int`-Arrays berechnet.

```java title="Generische Summen-Methode"
public static int durchschnitt(int[] liste) {
    int summe = 0;
    for (int eintrag : liste) {
        summe += eintrag;
    }
    return summe / liste.length;
}
```

```java title="Methode durchschnitt verwendet mit dem Array werte"
int durchschnitt = durchschnitt(werte);
```

:::tip Generalisierung

- Tritt etwas **häuft** vor, ist es elegant eine generalisierte Methode dafür zu
  finden.
- Tritt etwas aber **nur 1 Mal** vor ist dies nicht immer nötig!
  - Zu frühes Generalisieren kann zu komplizierterem Code führen :scream:
  - Hier ist das obere Beispiel mit der generischen Durchschnitt-Methode
    komplexer (mehr Code). Hätten wir ein Programm das mehrfach int-Arrays
    summieren muss, wäre es weniger komplex.
- **Aber Achtung**, wird eine Methode zu gross ist es übersichtlicher sie
  aufzusplitten (Programmieren brauch Erfahrung, die erhält man nur beim machen)

:::

## Eine Variante für das Anlegen und die Initialisierung

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

## Array sortieren

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

## :pen: Aufgaben

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

## :tv: Erklärvideos von Studyflix

- https://studyflix.de/informatik/java-array-1898
