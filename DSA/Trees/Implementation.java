 
public class Implementation {
    
    public static class Node{
        int val;//0
        Node left; //null
        Node right; //null

        public Node(int val) {
            this.val = val;

        }
    }

    public static void display(Node root){

        if(root == null) return;

        System.out.print(root.val + " -> ");
        if(root.left != null)  System.out.println(root.left.val + " " );
        if(root.right != null) System.out.println(root.right.val);

        display(root.left);
        display(root.right);

    }

    public static void preOrder(Node root){
        if(root == null) return;

        System.out.println(root.val);
        preOrder(root.left);
        preOrder(root.right);
    }

    public static int size_nodes(Node root){
        if(root == null){
            return 0;
        }

        return size_nodes(root.left) + size_nodes(root.right) + 1;

    }

    public static int sum_tree(Node root){
        if(root == null) return  0;

        return sum_tree(root.left) + sum_tree(root.right) + root.val;
    }

    public static 
    
    public static void main(String[] args){
        Node root = new Node(2);
        Node a = new Node(4);
        Node b = new Node(10);
        root.left = a;
        root.right = b;

        Node c = new Node(6);
        Node d = new Node(5 );
        a.left = c;
        a.right = d;

        Node e = new Node(11);
        b.right = e;
        
        // preOrder(root);
        int num = size_nodes(root);
        System.out.println(num);

        int sum = sum_tree(root);
        System.out.println(sum);
    }

}
