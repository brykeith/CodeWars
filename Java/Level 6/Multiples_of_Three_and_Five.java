
/**
 * Multiples_of_Three_and_Five
 */

// Instruction:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we
// get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5
// below the number passed in.

public class Multiples_of_Three_and_Five {

  // * BEST SOLUTION !!!

  public class BestSolution {

    public int solution(int number) {
      int sum = 0;

      for (int i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
          sum += i;
        }
      }
      return sum;
    }
  }

  // ! MY SOLUTION
  // Thought recursion would be the best way to solve this problem. It
  // ended up making it a lot more difficult and less efficient
  // - at least with my solution.

  static int result = 0;

  public static int MySolution(int number) {
    if ((number - 1) > 0) {
      if ((number - 1) % 3 == 0 || (number - 1) % 5 == 0) {
        System.out.println(result + " + " + (number - 1) + " = " + (result + (number - 1)));
        result = result + (number - 1);
      }
      return MySolution(number - 1);
    } else if ((number - 1) == 0) {
      int result1 = result;
      result = 0;
      return result1;
    } else {
      return 0;
    }
  }

  public static void main(String[] args) {
    System.out.println(MySolution(10));
  }
}