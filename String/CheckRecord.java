public class CheckRecord{
  public static boolean checkRecord(String s) {
    int absentNum = 0;
    int lateContiNum = 0;
    char[] ch = s.toCharArray();
    for(char elem : ch){
      if(elem == 'A'){
        absentNum += 1;
      }
      // in case of more than 1 absense, return false
      if(absentNum > 1){
        return false;
      }
      // in case of more than continuous late, return false
      if(elem == 'L'){
        lateContiNum += 1;
      }else{
        lateContiNum = 0;
      }
      if(lateContiNum > 2){
        return false;
      } 
    }
    return true;
  }
  public static void main(String[] args) {
    System.out.println(checkRecord("PPALLP"));
  }
}