---
keywords:
  - pdf
---

# Zusatz - Scanner

## Die Klasse Scanner

Java beinhaltet bereits viele vorgefertigte Tools um gängige Aufgaben zu lösen.
Eine davon ist das Einlesen und Verarbeiten von Benutzereingaben. Wir werden in
diesem Modul nur Programme scheiben, welche mit dem Benutzer über die Konsole
interagieren. Diese nennt man auch Konsolen-Applikationen.

Dafür bietet Java die Klasse `java.util.Scanner` an. Sie "scannt" sozusagen die
Eingabe von Benutzer und gibt diese zurück.

:::caution Musterlösungen mit mytools.StdInput

Die Klasse `Scanner` wird hier für wissbegierige vorgestellt, da Sie zum
Standard-Repetoir von Java gehört. Das Package `mytools` wird ausserhalb der
BBZBL nicht verwendet.

Die BBZBL verwendet für dieses Modul die Klasse `mytools.StdInput`. Ihr dürft
alle Aufgaben auch mit dem `Scanner` lösen. Dafür gibt es jedoch keine
Musterlösungen.

:::

### Verwendung

Um den Scanner zu verwenden, müssen **3 Punkte** beachtet werden:

```java title="Verwenden vom Scanner"
// highlight-next-line
import java.util.Scanner;

class MyClassWithScanner { // INFO: Der Klassenname ist beliebig!

    // highlight-next-line
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        // hier kann nun der scanner verwendet werden
        // highlight-next-line
        String eingabe = scanner.next(); // next() gibt immer einen String zurück
        System.out.println("Ihre eingabe war: " + eingabe);
    }

}
```

1. Er muss importiert werden mit `import java.util.Scanner;`
2. Er muss initialisiert werden mit
   `private static Scanner scanner = new Scanner(System.in);`
3. Er muss verwendet werden mit `scanner.next...`

### Weitere Methoden

| Methode      | Datentyp         |
| ------------ | ---------------- |
| next()       | String           |
| nextLine()   | String bis Enter |
| nextInt()    | int              |
| nextLong()   | long             |
| nextFloat()  | float            |
| nextDouble() | double           |

## :pencil: Aufgabe: Text mit `Scanner` einlesen

- Informieren Sie den Benutzer, dass er nun seinen Namen eintippen soll.
- Legen Sie eine `String`-Variable an, um die Antwort zu speichern.
- Die Funktion, um Daten eingeben zu können, ist in der Klasse mit dem Namen
  `Scanner` enthalten.

### Schritt für Schritt Anleitung

1. Kopieren Sie den folgenden Code in eine Datei namens `EinUndAusgabe.java`

```java title="EinUndAusgabe.java" showLineNumbers
public class EinUndAusgabe {

  // highlight-next-line
  private static Scanner scanner = new Sc  // hier fehlt noch was

  public static void main (String[] args) {
    System.out.println("Please type your name:");
    // highlight-next-line
    String name = scanner // hier fehlt noch was!
  }
}
```

2. **Zeile 3:** Vervollständigen Sie `new Sc` mit `new Scan` und drücken Sie
   danach _CTRL+LEERTASTE_.
   - Dadurch wird eine automatische Vervollständigung von Eclipse aktiviert
     welche ebenfalls den korrekte Import für die Klasse hinzufügt.
   - Nun wurde Ihre Klasse gerade zu oberst mit folgender Zeile ergänzt, die
     dafür sorgt, dass `Scanner` in Ihrer Klasse genutzt werden kann:
     `import java.util.Scanner;`
3. **Zeile 7/8:** Geben Sie direkt hinter `scanner` **einen Punkt** ein.

   - Nun erscheint folgender Dialog, über welchen Sie die **Methoden der Klasse
     `scanner` aufrufen** können:

     ![autocompete](images/methoden-autocomplete.png)

   - Da wir einen String-Wert einlesen wollen, wählen gleich den obersten
     Eintrag `next()` und schliessen die Zeile mit einem Semikolon `;` ab.

4. Als nächstes geben wir den eingegebenen Namen aus

   - Dafür verwenden wir `System.out.println()`. Dies ist der Standardweg in
     Java text auf die Konsole auszugeben.

```java title="EinUndAusgabe.java"
import java.util.Scanner;

public class EinUndAusgabe {

  private static Scanner scanner = new Scanner(System.in);

  public static void main (String[] args) {
    System.out.println("Please type your name:");
    // highlight-start
    String name = scanner.next();
    System.out.println("Your name is " + name);
    // highlight-end
  }
}
```

5. Führen Sie das Programm aus. Funktioniert es? Begrüsst Sie Ihr Programm mit
   dem eingegebenen Namen?

:::tip Methodenzugriff über Punkt

Auf statische **Methoden** einer statischen Klasse wird immer **über einen
Punkt** zugegriffen.

```java
KlassenName.methodenName([optionaleParemeter]);
//         ^
//   wichtiger Punkt!
```

:::

:::tip Strings Zusammensetzen

- Mit einem `+` können Strings Zusammensetzen werden
- Der erste String sollte mit einem Leerzeichen Enden, wieso?

```java title="Strings zusammensetzen"
String name = "Herr Lehrer";
System.out.println("Your name is " + name);
//                              ^ Leerzeichen!
//                  Your name is Herr Lehrer

System.out.println("Your name is" + name);
//                  Your name isHerr Lehrer
```

:::

### Weitere Datentypen einlesen

Die Bibliothek unterstützt verschiedene Datentypen, wie aus der Tabelle der
Methoden ersichtlich ist. Anstelle von `readString()` rufen Sie demnach
lediglich eine andere `read...`-Methode auf.

```java title="Datentypen mit Scanner einlesen"
int     ganzZahl       = scanner.nextInt();
char    character      = scanner.next().charAt(0);
String  text           = scanner.next();
double  gleitKommaZahl = scanner.nextDouble();
boolean bool           = scanner.nextBoolean();
```
