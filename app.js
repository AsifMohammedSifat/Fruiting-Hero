const searchInput = document.getElementById("search-input");
const searchInput1 = document.getElementById("search-input-dropdown");
const searchIcon = document.getElementById("search-icon");
const searchIcon1 = document.getElementById("search-icon-dropdown");

searchInput.addEventListener("input", () => {
  if (searchInput.value.length > 0) {
    // console.log(searchInput.value.length);
    searchIcon.classList.add("hidden-icon");
    searchIcon1.classList.add("hidden-icon");
  } else {
    // console.log("none");
    searchIcon.classList.remove("hidden-icon");
    searchIcon1.classList.remove("hidden-icon");
  }
});

// for dropdown search input 
searchInput1.addEventListener("input", () => {
  if (searchInput1.value.length > 0) {
    // console.log(searchInput1.value.length);
    searchIcon1.classList.add("hidden-icon");
    searchIcon1.classList.add("hidden-icon");
  } else {
    console.log("none");
    searchIcon1.classList.remove("hidden-icon");
    searchIcon1.classList.remove("hidden-icon");
  }
});

// countdown 

  // Set the date we're counting down to
  var countDownDate = new Date("Jul 15, 2024 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="days", "hours", "minutes", "seconds"
    document.getElementById("days").style.setProperty("--value", days);
    document.getElementById("hours").style.setProperty("--value", hours);
    document.getElementById("minutes").style.setProperty("--value", minutes);
    document.getElementById("seconds").style.setProperty("--value", seconds);

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").style.setProperty("--value", 0);
      document.getElementById("hours").style.setProperty("--value", 0);
      document.getElementById("minutes").style.setProperty("--value", 0);
      document.getElementById("seconds").style.setProperty("--value", 0);
    }
  }, 1000);