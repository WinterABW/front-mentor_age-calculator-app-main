const dayIn = document.getElementById("day");
const monthIn = document.getElementById("month");
const yearIn = document.getElementById("year");
const days = document.getElementById("DD");
const years = document.getElementById("YY");
const months = document.getElementById("MM");

const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

const date = new Date();
let currentDay = date.getDate();
let currentMonth = 1+date.getMonth();
let currentYear = date.getFullYear();
let arrMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((input) => {
      const parent = input.parentElement;
      if (!input.value) {
        input.style.borderColor = "red";
        parent.querySelector("small").innerText = "this field is required.";
        validator = false;
      } else if (monthIn.value > 12) {
          monthIn.style.borderColor = "red";
          monthIn.parentElement.querySelector("small").innerText = "must be valid month.";
          validator = false;
      } else if (dayIn.value > 31) {
          dayIn.style.borderColor = "red";
          dayIn.parentElement.querySelector("small").innerText =
            "must be valid day.";
          validator = false;
      } else {
        input.style.borderColor = "black";
        parent.querySelector("small").innerText = "";
        validator = true;
      }
    });
    return validator;
  }



  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      if (dayIn.value > currentDay) {
        currentDay = currentDay + arrMonths[currentMonth - 1];
        currentMonth = currentMonth - 1;
      }
      if (monthIn.value > currentMonth) {
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
      }
  
      const d = currentDay - dayIn.value;
      const m = currentMonth - monthIn.value;
      const y = currentYear - yearIn.value;
  
      days.innerHTML = d;
      months.innerHTML = m;
      years.innerHTML = y;
    }
  }
  
  form.addEventListener("submit", handleSubmit);