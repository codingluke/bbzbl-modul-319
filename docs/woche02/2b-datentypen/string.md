---
sidebar_position: 3
keywords:
  - pdf
---
# Der Datentyp `String`

Der Datentyp `String` **dient zur Speicherung von Zeichenfolgen**, also
allgemeiner Text. Der Text muss immer zwischen zwei **"doppelten
Anführungszeichen"** gestellt werden.

Wir haben ja bereits zusammen die Aufgabe [:pen: A2: Text mit `StdInput` einlesen](/docs/woche02/2a-eva/aufgabe1-bibliothek-einbinden.md#pen-a2-text-mit-stdinput-einlesen) zusammen bearbeitet. Hier ist nun zusätzliche Theorie zum Datentyp `String`.

| Datentyp | Grösse             | Beschreibung              | Spezifika |
| -------- | ------------------ | ------------------------- | --------- |
| String   | 2 byte pro Zeichen | Speichert beliebigen Text | `""`      |


## Strings initialisieren

```java
// Datentyp     Variablenname  Zuweiseoperator   Wert   Semikolon
   String       zeichenFolge   =                 "abc"  ;
//                                               ^   ^
//                                   "doppelten Anführungszeichen"
```

## Strings zusammensetzen

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

## Strings mit Zahlen zusammensetzen

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
