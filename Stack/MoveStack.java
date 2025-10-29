
import java.util.Stack;

public class MoveStack {

    public static Stack<Integer> copyStack(Stack<Integer> st) {

        Stack<Integer> st1 = new Stack<>();
        Stack<Integer> st2 = new Stack<>();

        while (st.size() != 0) {
            int last = st.pop();
            st1.push(last);
        }

        System.out.print("The stack reversed");
        System.out.println(st1);

        while (st1.size() != 0) {
            int last = st1.pop();
            st2.push(last);
        }

        return st2;

    }

    public static void main(String[] args) {
        // Scanner sc = new Scanner(System.in);
        Stack<Integer> st = new Stack<>();
        st.push(1);
        st.push(2);
        st.push(3);
        st.push(4);
        Stack<Integer> finalStack = copyStack(st);
        System.out.println(finalStack);

    }
}
