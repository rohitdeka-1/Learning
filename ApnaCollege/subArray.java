public class subArray {
    public static void main(String[] args) {
        int[] arr = {2,4,6,8};
        int max = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;
        for(int i=0;i<arr.length;i++){
            for(int j=i;j<arr.length;j++){
                int total = 0;
                for(int k=i;k<=j;k++){
                    total += arr[k];
                    max = Math.max(max,total);
                    min = Math.min(min, total);
                    System.out.print(arr[k]+" ");
                }
                System.out.println("Sum: "+ total);
            }
            System.out.println("");
        }

        System.out.println("MAXIMUM SUB ARRAY SUM: "+ max );
         System.out.println("MAXIMUM SUB ARRAY SUM: "+ min );
    }    
}
