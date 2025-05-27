document.querySelectorAll(".register-btn").forEach(btn => {
  btn.onclick = () => {
    alert("Registered!");
  };
});

document.querySelector("#categoryFilter").onchange = function(e) {
  console.log(`Filtered by: ${e.target.value}`);
};

document.querySelector("#searchBox").addEventListener("keydown", function(e) {
  console.log(`Searching for: ${e.key}`);
});
