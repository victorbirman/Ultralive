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


    const count001h = document.querySelector (".count001h")
    const count001m = document.querySelector (".count001m")
    const count001s = document.querySelector (".count001s")

    count001h.textContent = hours
    count001m.textContent = minutes
    count001s.textContent = seconds



// Calculate the time remaining until tomorrow noon
var tomorrowNoon = new Date(now);
tomorrowNoon.setDate(tomorrowNoon.getDate() + 1); // Set to tomorrow
tomorrowNoon.setHours(12, 0, 0, 0); // Set to noon
var timeRemainingNoon = tomorrowNoon - now;

// Calculate hours, minutes, and seconds
var hours2 = Math.floor(timeRemainingNoon / (1000 * 60 * 60));
var minutes2 = Math.floor((timeRemainingNoon % (1000 * 60 * 60)) / (1000 * 60));
var seconds2 = Math.floor((timeRemainingNoon % (1000 * 60)) / 1000);

const count002h = document.querySelector(".count002h")
const count002m = document.querySelector(".count002m")
const count002s = document.querySelector(".count002s")

count002h.textContent = hours2
count002m.textContent = minutes2
count002s.textContent = seconds2








// Calculate the time remaining until tomorrow 17:30
var tomorrow1730 = new Date(now);
tomorrow1730.setDate(tomorrow1730.getDate() + 1); // Set to tomorrow
tomorrow1730.setHours(17, 30, 0, 0); // Set to 17:30
var timeRemaining1730 = tomorrow1730 - now;

// Calculate hours, minutes, and seconds
var hours3 = Math.floor(timeRemaining1730 / (1000 * 60 * 60));
var minutes3 = Math.floor((timeRemaining1730 % (1000 * 60 * 60)) / (1000 * 60));
var seconds3 = Math.floor((timeRemaining1730 % (1000 * 60)) / 1000);

    
const count003h = document.querySelector (".count003h")
const count003m = document.querySelector (".count003m")
const count003s = document.querySelector (".count003s")

count003h.textContent = hours3
count003m.textContent = minutes3
count003s.textContent = seconds3

  // Update the countdown every second
  setTimeout(updateCountdown, 1000);
}

// Initial call to start the countdown
updateCountdown();

const imageContainer = document.querySelector(".image-container");
let currentIndex = 0;

function rotateImages() {
  currentIndex = (currentIndex + 1) % 2;
  const translateValue = -currentIndex * 100;
  imageContainer.style.transform = `translateX(${translateValue}%)`;
}

// Change the rotation interval (in milliseconds) as needed
const rotationInterval = setInterval(rotateImages, 2500);
