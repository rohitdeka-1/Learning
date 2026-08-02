
import java.util.Scanner;

public class RemoveDuplicates {

    static int removeDuplicates(int[] nums) {
        int i = 0;
        int j = 1;

        while (j < nums.length) {
            if (nums[j] == nums[i]) {
                j++;
            } else {
                i++;
                nums[i] = nums[j];
                j++;
            }
        }

        return i + 1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] nums = {0, 0, 1, 1, 2, 3, 4, 5, 6, 6};
        int ans = removeDuplicates(nums);
        System.out.println(ans);
    }
}
