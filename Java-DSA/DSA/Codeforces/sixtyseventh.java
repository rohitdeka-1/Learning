import java.util.Scanner;

public class sixtyseventh{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int cases = sc.nextInt();
        int[] arr = new int[cases];
        for(int i=0;i<cases;i++){
            int num = sc.nextInt();
            arr[i] = num;
        }
        for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]);
        }
        sc.close();
    }
}