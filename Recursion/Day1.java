
public class Day1 {

    // public static void recur(int x) {
    //     if (x > 15) {
    //         return;
    //     }
    //     System.out.println(x);
    //     // Recursive call
    //     recur(x + 1);
    // }
    public static void repeat(int n, String s) {

        if (n < 1) {
            return;
        }
        System.out.println(s);
        System.out.println(n);
        repeat(n - 1, s);

    }

    public static void backtrackRepeat(int n, String s) {

        if (n < 1) {
            return;
        }

        backtrackRepeat(n - 1, s);

        System.out.println(s);
        System.out.println(n);

    }

    public static void main(String[] args) {
        // repeat(10, "Rohit");
        backtrackRepeat(10, "Rohit");
    }
}
