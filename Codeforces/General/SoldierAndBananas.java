
import java.util.Scanner;

public class SoldierAndBananas {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int k = sc.nextInt();
        int n = sc.nextInt();
        int w = sc.nextInt();

        int sum = 0;
        for (int i = 1; i <= w; i++) {
            sum = sum + (i * k);
        }

        int borrow = sum - n;
        if (borrow < 0) {
            borrow = 0;
        }
        System.out.println(borrow);

    }
}
