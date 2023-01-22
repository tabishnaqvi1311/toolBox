// clock app
let a;
let date;
let time;
let hours;
let ampm = 'AM';
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}  //create object with datatype of each parameter

setInterval(() => {     
    a = new Date(); //gets local date of user

    time = a.getHours() + ':' + (a.getMinutes() < 10 ? '0' : '') + a.getMinutes() + ':' + (a.getSeconds() < 10 ? '0' : '') + a.getSeconds();

    hours = a.getHours();    //gets local hours 

    if (hours >= 12) {    // checks if time is greater than noon then replaces AM with PM
        ampm = 'PM';
        hours = hours - 12;     //12 hour format
    }

    date = a.toLocaleDateString(undefined,options); //formats the date

    document.getElementById('time').innerHTML = time + " " + ampm
    document.getElementById('timeTitle').innerHTML = time;
    document.getElementById('date').innerHTML = date;

}, 1000);   //set interval function resets every 1000 milliseconds or 1 second

//counter app
let count = 0;
let defaultVal = 1;

function countPlus() {
    count = count + defaultVal;
    document.getElementById('display').innerHTML = count;
}

function countMinus() {
    count = count - defaultVal;
    document.getElementById('display').innerHTML = count;
}

function resetCount() {
    count = 0;
    defaultVal = 1;
    document.getElementById('display').innerHTML = count;
}

function setVal() {
    defaultVal = parseInt(document.getElementById('setValBox').value);
}

//caclulator

// document.getElementById("0️⃣") = 0
// document.getElementById("1️⃣") = 1
// document.getElementById("2️⃣") = 2
// // document.getElementById("0️⃣") = 3
countForCalc = 0;
const buttons = document.querySelectorAll('.n')
let inn = document.getElementById('innerCalc').innerHTML
sum = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        document.getElementById('innerCalc').innerHTML = this.innerHTML;
        function add() {
            sum = document.getElementById('innerCalc').innerHTML + document.getElementById('innerCalc').innerHTML
        }
    })
}


