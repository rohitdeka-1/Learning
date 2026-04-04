
import java.util.Scanner;

public class OnetoN {

    private static void count(int i, int n) {

        if (i > n) {
            return;
        }
        System.out.println(i);
        count(i + 1, n);

    }

    private static void counter(int n) {
        if (n == 0) {
            return;
        }
        counter(n - 1);
        System.out.println(n);
        S
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        count(0, n);
    }
}
