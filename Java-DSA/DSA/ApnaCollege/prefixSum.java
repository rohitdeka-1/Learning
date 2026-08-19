public class prefixSum {
    public static void main(String[] args) {
        int[] arr = {2,1,3,4,5};
        int[] pref = new int[arr.length];

        pref[0] = arr[0];
        for(int i=1;i<arr.length;i++){
            pref[i] = pref[i-1]+arr[i];
        } 

        for(int i=0;i<pref.length;i++){
            System.out.println(pref[i]);
        }


    }
}
