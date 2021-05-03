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
        fiber.cruiseSpeed = 122;
        fiber.fuelBurnRate = 17;
        fiber.fuelCapacity = 56;
    }
}
class aircarft{
    int passenger;
    int cruiseSpeed;
    double fuelCapacity;
    double fuelBurnRate;
}