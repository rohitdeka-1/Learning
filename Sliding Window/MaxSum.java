
import java.util.Scanner;

public class MaxSum {

    public static int maxSumSliding(int[] arr) {
        int k = 5;
        int i = 0;
        int j = 0;
        int sum = 0;
        int maxSum = Integer.MIN_VALUE;
        while (j < arr.length) {
            sum += arr[j];
            if (j - i + 1 < k) {
                j++;
            } else if (j - i + 1 == k) {
                maxSum = Math.max(maxSum, sum);
                sum = sum - arr[i];
                i++;
                j++;
            }
        }

        return maxSum;
    }

    public static void main(String[] args) {
        int[] arr = {1, 5, 2, 3, 4};
        Scanner sc = new Scanner(System.in);
        // int k = sc.nextInt();
        // int sum = Integer.MIN_VALUE;
        // for (int i = 0; i <= arr.length - k; i++) {
        //     int temp = 0;
        //     for (int j = i; j < i + k; j++) {
        //         temp += arr[j];
        //         sum = Math.max(sum, temp);
        //     }
        // }
        // System.out.println(sum);

        int ans = maxSumSliding(arr);
        System.out.println(ans);

    }
}
