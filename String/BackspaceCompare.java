import java.util.*;

public class BackspaceCompare {
  public static boolean backspaceCompare(String S, String T) {
    if(S.equals(T)){
      return true;
    }else{
      // make stack for String S
      Stack<Character> s = new Stack<>();
      for(int i = 0; i < S.length(); i++){
        if(S.charAt(i) == '#'){
          if(s.isEmpty()){
            continue;
          }
          s.pop();
          continue;
        }
        s.push(S.charAt(i));
      }
      Iterator<Character> itrS = s.iterator();
      String reuS = new String();
      while(itrS.hasNext()){
        reuS += itrS.next().toString();
      }
      // make stack for String T
      Stack<Character> t = new Stack<>();
      for(int j = 0; j < T.length(); j++){
        if(T.charAt(j) == '#'){
          if(t.isEmpty()){
            continue;
          }
          t.pop();
          continue;
        }
        t.push(T.charAt(j));
      }
      Iterator<Character> itrT = t.iterator();
      String reuT = new String();
      while(itrT.hasNext()){
        reuT += itrT.next().toString();
      }

      if(reuS.equals(reuT)){
        return backspaceCompare(reuS, reuT);
      }else{
        return false;
      }
    }
  } 
  
  public static void main(String[] args) {
    System.out.println(backspaceCompare("a#c", "b"));
  }
}