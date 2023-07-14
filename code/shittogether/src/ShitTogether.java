import java.util.Scanner;

public class ShitTogether {

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    boolean goalFullfiled = false;
    String plan = "";
    String goal = "";

    System.out.println("Get Your Shit Together!\n");

    do {
      System.out.println("Start with a GOAL: ");
      goal = scanner.next();
      if (question("Do you have a plan to archieve it? (That's your strategy)", "Yes", "No")) {
        System.out.println("\nMake One!: ");
        plan = scanner.next();
      }

      if (question("How is it working out?", "Great!", "Not so Great!")) {
        goalFullfiled = true;
      } else {
        if (question("Why?", "I don't have enough Time to Do it all!", "I have too much on my to-do list!")) {
          System.out.println("\n- Berak your plan into Small manageable chunks!");
        } else {
          System.out.println("- You need to priorize!");
        }
        System.out.println("- Schedule Time to focus on each chunk");
        if (question("Did you do each chunk when you saild you would?", "Yes", "No I failed to commit...")) {
          goalFullfiled = true;
        } else {
          System.out.println("You do not have your shit together!\n\n");
          goal = "";
          plan = "";
        }
      }
    } while (!goalFullfiled);

    System.out.println("HUZZAH! You have your shit together");
    System.out.println("You archived your goal: " + goal);
    if (!"".equals(plan)) {
      System.out.println("Whith the plan: " + plan);
    }
    scanner.close();
  }

  public static boolean question(String question, String yes, String no) {
    Scanner sc = new Scanner(System.in);
    System.out.println(""); // emtpy line
    System.out.println(question);
    System.out.println("1: " + yes);
    System.out.println("2: " + no);
    return sc.nextInt() == 1;
  }

}
