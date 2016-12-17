/*************************************************************************
	> File Name: DogTestDrive.java
	> Author: 
	> Mail: 
	> Created Time: Sat Dec 17 22:52:14 2016
 ************************************************************************/
class Dog {
    int size;
    String breed;
    String name;

    void bark () {
        System.out.println("Ruff!");
    }
}

public class DogTestDrive
{
    public static void main (String[] args) {
        Dog d = new Dog();
        d.size = 40;
        d.bark();
    }
}
