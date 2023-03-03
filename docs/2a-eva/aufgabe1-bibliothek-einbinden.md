# 📝 Bibliothek `MyTools` einbinden

## 1. Neues Projekt und Klasse erstellen

- Erstellen Sie in Ihrem persönlichen Workspace ein neues Projekt namens "EVA". 
- Legen Sie darin die Klasse `EinUndAusgabe` an.

## Eclipse für die Bibliothek einrichten 

1. Legen Sie im Projekt ein Verzeichnis «lib» an
    - Rechtsklick auf das **_Projekt -> New -> Folder_**
2. Laden Sie die Bibliotheks-Datei [MyTools.jar](./) von der Modulwebseite herunter.
3. Kopieren Sie die jar-Datei in das erstellte lib-Verzeichnis
    - Falls Sie die Datei auf Filesystem Ebene kopiert haben, muss allenfalls die **Ansicht in Eclipse aktualisiert** werden
    - Rechtsklick auf das **_Projekt -> Refresh_** 
4. Klicken Sie nochmals mit der rechten Maustaste auf den Projekteintrag im Package Explorer.
    - Wählen Sie diesmal «Build Path», dann «Configure Build Path». 
    - Wählen Sie das Register Libraries, dann den Eintrag Classpath. 
    - Klicken Sie auf «Add JARs...». Öffnen Sie das Projekt und das lib-Verzeichnis, und wählen MyTools.jar. 
    - Klicken Sie auf «Apply and Close».

## Die Klasse `StdInput`

Die Bibliothek beinhaltet die Klasse `StdInput`. Mit dieser können verschiedene Datentypen vom Terminal aus eingelesen werden.

Datentyp | Methode
-- | --
String | `StdInput.readString()`
boolean | `StdInput.readBoolean()`
char  | `StdInput.readChar()`
double | `StdInput.readDouble()`
int | `StdInput.readInt()`

:::tip
- Falls Sie also z.B. eine Ganzzahl einlesen wollen wäre dies: `int number = StdInput.readInt();`
- Falls Sie ein String einlesen wollen wäre dies: `String textEntry = StdInput.readString();`
:::
