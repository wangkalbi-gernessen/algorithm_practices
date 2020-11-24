public class DiagonalSum{
  public static int diagonalSum(int[][] mat) {
    int sum = 0;
    for(int row = 0; row < mat.length; row++){
      for(int col = 0; col < mat[row].length; col++){
        if((row == 0 || row == 2)  )
      }
    }
  }

  public static void main(String[] args) {
    int[] arrs = {{1,2,3},{4,5,6},{7,8,9}};
    System.out.println(diagonalSum(arrs));
  }
}