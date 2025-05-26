const eventName = "Community Music Fest";
const eventDate = "2025-06-15";
let seatsAvailable = 50;

console.log(`Event: ${eventName}, Date: ${eventDate}, Seats: ${seatsAvailable}`);

function register() {
  if (seatsAvailable > 0) {
    seatsAvailable--;
    console.log(`Seats left: ${seatsAvailable}`);
  }
}
