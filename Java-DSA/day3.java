public class day3 {

    // Calculate how many of them contains even digit numbers

    public static void main(String[] args) {
        int[] nums = {1,10,20,300,60,32451,6,123,60};

        // int count = 0;
        // for(int i:nums){
        //     String s = String.valueOf(i);
        //     int n = s.length();
        //     if(n%2==0){
        //         count ++;
        //     }
        // }
        // System.out.println(count);

        int count = 0;

        for(int i: nums ){
            int digits = 0;
            int num =i;
            while(num>0){
                num = num /10;
                digits++;
            }
            if(digits%2==0){
                count++;
            }
        }

        System.out.println(count);
    }
}
