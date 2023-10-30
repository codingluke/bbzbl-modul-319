---
sidebar_position: 1
keywords:
  - pdf
---
# Primitive Datentypen

In Java gibt es eine beachtliche Anzahl an Datentypen gemäss folgender Tabelle.
Vorerst nutzen wir die _primitiven_ Datentypen. Diese sind erkennbar, indem der
**Datentyp kleingeschrieben** ist.

| Datentyp | Grösse  | Beschreibung                                                                              | Spezifika |
| -------- | ------- | ----------------------------------------------------------------------------------------- | --------- |
| boolean  | 1 bit   | Speichert `true` _(wahr)_ oder `false` _(falsch)_ Werte                                   |
| byte     | 1 byte  | Speichert ganze Zahlen von `-128` bis `127`                                               |
| short    | 2 bytes | Speichert ganze Zahlen von `-32'768` bis `32'767`                                         |
| char     | 2 bytes | Speichert ein einzelnes Zeichen oder [ASCII]                                              | `''`      |
| int      | 4 bytes | Speichert ganze Zahlen `-2'147'483'648` bis `2'147'483'647`                               |
| float    | 4 bytes | Speichert Gleitkommazahlen von `6` bis `7` Dezimalstellen                                 | `f`       |
| long     | 8 bytes | Speichert ganze Zahlen von `-9'223'372'036'854'775'808l` bis `9'223'372'036'854'775'807l` | `l`       |
| double   | 8 bytes | Speichert Gleitkommazahlen von `15` Dezimalstellen                                        | `d`       |

[ascii]:
  https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange

## :pencil: A1: Datentypen bestimmen

Bestimmen Sie die die **kleinst möglichen** Datentypen für die folgenden Werte:

```
11.39    .................................

‘b‘      .................................

37       .................................

true     .................................

"Hello"  .................................
```

<details>
<summary>Musterlösung</summary>

In gleicher Reihenfolge wie die Aufgabe:

- `float` _(`double` ist nicht die kleinst mögliche)_
- `char`
- `byte` _(`short`, `int` oder `long` sind nicht die kleinst möglichen)_
- `boolean`
- `String`

</details>
