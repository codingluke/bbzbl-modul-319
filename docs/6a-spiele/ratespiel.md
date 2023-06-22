# Zufallszahl und Ratespiel

## Zufall erzeugen

Um einfache Rate-Games zu erstellen, ist es nötig, dass zufällige Zahlen zur Verfügung stehen. In
Java gibt es eine Klasse Math. Auf dieser kann man beispielsweise den Befehl random() aufrufen,
dann bekommt man eine Zahl zwischen 0 inklusive und 1 (exklusive) zurück. Wenn ein Programm
simulieren soll, dass ein Würfel geworfen wurde, und folglich die Zahlen 1 inklusive bis 6 inklusive
zufällig ausgewählt werden sollen, kann dies mit der folgenden Zeile erfolgen:

```java title="6er Würfel"
int diceValue = (int) (Math.random() * 6) + 1;
```

:::danger Achten Sie darauf, die Klammern korrekt zu setzen.
:::

Die allgemeine Formel für eine Zufallszahl lautet:

```java title="Generelle Zufallszahl Formel"
public int randomNumberInRange(int min, int max) {
    return (int)(Math.random() * (max - min + 1)) + min;
}
```

## :pencil: Ratespiel

Erstellen Sie das Programm namens `GuessGame`. 

Dieses Programm:

- erzeugt eine zufällige Zahl zwischen 1 und 100 (wie das gemacht wird, 
  ist oben beschrieben) 
  - das ist die zu erratende geheime Zahl
- fordert den Benutzer auf, die Zahl zu erraten, liest die Eingabe des 
  Benutzers ein und vergleicht sie mit der geheimen Zahl 
  - das wird solange wiederholt, bis die geheime Zahl erraten wird
- zum Schluss wird dem Benutzer zum Erfolg gratuliert

Für den Benutzer ist das nicht einfach. Bauen Sie deshalb schrittweise die folgenden Erweiterungen in das Programm ein:

1. Geben Sie dem Benutzer einen Hinweis, ob die Zahl, die er erraten soll, kleiner oder 
   grösser als die von ihm zuvor geratene Zahl ist.
2. Bauen Sie als Cheat die Ausgabe der geheimen Zahl gleich am Anfang ein, um das Programm 
   rascher testen zu können.
3. Zählen Sie die Anzahl Versuche, die der Benutzer dazu braucht und geben Sie dies am
   Ende auf die Konsole aus.
