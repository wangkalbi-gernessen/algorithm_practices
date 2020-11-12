import java.util.*;

public class BuildArray {
  public static void main(String[] args) {
    int[] arr = {1, 2};
    System.out.println(buildArray(arr, 4));
  }

  public static List<String> buildArray(int[] target, int n) {
    ArrayList<String> list = new ArrayList<String>();
    // set number from list
    int k = 1;
    for(int i = 0; i <= target.length - 1; i++){
      while(k < target[i]){
        list.add("Push");
        list.add("Pop");
        k++;
      }
      if(k == target[i]){
        list.add("Push");
        k++;
      }
    }
    return list;
  }
}