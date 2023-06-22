# 📝 Verwendung von Konstanten

- Erstellen Sie eine Klasse, welche die unten definierte Konstante `MWST` enthält.
- Erstellen Sie eine zweite Klasse mit der `main`-Methode.
- In der `main`-Methode verlangen Sie vom Benutzer einen Betrag.
  - Es soll also eine **Fliesskommazahl eingeben** werden können.
- Die eingegebene Zahl betrachten wir als Rechnungsbetrag ohne Mehrwertsteuer.
- Berechnen Sie nun den Mehrwertsteuerbetrag und geben Sie diesen auf die Konsole aus.

```java title="Konstante MWST in Prozent"
public static final float MWST = 7.7;
```

:::tip Die Konstante können Sie über den Klassennamen, gefolgt von einem Punkt ansprechen.
:::

<details><summary>Musterlösung:</summary>

```java title="Constants.java"
public class Constants {
    public static final float MWST = 7.7;
}
```

```java title="MwstCalculator.java"
import mytools.StdInput;

public class MwstCalculator {
  public static void main (String[] args) {
    System.out.println("Please enter amount:");
    float amount = StdInput.readFloat();
    float mwst = Constants.MWST * amount / 100; 
    System.out.println("MWST: " + mwst);
    System.out.println("Amount incl. MWST: " + (amount + mwst);
  }
}
```

</details>
