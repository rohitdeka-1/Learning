

public class lengthOfLastWord {
    public static void main(String[] args) {
        String s = "   fly me   to   the moon  ";
        String[] arr = s.split(" ");
        int ans = 0;
        for(int i =arr.length-1;i>arr.length-2;i--){
            String[] newArr = arr[i].split("");
            ans = newArr.length;
        }

        System.out.println(ans);

    }
}
