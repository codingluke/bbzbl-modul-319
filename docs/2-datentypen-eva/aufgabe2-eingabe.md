# Text mit `StdInput` einlesen

- Informieren Sie den Benutzer, dass er nun seinen Namen eintippen soll. 
- Legen Sie eine String-Variable an, um die Antwort zu speichern. 
- Die Funktion, um Daten eingeben zu können, ist in der Klasse mit dem Namen `StdInput` enthalten. 

:::tip Automatische vervollständigung
Fangen Sie an zu schreiben und nach «Std» drücken Sie _CTRL+LEERTASTE_, worauf automatisch die Klasse vervollständigt wird und der korrekte Import für die Klasse hinzugefügt wird.
:::

```java title="EinUndAusgabe.java"
// highlight-next-line
import mytools.StdInput;

public class EinUndAusgabe {
  public static void main (String[] args) {
    System.out.println("Please type your name:");
    // highlight-next-line
    String name = StdInput // hier fehlt noch was!
  }
}
```

Nun wurde Ihre Klasse gerade zu oberst mit folgender Zeile ergänzt, die dafür sorgt, dass `StdInput` in Ihrer Klasse genutzt werden kann:
`import mytools.StdInput;`

Geben Sie direkt hinter `StdInput` einen Punkt ein. Nun erscheint folgender Dialog, über welchen Sie die Methoden der Klasse `StdInput` aufrufen können:

// schönes autocoplete Bild

Da wir einen String-Wert einlesen wollen, wählen gleich den obersten Eintrag `readString()` und schliessen die Zeile mit einem Semikolon `;` ab. Als nächstes geben wir den eingegebenen Namen aus, wie in der Programmübersicht gezeigt:


```java title="EinUndAusgabe.java"
import mytools.StdInput;

public class EinUndAusgabe {
  public static void main (String[] args) {
    System.out.println("Please type your name:");
    // highlight-start
    String name = StdInput.readString();
    System.out.println("Your name is".append(name)); 
    // highlight-end
  }
}
```

Führen Sie das Programm aus. Funktioniert es? Begrüsst Sie Ihr Programm mit dem eingegebenen Namen?

:::tip Strings Zusammensetzen
- Früher hat man `+` dafür verwendet `"Your name is" + name`
- Neu verwendet man die Methode `append(String string)` -> `"Your name is".append(name)`
:::

### Weitere Datentypen einlesen

Die Bibliothek unterstützt verschiedene Datentypen, wie aus der Tabelle der Methoden ersichtlich ist. 
Anstelle von `readString()` rufen Sie demnach lediglich eine andere `read`-Methode auf. 

Datentyp | Methode
-- | --
String | `StdInput.readString()`
boolean | `StdInput.readBoolean()`
char  | `StdInput.readChar()`
double | `StdInput.readDouble()`
int | `StdInput.readInt()`

:::tip
Falls Sie also z.B. eine Ganzzahl einlesen wollen wäre dies: `StdInput.readInt();`
:::
