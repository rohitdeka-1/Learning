
import java.util.Scanner;

public class HQ9 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String name = sc.next();
        if (name.contains("H") || name.contains("Q") || name.contains("9")) {
            System.out.print("YES");
        } else {
            System.out.print("NO");
        }
    }
}
