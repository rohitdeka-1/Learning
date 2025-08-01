import java.util.ArrayList;
import java.util.Scanner;

public class wayToLong {

    public static void main(String[] args) {

        ArrayList<String> arr = new ArrayList<>();
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        while(n!=0){
            String word = sc.next();
            arr.add(word);
            n--;
        }

        for (String words : arr) {
            if(words.length()>10){
                int num = words.length()-2;
                System.out.println(""+words.charAt(0)+""+num+""+words.charAt(words.length()-1));
            } else{
                System.out.println(words);
            }
        }


        sc.close();
    }
}
