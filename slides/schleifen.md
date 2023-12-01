---
marp: true
theme: bbzbl
paginate: true
header: Modul 319 - Schleifen
footer: BBZBL / Lukas Hodel / Applikationen entwerfen und implementieren
---

<!-- _class: big center -->

# 🔁 <br/> Schleifen und Wiederholungen

---

# Kontrollstrukturen

Vergleichs- und logische Operatoren kommen ebenfalls zum Einsatz, wenn man etwas nur **unter einer bestimmten Bedingung wiederholen** soll.

```mermaid width=80% align=center
flowchart TD;
    Kontrollstrukturen---Selektionen
    Selektionen---if[if-Anweisung]
    Selektionen---switch[switch-Anweisung]
    if---ifels[if-else-Anweisung]

    Kontrollstrukturen---Schleifen
    subgraph verz [ ]
      Schleifen---while[while-Anweisung]
      Schleifen---dowhile[do-while-Anweisung]
      Schleifen---for[for-Anweisung]
    end

    style verz fill:#00A17020,stroke:#00A17080,stroke-width:2px
```

---

<!-- _class: big center light-text -->

# Zuerst Prüfen <br/> _dann solange machen bis ein Status erreicht wird_

![bg cover brightness:0.5](./images/while-aufraeumen.jpg)

---

# while

```mermaid width=80%
flowchart LR
    A[Anweisung;] --> B{"`**Bedingung**
      Datentyp: _boolean_`"}
    subgraph "`**while**`"
      C --> B
      B --> |true| C["`{
          &nbsp;&nbsp;Anweisung;
          &nbsp;&nbsp;Anweisung;
        }`"]
    end
    B --> |false| F[Anweisung;]

    style C text-align:left
```

---

# while 

::: columns

## Schema

```java title="While Code-Beispiel" showLineNumbers
while (<Bedingung>) {
    <Anweisung>;
    <Anweisung>;
}
```

```mermaid width=80%
flowchart LR
    A[Anweisung;] --> B{"`**Bedingung**
      Datentyp: _boolean_`"}
    subgraph "`**while**`"
      C --> B
      B --> |true| C["`{
          &nbsp;&nbsp;Anweisung;
          &nbsp;&nbsp;Anweisung;
        }`"]
    end
    B --> |false| F[Anweisung;]

    style C text-align:left
```

::: split

## Beispiel

```java title="While Code-Beispiel" showLineNumbers
int i = 5;
while (i > 0) {
  System.out.println("i: " + i);
  i--;
}

// Ausgabe:
// i: 5
// i: 4
// i: 3
// i: 2
// i: 1
```

:::

---

<!-- _class: big center light-text -->

# Zuerst Machen <br/> _dann prüfen bis ein Status erreicht wird_

![bg cover brightness:0.5](./images/dowhile-pfeilbogen.jpg)

---

# do..while

```mermaid
flowchart LR
    A[Anweisung;] --> B["`{
      &nbsp;&nbsp;Anweisung;
      &nbsp;&nbsp;Anweisung;
    }`"]

    subgraph "`**do..while**`"
      C --> |true| B
      B --> C{"`**Bedingung**
        Datentyp: _boolean_`"}
    end

    C --> |false| F[Anweisung;]
    style B text-align:left
```

---

# do..while

::: columns

## Schema

```java
do {
    <Anweisung>;
} while (<Bedingung>);
```

```mermaid
flowchart LR
    A[Anweisung;] --> B["`{
      &nbsp;&nbsp;Anweisung;
      &nbsp;&nbsp;Anweisung;
    }`"]

    subgraph "`**do..while**`"
      C --> |true| B
      B --> C{"`**Bedingung**
        Datentyp: _boolean_`"}
    end

    C --> |false| F[Anweisung;]
    style B text-align:left
```

::: split

## Beispiel

```java
String gedanken = "Kaffee";
String eingabe = "";
do {
  if (!eingabe.equals("")) {
    System.out.println("leider flasch :(");
  }
  System.out.println("was denke ich?: ");
  eingabe = StdInput.readstring();
} while (gedanken.equals(einbage));
System.out.println("jaaa");

// Ausgabe:
// Was denke ich?
// > quatsch
// leider falsch :(
// Was denke ich?
// > Kaffee
// jaaa
```

:::

---

<!-- _class: big center -->

# `do..while` <br/> Abfrage und Verifikation von Benutzereingaben

---

<!-- _class: big center light-text -->

# Eine bekannte Reihe/Liste durchlaufen

![bg cover brightness:0.5](./images/for-himmel-hoelle.jpg)

---

# for

::: columns

## Schema

```java
for (<Zählervariable>;
     <Bedingung>;
     <Schrittweite>
) {
    <Anweisungen, Sequenz>
}
```

### Explizites Beispiel

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```

::: split

## Ablauf

```mermaid width=70%
stateDiagram-v2
    direction TB
    [*] --> init
    state Bedingung <<choice>>

    state for {
        init: < Zählervariable >
        do: { Code-Block }
        schritt: < Schrittweite >

        init --> Bedingung
        Bedingung --> do: true
        do --> schritt
        schritt --> Bedingung
    }

    Bedingung --> [*]: false
```

:::
