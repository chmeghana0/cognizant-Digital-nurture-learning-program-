// Using Promises
fetch("https://mockapi.com/events")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Using async/await
async function loadEvents() {
  const loader = document.querySelector("#loader");
  loader.style.display = "block";
  try {
    const res = await fetch("https://mockapi.com/events");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  } finally {
    loader.style.display = "none";
  }
}
