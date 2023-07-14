# Vom Quellcode zum ausführbaren Programm

<!-- TODO: Vereinfachen! verstehen die Lehrnenden nie im Leben -->

## 1. Sourcecode, Compiler, Interpreter

Programme entstehen aus Quelltext der durch einen Compiler entweder in ein
Maschinenprogramm oder in ein Zwischenformat übersetzt wird, und dann direkt von
einem Computer, einem Betriebssystem oder einer spezifischen Laufzeitumgebung
ausgeführt werden kann.

Java verfolgt einen zweistufigen Übersetzungsprozess. Der Programmcode in Java
wird nicht zu einem ausführbaren Programm, sondern in einen Zwischencode, den
sogenannten Bytecode, kompiliert. Dieser Code ist für alle Plattformen gleich
und kann mithilfe des entsprechenden plattformspezifischen Interpreters auf der
jeweiligen Plattform ausgeführt werden. Java-Interpreter werden auch virtuelle
Maschinen (JVM) genannt.

## 2. Sourcecode in Form von Klassen

Java-Programme bestehen aus Klassen. Diese Klassen werden dann als Programme
ausgeführt.

Während ein Programm resp. Klassen geschrieben werden, werden sie in einem
Verzeichnis namens src (für source) gespeichert und haben eine
`.java`-Dateiendung. Wenn die Klassen ausgeführt werden, erfolgt durch die
Entwicklungsumgebung eine Kompilierung im Hintergrund (durch den Compiler
javac), und aus den `.java`-Dateien werden `.class`-Dateien, die in einem
Verzeichnis namens `bin` (für binaries) abgelegt werden. Diese Klassen können
dann durch das Java-Dienstprogramm `java` ausgeführt werden.

Sie können sich diese auf der Harddisk ansehen, indem Sie z.B. auf dem
`src`-Ordner die rechte Maustaste betätigen und dann _Show in => System
Explorer_ wählen.

In der `.java`-Datei muss zuerst das `package` angegeben werden, in welchem sich
die aktuelle Klasse befindet. Dann folgen allenfalls sogenannte
`import`-Anweisungen, die andere Java- und Programmteile im eigenen Programm
nutzbar machen.

Die eigentliche Klasse beginnt mit der Anweisung `public class HelloWorld`, was
aussagt, dass es sich um eine öffentliche Klasse mit dem Namen HelloWorld
handelt. Nach dieser folgt eine öffnende geschweifte Klammer, die mit der
letzten schliessenden geschweiften Klammer zusammen den Klassenkörper bildet.

Dann folgt die main-Methode `public static void main(String[] args)`. Diese
Zeile wird auch als Methodensignatur bezeichnet. Im Detail wird die
Methodensignatur später angesehen.

Das nächste paar geschweifter Klammern bildet den Methodenkörper. Darin steht
das, was die eigentliche Leistung des Programms ausmacht. Über die Java-Klasse
System erfolgt die Ausgabe auf die Console (out), wo eine Zeile ausgegeben wird
(println).

## :pencil: Aufgabe: Visualisierung

Erstellen Sie eine eigene Visualisierung, welche für Ihr HelloWorld Programm
aufzeigt, wie der Sourcecode zu einem ausführbaren Programm überführt wird,
welcher von einem Interpreter ausgeführt werden kann.
