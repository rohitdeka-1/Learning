import java.util.Scanner;

public class sumbetweenLandR {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] a = {1,2,3,4,5};
        int left = sc.nextInt()-1;
        int right = sc.nextInt()-1;



        int sum = 0;
      
        for(int i=left;i<=right;i++){
            sum += a[i]; 
        }

        System.out.println(sum);
        sc.close();

    }
}
