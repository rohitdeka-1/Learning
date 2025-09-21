
public class sumNnumbers {

    

    public static int factorial(int num) {
        if (num == 1) {
            return 1;
        }

        return num * factorial(num - 1);

    }

    public static int functional(int num) {

        if (num == 0) {
            return 0;
        }
        return num + functional((num - 1));
    }

    public static void firstNSum(int num, int sum) {

        //** paramaterized
        // if (x >= n) {
        //     return;
        // }
        // System.out.println(x);
        // firstNSum(x + 1, n);
        if (num < 1) {
            System.out.println(sum);
            return;
        }

        firstNSum(num - 1, sum + num);

    }

    public static void main(String[] args) {
        int x = factorial(5);
        System.out.println(x);
    }

}
