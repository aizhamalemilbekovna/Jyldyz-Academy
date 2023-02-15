const missionButton = document.getElementById("mission");
const aboutButton = document.getElementById("about");
const goalButton = document.getElementById("goal");
const formButton = document.getElementById("form");

const missionPage = document.getElementById("mission-page");
const aboutPage = document.getElementById("about-page");
const goalPage = document.getElementById("goal-page");
const formPage = document.getElementById("form-page");

missionButton.addEventListener("click", function () {
  missionPage.style.display = "block";
  aboutPage.style.display = "none";
  goalPage.style.display = "none";
  formPage.style.display = "none";
});

aboutButton.addEventListener("click", function () {
  missionPage.style.display = "none";
  aboutPage.style.display = "block";
  goalPage.style.display = "none";
  formPage.style.display = "none";
});

goalButton.addEventListener("click", function () {
  missionPage.style.display = "none";
  aboutPage.style.display = "none";
  goalPage.style.display = "block";
  formPage.style.display = "none";
});

formButton.addEventListener("click", function () {
  missionPage.style.display = "none";
  aboutPage.style.display = "none";
  goalPage.style.display = "none";
  formPage.style.display = "block";
});
