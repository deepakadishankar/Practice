public class palindrom {
    public static void main(String[] args) {
        Integer input = 121212;
        String newInput = Integer.toString(input);
        int median = newInput.length()/2;
        System.out.println(median);
        String first = newInput.substring(0,median);
        System.out.println(first);
        System.out.println(newInput.substring(newInput.length() - median));

    }
}
