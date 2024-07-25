window.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

document.getElementById("calculate-age").addEventListener("click", function () {
  const birthdate = document.getElementById("birthdate").value;
  const ageAtDate = document.getElementById("age-at-date").value;

  if (birthdate && ageAtDate) {
    const age = calculateAge(new Date(birthdate), new Date(ageAtDate));
    displayAge(age);
  } else {
    displayAge("Please enter both dates.");
  }
});

function calculateAge(birthdate, targetDate) {
  const diff = targetDate - birthdate;
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { years, months, days, hours, minutes, seconds };
}

function displayAge(age) {
  const ageResultElement = document.getElementById("age-result");
  if (age.years >= 0) {
    ageResultElement.innerText = `You are ${age.years} years, ${age.months} months, ${age.days} days, ${age.hours} hours, ${age.minutes} minutes, and ${age.seconds} seconds old.`;
  } else {
    ageResultElement.innerText = "Invalid Date, please enter a valid date.";
  }

  // GSAP animation
  gsap.fromTo(
    ageResultElement,
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 1 }
  );
}

document.getElementById("toggle-mode").addEventListener("change", function () {
  document.body.classList.toggle("dark-mode", this.checked);
});

document.getElementById("aboutButton").addEventListener("click", function () {
  window.open("https://github.com/matrSid", "_blank");
});