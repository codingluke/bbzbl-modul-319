---
sidebar_position: 5
keywords:
  - pdf
---

# 📖 switch - Selektion

Wir haben bereits die if-Selektion kennengelernt. Dort kann anhand einer
Bedingung eine Wahl zwischen zwei Möglichkeiten getroffen werden. Das ist eine
sehr gute Möglichkeit, ein Programm flexibel zu machen.

Aber manchmal gibt es Situationen, bei denen man zwischen **mehr als zwei
Möglichkeiten** unterscheiden möchte. So eine Situation lässt sich lösen, indem
man etliche ifs nacheinander hängt.

Hier ein Auszug aus einer Übungsaufgabe, in der ein Würfelspiel implementiert
wurde:

```java
int number = rollDice();
if (number == 1) {
    countOne++;
} else if (number == 2) {
    countTwo++;
} else if (number == 3) {
    countThree++;
} else if (number == 4) {
    countFour++;
} else if (number == 5) {
    countFive++;
} else if (number == 6) {
    countSix++;
}
countAll++;
```

:::note

Das obere Beispiel ist nicht alleine lauffähig, dafür fehlt die Methode
`rollDice()` sowie die Variable `countOne`.

:::

Für solche MehrfachSelektionen gibt es auch die Kontrollstruktur `switch`.
Switch ermöglicht es, **auf genaue**, unterschiedliche Werte zu reagieren
(`==`). Dabei können die Wert numerisch oder ein String sein. Das Muster sieht
so aus:

```java
switch (<Ausdruck>) {
    case value:
        <Anweisung>;
        break;
    case value:
        <Anweisung>;
        break;
    default:
        <Anweisung>;
        break;
}
```

Nach dem Schlüsselwort steht in runden Klammern eine Variable, deren Werte in
den anschliessenden case-Blöcken ausgewertet werden. Besteht für den aktuellen
Wert der Variablen ein passender case-Block, springt das Programm dort hinein,
führt die Anweisungen aus, und springt aufgrund der break-Anweisung aus dem
switch heraus (ohne break würden alle nachfolgenden Blöcke auch durchlaufen).
Das default am Schluss ermöglicht es, Anweisungen für alle anderen Fälle
festzulegen, in denen kein exakter Wert in einem case steht.

Ein konkretes Beispiel sieht so aus:

```java
public class SwitchDemo {
    public static void main(String[] args) {
        int month = 8;
        String monthString;
        switch (month) {
            case 1:
                monthString = "January";
                break;
            case 2:
                monthString = "February";
                break;
            //... andere Fälle hier ausgelassen
            case 8:
                monthString = "August";
                break;
            //... andere Fälle hier ausgelassen
            default:
                monthString = "Invalid month";
                break;
        }
        System.out.println(monthString);
    }
}
```

