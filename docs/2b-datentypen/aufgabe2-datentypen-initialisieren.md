# 📝 Datentypen initialisieren

Erstellen Sie ein Programm, in welchem Sie:

- für jeden Datentypen eine Variable **deklarieren**
- einen passenden Wert fest **zuweisen**
- und anschliessend die Variablen **ausgeben**
  - Versucht evt. Datentypen zu verbinden!

<details>
<summary>Musterlösung</summary>

**Wo ist die Methode `main`?**

- Die Klasse mit der `main` Methode müsst Ihr selber erstellen.
- der `import` gehört ganz oben ins File.
- `...` kann man löschen ;)

```java
// deklarieren
boolean aBoolean;
byte aByte;
short aShort;
char aChar;
int aInt;
float aFloat;
long aLong;
double aDouble;
String aString;

// initialisieren
aBoolean = true;
aByte = 127;
aShort = 32767;
aChar = 'a';
aInt = 2147483647;
aFloat = 12.1234567f;
aLong = 9223372036854775807l;
aDouble = 12.123456789123456d;
aString = "Hallo ich bin ein Text";

// ausgeben
System.out.println(aBoolean);
System.out.println(aByte + aShort + aInt + aLong);
System.out.println(aFloat + aDouble);
System.out.println(aString + aBoolean);`
```

</details>

## :superhero: Bonusauftrag einlesen

Sobald Sie den **obigen Auftrag abgeschlossen** haben, können Sie sich nach
Vorgabe Ihrer Lehrperson (und sofern genügend Zeit verfügbar ist) eine Variante
des Programms erstellen, bei der Sie die Werte mit dem `StdInput` von `mytools`
einlesen.

:::info nicht alle Datentypen möglich

Die Klasse `StdInput` besitzt <u>keine Methoden</u> für die Datentypen `byte`,
`short`, `long` und `float`. Diese müssen (können) also nicht eingelesen werden.

:::

:::tip Scanner

Java besitzt die Klasse `Scanner`. Mit dieser können alle Datentypen eingelesen
werden. Dies ist jedoch nicht statisch, braucht also ein Objekt, desswegen wird
sie im Unterricht noch nicht vorausgesetzt. Interessiere, dürfen diese gerne
testen!

:::

<details>
<summary>Musterlösung</summary>

**Wo ist die Methode `main`?**

- Die Klasse mit der `main` Methode müsst Ihr selber erstellen.
- der `import` gehört ganz oben ins File.
- `...` kann man löschen ;)

```java
import mytools.StdInput;

...

int number;
double largeDecimalNumber;
char single;
boolean customer;
String comment;

System.out.println("Please enter a int value: ");
number = StdInput.readInt();
System.out.println("Please enter a double value: ");
largeDecimalNumber = StdInput.readDouble();
System.out.println("Please enter a char value: ");
single = StdInput.readChar();
System.out.println("Please enter a boolean value: ");
customer = StdInput.readBoolean();
System.out.println("Please enter a String value: ");
comment = StdInput.readString();

System.out.println(number);
System.out.println(largeDecimalNumber);
System.out.println(single);
System.out.println(customer);
System.out.println(comment);
```

</details>
