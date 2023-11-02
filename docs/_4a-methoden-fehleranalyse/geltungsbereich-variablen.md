---
sidebar_position: 6
keywords:
  - pdf
---
# Geltungsbereich von lokalen Variablen

Wenn eine Variable **innerhalb einer Methode initialisiert** wird, spricht man
von lokalen Variablen. Lokal, da sie nur innerhalb dieser Methode ab der
Initialisierung verwendet werden kann (gültig ist).

Zudem können lokale Variablen **nur im selben Code-Block** (geschweifte Klammern
`{ }`) indem Sie deklariert wurden, verwendet werden.

#### Explizites Beispiel

- Grün wird dargestellt wenn eine Variable sichtbar, also deklariert wird
- Gelb zeigt an wenn die Sichtbarkeit einer Variable endet
- Rot sind Fehlerbeispiele, an diesen Stellen wird versucht auf eine Variable
  zuzugreifen, welche an dem Punkt nicht sichtbar ist.

```java title="Geltungsbereich von lokalen Variablen" showLineNumbers
import mytools.StdInput;

public class Beispiel {

    public static void main(String[] args) {
        // highlight-red-next-line
        // ERROR: userInputMain wird erst auf Zeile 9 definiert
        // highlight-red-next-line
        System.out.println("Hier kann " + userInputMain + " noch nicht verwendet werden!");

        // highlight-green-next-line
        int userInputMain = readNumberInRange(40, 60); // ab hier ist userInputMain sichtbar

        // userInputMain ist sichtbar
        System.out.println("Sie haben " + userInputMain + " eingegeben!");

        // highlight-red-next-line
        // ERROR: userInputRange ist hier nicht sichtbar!
        // highlight-red-next-line
        System.out.println("Hier kann " + userInputRange + " nicht verwendet werden!");
        // highlight-yellow-next-line
        // hier endet die Sichtbarkeit von userInputMain
    }

    private static int readNumberInRange(int min, int max)
        // highlight-green-next-line
    {   // ab hier ist min und max sichtbar
        // highlight-green-next-line
        int userInputRange; // ab hier ist userInputRange sichtbar
        do {
            // highlight-green-next-line
            int userInputRangeNested; // ab hier ist userInputRangeNested sichtbar
            System.out.print("Geben Sie eine Zahl zwischen " + min + " und " + max + " ein: ");
            userInputRangeNested = StdInput.readInt(); // userInputRangeNested ist sichtbar
            userInputRange = userInputRangeNested; // userInputRange ist sichtbar
            // highlight-yellow-next-line
            // hier endet die Sichtbarkeit von userInputRangeNested
        } while (min > userInputRange || userInputRange > max);
        // highlight-red-next-line
        return userInputRangeNested; // ERROR: userInputRangeNested ist nicht sichtbar!
        return userInputRange; // userInputRange ist hier sichtbar
        // highlight-yellow-next-line
        // hier endet die Sichtbarkeit von userInputRange, min und max
    }

}
```

:::tip Geschweifte Klammern Zählen!

Beim Programmieren muss man immer ein gutes Auge auf die geschweiften Klammern
halten. Diese sind sehr oft das Problem wenn Eclipse errors anzeigt.

:superhero: Es ist guter Stil, wenn die Verschachtelung nicht mehr als 3
Klammern übersteigt.

:::

