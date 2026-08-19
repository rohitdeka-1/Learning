import java.util.Scanner;

public class evenArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int t = sc.nextInt();
        int[] arr = new int[t];
        int k = 0;
        for (int i = 0; i < t; i++) {
            int lengthOfArray = sc.nextInt();
            int odd = 0;
            int even = 0;
            for (int j = 0; j < lengthOfArray; j++) {
                int num = sc.nextInt();
                if (j % 2 == 0) {
                    if (num % 2 != 0) {
                        even++;
                    }
                } else {
                    if (num % 2 == 0) {
                        odd++;
                    }
                }
            }
            if (odd == even) {
                arr[k] = odd;
            } else {
                arr[k] = -1;
            }
            k++;
        }

        for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]);
        }
        
    }
}
