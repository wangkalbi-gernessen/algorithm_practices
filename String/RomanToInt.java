import java.util.HashMap;

public class RomanToInt {
  public static int romanToInt(String s) {
    HashMap<Character, Integer> alpha = new HashMap<Character, Integer>();
    alpha.put('I', 1);
    alpha.put('V', 5);
    alpha.put('X', 10);
    alpha.put('L', 50);
    alpha.put('C', 100);
    alpha.put('D', 500);
    alpha.put('M', 1000);

    int intNum = 0;
    int prev = 0;
    for(int i = s.length() - 1; i >= 0; i--){
      int temp = alpha.get(s.charAt(i));
      if(temp < prev){
        intNum -= temp;
      }else{
        intNum += temp;
      }
      prev = temp;
    }
    return intNum;
  }

  public static void main(String[] args) {
    System.out.println(romanToInt("III"));
  }
}