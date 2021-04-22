public class Oddoreven {
        public static void main(String[] args) {
            List<Integer> list = new ArrayList<Integer>();
        list.add(1);
        list.add(3);
        System.out.println("ArrayList : " + list.toString());
           

        int a = 2;
        if (a % 2 == 0) {
            System.out.println("a is even number");
        } else {
            System.out.println("a is odd number");
        }
    }
}
