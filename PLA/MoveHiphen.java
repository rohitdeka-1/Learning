
import java.util.HashMap;

public class MoveHiphen {

    // public int strStr(String haystack, String needle) {
    //     int hayLen = haystack.length();
    //     int neeLen = needle.length();
    //     if (neeLen < hayLen) {
    //         return -1;
    //     }
    //     for(int i=0;i<hayLen-neeLen;i++){
    //     }
    //     return 0;
    // }
    public static boolean isAnagram(String s, String t) {
        HashMap<Character, Integer> map = new HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (map.containsKey(ch)) {
                map.put(ch, map.get(ch) + 1);
            } else {
                map.put(ch, 1);
            }
        }

        return false;
    }

    public static void main(String[] args) {
        String name = "Rohit_DEKA_IS_my_name";
        String s1 = "";
        String s2 = "";

        for (int i = 0; i < name.length(); i++) {
            if (name.charAt(i) == '_') {
                s1 = s1 + "_";
            } else {
                s2 = s2 + name.charAt(i);
            }
        }

        System.out.println(s1 + s2);

    }
}
