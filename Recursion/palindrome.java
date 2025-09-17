
public class palindrome {

    private static boolean palindrome(int i, String name) {
        int len = name.length();
        if (i >= len / 2) {
            return true;
        }
        if (name.charAt(i) != name.charAt(len - i - 1)) {
            return false;
        }
        return palindrome(i + 1, name);

    }

    public static void main(String[] args) {
        String s1 = "madam";
        String s2 = "hello";
        System.out.println(s1 + " is palindrome? " + palindrome(0, s1));
        System.out.println(s2 + " is palindrome? " + palindrome(0, s2));
    }
}
