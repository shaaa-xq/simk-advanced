const dropdown = document.getElementById("penumpang");

dropdown.addEventListener("click", function () {
  const content = document.querySelector(".dropdown-4");
  content.classList.toggle("show-dropdown");
  content.classList.toggle("hide-dropdown");
});

// function showDropdown() {}

// flatpickr
// flatpickr("#calendar", {});
