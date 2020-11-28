public class ToHex{
  public static String toHex(int num){

    if(num == 0){
      return "0";
    }

    String map ="0123456789abcdef";
    StringBuilder res = new StringBuilder();
    while(num != 0){
      res.insert(0, map.charAt(num & 0xF));
      num = num >>> 4;
    }  
    return res.toString();
  }

  public static void main(String[] args) {
    String ans = ToHex.toHex(-1);
    System.out.println(ans);
  }

}