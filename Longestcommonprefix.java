import java.util.List;
import java.util.function.Function;
import java.util.ArrayList;

public class Longestcommonprefix {
    public static void main(String[] args) {
        List<String> a = new ArrayList<String>();
        List<String> b = new ArrayList<String>();

        a.add("poda");
        a.add("poya");
        a.add("ponga");

        System.out.println("the Input list is " + a);
        System.out.println("First word in the list is " + a.get(0));
        // System.out.println(a.get(0));
        // System.out.println(a.get(1));
        char ch = a.get(0).charAt(0);
        // char ch1= a.get(1).charAt(1);
        System.out.println("First letter of first word is " + ch);
        // System.out.println(ch1);
        System.out.println("Size of Input List is " + a.size());
        String s = "";

        for (int i = 0; i < 4; i++) {
            System.out.println("*I* Iterration number " + i);
            char c = a.get(0).charAt(i);

            System.out.println(">>>>>>" + c);
            for (int j = 1; j < a.size(); j++) {
                System.out.println("*J* Iterration number " + j);
                char chx = a.get(j).charAt(i);
                if (chx == c) {
                    System.out.println(chx + " is compared with " + c);
                    s = Character.toString(c);
                    b.add(s);
                    System.out.println("The Common is " + s);
                    System.out.println("The Common is final" + b);
                } else
                    System.out.println("NO");
                break;
            }
        }

        System.out.println("The Common is " + b);

    }
}
