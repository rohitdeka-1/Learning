import java.util.Scanner;

public class dominoPiling {
    
    //Given a rectangular board
        // M * N
    //2 X 1 Squares
    
    //Input -> two integers M and N (1<=M<=N<=16)

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        int n = sc.nextInt();

        int area = m * n;

        int number_of_domino = area/2;
        System.out.println(number_of_domino);

    }

}
