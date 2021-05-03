public class lesson2 {
    public static void main(String[] args) {
        int num1,num2;
        num1 = 32;
        num2 = 32;
        System.out.println(addition(num1,num2));
        System.out.println(isequal(num1,num2));
        System.out.println(stringLength("piusfoadif"));
        System.out.println(stringReverse("vaadaA"));
    }
    public static int addition(int num1,int num2) {
        return (num1+num2);
    }
    public static int name() {
        
    }
    public static boolean isequal(int num1 ,int num2) {
        if (num1 == num2){
            return (true);
        }
        else return false;
        
    }
    public static int stringLength(String a) {
        return (a.length());
    }
    public static String stringReverse(String a) {
        String reverse = new StringBuffer(a).reverse().toString();
        return reverse;
    }
}
