document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM to be fully loaded

  // Get all elements with the class "card" and "video"
  var cardElements = document.querySelectorAll(".card");
  var videoElements = document.querySelectorAll(".video");

  // Iterate through each card element
  cardElements.forEach(function (cardElement, index) {
    // Add event listener for mouseover
    cardElement.addEventListener("mouseover", function () {
      // Play the corresponding video when mouseover occurs
      videoElements[index].play();
    });

    // Add event listener for mouseleave
    cardElement.addEventListener("mouseleave", function () {
      // Pause the corresponding video when mouseleave occurs
      videoElements[index].pause();
    });

    // Add event listener for click
    cardElement.addEventListener("click", function () {
      // Open the "video.html" page when clicked
      window.location.href = "video.html";
    });
  });
});

function updateCountdown() {
  // Get the current time
  var now = new Date();

  // Calculate the time remaining until midnight
  var midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0); // Set to midnight of the next day
  var timeRemaining = midnight - now;

  // Calculate hours, minutes, and seconds
  var hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Update the countdown text
  var countdownElement = document.getElementById("countdown");
  countdownElement.textContent =
    "En vivo en " +
    hours +
    " horas, " +
    minutes +
    " minutos, " +
    seconds +
    " segundos";

  // Update the countdown every second
  setTimeout(updateCountdown, 1000);
}

// Initial call to start the countdown
updateCountdown();

const imageContainer = document.querySelector(".image-container");
let currentIndex = 0;

function rotateImages() {
  currentIndex = (currentIndex + 1) % 3;
  const translateValue = -currentIndex * 100;
  imageContainer.style.transform = `translateX(${translateValue}%)`;
}

// Change the rotation interval (in milliseconds) as needed
const rotationInterval = setInterval(rotateImages, 3000);
