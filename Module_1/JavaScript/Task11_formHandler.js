document.querySelector("#regForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const { name, email, event } = e.target.elements;

  if (!name.value || !email.value) {
    document.querySelector("#error").textContent = "All fields are required.";
    return;
  }

  console.log(`User: ${name.value}, Email: ${email.value}, Event: ${event.value}`);
});
