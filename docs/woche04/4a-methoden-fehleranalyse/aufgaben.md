---
sidebar_position: 4
keywords:
  - pdf
---

# Methoden Aufgaben

:::caution Untersuchen Sie alle Aufgabe auch mittels Debugging

:mag: Verfolgen Sie den Programmablauf und die Werte der Variablen.

:superhero: Schauen Sie auf welchen Zeilen überhaupt ein "Breakpoint" gesetzt
werden kann. Sie werden sehen, dies geht nur auf Zeilen die auch wirklich
ausgeführt werden. Also auf Zeilen im Methodenkörper.

:::

## :pen: Grössere Zahl

Erstellen Sie ein Programm, das zwei Zahlen von der Konsole einliest.

- Diese beiden Zahlen sollen an eine Methode als Parameter übergeben werden
  können.
- Die Methode soll die grössere der beiden Zahlen ermitteln und diese als
  Rückgabewert zurückgeben.

<details>
<summary>Musterlösung</summary>

```java title="A1EvaluateBiggerNumber.java"
import mytools.StdInput;

public class A1EvaluateBiggerNumber {

	public static void main(String[] args) {
		System.out.print("Input value 1: ");
		int number1 = StdInput.readInt();

		System.out.print("Input value 2: ");
		int number2 = StdInput.readInt();

		int biggerNumber = evaluate(number1, number2);
		System.out.println("Die grössere Zahl ist: " + biggerNumber);
	}

	public static int evaluate(int value1, int value2) {
		if (value1 > value2) {
			return value1;
		} else {
			return value2;
		}
	}

}

```

</details>

## :pen: Intervall

Erstellen Sie ein Programm, in dem eine Methode prüft, ob eine Zahl innerhalb
eines Intervalls liegt.

- Der Intervall (unterer und oberer Grenzwert) und die Zahl werden als Parameter
  an die Methode übermittelt.
- Die Methode gibt true zurück, falls die Zahl im Intervall liegt, sonst false.
- Das Ergebnis soll in der `main`-Methode auf die Konsole ausgegeben werden.

<details>
<summary>Musterlösung</summary>

```java title="A2Intervall.java"
import mytools.StdInput;

public class A2Intervall {

	public static void main(String[] args) {
		int min = 1;
		int max = 10;

		System.out.print("Input value: ");
		int number = StdInput.readInt();

		boolean inRange = isInRange(min, max, number);
		System.out.println("Ist im Intervall: " + inRange);
	}

	public static boolean isInRange(int minimum, int maximum, int value) {
		return value >= minimum && value <= maximum;
	}

}
```

</details>

## :pen: Zinsrechner

Erstellen Sie ein Programm, wobei Sie einen Sparbetrag eingeben können, sowie
einen Zins in %.

- In einer Methode soll entsprechend der Zinsbetrag ausgerechnet und
  zurückgegeben werden.
- Dieser Zinsbetrag soll dann in der main-Methode auf die Konsole ausgegeben
  werden.

<details>
<summary>Musterlösung</summary>

```java title="A3InterestCalculator.java"
import mytools.StdInput;

public class A3InterestCalculator {

	public static void main(String[] args) {
		double amount = StdInput.readDouble("Betrag eingeben: ");
		double interestRate = StdInput.readDouble("Zinssatz in % eingeben: ");

		double interest = calcInterest(amount, interestRate);
		System.out.println("Der Zinsbetrag beträgt: " + interest);
	}

	public static double calcInterest(double amount, double interestRate) {
		return (amount / 100) * interestRate;
	}
}
```

</details>

## :pen: Einfacher Rechner

Dieses Programm erwartet die Eingabe zweier Zahlen `a` und `b` durch den
Benutzer, sowie den Rechenoperator als String `+` oder `*`.

- Für die Operatoren `+` und `*` sollen zwei Methoden (z.B. `add`, `mulitpy`)
  existieren welche die Parameter `a` und `b` besitzen und das Resultat
  zurückgeben.
- Je nach Operator werden die beiden Zahlen `a` und `b` an die zuständige
  Methode als Parameter übergeben
- Das Ergebnis wird berechnet und als Rückgabewert an die `main`-Methode
  zurückgegeben.
- Das Ergebnis soll in die Konsole ausgegeben werden.

<details>
<summary>Musterlösung</summary>

```java title="A4SimpleCalculator.java"
import mytools.StdInput;

public class A4SimpleCalculator {

	public static void main(String[] args) {
        // Initialisierung der Variablen
		int a = 0;
		int b = 0;
        int result = 0;
		String operator;

        // Einlesen der Werte
		System.out.println("Bitte erste Zahl eingeben:");
		a = StdInput.readInt();
		System.out.println("Bitte zweite Zahl eingeben:");
		b = StdInput.readInt();
		System.out.println("Welche Operation wollen Sie ausführen: + *");
		operator = StdInput.readString();

        // Operator prüfen und Resultat entsprechend berechnen
		if ("+".equals(operator)) {
			result = add(a, b);
		} else if ("*".equals(operator)) {
			result = multiply(a, b);
		}

        // Resultat ausgeben
		System.out.println("Das Resultat ist " + result);
	}

	public static int add(int a, int b) {
		return a + b;
	}

	public static int multiply(int a, int b) {
		return a * b;
	}
}
```

</details>

## :pen: Eigenes Beispiel

Adaptieren Sie ein Beispiel mit Methoden inkl. Parameter(n) und Rückgabewert auf
eine eigene Situation.
