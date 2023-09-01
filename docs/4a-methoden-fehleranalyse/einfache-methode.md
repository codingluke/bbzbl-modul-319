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

```java
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

## Verwendete Schlüsselwörter

### `public`: Sichtbarkeit

An erster Stelle wird die Sichtbarkeit definiert. Die Methode wird `public`
definiert und ist somit von überall aus sichtbar.

- `public` für alle sichtbar
- `private` nur für die entsprechende Klasse selbst sichtbar
- `nicht-angegeben` im eigenen Modul sichtbar (**nie leer lassen bitte!**)

:::info Vorderhand genügt es, wenn alle Methoden **public** sind.

:::

### `static`: Art (Optional)

An zweiter Stelle steht `static`. Dies muss so sein, da die Methode von der
ebenfalls statischen `main`-Mehtode aus aufgerufen wird.

- Das Schlüsselwort `static` ist **Optional**! Wenn nicht vorhanden ist die
  Methode immer dynamisch.
- Dieses Schlüsselwort kennzeichnet Variablen und Methoden welche direkt der
  Klasse und nicht der Instanz zugewiesen sind.
- Was dies genau bedeutet wird erst im Folgemodul relevant.
- Relevant ist, dass Methoden die `static` sind, nur andere Methoden, welche
  auch `static` sind aufrufen können.
  - Da `main` static ist, müssen alle Methoden in diesem Modul auch statisch
    sein.

### `void`: Rückgabewert

An dritter stelle wird durch `void` angegeben, dass diese Methode keinen
Rückgabewert besitzt. Dadurch braucht die Methode auch kein `return` Befehl.

:::note

Wäre `static` weggelasse würde `void` an zweiter Stelle stehen.

- `void` bedeutet, dass die Methode keinen Rückgabewert besitzt
- Steht ein Datentyp wie z.B. `int`, `String`, muss die Methode diesen Datentyp
  durch das Schlüsselwort `return` zurückgeben.
- **Sie lernen Parameter und Rückgabewerte später im Detail**

:::
