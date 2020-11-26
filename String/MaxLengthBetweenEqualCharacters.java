import java.util.*;

public class MaxLengthBetweenEqualCharacters {
  public static int maxLengthBetweenEqualCharacters(String s) {
    ArrayList<Integer> res = new ArrayList<Integer>();
    for(int i = 0; i < s.length() - 1; i++){
      for(int j = i + 1; j < s.length(); j++){
        if(s.charAt(i) == s.charAt(j)){
          res.add(j - i - 1);
        }
      }
    }
    if(res.size() == 0){
      return -1;
    }else{
      int largest = 0;
      for(int k = 1; k < res.size(); k++){
        if(res.get(largest) < res.get(k)){
          largest = k;
        }
      }
      return res.get(largest);
    }
  }
  
  public static void main(String[] args) {
    String str = "aa";
    int ans = MaxLengthBetweenEqualCharacters.maxLengthBetweenEqualCharacters(str);
    System.out.println(ans);
  }
}
