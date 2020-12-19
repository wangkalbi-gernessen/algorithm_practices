public class TrailingZeros {
  public static int trailingZeroes(int n) {
    if(n == 0) {
      return 1;
    }  
    return n * trailingZeroes(n - 1);
    // int fact = 1;
    // for(int j = 1; j <= n; j++) {
    //   fact *= j;
    // }
    // return fact;
  }

  public static int checkZeroNumber(int j) {
    int count = 0;
    while(j % 10 == 0) {
      count += 1;
      j /= 10;
    }
    return count;  
  }

  public static void main(String[] args) {
    int ans = trailingZeroes(3);
    int res = checkZeroNumber(ans);
    System.out.println(res);
  }
}
