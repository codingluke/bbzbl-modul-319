# Würfelspiel

## Zufall erzeugen

Die allgemeine Formel für eine Zufallszahl lautet:
```java
int number = (int)(Math.random() * (max - min + 1)) + min;
```

## Auftrag

Erstellen Sie das Programm namens `DiceGame`. Dieses Programm:

- Wird zuerst nur für einen Spieler implementiert.
- Der Benutzer gibt zu Beginn ein Maximum an Punkten an
- Danach wird für den Spieler so lange gewürfelt, bis er das Maximum erreicht oder über-schritten hat. 
  Das Würfeln an sich soll in eine Methode ausgelagert werden. Der Rückgabewert ist die gewürfelte Zahl.
- Die einzelnen Würfe sollen auf der Konsole dargestellt werden.
- Zum Schluss soll auch ausgegeben werden, wie viele Würfe benötigt wurden, um auf das Maximum zu kommen

Beispielausgabe:

```
Enter the maximum of points: 100
You rolled: 6 3 4 6 1 2 4 1 6 3 1 5 4 4 4 6 5 6 2 6 4 6 4 5 5
Total points: 103, number of dice: 25
```

## Auftrag 2

Sie haben nun das Programm für einen Spieler erstellt. Programmieren Sie es nun so um, dass:

- zwei Spieler daran teilnehmen können. 
- Sie treten nacheinander an. 
- Zuerst versucht also Spieler 1 auf das Maximum zu kommen, danach Spieler 2. 
- Lagern Sie den Spielmechanismus in eine Methode aus. 
  - Die Methode erhält als Parameter das Punktemaximum und liefert als Rückgabewert 
    die benötigte Anzahl Würfe, um das Maximum zu erreichen.
- Es gewinnt derjenige, der das Maximum mit weniger Würfen erreichen konnte.

Beispielausgabe:

```
Enter the maximum of points: 100
1 3 2 1 6 4 3 3 1 5 2 5 4 6 5 4 3 1 4 2 4 3 3 1 1 3 2 1 3 3 2 3 4 2
1 3 4 6 6 4 5 6 6 4 2 6 4 5 5 3 2 3 1 4 1 4 1 1 6 1 2 2 6
Number of dice Player 1: 34
Number of dice Player 2: 29
Player 2 wins.
```

### Variante 2:

Der Benutzer gibt zu Beginn z.B. nicht ein Punktemaximum an, sondern definiert die Anzahl
Würfe, welche die Spieler würfeln sollen. Derjenigen mit der höheren Punktzahl gewinnt zum
Schluss das Spiel.
