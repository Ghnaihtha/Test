function myFunction(x) {
  x.classList.toggle("change");

  var navBar = document.getElementById("nav-bar");
  var tasksButtons = document.querySelectorAll(".navout"); // Select all elements with .navout class

  if (navBar.style.display === "none" || navBar.style.display === "") {
      navBar.style.display = "flex";

      // Hide all .navout elements (TASKS and Withdraw buttons)
      tasksButtons.forEach(function(button) {
          button.style.display = "none";
      });

  } else {
      navBar.style.display = "none";

      // Show all .navout elements (TASKS and Withdraw buttons)
      tasksButtons.forEach(function(button) {
          button.style.display = "inline-block";
      });
  }
}

function coincollect() {
   
  var coinElement = document.getElementById("coin");
  var currentCoins = parseInt(coinElement.innerText, 10);
  var newCoins = currentCoins + 1;
  coinElement.innerText = newCoins;
  console.log(newCoins);
}