
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class helpfulMaths {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        String s = sc.next(); 
        ArrayList<Character> arr = new ArrayList<>();
        
        for( int i=0; i<s.length();i++){
            char ch = s.charAt(i);
            if(ch!='+'){
                arr.add(ch);
            }
        }
       Collections.sort(arr);

         
        for (int i = 0; i < arr.size(); i++) {
            System.out.print(arr.get(i));
            if(i<arr.size()-1)
            System.out.print("+");
        }

    }
}
