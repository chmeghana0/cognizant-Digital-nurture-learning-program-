document.querySelector("#debugForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  try {
    const name = e.target.name.value;
    console.log("Name captured:", name);

    const res = await fetch("https://mockapi.com/submit", {
      method: "POST",
      body: JSON.stringify({ name })
    });

    const data = await res.json();
    console.log("Server Response:", data);
  } catch (error) {
    console.error("Submission error:", error);
  }
});
