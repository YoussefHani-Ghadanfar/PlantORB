function handleSearch() {
    const input = document.getElementById("vinInput").value.trim().toLowerCase().replace(/[-\s]/g, "");

    if (input === "sunflower") {
        window.location.href = "sunflower.html";
    } else {
        alert("Sorry, we couldn't find that plant.");
    }
}

document.getElementById("vinInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        handleSearch();
    }
});

document.getElementById("searchBtn").addEventListener("click", handleSearch);

