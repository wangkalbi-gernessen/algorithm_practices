public class ArrayStringsAreEqual {
  public static boolean arrayStringsAreEqual(String[] word1, String[] word2) {
    String res1 = "";
    String res2 = "";
    for(int i = 0; i < word1.length; i++){
      res1 += word1[i];
    }

    for(int i = 0; i < word2.length; i++){
      res2 += word2[i];
    }

    if(res1.equals(res2)){
      return true;
    }else{
      return false;
    }
  }
  
  public static void main(String[] args) {
    String[] arr1 = {"ab", "c"};
    String[] arr2 = {"a", "ab"};
    boolean res = ArrayStringsAreEqual.arrayStringsAreEqual(arr1, arr2);
    System.out.println(res);
  }
  
  
  
  
}
