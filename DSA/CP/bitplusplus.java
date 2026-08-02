import java.util.Scanner;

class bitplusplus{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int input = sc.nextInt();
        sc.nextLine(); 
        int val = 0;
        for(int i=0;i<input;i++){
            String command = sc.nextLine();
            if(command.contains("+")){
                val +=1;
            }else{
                val -= 1;
            }
        }
        System.out.println(val);
    }
}