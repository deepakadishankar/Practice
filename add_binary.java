

public class add_binary {
    public static void name() { 
        String a = "10";
        String b = "11";
        var carryover = 0;
        String result = "";
        int maxLength = Math.max(a.length(), b.length());
        a = a.padStart(maxLength, "0");
        b = b.padStart(maxLength, "0");
        for (int index = maxLength - 1; index >= 0; index--) {
    
            String operand1 = a.get(index);
            String operand2 = b.get(index);
            
            int sum = Integer.parseInt(operand1) + Integer.parseInt(operand2) + carryOver;
            switch(sum) {
                case 3: {
                    carryOver = 1;
                    result = "1" + result;
                    break;
                } 
                case 2: {
                    carryOver = 1;
                    result = "0" + result;
                    break;
                }
                case 1: {
                    carryOver = 0;
                    result = "1" + result;
                    break;
                }
                case 0: {
                    carryOver = 0;
                    result = "0" + result;
                    break;
                }
            }
        }
       System.out.println(carryOver + result);
        
    }
    
}
