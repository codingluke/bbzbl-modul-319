---
sidebar_position: 2
keywords:
  - pdf
---
# Deklaration und Initialisierung von Variablen

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

## :pen: A2: Datentypen initialisieren

Erstellen Sie ein Programm, in welchem Sie:

- für jeden oben definierten Datentypen eine Variable **deklarieren**
- einen passenden Wert fest **zuweisen**
- und anschliessend die Variablen **ausgeben**
  - Versucht evt. Datentypen zu verbinden!

<details>
<summary>Musterlösung</summary>

**Wo ist die Methode `main`?**

- Die Klasse mit der `main` Methode müsst Ihr selber erstellen.
- der `import` gehört ganz oben ins File.
- `...` kann man löschen ;)

```java
// deklarieren
boolean aBoolean;
byte aByte;
short aShort;
char aChar;
int aInt;
float aFloat;
long aLong;
double aDouble;
String aString;

// initialisieren
aBoolean = true;
aByte = 127;
aShort = 32767;
aChar = 'a';
aInt = 2147483647;
aFloat = 12.1234567f;
aLong = 9223372036854775807l;
aDouble = 12.123456789123456d;
aString = "Hallo ich bin ein Text";

// ausgeben
System.out.println(aBoolean);
System.out.println(aByte + aShort + aInt + aLong);
System.out.println(aFloat + aDouble);
System.out.println(aString + aBoolean);`
```

</details>

### :man_superhero: Bonusauftrag: einlesen

Sobald Sie den **obigen Auftrag abgeschlossen** haben, können Sie sich nach
Vorgabe Ihrer Lehrperson (und sofern genügend Zeit verfügbar ist) eine Variante
des Programms erstellen, bei der Sie die Werte mit dem `StdInput` von `mytools`
einlesen.

:::note nicht alle Datentypen möglich

Die Klasse `StdInput` besitzt <u>keine Methoden</u> für die Datentypen `byte`,
`short`, `long` und `float`. Diese müssen (können) also nicht eingelesen werden.

:::

<details>
<summary>Musterlösung</summary>

**Wo ist die Methode `main`?**

- Die Klasse mit der `main` Methode müsst Ihr selber erstellen.
- der `import` gehört ganz oben ins File.
- `...` kann man löschen ;)

```java
import mytools.StdInput;

...

int number;
double largeDecimalNumber;
char single;
boolean customer;
String comment;

System.out.println("Please enter a int value: ");
number = StdInput.readInt();
System.out.println("Please enter a double value: ");
largeDecimalNumber = StdInput.readDouble();
System.out.println("Please enter a char value: ");
single = StdInput.readChar();
System.out.println("Please enter a boolean value: ");
customer = StdInput.readBoolean();
System.out.println("Please enter a String value: ");
comment = StdInput.readString();

System.out.println(number);
System.out.println(largeDecimalNumber);
System.out.println(single);
System.out.println(customer);
System.out.println(comment);
```

</details>

## Deklaration von Konstanten

Sollen Variablen **nicht änderbar** sein, dann werden diese als Konstanten
bezeichnet, was durch das Schlüsselwort `final` erfolgt. Der Variablenname wird
gemäss Konvention in **GROSSBUCHSTABEN** geschrieben.

```java
   final float MWST = 7.7;
//             ^^^^ GROSSBUCHSTABEN als Konvention für Konstante
// ^^^^^ final definiert eine Konstante
```
