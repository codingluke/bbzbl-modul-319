---
sidebar_position: 1
keywords:
  - pdf
---

# Puzzles

Unter dem Namen "Puzzles" sind viele kleine Aufgaben zusammengestellt, wobei die
**Aufgabe direkt im Kommentar der Klasse** gestellt wird.

:::info Hier müssen Sie also immer:

1. zuerst die Aufgabe kopieren
2. danach die Methode `puzzles` so erweitern, dass Sie die Aufgabe vom Kommentar
   löst.

:::

## Beispiel

Erkennen Sie eine Lösung für die Aufgabenstellung, die im Kommentarblock (Zeilen
4-10) des folgenden Programms formuliert ist?

```java showLineNumbers
public class Puzzle0001 {

    /*
     * find an implementation for the method `puzzle` that produces the following
     * outputs:
     *
     *   -459
     *   -3
     *   -17
     *
     * hint: you should only alter the puzzle method
    */
    public static void main(String[] args) {
        System.out.println(puzzle(459));
        System.out.println(puzzle(3));
        System.out.println(puzzle(17));
    }

    public static int puzzle(int x) {
        return 0;
    }
}
```

Wie Sie sehen, besteht die Aufgabenstellung darin, für die Methode `puzzle`
(Zeile 18-20) eine Implementierung zu finden, so dass die vorgegebenen Werte
(Zeile 6-8) ausgegeben werden.

Schwierig? Möglicherweise haben Sie Lösung bereits erkannt. In diesem Beispiel
ist also die Methode puzzle durch folgende Programmierung zu ergänzen:

```java title="Lösung Puzzle0001"
public static int puzzle(int x) {
    return -x;
}
```

## :pen: Aufgaben

Hier finden Sie nun viele weitere ähnliche Aufgaben Lösungen.

:::caution package name!

Beachten Sie, dass Sie bei einer Übernahme/Kopie der Klassen eventuell das
Package anpassen müssen.

:::

### Puzzle0002

```java title="Puzzle0002.java"
public class Puzzle0002 {

	/*
	 * find an implementation for the puzzle method that produces the following outputs:
     *
	 *   460
	 *   4
	 *   18
	 *
	 * hint: you should only alter the puzzle method
	 */
	public static void main(String[] args) {
		System.out.println(puzzle(459));
		System.out.println(puzzle(3));
		System.out.println(puzzle(17));
	}

    public static int puzzle(int x) {
        return 0;
    }
}
```

<details><summary>Musterlösung: Puzzle0002</summary>

```java
public static int puzzle(int x) {
    return x + 1;
}
```

</details>

### Puzzle0003

```java title="Puzzle0003.java"
public class Puzzle0003 {

	/*
	 * find an implementation for the puzzle method that produces the following outputs:
     *
	 *   918
	 *   6
	 *   34
	 *
	 * hint: you should only alter the puzzle method
	 */
	public static void main(String[] args) {
		System.out.println(puzzle(459));
		System.out.println(puzzle(3));
		System.out.println(puzzle(17));
	}

    public static int puzzle(int x) {
        return 0;
    }
}
```

<details><summary>Musterlösung: Puzzle0003</summary>

```java
public static int puzzle(int x) {
    return x * 2;
}
```

</details>

### Puzzle0004

```java title="Puzzle0004.java"
public class Puzzle0004 {

	/*
	 * find an implementation for the puzzle method that produces the following outputs:
     *
	 *   462
	 *   6
	 *   117
	 *
	 * hint: you should only alter the puzzle method
	 */
	public static void main(String[] args) {
		System.out.println(puzzle(459,3));
		System.out.println(puzzle(3,3));
		System.out.println(puzzle(17,100));
	}

    public static int puzzle(int x, int y) {
        return 0;
    }
}
```

<details><summary>Musterlösung: Puzzle0004</summary>

```java
public static int puzzle(int x, int y) {
    return x + y;
}
```

</details>

### Puzzle0103

```java title="Puzzle0103.java"
public class Puzzle0103 {

	/*
	 * find an implementation for the puzzle method that produces the following outputs:
     *
	 *   121
	 *   9
	 *   16
	 *
	 * hint: you should only alter the puzzle method
	 */
	public static void main(String[] args) {
		System.out.println(puzzle(11));
		System.out.println(puzzle(3));
		System.out.println(puzzle(4));
	}

    public static int puzzle(int x) {
        return 0;
    }
}
```

<details><summary>Musterlösung: Puzzle0103</summary>

```java
public static int puzzle(int x) {
    return x * x;
}
```

</details>

### Puzzle0104

```java title="Puzzle0104.java"
public class Puzzle0104 {

	/*
	 * find an implementation for the puzzle method that produces the following outputs:
     *
	 *   33
	 *   9
	 *   12
	 *
	 * hint: you should only alter the puzzle method
	 */
	public static void main(String[] args) {
		System.out.println(puzzle(11));
		System.out.println(puzzle(3));
		System.out.println(puzzle(4));
	}

    public static int puzzle(int x) {
        return 0;
    }
}
```

<details><summary>Musterlösung: Puzzle0104</summary>

