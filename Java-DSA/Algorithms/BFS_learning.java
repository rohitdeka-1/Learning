import java.util.ArrayList;
import java.util.List;

public class BFS_learning {

    //Kahns Algorigthm

    public static void main(String[] args) {

        int[][] edges = {
                { 0, 1 },
                { 0, 2 },
                { 1, 3 },
                { 2, 3 }
        };
        //Rohit

        // 0 → [1, 2]
        // 1 → [0, 3]
        // 2 → [0, 3]
        // 3 → [1, 2]
        int n = edges.length;
        List<List<Integer>> l = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            l.add(new ArrayList<>());
        }

        // adj[0] → []
        // adj[1] → []
        // adj[2] → []
        // adj[3] → []

        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];

            l.get(v).add(u);
            l.get(u).add(v);

        }

        for (List<Integer> arr : l) {
            for (int num : arr) {
                System.out.print(num);
            }
            System.out.println(" ");
        }

    }
}