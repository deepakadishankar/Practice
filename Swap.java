public class Swap {
    public static void main(String[] agrs) {

        int price1 = 4, price2 = 5; //temp;
        //temp = price1;
        //price1 = price2;
        //price2 = temp;
        //temp = 0;
        price1=price1+price2;
        price2=price1-price2;
        price1=price1-price2;
        System.out.println("" + price1 + price2);

    }
}
