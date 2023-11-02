---
sidebar_position: 3
keywords:
  - pdf
---

# Mathematik Olympiade

Es soll eine "Mathematik Olympiade" implementiert werden.

## Spielregeln

Dazu gibt der Benutzer als erstes an, wie viele Aufgaben er lösen möchte und in
welchem Wertebereich sich die einzelnen Zahlen einer Rechnung befinden sollen.

Danach werden die Aufgaben zufällig generiert. Es sollen die beiden
Grundrechenarten Addition und Division möglich sein. Es sollen nur Ganzzahlen
verwendet werden.

**Addition:** die beiden Summanden werden zufällig im angegebenen Wertebereich
generiert.

**Division:** Dividend und Divisor werden zufällig generiert. Achten Sie darauf,
dass der Divisor nicht 0 sein darf. Geht die Division nicht auf (also gäbe es
einen Rest), sollen erneut zwei Zahlen generiert werden. Dies so lange, bis die
Rechnung aufgeht.

Die generierte Rechnung wird dem Benutzer auf die Konsole ausgegeben, worauf er
seine Lösung eingeben muss. Dies wird so lange wiederholt, bis die Anzahl zu
lösenden Aufgaben (Eingabe des Benutzers zu Beginn) erreicht wurden.

Am Schluss erfolgt eine Ausgabe, wie viele Fehler der Benutzer gemacht hat.

```bash title="Beispielausgabe"
Wie viele Aufgaben willst du lösen?
5

Gib den Wertebereich an!
10

1.Aufgabe
Addition
2+6
8
Richtig

2.Aufgabe
Addition
8+8
16
Richtig

3.Aufgabe
Addition
3+1
4
Richtig

4.Aufgabe
Division
2/2
0
Falsch

5.Aufgabe
Addition
0+3
2
Falsch

Fehleranzahl: 2
```

## :toolbox: Implementationshilfe

- In der main-Methode fragen Sie den Benutzer als erstes, wie viele Aufgaben er
  lösen möchte und in welchem Wertebereich sich die Zahlen befinden sollen
- In Abhängigkeit der Anzahl Aufgaben sollen Rechnungen generiert werden
- Als erstes soll zufällig bestimmt werden, ob eine Addition oder eine Division
  generiert werden soll
- **Bei einer Addition**:
  - lagern Sie das Generieren der Addition in eine **eigene Methode** dafür aus.
    Als Parameter erhält sie den Wertebereich, als Rückgabewert liefert sie, ob
    die Rechnung korrekt gelöst wurde oder nicht
  - Es werden zwei Zufallszahlen im Wertebereich generiert
  - Die korrekte Lösung wird im Programm berechnet
  - Dem Benutzer wird die Rechnung präsentiert
  - Der Benutzer muss die Lösung eingeben können
  - Stimmen Eingabe und Lösung überein liefert die Methode true, ansonsten false
    zurück
- **Bei einer Division**:
  - lagern Sie das Generieren der Division in eine **eigene Methode** aus. Als
    Parameter erhält sie den Wertebereich, als Rückgabewert liefert sie, ob die
    Rechnung korrekt gelöst wurde oder nicht
  - Es werden zwei Zufallszahlen generiert. Achtung: der Divisor darf nicht 0
    werden
  - Geht die Rechnung nicht auf, werden erneut zwei Zahlen generiert. Dies wird
    so lange wiederholt, bis die Rechnung aufgeht
  - Die korrekte Lösung wird im Programm berechnet
  - Dem Benutzer wird die Rechnung präsentiert
  - Der Benutzer muss die Lösung eingeben können
  - Stimmen Eingabe und Lösung überein liefert die Methode true, ansonsten false
    zurück
- Nachdem die Methode für die jeweilige Rechnung beendet wurde, liefert Sie
  zurück, ob die Rechnung korrekt gelöst wurde oder nicht. Dieser Rückgabewert
  soll abgefangen werden. War die Rechnung falsch, zählen Sie einen Counter für
  die Anzahl falschen Rechnungen hoch.
- Nachdem alle Aufgaben gelöst wurden, geben Sie die Anzahl Fehler auf die
  Konsole aus.

<details><summary>Musterlösung:</summary>

```java title="MathOlympiad.java"
import mytools.StdInput;

public class MathOlympiad {

	public static void main(String[] args) {

		System.out.println("Wie viele Aufgaben willst du lösen?");
		int aufgabenAnzahl = StdInput.readInt();

		System.out.println("Gib den Wertebereich an!");
		int werteBereich =  StdInput.readInt();

		int operation = 0;//lokale Variable speichert die Zufallszahl
		int fehlerAnzahl = 0;

		for (int i = 1; i <= aufgabenAnzahl; i++) {
			boolean korrekt = false;
			operation = (int) (Math.random() * 2);//Zufallszahl wird jedes Mal neu ermittelt
			System.out.println(i + ".Aufgabe");//Konsolenausgabe zur Aufgabenanzahl 1., 2., 3. usw.
			switch (operation) {
			case 0:
				System.out.println("Addition");
				korrekt = addiere(werteBereich);
				break;
			case 1:
				System.out.println("Division");
				korrekt = dividiere(werteBereich);
				break;
			}

			if (!korrekt) {
				fehlerAnzahl++;
			}
		}

		System.out.println("Fehleranzahl: " + fehlerAnzahl);
	}

	public static boolean addiere(int werteBereich) {
		int sumEins = (int) (Math.random() * werteBereich); //Zufallszahl für Summand Eins
		int sumZwei = (int) (Math.random() * werteBereich); //Zufallszahl für Summand Zwei
		int summe = sumEins + sumZwei; //Summe = Summand +  Summand

		System.out.println(sumEins + "+" + sumZwei);//Rechnung ausgeben
		int eingabe = StdInput.readInt();
		if (summe != eingabe) {
			System.out.println("Falsch");
			return false;
		} else {
			System.out.println("Richtig");
			return true;
		}
	}

	public static boolean dividiere(int werteBereich) {
		int dividend = (int) (Math.random() * werteBereich);
		int divisor = (int) (Math.random() * werteBereich) + 1;//Null als Zufallszahl wird ausgeschlossen
		int quotient = dividend / divisor;

		while (dividend % divisor != 0) {
			dividend = (int) (Math.random() * werteBereich);
			divisor = (int) (Math.random() * werteBereich) + 1;//Zufallszahl ist größer Null
			quotient = dividend / divisor;
		}
		System.out.println(dividend + "/" + divisor);
		int eingabe = StdInput.readInt();
		if (eingabe != quotient) {
			System.out.println("Falsch");
			return false;
		} else {
			System.out.println("Richtig");
			return true;
		}
	}
}
```

</details>
