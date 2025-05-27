import java.lang.reflect.*;

public class ReflectionExample {
    public static void main(String[] args) {
        try {
            Class<?> clazz = Class.forName("Sample");
            Method[] methods = clazz.getDeclaredMethods();
            for (Method method : methods) {
                System.out.println("Method: " + method.getName());
            }

            Object obj = clazz.getDeclaredConstructor().newInstance();
            Method m = clazz.getMethod("sayHello");
            m.invoke(obj);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

class Sample {
    public void sayHello() {
        System.out.println("Hello from Sample class!");
    }
}
