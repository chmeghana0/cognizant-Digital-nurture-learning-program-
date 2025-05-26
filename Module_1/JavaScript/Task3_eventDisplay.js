const events = [
  { name: "Yoga Day", date: "2025-05-30", seats: 0 },
  { name: "Tech Meetup", date: "2025-06-10", seats: 25 },
  { name: "Art Exhibition", date: "2025-05-25", seats: 10 }
];

events.forEach(event => {
  const today = new Date().toISOString().split("T")[0];
  if (event.date >= today && event.seats > 0) {
    console.log(`Upcoming: ${event.name}`);
  }
});

function registerEvent(eventName) {
  try {
    let event = events.find(e => e.name === eventName);
    if (event && event.seats > 0) {
      event.seats--;
      console.log(`Registered for ${event.name}. Seats left: ${event.seats}`);
    } else {
      throw new Error("Event full or not found.");
    }
  } catch (error) {
    console.error(error.message);
  }
}
