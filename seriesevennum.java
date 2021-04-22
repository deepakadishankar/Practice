import java.util.ArrayList;
import java.util.List;

public class seriesevennum {
    public static void main(String[] args) {
        List<Integer> a = new ArrayList<>();
        int input = 10;
        for (int i = 1; i <= input; i++) {
            if (i % 2 == 0) {
                a.add(i);
                // System.out.println("+i);
                // System.out.println(a);

            }
        }
        int sum = 0;
        for (int j = 0; j < a.size(); j++) {
            sum += a.get(j);

        }
        System.out.println("num of even numbers less than " + input + " is " + a.size());
        System.out.println("sum of those " + a.size() + " is " + sum);
    }
}