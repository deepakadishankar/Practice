public class Fibonacci {
    public static void main(String[] args) {
        int i, j, k, s = 100;
        i = 0;
        j = 1;
        k = 0;
        while (true) {
            k = i + j;
            i = j;
            j = k;
            if (k > s) {
                break;
            }
            System.out.println(k);

        }
    }
}
