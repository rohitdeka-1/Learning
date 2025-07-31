import java.util.HashMap;

public class targetsum {
    
    static int sumtarget(int[] arr, int target) {
        int pairs = 0;

        // for (int i = 0; i < arr.length; i++) {
        //     for (int j = i + 1; j < arr.length; j++) {
        //         if (arr[i] + arr[j] == target) {
        //             pairs++;
        //             System.out.println("Pair:"+ "(" + arr[i]+","+arr[j]+")");
        //         }
        //     }
        // }
        // return pairs;

        {4,6,3,8,5,2};
        

        HashMap<Integer,Integer> map = new HashMap<>();
        


    }

    public static void main(String[] args) {
        int[] arr = {4, 6, 3, 8, 5, 2};
        int result = sumtarget(arr,7);
        System.out.println(result);
    }

}
