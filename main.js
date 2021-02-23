// NOTE this section is used to create and test different timer options. I will add in some options for editing a template for the banner
// NOTE the banner requires the following:
            
            // NOTE the banner must display at the top of the page with indication that a flash sale is happening
            // NOTE the banner must also display a timer counting down from 1 hour and update every second 
            // NOTE the banner should contain icons to give it some brand feel

// NOTE created function that runs a simple window alert every 5 seconds. This could be used to create time and clock to display for flash sale in banner
// function runTimer(){
//     window.alert("Hello User")
// }

// setInterval(runTimer, 5000)

// NOTE timer function that counts down from 1 hour

// NOTE first create the total amount of time to start at
var saleTime = 3600;
var seconds = saleTime;
function timer() {
  var days        = Math.floor(seconds/24/60/60);
  var hoursLeft   = Math.floor((seconds) - (days*86400));
  var hours       = Math.floor(hoursLeft/3600);
  var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
  var minutes     = Math.floor(minutesLeft/60);
  var remainingSeconds = seconds % 60;
  function pad(n) {
    return (n < 10 ? "0" + n : n);
  }

//   NOTE removed the timer slots for days since it will not be used
//   pad(days) + ":" + 
  
  document.getElementById('countdown').innerHTML = pad(hours) + ":" + pad(minutes) + ":" + pad(remainingSeconds);
  if (seconds == 0) {
    clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = "Completed";
  } else {
    seconds--;
  }
}
var countdownTimer = setInterval('timer()', 1000);