public class GetNoZeroIntegers{
  public static int[] getNoZeroIntegers(int n) {
    int[] res = new int[2];
    for(int i = 1; i < n; i++){
      String zeroStr = String.valueOf(i);
      if(zeroStr.indexOf("0") == -1){
        res[0] = i;
        String otherZeroStr = String.valueOf(n - i);
        if(otherZeroStr.indexOf("0") == -1){
          res[1] = n - i;
          break;
        }
      }
    }
    return res;
  }

  public static void main(String[] args) {
    System.out.println(getNoZeroIntegers(5));
  }
}