const searchInput = document.getElementById("search-input");
const searchInput1 = document.getElementById("search-input1");
const searchIcon = document.getElementById("search-icon");
const searchIcon1 = document.getElementById("search-icon1");

searchInput.addEventListener("input", () => {
  if (searchInput.value.length > 0) {
    // console.log(searchInput.value.length);
    searchIcon.classList.add("hidden-icon");
    searchIcon1.classList.add("hidden-icon");
  } else {
    searchIcon.classList.remove("hidden-icon");
    searchIcon1.classList.remove("hidden-icon");
  }
});