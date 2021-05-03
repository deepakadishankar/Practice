public class lesson4 {
    public static void main(String[] args) {
        int var1 = 5;
        int var2 = 7;
        
        aircarft cesna172 = new aircarft();
        cesna172.passenger = 4;
        cesna172.cruiseSpeed = 92;
        cesna172.fuelBurnRate = 12;
        cesna172.fuelCapacity = 43;

        aircarft fiber = new aircarft();
        fiber.passenger = 4;
        fiber.cruiseSpeed = 92;
        fiber.fuelBurnRate = 12;
        fiber.fuelCapacity = 43;
    }
}
class aircarft{
    int passenger;
    int cruiseSpeed;
    double fuelCapacity;
    double fuelBurnRate;
}