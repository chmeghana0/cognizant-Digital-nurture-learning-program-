function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function() {
  return this.seats > 0;
};

const myEvent = new Event("Science Fair", "2025-07-01", 30);
console.log(myEvent.checkAvailability());

console.log(Object.entries(myEvent));
