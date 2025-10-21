
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
        //5->6->13

        a.next = b;
        b.next = c;

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
        display(a);
    }

    public static void display(Node head) {
        Node temp = head;
        while (temp != null) {
            System.out.println(temp.data);
            temp = temp.next;
        }
    }

}
