
import java.util.Scanner;

public class petyaAndStrings {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s1 = sc.next().toLowerCase();
        String s2 = sc.next().toLowerCase();

        int ans = s1.compareTo(s2);

        if(ans==0){
            System.out.println(0);
        } else if(ans>0){
            System.out.println(1);
        } else if(ans<0){
            System.out.println(-1);
        }
        
    }
}
