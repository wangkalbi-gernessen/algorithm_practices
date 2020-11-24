import java.util.*;
import java.io.*;

public class BaseBallGame {
  public static int calPoints(String[] ops) {
    Stack<Integer> temp = new Stack<Integer>();
    for(int i = 0; i < ops.length; i++){
      if(ops[i].equals("C")){
        temp.pop();
      }else if(ops[i].equals("D")){
        temp.push(temp.get(temp.size() - 1) * 2);
      }else if(ops[i].equals("+")){
        int prev1 = temp.get(temp.size() - 1);
        int prev2 = temp.get(temp.size() - 2);
        temp.push(prev1 + prev2);
      }else{
        int num = Integer.parseInt(ops[i]);
        temp.push(num);
      }
    }

    int res = 0;
    for(int j = 0; j < temp.size(); j++){
      res += temp.get(j);
    }
    return res;
  }

  public static void main(String[] args) {
    String[] arrays = {"5","2","C","D","+"};
    System.out.println(calPoints(arrays));
  }
}