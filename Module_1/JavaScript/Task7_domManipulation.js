const eventList = document.querySelector("#eventList");

function renderEvent(event) {
  const card = document.createElement("div");
  card.textContent = `${event.name} - ${event.date}`;
  eventList.appendChild(card);
}

function updateUIOnRegister(eventName) {
  console.log(`${eventName} registration updated`);
}
