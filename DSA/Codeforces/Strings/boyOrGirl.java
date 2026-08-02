
import java.util.HashSet;
import java.util.Scanner;

public class boyOrGirl {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        HashSet<Character> map = new HashSet<>();

        for (int i = 0; i < s.length(); i++) {
            map.add(s.charAt(i));
        }

        if (map.size() % 2 == 0) {
            System.out.println("CHAT WITH HER!");
        } else {
            System.out.println("IGNORE HIM!");
        }
    }
}
