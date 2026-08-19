import java.util.Scanner;

public class sumbetweenindexPREF {
    public static void main(String[] args) {
        
        //Using prefix sum

        // [1,2,3,4,5]
        // [1,3,6,10,15]

   
        //[1,2,3,4,5]
        //[1,3,6,10,15]
        //[5,9,12,14,15]


        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        int[] arr = new int[size+1];

        for(int i=1;i<=size;i++){
            arr[i] = sc.nextInt();
        }

        for(int i=1;i<=size;i++){
            arr[i] += arr[i-1]; 
        }

        int left = sc.nextInt();
        int right = sc.nextInt();

        int sum = arr[right] - arr[left-1];
        System.out.println(sum);

    }
}
