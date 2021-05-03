import java.util.*;

public class palindrom {
    public static void main(String[] args) {
        Boolean flag = false;
        Integer input = 4123321;
        String newInput = Integer.toString(input);
        Integer median = newInput.length() / 2;
        String firstHalf = newInput.substring(0, median);
        String reverse = new StringBuffer(firstHalf).reverse().toString();
        String lastHalf = newInput.substring(newInput.length() - median);
        if (!newInput.startsWith("-")) {
            if (reverse.equals(lastHalf)) {
              flag = true;
            }

        }
        System.out.println(flag);
    }
}
