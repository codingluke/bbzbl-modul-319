---
sidebar_position: 4
keywords:
  - pdf
---

# Memory

Programmierung eines Memory-Games. (Gedächtnisspiel)

## Spielregeln

In einer ersten Version definieren Sie eine fixe Liste an Worten, z.B. diese:

    Car, Pen, Star, Apple, Book, Printer, Highway, Cat, Clock, Tree

Der Benutzer soll nun zwischen drei Befehlen wählen können:

- **learn/lernen**: alle Wörter werden angezeigt
- **guess/raten**: der Benutzer kann ein Wort raten
- **stop**: das Programm endet

Die Funktionen `learn` und `guess` sollen solange gewählt werden können, bis der
Benutzer stop eingibt (riecht nach Schlaufe). Dann beendet das Programm.

Wählen Sie geeignete Datentypen, Variablenbezeichnungen und Kontrollstrukturen.

## Einfache Umsetzung

- Wenn ein Benutzer ein Wort eingibt, welches in der Liste enthalten ist, dann
  erhöhen Sie eine entsprechende _Zählervariable_ um eins.
- Sobald der Wert der Variablen der Listengrösse entspricht, endet das Programm
  und gratuliert dem Benutzer.

## Fortgeschrittene Umsetzung

Erstellen Sie eine neue Version des Games, am besten mit einer Kopie der
bisherigen Lösung.

Wählen Sie aus der folgenden Liste einzelne schwierigere Anforderungen, mit
denen Sie interessante Fragen der Programmierung festigen:

- Das Programm kann sich für jedes Wort individuell merken, ob es bereits
  richtig geraten wurde.
  - Bei der einfachen Version kann man "cheaten" und 10 mal das gleiche Wort
    eingeben ;)
- Das Programm fragt direkt nach dem Wort an einer bestimmten Position.
  - z.B. wie heisst das Wort an Position 4? Korrekte Antwort: Apple
- Das Programm lässt es zu, dass der Benutzer die Worte selbst erfassen kann.

<details><summary>Musterlösung:</summary>

```java title="Memory.java"
import mytools.StdInput;

public class Memory {

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

		boolean[] guesses = {false,false,false,false,false,false,false,false,false,false};

		String answer = "";

		while (!answer.equals("stop")) {
			System.out.println("");
			//switch: player turns
			System.out.println("choose: g=guess, l=learn, stop");
			answer = StdInput.readString();

			if (answer.equals("l")) {
				for (int i = 0; i < cards.length; i++) {
					System.out.print("\t" + cards[i]);
				}
			}

			if (answer.equals("g")) {
				for (int i = 0; i < 2; i++) {
					System.out.println("");
				}
				int pos = (int) (Math.random() * 10);

				System.out.println("Guess at position: " + pos);

				String guess = StdInput.readString();

				if (cards[pos].equals(guess)) {
					System.out.println("Woaw! Great!");
					guesses[pos] = true;
				} else {
					System.out.println("Oh, better guess next time");
				}
			}
		}
	}

}
```

</details>
