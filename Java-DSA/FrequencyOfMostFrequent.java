
import java.util.Arrays;

public class FrequencyOfMostFrequent {
    public static int maxFrequency(int[] nums, int k) {
        //Input: nums = [1,2,4], k = 5
        //Output: 3
        Arrays.sort(nums);

        int max = nums[nums.length-1];
        System.out.println(max);
        int count =0;
        for(int i=nums.length-2;i>=0;i--){
            int gap = max - nums[i];
            if(k>=gap){
                k = k - gap;
                count++;
            }
        }

        return count+1;
    }
    public static void main(String[] args) {
        int nums[] = {1,4,8,13};
        int k = 5;
        int ans = maxFrequency(nums,k);
        System.out.println(ans);
    }
}
