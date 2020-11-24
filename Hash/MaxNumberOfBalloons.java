public class MaxNumberOfBalloons {
  public static int maxNumberOfBalloons(String text) {
    String str = "balloon";
    int count = 0;
    for(int i = 0; i < text.length(); i++){
      char ch = text.charAt(i);
      String res = String.valueOf(ch);
      if(str.indexOf(res) != - 1){
        count += 1;
      }
    }
    if(count < str.length()){
      return 0;
    }else{
      return count / str.length();
    }
  }

  public static void main(String[] args) {
    System.out.println(maxNumberOfBalloons("loonbalxballpoon"));
  }
}
