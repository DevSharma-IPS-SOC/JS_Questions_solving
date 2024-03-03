/* 
Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

let dayname;

// here we created an object where we provided all the Important data.
const options = {
  hour12: true,
  timeZone: "Asia/Kolkata",
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

// created an Array for WeekDays Names
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//created a variable for new date.
let today = new Date();

//fetching name of the day from the Array.
dayname = day[today.getDay()];

//Creating a Logging Sentence for Day of the Week.
let day_value = "Today is: "+day[today.getDay()] + ".";

//variable for time, fetching time from object.
let isNewFormat = new Intl.DateTimeFormat('en-US', options);

//Creating a Logging sentence for Time.
let time_value = "Current time is: " + isNewFormat.format(new Date(today));

//Logging the Sentences.
console.log(day_value);
console.log(time_value);
