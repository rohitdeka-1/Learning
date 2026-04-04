import java.util.Scanner;

public class beautifulMatrix {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            int[][] arr = new int[5][5];
            int ith = -1;
            int jth = -1;
            
            for(int i=0;i<5;i++){
                for(int j=0;j<5;j++){
                    arr[i][j] = sc.nextInt();
                }
            }
            
            for(int i=0;i<5;i++){
                for(int j=0;j<5;j++){
                    if(arr[i][j]==1){
                        ith = i;
                        jth = j;
                    }     
                }
            }
            
            int moves = Math.abs(ith-2) + Math.abs(jth-2);
            System.out.println(moves);
        }
    }
}
 