
public class deleteZero {

    public static class Node {

        int val;
        Node left;
        Node right;

        public Node(int val) {
            this.val = val;
        }

    }

    public static Node deleteZeroChild(Node root, int key){
        if(root == null){
            return root;
        } 
        if(root.val>key){
            if(root.left.val == key){
                root.left = null;
            } else{
                deleteZeroChild(root.left, key);
            }
        } else{
            if(root.right.val == key){
                root.right = null;
            } else{
                deleteZeroChild(root.right,key);
            }
        }
        return root;
    }

    public static void inorder(Node root) {
        if (root == null) return;
        inorder(root.left);
        System.out.print(root.val + " ");
        inorder(root.right);
    }

    public static void main(String[] args) {
        // BST with leaf nodes (zero children): 1, 4, 7, 13
        Node root = new Node(8);
        root.left = new Node(3);
        root.right = new Node(10);
        root.left.left = new Node(1);       // zero children
        root.left.right = new Node(6);
        root.left.right.left = new Node(4); // zero children
        root.left.right.right = new Node(7); // zero children
        root.right.right = new Node(14);
        root.right.right.left = new Node(13); // zero children

        System.out.print("Before delete: ");
        inorder(root);
        System.out.println();

        // Delete leaf node 4 (has zero children)
        root = deleteZeroChild(root, 4);

        System.out.print("After delete:  ");
        inorder(root);
        System.out.println();
    }
}
