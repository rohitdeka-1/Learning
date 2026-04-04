
import java.util.Scanner;

public class QueueAtSchool {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int times = sc.nextInt(); 
        sc.nextLine();
        char[] arr = sc.next().toCharArray();


        for(int j=0;j<times;j++){
            for(int i=0;i<n-1;i++){
                if(arr[i]=='B'&& arr[i+1]=='G'){
                    char temp = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = temp;
                    i++;
                }
            }
        }

        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]);
        }

    }
}
