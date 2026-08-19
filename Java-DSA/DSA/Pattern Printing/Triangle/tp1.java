import java.util.Scanner;

public class tp1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int depth = sc.nextInt();

        for (int i = 0; i < depth; i++) {

            for (int j = 0; j < i; j++) {
                System.out.print("*");
            }
            System.out.println(" ");
        }

    }
}
