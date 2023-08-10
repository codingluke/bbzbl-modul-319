---
keywords:
  - pdf
---
# 📝 Text mit `Scanner` einlesen

## Aufgabenbeschreibung

- Informieren Sie den Benutzer, dass er nun seinen Namen eintippen soll.
- Legen Sie eine `String`-Variable an, um die Antwort zu speichern.
- Die Funktion, um Daten eingeben zu können, ist in der Klasse mit dem Namen
  `Scanner` enthalten.

## Schritt für Schritt Anleitung

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
