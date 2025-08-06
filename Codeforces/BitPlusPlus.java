import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

public class BitPlusPlus {
    public static void main(String[] args) {
        HashMap<String,String> map = new HashMap<>();
        ArrayList<String> arr = new ArrayList<>();

        try (Scanner sc = new Scanner(System.in)) {
            int n = sc.nextInt();
            sc.nextLine();
            while(n!=0){
                String x = sc.next();
                arr.add(x);
                n--;
            }
            
            map.put("++X", "ADD");
            map.put("X++", "ADD");
            map.put("--X", "SUB");
            map.put("X--", "SUB");
            
            int count =0;
            for(int i=0;i<arr.size();i++){
                if(map.get(arr.get(i)).equals("ADD")){
                    count++;
                } else{
                    count--;
                }
            }
            
            System.out.println(count);
        }
    }
}
