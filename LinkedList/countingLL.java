
class countingLL {

    public static class Node {

        int data;
        Node next;

        public Node(int data) {
            this.data = data;

        }

    }

    public static int count(Node head) {
        int count = 0;

        while (head != null) {
            count++;
            head = head.next;
        }

        return count;

    }

    public static void main(String[] args) {

        Node a = new Node(2);
        Node b = new Node(10);
        Node c = new Node(20);
        a.next = b;
        b.next = c;

        int ans = count(a);
        System.out.println(ans);

    }

}
