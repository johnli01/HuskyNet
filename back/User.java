import java.util.*;

public class User {

    private Scanner console;
    private Set<String> taken;
    private Set<String> taking;
    
    public User() {
        console = new Scanner(System.in);
        taken = new TreeSet<>();
        taking = new TreeSet<>();
        System.out.println("Enter classes you've taken?");
        fill(taken, pastPrompt);
        String currentPrompt = "Enter classes you're taking?");
        fill(taking, currentPrompt);
    }
     
    private void fill(Set<String> data, String prompt) {
        boolean done = false;
        while (!done) {
            System.out.println(prompt);
            String course = console.nextLine();
            data.add(course);
            System.out.println("Is that all? If so, please type the number 1. Otherwise, type any other number.");
            int checkNum = console.nextInt();
            if (checkNum == 1) {
                done = true;
            }
        }
    }
    
    // Prints out what courses are taken
    public void printTakenList() {
         System.out.println(taken);
    }
    
    // Prints out what courses are being taken
    public void printTakingList() {
         System.out.println(taking);
    }
    
    // Finds to see if personTwo has TAKEN classes personOne is TAKING
    public Set<String> compare(Set<String> personOne, Set<String> personTwo) {
         Set<String> similarCourses = new TreeSet<String>();
         return similarCourses;
    }
    
    public boolean hasTaken(String course) {
         return taken.contains(course);
    }
}