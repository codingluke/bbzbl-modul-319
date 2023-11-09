---
keywords:
  - pdf
---

# 🦸 Weitere Übungen

Diese Übungen sind freiwillig. Viel programmieren ist jedoch die effizienteste Art das Programmieren zu lernen 😉
## Quelltext / Code lesen / interpretieren können

Überlegen Sie die Wirkung der nachfolgenden Ausschnitte aus grösseren
Programmen. Lesen Sie die Frage und schreiben die Antwort auf ein Blatt Papier:

```java title="Welcher Wert für r ausgegeben?"
int a, b, c, d, r;
a = 5;
b = -2;
c = 0;
d = 1;
r = a + b + c + d;
System.out.println(r);
```

```java title="Welche Ausgabe erfolgt?"
int x, y;
x = 2;
y = 3;

if (x > y) {
    System.out.println("case x");
} else {
    System.out.println("case y");
}
```

```java title="Welcher Wert wird berechnet?"
double fahrenheit = 212;
double celsius = (fahrenheit - 32.0) / 1.800;
System.out.println(celsius);
```

<details>
<summary>Musterlösung</summary>

```java
//Block 1: 4
//Block 2: "Y"
//Block 3: 100.0
```

</details>

## Fehler in Quelltext / Code entdecken können

Sehen Sie die nachfolgenden Programme an. Entdecken Sie die Fehler und schreiben
Sie die Korrektur direkt in auf dieses Blatt.

```java title="Finden Sie den logischen Fehler:"
public class PriceForQuantity {
    public static void main(String[] args) {
        int quantity = 8;
        double price = 1.8;
        double amountDue = quantity / price;
        System.out.println(amountDue);
    }
}
```

```java title="Finden Sie die 3 Fehler:"
public class HelloUser {
    public static void main(String[] args) {
        String name = readString();
        Sysout("Hello, " name);
    }
}
```

<details>
<summary>Musterlösung</summary>

- logischer Fehler / statt \*

```java title="Aufloesung drei Fehler:"
import mytools.StdInput; // import fehlte

public class HelloUser {
	public static void main(String[] args) {
		String name = StdInput.readString() // StdInput fehlte
		System.out.println("Hello, " + name); //System.out.println, + fehlten
	}
}

```

</details>

## Quelltext / Code für kleine Programme schreiben können

### Programm 1

Erstellen Sie ein Programm, welches Meilen einliest und in km umrechnet und
ausgibt.

Die Berechnung erfolgt so: `km = miles / 0.62137;`

Erweiterung nachdem alle Programme fertig sind:

- Umkehrung, km einlesen, Meilen ausgeben.
- Auswahl durch den Benutzer.

<details>
<summary>Muaterlösung</summary>

```java
import mytools.StdInput;

public class A1MilesAndMore {

	public static void main(String[] args) {
		System.out.print("Meilen: ");	// wenn print verwendet wird statt println gibt es nach dem Text keinen Zeilenumbruch
		double miles = StdInput.readDouble();

		double km = miles / 0.62137;
		System.out.println(miles + " Meilen sind " + km + " Kilometer");

		System.out.println();
		System.out.println("Erweiterung 1");
		System.out.println("-------------");
		System.out.println();

		System.out.print("Kilometer: ");
		km = StdInput.readDouble();

		miles = km * 0.62137;
		System.out.println(km + " Kilometer sind " + miles + " Meilen");

		System.out.println();
		System.out.println("Erweiterung 2");
		System.out.println("-------------");
		System.out.println();

		System.out.println("Was möchten Sie machen?");
		System.out.println("1 - Umrechnung Meilen -> Kilometer");
		System.out.println("2 - Umrechnung Kilometer -> Meilen");
		System.out.print("Ihre Wahl: ");
		int selection = StdInput.readInt();

		if(selection == 1) {
			System.out.print("Meilen: ");	// wenn print verwendet wird statt println gibt es nach dem Text keinen Zeilenumbruch
			miles = StdInput.readDouble();

			km = miles / 0.62137;
			System.out.println(miles + " Meilen sind " + km + " Kilometer");
		} else if(selection == 2) {
			System.out.print("Kilometer: ");
			km = StdInput.readDouble();

			miles = km * 0.62137;
			System.out.println(km + " Kilometer sind " + miles + " Meilen");
		} else {
			System.out.println("Von so einer Auswahl war nicht die Rede");
		}
	}
}
```

