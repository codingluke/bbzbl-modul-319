---
keywords:
  - pdf
---
# 🖲️ Die Klasse Scanner

Java beinhaltet bereits viele vorgefertigte Tools um gängige Aufgaben zu lösen.
Eine davon ist das Einlesen und Verarbeiten von Benutzereingaben. Wir werden in
diesem Modul nur Programme scheiben, welche mit dem Benutzer über die Konsole
interagieren. Diese nennt man auch Konsolen-Applikationen.

Dafür bietet Java die Klasse `java.util.Scanner` an. Sie "scannt" sozusagen die
Eingabe von Benutzer und gibt diese zurück.

## Verwendung

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

## Weitere Methoden

| Methode      | Datentyp         |
| ------------ | ---------------- |
| next()       | String           |
| nextLine()   | String bis Enter |
| nextInt()    | int              |
| nextLong()   | long             |
| nextFloat()  | float            |
| nextDouble() | double           |
