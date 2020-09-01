package stdin.and.stdoutI;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        /*
        Task
        In this challenge, you must read  integers from stdin and then print them to stdout.
        Each integer must be printed on a new line.
        */

        Scanner scanner = new Scanner(System.in);
        System.out.printf("Type an integer number: ");
        int a = scanner.nextInt();

        System.out.printf("Type an integer number: ");
        int b = scanner.nextInt();

        System.out.printf("Type an integer number: ");
        int c = scanner.nextInt();

        scanner.close();

        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
    }
}
