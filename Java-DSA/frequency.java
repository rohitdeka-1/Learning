import java.util.HashMap;

public class frequency {
    public static void main(String[] args) {
        

        HashMap<Integer,Integer> map = new HashMap<>();
        int[] arr = {1,3,2,1,4,2,2,2,1,4};     // 1
   

        for( int i=0;i<arr.length;i++ ){ 
            
            if(map.containsKey(arr[i])){ 
                map.put(arr[i],map.get(arr[i]) + 1  );
            } else{
                map.put(arr[i], 1);
            }
            
        }

        System.out.println(map.entrySet());

            // 1 :  3   
            // 3 :  1
            // 2 :  1
            // 4 : 1
            

    }
}
