
public class sumOfDigits {

    public static int sum(int num) {

        if (num == 0) {
            return 0;
        }

        return sum(num / 10) + num % 10;

    }

    public static void main(String[] args) {
        int num = 12341;
        int ans = sum(num);
        System.out.println(ans);
    }
}
