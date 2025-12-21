
import java.util.*;

public class nextGreaterElement {

    private static int[] remove(int[] arr) {
        Stack<Integer> st = new Stack<>();
        int[] res = new int[arr.length];
        Queue<Integer> q = new LinkedList<>();

        // last element always has no greater to right
        res[arr.length - 1] = -1;
        st.push(arr[arr.length - 1]);

        for (int i = arr.length - 2; i >= 0; i--) {

            while (!st.isEmpty() && st.peek() <= arr[i]) {
                st.pop();
            }

            res[i] = st.isEmpty() ? -1 : st.peek();

            st.push(arr[i]);
        }

        return res;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 8, 3, 10, 8};
        int[] ans = remove(arr);
        System.out.println(Arrays.toString(ans));
    }
}
