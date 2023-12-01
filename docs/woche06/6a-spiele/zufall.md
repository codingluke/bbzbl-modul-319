# 📖 Zufall erzeugen

In Java gibt es eine Klasse `Math`. Auf dieser kann man beispielsweise den
Befehl `Math.random()` aufrufen, dann bekommt man eine **Zahl zwischen 0
inklusive und 1** (exklusive) zurück.

Wenn ein Programm einen Würfelwurf simulieren soll, müssen die Zahlen 1 bis 6
zufällig zurückgegeben werden. Die Formel dafür sieht folgendermassen aus:

```java title="6er Würfel"
int diceValue = (int) (Math.random() * 6) + 1;
```

In anderen Spielen muss nun z.B. aber eine Zahl zwischen 1 und 100 zufällig
erstellt werden. Dazu dürft die folgende generelle Formel in Form der Methode
`randomNumberInRange` verwenden. Sie hat die Parameter `int min` und `int max`,
mit welchen man den Bereich definieren kann:

```java title="Generelle Zufallszahl Formel"
public static int randomNumberInRange(int min, int max) {
    // highlight-yellow-next-line
    // Achten Sie darauf, die Klammern korrekt zu setzen.
    return (int)(Math.random() * (max - min + 1)) + min;
}
```

Verwenden kann man diese nun z.B. so:

```java
int nummerZwischenEinsUndElf = randomNumberInRange(1, 11);
```

oder als Würfel, so:

```java
int dice = randomNumberInRange(1, 6);
```
