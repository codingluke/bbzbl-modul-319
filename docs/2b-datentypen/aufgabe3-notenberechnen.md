# 📝 Noten berechnen

Erstellen Sie ein Programm, welches vom Benutzer

- drei Semesternoten einliest (`StdInput.read...`)
- den Durchschnitt berechnet
- sich dabei an ein strenges Notensystem hält, dass nur ganze Noten zulässt und immer abrundet
- den Durchschnitt ausgibt

:::note

- Anhand dieser Übung erkennen Sie, dass man mit Variablen und Zahlen ganz normal rechnen kann.
- Auch sollte nun das **EVA-Prinzip** klar werden

:::

<details>
<summary>Musterlösung</summary>

**Wo ist die Methode `main`?**

- Die Klasse mit der `main` Methode müsst Ihr selber erstellen.
- der `import` gehört ganz oben ins File. 
- `...` kann man löschen ;)

```java title="Musterlösung ohne main"
import mytools.StdInput;

...

// deklarieren
double grade1;
double grade2;
double grade3;
double result;

// E - Einlesen 
System.out.println("Welcome to the average calculator");
System.out.println("Please enter the first grade");
grade1 = StdInput.readDouble();
System.out.println("Please enter the second grade");
grade2 = StdInput.readDouble();
System.out.println("Please enter the third grade");
grade3 = StdInput.readDouble();

// V - Verarbeiten
result = (grade1 + grade2 + grade3) / 3;

// A - Ausgeben
System.out.println("The average grade is: " + result);
```

</details>
