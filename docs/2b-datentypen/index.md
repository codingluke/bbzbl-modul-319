# 2b - Datentypen & Variablen

Wenn Programme Daten bearbeiten, so sind diese in **Variablen (änderbar)** und **Konstanten (nicht änderbar)** gespeichert. Die Variablen und Konstanten besitzen einen Namen sowie einen für die zu speichernden Daten passenden **Datentyp**.

:::info Ziele

- Sie kennen die primitiven Datentypen und den höheren Datentyp String
- Sie können diese als Variablen in Programmen nutzen.

:::


## Deklaration und Initialisierung von Variablen

Das generelle Muster _(die Syntax)_, um eine Variable zu deklarieren _(dem Programm bekannt machen)_, hat zwei Varianten. Die Variable kann "nur" deklariert oder aber sogleich mit einem entsprechenden Wert initialisiert werden.

1. bei der Ersten Variante wird die Variable durch Angabe des **Datentyps gefolgt vom Variablennamen**, <u>deklariert</u>

   ```java
   char favoriteSign; // Variante 1 Deklaration: Variable ohne Wert
   ```

2. die Zweiten Variante **ergänzt die Erste Variante** mit einem Wert welcher durch den **Zuweisungsoperator** `=` zugewiesen wird. Damit wird die Variable <u>deklariert und direkt initialisiert</u>.

   ```java
   char favoriteSign = 'b'; // Variante 2 Deklaration + Initialisierung:
   ```

:::note 

Wir verwenden in den Beispielen der Datentyp `char`, das Muster ist jedoch für alle Datentypen gleich. Die Ausnahme ist der Wert, der pro Datentyp anders ist.

:::

## Deklaration von Konstanten

Sollen Variablen **nicht änderbar** sein, dann werden diese als Konstanten bezeichnet, was durch das Schlüsselwort `final` erfolgt. Der Variablenname wird gemäss Konvention in **GROSSBUCHSTABEN** geschrieben:

```java
   final float MWST = 7.7;
// ^^^^^       ^^^^ GROSSBUCHSTABEN als Konvention für Konstante
// final definiert eine Konstante
```


## _Primitive_ Datentypen

In Java gibt es eine beachtliche Anzahl an Datentypen gemäss folgender Tabelle.
Vorerst nutzen wir die _primitiven_ Datentypen. Diese sind erkennbar, indem der **Datentyp kleingeschrieben** ist.

| Datentyp | Grösse  | Beschreibung                                                                              | Spezifika
| ---      | ---     | ---                                                                                       | ---
| boolean  | 1 bit   | Speichert `true` _(wahr)_ oder `false` _(falsch)_ Werte                                   |
| byte     | 1 byte  | Speichert ganze Zahlen von `-128` bis `127`                                               |
| short    | 2 bytes | Speichert ganze Zahlen von `-32'768` bis `32'767`                                         |
| char     | 2 bytes | Speichert ein einzelnes Zeichen oder [ASCII]                                              | `''`
| int      | 4 bytes | Speichert ganze Zahlen `-2'147'483'648` bis `2'147'483'647`                               |
| float    | 4 bytes | Speichert Gleitkommazahlen von `6` bis `7` Dezimalstellen                                 | `f`
| long     | 8 bytes | Speichert ganze Zahlen von `-9'223'372'036'854'775'808l` bis `9'223'372'036'854'775'807l` | `l`
| double   | 8 bytes | Speichert Gleitkommazahlen von `15` Dezimalstellen                                        | `d`

[ASCII]: https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange

### Initialisierung

Beispiele, wie Variablen initialisiert werden können. Die Leerzeichen dienen nur der Übersichtlichkeit.

```java title="Deklarierung von Variablen"
// Datentyp     Variablenname  Semikolon
   int          number         ;
   char         sign           ;
   ...
```

Die Initialisierung der Werte verwendet spezifische Zeichen für die verscheidenen Datentypen. So endet ein `float`-Wert immer mit `f` oder `long` mit `l`. Die Spezifikas pro Datentyp finden Sie in der Tabelle oberhalb unter "Spezifika".

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

Früher hatte man wehnig Speicher zur Verfügung und hat immer abgewägt, welchen Datentyp verwendet werden soll. Heute nimmt man für gewöhnlich einfach den Grössten.

- Dies verkleinert die Liste auf folgende vier: `boolean`, `long`, `double` und `char`.
- Für den Test müsst ihr trotzdem alle kennen :yum:

:::

## _Höhere_ Datentypen

_Höhere_ Datentypen bauen auf den _primitiven_ Datentypen auf. Es handelt sich bei diesen auch um Objekte. 

:::info Abgrenzung

- Was genau Objekte sind müsst Ihr noch nicht verstehen.
- Ihr solltet in dem Modul den Datentyp `String` anwenden können.

:::

## Der Datentyp `String`

Der Datentyp `String` **dient zur Speicherung von Zeichenfolgen**, also allgemeiner Text. Der Text muss immer zwischen zwei **"doppelten Anführungszeichen"** gestellt werden.

| Datentyp | Grösse             | Beschreibung              | Spezifika
| ---      | ---                | ---                       | ---
| String   | 2 byte pro Zeichen | Speichert beliebigen Text | `""`

### Strings initialisieren

```java
// Datentyp     Variablenname  Zuweiseoperator   Wert   Semikolon
   String       zeichenFolge   =                 "abc"  ;
//                                               ^   ^
//                                   "doppelten Anführungszeichen"
```

