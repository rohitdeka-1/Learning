
import java.util.ArrayList;

 
public class BFS {

    public static class Node{
        int val;
        Node left;
        Node right;

        public Node(int val){
            this.val = val;
        }
    
    }


    public static int height(Node root){
        if(root == null) return 0;
        ArrayList<ArrayList<Integer>> arr = new ArrayList<>();
        if(root.left == null && root.right == null){
            return 0;
        }

        int left_height = height(root.left);
        int right_height = height(root.right);

        return 1 + (Math.max(left_height,right_height));

    }


    static ArrayList<ArrayList<Integer>> arr = new ArrayList<>();
    
    //Concept Nth Level printing
    //do preorder traversal and then reduce value of n
    public static void printNthLevel(Node root,int n){

        if(root == null) return;
        
        if(n == 1) {
            arr.get(lvl).add(root.val);
            return;
        }

        printNthLevel(root.left, n-1);
        printNthLevel(root.right, n-1);
    }

    
    public static void main(String[] args){
        Node root = new Node(1);
        Node a = new Node(2);
        Node b = new Node(3);
        root.left = a;
        root.right = b;
        Node c = new Node(4);
        Node d = new Node(5 );
        a.left = c;
        a.right = d;
        Node e = new Node(6);
        b.right = e;
        
        //height
        int h = height(root);

        //nth Level Printing
        for(int i=0;i<h;i++){
            printNthLevel(root, h);
        }
        
        System.out.println(arr);

    }

}
