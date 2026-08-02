
public class implementations {

    public static class Node {

        int data;
        Node next;

        public Node(int data) {
            this.data = data;

        }
    }

    public static class LinkedList {

        Node head = null;
        Node tail = null;

        void insertAtEnd(int val) {
            Node temp = new Node(val);

            if (head == null) {  // for empty list
                head = temp;
                tail = temp;
            } else {
                tail.next = temp;
                tail = temp;
            }
        }

        void insertAtHead(int val) {
            Node temp = new Node(val);

            if (head == null) { // empty list
                head = temp;
                tail = temp;
            } else {
                temp.next = head;
                head = temp;
            }

        }

        void display() {
            Node temp = head;
            while (temp != null) {
                System.out.println(temp.data);
                temp = temp.next;
            }
        }

        int size() {
            Node temp = head;
            int count = 0;
            while (temp != null) {
                count++;
                temp = temp.next;
            }
            return count;
        }

        void insertAt(int idx, int val) {
            Node t = new Node(val);
            Node temp = head;
            for (int i = 1; i <= idx - 1; i++) {
                temp = temp.next;
            }

            t.next = temp.next;
            temp.next = t;
        }

        int getElementAt(int idx) {
            Node temp = head;

            for (int i = 1; i <= idx; i++) {
                temp = temp.next;
            }

            return temp.data;

        }

        void removeElement(int idx) {
            Node temp = head;

            if (idx == 0) {
                head.next = head.next.next;
            }

            for (int i = 1; i <= idx - 1; i++) {
                temp = temp.next;
            }

            temp.next = temp.next.next;
            if (idx == size() - 1) {
                tail = temp;
            }
        }

    }

    public static void main(String[] args) {
        LinkedList ll = new LinkedList();
        ll.insertAtEnd(20);
        ll.insertAtEnd(30);
        ll.insertAtEnd(40);
        ll.insertAtEnd(50);

        ll.display();
        System.out.println("-------------------");

        ll.removeElement(1);
        ll.removeElement(2);

        ll.display();
    }
}
