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
count = 0

function countPlus() {
    count = count + 1;
    document.getElementById('display').innerHTML = count;
}

function resetCount() {
    count = 0;
    document.getElementById('display').innerHTML = count;
}