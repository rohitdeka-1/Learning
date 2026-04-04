
import java.util.Stack;

public class InsertAtPosition {

    public static void insert(Stack<Integer> st, int pos, int val) {

        Stack<Integer> temp = new Stack<>();

        if (pos > st.size()) {
            System.out.println("Out of bound");
            return;
        }

        while (st.size() > pos) {
            int last = st.pop();
            temp.push(last);
        }

        st.push(val);

        while (!temp.empty()) {
            st.push(temp.pop());
        }

    }

    public static void main(String[] args) {
        Stack<Integer> st = new Stack<>();
        st.push(1);
        st.push(2);
        st.push(3);
        st.push(4);

        System.out.println("Before insertion: " + st);
        insert(st, 2, 200);
        System.out.println("After insertion: " + st);

    }
}
