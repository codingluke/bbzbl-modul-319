---
sidebar_position: 1
keywords:
  - pdf
---

# if - Kontrollstruktur

Mit dem Schlüsselwort **if** _(engl. falls)_ in Kombination mit dem **Datentyp
boolean** können Programme erstellt werden, die abhängig von Benutzereingaben
oder Variablenwerten unterschiedlich reagieren.

## `if`-Anatomie

Eine Kontrollstruktur mit einem `if` sieht so aus, wie im nächsten **formellen
Beispiel** dargestellt. Es folgt ein **praktisches Beispiel** um es zu
veranschaulichen.

### Formelles Beispiel

Hier ist nun eine `if-Kontrollstruktur` mit drei möglichen Codeblock Anweisungen
dargestellt. Im laufenden Programm wird immer nur eine der Anweisungen
ausgeführt. Dies ermöglicht es dynamisch auf die Benutzereingabe zu reagieren
indem je nach Eingabe einen anderen Code ausgeführt wird.

Die Bezeichnungen `<Bedingung>` und `<Anweisung>` dienen als **Platzhalter**.
Sie sind sogenannter Pseudocode und somit **nicht korrekter Java-Code**. Im
späteren praktischen Beispiel werden diese mit korrektem Java-Code ersetzt.

<div className="grid"><div>

**Aufbau einer if-Kontrollstruktur**

```java
// highlight-start
if (<Bedingung1>) {
    <Anweisung1>
}
// highlight-end
// highlight-green-start
else if (<Bedingung2>) { // Optionaler Block
    <Anweisung2>
}
// highlight-green-end
// highlight-blue-start
else {                  // Optionaler Block
    <Anweisung3>
}
// highlight-blue-end
```

</div><div>

**Flow Diagram einer if-Kontrollstruktur**

```mermaid
flowchart TD
    C{if-Kontrollstruktur}
    C -->|"if\n< Bedingung1 >"| D["< Anweisung1 >"]
    C -->|"else if\n< Bedingung2 >"| E["< Anweisung2 >"]
    C -->|else| F["< Anweisung3 >"]

    style E fill:#00A17020,stroke:#00A17080,stroke-width:2px
    style F fill:#0072B520,stroke:#0072B580,stroke-width:2px
```

</div></div>

<div className="theme-code-block-highlighted-line">

1. Der erste Block `if (<Bedingung1>) { <Anweisung1> }`
   - ist zwingend
   - und zwar von `if` bis zur ersten schliessenden geschweiften Klammer.

</div>

<div className="code-block-green-line">

2. Der nächste Block `else if (<Bedingung2>) { <Anweisung2> }`
   - ist <u>optional</u>
   - kann auch noch mehrfach wiederholt folgen
   - kann nie alleine stehen _(nie ohne vorausgehender `if`-Block)_
   - wird ausgeführt, sofern die Bedingung vom vorausgehendem `if` oder
     `else if` Block **false** war

</div>

<div className="code-block-blue-line">

3. Der letzte Block `else { <Anweisung3> }`
   - ist <u>optional</u>
   - besitzt keine Bedingung
   - darf <u>nur ein Mal</u> vorkommen, und zwar <u>ganz am Schluss</u>
   - wird ausgeführt wenn kein anderer Block ausgeführt wurde

</div>

**Erläuterung**

1. Wenn die `<Bedingung1>` `wahr` ist, wird <u>nur</u> die `<Anweisung1>`
   ausgeführt.
2. Wenn die `<Bedingung1>` `falsch` <u>und</u> die `<Bedingung2>` `wahr` ist,
   wird <u>nur</u> die `<Anweisung2>` ausgeführt.
3. Wenn die `<Bedingung1>` `falsch` <u>und</u> die `<Bedingung2>` `falsch` ist,
   wird <u>nur</u> die `<Anweisung3>` ausgeführt.

:::tip

Es wird immer nur <u>ein Anweisungs-Block</u> pro `if`-Kontrollstruktur
ausgeführt!

:::

:::tip Klammern

