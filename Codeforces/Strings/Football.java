
import java.util.Scanner;

public class Football {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.next();
        int maxOnes = 0;
        int maxZeroes = 0;
        int zeroes = 0;
        int ones = 0;

        for (int i = 0; i < input.length(); i++) {
            if (input.charAt(i) == '0') {
                ones = 0;
                zeroes++;
                maxZeroes = Math.max(zeroes, maxZeroes);
            } else {
                zeroes = 0;
                ones++;
                maxOnes = Math.max(ones, maxOnes);
            }
        }

        if (maxZeroes >= 7 || maxOnes >= 7) {
            System.out.println("YES");
        } else {
            System.out.println("NO");
        }

    }
}
