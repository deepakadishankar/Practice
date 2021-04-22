import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Stack;
public static void main(String[] args) {
        
}

public class Validparanthesis {

    public boolean isValid(String s)      {
        HashMap<Character,Character> maps=new HashMap<Character,Character>();
        maps.put(')','(');
        maps.put(']','[');
        maps.put('}','{');
        Stack<Character> stack=new Stack<Character>();
        for(int i=0;i<s.length();i++){
            char c=s.charAt(i);
            if(maps.containsKey(c)){
                if(stack.empty()||stack.pop()!=maps.get(c))return false;
            }
            else
                stack.push(c);
        }
        return stack.empty();
    }
}
