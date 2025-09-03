
public class MaxSum {

    public static int longestSubarray(int[] arr) {
        int i = 0;
        int j = 0;
        int max = 0;
        for(int )

        return max;
    }

    public static int maxOne(int[] arr) {

        int max = 0;
        int maxZeroes = 0;
        int count = 0;
        int countZeroes = 0;
        int finalAns = 0;
        for (int i = arr.length - 1; i > 0; i--) {
            if (arr[i] == 1) {
                count++;
                max = Math.max(count, max);
                countZeroes = 0;
            } else if (arr[i] == 0) {
                countZeroes++;
                maxZeroes = Math.max(maxZeroes, countZeroes);
                count = 0;
            }
        }
        finalAns = Math.max(max, maxZeroes);
        return finalAns;
    }

    // public static int[] slidingWindowMaximum(int[] nums, int k) {
    //     int i = 0;
    //     int j = 0;
    //     // int sum = 0;
    //     ArrayList<Integer> result = new ArrayList<>();
    //     while (j < nums.length) {
    //         // sum += nums[j];
    //         if (j - i + 1 < k) {
    //             j++;
    //         } else if (j - i + 1 == k) {
    //             int max = nums[i];
    //             for (int x = i; x <= j; x++) {
    //                 max = Math.max(max, nums[x]);
    //             }
    //             result.add(max);
    //             i++;
    //             j++;
    //         }
    //     }
    //     return result;
    // }
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
        int[] arr = {1, 0, 0, 1, 0, 1};
        // Scanner sc = new Scanner(System.in);
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
        // int k = 1;
        // int[] ans = slidingWindowMaximum(arr, k);
        // for (int num : ans) {
        //     System.out.println(num);
        // }
        int ans = longestSubarray(arr);
        System.out.println(ans);
    }
}
