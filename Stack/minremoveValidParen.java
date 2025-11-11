
import java.util.Stack;

public class minremoveValidParen {

    static public int remove(String s) {

        Stack<Character> st = new Stack<>();
        int count = 0;

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (ch == '(' || ch == '{' || ch == '[') {
                st.push(ch);
            } else if (ch == ')' || ch == '}' || ch == ']') {
                if (st.isEmpty()) {
                    count++;
                } else {
                    char top = st.pop();
                    if ((ch == ')' && top != '(') || (ch == '}' && top != '{') || (ch == ']' && top != '[')) {
                        count++;
                    }
                }

            }
            System.out.println();
        }

        return st.size() + count;
    }

    public static void main(String[] args) {

        String name = "(((())))))";
        int ans = remove(name);
        System.out.println(ans);

    }
}
