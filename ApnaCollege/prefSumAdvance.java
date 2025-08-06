 
public class prefSumAdvance {
    public static void main(String[] args) {
        int[] arr = {2,1,3,4,5};

        for(int i=1;i<arr.length;i++){
            arr[i] = arr[i-1]+arr[i];
        }

        for(int i:arr){
            System.out.println(i);
        }
    }
}
