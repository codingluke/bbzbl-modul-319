# Würfelspiel

## :brain: Zufall erzeugen

Die allgemeine Formel für eine Zufallszahl lautet:

```java title="Generelle Zufallszahl Formel"
public int randomNumberInRange(int min, int max) {
    return (int)(Math.random() * (max - min + 1)) + min;
}
```

## :pencil: Einspieler Variante

Erstellen Sie das Programm namens `DiceGame`. Dieses Programm:

- Wird zuerst nur für einen Spieler implementiert.
- Der Benutzer gibt zu Beginn ein Maximum an Punkten an
- Danach wird für den Spieler so lange gewürfelt, bis er das Maximum erreicht oder über-schritten hat.
  Das Würfeln an sich soll in eine Methode ausgelagert werden. Der Rückgabewert ist die gewürfelte Zahl.
- Die einzelnen Würfe sollen auf der Konsole dargestellt werden.
- Zum Schluss soll auch ausgegeben werden, wie viele Würfe benötigt wurden, um auf das Maximum zu kommen

**Beispielausgabe:**

```
Enter the maximum of points: 100
You rolled: 6 3 4 6 1 2 4 1 6 3 1 5 4 4 4 6 5 6 2 6 4 6 4 5 5
Total points: 103, number of dice: 25
```

<details><summary>Musterlösung:</summary>

```java title="DiceGame.java"
import mytools.StdInput;

public class DiceGame {

	public static void main(String[] args) {
		System.out.print("Enter the maximum of points: ");

		int maximum = StdInput.readInt();

		System.out.print("You rolled: ");
		int total = 0;
		int counter = 0;

		do {
			total = total + dice();
			counter++;

		} while (total < maximum);

		System.out.println();
		System.out.println("Total points: " + total + ", number of dice: " + counter);

	}

	public static int dice() {
		int rolled = randomNumberInRange(1, 6);
		System.out.print(rolled + " ");
		return rolled;
	}

    public static int randomNumberInRange(int min, int max) {
        return (int)(Math.random() * (max - min + 1)) + min;
    }
}
```

</details>

## :pencil: Zweispieler Variante

Sie haben nun das Programm für einen Spieler erstellt.
Kopieren Sie nun die Klasse `DiceGame` und benennen Sie die Kopie `DiceGame2Player`.

Programmieren Sie es nun so um, dass:

- zwei Spieler daran teilnehmen können.
- Sie treten nacheinander an.
- Zuerst versucht also Spieler 1 auf das Maximum zu kommen, danach Spieler 2.
- Lagern Sie den Spielmechanismus in eine Methode aus.
  - Die Methode erhält als Parameter das Punktemaximum und liefert als Rückgabewert
    die benötigte Anzahl Würfe, um das Maximum zu erreichen.
- Es gewinnt derjenige, der das Maximum mit weniger Würfen erreichen konnte.

**Beispielausgabe:**

```
Enter the maximum of points: 100
1 3 2 1 6 4 3 3 1 5 2 5 4 6 5 4 3 1 4 2 4 3 3 1 1 3 2 1 3 3 2 3 4 2
1 3 4 6 6 4 5 6 6 4 2 6 4 5 5 3 2 3 1 4 1 4 1 1 6 1 2 2 6
Number of dice Player 1: 34
Number of dice Player 2: 29
Player 2 wins.
```

<details><summary>Musterlösung:</summary>

```java
import mytools.StdInput;

public class DiceGame2Player {

	public static void main(String[] args) {
		System.out.print("Enter the maximum of points: ");

		int maximum = StdInput.readInt();

		int counter1 = play(maximum);
		System.out.println();
		int counter2 = play(maximum);

		System.out.println();
		System.out.println("Number of dice Player 1: " + counter1);
		System.out.println("Number of dice Player 2: " + counter2);

		if(counter1 < counter2) {
			System.out.println("Player 1 wins.");
		} else if(counter2 < counter1) {
			System.out.println("Player 2 wins.");
		} else {
			System.out.println("Draw.");
		}

	}

	public static int play(int max) {
		int total = 0;
		int counter = 0;

		do {
			total = total + dice();
			counter++;

		} while (total < max);

		return counter;
	}

	public static int dice() {
		int rolled = randomNumberInRange(1, 6);
		System.out.print(rolled + " ");
		return rolled;
	}

    public int randomNumberInRange(int min, int max) {
        return (int)(Math.random() * (max - min + 1)) + min;
    }
}
```

</details>

## :pencil: Zusatz Variante

Machen Sie wiederum eine Kopie von `DiceGame2Player` und benennen Sie die Kopie
`DiceGameVariante`. 

Der Benutzer gibt zu Beginn z.B. nicht ein Punktemaximum an,
sondern **definiert die Anzahl Würfe**, welche die Spieler würfeln sollen.
Derjenigen mit der höheren Punktzahl gewinnt zum Schluss das Spiel.

<details><summary>Musterlösung:</summary>

```java
import mytools.StdInput;

public class DiceGameVariante {

	public static void main(String[] args) {
		System.out.print("Enter the number of dice: ");

		int numberOfDice = StdInput.readInt();

		int total1 = play(numberOfDice);
		System.out.println();
		int total2 = play(numberOfDice);

		System.out.println();
		System.out.println("Total Player 1: " + total1);
		System.out.println("Total Player 2: " + total2);

		if(total1 > total2) {
			System.out.println("Player 1 wins.");
		} else if(total2 > total1) {
			System.out.println("Player 2 wins.");
		} else {
			System.out.println("Draw.");
		}

	}

	public static int play(int numberOfDice) {
		int total = 0;
		int counter = 0;

		do {
			total = total + dice();
			counter++;

		} while (counter < numberOfDice);

		return total;
	}

	public static int dice() {
		int rolled = randomNumberInRange(1, 6);
		System.out.print(rolled + " ");
		return rolled;
	}

    public int randomNumberInRange(int min, int max) {
        return (int)(Math.random() * (max - min + 1)) + min;
    }
}
```

</details>
