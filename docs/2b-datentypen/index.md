---
keywords:
  - pdf
---

# 2b - Variablen & Datentypen

Wenn Programme Daten bearbeiten, so sind diese in **Variablen (änderbar)** und
**Konstanten (nicht änderbar)** gespeichert. Die Variablen und Konstanten
besitzen einen Namen sowie einen für die zu speichernden Daten passenden
**Datentyp**.

## :dart: Ziele

- Sie kennen die primitiven Datentypen und den höheren Datentyp String
- Sie können diese als Variablen in Programmen nutzen.

<!-- ## :teacher: Präsentation -->

<!-- [:computer: Open in Browser](pathname:///slides/operatoren) | [:floppy_disk: download PDF](pathname:///slides/operatoren.pdf) -->

<!-- <iframe src="/bbzbl-modul-319/slides/operatoren" width="100%" height="400px"></iframe> -->

## :teacher: Präsentation

[:computer: Open in Browser](pathname:///slides/variablen-datentypen) |
[:floppy_disk: download PDF](pathname:///slides/variablen-datentypen.pdf)

<iframe src="/bbzbl-modul-319/slides/variablen-datentypen" width="100%" height="400px"></iframe>

## Deklaration und Initialisierung von Variablen

Das generelle Muster _(die Syntax)_, um eine Variable zu deklarieren _(dem
Programm bekannt machen)_, hat zwei Varianten. Die Variable kann "nur"
deklariert oder aber sogleich mit einem entsprechenden Wert initialisiert
werden.

1. bei der Ersten Variante wird die Variable durch Angabe des **Datentyps
   gefolgt vom Variablennamen**, <u>deklariert</u>

   ```java
   char favoriteSign; // Variante 1 Deklaration: Variable ohne Wert
   ```

2. die Zweiten Variante **ergänzt die Erste Variante** mit einem Wert welcher
   durch den **Zuweisungsoperator** `=` zugewiesen wird. Damit wird die Variable
   <u>deklariert und direkt initialisiert</u>.

   ```java
   char favoriteSign = 'b'; // Variante 2 Deklaration + Initialisierung:
   ```

:::note

Wir verwenden in den Beispielen der Datentyp `char`, das Muster ist jedoch für
alle Datentypen gleich. Die Ausnahme ist der Wert, der pro Datentyp anders ist.

:::

## Deklaration von Konstanten

Sollen Variablen **nicht änderbar** sein, dann werden diese als Konstanten
bezeichnet, was durch das Schlüsselwort `final` erfolgt. Der Variablenname wird
gemäss Konvention in **GROSSBUCHSTABEN** geschrieben.

```java
   final float MWST = 7.7;
//             ^^^^ GROSSBUCHSTABEN als Konvention für Konstante
// ^^^^^ final definiert eine Konstante
```

## _Primitive_ Datentypen

In Java gibt es eine beachtliche Anzahl an Datentypen gemäss folgender Tabelle.
Vorerst nutzen wir die _primitiven_ Datentypen. Diese sind erkennbar, indem der
**Datentyp kleingeschrieben** ist.

| Datentyp | Grösse  | Beschreibung                                                                              | Spezifika |
| -------- | ------- | ----------------------------------------------------------------------------------------- | --------- |
| boolean  | 1 bit   | Speichert `true` _(wahr)_ oder `false` _(falsch)_ Werte                                   |
| byte     | 1 byte  | Speichert ganze Zahlen von `-128` bis `127`                                               |
| short    | 2 bytes | Speichert ganze Zahlen von `-32'768` bis `32'767`                                         |
| char     | 2 bytes | Speichert ein einzelnes Zeichen oder [ASCII]                                              | `''`      |
| int      | 4 bytes | Speichert ganze Zahlen `-2'147'483'648` bis `2'147'483'647`                               |
| float    | 4 bytes | Speichert Gleitkommazahlen von `6` bis `7` Dezimalstellen                                 | `f`       |
| long     | 8 bytes | Speichert ganze Zahlen von `-9'223'372'036'854'775'808l` bis `9'223'372'036'854'775'807l` | `l`       |
| double   | 8 bytes | Speichert Gleitkommazahlen von `15` Dezimalstellen                                        | `d`       |

[ascii]:
  https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange

### Initialisierung

Beispiele, wie Variablen initialisiert werden können. Die Leerzeichen dienen nur
der Übersichtlichkeit.

```java title="Deklarierung von Variablen"
// Datentyp     Variablenname  Semikolon
   int          number         ;
   char         sign           ;
   ...
```

Die Initialisierung der Werte verwendet spezifische Zeichen für die
verschiedenen Datentypen. So endet ein `float`-Wert immer mit `f` oder `long`
mit `l`. Die Spezifikas pro Datentyp finden Sie in der Tabelle oberhalb unter
"Spezifika".

```java title="Deklarierung & Initialisierung von Variablen"

// Datentyp     Variablenname  Zuweiseoperator   Wert  Semikolon
   int          number         =                 5     ;
   char         sign           =                 'c'   ;
   //                                            ^ ^  spezifisch für char sind ('')
   long         longNumber     =                 123l  ;
   //                                               ^ spezifisch für long (l)
   ...
```

:::info Speichergrösse

Früher hatte man wehnig Speicher zur Verfügung und hat immer abgewägt, welchen
Datentyp verwendet werden soll. Heute nimmt man für gewöhnlich einfach den
Grössten.

- Dies verkleinert die Liste auf folgende vier: `boolean`, `long`, `double` und
  `char`.
- Für den Test müsst ihr trotzdem alle kennen :yum:

:::

## _Höhere_ Datentypen

_Höhere_ Datentypen bauen auf den _primitiven_ Datentypen auf. Es handelt sich
bei diesen auch um Objekte.

:::info Abgrenzung

- Was genau Objekte sind müsst Ihr noch nicht verstehen.
- Ihr solltet in dem Modul den Datentyp `String` anwenden können.

:::

## Der Datentyp `String`

Der Datentyp `String` **dient zur Speicherung von Zeichenfolgen**, also
allgemeiner Text. Der Text muss immer zwischen zwei **"doppelten
Anführungszeichen"** gestellt werden.

| Datentyp | Grösse             | Beschreibung              | Spezifika |
| -------- | ------------------ | ------------------------- | --------- |
| String   | 2 byte pro Zeichen | Speichert beliebigen Text | `""`      |

### Strings initialisieren

```java
// Datentyp     Variablenname  Zuweiseoperator   Wert   Semikolon
   String       zeichenFolge   =                 "abc"  ;
//                                               ^   ^
//                                   "doppelten Anführungszeichen"
```

### Strings zusammensetzen

Mehrere Variablen vom Datentyp `String` können durch ein Plus-Zeichen `+`
zusammengesetzt werden. Dabei sollte man darauf achten, dass der erste Text mit
einem Leerzeichen enden soll. Wieso, sieht ihr im Beispiel:

```java title="Mit + Strings zusammensetzen"
String name = "Mr Robot";
System.out.println("Your name is " + name);
//                              ^ Leerzeichen!
//                  Your name is Mr Robot

System.out.println("Your name is" + name);
//                  Your name isMr Robot
```

:::note Höhere Datentypen sind Grossgeschrieben

- `String` ist Gross geschrieben, da es sich um einen _höheren_ Datentyp
  handelt.
- Ein `String` baut auf dem _primitiven_ Datentyp `char` auf _(:bulb: daher
  höher)_
  - Evt. Hilft die Analogie von "Atome (primitiv)" zu "Moleküle (höher)".
- _Höhere_ Datentypen sind auch Objekte.
  - Was Objekte genau sind, erfahrt ihr im Folgemodul 404 und ist noch nicht
    relevant!

:::

### Strings mit Zahlen zusammensetzen

Strings können auch mit allen _primitiven_ Datentypen, also auch mit numerischen
Werten, durch das Plus-Zeichen `+` zu einer Zeichenfolge kombiniert werden. Der
_primitive_ Datentyp wird dadurch automatisch zu einem String!

```java title="String mit Zahlen kombinieren"
System.out.println("Ihre Geschwindigkeit lautet " + 21);
//                  Ihre Geschwindigkeit lautet 21
```

:::tip Eine Zahl in einen String umwandeln

Werden Zahlen mit einem **leeren String ""** konkatiniert, wird die Zahl alleine
in einen String umgewandelt. Dies ist ein gängiger Java "Hack".

```java title="Zahl in String umwandeln"
String zahl = "" + 21;
// zahl ist nun "21"
```

:::

## Der Datentyp `LocalDate` für Datumswerte

Mit der Klasse `java.time.LocalDate` lassen sich Datumswerte speichern resp. das
aktuelle Datum erzeugen, wie nachfolgendes Beispiel zeigt:

```java title="Momentane Zeit (jetzt, now) ausgeben"
LocalDate d = LocalDate.now();
System.out.println(d);
```

## Datentypen konvertieren (Casting)

Manchmal muss man oder will den aktuellen Datentypen ändern, und Daten in einen
anderen Datentyp konvertieren. In manchen Fällen ist das unproblematisch, wie
hier, da Java ermitteln kann, dass kein Genauigkeitsverlust auftritt:

```java
int smallNumber = 123;
long convertedSmallNumber = smallNumber;
```

In anderen Fällen wird die Entwicklungsumgebung hingegen eine Fehlermeldung
anzeigen, wie hier:

```java
long bigNumber = 1112223334445566L;
int convertedBigNumber = bigNumber;
```

In wieder anderen Fällen, werden Sie Berechnungen programmieren, deren Ergebnis
ganzzahlig sein muss. Angenommen ein strenges Notensystem liesse nur ganze,
abgerundetee Modulnoten zu, während diese den Semestertests mit Zehntelsnoten
berechnet werden, dann könnte Eclipse darauf hinweisen, dass folgende Zuweisung
ungültig ist.

```java
int grade = (3 + 4 + 5.5) / 3;
```

Die obige Fehlermeldung kann nun beim Programmieren übersteuert werden, indem
ein Casting erzwungen wird, dazu wird der Datentyp in Klammern dazwischen
geschrieben:

```java
int grade = (int) ((3 + 4 + 5.5) / 3);
```

Casting kann sichtbar machen, dass alle Buchstaben am Computer durch Zahlen
repräsentiert werden (ASCII-Tabelle u.ä.).

```java
int a = 65;
System.out.println((char)a);
```

Je nach Reihenfolge und Stelle des Castings können unterschiedliche Ergebnisse
berechnet werden, wie das folgende Beispiel zeigt (Ergebnis einmal 70, einmal
60: aber warum?):

```java
int i = (int) (20.0 * 3.5);
System.out.println("i " + i);
int j = (int) 20.0 * (int) 3.5;
System.out.println("j " + j);
```

:::tip in Eclipse ausführen!

Führt die Code-Blöcke selbst in Eclipse aus und sieht was genau für Ergebnisse
oder Fehler angezeigt werden!

:::

## Rechnen und Operatoren

[:computer: Open in Browser](pathname:///slides/operatoren) |
[:floppy_disk: download PDF](pathname:///slides/operatoren.pdf)

<iframe src="/bbzbl-modul-319/slides/operatoren" width="100%" height="400px"></iframe>

### Arithmetische `+`, `-`, `/`, `*`, `%`

Arithmetische Operatoren kennt Ihr bereits von der Mathematik. Damit lassen sich
die gängigen Mathematischen Operationen durchführen. Neu ist einzig der Rest
Operator `%`. Dieser dividiert eine Zahl und gibt den Rest zurück.

```java title="+ - / * % Arithmetische Operatoren"
int result;
int number = 9;
int anotherNumber = 3;

result = number + anotherNumber; // Addition
result = number - anotherNumber; // Subtraktion
result = number / anotherNumber; // Division
result = number * anotherNumber; // Multiplikation
result = number % anotherNumber; // Rest der Division
```

:::tip Gerade/Ungerade berechnen mit `%`

Der Rest-Operator `%` gibt bei einer division immer den Rest zurück. Wenn man
nun eine Division durch 2 durchführt lässt sich herausfinden ob eine Zahl gerade
oder ungerade ist.

```java
9 % 2  // ergibt 4 * 2 Rest 1 also ungerade
10 % 2 // ergibt 5 * 2 Rest 0 also gerade

public boolean even(int number) {
    return number % 2 == 0;
}
```

:::

### Verkürzte arithmetische Operation mit sich selbst `+=`, `-=`, `*=`, `/=`

Oft möchte man den Wert einer Variablen direkt verändern. Das Resultat also
nicht in eine neue Variable, sonder in sich selber speichern. Gegeben ist z.B.
die Variable `number` vom Typ `int` mit dem Initialwert `3`.

```java
int number = 3;
```

Möchte man dieser Variable `4` hinzuaddieren geht das folgendermassen:

```java
number = number + 4; // Addition und Zuweisung zu sich selbst
```

Da dies sehr oft vorkommt ist in allen gängigen Programmiersprachen dafür ein
kombinierten Operator vorgesehen. Es wird dem Zuweisungsoperator den
arithmetische Operator **vorangestellt**.

```java
number += 4; // Verkürzte Addition und Zuweisung zu sich selbst
```

Aus `number = number + 4;` wird somit `number += 4;` und erspart uns die
Dopplung der Variable. Dies geht natürlich auch für alle anderen arithmetischen
Operatoren.

```java
number -= 7; // Subtraktion und Zuweisung zu sich selbst
number *= 9; // Multiplikation und Zuweisung zu sich selbst
number /= 2; // Division und Zuweisung zu sich selbst
```

### Unäre (einstellige) Operatoren `++`, `--`

Noch häufiger als die verkürzte arithmetische Operation mit sich selbst wird im
Programmieren schrittweise hoch und runtergezählt **was auch Iteration genannt
wird**.

Möchte man also von 0 - 3 hochzählen geht dies so:

```java
int number = 0;
number += 1;
number += 1;
number += 1;
```

Der Unäre Operator `++` zählt der links vorangestellten Variable eines
nummerischen Typ eine 1 hinzu. Der obere Code ist somit identisch zu diesem:

```java
int number = 0;
number++;
number++;
number++;
```

:::info Unär => einstellig

Unär bedeutet einstellig, es braucht daher **nur der linke** und nicht auch
einen rechten Teil beim Operator.

:::

:::tip Iterieren durch Arrays

Der unäre Operator `++` wird insbesondere beim **Iterieren durch Arrays** wie im
folgenden Beispiel verwendet. Was gibt der obere Code wohl aus?

```java
char[] text = {'h','a','l','l','o',' ','w','e','l','t'};

// highlight-next-line
for (int i = 0; i < text.length; i++) {
    System.out.print(text[i]);
}
```

- Es wird Schrittweise jede Stelle vom Array `char[] text` in einem `for`-Loop
  ausgegeben
- Die Variable `i`, Iterator, wird durch `i++` für jeden Schritt +1 hochgezählt
- `i++` könnte auch mit `i += 1` oder `i = i + 1` ersetzt werden.
- `i++` ist jedoch viel kürzer.

:::

:::note Funfact

C++ erweitert die Programmiersprache C. Um diese Verwandtschaft ein bisschen
NERDisch Auszudrücken wurde das Wortspiel C++ gewählt. C++ ist eine weitere
Iteration von C.

:::

### Vergleichsoperatoren `==`, `!=`, `!`

Vergleichsoperatoren ergeben immer einen **boolean (true/false)**. Sie werden in
Kontrollstrukturen als Bedingungen verwendet.

<div className="grid three"><div>

```java title="== Gleichheit"
true  == true; // true
1     == 1     // true

false == true; // false
1     == 2     // false
```

</div><div>

```java title="!= Ungleichheit"
false != true; // true
1     != 2     // true

true  != true; // false
1     != 1     // false
```

</div><div>

```java title="! Negation"
!false // true
!(1 == 2) // true

!true // false
!(1 == 1) // false
```

</div></div>

Mit den numerischen Datentypen kann mit den bekannten Operatoren gerechnet
werden. Also jene die aus der Mathematik bekannt sind: `+`, `-`, `*`, `/`.

Dann gibt es noch einige Spezialfälle in Java, die Sie früher oder später kennen
lernen werden. Darum werden diese hier vorgestellt:

- `++` erhöht die Zahl um 1
- `--` reduziert die Zahl um 1

```java title="Spezial-Operatoren in Java"
int a = 1;
int b = 1;
a++; // a = a + 1;
System.out.println(a); // 1 + 1 = 2

b--; // b = b - 1
System.out.println(b); // 1 - 1 = 0
```

## :pencil: Aufgaben

<DocCardList className="pdf-exclude"/>

## :tv: Erklärvideos von Studyflix

- [Java Datentypen einfach Erklährt](https://studyflix.de/informatik/primitive-datentypen-215)
- [Java Variablen deklarieren und initialisieren](https://studyflix.de/informatik/variablen-216)
- [Ausdrücke und Operatoren in Java](https://studyflix.de/informatik/ausdrucke-und-arithmetische-operatoren-217)
- [Boolsche ausdrücke in Java](https://studyflix.de/informatik/boolesche-ausdrucke-221)
