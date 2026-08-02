public class EquilibriumEasy {
    public static void main(String[] args) {
        int[] arr = {1,2,0,3};
        int n = arr.length;

        int[] pref = new int[n];
        int[] suff = new int[n];

      
        pref[0] = arr[0];
        for (int i = 1; i < n; i++) {
            pref[i] = pref[i - 1] + arr[i];
        }

        
        suff[n - 1] = arr[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            suff[i] = arr[i] + suff[i + 1];
        }
 
        int equilibrium = -1;
        for (int i = 0; i < n; i++) {
            System.out.println(suff[i]+"->"+pref[i]);
            if (pref[i] == suff[i]) {
                equilibrium = i;
                break;  
            }
        }

        System.out.println("Equilibrium index -> " + equilibrium);
    }
}
