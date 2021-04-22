import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

public class makesquaredlist {
    public static void main(String[] args) {
        List<Integer> a = new ArrayList<>();
        List<Integer> b = new ArrayList<>();
        b.add(1);
        b.add(2);
        b.add(4);
        b.addAll(List.of(5, 6, 7));
        // boolean c = Collections.addAll(b, "Rahul", "OM", "Prem");
        System.out.println(b);
        // System.out.println(c);
        // System.out.println(b.get(0));
        // int input = 10;
        for (int i = 0; i < b.size(); i++) {
            a.add(b.get(i) * b.get(i));
            // System.out.println(i);
        }
        System.out.println(a);
    }
}
    