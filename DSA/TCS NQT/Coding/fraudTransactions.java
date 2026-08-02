
import java.util.Scanner;

public class fraudTransactions {

    //Sliding Window
    // public static void main(String[] args) {

    //     Scanner sc = new Scanner(System.in);
    //     int input = sc.nextInt();   

    //     String[] sender = new String[input];
    //     String[] receiver = new String[input];
    //     int[] amount = new int[input];
    //     int[] timestamp = new int[input];

    //     int[] frauds = new int[input];

    //     HashMap<String, ArrayList<Integer>> map = new HashMap<>();

    //     for (int i = 0; i < input; i++) {

    //         sender[i] = sc.next();
    //         receiver[i] = sc.next();
    //         amount[i] = sc.nextInt();
    //         timestamp[i] = sc.nextInt();

    //         String key = sender[i] + "#" + receiver[i] + "#" + amount[i];

    //         map.putIfAbsent(key, new ArrayList<>());
    //         map.get(key).add(i);
    //     }

    //     for (ArrayList<Integer> list : map.values()) {

    //         Collections.sort(list, (a, b)
    //                 -> Integer.compare(timestamp[a], timestamp[b]));

    //         int left = 0;

    //         for (int right = 0; right < list.size(); right++) {

    //             while (timestamp[list.get(right)] - timestamp[list.get(left)] > 60) {
    //                 left++;
    //             }

    //             // Window is valid
    //         }
    //     }

    //     //sliding window
    //     // int left = 0;
    //     // for (int right = 0; right < n; right++) {
    //     //     while (condition_is_false) {
    //     //         left++;
    //     //     }
    //     //     // use current window
    //     // }
    // }

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

        for (int i = 0; i < input; i++) {

            for (int j = i + 1; j < input; j++) {

                if (senders[i].equals(senders[j]) && receiver[i].equals(receiver[j]) && amount[i] == amount[j] && Math.abs(timestamp[i] - timestamp[j]) <= 60) {
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
