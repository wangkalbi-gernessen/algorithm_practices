import java.util.*;

public class SortByBits {
  public static int[] sortByBits(int[] arr) {
    HashMap<Integer, Integer> temp = new HashMap<Integer, Integer>();
    for(int i = 0; i < arr.length; i++){
      String binary = Integer.toString(arr[i], 2);
      temp.put(arr[i], sortByBitsHelper(binary));
    }

    SortedSet<Integer> res = new TreeSet<Integer>(temp.keySet());
    System.out.println(res);
    // ArrayList<Integer> res = new ArrayList<Integer>(temp.keySet());
    int[] result = new int[res.size()];
    for(int j = 0; j < res.size(); j++){
      result[j] = 1;
    }
    return result;
  }

  public static int sortByBitsHelper(String bin){
    char[] ch = bin.toCharArray();
    int count = 0;
    for(char elem : ch){
      if(elem == '1'){
        count += 1;
      }
    }
    return count;
  }



  public static void main(String[] args) {
    int[] arr = {0,1,2,3,4,5,6,7,8};
    int[] ans = SortByBits.sortByBits(arr);
    System.out.println(ans);
  }
  
}
