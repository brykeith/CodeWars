
// Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.
// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

public class PrimeNumberChecker {

  // * BEST SOLUTIONS
  public static boolean isPrime1(int num) {
    return num > 1 && java.math.BigInteger.valueOf(num).isProbablePrime(20);
  }

  public static boolean isPrime2(int number) {
    if (number < 2)
      return false;
    for (int i = 2; i <= Math.sqrt(number); i++) {
      if (number % i == 0)
        return false;
    }
    return true;
  }

  // ! MY SOLUTION
  public static boolean isPrime(int num) {
    if (num == 2) {
      return true;
    }
    if (num > 1) {
      for (int i = 2; i < Math.ceil(Math.sqrt(num)) + 1; i++) {
        if (num % i == 0) {
          return false;
        }
      }
    } else {
      return false;
    }
    return true;
  }

  public static void main(String[] args) {
    System.out.println("2  is prime " + isPrime(2));

    System.out.println("0  is not prime " + isPrime(0));
    System.out.println("1  is not prime " + isPrime(1));
    System.out.println("73 is prime " + isPrime(73));
    System.out.println("75 is not prime " + isPrime(75));
    System.out.println("-1 is not prime " + isPrime(-1));

    System.out.println("3 is prime " + isPrime(3));
    System.out.println("5 is prime " + isPrime(5));
    System.out.println("7 is prime " + isPrime(7));
    System.out.println("41 is prime " + isPrime(41));
    System.out.println("5099 is prime " + isPrime(5099));

    System.out.println("6 is not prime " + isPrime(6));
    System.out.println("8 is not prime " + isPrime(8));
    System.out.println("4 is not prime " + isPrime(4));
    System.out.println("9 is not prime " + isPrime(9));
    System.out.println("45 is not prime " + isPrime(45));
    System.out.println("-5 is not prime " + isPrime(-5));
    System.out.println("-8 is not prime " + isPrime(-8));
    System.out.println("-41 is not prime " + isPrime(-41));

  }
}
