
public class frequency {
    public static void main(String[] args) {

        int[] arr= {1,2,3,4,5,6};

        int left =0;
        int right =arr.length-1;
        int k = 2;

        while(left<right && k>0){
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
            k--;
        }

        for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]);
        }








        // HashMap<Integer,Integer> map = new HashMap<>();
        // int[] arr = {1,3,2,1,4,2,2,2,1,4};     // 1
   

        // for( int i=0;i<arr.length;i++ ){ 
            
        //     if(map.containsKey(arr[i])){ 
        //         map.put( arr[i]    , map.get(arr[i]) + 1  );
        //     } else{
        //         map.put(arr[i], 1);
        //     }
            
        // }

        // System.out.println(map.entrySet());

        //     // 1 :  3   
        //     // 3 :  1
        //     // 2 :  1
        //     // 4 : 1
            

    }
}
