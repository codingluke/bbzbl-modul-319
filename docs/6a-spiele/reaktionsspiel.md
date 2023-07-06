# Reaktionsspiel

## :brain: Aktuelle Zeit

Die aktuelle Zeit kann mit folgendem Code in Millisekunden seit dem 01.01.1970 ausgelesen werden:

```java
long time = System.currentTimeMillis();
```

Die Differenz zwischen zwei Zeiten ergibt somit die Zeitspanne zwischen zwei Messungen in Millisekunden.

```java
long time1 = System.currentTimeMillis();
// some time
long time2 = System.currentTimeMillis();
long reaction = time2 - time1;
```

## :pencil: Auftrag

Erstellen Sie ein Programm namens `ReactionGame`.

Dieses Programm:

- Begrüsst den Spieler
- Definiert dabei, welche Zahl, welchem Buchstaben entspricht:

```
Welcome to the reaction game!
Hit as fast as possible according to the following map:

0 => a
1 => s
2 => d
3 => f
```

- Danach wird zufällig eine Zahl zwischen 0 und 3 generiert und ausgegeben:

```
Please immediately response to:

2
```

- Der Benutzer muss nun so schnell wie möglich eine `d` eingeben und `Enter` drücken
- Dies wird 10x wiederholt
- Zum Schluss erhält der Spieler seine Reaktionszeit in Sekunden auf der Konsole

```
Your score: 1.6265 seconds
```

- Gibt der Benutzer einen falschen Buchstaben ein, zählt dies als Versuch, wird aber in der
  Berechnung der Reaktionszeit ignoriert.

**Komplette Beispielausgabe:**

```
Welcome to the reaction game!
Hit as fast as possible according to the following map:

0 => a
1 => s
2 => d
3 => f

Please immediately response to: 1
s
Please immediately response to: 2
d
Please immediately response to: 1
s
Please immediately response to: 2
d
Please immediately response to: 1
s
Please immediately response to: 1
s
Please immediately response to: 2
d
Please immediately response to: 1
s
Please immediately response to: 3
f
Please immediately response to: 2
d
Your score: 1.6265
```

<details><summary>Musterlösung:</summary>

```java title="ReactionGame.java"
import mytools.StdInput;

public class ReactionGame {

	/*
	 *	objective: have users type as fast as possible a for 0,
	 *	b for 1, c for 2 and d for 3. If user hit the correct
	 *	keyboard button, increment correctHits, and reactionTimeSum.
	 *	At the end divide reactionTimeSum by correctHits to calculate
	 *	the users reaction rate.
	 *
	 * 	datatypes: stimulus as int, reaction as char/String
	 * 				correctHits as int, reactionTimeSum as double
	 *
	 * 	control structures: do while, if
	 */
	public static void main(String[] args) {
		int times = 10;
		int correctHits = 0;
		double reactionTimeSum = 0;
		double reactionRate = 0;

		System.out.println("Welcome to the reaction game!");
		System.out.println("Hit as fast as possible according to the following map:\n");
		System.out.println("0 => a");
		System.out.println("1 => s");
		System.out.println("2 => d");
		System.out.println("3 => f\n");

		do {
			int stimulus = (int) (Math.random() * 3 + 1); // random number 0 - 3
			System.out.println("Please immediately response to: " + stimulus);

			long startTime = System.currentTimeMillis();
			char reaction = StdInput.readChar();
			long endTime = System.currentTimeMillis();

			if ((stimulus == 0 && reaction == 'a') ||
					(stimulus == 1 && reaction == 's') ||
					(stimulus == 2 && reaction == 'd') ||
					(stimulus == 3 && reaction == 'f')) {
				reactionTimeSum = reactionTimeSum + (endTime - startTime);
				correctHits++;
			}

			times--;
		} while (times > 0);

		System.out.print("Your score: ");

		reactionRate = reactionTimeSum / correctHits / 1000;

		System.out.println("" + reactionRate);
	}
}
```

</details>
