package stdin.and.stdoutII;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        /*
        In this challenge, you must read an integer,
        a double, and a String from stdin,
        then print the values according to the instructions
        in the Output Format section below.
         */

        Scanner scanner = new Scanner(System.in);
        System.out.printf("Type an integer number: ");
        int i = scanner.nextInt();


        System.out.printf("Type a float number: ");
        double d = scanner.nextDouble();

        scanner.nextLine();
        System.out.printf("Type a string: ");
        String s = scanner.nextLine();

        scanner.close();

        System.out.println("String: " + s);
        System.out.println("Double: " + d);
        System.out.println("Int: " + i);
    }
}
