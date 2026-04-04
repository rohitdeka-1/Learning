
public class countNumberOfZeroes {

    public static int zeroes(int num) {

        if (num == 0) {
            return 0;
        }

        int x = num % 10;

        return zeroes(num);
    }

    public static int countZeroes(int nums) {
        System.out.println("Count zeroes");

        if (nums == 1) {
            return 0;
        }
        return 1;

    }

    public static void main(String[] args) {

    }
}
