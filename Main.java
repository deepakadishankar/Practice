class Main {

    public static void main(String[] args) {
  
      // create a string
      String name = "12345678";
      String name1= "1234578";
  
      System.out.println("Characters in string \"" + name + "\":");
  
      // loop through each element using for-each loop
      for(char c : name.toCharArray()) {
  
        // access each character
        System.out.print(c + ", ");
      }
      for(char b : name1.toCharArray()) {
  
        // access each character
        System.out.print(b + ", ");
      }
  
    }
}
  