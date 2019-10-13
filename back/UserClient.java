public class UserClient {

    public static void main(String[] args) {
        User personOne = new User("Jack", "jacklee7@uw.edu");
        personOne.printTakenList();
        
        System.out.println(personOne.hasTaken("CSE142"));
    }
}