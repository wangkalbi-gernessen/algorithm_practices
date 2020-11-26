import java.util.Iterator;

public class CountBits {
  public static int[] countBits(int num) {
    int[] res = new int[num + 1];
    for(int i = 0; i <= num; i++){
      res[i] = countBitsHelper(i);
    }
    return res;
  }

  public static int countBitsHelper(int n){
    String binary = Integer.toString(n, 2);
    char[] ch = binary.toCharArray();
    int count = 0;
    for(char elem : ch){
      if(elem == '1'){
        count += 1;
      }
    }
    return count;
  }

  public static void main(String[] args) {
    int number = 5;
    int[] ans = CountBits.countBits(number);
    System.out.println(ans);
  }
}
