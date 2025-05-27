public class SimpleClass {
    public void display() {
        System.out.println("Bytecode example");
    }
}

#javac SimpleClass.java
#javap -c SimpleClass
