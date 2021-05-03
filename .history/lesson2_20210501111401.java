public class lesson2 {
    public static void main(String[] args) {
        
        System.out.println(addition(2,4));
        System.out.println(isequal(99,93123));
    }
    public static int addition(int num1,int num2) {
        return (num1+num2);
    }
    public static boolean isequal(int num1 ,int num2) {
        if (num1 == num2){
            return (true);
        }
        else return false;
        
    }
}
