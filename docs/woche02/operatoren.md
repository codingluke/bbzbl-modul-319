---
keywords:
  - pdf
---
# ➗ Operatoren und Rechnen

[:computer: Open in Browser](pathname:///slides/operatoren) |
[:floppy_disk: download PDF](pathname:///slides/operatoren.pdf)

<iframe src="/bbzbl-modul-319/slides/operatoren" width="100%" height="400px"></iframe>

## :pencil: A1: Noten berechnen

Erstellen Sie ein Programm, welches vom Benutzer

- drei Semesternoten einliest (`StdInput.read...`)
- den Durchschnitt berechnet
- sich dabei an ein strenges Notensystem hält, dass nur ganze Noten zulässt und
  immer abrundet
- den Durchschnitt ausgibt

:::note

- Anhand dieser Übung erkennen Sie, dass man mit Variablen und Zahlen ganz
  normal rechnen kann.
- Auch sollte nun das **EVA-Prinzip** klar werden

:::

<details>
<summary>Musterlösung</summary>

**Wo ist die Methode `main`?**

- Die Klasse mit der `main` Methode müsst Ihr selber erstellen.
- der `import` gehört ganz oben ins File.
- `...` kann man löschen ;)

```java title="Musterlösung ohne main"
import mytools.StdInput;

...

// deklarieren
double grade1;
double grade2;
double grade3;
double result;

// E - Einlesen
System.out.println("Welcome to the average calculator");
System.out.println("Please enter the first grade");
grade1 = StdInput.readDouble();
System.out.println("Please enter the second grade");
grade2 = StdInput.readDouble();
System.out.println("Please enter the third grade");
grade3 = StdInput.readDouble();

// V - Verarbeiten
result = (grade1 + grade2 + grade3) / 3;

// A - Ausgeben
System.out.println("The average grade is: " + result);
```

</details>

## Zuweisungsoperator `=` 
Der elementarste Operator ist der Zuweisungsoperator `=`. Mit diesem wir einer Variable einen Wert zugewiesen.
- Die Variable steht immer links, der zuzuweisende Wert immer rechts.
- Der zuzuweisende Wert kann sich wiederum in einer Variable oder Methode befinden.

```java
   int sinnDesLebens = 42;
   int number        = sinnDesLebens;
//                   ^ Zuweisungsoperator
```
## Arithmetische Operatoren `+`, `-`, `/`, `*`, `%`

Arithmetische Operatoren kennt Ihr bereits von der Mathematik. Damit lassen sich
die gängigen Mathematischen Operationen durchführen. Neu ist einzig der Rest
Operator `%`. Dieser dividiert eine Zahl und gibt den Rest zurück.

```java title="+ - / * % Arithmetische Operatoren"
int result;
int number = 9;
int anotherNumber = 3;

result = number + anotherNumber; // Addition
result = number - anotherNumber; // Subtraktion
result = number / anotherNumber; // Division
result = number * anotherNumber; // Multiplikation
result = number % anotherNumber; // Rest der Division
```

:::tip Gerade/Ungerade berechnen mit `%`

Der Rest-Operator `%` gibt bei einer division immer den Rest zurück. Wenn man
nun eine Division durch 2 durchführt lässt sich herausfinden ob eine Zahl gerade
oder ungerade ist.

```java
9 % 2  // ergibt 4 * 2 Rest 1 also ungerade
10 % 2 // ergibt 5 * 2 Rest 0 also gerade

public boolean even(int number) {
    return number % 2 == 0;
}
```

:::

### Verkürzte arithmetische Operation mit sich selbst `+=`, `-=`, `*=`, `/=`

Oft möchte man den Wert einer Variablen direkt verändern. Das Resultat also
nicht in eine neue Variable, sonder in sich selber speichern. Gegeben ist z.B.
die Variable `number` vom Typ `int` mit dem Initialwert `3`.

```java
int number = 3;
```

Möchte man dieser Variable `4` hinzuaddieren geht das folgendermassen:

```java
number = number + 4; // Addition und Zuweisung zu sich selbst
```

Da dies sehr oft vorkommt ist in allen gängigen Programmiersprachen dafür ein
kombinierten Operator vorgesehen. Es wird dem Zuweisungsoperator den
arithmetische Operator **vorangestellt**.

```java
number += 4; // Verkürzte Addition und Zuweisung zu sich selbst
```

Aus `number = number + 4;` wird somit `number += 4;` und erspart uns die
Dopplung der Variable. Dies geht natürlich auch für alle anderen arithmetischen
Operatoren.

```java
number -= 7; // Subtraktion und Zuweisung zu sich selbst
number *= 9; // Multiplikation und Zuweisung zu sich selbst
number /= 2; // Division und Zuweisung zu sich selbst
```

## Unäre (einstellige) Operatoren `++`, `--`

Noch häufiger als die verkürzte arithmetische Operation mit sich selbst wird im
Programmieren schrittweise hoch und runtergezählt **was auch Iteration genannt
wird**.

Möchte man also von 0 - 3 hochzählen geht dies so:

```java
int number = 0;
number += 1;
number += 1;
number += 1;
```

Der Unäre Operator `++` zählt der links vorangestellten Variable eines
nummerischen Typ eine 1 hinzu. Der obere Code ist somit identisch zu diesem:

```java
int number = 0;
number++;
number++;
number++;
```

:::info Unär => einstellig

Unär bedeutet einstellig, es braucht daher **nur der linke** und nicht auch
einen rechten Teil beim Operator.

:::

:::note Funfact

C++ erweitert die Programmiersprache C. Um diese Verwandtschaft ein bisschen
NERDisch Auszudrücken wurde das Wortspiel C++ gewählt. C++ ist eine weitere
Iteration von C.

:::

## Vergleichsoperatoren 

- `==`, `!=`, `<`, `>`, `<=`, `>=` und die Negation `!`

Vergleichsoperatoren ergeben immer einen **boolean (true/false)**. Sie werden in
Kontrollstrukturen als Bedingungen verwendet.

<div className="grid three"><div>

```java title="== Gleichheit"
true  == true; // true
1     == 1     // true

false == true; // false
1     == 2     // false
```

</div><div>

```java title="!= Ungleichheit"
false != true; // true
1     != 2     // true

true  != true; // false
1     != 1     // false
```

</div><div>

```java title="< Kleiner als"
1 < 2 // true

2 < 1 // false
1 < 1 // false
```

</div><div>

```java title="> Grösser als"
2 > 1 // true

1 > 2 // false
2 > 2 // false
```

</div><div>

```java title=">=Grösser gleich"
2 >= 1 // true
2 >= 2 // true

1 >= 2 // false
```

</div><div>

```java title="<= Kleiner gleich"
1 <= 2 // true
1 <= 1 // true

2 <= 1 // false
```

</div><div>

```java title="! Negation"
!false // true
!(1 == 2) // true

!true // false
!(1 == 1) // false
```

</div></div>

:::caution Strings vergleichen

- **String** Variablen **immer mit `.equals()`** vergleichen, nie mit `==`
- Auch ist es gute Praxis der **bekannte Wert mit dem unbekannten zu
  vergleichen** und nicht anders rum:
  - :white_check_mark: `"auto".equals(vehicle);`
  - :x: `vehicle.equals("auto");` ergibt ein NullPointer wenn die `vehicle` den
    Wert `null` besitzt.

:::
