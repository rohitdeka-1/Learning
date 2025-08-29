import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

public class MidTermExam {

    // static int swappingBitLongest(int[] arr){

    // while(l<r){

    // }

    // }

    static int swappingNibble(int num) {
        int swapped = ((num & 0x0F) << 4 | ((num & 0xF0) >> 4));
        return swapped;
    }

    static int maxProductArray(int[] arr) {

        int max = 0;

        for (int i = 0; i < arr.length; i++) {
            int prod = 1;
            for (int j = i; j < arr.length; j++) {
                prod = prod * arr[j];
                max = Math.max(max, prod);
            }

        }

        return max;

    }

    static int maxProductArrayN(int[] arr) {
        long max = 0;
        long prod = 1;

        for (int i = 0; i < arr.length; i++) {
            prod *= arr[i];
            if (prod > 0) {
                max = Math.max(prod, max);
            }
        }
        return (int) max;
    }

    static void arrayLeaders2(int[] arr) {

        ArrayList<Integer> nums = new ArrayList<>();
        int n = arr.length;
        int max = arr[n - 1];
        nums.add(max);
        for (int i = n - 2; i >= 0; i--) {
            if (arr[i] >= max) {
                max = arr[i];
                nums.add(max);
            }
        }

        for (int num : nums) {
            System.out.println(num);
        }

    }

    static boolean binaryPalindrome(int num) {

        String binaryNum = Integer.toBinaryString(num);
        int l = 0;
        int r = binaryNum.length() - 1;

        while (l < r) {
            if (binaryNum.charAt(l) == binaryNum.charAt(r)) {
                l++;
                r--;
            } else {
                return false;
            }
        }

        return true;
    }

    static boolean StrobogrammaticNumber2(String num) {

        HashMap<Character, Character> map = new HashMap<>();

        map.put('1', '1');
        map.put('6', '9');
        map.put('8', '8');
        map.put('9', '6');

        char[] ch = num.toCharArray();

        int left = 0;
        int right = ch.length - 1;
        for (int i = 0; i < ch.length; i++) {
            if (map.containsKey(ch[left]) && map.get(ch[left]) == ch[right]) {
                left++;
                right--;

            } else {
                return false;
            }
        }

        return true;
    }

    static int eulersPhi(int num) {

        int count = 0;

        for (int i = 0; i < num; i++) {
            int ans = gcd(i, num);
            if (ans == 1) {
                count++;
            }
        }

        return count;
    }

    static void simpleSieve(int num) {

        int[] prime = new int[num + 1];
        Arrays.fill(prime, 1);

        prime[0] = 0;
        prime[1] = 0;

        for (int i = 2; i * i <= num; i++) {
            if (prime[i] == 1) {
                for (int j = i * i; j <= num; j += i) {
                    prime[j] = 0;
                }
            }
        }

        for (int i = 0; i < prime.length; i++) {
            if (prime[i] == 1) {

                System.out.println(i);
            }
        }

    }

    static int gcd(int a, int b) {
        if (a == 0) {
            return b;
        } else {
            return gcd(b % a, a);
        }
    }

    static int maxSumSubArray2(int[] arr) {

        int maxSum = Integer.MIN_VALUE;

        for (int i = 0; i < arr.length; i++) {
            int sum = 0;
            for (int j = i; j < arr.length; j++) {
                sum = sum + arr[j];
                maxSum = Math.max(maxSum, sum);
            }
        }
        return maxSum;
    }

    static int maxSumSubArray(int[] arr) {

        int sum = 0;
        int maxSum = Integer.MIN_VALUE;

        for (int i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
            if (sum > maxSum) {
                maxSum = sum;
            }
            if (sum < 0) {
                sum = 0;
            }
        }

        return maxSum;
    }

    public static void main(String[] args) {
        int[] arr = { 4, 0, -2, 6 };
        // maxProductArray(arr);
        System.out.println(maxProductArray(arr));
        // int ans = maxSumSubArray(arr);
        // System.out.println(ans);
        // System.out.println(binaryPalindrome(17));
        // System.out.println(gcd(10, 5));
        // System.out.println(eulersPhi(10000));

        // Scanner sc = new Scanner(System.in);
        // int x = sc.nextInt();

        // int swapped = ( (x & 0x0F )<<4 | (x & 0xF0 )>>4 );
        // System.out.println(swapped);

        // int a =5;
        // int ans = a<<1;
        // System.out.println(ans);
        // System.out.println(2 + 3 * 4 / 2 - 5);
    }
}
