import java.util.ArrayList;
import java.util.Scanner;

public class temp {


    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        
        ArrayList<Integer> tech = new ArrayList<>();
        ArrayList<Integer> non = new ArrayList<>();
        ArrayList<Integer> ans = new ArrayList<>();
        
        int times = sc.nextInt(); // input => how many employe (6)
        for(int i=0;i<times;i++){
            int num = sc.nextInt(); // current employe(1,-2,4)
            if(num<0){
                non.add(num);
            }else {
                tech.add(num);
            }
        }

        int i = 0;
        int j = 0;

        /**
         * [1, 2, 3, 4]
            [-4, -1]
         * 
         */
        // ans = [ -4, 1, -1 , 2  ] 
               

        while( i < non.size() && j<tech.size() ){
            ans.add(non.get(i));
            i++;
            ans.add(tech.get(j));
            j++;
        } 
        
        while(j < tech.size()){
            ans.add(tech.get(j));
            j++;
        }

        while(i < non.size()){
            ans.add(non.get(i));
            i++;
        }


        System.out.println(ans);
        
     }
}
