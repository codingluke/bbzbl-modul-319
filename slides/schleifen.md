---
marp: true
theme: bbzbl
paginate: true
header: Modul 319 - Schleifen
footer: BBZBL / Lukas Hodel / Applikationen entwerfen und implementieren
---

<!-- _class: big center -->

# :ferris_wheel: <br/> Schleifen und Wiederholungen

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

### Explizites Beispiel

```java title="While Code-Beispiel" showLineNumbers
int i = 10;
while (i > 0) {
  System.out.println("value of i: " + i);
  i = i - 1;
}
```

::: split

## Ablauf
```mermaid width=70%
stateDiagram-v2
    direction TB
    state Bedingung <<choice>>
    [*] --> Bedingung
    do: { Code-Block }
    Bedingung --> do: true
    state while {
        do --> Bedingung
    }
    Bedingung --> [*]: false
```

:::

---

# do..while

::: columns

## Schema

```java
do {
    <Anweisung>;
    <Anweisung>;
} while (<Bedingung>);
```

### Explizites Beispiel

```java
int x = 0;
do {
    if (x == 0) x = 10;
    System.out.println("value of x: " + x);
    x = x-1;
} while (x > 0);
```

::: split
## Ablauf

```mermaid width=50%
stateDiagram-v2
    direction TB
    do: { Code-Block }
    state Bedingung <<choice>>
    [*] --> do
    state do..while {
        do --> Bedingung
        Bedingung --> do: true
    }
    Bedingung --> [*]: false
```

:::

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
