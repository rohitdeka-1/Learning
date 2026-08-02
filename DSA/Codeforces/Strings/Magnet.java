
import java.util.Scanner;

public class Magnet {

    public static void main(String[] args) {
        // 101010  0101  100
        // G1      G2    G3
        // 10 || 01 -> Attract
        // 00 || 11 -> Reppel

        Scanner sc = new Scanner(System.in);
        int times = sc.nextInt();
        String firstMagnet = sc.next();
        int group = 1;
        for (int k = 1; k < times; k++) {
            String secondMagnet = sc.next();
            if (!secondMagnet.equals(firstMagnet)) {
                group++;
            }
            firstMagnet = secondMagnet;
        }
        // for (int i = 0; i < s.length(); i++) {
        //     char start = s.charAt(i);
        // }
        // int i = 0;
        // int j = i + 1;
        // int count = 0;
        // while (j < s.length()) {
        //     if (s.charAt(i) == s.charAt(j)) {
        //         count++;
        //     }
        //     i++;
        //     j++;
        // }
        System.out.println(group);
    }
}
