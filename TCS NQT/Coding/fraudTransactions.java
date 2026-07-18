import java.util.Scanner;

public class fraudTransactions {

    //Sliding Window

    


    //Brute Force

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int input = sc.nextInt();

        String[] senders = new String[input];
        String[] receiver = new String[input];
        int[] amount = new int[input];
        int[] timestamp = new int[input];

        int[] frauds = new int[input];

        for (int i = 0; i < input; i++) {
            senders[i] = sc.next();
            receiver[i] = sc.next();
            amount[i] = sc.nextInt();
            timestamp[i] = sc.nextInt();
            frauds[i] = 0;
        }

        for(int i=0;i<input;i++){

            for(int j= i + 1;j<input;j++){

                if(senders[i].equals(senders[j]) && receiver[i].equals(receiver[j]) && amount[i]==amount[j] && Math.abs(timestamp[i] -timestamp[j])<=60){
                    frauds[i] = 1;
                    frauds[j] = 1;
                }

            }

        }

        for (int i = 0; i < frauds.length; i++) {
            System.out.println(frauds[i]);
        }

    }

}
