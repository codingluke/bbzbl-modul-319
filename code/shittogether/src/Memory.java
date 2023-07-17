import java.util.Scanner;

public class Memory {

  private static Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) {
    String[] cards = {"Auto", "Stift", "Stern", "Apfel", "Buch", "Drucker", "Autobahn", "Katze", "Uhr", "Baum"};
    boolean[] guesses = {false, false, false, false, false, false, false, false, false, false};
    String answer = "";

    do {
      System.out.println("");
      System.out.println("Wähle: r: raten, l: lernen, z: zeigen, stop");
      answer = scanner.next();
      if ("l".equals(answer)) {
        showCards(cards);
      } else if ("z".equals(answer)) {
        showCorrectCards(guesses, cards);
      } else if ("r".equals(answer)) {
        guessCard(guesses, cards);
      }
      // Loop Beenden, wenn "stop" gewählt oder alle Karten korrekt geraten wurden.
    } while (!"stop".equals(answer) && !allGuessed(guesses));

    if (answer.equals("stop")) {
      System.out.println("Heute ist nicht alle Tage, wir sehen uns wieder, keine Frage!");
    } else {
      System.out.println("Tschüss du Kluger Mensch!");
    }
  }

  /**
   * Gibt alle Karten auf die Konsole aus
   *
   * @param cards
   */
  private static void showCards(String[] cards) {
    for (String card : cards)
      System.out.print("\t" + card);
  }

  /**
   * Gibt alle bereits korrekt geratenen Karten auf die Konsole aus
   *
   * @param guesses
   * @param cards
   */
  private static void showCorrectCards(boolean[] guesses, String[] cards) {
    System.out.println("Deine bereits geratenen Wörter");
    for (int i = 0; i < guesses.length; i++) {
      if (guesses[i])
        System.out.println(cards[i]);
    }
  }

  /**
   * Wählt eine zu ratende Karte und gibt die Position auf die Konsole aus. Speichert das Resultat in der Variable guesses. Wichtig! Die Variable
   * `guesses` wird durch Referenz übergeben und wird dadurch auch in der `main` Methode geändert!
   * 
   * @param guesses
   * @param cards
   */
  private static void guessCard(boolean[] guesses, String[] cards) {
    int pos = nextGuessIndex(guesses);
    System.out.println("Rate das Wort auf Position: " + (pos + 1));
    String guess = scanner.next();
    if (cards[pos].equals(guess)) {
      System.out.println("Woaw! Gut!");
      guesses[pos] = true;
    } else {
      System.out.println("Wie schade, keine Angst das wird noch!");
    }
  }

  /**
   * Überprüft ob bereits alle Karten korrekt geraten wurden.
   * 
   * @param guesses
   * @return
   */
  private static boolean allGuessed(boolean[] guesses) {
    for (boolean guess : guesses) {
      if (!guess) {
        return false;
      }
    }
    return true;
  }

  /**
   * Generiert solange eine Zahl zwischen 0 und 9, bis einen Index einer Karte gefunden wurde, welche noch nicht korrekt geraten wurde.
   *
   * @param guesses
   * @return Position einer Karte die noch nicht geraten wurde
   */
  private static int nextGuessIndex(boolean[] guesses) {
    int nextIndex = 0;
    do {
      nextIndex = (int) (Math.random() * 10);
    } while (guesses[nextIndex]);
    return nextIndex;
  }

}
