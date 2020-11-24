import java.util.HashSet;
import java.util.Iterator;

public class RemoveDuplicateLetters {
  public static String removeDuplicateLetters(String s) {
    HashSet<Character> res = new HashSet<>();
    for(int i = 0; i < s.toCharArray().length; i++){
      res.add(s.charAt(i));
    }
    Iterator<Character> result = res.iterator();
    String ans = new String();
    while(result.hasNext()){
      ans += result.next().toString();
    }
    return ans;
  }

  public static void main(String[] args) {
    System.out.println(removeDuplicateLetters("bcabc"));
  }
}
