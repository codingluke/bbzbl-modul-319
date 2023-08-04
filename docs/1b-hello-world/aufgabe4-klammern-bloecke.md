# Analyse des bisherigen Programms

Nun haben wir schon ein ausführbares Programm. Hier wird nun Analysiert wie es
genau Aufgebaut ist. Wie ist die Struktur?, Wo liegen die Dateien?

## Von Klammerpaaren und Blöcken

Klammerpaare dienen in Java zum Gruppieren von zusammengehörigem Code. Diese
Gruppen werden auch Blöcke genannt. Als Eselsbrücke könnt Ihr euch einen Schrank
vorstellen. Dieser ist in Schubladen unterteilt, wobei jede Schublade eine
gewisse Kategorie von Gegenstände beherbergt. Z.B. Socken, Unterhosen, T-Shirts,
usw.

:::tip Struktur ist die halbe Miete, wenn nicht mehr

Natürlich kann man einen Schrank wild füllen, nur ist es dann nicht mehr so
einfach etwas zu finden. Und genau so ist es beim Programmieren!

Achtet darauf Programme gut zu Strukturieren. Dazu dienen Code-Blöcke.

:::

Es ist nun wichtig, dass Sie bei allen Klammern immer daran denken, dass diese
**paarweise eingesetzt werden**. Sie müssen also geschlossen werden. Nur so
können Sie Code Gruppieren. Wird eine Klammer nicht geschlossen, gibt es keine
klare Abgrenzung (ähnlich wie bei normalem Text... Da fehlt wohl eine Klammer!

In Java werden folgende Klammertypen verwendet:

- `{ }` Geschweifte Klammern für **Codeblock**
- `( )` Runde Klammern für **Methoden/Funktions Signatur** (meistens gefolgt von
  einem Codeblock)
- `[ ]` Eckige Klammern für Auflistungen, auch **Arrays** genannt

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

### :pencil: 1. Blöcke finden

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

## Dateienstruktur

Wenn Ihr in Eclipse Dateien erstellt, werden automatisch auch Dateien auf dem
Dateisystem angelegt. Die Struktur ist meistens gleich zum Project-Explorer von
Eclispe, aber nicht immer.

### :pencil: _HelloWorld.java_ Datei finden

Und wo liegt nun die _HelloWorld.java_ Datei?

- Klicken Sie _in Eclipse_ mit der rechten Maustaste auf die Klasse `HelloWorld`
  und wählen Sie _«Show in»_, dann _«System Explorer»_.
- Anschliessende sehen Sie die Klasse im Windows Explorer rsp. Finder.

:::caution Achtung!

Der **Klassenname und Dateiname müssen immer identisch sein**. Probieren Sie es
aus. Nun sollte Eclipse einen Error anzeigen.

:::

### :pencil: Das `bin`-Verzeichnis und `class`-Dateien suchen

Suchen Sie von hier aus auch das `bin`-Verzeichnis. Sie sollten darin die
`class`-Dateien sehen. Diese werden jeweils bei jeglicher Veränderung durch
Eclipse neu an dieser Stelle erzeugt.
