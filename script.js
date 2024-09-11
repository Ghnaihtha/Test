function myFunction(x) {
  x.classList.toggle("change");

  var navBar = document.getElementById("nav-bar");
  var tasksButton = document.querySelector(".tasks");

  if (navBar.style.display === "none" || navBar.style.display === "") {
      navBar.style.display = "flex";
      tasksButton.style.display = "none"; // Hide TASKS button
  } else {
      navBar.style.display = "none";
      tasksButton.style.display = "inline-block"; // Show TASKS button
  }
}
function coincollect() {
   
  var coinElement = document.getElementById("coin");
  var currentCoins = parseInt(coinElement.innerText, 10);
  var newCoins = currentCoins + 1;
  coinElement.innerText = newCoins;
  console.log(newCoins);
}