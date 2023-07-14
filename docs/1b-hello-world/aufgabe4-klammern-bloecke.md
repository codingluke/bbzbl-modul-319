# Klammerpaare und Blöcke

In Java ist es wichtig, dass Sie bei allen Klammern immer daran denken, dass
diese **paarweise eingesetzt werden**. In Java werden folgende Klammertypen
verwendet:

- `{ }` Codeblock
- `( )` Methoden/Funktions Signatur (meistens gefolgt von einem Codeblock)
- `[ ]` Arrays (Auflistung, Anordnung)

Als eine Besonderheit kennzeichnet dieses Klammerpaar `{ }` sogenannte Blöcke,
die man auch als Programmabschnitte bezeichnen kann.

:::info

- Nach einem Codeblock `}` folgt **kein** Semikolon
- Nach einer Schliessenden normalen Klammer `)` folgt in der Regel eine
  geschweifte Klammer `{`
  - Ausnahmen sind in dem Modul nicht relevant.
- Jeder Befehl endet mit einem Semikolon `;`
  - Nach jedem Semikolon sollte eine neue Zeile beginnen, muss aber nicht!
  - Dies nicht zu machen ist **schlechter Stiel und gibt Abzug**!

:::

## :pencil: Aufgaben

### 1. Blöcke finden

Wenden Sie nun das im oberen Abschnitt vorgestellte Konzept der Blöcke an.
Bisher haben wir die Klassen und `main`-Methode von Java kennen gelernt.

- Tragen Sie im folgenden HelloWorld-Programm die **vorhandenen Blöcke** ein.
- Zeichnen Sie ein, welche anderen Klammern Paare bilden.

```java title="HalloWorld.java"
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
```

:::tip

- Sie können in Eclipse mit `// Kommentaren` die Blöcke benennen
- Oder Sie können den Block auch mit dem Snipping-Tool **"screenshoten"** und in
  einem Programm Ihrer Wahl, mit dem **Markertool** durchführen. (Paint / ...)
- Order, wenn Sie diese Seite **ausdrucken**, können Sie die Aufgabe mit einem
  konventionellen Marker von Hand durchführen.

:::

### 2. _HelloWorld.java_ Datei finden

Und wo liegt nun die _HelloWorld.java_ Datei?

- Klicken Sie _in Eclipse_ mit der rechten Maustaste auf die Klasse `HelloWorld`
  und wählen Sie _«Show in»_, dann _«System Explorer»_.
- Anschliessende sehen Sie die Klasse im Windows Explorer rsp. Finder.

:::caution Achtung!

Der **Klassenname und Dateiname müssen immer identisch sein**. Probieren Sie es
aus. Nun sollte Eclipse einen Error anzeigen.

:::

### 3. Das `bin`-Verzeichnis und `class`-Dateien suchen

Suchen Sie von hier aus auch das `bin`-Verzeichnis. Sie sollten darin die
class-Dateien sehen. Diese werden jeweils bei jeglicher Veränderung durch
Eclipse neu an dieser Stelle erzeugt.
