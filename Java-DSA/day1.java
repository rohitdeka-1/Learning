
public class day1 {

    public static String change(String title) {

        String[] arr = title.split(" ");

        for (int i = 0; i < arr.length; i++) {
            char ch = Character.toUpperCase(arr[i].charAt(0));

            String rest = "";
            for (int j = 1; j < arr[i].length(); j++) {
                if (Character.isUpperCase(arr[i].charAt(j))) {
                    rest += Character.toLowerCase(arr[i].charAt(j));
                } else {
                    rest += arr[i].charAt(j);
                }
            }

            arr[i] = ch + rest;

        }

        return String.join(" ", arr);

    }

    // public static String change(String s) {
    //     String[] arr = s.split(" ");
    //     for (int i = 0; i < arr.length; i++) {
    //         char ch = Character.toUpperCase(arr[i].charAt(0));
    //         String rest = arr[i].substring(1);
    //         arr[i] = ch + rest;
    //     }
    //     return String.join(" ", arr);
    // }
    public static void main(String[] args) {

        // int[] arr = {100,20,50,-140,10,200};
        // int MAX = Integer.MIN_VALUE;
        // int SecondMax = Integer.MIN_VALUE;
        // for(int i:arr){
        //     if(i>MAX){
        //         MAX = i;
        //     }
        // }
        // for(int i:arr){
        //     if(i>SecondMax && i!=MAX){
        //         SecondMax = i;
        //     }
        // }
        // System.out.println(MAX);
        // System.out.println(SecondMax);
        String name = "capiTalIze tHe titLe";
        String ans = change(name);
        System.out.println(ans);

    }
}
