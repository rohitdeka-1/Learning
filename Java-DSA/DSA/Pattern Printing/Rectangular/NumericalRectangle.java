public class NumericalRectangle {
    public static void main(String[] args) {
        int n = 7;

        for (int i = 0; i < n; i++) {
            int k = i;
            for (int j = 0; j < n; j++) {
                System.out.print((k % n) + 1 + " ");
                k++;
            }
            System.out.println();
        }
    }
}