```java
public static int puzzle(int x) {
    return x * 3;
}
```

</details>

### Puzzle0105

```java title="Puzzle0105.java"
public class Puzzle0105 {

	/*
	 * find an implementation for the puzzle method that produces the following outputs:
     *
	 *   4
	 *   12
	 *   6
	 *
	 * hint: you should only alter the puzzle method
	 */
	public static void main(String[] args) {
		System.out.println(puzzle(12));
		System.out.println(puzzle(36));
		System.out.println(puzzle(18));
	}

    public static int puzzle(int x) {
        return 0;
    }
}
```

<details><summary>Musterlösung: Puzzle0105</summary>

```java
public static int puzzle(int x) {
    return x / 3;
}
```

</details>

### Puzzle0106

```java title="Puzzle0106.java"
public class Puzzle0106 {

	/*
	 * find an implementation for the puzzle method that produces the following outputs:
     *
	 *   3
	 *   1
	 *   2
	 *
	 * hint: you should only alter the puzzle method
	 */
	public static void main(String[] args) {
		System.out.println(puzzle(12));
		System.out.println(puzzle(36));
		System.out.println(puzzle(18));
	}

    public static int puzzle(int x) {
        return 0;
    }
}
```

<details><summary>Musterlösung: Puzzle0106</summary>

```java
public static int puzzle(int x) {
    return 40 / x;
}
```

</details>

### Puzzle0107

```java title="Puzzle0107.java"
public class Puzzle0107 {

	/*
	 * find an implementation for the puzzle method that produces the following outputs:
     *
	 *   456
	 *   0
	 *   -83
	 *
	 * hint: you should only alter the puzzle method
	 */
	public static void main(String[] args) {
		System.out.println(puzzle(459,3));
		System.out.println(puzzle(3,3));
		System.out.println(puzzle(17,100));
	}

    public static int puzzle(int x, int y) {
        return 0;
    }
}
```

<details><summary>Musterlösung: Puzzle0107</summary>

```java
public static int puzzle(int x, int y) {
    return x - y;
}
```

</details>

### Puzzle0108

```java title="Puzzle0108.java"
public class Puzzle0108 {

	/*
	 * find an implementation for the puzzle method that produces the following outputs:
     *
	 *   465
	 *   9
	 *   217
	 *
	 * hint: you should only alter the puzzle method
	 */
	public static void main(String[] args) {
		System.out.println(puzzle(459,3));
		System.out.println(puzzle(3,3));
		System.out.println(puzzle(17,100));
	}

    public static int puzzle(int x, int y) {
        return 0;
    }
}
```

<details><summary>Musterlösung: Puzzle0108</summary>

```java
public static int puzzle(int x, int y) {
    return x + 2 * y;
}
```

</details>

### Puzzle0109

```java title="Puzzle0109.java
public class Puzzle0109 {

	/*
	 * find an implementation for the puzzle method that produces the following outputs:
     *
	 *   1377
	 *   9
	 *   1700
	 *
	 * hint: you should only alter the puzzle method
	 */
	public static void main(String[] args) {
		System.out.println(puzzle(459,3));
		System.out.println(puzzle(3,3));
		System.out.println(puzzle(17,100));
	}

    public static int puzzle(int x, int y) {
        return 0;
    }
}
```

<details><summary>Musterlösung: Puzzle0109</summary>

```java
public static int puzzle(int x, int y) {
    return x * y;
}
```

</details>

### Puzzle0110

```java title="Puzzle0110.java"
public class Puzzle0110 {
	/*
	 * find an implementation for the puzzle method that produces the following outputs:
     *
	 *   460
	 *   4
	 *   50
	 *
	 * hint: you should only alter the puzzle method
	 */
	public static void main(String[] args) {
		System.out.println(puzzle(459,3));
		System.out.println(puzzle(3,3));
		System.out.println(puzzle(17,100));
	}

    public static int puzzle(int x, int y) {
        return 0;
    }
}
```

<details><summary>Musterlösung: Puzzle0110</summary>

```java
public static int puzzle(int x, int y) {
    return x + y / 3;
}
```

</details>

### Puzzle0112

```java title="Puzzle0112.java"
public class Puzzle0112 {
	/*
	 * find an implementation for the puzzle method that produces the following outputs:
     *
	 *   0
	 *   1
	 *   2
	 *
	 * hint: you should only alter the puzzle method
	 */
	public static void main(String[] args) {
		System.out.println(puzzle(459));
		System.out.println(puzzle(4));
		System.out.println(puzzle(17));
	}

    public static int puzzle(int x) {
        return 0;
    }
}
```

<details><summary>Musterlösung: Puzzle0112</summary>

```java
public static int puzzle(int x) {
    return x % 3;
}
```

</details>

### Puzzle0113

```java title="Puzzle0113.java"
public class Puzzle0113 {
	/*
	 * find an implementation for the puzzle method that produces the following outputs:
     *
	 *   1
	 *   1
	 *   3
	 *
	 * hint: you should only alter the puzzle method
	 */
	public static void main(String[] args) {
		System.out.println(puzzle(459));
		System.out.println(puzzle(3));
		System.out.println(puzzle(17));
	}

    public static int puzzle(int x) {
        return 0;
    }
}
```

