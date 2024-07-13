window.addEventListener(`contextmenu`, (e) => {
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
    let years = targetDate.getFullYear() - birthdate.getFullYear();
    let months = targetDate.getMonth() - birthdate.getMonth();
    let days = targetDate.getDate() - birthdate.getDate();
  
    if (days < 0) {
      months--;
      days += new Date(targetDate.getFullYear(), targetDate.getMonth(), 0).getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    return { years, months, days };
  }
  
  function displayAge(age) {
    const ageResultElement = document.getElementById("age-result");
    if (age.years >= 0) {
      ageResultElement.innerText = `You are ${age.years} years ${age.months} months and ${age.days} days old.`;
    } else {
      ageResultElement.innerText = "Please enter a valid date.";
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
  