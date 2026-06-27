import java.util.Scanner;
public class chebacca{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        char[] arr = s.toCharArray();

        for(int i=0;i<arr.length;i++){
            int ch = arr[i] - '0' ;
            int inverted = (9 - ch);
            System.out.print(Math.min(ch,inverted));
        }
    }
}