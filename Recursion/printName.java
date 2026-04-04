
public class printName {

    public static void linearly(int x, int n) {

        if (x > n) {
            return;
        }
        System.out.println(x);
        linearly(x + 1, n);
    }

    public static void printNTimes(int n, String name) {
        if (n < 1) {
            return;
        }
        System.out.println(name);

        printNTimes(n - 1, name);
    }

    public static void main(String[] args) {
        // printNTimes(3, "Rohit");
        linearly(1, 10);
    }
}
