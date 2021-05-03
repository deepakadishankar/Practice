import java.util.*;
public class palindrom {
    public static void main(String[] args) {
        Integer input = 123321;
        String newInput = Integer.toString(input);
        int median = newInput.length()/2;
        System.out.println(median);
        String firstHalf = newInput.substring(0,median);
        System.out.println(firstHalf);
       // System.out.println(StringFormatter.reverseString("my name is khan"));
       String reverse = new StringBuffer(firstHalf).reverse().toString();
        System.out.println(reverse);
        String lastHalf = newInput.substring(newInput.length() - median);
        System.out.println(lastHalf);
        if (true){
            System.out.println("yesss");
        }

    }
}
