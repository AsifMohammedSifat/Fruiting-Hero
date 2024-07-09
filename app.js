const searchInput = document.getElementById("search-input");
const searchIcon = document.getElementById("search-icon");

searchInput.addEventListener("input", () => {
  if (searchInput.value.length > 0) {
    // console.log(searchInput.value.length);
    searchIcon.classList.add("hidden-icon");
  } else {
    searchIcon.classList.remove("hidden-icon");
  }
});