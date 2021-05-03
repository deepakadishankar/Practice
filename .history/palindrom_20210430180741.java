import java.util.*;
public class palindrom {
    public static void main(String[] args) {
        Integer input = -123321;
        String newInput = Integer.toString(input);
        int median = newInput.length()/2;
        String firstHalf = newInput.substring(0,median);
        String reverse = new StringBuffer(firstHalf).reverse().toString();
        String lastHalf = newInput.substring(newInput.length() - median);
        System.out.println(reverse);
        
        if (!newInput.startsWith("-")){
            System.out.println("no");
            if (reverse.equals(lastHalf)){
                System.out.println("yesss");
            }
            else System.out.println("no");
    
        }
        
        //else
        
        System.out.println(median);
        String firstHalf = newInput.substring(0,median);
        S
        }

    }
}
