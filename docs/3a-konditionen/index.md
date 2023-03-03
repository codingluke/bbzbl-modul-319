# 3a - Bedingungen: if / switch

Mit `if` und `switch` können Sie auf unterschiedliche Werte in Ihren Variablen unterschiedlich, **spezifisch reagieren**.

:::info Ziele

- Sie können die if Kontrollstruktur erklären und anwenden, indem Sie auch mit Operatoren und boolean-Werten umgehen können.
- Sie können die switch Kontrollstruktur nutzen, um effizienter auf eine kleinere Anzahl unterschiedlicher Werte reagieren zu können als mit einem if.

:::

## if - Kontrollstruktur

Mit dem Schlüsselwort **if** _(engl. falls)_ in Kombination mit dem **Datentyp boolean** können Programme erstellt werden, die abhängig von Benutzereingaben oder Variablenwerten unterschiedlich reagieren.

### `if`-Struktur

Eine Struktur mit einem if sieht so aus, wie im nächsten Auszug dargestellt. 

- Die Anweisungen sind eine Folge von Programm-Befehlen. 
- Nur der erste Block ist zwingend, und zwar von `if` bis zur ersten schliessenden geschweiften Klammer. 
- Die beiden nächsten in türkis (`else-if`) und grau (`else`) unterlegten Blöcke können auch noch mehrfach wiederholt folgen, aber können nie alleine stehen. 
- Das türkis unterlegte, <u>optionale</u> `else if` dient dazu, in einem if-Ausdruck noch weitere Prüfungen vorzunehmen. 
- Grau unterlegte ist der <u>optionale</u> `else`-Abschnitt, der in allen zu anderen Auswertungen passenden fällen ausgeführt wird.

```java
if (/* Bedingung1 */) { 
    /* Code-Anweisung welche ausgeführt wird, 
       falls die Bedingung1 wahr, also true ist. */
} else if (/* Bedingung2 */) { 
    /* Code-Anweisung welche ausgeführt wird, falls die 
       Bedingung1 falsch, die Bedingung2 aber wahr ist */
} else { // Optionaler block 
    /* Code-Anweisung welche ausgeführt wird, falls die 
       Bedingung1 sowie auch die Bedingung2 falsch sind */
}
```


