public class SumOfTwoIntegers{
  public static int getSum(int a, int b) {
    while(b != 0){
      int carry = a & b;
      a = a ^ b;
      b = carry << 1;
    }
    return a;
  }

  public static void main(String[] args) {
    int ans = SumOfTwoIntegers.getSum(-2, 3);
    System.out.println(ans);
  }
}