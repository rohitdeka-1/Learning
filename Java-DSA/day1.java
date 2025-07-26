public class day1 {
    public static void main(String[] args) {
        
        int[] arr = {100,20,50,-140,10,200};

        int MAX = Integer.MIN_VALUE;
        int SecondMax = Integer.MIN_VALUE;


        for(int i:arr){
            if(i>MAX){
                MAX = i;
            }
        }

        for(int i:arr){
            if(i>SecondMax && i!=MAX){
                SecondMax = i;
            }
        }

        System.out.println(MAX);
        System.out.println(SecondMax);

    }
}
