public class NextGreaterElement {
  public static int[] nextGreaterElement(int[] nums1, int[] nums2) {
    int[] res = new int[nums1.length];
    for(int i = 0; i < nums1.length; i++){
      res[i] = nextGreaterElementHelper(nums1[i], nums2);
    }  
    return res;
  } 
  
  public static int nextGreaterElementHelper(int n, int[] n2){
    for(int i = 0; i < n2.length; i++){
      if(n == n2[i]){
        if(i == n2.length - 1){
          return -1;
        }else{
          int index = i;
          for(int j = index + 1; j < n2.length; j++){
            if(n < n2[j]){
              return n2[j];
            }
          }
          return -1;
        }
      }  
    }
    return -1;
  }    

  public static void main(String[] args) {
    int[] arr1 = {4, 1, 2};
    int[] arr2 = {1, 3, 4, 2};
    int[] ans = NextGreaterElement.nextGreaterElement(arr1, arr2);
    System.out.println(ans);
  }
}
