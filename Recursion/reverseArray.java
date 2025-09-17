
public class reverseArray {

    private static void swap(int[] arr, int left, int right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }

    public static void reverse(int[] arr, int left, int right) {

        if (left >= right) {
            return;
        }
        swap(arr, left, right);
        reverse(arr, left + 1, right - 1);
    }

    public static void main(String[] args) {

        int[] arr = {1, 2, 3, 4};
        reverse(arr, 0, arr.length - 1);
        for (int num : arr) {
            System.out.println(num);
        }

    }
}
