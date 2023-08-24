let btn = document.querySelector(".button");
let allInputs = document.querySelectorAll("input");
let dayInput = document.querySelector(".day");
let daysoutput = document.querySelector(".daysoutput");
let dayError = document.querySelector(".dayError");
let monthInput = document.querySelector(".month");
let monthsoutput = document.querySelector(".monthsoutput");
let monthError = document.querySelector(".monthError");
let yearInput = document.querySelector(".year");
let yearError = document.querySelector(".yearError");
let yearsoutput = document.querySelector(".yearsoutput");
let textColor = document.querySelectorAll(".inputFields .ErrorCollor");

let dayInputValid = false;
let monthInputValid = false;
let yearInputValid = false;

let date = new Date();

for (let i = 0; i < allInputs.length; i++) {
  allInputs[i].addEventListener("input", () => {
    // year check
    if (yearInput.value == "") {
      yearError.innerHTML = "This fiels is required";
      yearInputValid = false;
    } else if (isNaN(parseInt(yearInput.value))) {
      yearError.innerHTML = "Invalid input! It must be a number.";
      yearInputValid = false;
    } else {
      if (yearInput.value <= 0 || yearInput.value > date.getFullYear()) {
        yearError.innerHTML = "Must be in the past";
        yearInputValid = false;
      } else {
        yearError.innerHTML = "";
        yearInputValid = true;
      }
    }

    // month check
    if (monthInput.value == "") {
      monthError.innerHTML = "This fiels is required";
      monthInputValid = false;
    } else if (isNaN(parseInt(monthInput.value))) {
      monthError.innerHTML = "Invalid input! It must be a number.";
      monthInputValid = false;
    } else {
      if (monthInput.value <= 0 || monthInput.value > 12) {
        monthError.innerHTML = "Must be a valid month";
        monthInputValid = false;
      } else {
        monthError.innerHTML = "";
        monthInputValid = true;
      }
    }
    // Day check
    if (dayInput.value == "") {
      dayError.innerHTML = "This fiels is required";
      dayInputValid = false;
    } else if (isNaN(parseInt(dayInput.value))) {
      dayError.innerHTML = "Invalid input! It must be a number.";
      dayInputValid = false;
    } else {
      if (
        dayInput.value <= 0 ||
        dayInput.value > 31 ||
        ((monthInput.value == "2" || monthInput.value == "02") &&
          dayInput.value > 28) ||
        ((monthInput.value == "4" ||
          monthInput.value == "04" ||
          monthInput.value == "6" ||
          monthInput.value == "06" ||
          monthInput.value == "9" ||
          monthInput.value == "09" ||
          monthInput.value == "11") &&
          dayInput.value > 30)
      ) {
        dayError.innerHTML = "Must be a valid day";
        dayInputValid = false;
      } else {
        dayError.innerHTML = "";
        dayInputValid = true;
      }
    }
  });
}
btn.addEventListener("click", () => {
  if (dayInputValid && monthInputValid && yearInputValid) {
    // Set original colors of element
    for (let i = 0; i < allInputs.length; i++) {
      allInputs[i].classList.remove("ErrorCollorInput");
      textColor[i].classList.remove("ErrorCollorText");
    }
    let birthDate =
      yearInput.value + "-" + monthInput.value + "-" + dayInput.value;
    let BirthDate = new Date(birthDate);
    let differenceInMilliseconds = date.getTime() - BirthDate.getTime();

    // Convert the number of milliseconds to years, months, and days.
    let ageInYears = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
    );
    let remainingMilliseconds =
      differenceInMilliseconds % (1000 * 60 * 60 * 24 * 365.25);
    let ageInMonth = Math.floor(
      remainingMilliseconds / (1000 * 60 * 60 * 24 * (365.25 / 12))
    );
    let remainingMaandenMilliseconden =
      remainingMilliseconds % (1000 * 60 * 60 * 24 * (365.25 / 12));
    let ageInDays = Math.floor(
      remainingMaandenMilliseconden / (1000 * 60 * 60 * 24)
    );
    daysoutput.innerHTML = `${ageInDays} `;
    monthsoutput.innerHTML = `${ageInMonth} `;
    yearsoutput.innerHTML = `${ageInYears} `;
  } else {
    if (
      dayInput.value == "" &&
      monthInput.value == "" &&
      yearInput.value == ""
    ) {
      dayError.innerHTML = "This fiels is required";
      monthError.innerHTML = "This fiels is required";
      yearError.innerHTML = "This fiels is required";
    }
    //Change colors of element
    for (let i = 0; i < allInputs.length; i++) {
      allInputs[i].classList.add("ErrorCollorInput");
      textColor[i].classList.add("ErrorCollorText");
    }
  }
});
