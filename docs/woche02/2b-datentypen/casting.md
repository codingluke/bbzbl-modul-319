# Datentypen konvertieren (Casting)

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
// highlight-red-next-line
int convertedBigNumber = bigNumber; // Achtung möglicher Datenverlust!
```

In wieder anderen Fällen, werden Sie Berechnungen programmieren, deren Ergebnis
ganzzahlig sein muss. Angenommen ein strenges Notensystem liesse nur ganze,
abgerundete Modulnoten zu, während diese den Semestertests mit Zehntelsnoten
berechnet werden, dann könnte Eclipse darauf hinweisen, dass folgende Zuweisung
ungültig ist.

```java
// highlight-red-next-line
int grade = (3 + 4 + 5.5) / 3; // int erlaubt keine Gleitkommazahlen
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

## :pen: A3: Datentypen konvertieren

Je nach Reihenfolge und Stelle des Castings können unterschiedliche Ergebnisse
berechnet werden, wie das folgende Beispiel zeigt. Das Ergebnis ist einmal 70
und ein andermal 60.

- Kopieren Sie diesen Code in eine Klasse, führen Sie Ihn aus.
- Spielen Sie damit und versuchen zu ergründen wieso dies so ist.

```java
int result1 = (int) (20.0 * 3.5);
System.out.println("result1: " + result1);
// output: 70
int result2 = (int) 20.0 * (int) 3.5;
System.out.println("result2 " + result2);
// output: 60
```

<details>
<summary>Musterlösung:</summary>

- Beim `result1` wird mit höherem Detailgrad gerechnet und erst das Resultat von
  `float` nach `int` konvertiert. Es wird also mit `3.5` gerechnet.
- Beim `result2` wird die `3.5` vor dem Rechnen zu einer `3` abgerundet. Dies
  führt zu einem kleineren Endresultat.

</details>

:::warning Errors bei Genauigkeitsverlust

Casting ist immer dann nötig, wenn vom einem Datentyp der mehr Genauigkeit
besitzt (`long`, `double`) zu einem Datentyp der weniger Genauigkeit besitzt,
konvertiert werden soll (`int`, `float`).

Mit Casting kann man sozusagen bewusst entscheiden, dass der Datenverlust
hingenommen oder gar erwünscht ist.

- :bulb: Wird aber z.B. `int` zu `long` konvertiert, hat Java kein Problem damit.

:::
