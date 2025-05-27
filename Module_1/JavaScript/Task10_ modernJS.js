function registerUser(name = "Guest", { eventName, seats }) {
  console.log(`${name} registered for ${eventName}`);
}

const event = { name: "Hackathon", date: "2025-07-20", seats: 50 };
const { name: eventName, date } = event;

const clonedEvents = [...[event]];
