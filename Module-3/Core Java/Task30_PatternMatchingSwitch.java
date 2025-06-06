public class PatternMatchingSwitch {
    public static void identifyType(Object obj) {
        switch (obj) {
            case Integer i -> System.out.println("Integer: " + i);
            case String s -> System.out.println("String: " + s);
            case Double d -> System.out.println("Double: " + d);
            case null -> System.out.println("Null object");
            default -> System.out.println("Unknown type");
        }
    }

    public static void main(String[] args) {
        identifyType(42);
        identifyType("Hello");
        identifyType(3.14);
        identifyType(null);
    }
}