Die Buchhaltung mit Klammern wird nun wichtiger, und auch eine schöne
Formatierung des Programms hilft Strukturen und Zusammenhänge richtig zu
erkennen.

In eclipse gibt es den Shortcut `Ctrl + Shift + F`. Damit können Sie Ihren
Sourcecode automatisch formatieren lassen.

:::

### Praktisches Beispiel

Im praktischen Beispiel wollen wir herausfinden ob es sich um ein Kind,
Jugendlicher oder Erwachsener handelt. Dazu existiert eine Variable `int age` in
der das Alter gespeichert ist. In der if-Kontrollstruktur wird nun das Alter
geprüft und je nach Situation in die Console geschrieben ob es sich um ein Kind,
Jugendlicher oder Erwachsener handelt.

<div className="grid"><div>

**Programmcode**

```java showLineNumbers
// highlight-green-next-line
int age = 14;

if (age < 12) {
    System.out.println("Hallo Kind");
}
// highlight-green-start
else if (age < 18) {
    System.out.println("Hallo Jugendlicher");
}
// highlight-green-end
else {
    System.out.println("Hallo Erwachsener");
}
```

:::tip

Die Variable `int age` könnte nun auch von der Konsole eingelesen werden und
somit "dynamisch" sein. Dann macht die Kondition auch mehr Sinn!

:::

</div><div>

**Flussdiagramm**

```mermaid
flowchart TD
    A[int age] -->|14| B{if-Kontrollstruktur}
    B -->|"if (age < 12)"| D[Hallo Kind]
    B -->|"else if (age < 18)"| E[Hallo Jugendlicher]
    B -->|else| F[Hallo Erwachsener]

    style A fill:#00A17020,stroke:#00A17080,stroke-width:2px
    style B fill:#00A17020,stroke:#00A17080,stroke-width:2px
    style E fill:#00A17020,stroke:#00A17080,stroke-width:2px
```

</div></div>

**Erläuterung**

1. Es existiert eine Variable _age_ vom Typ `int` mit dem Wert `14`
2. Die `if`-Block Bedingung **_(Linie 3)_ wir ausgeführt**
   - Die Bedingung prüft ob es sich um ein Kind handelt, also kleiner als 12 ist
   - Da der Wert von _age_ `14` ist, ist der `boolean` der Prüfung `false`, also
     falsch
   - Der Code-Block **_(Linie 4)_ wird übersprungen**
3. Die `else if` Bedingung _(Linie 6)_ wird nun ausgeführt
   - Es wird geprüft ob der Wert von `age` kleiner als 18 ist.
   - Da der Wert 14 kleiner als 18 ist, ist der `boolean` der **Prüfung `true`,
     also richtig**
   - Der **`else if`-Block _(Linie 7)_ wird ausgeführt**.
4. Da eine Bedingung `true` war, wird der **`else`-Block _(Linie 10)_
   übersprungen!**

## Bedingungen, Boolshe Ausdrücke, Typ `boolean`

Aber was ist eine Bedingung?

Bedingungen sind Code-Ausdrücke, welche entweder wahr (`true`) oder falsch
(`false`) sein können. Diese werden mit dem Datentyp `boolean` ausgedrückt und
sind elementar für die `if`-Kontrollstruktur um zu entscheiden, welcher
Codeblock genau ausgeführt werden soll.

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

### Kombination von Bedingungen und Wahrheitswerten

Manchmal müssen mehrere Bedingungen kombiniert werden. Dies kann mit einem
logischen UND (`&&`) sein oder mit einem logischen ODER (`||`). Nur wie stellt
man dies in Java dar?

| Logischer Ausruck | Beduetung      | Beschreibung                         |
| :---------------- | :------------- | :----------------------------------- |
| &&                | Logisches UND  | alle Werte müssen `true` sein        |
| \|\|              | Logisches ODER | mindestens ein Wert muss `true` sein |

<div className="grid"><div>

Beim logischen **UND**, `&&`, müssen beide, rsp. **alle Werte `true`** sein.
Sobald ein false auftritt, ist alles false:

