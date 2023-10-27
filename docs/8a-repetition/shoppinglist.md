---
sidebar_position: 2
keywords:
  - pdf
---

# ShoppingList

Programmierung einer einfachen ShoppingList.

## Spielregeln

- Das Programm soll es ermöglichen, dass bis zu zehn beliebige Produkte in die
  Liste eingetragen werden können.
- Sobald der Benutzer mit einem Leerstring („“) abbricht oder 10 Produkte
  eingegeben hat, folgt die Ausgabe der vom Benutzer erfassten Produkte.
- Wählen Sie geeignete Datentypen, Variablenbezeichnungen und
  Kontrollstrukturen.

<details><summary>Musterlösung:</summary>

```java title="ShoppingList.java"
import mytools.StdInput;

public class ShoppingList {

	public static void main(String[] args) {
		String[] shoppingList = new String[10];

		String thing = "";
		int count = 0;

		do {
			System.out.println("Please add an element to the shopping list or press ENTER to terminate");
			thing = StdInput.readString();
			shoppingList[count] = thing;
			count++;
		} while(!thing.equals("") && count < 10);

		int i = 0;

 		System.out.println("The contents of your shopping list");

		while(i < 10) {
			System.out.println(shoppingList[i]);
			i++;
		}
	}
}
```

</details>
