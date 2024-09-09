function myFunction(x) {
    x.classList.toggle("change");

    var navBar = document.getElementById("nav-bar");
    if (navBar.style.display === "none" || navBar.style.display === "") {
      navBar.style.display = "flex";
    } else {
      navBar.style.display = "none";
    }
  }