| Kombination    | Resultat |
| :------------- | :------- |
| true && true   | true     |
| true && false  | false    |
| false && false | false    |

Rabatt für Einkäufe über 100 CHF UND Kunden jünger als 18 Jahre:

```java title="Beispiel: UND"
if (amount < 100 && age < 18) {
    amount = amount * 0.9d;
}
```

</div><div>

Beim logischen **ODER**, `||`, muss **mindestens ein Wert `true`** sein. Sobald
ein `true` auftritt, ist alles `true`:

| Kombination      | Resultat |
| :--------------- | :------- |
| true \|\| true   | true     |
| true \|\| false  | true     |
| false \|\| false | false    |

Rabatt für Einkäufe über 100 CHF ODER Kunden jünger als 18 Jahre:

```java title="Beispiel: ODER"
if (amount < 100 || age < 18) {
    amount = amount * 0.9d;
}
```

</div></div>

:::tip

Die beiden senkrechten Striche werden auf CH-PC-Tastaturen häufig mit
`ALT-GR plus Taste 7` erzeugt (auf der Taste ist das meist mit einem
gelegentlich noch unterbrochen vertikalen Strich dargestellt).

:::

## Vergleichsoperatoren

In den obigen Beispielen wurden bereits einige Vergleichsoperatoren verwendet.
Unter anderem folgende sechs Vergleichsoperatoren stehen zur Verfügung: `<`,
`<=`, `>`, `>=`, `==`, `!=`. Zusätzlich existiert die Methode `equals` für
Strings.

| Operator | Beduetung       | `true` Beispiel           |
| :------- | :-------------- | :------------------------ |
| `==`     | gleich          | `1 + 1 == 2`              |
| `!=`     | ungleich        | `1 + 1 != 4`              |
| `<`      | kleiner als     | `1 < 2`                   |
| `>`      | grösser als     | `2 < 1`                   |
| `<=`     | kleiner gleich  | `2 <= 2`, `1 <= 1`        |
| `>=`     | grösser gleich  | `1 >= 1`, `2 <= 1`        |
| `equals` | gleicher String | `"hallo".equals("hallo")` |

### Der Spezialfall `String.equals`

Es gibt eine Ausnahme beim gleich Vergleichs-Operator (`==`) und dem Datentyp
`String` für Zeichenketten. Strings dürfen <u>nicht</u> mit `==` verglichen
werden, sondern mit dem **Aufruf der Methode `equals`** wie hier gezeigt:

```java
String vehicle = "auto"; // gegeben ist eine String Variable

if ("auto".equals(vehicle)) { // es wird mit `equals` geprüft
    System.out.println("Es handelt sich um ein Auto!");
}

// oder mit Variable

boolean isAuto = "auto".equals(vehicle); // true
if (isAuto) {
    System.out.println("Es handelt sich um ein Auto!");
}
```

:::info

- **String** Variablen **immer mit `.equals()`** vergleichen, <u>nie</u> mit
  `==`
- Auch ist es gute Praxis der **bekannte Wert mit dem unbekannten zu
  vergleichen** und nicht anders rum:
  - :white_check_mark: `"auto".equals(vehicle);`
  - :x: `vehicle.equals("auto");` ergibt ein NullPointer wenn die `vehicle` den
    Wert `null` besitzt.

:::

## :pencil: Auftrag 1

Erstellen Sie ein Programm, welches:

- einen Kaufbetrag entgegen nimmt
  _([Eingabe einlesen](../2a-eva/aufgabe2-eingabe.md))_
- bei Einkäufen über CHF 100 einen Rabatt von 15% gewährt

<details><summary>Musterlösung:</summary>

```java
import mytools.StdInput;

public class A1DiscountEvaluation {

	public static void main(String[] args) {
		double price = StdInput.readDouble();
		if(price > 100) {
			price = price * 0.85d;
		}
		System.out.println("Your price is: " + price);
	}
}

```

</details>

## :pencil: Auftrag 2

Erstellen Sie Programm, welches:

