import java.util.Scanner;

public class Elephant {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int input = sc.nextInt();

        int step1 = 1;
        int step2 = 2;
        int step3 = 3;
        int step4 = 4;
        int step5 = 5;

        // int moves = 0;
        // int sum = 0;

        // while (sum < input) {
        // if (sum + 5 <= input) {
        // sum += 5;
        // } else if (sum + 4 <= input) {
        // sum += 4;
        // } else if (sum + 3 <= input) {
        // sum += 3;
        // } else if (sum + 2 <= input) {
        // sum += 2;
        // } else {
        // sum += 1;
        // }
        // moves++; // count each step
        // }

        // System.out.println(moves);

        int count = (input + 4) / 5;
        System.out.println(count);

    }
}
