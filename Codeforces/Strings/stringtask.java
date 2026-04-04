
import java.util.Scanner;

public class stringtask {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        //deletes all the vowels,
        //inserts a character "." before each consonant,
        //replaces all uppercase consonants with corresponding lowercase ones.

        StringBuilder sb = new StringBuilder();
        String vowels = "aeiouy";
        for (char c : s.toCharArray()) {
            if ((vowels.indexOf(Character.toLowerCase(c)) == -1)) {
                if(Character.isUpperCase(c)){
                    c = Character.toLowerCase(c);
                }
                sb.append(".").append(c);
            }
        }

        System.out.println(sb);
        sc.close();
    }

}
