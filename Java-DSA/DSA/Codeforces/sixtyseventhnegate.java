import java.util.Scanner;

public class sixtyseventhnegate {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int cases = sc.nextInt();
        int[] arr = new int[cases];
        int k = 0;
        for (int i = 0; i < cases; i++) {
            int maxi = Integer.MIN_VALUE;
            int sum = 0;
            for (int j = 0; j < 7; j++) {
                int newVal = sc.nextInt();
                sum += newVal;
                maxi = Math.max(maxi, newVal);
            }

            int ans = 2 * maxi - (sum);
            arr[k] = ans;
            k++;    
        }
        for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]);
        }
    }
}
