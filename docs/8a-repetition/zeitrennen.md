---
sidebar_position: 5
keywords:
  - pdf
---

# Zeitrennen Radsport

Simulieren Sie mit einem Programm ein Zeitrennen aus dem Radsport:

## Spielregeln

- In einer definierten Startaufstellung fährt ein Radrennfahrer nach dem anderen
  das Rennen und erreicht dabei eine Zeit zwischen 30 Minuten und einer Stunde
  (1800 – 3600 Sekunden).
- Direkt nach der Zieleinfahrt erscheint der Fahrer mit der aktuell gefahrenen
  Zeit auf der Konsole.
- Nachdem alle Fahrer das Rennen beendet haben, wird eine Rangliste mit den
  erreichten Zeiten ausgegeben.

```bash title="Beispiel einer Ausgabe des Programms:"
Racer Van Vleuten finished: 3167
Racer Van Der Breggen finished: 2753
Racer Vos finished: 2231
Racer Spratt finished: 1975
Racer Moolman-Pasio finished: 2560
Racer Pieters finished: 3025
Racer Rivera finished: 2003
Racer Van Djik finished: 2093
Racer Niewiadoma finished: 2912
Racer Hosking finished: 1950
*********** Rankings *************
1: Hosking: 1950
2: Spratt: 1975
3: Rivera: 2003
4: Van Djik: 2093
5: Vos: 2231
6: Moolman-Pasio: 2560
7: Van Der Breggen: 2753
8: Niewiadoma: 2912
9: Pieters: 3025
10: Van Vleuten: 3167
```

## :toolbox: Implementierungshilfe

Folgende Hinweise helfen Ihnen bei der Implementierung:

- Definieren Sie die Startaufstellung mit allen Fahrern in einem Array.
- Für die Rangliste benötigen sie entweder zwei Arrays (einen für die Namen,
  einen zweiten für die gefahrene Zeit) ODER falls Sie sich mit
  zweidimensionalen Arrays auskennen, definieren Sie einen zweidimensionalen
  Array für die Zeit sowie den Namen eines Rennfahrers.
- Für jeden Fahrer in der definierten Startreihenfolge berechnen Sie die
  Rennzeit, welche zwischen 1800 und 3600 Sekunden liegen soll und geben diese
  auf die Konsole aus.
- Nachdem die Zeit für einen Fahrer berechnet wurde, sortieren Sie die Zeit
  sowie den Fahrer in die Arrays für die Rangliste ein. Dieses Einfügen an der
  korrekten Position in den Arrays lagern Sie in eine eigene Methode aus, welche
  Sie aufrufen, nachdem die Zeit berechnet wurde. Die Methode nennen Sie insert.
  Bedenken Sie, dass alle Fahrer, die langsamer gefahren sind wie der aktuelle
  Fahrer, im Array eine Position nach hinten geschoben werden müssen. Achten Sie
  darauf, dass Sie keine Werte überschreiben!
- Nachdem alle Fahrer das Rennen beendet haben und an der korrekten Stelle
  einsortiert wurden, geben Sie die Rangliste auf die Konsole aus. Dies kann
  ebenfalls in eine Methode namens `printRanking` ausgelagert werden.

<details><summary>Musterlösung:</summary>

```java title="BikeTimeTrial.java"
public class BikeTimeTrial {

	public static void main(String[] args) {

		String[] racerStart = { "Van Vleuten", "Van Der Breggen", "Vos", "Spratt", "Moolman-Pasio", "Pieters", "Rivera",
				"Van Djik", "Niewiadoma", "Hosking"};

		//sorted Arrays
		//rankingNames = names of racer
		//rankingTimes = corresponding times
		//Index 0 of rankingNames = racer with time in rankingTimes on Index 0
		String[] rankingNames = new String[10];
		int[] rankingTimes = new int[10];
		//(better implementation would be to use a two-dimensional array)

		for (int i = 0; i < racerStart.length; i++) {
			//generate random time from 1800-3600
			int secs = (int) (Math.random() * 1801) + 1800;

			System.out.println("Racer " + racerStart[i] + " finished: " + secs);

			//add the racer to the correct rank
			insert(racerStart[i], secs, rankingNames, rankingTimes);
		}

		//print final rankings
		printRanking(rankingNames, rankingTimes);
	}

	private static void insert(String name, int time, String[] names, int[] times) {
		int i = 0;
		for (i = 0; i < times.length - 1; i++) {
			if (times[i] == 0 || times[i] > time) {
				break;
			}
		}
		for (int k = times.length - 2; k >= i; k--) {
			times[k + 1] = times[k];
			names[k + 1] = names[k];
		}
		times[i] = time;
		names[i] = name;

	}

	private static void printRanking(String[] rankingNames, int[] rankingTimes) {
		System.out.println("*********** Rankings *************");
		for (int i = 0; i < rankingNames.length; i++) {
			System.out.println(i + 1 + ": " + rankingNames[i] + ": " + rankingTimes[i]);
		}
	}
}
```

</details>
