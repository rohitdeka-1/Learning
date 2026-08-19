public class cielAndFloor {
    
    static class Node{
        Node left;
        Node right;
        int val;

        public Node(int val){
            this.val = val;
        }

    }

    public static void main(String[] args) {
        Node a = new Node(1);
        Node b = new Node(2);
        a.left=null;
        a.right=b;
    }
    
}
