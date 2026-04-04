import java.nio.channels.Pipe.SourceChannel;
import java.util.Scanner;

public class Vanyacubes {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int input = sc.nextInt();
        int i = 1;
        int ans = 0;
        while(input>=(i*(i+1))/2){
            input -= (i*(i+1))/2;
            ans++;
            i++;
        }

        System.out.print(ans);
        sc.close();
    }
}
