public class DefuseBomb {
  public static int[] decrypt(int[] code, int k) {
    int[] result = new int[code.length];
    if(k == 0){
      for(int i = 0; i < code.length; i++){
        result[i] = 0;
      }
      return result;
    }else if(k > 0){
      int index;
      for(int i = 0; i < code.length; i++){
        if(i == code.length - 1){
          index = 0;
        }else{
          index = i + 1;
        }
        int count = 0;
        int sum = 0;
        while(count < k){
          sum += code[index];
          index++;
          count++;
          if(index == code.length - 1){
            index = 0;
          }
        }
        result[i] = sum;
      }
      return result;
    }else{
      int count = 0;
      for(int i = 0; i < code.length; i++){
        int index = i - 1;
        while(Math.abs(count) < k){
          sum += code[index];
          index--;
          count++;
        }
        result[i] = sum;
      }
      return result;
    }
  }

  public static void main(String[] args) {
    int[] arr = {1,2,3,4};
    int[] res = DefuseBomb.decrypt(arr, 5);
    System.out.println(res);
  }
}