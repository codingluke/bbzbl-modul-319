---
keywords:
  - pdf
---
# 📖 Arrays / Listen

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

## :tv: Erklärvideos von Studyflix

- https://studyflix.de/informatik/java-array-1898
