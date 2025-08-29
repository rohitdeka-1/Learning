import java.util.Scanner;

public class reverseString {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String name = sc.next();
        char[] arr = name.toCharArray();
        // "122" -> "221"
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            char temp;
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }

        for (char ch : arr) {
            System.out.print(ch);
        }

    }

}
