---
sidebar_position: 2
keywords:
  - pdf
---

# ShoppingList

Programmierung einer einfachen ShoppingList.

## Spielregeln

- Das Programm soll es ermöglichen, dass bis zu zehn beliebige Produkte in die
  Liste eingetragen werden können.
- Sobald der Benutzer mit einem Leerstring („“) abbricht oder 10 Produkte
  eingegeben hat, folgt die Ausgabe der vom Benutzer erfassten Produkte.
- Wählen Sie geeignete Datentypen, Variablenbezeichnungen und
  Kontrollstrukturen.

<details><summary>Musterlösung:</summary>

```java title="SimpleMemory.java"
import mytools.StdInput;

public class SimpleMemory {

	public static void main(String[] args) {
		String[] cards = new String[10];
		cards[0] = "Car";
		cards[1] = "Pen";
		cards[2] = "Star";
		cards[3] = "Apple";
		cards[4] = "Book";
		cards[5] = "Printer";
		cards[6] = "Highway";
		cards[7] = "Cat";
		cards[8] = "Clock";
		cards[9] = "Tree";

		String answer = "";
		int correctAnsweser = 0;

		while (!answer.equals("stop") && correctAnsweser < 10) {
			System.out.println("");
			System.out.println("choose: g=guess, l=learn, stop");
			answer = StdInput.readString();

			if (answer.equals("l")) {
				for (int i = 0; i < cards.length; i++) {
					System.out.print("\t" + cards[i]);
				}
			}

			if (answer.equals("g")) {
				System.out.println("Guess a word: ");

				String guess = StdInput.readString();

				boolean contained = false;

				for (int i = 0; i < cards.length; i++) {
					if (cards[i].equals(guess)) {
						contained = true;
					}
				}

				if (contained) {
					System.out.println("Woaw! Great!");
					correctAnsweser++;
				} else {
					System.out.println("Oh, better guess next time");
				}
			}
		}

		System.out.println("Great, you did remember all cards");
	}
}
```

</details>
