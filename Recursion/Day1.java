
public class Day1 {

    public static void recur(int x) {
        // ✅ Base case (to stop recursion)
        if (x > 15) {
            return;
        }

        System.out.println(x);

        // Recursive call
        recur(x + 1);
    }

    public static void main(String[] args) {
        recur(10);
    }
}
