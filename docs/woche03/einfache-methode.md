---
sidebar_position: 2
keywords:
  - pdf
---

# 👷 Einfacher Methodenaufruf

## :dart: Ziele

- Sie können einfache Methoden erklären und anwenden.

## :pencil: Auftrag

Das folgende Beispiel zeigt einen einfachen Methodenaufruf, ohne Parameter.

Die hervorgehobenen Linien zeigen den grundsätzlichen Ablauf des Programms. Wie
bisher bekannt, wird das Programm in der `main`-Methode ausgeführt, und die
Anweisung welche dort steht, ruft die Methode `printCurrentDate` auf, die ihre
Aufgabe, das aktuelle Datum auszugeben, ausführt. Der Name ist frei gewählt!
Diese sollte beschreiben was die Mehtode macht. Da wir hier die aktuelle Zeit
ausgeben heisst diese "printCurrentDate".

- Erstellen Sie in Eclipse eine neue Klasse mit dem Namen "OutputMethodExample"
  und kopieren Sie das folgende Beispiel in die neue Datei.

```java showLineNumbers
import java.time.LocalDate ;

public class OutputMethodExample {
    public static void main(String[] args) {
        // highlight-yellow-next-line
        printCurrentDate();
    }

    public static void printCurrentDate() {
        // highlight-yellow-next-line
        System.out.println("Current date is: " + LocalDate.now());
    }
}
```

<div class="grid"><div>

**Programm starten**

- Starten Sie die Klasse durch _"Rechtsklick auf die Datein > Run As > Java
  Application"_
- Es sollte nun `Current date is: 2023-09-14` ausgegeben werden. (natürlich mit
  aktuellem Datum)

</div><div>

**Programmablauf**

1. Das Programm startet auf **Zeile 5**
2. und springt sogleich durch den Methodenaufruf `printCurrentDate();` zur
   **Zeile 9**, in den Methodenkörper von `printCurrentDate`.

</div></div>

:::info **Verwendete Schlüsselwörter noch nicht relevant**

Die Schlüsselwörter `public`, `static` und `void` müsst ihr momentan noch nicht
verstehen. Diese werden in einem späteren Zeitpunkt eingeführt.

:::
