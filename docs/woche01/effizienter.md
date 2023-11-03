---
keywords:
  - pdf
---

# ⚡ Effizienter mit Eclipse

## Workspace

Mit Workspace (Arbeitsbereich) wird ein bestimmter Ordner bezeichnet, in dem ein
"beliebige" Anzahl an Eclipse-Projekten gespeichert werden können. Mit Vorteil
ist der Begriff "workspace" in der Ordnerbezeichnung enthalten. Wenn man in
diesen "workspace"-Ordner hinein geht, so ist mindestens ein Unterordner mit dem
Namen ".metadata" enthalten, woran man erkennen kann, dass man sich eine Ebene
unterhalb des workspace-Ordner befindet.

:::caution

Wichtig ist jeweils beim öffnen, dass der workspace-Ordner ausgewählt wird, und
nicht ein Unterordner.

- Löschen, Umbenennen, Verschieben von Projekten sollten nur mit einer gewissen
  Vorsicht vollzogen werden, am besten nur aus Eclipse, da sonst der workspace
  beschädigt oder zerstört werden kann.

:::

## Projekte im Workspace

Der Aufbau von Java-Projekten enthält meist folgende Ordner:

- `bin`: Hauptverzeichnis für kompilierte `.class`-Dateien
- `scr`: Hauptverzeichnis für Java-Klassen also `.java`-Dateien
- `.classpath` und `.project`: Eclipse spezifische Dateien, welche das Projekt
  beschreiben

:::caution

Auch Projekte im workspace sollte man nur mit Vorsicht und wenn man weiss, was
man tut, ausserhalb von Eclipse ändern.

:::

### Code Editor, Console und weitere Ansichten

- **Laschen** / Begrüssungsbild
  - Doppelklick: die Ansicht wechselt innerhalb Eclipse zwischen Voll- und
    Teilbild
  - Schliessen: über das X oben rechts an der Lasche
- **Package Explorer**: zeigt den "Projektbaum" mit der src-Ordner, in dem die
  Java-Klassen dargestellt sind, in der Titelzeile ist ein gelbes Pfeilpaar `<->`,
  ist es eingedrückt, wird im Projektbaum die Klasse, welche rechts daneben im
  Editor geöffnet wird, angezeigt.
- **Code Editor**: dient zum bearbeiten der Java-Klassen
- **Console**: gibt Meldungen aus dem Programm aus
- **Problems**: zeigt eine Zusammenfassung der Probleme im aktuellen Projekt
- **Outline**: zeigt eine schematische Ansicht der aktuellen Klasse

:::info Fehlt eine Ansicht?

Hier ist der Weg, jede beliebige Ansicht wieder anzuzeigen:

- Menü: Window > Show View > Auswahl aus Liste
- :bulb: Ansicht zurücksetzen: Window > Perspective -> Reset Perspective

:::

## Wichtigste Shortcuts

- `CTRL+SHIFT+F`: Formattierung des Quellcodes durch Eclipse
- `CTRL+SPACE`: Auto-Complete in vielen Situationen
- `CTRL+7`: ausgewählte Zeilen werden zeilenweise mit // auskommentiert (für den
  Compiler unsichtbar)
- `SHIFT+ALT+R`: Umbenennen des ausgewählten Elements

## Warnungen und wirkliche Fehler

Eclipse bringt viele Warnungen, z.B. wenn eine Variable erst angelegt ist,
erscheint eine Warnung, dass die Variable noch nicht verwendet wird. Diese
Warnungen mit gelbem Ausrufezeichen können ignoriert werden.

Wirkliche Fehler werden durch eine rote Wellenlinie angezeigt. Häufig kann
Eclipse feststellen, wo der Fehler ist, und die Wellenlinie und der Hinweis
können bei der Fehlersuche helfen. Es gibt aber auch Situation, wo man selbst
etwas analysieren muss, wo der Fehler oberhalb oder unterhalb ist.

### Ist der Workspace beschädigt?

**Projekte aus defektem workspace retten**

Können Java-Klassen in einem workspace nicht mehr bearbeitet oder ausgeführt
werden:

- erstellen Sie zuerst eine Kopie des workspace an einem sicheren Ort (Ordner).
- Prüfen Sie, ob der workspace richtig ausgewählt und geöffnet wurde

Falls keine Verbesserung eintritt, können Projekte wie folgt gerettet werden:

- sichern Sie den alten workspace an einem sicheren Ort (Ordner)
- erstellen Sie zuerst einen neuen sauberen workspace
- öffnen Sie Eclipse nun und wählen diesen workspace aus
- vergewissern Sie sich, dass im workspace-Ordner nur der .metadata-Ordner
  enthalten ist
- in Eclipse gehen Sie nun via Menü File > Import zum Dialog "Import"
- im 1. Schritt im Dialog "Import" wählen Sie aus der Liste "General > Existing
  Projects into Workspace > Next"
- im 2. Schritt im Dialog "Import" muss das Wurzelverzeichnis des Workspace, aus
  dem Sie Projekte retten wollen, ausgewählt werden, wählen Sie unterhalb
  unbedingt "Copy projects into workspace" an

### Ausserhalb der Schule üben?

Super, nachfolgend finden Sie die Schritte, welche dazu nötig sind.

- **Voraussetzung 1**: Java downloaden und installieren Java auf einem Rechner
- **Voraussetzung 2**:
  [Eclipse downloaden und installieren](https://eclipseide.org/)

:::tip Arbeiten Sie bevorzugt mit Ihrem Laptop

Wenn Sie auch in der Schule mit ihrem Laptop arbeiten, hat dies der Vorteil,
dass sie ohne Probleme auch zuhause arbeiten könnt, ohne dass die Dateien
kopiert werden müssen.

:::

## Alternativen zu Eclipse

Netbeans ist eine ebenfalls Open-Source-Alternative, während es sich bei
IntelliJ IDEA um ein kommerzielles Programm der Firma JetBrains handelt (es ist
allerdings für Lernende derzeit jeweils für ein Jahr kostenlos lizenzierbar),
das bei vielen Entwicklern sehr beliebt ist. IDEA kann, neben anderen Programmen
von JetBrains, von Lernenden während der Ausbildung kostenlos genutzt werden.

Beachten Sie, dass im Unterricht nur der Umgang mit Eclipse unterstützt wird.
Wählen Sie eine andere IDE aus, so sind Sie auf sich selbst gestellt.
