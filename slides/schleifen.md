---
marp: true
theme: bbzbl
paginate: true
header: Modul 319 - Schlaufen
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

::: split

```mermaid
stateDiagram-v2
    direction LR
    state Bedingung <<choice>>
    do: { Code-Block }

    [*] --> bedingung
    bedingung --> do: true
    state while {
        do --> bedingung
    }
    bedingung --> [*]: false
```

:::

```java title="While Code-Beispiel" showLineNumbers
int i = 10;
while (i > 0) {
  System.out.println("value of i: " + i);
  i = i - 1;
}
```

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

::: split

```mermaid
stateDiagram-v2
    direction LR
    do: { Code-Block }
    state Bedingung <<choice>>
    [*] --> do
    state do..while {
        do --> bedingung
        Bedingung --> do: true
    }
    Bedingung --> [*]: false
```

:::

```java
int x = 10;
do {
    System.out.println("value of x: " + x);
    x = x-1;
} while (x > 0);
```

---

# for

::: columns


```java
for (
  <Zählervariable>;
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


```mermaid width=80%
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
