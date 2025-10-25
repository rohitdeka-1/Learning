
public class printing {

    public static void recursion(int n, int m) {
        if (m == 0) {
            return;
        }
        System.out.println(n);
        recursion(n + 1, m - 1);
    }

    public static void back_recursion(int n) {
        if (n == 0) {
            return;
        }

        back_recursion(n - 1);
        System.out.println(n);

    }

    public static void main(String[] args) {
        // recursion(1, 10);
        back_recursion(10);
    }
}