</details>

### Programm 2

Erstellen Sie ein Programm, welches

- Distanz und Zugsgeschwindigkeit einliest
- die Reisedauer berechnet.

Folgende Werte können Sie als test verwenden:

- Distanz 120
- Geschwindigkeit 80
- Dauer: 1.5.

Erweiterung nachdem alle Programme fertig sind:

- Eingabe der Distanz und Reisedauer berechnet durchschnittliche
  Geschwindigkeit.

<details>
<summary>Musterlösung:</summary>

```java
import mytools.StdInput;

public class A2Trains {

	public static void main(String[] args) {
		System.out.print("Distanz: ");
		double distance = StdInput.readDouble();

		System.out.print("Zugsgeschwindigkeit: ");
		double speed = StdInput.readDouble();

		double time = distance / speed;
		System.out.println("Reisezeit: " + time);

		System.out.println();
		System.out.println("Erweiterung");
		System.out.println("-----------");
		System.out.println();

		System.out.print("Distanz: ");
		distance = StdInput.readDouble();

		System.out.print("Reisezeit (in Stunden): ");
		time = StdInput.readDouble();

		speed = distance / time;
		System.out.println("Durchnittsgeschwindigkeit: " + speed);
	}

}
```

</details>

### Programm 3

Erstellen Sie ein Programm, welches das aktuelle Datum und Uhrzeit ausgibt.

<details>
<summary>Musterlösung:</summary>

```java
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Date;

public class A3DateTime {

	public static void main(String[] args) {
		System.out.println(LocalDateTime.now());

		System.out.println(LocalDate.now());

		Date datetime = new Date();
		System.out.println(datetime.toString());

		Date now = Calendar.getInstance().getTime();
		System.out.println(now.toString());
	}

}
```

</details>

### Programm 4

Erstellen Sie ein Programm, welches die folgende Ausgabe erzeugt (rechnen Sie
mit ganzen int-Zahlen):

```bash
Wollen Sie auf Ihrer Pizza zusätzlich Schinken? (true/false)
true
Wollen Sie auf Ihrer Pizza zusätzlich Oliven?(true/false)
false
Ihre Pizza setzt sich wie folgt zusammen und kostet daher
Pizza Fr. 15
Zusätzlicher Schinkenbelag Fr. 2
Gesamtpreis Fr. 17
```

<details>
<summary>Musterlösung:</summary>

```java
import mytools.StdInput;

public class A4PizzaOrder {

	public static void main(String[] args) {
		System.out.println("Wollen Sie auf Ihrer Pizza zusaetzlich Schinken? (true/false)");
		boolean ham = StdInput.readBoolean();

		System.out.println("Wollen Sie auf Ihrer Pizza zusaetzlich Oliven? (true/false)");
		boolean olives = StdInput.readBoolean();

		System.out.println("Ihre Pizza setzt sich wie folgt zusammen und kostet daher");
		int price = 15;
		System.out.println("Pizza CHF " + price);

		if (ham) {
			System.out.println("Zusaetzlicher Schinkenbelag CHF 2");
			price = price + 2;
		}

		if (olives) {
			System.out.println("Zusaetzliche Oliven CHF 1");
			price = price + 1;
		}

		System.out.println("Gesamtpreis CHF " + price);
	}

}
```

</details>

### Programm 5

Erstellen Sie ein Programm, welches einen Bilettpreis abhängig von der Distanz
berechnet.

- Der Basispreis pro Kilometer ist 0.45 Einheiten.

<details>
<summary>Musterlösung</summary>

```java
import mytools.StdInput;

public class A5Ticket {

	public static void main(String[] args) {
		System.out.print("Distanz: ");
		double distance = StdInput.readDouble();

		double price = distance * 0.45;
		System.out.println("Preis: " + price);
	}

}
```

</details>

## Aufgabe Club