<details><summary>Musterlösung: Puzzle0113</summary>

```java
public static int puzzle(int x) {
    return x % 3 + 1;
}
```

</details>

### Puzzle0114

```java title="Puzzle0114.java"
public class Puzzle0114 {
	/*
	 * find an implementation for the puzzle method that produces the following outputs:
     *
	 *   10
	 *   1
	 *   10
	 *
	 * hint: you should only alter the puzzle method
	 */
	public static void main(String[] args) {
		System.out.println(puzzle(459));
		System.out.println(puzzle(3));
		System.out.println(puzzle(17));
	}

	public static int puzzle(int x) {
	    return 0;
	}
}
```

<details><summary>Musterlösung: Puzzle0114</summary>

```java
public static int puzzle(int x) {
    return 10 % x;
}
```

</details>

### Puzzle0201

```java title="Puzzle0201.java"
public class Puzzle0201 {
	/*
	 * find an implementation for the puzzle method that produces the following outputs:
     *
	 *   6
	 *   33
	 *   168
	 *
	 * hint: you should only alter the puzzle method
	 */
	public static void main(String[] args) {
		int[] a1 = {1,2,3};
		System.out.println(puzzle(a1));

		int[] a2 = {4,17,9,3};
		System.out.println(puzzle(a2));

		int[] a3 = {4,71,93};
		System.out.println(puzzle(a3));

	}

	public static int puzzle(int[] v) {
	    return 0;
	}
}
```

<details><summary>Musterlösung: Puzzle0201</summary>

```java
public static int puzzle(int[] v) {
    int x = 0;
    for(int i = 0; i < v.length; i++) {
        x = x + v[i];
    }
    return x;
}
```

</details>

### Puzzle0202

```java title="Puzzle0202.java"
public class Puzzle0202 {

	/*
	 * find an implementation for the puzzle method that produces the following
	 * outputs:
     *
	 *   91
	 *   5
	 *   140
	 *
	 * hint: you should only alter the puzzle method
	 */
	public static void main(String[] args) {
		System.out.println(puzzle(7));
		System.out.println(puzzle(3));
		System.out.println(puzzle(8));
	}

	public static int puzzle(int n) {
		return 0;
	}
}
```

<details><summary>Musterlösung: Puzzle0202</summary>

```java
public static int puzzle(int n) {
    n--;
    return (n * (n + 1) * (2 * n + 1)) / 6;
}
```

</details>

### Puzzle0203

```java title="Puzzle0203.java"
public class Puzzle0203 {

	/*
	 * find an implementation for the puzzle method that produces the following
	 * outputs:
	 * 91
	 * 5
	 * 140
	 *
	 * hint: you should only alter the puzzle method
	 */
	public static void main(String[] args) {
		System.out.println(puzzle(7));
		System.out.println(puzzle(3));
		System.out.println(puzzle(8));
	}

	public static int puzzle(int n) {
		return 0;
	}
}
```

<details><summary>Musterlösung: Puzzle0203</summary>

```java
public static int puzzle(int n) {
		int output = 0;

		for (int i = 0; n > i; i++) {
			output += i*i;
		}

		return output;
	}
```

</details>

### Puzzle0204

```java title="Puzzle0204.java"
public class Puzzle0204 {

	/*
	 * find an implementation for the puzzle method that produces the following
	 * outputs:
     *
	 *   7
	 *   2
	 *   0
	 *
	 * hint: you should only alter the puzzle method
	 */
	public static void main(String[] args) {
		System.out.println(puzzle("Hello world, have a beautyful day"));
		System.out.println(puzzle("abcdefhghijklmnopqrstuvwxyz"));
		System.out.println(puzzle("1234567890"));
	}

	public static int puzzle(String s) {
        return 0;
    }
}
```

<details><summary>Musterlösung: Puzzle0204</summary>

```java
public static int puzzle(String s) {
    int count = 0;
    for (int i = 0; s.length() > i; i++) {
        if (s.charAt(i) == 'a' || s.charAt(i) == 'e') {
            count += 1;
        }
    }
    return count;
}
```

</details>

### Puzzle0205

```java title="Puzzle0205.java"
public class Puzzle0205 {
	/*
	 * find an implementation for the puzzle method that produces the following
	 * outputs:
     *
	 *   2
	 *   1
	 *   1
	 *
	 * hint: you should only alter the puzzle method
	 */

	public static void main(String[] args) {
		System.out.println(puzzle("Hello world, have a beautyful day",'o'));
		System.out.println(puzzle("abcdefhghijklmnopqrstuvwxyz",'g'));
		System.out.println(puzzle("1234567890",'8'));
	}

	public static int puzzle(String s, char x) {
        return 0;
    }
}
```

<details><summary>Musterlösung: Puzzle0205</summary>

```java
public static int puzzle(String s, char x) {
    int count = 0;
    for (int i = 0; s.length() > i; i++) {
        if (s.charAt(i) == x) {
            count += 1;
        }
    }
    return count;
}
```

</details>
