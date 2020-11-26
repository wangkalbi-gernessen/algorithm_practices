public class MostCommonWord {
  public static String mostCommonWord(String paragraph, String[] banned) {
    String[] splitArr = paragraph.split(' ');
    
  }

  public static void main(String[] args) {
    String str = "Bob hit a ball, the hit BALL flew far after it was hit.";
    String[] banWord = {"hit"};
    String answer = MostCommonWord.mostCommonWord(str, banWord);
    System.out.println(answer);
  }
}
