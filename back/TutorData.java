import java.util.*;

public class TutorData {

    private Set<Map<User, User>> overall;

    public TutorData() {
        //scrape firebase
        overall = new TreeSet<>();
        /*for (each person) {
        for (each class the person is tutoring someone in) {
        for (all the people this person is tutoring) {
        map.add(tutor, tutee);
        }}
        */ 
    }
}