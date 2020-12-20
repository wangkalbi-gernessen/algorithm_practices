public class ClimbStairs {
  public static int climbStairs(int n) {
    if(n <= 1) {
      return 1;
    }
    int[] s_case = new int[n + 1];
    s_case[0] = 1;
    s_case[1] = 1;
    for(int i = 2; i <= n; i++) {
      s_case[i] = s_case[i - 1] + s_case[i - 2];
    }
    return s_case[n];
  }

  public static void main(String[] args) {
    int n = 4;
    int answer = ClimbStairs.climbStairs(n);
    System.out.println(answer);
  }
}