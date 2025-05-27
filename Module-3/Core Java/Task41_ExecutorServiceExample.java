import java.util.concurrent.*;
import java.util.*;

public class ExecutorServiceExample {
    public static void main(String[] args) throws InterruptedException, ExecutionException {
        ExecutorService executor = Executors.newFixedThreadPool(3);
        List<Callable<String>> tasks = Arrays.asList(
            () -> "Task 1 result",
            () -> "Task 2 result",
            () -> "Task 3 result"
        );

        List<Future<String>> results = executor.invokeAll(tasks);
        for (Future<String> future : results) {
            System.out.println(future.get());
        }

        executor.shutdown();
    }
}
