public class TypeCastingExample {
    public static void main(String[] args) {
        double d = 9.78;
        int i = (int) d; // cast double to int
        int j = 5;
        double dj = j; // cast int to double

        System.out.println("Original double: " + d);
        System.out.println("After casting to int: " + i);
        System.out.println("Original int: " + j);
        System.out.println("After casting to double: " + dj);
    }
}