- Gewichtsangaben entgegen nimmt
  _([Eingabe einlesen](../2a-eva/aufgabe2-eingabe.md))_
- Bis und mit 5kg CHF 2 für Kleinpakete verrechnet
- Zwischen 5kg und 10kg CHF 5 für Mittelpakete verrechnet
- Ab 10kg für Grosspakete CHF 10 verrechnet
- Für Pakete >= 15kg (ab 15kg) wird auf die Spedition verwiesen. Diese können
  nicht versendet werden.

<details><summary>Musterlösung</summary>

```java
import mytools.StdInput;

public class A2ParcelPrice {

	public static void main(String[] args) {
		System.out.println("Hi, this is the parcel app");
		System.out.println("Plese tipe in the weight: ");
		double weight = StdInput.readDouble();
		double price;

		if (weight <= 5) {
			price = 2;
			System.out.println("Your price: " + price);
		} else if(weight > 5 && weight < 10) {
			price = 5;
			System.out.println("Your price: " + price);
		} else if(weight >= 10 && weight < 15) {
			price = 10;
			System.out.println("Your price: " + price);
		} else if(weight >= 15) {
			price = 0;
			System.out.println("Please call a carrier");
		}
	}

}

```

</details>

## :pencil: Auftrag 3

Bauen Sie folgenden Abschnitt in ein Programm ein und untersuchen Sie, warum die
Ausgabe des Programms falsch ist. Warum ist dieser Fehler so schwer zu
entdecken?

```java
int value = 50;
if (value > 100) ; {
    System.out.println("The value is larger than 100");
}
```

<details><summary>Musterlösung</summary>

Das Semikolon `;` nach der `if (value > 100)` Anweisung is zu viel. Es ist
jedoch **syntaktisch korrekt** und ergibt keinen Error in Eclipse! Nur macht es
keinen Sinn.

Man könnte es auch so schreiben:

```java
int value = 50;
if (value > 100); // Dieser Ausdruck macht nix! NIE!

// Ein Block ohne Bedingung wird immer ausgeführt
// Er ist wegen dem Semikolon nicht an das if gebunden.
{
    System.out.println("The value is larger than 100");
}
```

</details>

## :pencil: Auftrag 4 - Reflexion

Inzwischen haben Sie eine Vorstellung, was Syntax in Java bedeutet. Sie haben
inzwischen auch das eine oder andere Programm erstellt. Vermutlich waren einige
dieser ersten Aufgaben nicht einfach lösbar, nur schon das Beachten der
Klammern, deren Paare, und auch die Datentypen, wie man Werte in diesen
speichert.

Darum kehren wir das Vorgehen nochmals um:

- Wie können Aufgaben in der Programmierung lösbarer werden?
- Was denkt man am besten, in welcher Reihenfolge?
  - Fangen Sie bei den geschweiften Klammern an?

Folgende Bausteine könnten Sie in der Vorarbeit zu einer Aufgabe unterstützen:

- Eigene Problembeschreibung (Ziel des Programms)
- In welcher Abfolge soll das Programm erstellt werden (damit möglichst einfach)
- Welche Daten sind zu bearbeiten und mit welchen Datentypen?
- Welche Kontrollstrukturen sind zu welchem Zweck zu verwenden?

### Aufgabe

Beschreiben Sie nun schriftlich, aus Ihrer Sicht als Programmiererin oder
Programmierer, **wie** man eine der vorherigen Aufgaben angeht und löst.
Probieren Sie möglichst, praktisch jedes Detail zu beschreiben und ohne Aussagen
"ja, das weiss ich einfach" auszukommen.

:::tip Üben

Einer der wichtigsten Punkte beim Programmieren ist das Üben. Das oberhalb
beschriebene Vorgehen kann dabei helfen, mit dem Lösen solcher Aufgaben
vertrauter zu werden. Probieren Sie hin und wieder, besonders bei
anspruchsvollen Aufgaben, sich den idealen Denk- und Arbeitsplan für die
Programmierung einer Lösung bewusst zu machen und schriftlich zu dokumentieren.

:::
