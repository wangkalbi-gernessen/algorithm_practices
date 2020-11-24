import java.util.ArrayList;

public class CreateTargetArray {
  public static int[] createTargetArray(int[] nums, int[] index) {
    ArrayList<Integer> res = new ArrayList<>();
    for(int i = 0; i < nums.length; i++){
      int ind = index[i];
      res.add(ind, nums[i]);
    }
    return res.stream().mapToInt(Integer::intValue).toArray();
  }

  public static void main(String[] args) {
    int[] arrs = {0,1,2,3,4};
    int[] indexes = {0,1,2,2,1};
    System.out.println(createTargetArray(arrs, indexes));
  }
}
