 
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

    public static int height_tree(Node root){

        if(root == null) return 0;
        if(root.left == null && root.right == null ) return 0;
        int left_height = height_tree(root.left);
        int right_height = height_tree(root.right);

        return 1 + Math.max(left_height,right_height);
        
    }

    public static int max_value(Node root){

        if(root == null){
            return Integer.MIN_VALUE;
        }

        int leftMax =  max_value(root.left);
        int rightMax = max_value(root.right);

        return Math.max(root.val, Math.max(leftMax,rightMax) );
         
    }
    

    static int minimumInTree(Node root){

        if(root == null) return Integer.MAX_VALUE;

        int leftMin = minimumInTree(root.left);
        int rightMin = minimumInTree(root.right);

        return Math.min(root.val, Math.min(leftMin,rightMin));

    }

    static int productOfTree(Node root){

        if(root == null) return 1;

        int leftProd = productOfTree(root.left);
        int rightProd = productOfTree(root.right);

        return ((leftProd * rightProd) * root.val );


    }


    public static void main(String[] args){
        Node root = new Node(1);
        Node a = new Node(2);
        Node b = new Node(3);
        root.left = a;
        root.right = b;

        Node c = new Node(1);
        Node d = new Node(1 );
        a.left = c;
        a.right = d;

        Node e = new Node(1);
        b.right = e;
        
        // preOrder(root);
        int num = size_nodes(root);
        System.out.println(num);

        int sum = sum_tree(root);
        System.out.println(sum);

        int maxi = max_value(root);
        System.out.println(maxi);

        int height = height_tree(root);
        System.out.println(height);
        
        int minVal = minimumInTree(root);
        System.out.println(minVal);

        int prod = productOfTree(root);
        System.out.println("product" + prod);

    }

}
