import java.util.Arrays;

/**
 * AreTheseArraysTheSame
 * 
 * Given two arrays a and b write a function comp(a, b) (compSame(a, b) in
 * Clojure) that checks whether the two arrays have the "same" elements, with
 * the same multiplicities. "Same" means, here, that the elements in b are the
 * elements in a squared, regardless of the order.
 */

// * BEST SOLUTION
public class AreTheseArraysTheSame {

  public static boolean comp1(int[] a, int[] b) {
    if ((a == null) || (b == null)) {
      return false;
    }
    int[] aa = Arrays.stream(a).map(n -> n * n).toArray();
    Arrays.sort(aa);
    Arrays.sort(b);
    return (Arrays.equals(aa, b));

  }

  // ! MY SOLUTION

  public static boolean comp(int[] a, int[] b) {
    boolean found = false;

    if (a.length == 0 || b.length == 0 || a.length != b.length) {
      return false;
    }

    for (int i = 0; i < a.length; i++) {
      found = false;
      for (int j = 0; j < b.length; j++) {
        if (a[i] == Math.sqrt(b[j])) {
          found = true;
          b[j] = -1;
          break;
        }
      }
      if (found == false) {
        return false;
      }
    }
    return true;
  }

  public static void main(String[] args) {

    int[] a = new int[] { 121, 144, 19, 161, 19, 144, 19, 11 };
    int[] b = new int[] { 121, 14641, 20736, 36100, 25921, 361, 20736, 361 };
    System.out.println(comp(a, b));
  }

}