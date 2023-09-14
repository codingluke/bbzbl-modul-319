---
sidebar_position: 1
keywords:
  - pdf
---

# Einfacher Methodenaufruf

Das folgende Beispiel zeigt einen einfachen Methodenaufruf, ohne Parameter.

Die hervorgehobenen Linien zeigen den grundsätzlichen Ablauf des Programms. Wie
bisher bekannt, wird das Programm in der `main`-Methode ausgeführt, und die
Anweisung welche dort steht, ruft die Methode `printCurrentDate` auf, die ihre
Aufgabe, das aktuelle Datum auszugeben, ausführt.

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

- Das Programm startet auf **Zeile 5**
- und springt sogleich durch den Methodenaufruf `printCurrentDate();` zur
  **Zeile 9**, in den Methodenkörper von `printCurrentDate`.
  - Auf Zeile 8 wird die Mehtode definiert, auf Zeile 9 fängt der Code an der
    Ausgeführt wird.
- der Name "printCurrentDate" ist frei gewählt! Diese sollte beschreiben was die
  Mehtode macht. Da wir hier die aktuelle Zeit ausgeben heisst diese
  `printCurrentDate`.

:::info Verwendete Schlüsselwörter

Die Schlüsselwörter `public`, `static` und `void` müsst ihr momentan noch nicht
verstehen. Diese werden in einem späteren Zeitpunkt eingeführt.

:::
