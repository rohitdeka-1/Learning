import java.util.Scanner;

public class frequencyArray {
    public static void main(String[] args) {
        int[] arr = {5,6,5,400,560,1000,400};
        Scanner sc = new Scanner(System.in);
        int key = sc.nextInt();  // find key
        int len = (int)Math.pow(10, 5);
        int[] freq = new int[len];

        for(int i=0;i<arr.length;i++){
            int val = arr[i];
            freq[val] += 1;  
        }

        if(freq[key]!=0){
            System.out.println("Yes"+" "+freq[key]);
        }
        else{
            System.out.println("No");
        }

        sc.close();
    }
}
