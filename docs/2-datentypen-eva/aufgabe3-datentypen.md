# Datentypen, Variablen und Operatoren

Wenn Programme Daten bearbeiten, so sind diese in Variablen (änderbar) und Konstanten (nicht änderbar) gespeichert. 
Wichtig ist, dass die Variablen und Konstanten einen für die zu speichernden Daten passenden Datentyp haben.

## Deklaration, Initialisierung und der Datentyp String

Das generelle Muster, um eine Variable zu deklarieren (dem Programm bekannt machen), hat zwei Varianten. 

1. bei der Ersten wird nur die Variable zuerst mit Angabe des **Datentyps** gefolgt durch den **Variablennamen**, deklariert
2. bei der Zweiten Variante wird zugleich ein Wert durch den **Zuweisungsoperator** `=` zugewiesen.
    - damit wird die Variable deklariert und direkt initialisiert. 

```java
String favoriteColor;          // Variante 1 Deklaration: 
String favoriteColor = "blue"; // Variante 2 Deklaration + Initialisierung: 
```


## Übersicht über die (primitiven) Datentypen

In Java gibt es eine beachtliche Anzahl an Datentypen gemäss folgender Tabelle. 
Vorerst nutzen wir die _primitiven_ Datentypen, gemäss der Spalte ganz links.

Datentyp | Grösse | Beschreibung
-- | -- | --
boolean | 1 bit | Stores true or false values
byte | 1 byte | Stores whole numbers from -128 to 127
short | 2 bytes | Stores whole numbers from -32,768 to 32,767
char | 2 bytes | a Stores a single character/letter or ASCII values
int | 4 bytes | Stores whole numbers from -2,147,483,648 to 2,147,483,647
float | 4 bytes | Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits
long | 8 bytes | Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
double | 8 bytes | Stores fractional numbers. Sufficient for storing 15 decimal digits



```java title="Initialisierung"
// Datentyp  Variablenname  Semikolon (Leerzeichen nur zur Übersicht!)
int          number         ;
char         sign           ;
...

// Datentyp  Variablenname  Zuweiseoperator   Wert  Semikolon 
int          number         =                 5     ;
char         sign           =                 'c'   ;
...
```

## `LocalDate` für Datumswerte

Mit der Klasse `java.time.LocalDate` lassen sich Datumswerte speichern resp. das aktuelle Datum erzeugen, wie nachfolgendes Beispiel zeigt:

```java
LocalDate d = LocalDate.now();
System.out.println(d);
```

## Datentypen konvertieren, Casting

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

## Konstanten

Sollen Variablen nicht änderbar sein, dann werden diese als Konstanten bezeichnet, was durch das Schlüsselwort `final` erfolgt. Der Variablenname wird gemäss Konvention in GROSSBUCHSTABEN geschrieben:

```java
final float MWST = 7.7;
```

## Rechnen und Operatoren

Mit den numerischen Datentypen kann mit den bekannten Operatoren gerechnet werden. Also jene die aus der Mathematik bekannt sind: `+`, `-`, `*`, `/`.

Dann gibt es noch einige Spezialfälle in Java, die Sie früher oder später kennen lernen werden. Darum werden diese hier vorgestellt, ++ erhöht die Zahl um 1, -- reduziert die Zahl um 1:

```java
int a = 1;
int b = 1;
a++;
System.out.println(a);
b--;
System.out.println(b);
```

## Zusammenführen von Strings, Zahlen, etc.

Bei Ausgaben auf der Console können String-Werte miteinander oder mit numerischen Werten durch das `+`-Zeichen zu einer Zeichenfolge z.B. für die Ausgabe mit `System.out.println` kombiniert werden.

Beispiel:

```java
System.out.println("Ihre Geschwindigkeit " + 21);
System.out.println("Ihre Geschwindigkeit ".append(21));
```

## :pencil: Auftrag 1

Bestimmen Sie die Datentypen für die folgenden Werte:

```
11.39    .................................

‘b‘      .................................

37       .................................

true     .................................

"Hello"  .................................
```

## :pencil: Auftrag 2

Erstellen Sie ein Programm, in welchem Sie 

- für jeden Datentypen eine Variable **deklarieren**
- einen passenden Wert fest **zuweisen** 
- und anschliessend die Variablen **ausgeben**

## :pencil: Auftrag 3

Sobald Sie den obigen Auftrag 2 abgeschlossen haben, können Sie sich nach Vorgabe Ihrer Lehrperson (und sofern genügend Zeit verfügbar ist) eine Variante des Programms erstellen, bei der Sie die Werte mit dem `StdInput` von `mytools` **einlesen**.

## :pencil: Auftrag 4

Erstellen Sie ein Programm, welches vom Benutzer 
- drei Semesternoten einliest
- den Durchschnitt berechnet
- sich dabei an ein strenges Notensystem hält, dass nur ganze Noten zulässt und immer abrundet. 
- den Durchschnitt ausgiebt

:::note
Anhand dieser Übung erkennen Sie, dass man mit Variablen und Zahlen ganz normal rechnen kann.
:::
