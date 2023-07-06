# for

## Grundform

Die for Kontrollstruktur ist zuerst einmal gewöhnungsbedürftig.
Das Muster sieht so aus:

```java
for (<Zählervariable>; <Bedingung>; <Schrittweite>) {
    <Anweisungen, Sequenz>
}
```

<div class="grid three"><div>

**`<Zählervariable>`**

Die Zählervariable definiert eine Variable (meistens vom Typ `int`) welche einen
Startwert hat und nach jedem Durchlauf (Iteration) mit der Schrittweite
hochgezählt wird.

</div><div>

**`<Bedingung>`**

**Vor jeder Sequenz** wird die Bedingung geprüft, ob die die Anweisungen ausgeführt
werden sollen. Ist die Bedingung falsch (`false`) wird der Code-Block nicht
mehr Ausgeführt. Die Schlaufe wird beendet.

</div><div>

**`<Schrittweite>`**

**Nach jeder Sequenz**, vor der `<Bedingung>` wird die `<Zählervariable>` hoch oder
runter gezählt. `i++` Zählt z.B. die Variable `i` mit 1 hoch.

</div></div>

**`<Anweisungen, Sequenz>`**

Die `<Anweisungen>` im Code-Block werden Ausgeführt, solange die `<Bedingung>`
wahr (`true`) ist.

:::info Semikolon

Die 3 Teile in den Runden Klammern `()` sind mit einem Semikolon `;` getrennt!

:::

### Grundform am Beispiel

Damit es weniger abstrakt ist, hier ein Beispiel, welches die Zahlen 0 bis 4 ausgibt.
Sobald die Anweisungen innerhalb des for-Blocks abgearbeitet sind, springt die
Programmausführung bei der schliessenden geschweiften Klammer wieder zurück zum for,
verändert die Variable um die Schrittweite und prüft, ob die Bedingung noch erfüllt
ist. Wenn ja, wird die Schleife erneut ausgeführt.

```java
public class FixeWiederholung {

    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            System.out.println(i);
        }
    }

}
```

<div class="grid three"><div>

**`<Zählervariable>`**

`int i = 0`: Eine Variable `i` mit Datentyp `int` wird mit `0` initialisiert

</div><div>

**`<Bedingung>`**

`i < 5`: Solange `i` kleiner als 5 ist, wird die for-Schleife weiterhin ausgeführt

</div><div>

**`<Schrittweite>`**

`i++`: Die Variable `i` wird bei jedem Durchlauf um 1 erhöht

</div></div>

**`<Anweisungen, Sequenz>`**

Mir der Anweisung `System.out.println(i);` wird bei jeder Sequenz/Iteration
bei der die `<Bedingung>` wahr ist, die Variable `i` auf die Konsole ausgegeben.

## Programmablauf

Eine for-Schleife wird so durchlaufen, wie folgend dargestellt. Wenn die Bedingung nicht
mehr erfüllt ist, wird die Schleife beendet und es wird die erste Anweisung unterhalb der Schleife
ausgeführt (roter Pfeil).

![](./images/for-loop.png)

1. Die Bearbeitung der for-Schleife beginnt beim roten Pfeil. Es wird im
   ersten Teil die `<Zählervariable>` `i` mit 0 initialisiert.
2. Im zwieten Teil, der `<Bedingung>`, wird geprüft ob die Zählervariable
   `i` kleiner als 5 ist.
3. Da dies der Fall ist, wird nun die `<Anweisungen>` (`System.out.println(i);`)
   im Code-Block `{}` ausgeführt.
4. Danach wird "nach oben" zum letzten Teil, der `<Schrittweite>` gesprungen. Hier wird durch
   `i++` die `<Zählervariable>` `i` um 1 hochgezählt.
5. Nun wird wieder zur `<Bedingung>` gesprungen.
6. Wenn die Variable `i` immer noch kleiner als 5 ist, wird die `<Anweisung>`
   wiederholt ausgeführt.

Die Punkte 3-6 (grün), werden solange wiederholt, bis die `<Bedingung>` falsch
(`false`) und somit die Variable `i` mindestens 5 ist. Im oberen Beispiel wird das
nach der 5. Wiederholung der Fall sein.

```bash title="Ausgabe vom oberen Beispiel"
0
1
2
3
4
```

## :pencil: Aufgaben

### Auftrag 1

1. Geben Sie die Zahlen von 1 bis 10 aus.
2. Geben Sie die Zahlen von 37 bis 55 aus.
3. Geben Sie jede zweite Zahl von 18 bis 96 aus.
4. Fragen Sie den Benutzer nach Startwert, Endwert und Schrittweite und geben
   Sie die entsprechenden Zahlen aus.

### Auftrag 2a

- Schreiben Sie ein Programm, das eine Zeile mit 10 Sternen ausgibt.
- Die Sterne sollen einzeln in einer for-Schleife ausgegeben werden (also bei jedem Durchlauf
  der Schleife wird ein Stern der Zeile hinzugefügt).
- Verwenden Sie dazu die Methode `System.out.print` (und nicht System.out.println). Die Ausgabe sieht also so aus:

```bash title="Ausgabe"
**********
```

### Auftrag 2b

Erweitern Sie das obige Programm so, dass 5 Zeilen mit jeweils 10 Sternen 
ausgegeben werden. Die 5 Zeilen müssen auch in einer for-Schleife erstellt werden.
Die Ausgabe sollte also so aussehen :


```bash title="Ausgabe"
**********
**********
**********
**********
**********
```

### Auftrag 3

Schreiben Sie ein Programm Flaggen, das folgende Anforderungen erfüllt:

- die Anzahl Zeilen für die Flaggen werden vom Benutzer angegeben
- Zeile 1 enthält 1 Stern, Zeile n enthält n Sterne Die Ausgabe soll so aussehen:

```bash title="Ausgabe"
Flaggen 1
Anzahl Zeilen: 5
*
**
***
****
*****
```

### Auftrag 4

Erweitern Sie das Programm so, dass der Benutzer das Zeichen, mit dem die Flagge gezeichnet
wird, selbst festlegen kann.

Die Ausgabe soll so aussehen:

```bash title="Ausgabe"
Flaggen 2
Anzahl Zeilen: 5
Zeichen: x
x
xx
xxx
xxxx
xxxxx
```

### Auftrag 5

Erweitern Sie das Programm so, dass der Benutzer eingeben kann, wie viele Flaggen 
gezeichnet werden.

Die Ausgabe soll so aussehen:

```bash title="Ausgabe"
Flaggen 3
Anzahl Zeilen: 5
Anzahl Flaggen: 2
Zeichen: @

Flagge 1
@
@@
@@@
@@@@
@@@@@

Flagge 2
@
@@
@@@
@@@@
@@@@@
```

