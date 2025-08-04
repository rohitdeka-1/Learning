
import java.util.Scanner;

public class stringTask2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        String s1 = s.toLowerCase();
        StringBuilder sb = new StringBuilder();
        String vowels = "aoyeui";
        
        

        for(char c : s1.toCharArray()){
            if(vowels.indexOf(c)==-1){
                sb.append(".").append(c);
            }
        }
        System.out.println(sb);
    }
}
