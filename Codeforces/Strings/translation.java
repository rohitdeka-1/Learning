import java.util.Scanner;

public class translation {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s1 = sc.next();
        String s2 = sc.next();
        String ans="";

        for(int i=s1.length()-1;i>=0;i--){
            ans = ans+s1.charAt(i);
        }

        if(s2.equals(ans)){
            System.out.println("YES");
        }else{
            System.out.println("NO");
        }

        sc.close();
    }
}
