# While

:::info Ziele

- Sie können mit dem while durch eine Bedingung gesteuerte Wiederholungen programmieren.

:::

Das `while` ist dem if ähnlich. Es hat auch eine Bedingung, aber nur einen
`while`-Block, der solange ausgeführt wird, bis die Bedingung den boolean Wert
`false` ergibt.

Das `while` ermöglicht es nun grundsätzlich, dass Programme geschrieben werden
können, die nicht nur einmal durchlaufen, sondern Abschnitte resp. Blöcke
enthalten, die mehrfach ausgeführt werden können.

Beim `while` wird das Wissen über den boolean Datentyp, wie es beim `if`
angewandt wurde, ebenfalls benötigt. Zentral ist also wieder, dass eine
Bedingung formuliert werden kann.

Das grundsätzliche Muster der `while`-Kontrollstruktur sieht folgendermassen aus:

```java
int i = 10;
while (i > 0) {
    System.out.println("value of i: " + i);
    i = i - 1;
}
```

Das `while` ist dabei als ein _solange-wie-die-nachfolgende-Bedingung-zutrifft..._ zu verstehen. Der Aufbau
der Anweisung ist also so:

1. das Schlüsselwort `while`
2. im runden Klammerpaar `()` steht die Bedingung, hier `i` grösser als `0` `(i > 0)`
3. dann folgt zwischen den beiden geschweiften Klammern `{}` der
   Block, dessen Ausführung durch das `while` kontrolliert wird.
   Er wird solange ausgeführt bis die Bedingung `false` ergibt.

**Und wie oft wird also obige Anweisung ausgeführt?**

- Beim ersten Durchlauf hat `i` den Wert 10
- Dann wird dieser Wert auf **Zeile 4 um 1 verringert**
- Die Schlaufe wird somit 10 Mal durchlaufen. Wobei bei jedem Durchlauf
  die Variable `i` um 1 verringert wird.
- Sobald `i` von 1 nach 0 verringert wird ist die Bedingung nicht mehr erfüllt,
  da die Bedingung verlangt, dass der Wert von i grösser als 0 sein muss.

## Fussgesteuertes `do..while`

Zusätzlich existiert eine sogenannt "flussgesteuerte" Variante von `while`.
Diese Variante **beginnt mit dem Schlüsselwort `do`**, und das while rutscht an den Schluss.

```java
int x = 10;
do {
    System.out.println("value of x: " + x);
    x = x-1;
} while(x > 0);
```

Der `do`-Block in den gescheiften Klammern `{}` wird **immer einmal ausgeführt**,
bevor die Bedingung überprüft wird.

Ist die Bedingung erfüllt, wird der do-Block erneut ausgeführt, solange bis die Bedingung x > 0 nicht
mehr erfüllt ist. Die `do..while` Schlaufe ist dadurch unerscheidlich zur `while`
Schlaufe, dass der Code-Block immer **mindestens ein Mal ausgeführt wird**.

## Aufgaben

### Wiederholte Ausgabe

Schreiben Sie ein Programm, welches 10-mal „Hopp Schwiiz“ ausgibt.

- Schreiben Sie das Programm **zuerst als Sequenz von 10 Zeilen** mit
  `System.out.println`.
- Schreiben Sie dann das Programm kürzer und einfacher mit einer
  `while`-Schleife.

#### Zusatzaufgabe:

Schreiben Sie das Programm mit einer `while`-Schleife und einer Variablen,
welche diese steuert, wobei Sie die Variable wie folgt deklarieren:

```java
int zaehler = -5;
```

Bis zu welchem Wert muss diese Variable laufen?

<details><summary>Musterlösung:</summary>

```java title="AASwitzerland.java"
public class AASwitzerland {

	public static void main(String[] args) {
		// 10 mal die gleiche Zeile
		System.out.println("Hopp Schwiiz");
		System.out.println("Hopp Schwiiz");
		System.out.println("Hopp Schwiiz");
		System.out.println("Hopp Schwiiz");
		System.out.println("Hopp Schwiiz");
		System.out.println("Hopp Schwiiz");
		System.out.println("Hopp Schwiiz");
		System.out.println("Hopp Schwiiz");
		System.out.println("Hopp Schwiiz");
		System.out.println("Hopp Schwiiz");
		
		System.out.println("---------------------------------");

		// mit einer while-Schleife
		int x = 0;
		while (x < 10) {
			System.out.println(x + " Hopp Schwiiz");
			x = x + 1;	// ein kürzere Formulierung, um die Variable um eins zu erhöhen, wäre  x++;
		}
		
		System.out.println("---------------------------------");

		// mit einer while-Schleife, aber wir beginnen bei -5
		int i = -5;
		while (i < 5) {
			System.out.println(i + " Hopp Schwiiz");
			i = i + 1;
		}
	}
}
```

