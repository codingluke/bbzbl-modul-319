---
keywords:
  - pdf
---
# 📖 foreach

Arrays, bzw. allgemein Collections, können auch mit der `foreach` Schleife
durchlaufen werden. Die Schleife hat **keinen Zähler**, wie die klassische
`for`-Schleife.

Ist man jedoch hauptsächlich am **Inhalt der Auflistung** interessiert, kann so
sehr einfach darauf zugegriffen werden. Mit dieser Variante kann jedoch **keine
Änderung des Arrays** gemacht werden.

<div className="grid"><div>

```java title="Schema"
for(Datentyp variable : Array) {
    // code block
}
```

</div><div>

```java title="Code-Beispiel"
String[] worte = { "hallo", "liebe", "Welt" }
for(String wort : worte) {
    System.out.println(wort);
}
```

</div></div>

## :tv: Video über Foreach mit Array

<YouTube id="kUXTO1lwZzY" />

## :tv: Erklärvideos von Studyflix

- [foreach-Schleife einfach erklärt](https://studyflix.de/informatik/java-foreach-1935)
