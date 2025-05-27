// Simulating com.utils package
class StringUtil {
    public static String toUpper(String input) {
        return input.toUpperCase();
    }
}

// Simulating com.greetings package
public class ModuleSimulation {
    public static void main(String[] args) {
        String message = "hello from pseudo module";
        System.out.println(StringUtil.toUpper(message));
    }
}
