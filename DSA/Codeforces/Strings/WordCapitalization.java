import java.util.Scanner;

public class WordCapitalization {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        char[] c = s.toCharArray();

        char a = Character.toUpperCase(c[0]);
        // System.out.println(a);
        c[0] = a;
        for(char ch : c){
            System.out.print(ch);
        }

    }
}
