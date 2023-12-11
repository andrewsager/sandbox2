/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?


let dayCost = 35;
let dayCounter = 0;
let dayButton = document.getElementsByTagName('.day-selector li');
let fullDayButton = document.getElementById('full');
let halfDayButton = document.getElementById('half');
let cancelButton = document.getElementById('clear-button');
let calcCost = document.getElementById('calculated-cost');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function ClickDayButton() {
    dayButton.classList.add('clicked');
    if (dayButton.classList.contains('clicked')) {
        dayCounter++;
            
    } else {
        dayButton.classList.remove('clicked');
        dayCounter--;
    }
    
    calculateCost();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays() {
    if (dayButton.classList.contains('clicked')){
        dayButton.classList.remove('clicked');
    }
    calcCost = 0;
    calculateCost();
}

cancelButton.addEventListener('click', clearDays);



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function HalfButton() {
    dayCost = 20;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    calculateCost();
}

halfDayButton.addEventListener('click', HalfButton);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function FullButton() {
    dayCost = 35;
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    calculateCost();
}

fullDayButton.addEventListener('click', FullButton);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateCost() {
    let totalCost = dayCost * dayCounter;
    calcCost.innerHTML = totalCost;
}

dayButton.addEventListener('click', ClickDayButton);