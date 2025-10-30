
import java.util.Stack;

public class RemoveConseutiveSubsequences {

    public static Stack<Integer> remove(int[] arr) {
        Stack<Integer> st = new Stack<>();
        for (int i = 0; i < arr.length; i++) {
            if (!st.isEmpty() && st.peek() == arr[i]) {
                st.pop();
                i--;
            } else {
                st.push(arr[i]);
            }
        }

        return st;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3, 3, 3, 3, 4, 5, 6, 7, 7, 7, 8};

        Stack<Integer> res = remove(arr);

        System.out.println(res);

    }
}
