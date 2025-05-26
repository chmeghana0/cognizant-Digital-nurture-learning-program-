let allEvents = [];

function addEvent(name, category, date, seats) {
  allEvents.push({ name, category, date, seats });
}

function registerUser(eventName) {
  let event = allEvents.find(e => e.name === eventName);
  if (event && event.seats > 0) {
    event.seats--;
  }
}

function filterEventsByCategory(category) {
  return allEvents.filter(e => e.category === category);
}

// Closure example
function categoryTracker(category) {
  let count = 0;
  return function () {
    count++;
    console.log(`Registrations for ${category}: ${count}`);
  };
}

// Higher-order function
function dynamicFilter(events, callback) {
  return events.filter(callback);
}
