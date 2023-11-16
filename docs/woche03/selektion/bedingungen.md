---
sidebar_position: 3
keywords:
  - pdf
---

# 📖 Bedingungen

Bedingungen sind Code-Ausdrücke, welche entweder wahr (`true`) oder falsch
(`false`) sein können. Diese werden mit dem Datentyp `boolean` ausgedrückt und
sind **elementar für die
[`if`-Selektion](/docs/woche03/selektion/if-selektion)** um zu
entscheiden, welcher Codeblock genau ausgeführt werden soll.

:::caution Ohne Vergleichsoperatoren keine Bedingungen

Bedingungen werden mit
[⚖️ Vergleichsoperatoren](/docs/woche02/operatoren.md#️-vergleichsoperatoren)
definiert. Machen Sie sich mit diesen Vertraut.

:::

Beispielsweise könnte eine Kassensoftware Kunden, die für mehr als 100 CHF
einkaufen einen Rabatt von 10% einräumen. Dies sieht dann so aus:

```java
if (amount > 100) { // Boolsher Ausdruck direkt in der if-Kontrollstruktur
    amount = amount * 0.9; // 10% discount
}
```

Stattdessen könnte man auch eine **Variable** `boolean giveDiscount` (gebe
Rabatt) einführen. Dies hat den Vorteil, dass ein guter Variabelname direkt
beschreibt was gemacht wird. Dies würde dann so aussehen:

```java
boolean giveDiscount = amount > 100;

if (giveDiscount) { // Variable vom Datentyp `boolean` in der if-Kontrollstruktur
    amount = amount * 0.9; // 10% discount
}
```

<details>
<summary>Weitere Beispiele</summary>

Hier noch mehr Beispiele wie Boolshe Ausdrücke in boolean Variablen gespeichert
und verwendet werden können. Laut Konvention beginnen diese Variablennamen mit
`is` _(zu Deutsch "ist")_.

```java title="Beispiel Bool'she Ausdrücke in Variablen"
// mit int
int age = 21;                // gegeben ist eine int Variable
boolean is21    = age == 21; // true
boolean isNot21 = age != 21; // false, oder !is21
boolean isAdult = age >= 18; // true
boolean isChild = age <= 18; // false

// Diese Variablen können nun in der if-Kontrollstruktur als Bedingung verwendet werden
if (is21) {
    System.out.println("Das alter ist genau 21");
} else if (isAdult) {
    System.out.println("Es handelt sich um eine erwachsene Person");
}
```

</details>

## Kombination von Bedingungen und Wahrheitswerten

Manchmal müssen mehrere Bedingungen kombiniert werden. Dies kann mit einem
logischen UND (`&&`) sein oder mit einem logischen ODER (`||`). Nur wie stellt
man dies in Java dar?

| Java | Beduetung      | Beschreibung                         |
| :--- | :------------- | :----------------------------------- |
| &&   | Logisches UND  | alle Werte müssen `true` sein        |
| \|\| | Logisches ODER | mindestens ein Wert muss `true` sein |

<div className="grid"><div>

```java title="Beispiel: ODER"
if (amount < 100 || age < 18) {
    amount = amount * 0.9d;
}
```

</div><div>

```java title="Beispiel: UND"
if (amount < 100 && age < 18) {
    amount = amount * 0.9d;
}
```

</div></div>

<details>
<summary>Wahrheitstabellen</summary>

<div className="grid"><div>

Beim logischen **UND**, `&&`, müssen beide, rsp. **alle Werte `true`** sein.
Sobald ein false auftritt, ist alles false:

| Kombination    | Resultat |
| :------------- | :------- |
| true && true   | true     |
| true && false  | false    |
| false && false | false    |

Rabatt für Einkäufe über 100 CHF UND Kunden jünger als 18 Jahre:

</div><div>

Beim logischen **ODER**, `||`, muss **mindestens ein Wert `true`** sein. Sobald
ein `true` auftritt, ist alles `true`:

| Kombination      | Resultat |
| :--------------- | :------- |
| true \|\| true   | true     |
| true \|\| false  | true     |
| false \|\| false | false    |

Rabatt für Einkäufe über 100 CHF ODER Kunden jünger als 18 Jahre:

</div></div>

</details>

:::tip

Die beiden senkrechten Striche werden auf CH-PC-Tastaturen häufig mit
`ALT-GR plus Taste 7` erzeugt (auf der Taste ist das meist mit einem
gelegentlich noch unterbrochen vertikalen Strich dargestellt).

:::
