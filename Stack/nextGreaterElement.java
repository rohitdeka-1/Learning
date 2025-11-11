
import java.util.*;

public class nextGreaterElement {

    private static int[] remove(int[] arr) {
        Stack<Integer> st = new Stack<>();
        int[] res = new int[arr.length];
        st.push(arr[arr.length - 1]);
        res[arr.length - 1] = -1;
        for (int i = arr.length; i >= 0; i--) {
            if (arr[i] < st.peek()) {
                res[i] = st.peek();
                st.push(arr[i]);
            }
        }

        return res;
    }

    public static void main(String[] args) {
        int[] arr = {1, 3, 2, 1, 8, 6, 3, 4};

        int[] ans = remove(arr);
        System.out.println(ans);
    }
}
