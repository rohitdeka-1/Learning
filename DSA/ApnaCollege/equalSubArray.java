public class equalSubArray {
    
    public static void main(String[] args) {
        
        int[] arr={1,2,3,4,5};
        int[] pref = new int[arr.length];
        int[] suff = new int[arr.length];

        //[5,3,2,6,3,1]
        //[5,8,10,16,19,20]
        //[1,4,10,16,19,20]        
        //[  20,19,16,10,4,1]
        
        pref[0] = arr[0];
        for(int i=1;i<arr.length;i++){
            pref[i] = pref[i-1] + arr[i];
        }

        suff[arr.length-1] = arr[arr.length-1];
        for(int i=arr.length-2;i>=0;i--){
            suff[i] =suff[i+1] + arr[i];
        }
        
        int j = arr.length-1;
        for(int i=0;i<arr.length-1;i++){
            if(pref[i]==suff[j--]){
                System.out.println("True");
                return;
            }
        }

        System.out.println(false);

        for(int i=0;i<arr.length;i++){
            System.out.println("prefF"+pref[i]);
            System.out.println("SUFF"+suff[i]);
            
        }

    }

}
