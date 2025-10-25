
public class reverseArray1 {

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

    public static void main(String[] args) {

        int[] arr = {1, 2, 3, 4, 5};

        reverse(arr, 0, arr.length - 1);

        for (int num : arr) {
            System.out.println(num);
        }

    }
}
