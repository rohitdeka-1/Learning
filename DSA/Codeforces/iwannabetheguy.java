import java.util.HashSet;
import java.util.Scanner;

class iwannabetheguy{

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int maxRounds = sc.nextInt();
        HashSet<Integer> hs = new HashSet<>(); 
        

        int p = sc.nextInt();
        for(int i=0;i<p;i++){
            hs.add(sc.nextInt());
        }
        
        int q = sc.nextInt();
        for(int i=0;i<q;i++){
            hs.add(sc.nextInt());
        }

        if(hs.size()==maxRounds){
            System.out.println("I become the guy.");
        }else{
            System.out.println("Oh, my keyboard!");
        }

    }

}