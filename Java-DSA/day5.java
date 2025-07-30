import java.util.*;

public class day5 {
    public static void main(String[] args) {
        
        int[] arr = {2,3,6,8,8,8,11,13};
        int key = 2;
        int first = -1;
        int last = -1;
        int count = 0;

        for(int i=0;i<arr.length;i++){
            if(arr[i]== key ){
                count ++;
                if(first==-1){
                    first = i;
                }
                last = i;
            }
        }
        if(first==0 && last==0){
            first=-1;
            last= -1;
        }
        System.out.println(first);
        System.out.println(last);
        System.out.println("Count: "+count);
    }
}