In dieser Aufgabe können die Themen Ausgabe, Eingabe, Datentypen (Variablen) und
die Kontrollstruktur if geübt werden.

In einen Club dürfen maximal 4 Personen auf einmal. Der Türsteher begrüsst die
ankommenden Gäste und fragt nach, wie viele Personen Sie sind. Bei mehr wie 4
Personen wird der Einlass mit der Aussage «Sie sind leider zu viele Personen»
verweigert. Bei weniger oder gleich 4 Personen wird nach den Personalien einer
Person gefragt. Die Daten Vor- und Nachname, Strasse, Plz, Ort und Telefonnummer
werden abgefragt und gespeichert.

- Wählen Sie dazu möglichst passende Datentypen.
- Danach folgt die Frage, ob sie schon 18 Jahre alt sind. «true» bedeutet ja,
  «false» nein.
- Wird «true» eingegeben, wünscht der Türsteher einen schönen Abend und
  wiederholt die Angaben.
- Bei «false» wird der Zutritt verweigert.

```md title="Beispiel Ablauf, wenn alles in Ordnung ist:"
Willkommen im Club Flamingo

---

Einlass möglich für maximal 4 Personen auf einmal. Wie viele Personen sind Sie:
4 Wir benötigen die Personalien von einer Person. Vorname: Hans Nachname: Muster
Strasse: Musterweg 1 Plz: 4000 Ort: Mustersta  
Telefon: 079 999 99 99 Sind Sie schon 18 Jahre alt? true Einen schönen Abend im
Flamingo. Ihre Angaben: Hans Muster Musterweg 1 4000 Mustersta  
Tel: 079 999 99 99
```

```md title="Reaktion des Programms, wenn es zu viele Personen sind:"
Willkommen im Club Flamingo

---

Einlass möglich für maximal 4 Personen auf einmal. Wie viele Personen sind Sie:
5 Sie sind leider zu viele Personen.
```

```md title="Reaktion des Programms, wenn das Alter kleiner wie 18 ist."
Willkommen im Club Flamingo

---

Einlass möglich für maximal 4 Personen auf einmal. Wie viele Personen sind Sie:
4 Wir benötigen die Personalien von einer Person. Vorname: Hans Nachname: Muster
Strasse: Musterweg 1 Plz: 4000 Ort: Mustersta  
Telefon: 079 999 99 99 SSind Sie schon 18 Jahre alt? false Sie sind leider zu
jung und dürfen nicht in den Club.ind Sie schon 18 Jahre alt?
```

<details>
<summary>Musterlösung:</summary>

```java
import mytools.StdInput;

public class Club {

	public static void main(String[] args) {
		System.out.println("Willkommen im Club Flamingo");
		System.out.println("***************************");
		System.out.println("Einlass möglich für maximal 4 Personen auf einmal.");

		System.out.print("Wie viele Personen sind Sie: ");
		int anzahl = StdInput.readInt();

		if (anzahl > 4) {
			System.out.println("Sie sind leider zu viele Personen.");
		} else {
			System.out.println("Wir benötigen die Personalien von einer Person.");
			System.out.print("Vorname: ");
			String vorname = StdInput.readString();
			System.out.print("Nachname: ");
			String nachname = StdInput.readString();
			System.out.print("Strasse: ");
			String strasse = StdInput.readString();
			System.out.print("Plz: ");
			int plz = StdInput.readInt();

			System.out.print("Ort: ");
			String ort = StdInput.readString();
			System.out.print("Telefon: ");
			String telefon = StdInput.readString();

			System.out.println("Sind Sie schon 18 Jahre alt?");
			boolean alterCheck = StdInput.readBoolean();
			if (alterCheck) {
				System.out.println("Einen schönen Abend im Flamingo.");
				System.out.println("Ihre Angaben:");
				System.out.println(vorname + " " + nachname);
				System.out.println(strasse);
				System.out.println(plz + " - " + ort);
				System.out.println("Tel: " + telefon);
			} else {
				System.out.println("Sie sind leider zu jung und dürfen nicht in den Club.");
			}

		}

	}
}
```

</details>