### Strings zusammensetzen

Mehrere Variablen vom Datentyp `String` können durch ein Plus-Zeichen `+` zusammengesetzt werden. Dabei sollte man darauf achten, dass der erste Text mit einem Leerzeichen enden soll. Wieso, sieht ihr im Beispiel:

```java title="Mit + Strings zusammensetzen"
String name = "Mr Robot";
System.out.println("Your name is " + name);
//                              ^ Leerzeichen!
//                  Your name is Mr Robot

System.out.println("Your name is" + name);
//                  Your name isMr Robot
```

:::note Höhere Datentypen sind Grossgeschrieben

- `String` ist Gross geschrieben, da es sich um einen _höheren_ Datentyp handelt.
- Ein `String` baut auf dem _primitiven_ Datentyp `char` auf _(:bulb: daher höher)_ 
  - Evt. Hilft die Analogie von "Atome (primitiv)" zu "Moleküle (höher)".
- _Höhere_ Datentypen sind auch Objekte.
  - Was Objekte genau sind, erfahrt ihr im Folgemodul 404 und ist noch nicht relevant!

:::

### Strings mit Zahlen zusammensetzen 

Strings können auch mit allen _primitiven_ Datentypen, also auch mit numerischen Werten, durch das Plus-Zeichen `+` zu einer Zeichenfolge kombiniert werden. Der _primitive_ Datentyp wird dadurch automatisch zu einem String!

```java title="String mit Zahlen kombinieren"
System.out.println("Ihre Geschwindigkeit lautet " + 21);
//                  Ihre Geschwindigkeit lautet 21 
```

:::tip Eine Zahl in einen String umwandeln

Werden Zahlen mit einem **leeren String ""** konkatiniert, wird die Zahl alleine in einen String umgewandelt. Dies ist ein gängiger Java "Hack".

```java title="Zahl in String umwandeln"
String zahl = "" + 21;
// zahl ist nun "21"
```
:::

## Der Datentyp `LocalDate` für Datumswerte

Mit der Klasse `java.time.LocalDate` lassen sich Datumswerte speichern resp. das aktuelle Datum erzeugen, wie nachfolgendes Beispiel zeigt:

```java title="Momentane Zeit (jetzt, now) ausgeben"
LocalDate d = LocalDate.now();
System.out.println(d);
```

## Datentypen konvertieren (Casting)

Manchmal muss man oder will den aktuellen Datentypen ändern, und Daten in einen anderen Datentyp konvertieren. In manchen Fällen ist das unproblematisch, wie hier, da Java ermitteln kann, dass kein Genauigkeitsverlust auftritt:

```java
int smallNumber = 123;
long convertedSmallNumber = smallNumber;
```

In anderen Fällen wird die Entwicklungsumgebung hingegen eine Fehlermeldung anzeigen, wie hier:

```java
long bigNumber = 1112223334445566L;
int convertedBigNumber = bigNumber;
```

In wieder anderen Fällen, werden Sie Berechnungen programmieren, deren Ergebnis ganzzahlig sein muss. Angenommen ein strenges Notensystem liesse nur ganze, abgerundetee Modulnoten zu, während diese den Semestertests mit Zehntelsnoten berechnet werden, dann könnte Eclipse darauf hinweisen, dass folgende Zuweisung ungültig ist.

```java
int grade = (3 + 4 + 5.5) / 3;
```

Die obige Fehlermeldung kann nun beim Programmieren übersteuert werden, indem ein Casting erzwungen wird, dazu wird der Datentyp in Klammern dazwischen geschrieben:

```java
int grade = (int) ((3 + 4 + 5.5) / 3);
```

Casting kann sichtbar machen, dass alle Buchstaben am Computer durch Zahlen repräsentiert werden (ASCII-Tabelle u.ä.).

```java
int a = 65;
System.out.println((char)a);
```

Je nach Reihenfolge und Stelle des Castings können unterschiedliche Ergebnisse berechnet werden, wie das folgende Beispiel zeigt (Ergebnis einmal 70, einmal 60: aber warum?):

```java
int i = (int) (20.0 * 3.5);
System.out.println("i " + i);
int j = (int) 20.0 * (int) 3.5;
System.out.println("j " + j);
```

:::tip in Eclipse ausführen!

Führt die Code-Blöcke selbst in Eclipse aus und sieht was genau für Ergebnisse oder Fehler angezeigt werden!

:::

## Rechnen und Operatoren

Mit den numerischen Datentypen kann mit den bekannten Operatoren gerechnet werden. Also jene die aus der Mathematik bekannt sind: `+`, `-`, `*`, `/`.

Dann gibt es noch einige Spezialfälle in Java, die Sie früher oder später kennen lernen werden. Darum werden diese hier vorgestellt:

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

## :tv: Erklärvideos von Studyflix

- [Java Datentypen einfach Erklährt](https://studyflix.de/informatik/primitive-datentypen-215)
- [Java Variablen deklarieren und initialisieren](https://studyflix.de/informatik/variablen-216)
- [Ausdrücke und Operatoren in Java](https://studyflix.de/informatik/ausdrucke-und-arithmetische-operatoren-217)
- [Boolsche ausdrücke in Java](https://studyflix.de/informatik/boolesche-ausdrucke-221 )

## :pencil: Aufgaben

<DocCardList />

