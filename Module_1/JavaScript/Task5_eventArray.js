let events = [];

events.push({ name: "Dance Show", category: "Music", date: "2025-06-05" });

const musicEvents = events.filter(e => e.category === "Music");

const displayCards = events.map(e => `Event: ${e.name}`);
console.log(displayCards);
