/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){
  let hourString = timeString.split(':')[0];
  let hourInteger = parseInt(hourString);
  if (hourInteger < 12 ){
    return "Good Morning";
  } else if (hourInteger >= 12 && hourInteger < 18){
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(msg){
  document.getElementById('greeting').textContent = msg;
}
