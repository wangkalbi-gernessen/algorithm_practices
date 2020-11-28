public class ReformatDate {
  public static String reformatDate(String date) {
    String res = "";
    String[] splitStr = date.split(" ");
    for(int i = splitStr.length - 1; i >= 0; i--){
      if(i == splitStr.length - 1){
        res += splitStr[i] + "-";
      }
      if(i == splitStr.length - 2){
        res += reformatMonth(splitStr[i]) + "-";
      }
      if(i == 0){
        res += reformatDay(splitStr[i]);
      }
    }
    return res;
  }

  public static String reformatMonth(String month){
    if(month.equals("Jan")){
      return "01";
    }else if(month.equals("Feb")){
      return "02";
    }else if(month.equals("Mar")){
      return "03";
    }else if(month.equals("Apr")){
      return "04";
    }else if(month.equals("May")){
      return "05";
    }else if(month.equals("Jun")){
      return "06";
    }else if(month.equals("Jul")){
      return "07";
    }else if(month.equals("Aug")){
      return "08";
    }else if(month.equals("Sep")){
      return "09";
    }else if(month.equals("Oct")){
      return "10";
    }else if(month.equals("Nov")){
      return "11";
    }else{
      return "12";
    }
  }

  public static String reformatDay(String day){
    String r1 = day.substring(0, day.length() - 2);
    if(r1.length() == 1){
      return "0" + r1;
    }else{
      return r1;
    }
  }


  public static void main(String[] args) {
    String str = "20th Oct 2052";
    String ans = ReformatDate.reformatDate(str);
    System.out.println(ans);
  }
}
