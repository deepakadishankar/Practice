public class palindrom {
    public static void main(String[] args) {
        Integer input = 121212;
        String newInput = Integer.toString(input);
        int median = newInput.length()/2;
        System.out.println(median);
        String firstHalf = newInput.substring(0,median);
        System.out.println(first);
        String lastHalf = newInput.substring(newInput.length() - median);
        System.out.println(newInput.substring(newInput.length() - median));

    }
}
