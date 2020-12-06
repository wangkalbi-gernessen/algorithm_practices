class ExcelColumnNumber {
  private String alpha;

  public ExcelColumnNumber(String alpha){
    this.alpha = alpha;
  }

  public String getAlpha(){
    return this.alpha;
  }

  public void setAlpha(String alpha){
    this.alpha = alpha;
  }

  public int titleToNumber(String s) {
    // int result = 0;
    // for(int i = 0; i < s.length(); i++) {
    //   result *= 26;
    //   result += s.charAt(i) - 'A' + 1;
    // }
    // return result;

    char[] ch = s.toCharArray();
    int total = ch[0] - 'A' + 1;
    for(int i = 1; i < ch.length; i++){
      int charValue = ch[i] - 'A' + 1;
      total = total * 26 + charValue;
    }
    return total;
  }

  public static void main(String[] args) {
    ExcelColumnNumber r1 = new ExcelColumnNumber("B");
    int ans = r1.titleToNumber(r1.getAlpha());
    System.out.println(ans);
  }
}