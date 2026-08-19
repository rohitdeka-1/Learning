
import java.util.Scanner;

public class UltraFastMathematician {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s1 = sc.next();
        String s2 = sc.next();

        char[] ch1 = s1.toCharArray();
        char[] ch2 = s2.toCharArray();

        String ans = "";

        for (int i = 0; i < s1.length(); i++) {
            if (ch1[i] == ch2[i]) {
                ans = ans + "0";
            } else {
                ans = ans + "1";
            }
        }

        System.out.println(ans);
    }
}