</details>

### Multiplikationstafel ausgeben

Schreiben Sie ein Programm, welches eine Multiplikationstafel ausgibt.

- Der Benutzer gibt an, für welche Zahl die Multiplikationstafel erstellt werden soll.

```bash title="Folgende Ausgabe ist erwünscht, falls der Benutzer z.B. 2 eingibt:"
1 x 2 = 2
2 X 2 = 4
3 X 2 = 6
4 x 2 = 8
5 x 2 = 10
6 x 2 = 12
7 x 2 = 14
8 x 2 = 16
9 x 2 = 18
10 x 2 = 20
```

<details><summary>Musterlösung:</summary>

```java title="ABMultiplication.java"
import mytools.StdInput;

public class ABMultiplication {

	public static void main(String[] args) {
		System.out.print("Zahl fuer die Multiplikationstabelle: ");
		int number = StdInput.readInt();

		int ergebnis;
		int i = 1;
		while(i <= 10) {
			ergebnis = i * number;
			System.out.println(i + " * " + number + " = " + ergebnis);
			i = i + 1;
		}
	}

}
```

</details>

### Fahrenheit Umrechner

Schreiben Sie ein Programm, welches eine Auflistung der Celsiuswerte von
-20 bis 100 Grad in 5er Schritten in Fahrenheit ausgibt.

```java title="Die Formel dazu lautet:"
fahrenheit = (9.0/5.0) * celsius + 32
```

#### Beispiel Werte zur Prüfung

|              | Celsius | Fahrenheit |
| ------------ | ------- | ---------- |
| Gefrierpunkt | 0       | 32         |
| Kochpunkt    | 100     | 212        |

<details><summary>Musterlösung:</summary>

```java title="ACFahrenheit.java"
public class ACFahrenheit {

	public static void main(String[] args) {
		double celsius = -20;
		double fahrenheit;

		do {
			fahrenheit = (9.0 / 5.0) * celsius + 32;
			System.out.println("celsius " + celsius + " = fahrenheit " + fahrenheit);
			celsius = celsius + 5;
		} while (celsius <= 100);
	}

}
```

</details>

### Guthaben aufbrauchen

Schreiben Sie ein Programm, welches zuerst ein Startguthaben von 100.00 Franken in einer Variablen
festlegt.

- Nun soll jeweils wiederholt der Benutzer über sein aktuelles Guthaben informiert 
  und nach einem Betrag gefragt werden, den man abheben möchte. 
- Dieser Betrag wird so lange abgezogen, bis das Guthaben 0 oder weniger beträgt.
- Am Schluss soll «Sorry, your balance now is zero or below» auf die Konsole 
  ausgegeben werden.

<details><summary>Musterlösung:</summary>

```java title="AD1Balance.java"
import mytools.StdInput;

public class AD1Balance {
	public static void main(String[] args) {

		double balance = 100.0;

		do {
			System.out.println("Your credit is " + balance + ", please enter the amount to withdraw");
			double amount = StdInput.readDouble();
			balance = balance - amount;
		} while (balance > 0);

		System.out.println("Sorry, your balance now is zero or below");

	}
}
```

</details>

### Passwort-Prüfung

Erstellen Sie ein Programm, welches mittels `do..while` nach dem Passwort 
"abrakadabra" fragt. 

- Solange das Passwort falsch ist, soll die Anforderung wiederholt werden. 
- Sobald das Passwort "abrakadabra" richtig eingegeben wurde, soll dem Benutzer 
  die Bestätigung „Logged in!“ angezeigt werden.

:::info

Falls es nicht klappt ➔ if-Blatt lesen ➔ Regeln für String!

:::

<details><summary>Musterlösung:</summary>

```java title="AD2Password.java"
import mytools.StdInput;

public class AD2Password {
	
	public static void main(String[] args) {
		String password = "abrakadabra";
		String entry = "";
		
		do {

			System.out.print("Please enter the password: ");
			entry = StdInput.readString();
		} while (!password.equals(entry));

		System.out.println("Logged in!");
	}
}
```

</details>
