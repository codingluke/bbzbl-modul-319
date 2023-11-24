---
marp: true
theme: bbzbl
paginate: true
header: Modul 319 - Methoden
footer: BBZBL / Lukas Hodel / Applikationen entwerfen und implementieren
---

<!-- _class: big center -->

# :sparkles: <br/>Methoden

### Eine Funktionalität unter einem Namen umsetzen

---

# :postbox: Brief verschicken

![bg right fit](./images/letter.png)

**Methodenname**: verschickeBrief

**Parameter**:

- Adresse, Briefmarke, Inhalt

**Methodenkörper**:

- Die Post verschickt den Brief

**Rückgabetyp**:

- `void` (senden und vergessen)
- alternativ einen Beleg

---

# :cook: Pizzabacken

![bg right fit](./images/pizza-salami-methode.png)

**Methodenname**: pizzaSalamiMachen

**Parameter**:

- Teig, Käse, Tomaten, Salami, Zeit

**Methodenkörper**:

- Ofen backt die Pizza

**Rückgabetyp**: 

- Pizza Salami :pizza:

:::footnotes

Quelle: Kompezentnachweis Thema 3 einer Lehrnenden,
https://www.youtube.com/watch?v=oSDtCcDXcTM

:::

---

# Verantwortung einer Sache

- Jemand (Methode), macht **eine Sache gut** und übernimmt die Arbeit für alle
- Der **Methodennamen ist klar**, das jeder weiss was geschieht <br/><br/>

::: columns

### Beispiel Post

- Die Post ist gut in Briefe verschicken
- Sie Verschickt die Briefe für alle

::: split

### Beispiel Ofen

- Der Ofen kann gut backen
- Backt die Pizza

:::

---

# Nutzen

* Eine Programmlogik wird nur einmal programmiert
* Eine Programmlogik kann an verschiedenen Orten verwendet werden
* Ändert sich die Logik wird diese überall geändert
* Der Methodennamen beschreibt direkt den Quellcode
* Kleine Methoden machen den Quellcode übersichtlicher

---

# Code-Beispiel / _Struktur_

::: columns l65 s2

![fit](./images/methode-struktur-beispiel.png)

::: split
### Verwendung (Gelb)

Die Methode wird in einer Anweisung aufgerufen

### Methoden Kopf / Signatur (Blau)

Definiert **wie** die Methode aufgerufen werden muss

### Methodenkörper (Grün)

Definiert **was** die Methode genau macht

:::

---

# Code-Beispiel / _Flow_

::: columns l65 s1

![fit](./images/methoden-flow.png)

::: split

1. Methodenaufruf, springt in die Methode

2. Schlaufe wird mehrfach wiederholt
3. `return` Wert wird ausgegeben
4. Der `return` Wert wird der Variable zugewiesen
5. Die Variable wird ausgegeben

:::

