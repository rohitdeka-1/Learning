
import java.util.Scanner;

public class increasingArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int input = sc.nextInt();
        int[] arr = new int[input];
        for(int i=0;i<arr.length;i++){
            arr[i] = sc.nextInt();
        }
        
        int comp = 0;
        // 5 4 3 2 1
        // 5 
        for(int i=1;i<arr.length;i++){
            if(arr[i-1]>arr[i]){
                int temp = arr[i-1] - arr[i];
                arr[i] = arr[i] + temp;
                comp +=temp;
            }
        }

        System.out.println(comp);

        sc.close();

    }
}
