import java.util.*;

public class LongestCommonPrefix {
  public static String longestCommonPrefix(String[] strs) {
    if(strs.length == 0 || strs == null){
      return "";
    }
    // 1. create string builder
    StringBuilder str = new StringBuilder();
    // sort array
    Arrays.sort(strs);
    // split first and last to char
    char[] first = strs[0].toCharArray();
    char[] last = strs[strs.length - 1].toCharArray();

    // loop through
    for(int i = 0; i < first.length && i < last.length; i++) {
      if(first[i] == last[i]){
        str.append(first[i]);
      }else{
        return str.toString();
      }
    }
    return str.toString();
  }

  public static void main(String[] args) {
    String[] arrs = {"flower", "flow", "flight"};
    System.out.println(longestCommonPrefix(arrs));
  }
}
