import java.util.Scanner;

public class StonesontheTable {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        String s = sc.next();   

        int count = 0;
        for (int i = 1; i < num; i++) {
            if (s.charAt(i) == s.charAt(i - 1)) {
                count++;
            }
        }

        System.out.println(count);
    }
}
