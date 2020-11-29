public class CountSegments {
  public static int countSegments(String s){
    if(s.length() == 0 || s == null){
      return 0;
    }
    String[] splitVal = s.split(" ");
    int count = 0;
    for(int i = 0; i < splitVal.length; i++){
      if(splitVal[i].equals("")){
        continue;
      }else{
        count += 1;
      }
    }
    return count;
  }
  
  public static void main(String[] args) {
    String str = ", , , ,        a, eaefa";
    int ans = CountSegments.countSegments(str);
    System.out.println(ans);
  }
}
