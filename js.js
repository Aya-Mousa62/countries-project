function goToDetails() {
    window.location.href = "details.html";
};

const filter = document.getElementById("regionFilter");
const countries = document.querySelectorAll(".Countries div");

filter.addEventListener("change", function() {

  const selectedRegion = filter.value;

  countries.forEach(function(country) {

    const region = country.dataset.region;

    if (selectedRegion === "all" || region === selectedRegion) {
      country.style.display = "block";
    } else {
      country.style.display = "none";
    }

  });

});

const button = document.getElementById("darkModeToggle");

button.addEventListener("click", function(){
  document.body.classList.toggle("dark");
});


document.addEventListener("DOMContentLoaded", function() {

  const countries = document.querySelectorAll(".Countries div");
  const searchBox = document.getElementById("searchInput");

  searchBox.addEventListener("input", function() {
    const query = searchBox.value.toLowerCase();

    countries.forEach(function(country) {
      const name = country.querySelector("h2").textContent.toLowerCase();

      if(name.includes(query)) {
        country.style.display = "block";
      } else {
        country.style.display = "none";
      }
    });
  });

});



