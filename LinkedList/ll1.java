
public class ll1 {

    public static class Node {

        int data;
        Node next;

        public Node(int data) {
            this.data = data;
        }

    }

    public static void main(String[] args) {

        Node a = new Node(5);
        Node b = new Node(6);
        Node c = new Node(13);
        Node d = new Node(20);
        Node e = new Node(25);

        //5->6->13
        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;

        // for (int i = 0; i <= 5; i++) {
        //     System.out.println(temp.data);
        //     temp = temp.next;
        // }
        // Node temp = a;
        // for (int i = 0; i < 5; i++) {
        //     System.out.println(temp.data);
        //     temp = temp.next;
        // }
        //Looping and Printing LinkedList
        // Node temp = a;
        // while (temp.next != null) {
        //     System.out.println(temp.data);
        //     temp = temp.next;
        // }
        //Recursively print ?
        count(a);
    }

    public static int count(Node head) {
        int count = 0;
        while (head != null) {
            count++;
            head = head.next;
        }

        return count;

    }

    // public static void display(Node head) {
    //     Node temp = head;
    //     while (temp != null) {
    //         System.out.println(temp.data);
    //         temp = temp.next;
    //     }
    // }
    // public static void display_recursively(Node head) {
    //     if (head == null) {
    //         return;
    //     }
    //     System.out.println(head.data);
    //     display_recursively(head.next);
    // }
}
