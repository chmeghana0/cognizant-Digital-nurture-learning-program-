function submitRegistration(data) {
  setTimeout(() => {
    fetch("https://mockapi.com/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(response => console.log("Success:", response))
      .catch(err => console.error("Error:", err));
  }, 2000);
}
