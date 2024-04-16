/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let costPerDay = 35;
let fullDay = document.getElementById("full");
let halfDay = document.getElementById("half");
let dayCounter = 0;
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");
let clear = document.getElementById("clear-button");
let calculatedCost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function clickMonday() {
  if (!monday.classList.contains("clicked")) {
    monday.classList.add("clicked");
    dayCounter += 1;
  }
}
monday.addEventListener("click", function () {
  clickMonday();
  calculate();
});

function clickTuesday() {
  if (!tuesday.classList.contains("clicked")) {
    tuesday.classList.add("clicked");
    dayCounter += 1;
  }
}
tuesday.addEventListener("click", function () {
  clickTuesday();
  calculate();
});

function clickWednesday() {
  if (!wednesday.classList.contains("clicked")) {
    wednesday.classList.add("clicked");
    dayCounter += 1;
  }
}
wednesday.addEventListener("click", function () {
  clickWednesday();
  calculate();
});

function clickThursday() {
  if (!thursday.classList.contains("clicked")) {
    thursday.classList.add("clicked");
    dayCounter += 1;
  }
}
thursday.addEventListener("click", function () {
  clickThursday();
  calculate();
});

function clickFriday() {
  if (!friday.classList.contains("clicked")) {
    friday.classList.add("clicked");
    dayCounter += 1;
  }
}
friday.addEventListener("click", function () {
  clickFriday();
  calculate();
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays() {
  monday.classList.remove("clicked");
  tuesday.classList.remove("clicked");
  wednesday.classList.remove("clicked");
  thursday.classList.remove("clicked");
  friday.classList.remove("clicked");
  dayCounter = 0;
}
clear.addEventListener("click", function () {
  clearDays();
  calculate();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function changeToHalf() {
  costPerDay = 20;
  fullDay.classList.remove("clicked");
  halfDay.classList.add("clicked");
}

halfDay.addEventListener("click", function () {
  changeToHalf();
  calculate();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function changeToFull() {
  costPerDay = 35;
  fullDay.classList.add("clicked");
  halfDay.classList.remove("clicked");
}

fullDay.addEventListener("click", function () {
  changeToFull();
  calculate();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
  totalCost = dayCounter * costPerDay;
  calculatedCost.innerHTML = totalCost;
}
