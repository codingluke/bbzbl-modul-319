---
keywords:
  - pdf
---

# 😶‍🌫️ Ratespiel 🌟

Um einfache Rate-Games zu erstellen, ist es nötig, dass zufällige Zahlen zur
Verfügung stehen. Daher werden wir zuerst erkunden wie dies genau geht.

Lest dafür [:open_book: Zufall erzeugen](/docs/woche06/6a-spiele/zufall.md)
genau durch.

:::tip Theorie offen behalten

Wenn Ihr [:open_book: Zufall erzeugen](/docs/woche06/6a-spiele/zufall.md) in
einem eigenen Tab (oder Splitscreen) offen habt, könnt Ihr während dem Lösen der
Aufgabe komfortabel spicken ;)

:::

:::caution Untersuchen Sie die Aufgabe auch mittels [Debugging](/docs/woche03/debugging.md)

- :mag: Verfolgen Sie den Programmablauf und die Werte der Variablen.
- Debugging und Fehleranalyse ist das **Thema 4 im Kompetenzraster**

:::

## :pen: Auftrag

Erstellen Sie das Programm namens `GuessGame`.

Dieses Programm:

- erzeugt eine zufällige Zahl zwischen 1 und 100
  - Das ist die zu erratende geheime Zahl, speichert Sie also in einer
    Variablen.
- fordert den Benutzer auf, die Zahl zu erraten, liest die Eingabe des Benutzers
  ein und vergleicht sie mit der geheimen Zahl
  - Das wird [solange wiederholt](/docs/woche05/5a-while/dowhile.md), bis die
    geheime Zahl erraten wird
- Zum Schluss wird dem Benutzer zum Erfolg gratuliert

Für den Benutzer ist das nicht einfach. Bauen Sie deshalb schrittweise die
folgenden Erweiterungen in das Programm ein:

1. Geben Sie dem Benutzer einen Hinweis, ob die Zahl, die er erraten soll,
   kleiner oder grösser als die von ihm geratene Zahl ist.
2. Bauen Sie als Cheat die Ausgabe der geheimen Zahl gleich am Anfang ein, um
   das Programm rascher testen zu können.
3. Zählen Sie die Anzahl Versuche, die der Benutzer dazu braucht und geben Sie
   dies am Ende auf die Konsole aus.

:::warning Lesen Sie die Kommentare der Musterlösung!

Die Musterlösung ist mit Kommentaren versehen, um das Spiel mit den drei
weiteren Funktionalitäten zu ergänzen.

:::

<details>
<summary>Musterlösung:</summary>

```java title="GuessGame.java"
import mytools.StdInput;

/*
 * Programmbeschreibung:
 * Ziel
 * * Das Programm erzeugt eine zufällige Zahl, die der Benutzer
 *   anschliessend erraten muss.
 *
 * Variablen
 * * eine Variable für die zufällige Zahl (int)
 * * eine Variable für die geratene Zahl (int)
 *
 * Kontrollstrukturen
 * * Schleife, Abfrage der Ratezahl, bis sie/er die
 *   richtige Zahl erraten hat, `do while`
 * * Selektion, ob geheime Zahl grösser oder kleiner (if)
 */
public class GuessGame {

    public static void main(String[] args){
        int secret = randomNumberInRange(1, 100) // Zufallszahl zwischen 1 und 100
        int guess = 0;
        // V3: Gebrauchte Runden zählen
        //int rounds = 0;

        // V2: Kommentieren Sie die nächste Zeile aus um die Geheimzahl anzuzeigen.
        //    Dies ist auch nützlich um das Programm zu testen
        // System.out.println("Die geheime Zahl ist: " secret);

        System.out.println("Es wird eine Nummer zwischen 1 und 100 gesucht");

        do {
            System.out.println("Rate eine Zahl: ");
            guess = StdInput.readInt();

            // CHEAT V1: Kommentieren Sie die nächsten Zeilen aus um zu zeigen
            //          ob die Geheimzahl grösser oder kleiner ist
            //if(guess > secret) {
            //    System.out.println("Die gesuchte Zahl ist kleiner");
            //} else if (guess < secret) {
            //    System.out.println("Die gesuchte Zahl ist grösser");
            //}

            // V3: Gebrauchte Runden zählen
            //rounds++;
        } while(guess != secret);

        System.out.println("Judihuiii! Deine Zahl " + guess + " stimmt überein!");
        // V3: Gebrauchte Runden zählen
        //System.out.println("Sie haben dazu " + rounds + " Runden benötigt!");
    }

    public static int randomNumberInRange(int min, int max) {
        return (int) (Math.random() * (max - min + 1)) + min;
    }
}

```

</details>
