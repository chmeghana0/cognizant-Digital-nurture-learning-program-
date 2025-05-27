import java.io.*;
import java.net.*;

public class TCPChatSimulated {
    public static void main(String[] args) throws Exception {
        // Start server in a thread
        new Thread(() -> {
            try (ServerSocket server = new ServerSocket(5000)) {
                Socket client = server.accept();
                BufferedReader in = new BufferedReader(new InputStreamReader(client.getInputStream()));
                PrintWriter out = new PrintWriter(client.getOutputStream(), true);

                String line;
                while ((line = in.readLine()) != null) {
                    System.out.println("Client: " + line);
                    out.println("Server received: " + line);
                    if (line.equalsIgnoreCase("exit")) break;
                }

                client.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }).start();

        // Wait for server to start
        Thread.sleep(500);

        // Simulate client
        try (Socket socket = new Socket("localhost", 5000)) {
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));

            out.println("Hello Server");
            System.out.println(in.readLine());
            out.println("exit");
        }
    }
}
