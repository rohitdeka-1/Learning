public class pairs {
    public static void main(String[] args) {
        
        int[] arr = {1,3,5};
        int total = 0;
        for(int i=0;i<arr.length;i++){
            for(int j=i+1;j<arr.length;j++){
                System.out.print(arr[i]+","+arr[j]+" ");
                total++;
            }
            System.out.println(" ");
        }
        System.out.println("Total "+total);

        // total = n(n-1)/2
    }
}
