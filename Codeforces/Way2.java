import java.util.Scanner;
public class Way2 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        sc.nextLine();
        StringBuilder[] lst=new StringBuilder[n];
        for(int i=0;i<n;i++){
            String s=sc.nextLine();
            StringBuilder str=new StringBuilder();
            if(s.length()<11){
                str.append(s);
                lst[i]=str;
            }else{
                
                str.insert(0,s.charAt(0));
                str.append((s.length()-2));
                str.insert(3,s.charAt(s.length()-1));
                lst[i]=str;
            }
        }
        for(int i=0;i<lst.length;i++){
            System.out.println(lst[i]);
        }
    }
    
}