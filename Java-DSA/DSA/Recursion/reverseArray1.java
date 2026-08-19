
public class reverseArray1 {

    static int i = 0;

    static void swap(int[] arr, int i, int j) {

        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

    }

    static void reverse(int[] arr, int n, int m) {

        if (n >= m) {
            return;
        }

        swap(arr, n, m);
        reverse(arr, n + 1, m - 1);

    }

    static void reverseWithoutParameter(int[] arr) {
        int n = arr.length;

        if (i >= n / 2) {
            return;
        }

        swap(arr, i, n - i - 1);

        i++;

        reverseWithoutParameter(arr);
    }

    public static void main(String[] args) {

        int[] arr = {1, 2, 3, 4, 5};

        // reverse(arr, 0, arr.length - 1);
        reverseWithoutParameter(arr);
        for (int num : arr) {
            System.out.println(num);
        }

    }
}
